/**
 * Created by Administrator on 2016-05-30.
 */
Ext.define('ext5.view.chapter6.CustomPickerField',{
   extend : 'Ext.form.field.Picker',
    alias:'widget.chapter6-custompicker',
    triggerCls : 'x-form-search-trigger',
    requires:[
        'ext5.view.chapter6.GridPicker',//1
        'ext5.view.chapter6.WindowPicker'//2
    ],
    createPicker: function(){
        var me = this;
        if(!me.picker){
            me.picker = Ext.widget(me.pickerAlias);//3
            me.picker.on('select',function(p, record){//4
                me.setValue(record.get('company')|| record.get('text'));//5
                me.collapse //6
            })
        }
        return me.picker;
    }
});
