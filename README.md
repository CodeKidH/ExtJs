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
            'ext6': '/app'  // #1
        }
    });
    Ext.require([
        'ext6.view.chapter1.HelloWorld' // #2
    ]);

    Ext.onReady(function () {   // #3
        Ext.create('ext6.view.chapter1.HelloWorld', {   // #4
            renderTo: document.body,    // #5
            width: '100%', // #6
            height: 150,    // #7
            bodyPadding: 5
        });


    })

</script>
</body>
</html>
~~~

* HelloWorld.js

~~~javascript
Ext.define('ext6.view.chapter1.HelloWorld', {   // #1
    extend: 'Ext.panel.Panel',  // #2
    alias: 'widget.chapter1-helloworld',    // #3
    title: 'Hello World',   // #5
    html: '안녕하세요 ExtJS5를 같이 배워요!!'  // #6
});

~~~
