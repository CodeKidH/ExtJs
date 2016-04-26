# 1. Flex
  
    Flex
      - Flex is in a config that abjust width or height of components
    
    


* 0_FlexConfig.html

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
  'ext5.view.chapter3.FlexConfig'
 ]);
 Ext.onReady(function () {
  Ext.create('ext5.view.chapter3.FlexConfig', {
   margin: '5 5 5 5',
   renderTo : document.body

  });
 })

</script>
</body>
</html>
~~~

* FlexConfig.js

~~~javascript
/**
 * Created by Administrator on 2016-04-26.
 */
Ext.define('ext5.view.chapter3.FlexConfig',{
   alias: 'widget.chapter3-flexconfig',
    extend: 'Ext.container.Container',
    width: 400, #1
    layout:{
        type:'hbox',
        align: 'stretchmax'
    },
    items:[{
        xtype:'panel',
        title:'Panel one',
        flex: 0.5
    },{
        xtype:'panel',
        title:'Panel two',
        height : 100,
        flex :1
    },{
        xtype:'panel',
        title:'Panel three',
        flex:0.7
    }]

});
~~~

~~~java
  Container Class
   
   1. items
      - Container class can add a child class by using items
      
   2. child class
      - Child class will be changed by parent class(container)
      
   3. Classes
      - Ext.container.Container
      - Ext.panel.Panel
      - Ext.container.Viewport
      - Ext.grid.Panel
      - Ext.container.ButtonGroup
      - Ext.from.FieldContainer
      
      - These classes can has a child 
    
    4. Width
      - flex : 400(parent's width) * 2.2(Sum of flex) = 182
      - 0.5 : 182 * 0.5 = 91
      - 1 : 182 * 1 = 182
      - 0.7 : 182 * 0.7 = 127
    
    5. align: 'stretchmax'
      - To decide a height of child (100)
~~~
