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
~~~
