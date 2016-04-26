/**
 * Created by Administrator on 2016-04-25.
 */
Ext.define('ext5.view.chapter2.DynamicPanel',{
   extend: 'Ext.panel.Panel',
    requires:['ext5.view.chapter2.RequireClass'],
    xtype:'chapter2-dynamicloading',
    title:'DynamicPanel',
    otherContent:[{
        xtype: 'dynamic loading class',
        path:'app/view/chapter2/RequireClass.js'
    }],

    items:[{
        xtype:'chapter2-requireclass'
    }]
});