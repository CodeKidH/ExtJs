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

  - Ext.define : Define a class
  - extend : Define a extend class, There are a lot of class so you choose one of them
  - 

2_DefineClass.html

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
