/**
 * Created by Administrator on 2016-04-19.
 */
Ext.define('ext6.view.chapter2.DefineClass',{
   extend:'Ext.panel.Panel',
    alias: 'widget.chapter2-defineclass',
    initComponent:function(){
        var me = this;
        Ext.apply(me,{
           title: 'Hello',
            items: [{
                xtype : 'button',
                text:'Click me'
            }]
        });

        me.callParent(arguments);
        me.on('render',function(component){
           console.log('On will be started when class is rendered on the browser ');
        });
    }
});