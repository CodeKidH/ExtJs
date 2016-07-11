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