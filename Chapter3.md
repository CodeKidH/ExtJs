# Handle Dom


## 1. Basic HTML and CSS

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
