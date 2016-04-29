/**
 * Created by Administrator on 2016-04-29.
 */
Ext.define('ext5.view.chapter3.ColumnLayout',{
   alias : 'widget.chapter3-columnlayout',
    extend:'Ext.panel.Panel',
    title:'ColumnLayout',
    width:400,
    height:250,
    layout : 'column',
    items:[{
        title:'column1',
        width:120
    },{
        title:'column2',
        columnWidth:0.7
    },{
        title:'column3',
        columnWidth:0.3
    }]

});