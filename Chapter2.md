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

# 2. Absolute layout

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

# 3. Fit

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

# 4. BorderLayout

    BorderLayout is used to construct a application frame
    
    center
      - Center can expand automatically
    
    west, east
      - west can be folded
      
    west,east, south, north
      - They must have width and height
    
* 3_BorderLayout.html
~~~html
<body>
<script type="text/javascript">
 Ext.Loader.setConfig({
  enabled: true,
  paths: {
   'ext5': '/app'
  }
 });
 Ext.require([
  'ext5.view.chapter3.BorderLayout'
 ]);
 Ext.onReady(function () {
  Ext.create('ext5.view.chapter3.BorderLayout', {
   renderTo : document.body

  });
 })

</script>
</body>
~~~

* BorderLayout.js
~~~javascript
/**
 * Created by Administrator on 2016-04-28.
 */
Ext.define('ext5.view.chapter3.BorderLayout',{
   alias: 'widget.chapter3-borderlayout',
    extend:'Ext.container.Container',
    width:400,
    height:400,
    layout:'border',
    items:[{
        region : 'north',
        title:'north',
        margins:5,
        height:100,
        xtype:'panel'
    },{
        title:'west',
        region:'west',
        margins:'0 5 0 5',
        width: 100,
        collapsible : true,
        split:true,
        titleCollapse:true
    },{
        title:'center',
        region:'center'
    },{
        title:'east',
        region:'east',
        margins:'0 5 0 5',
        flex:5,
        collapsible:true,
        collapsed:false
    },{
        title:'south',
        region:'south',
        margins:'0 5 5 5',
        flex:3,
        split:true
    }]
});
~~~

~~~java
  collapsible:true
    - It will have a collapsible button
  
  split:true
    - There will have a thick line between center and west
    
  titleCollapse:true
    - If title will be folded, title name become  '...'
    
  flex:5
    - Width size become varialbe size
    - width : 5 means fixed size
  
  collapsed:false
    - Config of collapsed can set up when there is a config of collapsible
    - true is status that already be folded
~~~

![Borderlayout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/borderlayout.png)  

# 5. AnchorLayout
      Anchor size increase with parent's size
      There are two ways to config anchor layout size, % or offset
      

* AnchorLayout.html
~~~html
<script type="text/javascript">
 Ext.Loader.setConfig({
  enabled: true,
  paths: {
   'ext5': '/app'
  }
 });
 Ext.require([
  'ext5.view.chapter3.AnchorLayout'
 ]);
 Ext.onReady(function () {
  Ext.create('ext5.view.chapter3.AnchorLayout', {
   renderTo : document.body

  });
 })

</script>
~~~
#### 5_1. %

* AnchorLayout.js
~~~javascript
Ext.define('ext5.view.chapter3.AnchorLayout',{
   alias : 'widget.chapter3-anchorlayout',
    extend: 'Ext.panel.Panel',
    width:300,
    height:300,
    title:'Parents Anchor Layout',
    layout:'anchor',
    items:[{
        xtype:'panel',
        title:'Use a parents size through %',
        html:'Width is size of parent(300px)* 75%<br>height is size of parent(300px)* 50%',
        anchor : '75% 50%'
    }]
});
~~~

~~~java
  anchor : '75% 50%'
    - Child object was fixed by using %
~~~

![Anchorlayout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/anchorlayout.png)  

#### 5_2. offset

* AnchorLayout.html

~~~html
<script type="text/javascript">
 Ext.Loader.setConfig({
  enabled: true,
  paths: {
   'ext5': '/app'
  }
 });
 Ext.require([
  'ext5.view.chapter3.AnchorLayout'
 ]);
 Ext.onReady(function () {
  Ext.create('ext5.view.chapter3.AnchorLayout', {
   renderTo : document.body,
   items:[{
     xtype:'panel',
    title:'Offset',
    html:'With is size of parent(300px) - 50px <br> Height is size of parent(300px)-100px',
    anchor : '-50 -100'
   }]

  });
 })

