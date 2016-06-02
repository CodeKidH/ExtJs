/**
 * Created by Administrator on 2016-06-01.
 */
Ext.define('ext5.view.chapter6.DeliveryForm',{
    extend:'Ext.form.FieldSet',
    xtype:'chapter6-deliveryform',
    title:'destination info',
    layout:'column',
    initComponent: function(){

        var remoteJsonStore = Ext.create('Ext.data.JsonStore', {
            fields: [ 'zipcode', 'address'],
            proxy: {
                type: 'ajax',
                url: '/resources/data/jusoData.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'totalCount'
                }
            }
        });

        Ext.apply(this,{
            items:[
                {
                    xtype:'fieldcontainer',
                    fieldLabel:'destination address',
                    columnWidth:5,
                    layout:'hbox',
                    combineErrors:true,
                    defaultType:'radio',
                    items:[
                        {
                            name:'delivery',
                            inputValue:'newDelivery',
                            boxLabel:'New destination',
                            checked:true,
                            handler:this.resetDelivery,
                            scope:this,
                            margin:'0 5 0 0'
                        },
                        {
                            name:'delivery',
                            inputValue:'0',
                            boxLabel:'Member address',
                            handler:this.clickLatestDelivery,
                            scope:this,
                            margin : '0 5 0 0'

                        }
                    ]
                },
                {
                    xtype:'container',
                    layout:'hbox',
                    columnWidth:1,
                    defaultType:'textfield',
                    margin:'0 0 5 80',
                    items:[
                        {
                            xtype:'combo',
                            name:'findaddress',
                            queryMode:'remote',//1
                            width:400,
                            labelWidth:55,
                            fieldLabel:'Search address',
                            forceSelection: true,//2
                            displayField:'address',//3
                            valueField:'address',//4
                            pageSize:5,//5
                            minChars:1,//6
                            triggerAction:'query',//7
                            store:remoteJsonStore,//8
                            listConfig:{//9
                                getInnerTpl:function(displayField){
                                    return '<div data-qtip="{fullName}">'+
                                            '<div class="combo">{zipcode}</div>'+
                                            '<div class=""combo-address>{address}</div>'+
                                            '</div>';
                                }
                            }

                        },
                        {
                            xtype:'checkbox',
                            name:'basicaddress',
                            margin:'0 0 0 5',
                            boxLabel:'Normal Address'
                        }
                    ]
                }
            ]
        });

        this.callParent();
    }
});
