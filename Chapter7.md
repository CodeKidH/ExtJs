# ExtJs 5

## 2. New Architecture

    MVC
    1) M(model) : M stand for datas, Model data will be saved by store and View class refer to store
    2) V(view) : Component without logic
    3) C(controller) : Controller stand for class that control a view
    4) VM(view model) : VM is class that manage a data
    

### 2_1 Data binding

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
    3. bind data
~~~

* view