</script>
~~~

* AnchorLayout.js
~~~javascript
Ext.define('ext5.view.chapter3.AnchorLayout',{
   alias : 'widget.chapter3-anchorlayout',
    extend: 'Ext.panel.Panel',
    width:300,
    height:300,
    title:'Parents Anchor Layout',
    layout:'anchor'

});
~~~
![Anchorlayout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/anchorlayout_1.png) 

# 6.ColumnLayout

* columnLayout.html
~~~html
<script type="text/javascript">
 Ext.Loader.setConfig({
  enabled: true,
  paths: {
   'ext5': '/app'
  }
 });
 Ext.require([
  'ext5.view.chapter3.ColumnLayout'
 ]);
 Ext.onReady(function () {
  Ext.create('ext5.view.chapter3.ColumnLayout', {
   renderTo : document.body
  });
 })

</script>
~~~

* columnlayout.js
~~~javascript
/**
 * Created by Administrator on 2016-04-29.
 */
Ext.define('ext5.view.chapter3.ColumnLayout',{
   alias : 'widget.chapter3-columnlayout',
    extend:'Ext.panel.Panel',
    title:'ColumnLayout',
    width:400,
    height:250,
    layout : 'column',
    items:[{
        title:'column1',
        width:120
    },{
        title:'column2',
        columnWidth:0.7
    },{
        title:'column3',
        columnWidth:0.3
    }]

});
~~~

![Columnlayout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/columnlayout.png) 


# 7. Table Layout

    TableLayout likes a html table tag
      - Use a tr, td, colspan, rowspan

  * tableLayout.html
  ~~~html
  <body>
<script type="text/javascript">
 Ext.Loader.setConfig({
  enabled: true,
  paths: {
   'ext5': '/app'
  }
 });
 Ext.require([
  'ext5.view.chapter3.TableLayout'
 ]);
 Ext.onReady(function () {
  Ext.create('ext5.view.chapter3.TableLayout', {
   renderTo : document.body
  });
 })

</script>
  ~~~
  
  * tableLayout.js
  ~~~javascript
  /**
 * Created by Administrator on 2016-04-29.
 */
Ext.define('ext5.view.chapter3.TableLayout',{
    alias:'widget.chapter3-tablelayout',
    extend:'Ext.panel.Panel',
     title:'table layout',
    width: 500,
    height: 300,
    layout:{
        type : 'table',
        columns : 4
    },
    items:[{
        height : 100,
        html :'header<br/>Colspan:4, rowspan:1',
        colspan:4
    },{
        width:100,
        height:200,
        html:'menu<br/>colsapne:2,rowspan:1',
        rowspan:2
    },{
        width:300,
        height:100,
        html:'content above<br/>colspan:2, rowspan:1',
        colspan:2
    },{
        width:100,
        height:200,
        html:'rightside<br/>colspan:1, rowspan:2',
       rowspan:2
    },{
        html:'contentdown1<br/><br/>colspan:1,rowspan:1',
        height:100,
        width:150
    },{
        html:'contentdown2<br/><br/>colspan:1, rowspan:1',
        height:100,
        width:150
    }]

  });
  ~~~
  

![tablelayout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/tablelayout.png) 
  
  
# 7. HBoxLayout

    Components will be arranged horizontally
  
  * 7_HBoxLayout.html
  ~~~html
  <script type="text/javascript">
   Ext.Loader.setConfig({
    enabled: true,
    paths: {
     'ext5': '/app'
    }
   });
   Ext.require([
    'ext5.view.chapter3.HBoxLayout'
   ]);
   Ext.onReady(function () {
    Ext.create('ext5.view.chapter3.HBoxLayout', {
     renderTo : document.body
    });
   })
  
  </script>
  ~~~

  * HBoxLayout.js
  ~~~javascript
  Ext.define('ext5.view.chapter3.HBoxLayout',{
     alias : 'widget.chapter3-hboxlayout',
      extend:'Ext.panel.Panel',
      title : 'Hbox Layout',
      height:300,
      layout:{
          type:'hbox',
          padding:10
      },
      items:[{
          xtype:'panel',
          title:'firstPanel',
          html:'width 100px <br> height 200px',
          height : 200,
          width :100
      },{
          xtype:'panel',
          title:'second panel',
          html:'width variable <br> height 100px',
          height :100,
          flex:1
      },{
          xtype:'panel',
          title:'third panel',
          html:'width 100px <br> height150px',
          width :100,
          height: 150
      }]
  });
  ~~~
  
