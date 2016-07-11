# Grid


## 1. Simple Grid and Panel

* 1_BasicGrid.html
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
            'ext6': '/app'  // #1
        }
    });
    Ext.require([
        'ext6.view.chapter7.BasicGrid' // #2
    ]);

    Ext.onReady(function () {   // #3
        var fp = Ext.create('ext5.view.chapter7.BasicGrid',{
            renderTo : document.body
        });
    });

</script>
</body>
</html>


~~~

    To make a data file
    There are sevral detail datas in a data

* Order.json
~~~json
{
    totalCount : 190,
    success : true,
    "errMsg": "",
    "errTitle": "",
    entitys: [
        {
            areaNm : '서울',
            customName: '홍길동',
            orderDate: '2013-01-12',
            orderAmount: 31000,
            orderDesc: 'ExtJS4.0 따라잡기',
            orderCnt: 3,
            accrueAmount: 2010000,
            isMember: true,
            orderDetail: [
                {
                    detailNo: 'B1011',
                    detailDesc: 'ExtJS4.0 따라잡기'
                },
                {
                    detailNo: 'B1022',
                    detailDesc: 'Spring 3.0'
                },
                {
                    detailNo: 'B1920',
                    detailDesc: 'Sencha Touch1.0'
                }
            ],
            estimate : 'up'
        },
        {
            areaNm : '서울',
            customName: '김영희',
            orderDate: '2013-01-02',
            orderAmount: 910900,
            orderDesc: 'Java 따라잡기',
            orderCnt: 3,
            accrueAmount: 2010000,
            isMember: false,
            orderDetail: [      // step2에서 추가하도록.
                {
                    detailNo: 'B0211',
                    detailDesc: 'Java 따라잡기'
                },
                {
                    detailNo: 'B3111',
                    detailDesc: 'Oracle Power User'
                },
                {
                    detailNo: 'B0987',
                    detailDesc: 'Eclipse Plugin Program'
                }
            ],
            estimate : 'down'
        },
        {
            areaNm : '서울',
            customName: '김영희',
            orderDate: '2013-01-02',
            orderAmount: 910900,
            orderDesc: 'Java 따라잡기',
            orderCnt: 3,
            accrueAmount: 2010000,
            isMember: false,
            orderDetail: [      // step2에서 추가하도록.
                {
                    detailNo: 'B0211',
                    detailDesc: 'Java 따라잡기'
                },
                {
                    detailNo: 'B3111',
                    detailDesc: 'Oracle Power User'
                },
                {
                    detailNo: 'B0987',
                    detailDesc: 'Eclipse Plugin Program'
                }
            ],
            estimate : 'down'
        },
        {
            areaNm : '경기',
            customName: '이철수',
            orderDate: '2013-01-02',
            orderAmount: 781000,
            orderDesc: 'OpenLayer 3 Beginners Guide',
            orderCnt: 4,
            accrueAmount: 2010000,
            isMember: false,
            orderDetail: [      // step2에서 추가하도록.
                {
                    detailNo: 'B0211',
                    detailDesc: 'OpenLayer 3 Beginners Guide'
                },
                {
                    detailNo: 'B3111',
                    detailDesc: 'Drupal8 Module Development'
                },
                {
                    detailNo: 'B0987',
                    detailDesc: 'Eclipse Plugin Program'
                },
                {
                    detailNo: 'B0988',
                    detailDesc: 'Eclipse Plugin Program2'
                }
            ],
            estimate : 'up'
        },
        {
            areaNm : '경기',
            customName: '이순신',
            orderDate: '2013-01-07',
            orderAmount: 650000,
            orderDesc: 'Mastering Hadoop  하하하...동해물과 백두산이 마르고 동해물과 백두산이 마르고 동해물과 백두산이 마르고 동해물과 백두산이 마르고 동해물과 백두산이 마르고 동해물과 백두산이 마르고 ',
            orderCnt: 3,
            accrueAmount: 2010000,
            isMember: true,
            orderDetail: [
                {
                    detailNo : 'B3211',
                    detailDesc: 'Mastering Hadoop'
                },
                {
                    detailNo : 'B3w523',
                    detailDesc: 'SAP Business Report'
                },
                {
                    detailNo : 'B09871',
                    detailDesc: 'bbPress Complete'
                }
            ],
            estimate : 'down'
        }
    ]}
~~~

* Order.js(model class)
~~~javascript
/**
 * Created by Administrator on 2016-07-11.
 */
Ext.define('ext5.model.smpl.Order',{
   extend:'Ext.data.Model',
    fields:[
        'customerName',
        'orderDate',
        'orderDesc',
        {
            name:'orderCnt',
            type:'int'
        },
        {
            name:'orderAmount',
            type:'float'
        },
        {
            name:'accrueAmount',
            type:'float'
        },
        {
            name:'isMember',
            type:'boolean'
        },
        'orderDetail',
        'estimate',
        'areaNm',
        'id',
        'name',
        'lastName'
        
    ],
    proxy:{
        type:'ajax',
        url:'/resources/data/Order.json',
        reader:{
            type:'json',
            rootProperty:'entitys'
        }
    },
    validators:[
        {
            type:'inclusion',
            field:'isMember',
            list:[true, false]
        }
    ]
});

~~~

* BasicGrid.js

~~~javascript
/**
 * Created by Administrator on 2016-07-11.
 */
Ext.define('ext5.view.chapter7.BasicGrid',{
   extend:'Ext.grid.Panel',
    alias:'widget.chpater7-basicgrid', //1
    requires:[
        'ext5.model.smpl.Order'
    ],
    height:200,
    columnLines:true,
    initComponent:function(){
        var me = this;
        Ext.apply(this,{
            store:{ //2
                model:'ext5.model.smpl.Order',
                autoLoad:true
            },
            columns:this.getColumnConfig()//3
        });
        me.callParent(arguments);
    },

    getColumnConfig: function(){
        var me = this;
        return [
            {
                text:'OrderMan',
                align:'center',//4
                width:70,
                dataIndex:'customName' //5
            },{
                text:'OrderDate',
                align:'center',
                width:80,
                dataIndex:'orderDate'
            },
            {
                text:'OrderAmt',
                style:'text-align:center', //6
                align : 'right',
                width:100,
                dataIndex:'orderAmount'
            },
            {
                text:'OrderQty',
                style:'text-align:center',
                align:'right',
                width:60,
                dataIndex:'orderCnt'
            },
            {
                text:'OrderDesc',
                style:'text-align:center',
                width:200,
                flex:1,
                dataIndex:'orderDesc'
            },
            {
                text:'accrueAmount',
                style:'text-align:center',
                align : 'right',
                width:150,
                dataIndex:'accrueAmount'
            },
            {
                text:'isMember',
                align:'center',
                width:70,
                dataIndex:'isMember'
            }

        ]
    }

});
~~~

* View

