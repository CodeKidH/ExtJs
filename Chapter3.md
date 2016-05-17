# Handle Dom


## 0. Basic HTML and CSS

* 0_Originhtml.html
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>
    <script type="text/javascript" src="/ext/ext-all-debug.js"></script>
    <style type="text/css">
        .main_dashboard .tab_bg{
            background: #1b243d;
            height : 40px;
            border-top: 1px solid #3b465e;
        }

        .main_dashboard .dashboard_tab_menu{
            margin: 0 auto;
        }

        .main_dashboard .dashboard_tab_menu{
            overflow: hidden;
            padding-top: 6px;
        }

        .main_dashboard .dashboard_tab_menu li{
            list-style:none;
            float : left;
            width: 108px;
            margin-left:2px;
        }

        .main_dashboard .dashboard_tab_menu li:first-child{
            margin-left: 0;
        }

        .main_dashboard .dashboard_tab_menu li a{
            padding-top : 10px;
            background: url('/resources/images/bg_tab.gif') repeat-x left bottom;
            display : block;
            height:24px;
            vertical-align:middle;
            text-align: center;
            color:#c6d8f1;
            font-size: 12px;
            font-family: Arial;

        }

        .dashboard_tab_menu li .exception{
            padding-top : 5px !important;
            padding-bottom : 5px !important;
        }

        .main_dashboard .dashboard_tab_menu li a.on{
            background-position: left top;
            color: #072b5a;
            font-size:12px;
            font-weight: bold;
        }


    </style>
</head>
<body>
    <div class="main_dashboard">
        <div class="tab_bg">
            <ul class="dashboard_tab_menu">
                <li><a href="#" class="tab1 on">Tab1</a></li>
                <li><a href="#" class="tab1 on">Tab1</a></li>
                <li><a href="#" class="tab1">Tab1</a></li>
                <li><a href="#" class="tab1">Tab1</a></li>
            </ul>
        </div>
    </div>
</body>
</html>
~~~

 ![child1layout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/basichtml.png)

## 1. Ext.dom.Helper class

        Ext.dom.Helper class can help us make the dom elements
    
    
* 1_DomHelper.html

~~~html
<body>
<script type="text/javascript">

    Ext.require([
        'Ext.Component'
    ]);

    Ext.onReady(function () {
       Ext.dom.Helper.append('myDiv',{
          tag:'div',
           cls:'tab_bg',
           children:[
               {
                   tag:'ul',
                   cls:'dashboard_tab_menu',
                   children:[
                       {
                           tag:'li',
                           children:[
                               {
                                   tag:'a',
                                   href:'#',
                                   cls:'on',
                                   html:'first tap'
                               }
                           ]
                       },
                       {
                           tag:'li',
                           children:[
                               {
                                   tag:'a',
                                   href:'#',
                                   cls:'',
                                   html:'second'
                               }
                           ]
                       },
                       {
                            tag:'li',
                           children:[
                               {
                                   tag:'a',
                                   href:'#',
                                   cls:'',
                                   html:'third'
                               }
                           ]
                       },
                       {
                           tag:'li',
                           children:[
                               {
                                   tag:'a',
                                   href:'#',
                                   cls:'',
                                   html:'forth'
                               }
                           ]
                     }
                   ]
               }
           ]
       });

    });

</script>

<div id="myDiv" class="main_dashboard"/>

</body>
~~~
    
 ![child1layout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/domhelper.png)

