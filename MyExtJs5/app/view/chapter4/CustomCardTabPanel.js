/**
 * Created by Administrator on 2016-05-16.
 */
Ext.define('ext5.view.chapter4.CustomCardTabPanel',{
   extend:'Ext.container.Container',
    cls: 'custom-tab',
    requires:[
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'ext5.view.chapter4.CustomTab'
    ],
    layout:'border',
    height: 400,
    xtype:'chapter4-customcardtabpanel',
    items:[
        {
            region : 'north',
            xtype:'chapter4-customtab',
            listeners:{ //1
                tabselect : function(idx){ //2
                    console.log('which tab do you select?',idx);
                }

            }

        },{
            region : 'center',
            xtype:'container'
        }
    ]
});