/**
 * Created by Administrator on 2016-06-01.
 */
Ext.define('ext5.view.chapter6.CheckOutMaster',{
    extend:'Ext.form.Panel',
    alias:'widget.chapter6-checkoutmaster',
    requires:[
        'ext5.view.chapter6.DeliveryForm',
        'ext5.view.chapter6.DeliveryPersonInfo'
    ],
    title:'Shipping/payment',
    bodypadding:5,
    width:700,
    initComponent:function(){
        var me = this;
        Ext.apply(me,{
            fieldDefaults:{
                labelAlign:'right',
                labelWidth:80,
                msgTarget:'qtip'
            },
            items:[

                {
                    xtype : 'chapter6-deliveryform'
                },
                {
                    xtype:'chapter6-deliveryperson'
                }

            ],
            buttons:[
                {
                    text:'Reset',
                    scope:this,
                    handler:this.onResetClick
                },
                {
                    text:'Submit',
                    scope:this,
                    handler:this.onCompleteClick
                }

            ]
        });
        me.callParent(arguments);
    },

    onResetClick :function(){
        this.getForm().reset();
    },

    onCompleteClick: function(){
        var form = this.getForm();
        if(form.isValid()){
            console.log('Submitted Value',form.getValues(true));
            form.submit({
                url:'server.jsp'
            })
        }

    }

});