![Hboxlayout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/hboxlayout_1.png)  

  ~~~java
    align : 
      - Parent component can handle child's height by using align
  ~~~
  
  * align
  ~~~javascript
  layout:{
        type:'hbox',
        align : 'stretchmax', // 'stretch'
        padding:10
    },

  // When we use a stretch, child's height will be same parent's height 
  ~~~
  
# 8. VBoxLayout
  
* VBoxlayout.html
  ~~~html
  <script type="text/javascript">
   Ext.Loader.setConfig({
    enabled: true,
    paths: {
     'ext5': '/app'
    }
   });
   Ext.require([
    'ext5.view.chapter3.VBoxLayout'
   ]);
   Ext.onReady(function () {
    Ext.create('ext5.view.chapter3.VBoxLayout', {
     renderTo : document.body
    });
   })
  
  </script>
  ~~~

* VBoxlayout.js

  ~~~javascript
  Ext.define('ext5.view.chapter3.VBoxLayout',{
     alias : 'widget.chapter3-vboxlayout',
      extend:'Ext.panel.Panel',
      title:'Vbox layout',
      width:300,
      height:300,
      layout:{
          type:'vbox',
          align : 'stretchmax',
          padding : 10
      },
      items:[{
          xtype:'panel',
          title:'first panel',
          html:'width 150px <br> height 70px',
          height : 70,
          width : 150
      },{
          xtype:'panel',
          title:'second panel',
          width:100,
          html:'width 100 <br> height variable',
          flex: 1
      },{
          xtype:'panel',
          title:'third panel',
          html:'width 200px <br> height 100',
          width:200,
          height: 100
      }]
  });
  ~~~
  
  ![Vboxlayout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/vboxlayout.png) 


# 9. CardLayout

    CardLayout is gonna show us a Component one by one like a revolving door
    

  * CardLayout.html
  ~~~html
  <script type="text/javascript">
      Ext.Loader.setConfig({
          enabled: true,
          paths: {
              'ext5': '/app'
          }
      });
      Ext.require([
          'ext5.view.chapter3.CardLayout'
      ]);
  
      Ext.onReady(function () {
          Ext.create('ext5.view.chapter3.CardLayout', {
              renderTo : document.body
          });
  
      })
  
  </script>
  ~~~

  * CardChild1.js
  ~~~javascript
  Ext.define('ext5.view.chapter3.CardChild1', {
      extend : 'Ext.panel.Panel',
      xtype: 'chapter3-cardchild1',
      id: 'card1',                   // #1
      bodyPadding: 5,
      width: 300,
      title: '첫번째 패널(id: card1)',
      items: [
          {
              xtype: 'datefield',
              fieldLabel: 'Start date'
          },
          {
              xtype: 'datefield',
              fieldLabel: 'End date'
          }
      ],
      listeners: {
          render: function () {   // #2
              console.log('card1이 렌더링 되었습니다.')
          }
      }
  });
  ~~~
  ~~~java
    id
      - It will be used to search for class
    
    listener
      - When this class will be on the broswer, Console work 
  ~~~

  ![child1layout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/cardchild1.png)

  * Cardchild2.js
  ~~~javascript
  Ext.define('ext5.view.chapter3.CardChild2', {
      extend : 'Ext.container.Container',
      xtype: 'chapter3-cardchild2',
      id: 'card2',
      border: 1,
      html: '두 번째 컨테이너(id: card2)',
      listeners: {
          render: function () {
              console.log('card2이 렌더링 됐습니다.')
          }
      }
  });
  ~~~
  ![child1layout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/cardchild2.png)
  * Cardchild3.js
  ~~~javascript
  Ext.define('ext5.view.chapter3.CardChild3', {
    extend : 'Ext.grid.Panel',
    xtype: 'chapter3-cardchild3',
    bodyStyle: 'padding: 20px',
    id: 'card3',
    title: '세 번째 그리드 패널(id: card3)',
    store: '',
    columns: [
        {
            text: '게시글번호 ',
            width: 80,
            dataIndex: 'brd_seq',
            field: {
                allowBlank: false
            }
        },
        {
            text: '제목',
            flex: 1,
            dataIndex: 'brd_title',
            field: {
                allowBlank: false
            }
        },
        {
            text: '입력자',
            width: 70,
            dataIndex: 'brd_input_user_nm',
            field: {
                allowBlank: false
            }
        }
    ],
    listeners: {
        render: function () {
            console.log('card3이 렌더링 되었습니다.')
        }
    }
  });

  ~~~
  ![child1layout]
