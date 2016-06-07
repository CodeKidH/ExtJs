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
                                            '<div class="combo-address">{address}</div>'+
                                            '</div>';
                                }
                            },
                            listeners:{
                                select: function(combo, records){
                                    var zipcode = records[0].get('zipcode').split('-'),
                                        address = records[0].get('address'),
                                        zipcoderField = this.query('[name=zipcode1],[name=zipcode2]'),
                                        addressField = this.down('[name=address1]');

                                    Ext.each(zipcodeField, function(field, idx){
                                        field.setValue(zipcode[idx]);
                                    });
                                    addressField.setValue(address);
                                },
                                scope: this
                            }

                        },
                        {
                            xtype:'checkbox',
                            name:'basicaddress',
                            margin:'0 0 0 5',
                            boxLabel:'Normal Address'
                        }
                    ]
                },
                {
                    xtype:'container',
                    layout:'hbox',
                    itemId:'zipcodeContainer',
                    columnWidth:1,
                    defaultType:'textfield',
                    margin:'0 0 5 85',
                    defaults:{
                        readOnly:true
                    },
                    items:[
                        {
                            xtype:'textfield',
                            name:'zipcode1',
                            width:50
                        },
                        {
                            xtype:'label',
                            text:'-',
                            margin:'0 5 0 5'
                        },
                        {
                            xtype:'textfield',
                            name:'zipcode2',
                            width:50,
                            margin:'0 5 0 0'
                        },
                        {
                            xtype:'textfield',
                            name:'address',
                            flex:1
                        }
                    ]

                },
                {
                    xtype:'textfield',
                    columnWidth:1,
                    name:'address2',
                    margin:'0 0 5 85'
                }


            ]
        });

        this.callParent(arguments);
        this.setLatestDelivery();
    },

    setLatestDelivery: function () {
        Ext.Ajax.request({
            url: '/resources/data/latestDelivery.json',
            success: this.onLoad,
            scope: this
        });
    },

    onLoad: function (response) {
        var response = Ext.decode(response.responseText);       	// #1
        if (response.success) {                                 	// #2
            var radiogroup = {                                	// #3
                xtype: 'radiogroup',                            	// #4
                itemId: 'latestDelivery',
                fieldLabel: '최근 배송지',
                columnWidth: .5,                               	// #5
                items: []                                       	// #6
            };

            var i, len = response.data.length;                    	// #7
            for (i = 0; i < len; i++) {
                record = response.data[i];                      	// #8

                radiogroup.items.push({                        	// #9
                    boxLabel: record.label,                     	// #10
                    name: 'latestDelivery',
                    inputValue: record.latestnum,
                    handler: this.clickLatestDelivery,            	// #11
                    scope: this                               	// #12
                });
            }
            this.insert(1, radiogroup);                         		// #13
        }
    }

});
