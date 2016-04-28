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

#. Absolute layout

    Absolute
      - It use a x,y coordinate
      - It can handle a child size by using anchor
  
* 1_AbsoluteLayout.html
~~~html
 Ext.Loader.setConfig({
  enabled: true,
  paths: {
   'ext5': '/app'
  }
 });
 Ext.require([
  'ext5.view.chapter3.AbsoluteLayout'
 ]);
 Ext.onReady(function () {
  Ext.create('ext5.view.chapter3.AbsoluteLayout', {
   margin: '5 5 5 5',
   renderTo : document.body

  });
 })
~~~

* AbsoluteLayout.js
~~~javascript
/**
 * Created by Administrator on 2016-04-27.
 */
Ext.define('ext5.view.chapter3.AbsoluteLayout',{
   alias: 'widget.chpater3-absolutelayout',
    extend:'Ext.panel.Panel',
    height:300,
    width:300,
    padding:'5 5 5 5',
    layout:'absolute',
    autoScroll:true,
    border:true,
    items:[
        {
            title:'panel1',
            x:20,
            y:30,
            height:150,
            width:150,
            html:'x : 20, y : 30',
            frame:true
        },
        {
            title:'panel2',
            x:100,
            y:100,
            anchor:'80% 80%',
            html:'x :100 y : 100',
            fram : true
        }
    ]
});
~~~

~~~java
  layout:'absolute'
    - Ext.panel.Panel class's layout is absolute
  anchor:'80% 80%'
    - panel2 size was changed by increasing proportionally to parent's size
~~~

![Absoulte]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/absoluteLayout.png)

# Fit

    Fit layout has only one child
    and Child use parent whole size
    
* FitLayout.html

~~~html
<script type="text/javascript">
 Ext.Loader.setConfig({
  enabled: true,
  paths: {
   'ext5': '/app'
  }
 });
 Ext.require([
  'ext5.view.chapter3.FitLayout'
 ]);
 Ext.onReady(function () {
  Ext.create('ext5.view.chapter3.FitLayout', {
   title:'Hello',
   renderTo : document.body

  });
 })

</script>
~~~

* Fitlayout.js
~~~javascript
/**
 * Created by Administrator on 2016-04-28.
 */
Ext.define('ext5.view.chapter3.FitLayout',{
   alias:'widget.chapter3-fitlayout',
    extend:'Ext.panel.Panel',
    height:300,
    width:300,
    padding:'5 5 5 5',
    layout:'fit',
    items:{
        xtype:'button',
        text:'Button has a own size, but If paraent layout is fit, Button will use a whole parent size'
    }
});
~~~

![Fit]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/fitlayout.png)
