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
        'Ext.MessageBox'
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
    