(https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/cardchild3.png)
  * CardLayout.js(Parent)
  ~~~javascript
  Ext.define('ext5.view.chapter3.CardLayout', {
    alias: 'widget.chapter3-cardlayout',
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.form.field.Date',
        'Ext.layout.container.Card',
        'ext5.view.chapter3.CardChild1',
        'ext5.view.chapter3.CardChild2',
        'ext5.view.chapter3.CardChild3'
    ],
    title: 'Card Layout',
    width: 350,
    height: 150,
    layout: {
        type: 'card',        // #1
        deferredRender: true
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            bbar: ['->', { // #2
                xtype: 'button',    // #3
                text: '이전',
                handler: function (btn) {   // #4
                    var layout = btn.up('panel').getLayout();   // #5

                    if (layout.getPrev()) {     // #6
                        layout.prev();          // #7
                        me.cardInfo();        // #8
                    }
                }
            }, {
                xtype: 'button',
                text: '다음',
                handler: function (btn) {
                    var layout = btn.up('panel').getLayout();

                    if (layout.getNext()) { // #9
                        layout.next();      // #10
                        me.cardInfo();      // #11
                    }
                }
            }],
            items: [    // #12
                {
                    xtype: 'chapter3-cardchild1'
                },
                {
                    xtype: 'chapter3-cardchild2'
                },
                {
                    xtype: 'chapter3-cardchild3'
                }
            ],
            listeners: {
                render: {   // #13
                    fn: this.cardInfo,
                    scope: this
                }
            }
        });
        me.callParent(arguments);
    },

    cardCheck: function (domId) {   // #14
        var checkValue = Ext.Object.isEmpty(document.getElementById(domId));
        return domId + '는 ' + (checkValue ? '존재하지 않습니다.' : '존재합니다.') + '전체 Dom 크기는 :' + document.getElementsByTagName("*").length + '입니다.';
    },

    cardInfo: function () { // #15
        var me = this,
            task = new Ext.util.DelayedTask(function () {
                console.log(me.cardCheck('card1'))
                console.log(me.cardCheck('card2'))
                console.log(me.cardCheck('card3'))
            });
        task.delay(500);
    }
  });

  ~~~
  ~~~java
    bbar 
      - This is a toolbar
      
    handler: function (btn)
      - Handler will work When The button is clicked
      
    var layout = btn.up('panel').getLayout();
      - btn.up('panel') : To find a parent class
      - getLayout() : return card layout object
    
    if (layout.getPrev()) {
      - Check a child component that can be changed 
    
    layout.prev();  
      - card will be changed
      
    me.cardInfo();
      - As soon as card is changed, cardInfo print a data
      
     items: [    // #12
                {
                    xtype: 'chapter3-cardchild1'
                },
                {
                    xtype: 'chapter3-cardchild2'
                },
                {
                    xtype: 'chapter3-cardchild3'
                }
            ],
            
      - To add child components
  ~~~
