/**
 * Created by Administrator on 2016-05-04.
 */
Ext.define('ext5.view.chapter3.HBoxLayout',{
   alias : 'widget.chapter3-hboxlayout',
    extend:'Ext.panel.Panel',
    title : 'Hbox Layout',
    height:300,
    layout:{
        type:'hbox',
        align : 'stretchmax',
        padding:10
    },
    items:[{
        xtype:'panel',
        title:'firstPanel',
        html:'width 100px <br> height 200px',
        height : 200,
        width :100
    },{
        xtype:'panel',
        title:'second panel',
        html:'width variable <br> height 100px',
        height :100,
        flex:1
    },{
        xtype:'panel',
        title:'third panel',
        html:'width 100px <br> height150px',
        width :100,
        height: 150
    }]
});