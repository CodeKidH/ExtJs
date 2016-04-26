/**
 * Created by Administrator on 2016-04-26.
 */
Ext.define('ext5.view.chapter3.FlexConfig',{
   alias: 'widget.chapter3-flexconfig',
    extend: 'Ext.container.Container',
    width: 400,
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