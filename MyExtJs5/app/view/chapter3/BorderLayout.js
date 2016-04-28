/**
 * Created by Administrator on 2016-04-28.
 */
Ext.define('ext5.view.chapter3.BorderLayout',{
   alias: 'widget.chapter3-borderlayout',
    extend:'Ext.container.Container',
    width:400,
    height:400,
    layout:'border',
    items:[{
        region : 'north',
        title:'north',
        margins:5,
        height:100,
        xtype:'panel'
    },{
        title:'west',
        region:'west',
        margins:'0 5 0 5',
        width: 100,
        collapsible : true,
        split:true,
        titleCollapse:true
    },{
        title:'center',
        region:'center'
    },{
        title:'east',
        region:'east',
        margins:'0 5 0 5',
        flex:5,
        collapsible:true,
        collapsed:false
    },{
        title:'south',
        region:'south',
        margins:'0 5 5 5',
        flex:3,
        split:true
    }]
});