# 1. How to set a ExtJs

* Download and Install
  - Sencha cmd6
  - Ext Js SDK
  - Ruby(To complie SASS) 

* To set up a ExtJs
  - To set up a environment variable in OS
  - Open CMD, cd c:\Sencha\workspace
  - 'sencha generate app -ext ext6 MyExtJs'
  - generate app : To create app, ext6 : Name of app, MyExtJs : Folder has a app
  -  cd c:\Sencha\workspace\MyExtJS
  -  'sench web start'

* Start app
  - localhost:1841
  - If you want to change number of port, you will set up like this 'sencha fs web -port 8000 start'

#2. Hello World

* 1_HelloWorld.html

~~~html
<html>
<head>
    <meta charset="UTF-8">
    <title>SAT</title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
       
 
        <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>
      
 
        
</head>
<body>
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'ext6': '/app'  // Class file of ext6's app  is located in app folder
        }
    });
    Ext.require([
        'ext6.view.chapter1.HelloWorld' // Class which we need is loaded
    ]);

    Ext.onReady(function () {   // Ext.onReady is scope of executing, It will help to start a js
        Ext.create('ext6.view.chapter1.HelloWorld', {   //It will be instance to start
            renderTo: document.body,    // for browser
            width: '100%',  // UI class's width
            height: 150,    // UI class's height
            bodyPadding: 5
        });


    })

</script>
</body>
</html>
~~~

* HelloWorld.js

~~~javascript
Ext.define('ext6.view.chapter1.HelloWorld', {   // Define a class [app's name.package name.class name]
    extend: 'Ext.panel.Panel',  
    alias: 'widget.chapter1-helloworld',    
    title: 'Hello World',   
    html: '안녕하세요 ExtJS5를 같이 배워요!!' 
});

~~~

# 3. Define and Create Class

* DefineClass.js

~~~javascript
Ext.define('ext6.view.chapter2.DefineClass',{ 
   extend:'Ext.panel.Panel',                  
    alias: 'widget.chapter2-defineclass',
    initComponent:function(){                
        var me = this;
        Ext.apply(me,{
           title: 'Hello',
            items: [{
                xtype : 'button',
                text:'Click me'
            }]
        });

        me.callParent(arguments);
        me.on('render',function(component){
           console.log('On will be started when class is rendered on the browser ');
        });
    }
});
~~~

~~~java
  - Ext.define 
      Define a class

  - extend  
      Define a extend class, There are a lot of class so you choose one of them

  - alias 
      Call it widget, alias -> widget.chapter2-defineclass , xtype -> chpater2-defineclass

  - initComponent
      Define a expanded class, It must contain a me.callParent(arguments)

  - Ext.apply(me,{})
      me : Object that is added, me = DefineClass has a expanded Panel class
      {} : Object that will add
      
      Me(this or DefineClass) will add a {}

  - me.on('render',function(component))
      Define a EventListener
      
      me.on = DefineClass will add a EventListener

      1. me : EventLister's target
      2. on : target will be added
      3. render : Kind of event, for rendering
      4. function : Execute it after render event occur 
  
  - items
      items add a children in a Container class
      
~~~  

* 2_DefineClass.html

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
            'ext6': '/app'  
        }
    });
    Ext.require([
        'ext6.view.chapter2.DefineClass' 
    ]);

    Ext.onReady(function () {  
        Ext.create('ext6.view.chapter2.DefineClass', {   
            renderTo: document.body,   
            width: '100%', 
            height: 150,    
            bodyPadding: 5
        });


    })

</script>
</body>
</html>

~~~

