/**
 * Created by Administrator on 2016-07-13.
 */
Ext.define('ext5.view.chapter7.SelectionModelGrid',{
    extend:'Ext.grid.Panel',
    alias:'widget.chapter7-selectionmodelgrid',
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
                dataIndex:'customName',
                renderer: function(value){
                    return value + 'sir';
                }
            },
            {
                text:'orderDate',
                align:'center',
               // xtype:'datecolumn',
              //  format:'Y.m.d',
                width:80,
                dataIndex:'orderDate',
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view){
                    if((rowIndex % 2)== 0){ //4
                        metaData.align = 'left'; //5
                        metaData.style= 'color:red'; //6
                    }else {
                        metaData.align = 'right';
                        metaData.style='color:blue';
                    }
                    return Ext.util.Format.date(value, 'Y-m-d'); //7

                }
            },
            {
                text:'orderAmt',
                xtype:'numbercolumn',
              //  format:'0,000',
               // style:'text-align:center',
                align:'right',
                width:100,
                dataIndex:'orderAmount',
                renderer : function(value){
                    return this.setMoney(value,'Korea'); //10
                }

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
              text:'customEstimate',
                align : 'center',
                width : 70,
                dataIndex:'estimate',
                renderer: function(value, metaData){
                    metaData.tdCLS = 'thumb-'+value; //11
                    return '';
                }
            },
            {
                text:'accrueAmount',
                style:'text-align:center',
                align:'right',
                flex : 1,
                name:'accrueAmount',
                dataIndex:'accrueAmount',
                renderer: function(value){
                    return this.setMoney(value, 'Korea');
                }
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

    },

    selectRowInfo: function(){

        var selectionModel = this.getSelectModel(),
            record;

        if(selectionModel.getSelection().length == 0){
            selectionModel.select(0);
        }
        record = selectionModel.getSelection()[0];
        console.log(record.data)
    },

    setMoney : function(value, nation){
        if(nation =='Korea')
            nation = '$';
        else if(nation == 'US')
            nation = '$';
        return Ext.util.Format.currency(value, nation, 0);
    }
});

