/**
 * Created by Administrator on 2016-04-28.
 */
Ext.define('ext5.view.chapter3.FitLayout',{
   alias:'widget.chapter3-fitlayout',
    extend:'Ext.panel.Panel',
    height:300,
    width:300,
    padding:'5 5 5 5',
    layout:'fit',
    items:{
        xtype:'button',
        text:'Button has a own size, but If paraent layout is fit, Button will use a whole parent size'
    }
});