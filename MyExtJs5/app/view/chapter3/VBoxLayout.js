/**
 * Created by Administrator on 2016-05-04.
 */
Ext.define('ext5.view.chapter3.VBoxLayout',{
   alias : 'widget.chapter3-vboxlayout',
    extend:'Ext.panel.Panel',
    title:'Vbox layout',
    width:300,
    height:300,
    layout:{
        type:'vbox',
        align : 'stretchmax',
        padding : 10
    },
    items:[{
        xtype:'panel',
        title:'first panel',
        html:'width 150px <br> height 70px',
        height : 70,
        width : 150
    },{
        xtype:'panel',
        title:'second panel',
        width:100,
        html:'width 100 <br> height variable',
        flex: 1
    },{
        xtype:'panel',
        title:'third panel',
        html:'width 200px <br> height 100',
        width:200,
        height: 100
    }]
});