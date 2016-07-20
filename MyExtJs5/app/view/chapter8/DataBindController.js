/**
 * Created by Administrator on 2016-07-20.
 */

Ext.define('ext5.view.chapter8.DataBindController',{
   extend:'Ext.app.ViewController',
    requires:[
        'Ext.window.MessageBox'
    ],
    alias:'controller.chapter8-databind',
    onClickButton : function () {
        Ext.Msg.confirm('conFirm','Are you sure?','onConfirm',this);
    },
    onConfirm: function(choice){ //3
        if(choice == 'yes'){
            var mypanel = this.getView().down('panel'); //1
            var mypanel = this.lookupReference('datapanel');//2
            var mypanel = this.getReferences().datapanel;//3
            mypanel.setTitle('access to reference'); //4

            this.getViewModel().set('name','Hello');//5

        }
    }
});