~~~java
    I have a same result view
    
    1. Ext.dom.Helper.append('myDiv'
        - Use a append(), so myDiv add to second parameter
    
    2. tag:'div'
        - Children Div
    
    3. cls: 'tab_bg'
        - Define a class
    
~~~

## 2. Using the XTemplate

        User Class has the Ext.XTemplate class
        and Dom elements was included within UserClass

* 2_CustomTabPanelStep1.html

~~~html
<body>
<script type="text/javascript">

    Ext.Loader.setConfig({
       enabled : true,
        paths:{
            'ext5': '/app'
        }
    });

    Ext.require([
        'ext5.view.chapter4.MyCustomTabPanelStep1'
    ]);

    Ext.onReady(function () {
        Ext.create('ext5.view.chapter4.MyCustomTabPanelStep1',{
            width:500,
            height:300,
            renderTo: document.body
        });

    })

</script>

<div id="myDiv" class="main_dashboard"/>


</body>
~~~

* MyCustomTabPanelStep1.js

~~~javascript
/**
 * Created by Administrator on 2016-05-11.
 */
Ext.define('ext5.view.chapter4.MyCustomTabPanelStep1',{
   extend:'Ext.Component',
    xtype:'chapter4-customstep1',
    initComponent: function(){
        var me = this;
        Ext.apply(this,{
            html : this.setTabTpl()
        });

        me.callParent(arguments);
    },

    setTabTpl: function() {
        return new Ext.XTemplate(    //Using
            '<div class="main_dashboard">',
            '<div class="tab_bg">',
            '<ul class="dashboard_tab_menu">',
            '<li><a href="#" class="tab1 on">Tab1</a></li>',
            '<li><a href="#" class="tab1 on">Tab1</a></li>',
            '<li><a href="#" class="tab1">Tab1</a></li>',
            '<li><a href="#" class="tab1">Tab1</a></li>',
            '</ul>',
            '</div>',
            '</div>'
        )
    }

});
~~~

* View
 ![child1layout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/custom.png)

~~~java
    Tab is little strange because ExtJs CSS  conflict with User CSS
    so I fix a CSS by adding a ExtJs CSS
~~~

* adding CSS

~~~css
    .custom-tab.x-border-box *{
        box-sizing: border-box;
        -moz-box-sizing: content-box;
        -ms-box-sizing: content-box;
        -webkit-box-sizing: content-box;
    }
~~~

* Usage css
~~~javascript
extend:'Ext.Component',
cls : 'custom-tab',
xtype:'chapter4-customstep1',
~~~

## 3. Arranging dom element by using container

        I extend container and then use a xtype
    

* 3_CustomTabPanelStep2.html

~~~html
<body>
<script type="text/javascript">

    Ext.Loader.setConfig({
       enabled : true,
        paths:{
            'ext5': '/app'
        }
    });

    Ext.require([
        'ext5.view.chapter4.MyCustomTabPanelStep2'
    ]);

    Ext.onReady(function () {
        Ext.create('ext5.view.chapter4.MyCustomTabPanelStep2',{
            width:500,
            height:300,
            renderTo: document.body
        });

    })

</script>
</body>
~~~

* MyCustomTabPanelStep2.js

~~~javascript
Ext.define('ext5.view.chapter4.MyCustomTabPanelStep2', {
    extend: 'Ext.container.Container', //#1
    cls : 'custom-tab',                 //#2
    xtype: 'chapter4-customstep2',
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            cls: 'main_dashboard',//#3
            autoEl: 'div',//#4
            items: [
                {
                    xtype: 'container',     // #5
                    cls: 'tab_bg',          // #6
                    items: [
                        {
                            xtype: 'container', // #7
                            autoEl: 'ul',       // #8
                            id: "ulroot",       // #9
                            cls: 'dashboard_tab_menu',
                            items: [
                                {
                                    xtype: 'component', // #10
                                    autoEl: 'li',   // #11
                                    html: '<a href="#" tabIdx="0">탭1번</a>'  // #12
                                },
                                {
                                    xtype: 'component',
                                    autoEl: 'li',
                                    html: '<a href="#" tabIdx="1" class="on">탭2번</a>'
                                },
                                {
                                    xtype: 'component',
                                    autoEl: 'li',
                                    html: '<a href="#" tabIdx="2">탭3번</a>'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }

});
~~~

~~~java
     1. extend: 'Ext.container.Container'
        - I can arrange many children by using container
     
     2.  autoEl: 'div'
        -Define a div automatically
    
     3. id: "ulroot"
        - After I use it for serching
~~~

* View

 ![child1layout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/customtab2.png)

## 4. Dom element event Control

        Add a event to panel so I can choose a tab


* 4_CustomTabPanelStep3.html

~~~html
<body>
<script type="text/javascript">

    Ext.Loader.setConfig({
       enabled : true,
        paths:{
            'ext5': '/app'
        }
    });

    Ext.require([
        'ext5.view.chapter4.MyCustomTabPanelStep3'
    ]);

    Ext.onReady(function () {
        Ext.create('ext5.view.chapter4.MyCustomTabPanelStep3',{
            width:500,
            height:300,
            renderTo: document.body
        });

    })

</script>
</body>
~~~

* MyCustomTabPanelStep3.js

~~~javascript
Ext.define('ext5.view.chapter4.MyCustomTabPanelStep3', {
    extend: 'Ext.Component',
    cls: 'custom-tab',
    xtype: 'chapter4-customstep3',
    requires: ['Ext.window.MessageBox'],
    onRender: function () {     // #1
        this.callParent(arguments);
        Ext.core.DomHelper.append(this.getEl(),     // #2
            '<div class="main_dashboard">' +
                '<div class="tab_bg">' +
                '<ul class="dashboard_tab_menu" id="ulroot">' +
                '<li><a href="#">탭1번</a></li>' +
                '<li><a href="#" class="on">탭2번</a></li>' +
                '<li><a href="#">탭3번</a></li>' +
                '</ul>' +
                '</div>' +
                '</div>'
        );
    },
    initComponent: function () {
        var me = this;
        this.callParent(arguments);
        this.on('afterrender', function () {
            this.el.on("click", function (eventObject, htmlElement) {
            
                console.log(htmlElement);
            }, this, {
                delegate: "a"   // #6
            });
        });
    }
~~~

* View - When I click a tab

 ![child1layout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/customtab3.png)

 ![child1layout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/customtab3_console.png)

~~~java
    1. onRender: function ()
        - It will be called when it is in rendering step
        - this.callParent() call(execute) super class's onRender()
    
    2.  Ext.core.DomHelper.append(this.getEl()
        - Define a Dom element by using domhelper
    
    3. this.on('afterrender', function ()
        - Define a event listener After render mehtod will be executed 
        
    4. this.el.on("click", function (eventObject, htmlElement)
        - Add a click event to dom element
    
    5. delegate: "a"
        - When click event occur, Only a tag react
        - If delegate 'a' will be commented, I will see the ul tag event
            It means, anyone who contain the 'a' , you can check it out by using click 
        
~~~

* commenting a tag

 ![child1layout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/atag.png)

* preventDefault()

        I can stop event by using preventDefault()
    


    - MyCustomTabPanelStep3.js
    
    ~~~javascript
      '<li><a href="http://www.daum.net">탭1번</a></li>' 
      
      When I click the tab, page move
    ~~~
        
    - preventDefault()
    
    ~~~javascript
        Ext.define('ext5.view.chapter4.MyCustomTabPanelStep3', {
    extend: 'Ext.Component',
    cls: 'custom-tab',
    xtype: 'chapter4-customstep3',
    requires: ['Ext.window.MessageBox'],
    onRender: function () {     // #1
        this.callParent(arguments);
        Ext.core.DomHelper.append(this.getEl(),     // #2
            '<div class="main_dashboard">' +
                '<div class="tab_bg">' +
                '<ul class="dashboard_tab_menu" id="ulroot">' +
                '<li><a href="http://www.daum.net">탭1번</a></li>' +
                '<li><a href="#" class="on">탭2번</a></li>' +
                '<li><a href="#">탭3번</a></li>' +
                '</ul>' +
                '</div>' +
                '</div>'
        );
    },
    initComponent: function () {
        var me = this;
        this.callParent(arguments);
        this.on('afterrender', function () {
            this.el.on("click", function (eventObject, htmlElement) {
                eventObject.preventDefault();
                var url = Ext.get(htmlElement).getAttribute('href');
                if(url!='#'){
                    Ext.Msg.confirm('url check', 'link exist, you want to move?', function(btn){
                        if(btn == 'yes'){
                            location.href = url;
                        }
                    },me);

                }
                console.log(htmlElement);
            }, this, {
                delegate: "a"   // #6
            });
        });
    }
    ~~~
    
    - view
    
    
     ![child1layout]
    (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/confirm.png)
    
    ~~~java
        1. eventObject.preventDefault()
            - stop event
            - It can use a eventObject.stopEvent() at the same time
            
    ~~~

## 5. Ext.query, Ext.get, Ext.select
        
        ExtJs use these methods(query,get,select) to get dom element's reference
        

* Ext.get()
    
         Ext.get() will returns a dom element



        
 - Ext.get() Source
        
    ~~~javascript
     initComponent: function () {
        var me = this;
        this.callParent(arguments);
        this.on('afterrender', function () {
            this.el.on("click", function (eventObject, htmlElement) {
                
                eventObject.stopEvent();
                console.log('send a id:',Ext.get('ulroot').dom);
                var ulroot = Ext.query('#ulroot')[0];
                console.log('send Ext.dom.Element', Ext.get(ulroot).dom);
                var ulrootDomElement = Ext.get(ulroot).dom;
                console.log('HTML DomElement', Ext.get(ulrootDomElement).dom);
                
            }, this, {
                delegate: "a"   // #6
            });
        });
    },
    ~~~
        
    - Console

    ![child1layout]
    (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/get.png)
        
    ~~~java
        1.Ext.get('ulroot').dom
            - To get a dom element by using id attribute
        
        2.Ext.query('#ulroot')[0]
            - 
        
        3. var ulrootDomElement = Ext.get(ulroot).dom
            - Use a (2) object 
    ~~~

* Ext.select()

        
        Ext.select() invoke a dom element set by using CSS selector

    
    
    - findElement()
        
        ~~~javascript
         findElement : function(condition){
    
            var els = Ext.select(conditioni), domEl = els.first().dom;
            console.log('result:',domEl,'count:',els.getCount());
            return els;
        }    
        ~~~
        
        ~~~java
            1.  var els = Ext.select(conditioni), 
                - select() will be executed when findElement get a Dom tree path as a parameter
            
            2. domEl = els.first().dom;
                - domEl is a first element using els dom
        ~~~
        
        ~~~javascript
        me.findElement('div.main_dashboard');
        me.findElement('div.main_dashboard div.teb_bg ul.dashboard_tab_menu');
        me.findElement('div.main_dashboard div.tab_bg ul.dashboard_tab_menu li');

        var els = me.findElement('div.main_dashboard div.tab_bg ul.dashboard_tab_menu li a');

        Ext.each(els.elements, function(element){
            console.log('searching element:', element);
        });

        me.findElement('div.main_dashboard div.tab_bg ul.dashboard_tab_menu li a.on');

        console.log('result:',els.elements[0], 'count:', els.getCount());
        ~~~
        
    - Ext.select()
        ~~~javascript
         initComponent: function () {
            var me = this;
            this.callParent(arguments);
            this.on('afterrender', function () {
    
                this.el.on("click", function (eventObject, htmlElement) {
    
                    eventObject.stopEvent();
                    console.log('send a id:',Ext.get('ulroot').dom);
                    var ulroot = Ext.query('#ulroot')[0];
                    console.log('send Ext.dom.Element', Ext.get(ulroot).dom);
                    var ulrootDomElement = Ext.get(ulroot).dom;
                    console.log('HTML DomElement', Ext.get(ulrootDomElement).dom);
    
                    Ext.select('li a').addCls('on');
    
                }, this, {
                    delegate: "a"   // #6
                });
            });
        },
        ~~~
        
        ~~~java
            1. Dom element delete
                - Ext.select('li a').destroy();
            
            2. Dom element hide
                - Ext.select('li a').hide();
            
            3. Dom element change attribute
                - Ext.select('li a').removeCls('on');
        ~~~
    
    - view
    
     ![child1layout]
        (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/select.png)
    

* Ext.query()

        Ext.query() like a select
    
    ~~~css
    .bgcolor_red{
        background-color:red;
    }
    ~~~
    
    - Change a first tab to red
    
    ~~~javascript
    initComponent: function () {
        var me = this;
        this.callParent(arguments);
        this.on('afterrender', function () {

            this.el.on("click", function (eventObject, htmlElement) {

               var first_anchor = Ext.get(Ext.select('a').first());
                first_anchor.hide();
                var first_li = Ext.get(Ext.select('li').first());
                first_li.addCls('bgcolor_red');
                console.log(Ext.query('#ulroot.dashboard_tab_menu li.bgcolor_red'));
                console.log(Ext.query('li.bgcolor_red'));
                console.log(Ext.query('.bgcolor_red'));

            }, this, {
                delegate: "a"   // #6
            });
        });
    },
    ~~~
    
     ![child1layout]
        (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/red.png)
    

    - As a result
    ~~~javascript
     initComponent: function () {
        var me = this;
        this.callParent(arguments);
        this.on('afterrender', function () {

            this.el.on("click", function (eventObject, htmlElement) {

            eventObject.preventDefault();
                Ext.select('.dashboard_tab_menu li a').removeCls('on');
                Ext.get(htmlElement).addCls('on');

            }, this, {
                delegate: "a"   // #6
            });
        });
    },
    ~~~
    
     ![child1layout]
        (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/complete.png)
    

## 6. Dom element delete and add

            I will add a tab menu by using ajax

    
* 5_CustomTabPanelFinal.html
~~~html
<html>
<head>
    <meta charset="UTF-8">
    <title>CustomTab</title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>
</head>


<body>
<script type="text/javascript">

    Ext.Loader.setConfig({
       enabled : true,
        paths:{
            'ext5': '/app'
        }
    });

    Ext.require([
        'ext5.view.chapter4.CustomCardTabPanel'
    ]);

    Ext.onReady(function () {
        Ext.create('ext5.view.chapter4.CustomCardTabPanel',{
            width:500,
            height:300,
            renderTo: document.body
        });

    })

</script>
</body>
</html>
~~~

* CustomCardTabPanel.js
~~~javascript
Ext.define('ext5.view.chapter4.CustomCardTabPanel',{
   extend:'Ext.container.Container',
    cls: 'custom-tab',
    requires:[
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'ext5.view.chapter4.CustomTab'
    ],
    layout:'border',
    height: 400,
    xtype:'chapter4-customcardtabpanel',
    items:[
        {
            region : 'north',
            xtype:'chapter4-customtab'
        },{
            region : 'center',
            xtype:'container'
        }
    ]
});
~~~

* CustomTab.js
~~~javascript

Ext.define('ext5.view.chapter4.CustomTab', {
    extend: 'Ext.Component',
    alias : 'widget.chapter4-customtab',
    onRender: function () {     // #1
        this.callParent(arguments);
        Ext.core.DomHelper.append(this.getEl(),     // #2
            '<div class="main_dashboard">' +
                '<div class="tab_bg">' +
                '<ul class="dashboard_tab_menu" id="ulroot">' +
                '<li><a href="http://www.daum.net">탭1번</a></li>' +
                '<li><a href="#" class="on">탭2번</a></li>' +
                '<li><a href="#">탭3번</a></li>' +
                '</ul>' +
                '</div>' +
                '</div>'
        );
    },
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.on('afterrender', function () {

            this.el.on("click", function (eventObject, htmlElement) {

            eventObject.preventDefault();
                Ext.select('.dashboard_tab_menu li a').removeCls('on');
                Ext.get(htmlElement).addCls('on');

            }, this, {
                delegate: "a"   // #6
            });
        });
    }

});

~~~

* view
  ![child1layout]
    (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/final.png)


#### 6_1. Add a tab through ajax

        Receive datas from server and add datas as a li tag
        
        
* CustomTab.js

~~~javascript
onRender: function () {     
        this.callParent(arguments);
        Ext.core.DomHelper.append(this.getEl(),    
            '<div class="main_dashboard">' +
                '<div class="tab_bg">' +
                '<ul class="dashboard_tab_menu" id="ulroot">' +
                '</ul>' +
                '</div>' +
                '</div>'
        );

        this.setTabMenu();
    },

    setTabMenu: function(){
      var root = this.el.select('.dashboard_tab_menu').first();
        var html = '<li><a href = "#" tabidx="{tabIdx}" class="{tabCls}">{tabName}</a></li>';

        var tpl = Ext.DomHelper.createTemplate(html);

        Ext.Ajax.request({
           url:"/resources/data/tablist.json",
            method:"GET",
            success: function(result, request){
                var obj = Ext.JSON.decode(result.responseText);
                Ext.each(obj.entitys, function(tabData){
                    tpl.append(root,tabData);
                })
            }
        });
    },
~~~

~~~java
    1.  var root = this.el.select('.dashboard_tab_menu').first();
        - Root dom element will be given to root variable
        - this.el.select = Ext.select
        - Ext.select scan global area, this.el.select scan current class(Just this.el will be scaned)
    
    2. var html = '<li><a href = "#" tabidx="{tabIdx}" class="{tabCls}">{tabName}</a></li>';
        - template string
    
~~~

* view

  ![child1layout]
    (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/ajax.png)

#### 6_2. Add context menu


* Add a method

~~~javascript
initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.on('afterrender', function () {
            this.el.on("click", function (eventObject, htmlElement) {
                eventObject.preventDefault();
               
                Ext.select('.dashboard_tab_menu li a').removeCls('on');
                Ext.get(htmlElement).addCls('on');

            });
            
            this.el.on("contextmenu", function (eventObject, htmlElement) { //1
                var menu = Ext.create('Ext.menu.Menu',{//2
                    items:[
                        {
                            xtype:'menuitem',//3
                            text:'delete',
                            scope : me,
                            handler: function(){ //4
                                this.destroyTabMenu(htmlElement);//5
                            }
                        },
                        {
                            xtype:'menuitem',
                            text:'before add',
                            scope: me,
                            handler : function(){
                                this.insertBeforeTabMenu(htmlElement);
                            }
                        },
                        {
                            xtype:'menuitem',
                            text:'after add',
                            scope: me,
                            handler:function(){
                                this.insertAfterTabMenu(htmlElement);
                            }
                        }
                    ]
                });

            eventObject.preventDefault();
                menu.showBy(htmlElement);

            }, this, {
                delegate: "a" ,  // #6
                preventDefault: true
            });
        });
    }
~~~

~~~java
    Click right button
    
        1.  this.el.on("contextmenu", function (eventObject, htmlElement)
            - contextmenu will be added and listening
        
        2.  var menu = Ext.create('Ext.menu.Menu',{
            - Create the menu class
        
        3. xtype:'menuitem
            - Menu items add  as a Menu class's items
        
        4. handler: function()
            - Usually use a hander when click event occur
        
        5. this.destroyTabMenu(htmlElement)
            - Invoke a deleteMethod
        
        6. eventObject.preventDefault();
            - Prevent a Crome browser right click event
        
        7.  menu.showBy(htmlElement);
            - Show me a dom element
~~~

* view

  ![child1layout]
    (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/context.png)

#### 6_3. Insert, destroy method

* destroy
~~~javascript
    destroyTabMenu:function(htmlElement){
        Ext.get(htmlElement).destroy();
    },
~~~

* insertBeforeAdd
~~~javascript
    insertBeforeTabMenu: function(htmlElement){
        var root = this.el.select('.dashboard_tab_menu').first(); //1
        var insertBefore = Ext.get(htmlElement).up('li'); //2

        root.createChild('<li><a href="#" tabIdx="0" class="">before add</a></li>',insertBefore,true); //3

    }
~~~

~~~java
    1. var root = this.el.select('.dashboard_tab_menu').first()
        - Search for root dom that located in tab
    
    2.  root.createChild('<li><a href="#" tabIdx="0" class="">before add</a></li>',insertBefore,true);
        - Send three parameters to use a createChild
~~~

* insertAfterAdd
~~~javascript
    insertAfterTabMenu:function(htmlElement){
        var insertAfter = Ext.get(htmlElement).up('li');
        Ext.DomHelper.insertAfter(insertAfter, '<li><a href="#" tabIdx="0" class="">after add</a></li>')
    }
~~~

* view

  ![child1layout]
    (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/addmethod.png)
