# ExtJs 5

## 2. New Architecture

    MVC
    1) M(model) : M stand for datas, Model data will be saved by store and View class refer to store
    2) V(view) : Component without logic
    3) C(controller) : Controller stand for class that control a view
    4) VM(view model) : VM is class that manage a data
    

###  Data binding

    Data will be changed, View data also change

* 01_DataBind.html
~~~html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>SAT</title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>
      
 
        <!-- The test harness -->
</head>
<body>
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'ext5': '/app' 
        }
    });
    Ext.require([
        'ext5.view.chapter8.DataBind'
    ]);

    Ext.onReady(function () {   
        Ext.create('ext6.view.chapter8.DataBind', {   
            renderTo: document.body    
        });
    });

    Ext.define('ext5.view.chapter8.DataBind',{
        extend: 'Ext.panel.Panel',
        alias : 'widget.chapter8-databind',
        width: 500,
        bodyPadding: 10,
        viewModel:{//1
            data:{ //2
                title:'Hello world',
                html :'The html content',
                buttonText: 'Abutton'
            }
        },
        bind:{//3
            title : '{title}',
            html:'{html}'
        },
        tbar:[{ //4
            bind:'{buttonText}'
        }]
    });

</script>
</body>
</html>

~~~

~~~java
    1. To config view model
    2. Define datas
    3. binding to data
~~~

* view
![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/datagrid.png) 

### View model

    To improve a source code

* 01 DataBind.html
~~~html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>SAT</title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>
 
        <!-- The test harness -->
</head>
<body>
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'ext5': '/app'  // #1
        }
    });
    Ext.require([
        'ext5.view.chapter8.DataBind' // #2
    ]);

    Ext.onReady(function () {   // #3
        Ext.create('ext5.view.chapter8.DataBind', {   // #4
            renderTo: document.body    // #5
        });
    });


</script>
</body>
</html>

~~~

* DataBind.js
~~~javascript
 Ext.define('ext5.view.chapter8.DataBind',{
        extend: 'Ext.panel.Panel',
        alias : 'widget.chapter8-databind',
        requires:['ext5.view.chapter8.DataBindModel'],
        width: 500,
        bodyPadding: 10,
        viewModel:'chapter8-databind',
        bind:{
            title : '{title}',
            html:'{html}'
        },
        tbar:[{ 
            bind:'{buttonText}'
        }]
    });
~~~

* DataBindModel.js


    ViewModel class will handle the data


~~~javascript

Ext.define('ext5.view.chapter8.DataBindModel',{
   extend:'Ext.app.ViewModel', //1
    alias:'viewmodel.chapter8-databind',//2
    data:{//3
        title : 'Hello World',
        html:'The html content',
        buttonText : 'A button'
    }
});

~~~

* view
![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/datagrid.png) 

### View Controller
    

    - View controller have a 1 : 1 relationship 
    - View and View controller is connected each other by listeners and reference

#### View Controller by listener
* DataBind.js

~~~javascript
/**
 * Created by Administrator on 2016-07-20.
 */
Ext.define('ext5.view.chapter8.DataBind',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.chapter8-databind',
    requires:[
        'ext5.view.chapter8.DataBindModel',
        'ext5.view.chapter8.DataBindController'


    ],
    width: 500,
    bodyPadding: 10,
    viewModel:'chapter8-databind',
    controller : 'chapter8-databind',
    bind:{//3
        title : '{title}',
        html:'{html}'
    },
    tbar:[{ //4
        bind:'{buttonText}',
        handler : 'onClickButton'
    }]
});
~~~

* DataBindController.js
~~~javascript
/**
 * Created by Administrator on 2016-07-20.
 */

Ext.define('ext5.view.chapter8.DataBindController',{
   extend:'Ext.app.ViewController',
    requires:[
        'Ext.window.MessageBox'
    ],
    alias:'controller-chapter8-databind',
    onClickButton : function () { //1
        Ext.Msg.confirm('conFirm','Are you sure?','onConfirm',this); //2
    },
    onConfirm: function(choice){ //3
        if(choice == 'yes'){
            
        }
    }
});
~~~
    
~~~java
    1. View class call the method by listener
~~~

* view
![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/controllerconfirm.png) 

#### View Controller by reference

* DataBind.js
~~~javascript
/**
 * Created by Administrator on 2016-07-20.
 */