# 4. Config
  
    Config
    
    If I set up a config option in class, Class system provide three methods (getter, setter, apply) for me
    so I can pass a value to class 
    
    
    
  - ClassConfig.js
    
    ~~~javascript
    Ext.define('ext5.view.chapter2.ClassConfig', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter2-classconfig',
    title : 'ClassConfig',
    config: {   // #1
        subject: 'Subject Here',    // #2

        bottomBar: {    // #3
            height: 50,
            width: 200
        }
    },

    applySubject: function (subject) {  // #4
        if (!Ext.isString(subject) || subject.length === 0) {
            console.log('제목은 반드시 입력해야 합니다.');
        }
        else {
            return subject;
        }
    },

    applyBottomBar: function (bottomBar) {  // #5
        if (bottomBar) {    // #6
            if (!this.bottomBar) {  // #7
                return Ext.create('MyInnerClass', bottomBar);
            }
            else {
                this.bottomBar.setConfig(bottomBar);    // #8
            }
        }
    }
    });
    Ext.define('MyInnerClass', {    // #9
        config: {
            height: undefined,
            width: 100
        }
    });
    ~~~
    
    ~~~java
      - config
        Define a class config
        
      - subject 
        Define a subject config
      
      - bottomBar
        Define a object type config
      
      - applySubject
        To set up a subject config
      
      - applyBottom 
        To set up a bottom config
      
      
    ~~~
    
  - ClassConfig.html
  - 
  ~~~html
  <html>
  <head>
    <meta charset="UTF-8">
    <title>4_ClassConfig</title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>
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
          'ext5.view.chapter2.ClassConfig'
      ]);
      Ext.onReady(function () {
          var myWindow = Ext.create('ext5.view.chapter2.ClassConfig', {
              subject: '안녕하세요 ^^',      // Create a class and set a subject config
              renderTo: document.body,
              bottomBar: {    // set a bottom config and pass a value 60 
                  height: 60
              }
          });
          console.log(myWindow.getSubject()); // #3
          myWindow.setSubject('반갑습니다.^^');  // #4
          console.log(myWindow.getSubject()); // #5
          myWindow.setSubject(null); // #6
          myWindow.setBottomBar({ height: 100 }); // #7
          console.log(myWindow.getBottomBar().getHeight()); // #8
      })

  </script>
  </body>
  </html>
  ~~~
  
  # 5. Static
  
      All class is suppose to has a static method and varible
      
      If we access a static, we don't need to make a instance
      
  
  * ClassStatic.js
  
  ~~~javascript
  Ext.define('ext5.view.chapter2.ClassStatic',{
     extend : 'Ext.panel.Panel',
      xtype : 'chapter2-classstatic',
      config:{
          studentName: null
      },
      statics :{
          studentCount :0,
          student: function(studentName){
              return new this({
                  studentName : studentName,
                  studentCount : this.studentCount++
              });
          }
      }
  });
  ~~~

  * 5_ClassStatic.html
  
  ~~~html
  <!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>4_ClassConfig</title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>
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
        'ext5.view.chapter2.ClassStatic'
    ]);
    Ext.onReady(function () {
        var myWindow = Ext.create('ext5.view.chapter2.ClassStatic', {
            title : 'Hello',
            renderTo : document.body,
            bottomBar:{
                height : 60
            }
        });

        var static1 = ext5.view.chapter2.ClassStatic.student('Kyle');
        var static2 = ext5.view.chapter2.ClassStatic.student('Tommy');
        console.log(static2.getStudentName());
        console.log(ext5.view.chapter2.ClassStatic.studentCount);

    })

</script>
</body>
</html>

  ~~~
  
  #6. Dynamic Class loading
  
      Dynamic class loading has been used on flexible development environment
      It's not for faster development
      
* Javscript in HTML

~~~html
<script type="text/javascript" src=".../...app/view/chapter2/RequireClass.js></script>
<script type="text/javascript" src=".../...app/view/chapter2/DynamicPanel.js></script>
.
.
.
  If we have a ton of script source, It will be impossible to arrange these source
~~~

* Require

~~~javascript
  Ext.require([
    'ext5.view.chapter2.DynamicPanel'
  ]);
~~~

* 6_DynamicClassLoading.html
~~~html
<html>
<head>
    <meta charset="UTF-8">
    <title>4_ClassConfig</title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>
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
        'ext5.view.chapter2.DynamicPanel'
    ]);
    Ext.onReady(function () {
        Ext.create('ext5.view.chapter2.DynamicPanel', {
            title : 'Hello',
            renderTo : document.body

        });
    })

</script>
</body>
</html>
~~~

* RequireClass.js
~~~javascript

Ext.define('ext5.view.chapter2.RequireClass',{
   extend:'Ext.panel.Panel',
    xtype:'chapter2-requireclass',
    title:'Class that was loaded dynamically'
});
~~~

* DynamicPanel.js

~~~javascript
Ext.define('ext5.view.chapter2.DynamicPanel',{
   extend: 'Ext.panel.Panel',
    requires:['ext5.view.chapter2.RequireClass'],  #1
    xtype:'chapter2-dynamicloading',
    title:'DynamicPanel',
    otherContent:[{
        xtype: 'dynamic loading class',
        path:'app/view/chapter2/RequireClass.js'
    }],

    items:[{
        xtype:'chapter2-requireclass' #2
    }]
});
~~~

~~~java
  #1.requires
    - Define a class that will be used through dynamic class loading
  
  #2.widget name
    - If #1 will be removed, #2 will not work
    
    alias : 'widget.chapter2-requireclass
    xtype: 'chapter2-requireclass'
~~~

