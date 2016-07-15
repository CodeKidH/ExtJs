/**
 * Created by Administrator on 2016-07-13.
 */
Ext.define('ext5.view.chapter7.ColumnsGrid',{
    extend:'Ext.grid.Panel',
    alias:'widget.chapter7-columnsgrid',
    requires:[
        'ext5.model.smpl.Order',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.grid.column.Template',
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Action'
    ],
    height:200,
    columnLines:true,
    initComponent:function(){
        var me= this;
        Ext.apply(this,{
            store:{
                model:'ext5.model.smpl.Order',
                autoLoad:true
            },
            columns:this.getColumnConfig()
        });
        me.callParent(arguments);
    },
    
    getColumnConfig: function () {

        var me = this;
        return [
            {
                xtype:'rownumberer' //1
            },
            {
                text:'customer',
                align:'center',
                width:70,
                dataIndex:'customName'
            },
            {
                text:'orderDate',
                align:'center',
                xtype:'datecolumn',
                format:'Y.m.d',
                width:80,
                dataIndex:'orderDate'
            },
            {
                text:'orderAmt',
                xtype:'numbercolumn',
                format:'0,000',
                style:'text-align:center',
                align:'right',
                width:100,
                dataIndex:'orderAmount'
            },
            {
                text:'orderContent',
                style:'text-align:center',
                width:200,
                flex:1,
                xtype:'templatecolumn',//7
                tpl:[
                    '{orderDesc}>><br><tpl for="orderDetail">',
                    'goodsNumber:{detailNo} goodsName:{detailDesc}<br>',//8
                    '</tpl>'
                ]
            },
            {
                text:'accrueAmount',
                style:'text-align:center',
                align:'right',
                width:100,
                dataIndex:'accrueAmount'
            },
            {
                text:'isMember',
                align:'center',
                width:70,
                dataIndex:'isMember',
                xtype:'booleancolumn',
                trueText:'memberBuy',
                falseText:'nonMemberBuy'
            },
            {
                xtype:'actioncolumn',
                text:'orderChange',
                align:'center',
                width:100,
                tdCls:'my-action-col-cell',
                items:[
                    {
                        icon:'/resources/images/Save.png',
                        handler: function(){
                            alert('update')
                        }
                    },
                    {
                        icon:'/resources/images/Schedule.png',
                        handler: function(){
                            alert('delete')
                        }
                    }

                ]
            }
        ];

    }
});