Ext.define('ext5.view.chapter8.DataBind',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.chapter8-databind',
    requires:[
        'ext5.view.chapter8.DataBindModel',
        'ext5.view.chapter8.DataBindController'


    ],
    width: 500,
    bodyPadding: 10,
    viewModel:'chapter8-databind',
    controller : 'chapter8-databind',
    items:[{
       padding: '5 5 5 5',
        xtype:'panel', //1
        height:50,
        reference : 'datapanel',//2
        bind:{
            title:'{name}'//3
        }
    }],
    bind:{
        title : '{title}',
        html:'{html}'
    },
    tbar:[{ 
        bind:'{buttonText}',
        handler : 'onClickButton'
    }]
});
~~~

~~~java
    1. children object is panel
    2. reference is a datapanel
    3. To set a title of Panel object
~~~

* DataBindController.js

~~~javascript
/**
 * Created by Administrator on 2016-07-20.
 */

Ext.define('ext5.view.chapter8.DataBindController',{
   extend:'Ext.app.ViewController',
    requires:[
        'Ext.window.MessageBox'
    ],
    alias:'controller.chapter8-databind',
    onClickButton : function () {
        Ext.Msg.confirm('conFirm','Are you sure?','onConfirm',this);
    },
    onConfirm: function(choice){ //3
        if(choice == 'yes'){
            var mypanel = this.getView().down('panel'); //1
            var mypanel = this.lookupReference('datapanel');//2
            var mypanel = this.getReferences().datapanel;//3
            mypanel.setTitle('access to reference'); //4

            this.getViewModel().set('name','Hello');//5

        }
    }
});
~~~

~~~java
    1. this.getView() means View that is used by controller
    2. previous code, referenc name is datapanel
    3. It will return same result as 2
~~~

* view
![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/controllerrefer.png)


### Router

    - Router can track a status of browser by using history stack
    - ExtJs is a single page application, so when new page will be loaded, it won't be executed
    - Router can handle this problem 

#### URI Hash?

~~~java
    
    Browser use a URI to explore Internet
    
    Example
        - http://myurl.com/mypage/admins#userid/0710
        - Hash : #userid/0710
        - Hash won't be forwarded to server, just stack on a browser 
~~~

#### Default Hash config

* application.js
~~~javascript
/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ext6.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ext6',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    //Hash config
    defaultToken : 'root',
    init:function(){
        this.setDefaultToken('root');
    },
    
});

~~~

~~~java
    This code will add a #root to URI 
~~~

#### Implementation of routing

    Routing class is Ext.util.History
    Router config must be contained in controller(view or contoller)

* app/controller/Route.js
~~~javascript
/**
 * Created by Administrator on 2016-07-21.
 */
Ext.define('ext5.controller.Route',{
   extend:'Ext.app.Controller',
    alias:'controller.route',
    
    config:{
        routes:{
            'user' : 'findUser'
        }
    },
    findUser : function(){
        this.redirectTo('user/1234');
        console.log('recognize hash');
    }
});

* app/application.js

~~~javascript
/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ext5.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ext5',

    controllers:[
        'Route'
    ],

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

~~~

## 3. MVVM, MVVC

* 4_Ticket.html
~~~html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>SAT</title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>
 
        <!-- The test harness -->
</head>
<body>
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'ext5': '/app'  // #1
        }
    });
    Ext.require([
        'ext5.view.chapter8.ticket.Main' // #2
    ]);

    Ext.onReady(function () {   // #3
        Ext.create('ext5.view.chapter8.ticket.Main', {   // #4
            renderTo: document.body    // #5
        });
    });

</script>
</body>
</html>

~~~

* Main.js
~~~javascript
/**
 * Created by Administrator on 2016-07-21.
 */
Ext.define('ext5.view.chapter8.ticket.Main',{
   extend:Ext.container.Container,
    alias:'widget.chapter8-ticketmain',
    width:500,
    requires:['ext5.view.chapter8.ticket.login.Login'],
    otherContent:[
        { //1
            xtype:'Login',
            path:'app/view/chapter8/ticket/login/Login.js'
        },
        {
            xtype:'LoginController',
            path:'app/view/chapter8/ticket/login/LoginContoller.js'
        },
        {
            xtype:'LoginModel',
            path:'app/view/chater8/ticekt/login/LoginModel.js'
        }
    ],
    initComponent : function(){
        Ext.apply(this,{
           items:[
               {
                   padding: '5 5 5 5',
                   xtype:'component',
                   id:'databinding'//2
               }
           ] 
        });
        this.callParent(arguments);
        
        var fp = Ext.create('ext5.view.chapter8.ticket.login.Login',{//3
            autoShow : true,//4
            listeners:{
                scope:this,
                login:function(loginController,user, organization){ //5
                    console.log('Login Success:',user, organization); //6
                    fp.close(); //7
                }
            }
        });
    }
});

~~~

~~~java
    1. To show classes that relate to this class
    2. component id
    3. To create a login window
    5. listen to login event
    7. After success of login, login window is closed
~~~
    
    
