/**
 * Created by Administrator on 2016-04-27.
 */
Ext.define('ext5.view.chapter3.AbsoluteLayout',{
   alias: 'widget.chpater3-absolutelayout',
    extend:'Ext.panel.Panel',
    height:300,
    width:300,
    padding:'5 5 5 5',
    layout:'absolute',
    autoScroll:true,
    border:true,
    items:[
        {
            title:'panel1',
            x:20,
            y:30,
            height:150,
            width:150,
            html:'x : 20, y : 30',
            frame:true
        },
        {
            title:'panel2',
            x:100,
            y:100,
            anchor:'80% 80%',
            html:'x :100 y : 100',
            fram : true
        }
    ]
});