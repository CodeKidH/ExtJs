/**
 * Created by Administrator on 2016-07-21.
 */
Ext.define('ext5.controller.Route',{
   extend:'Ext.app.Controller',
    alias:'controller.route',

    config:{
        routes:{
            'user' : 'findUser'
        }
    },
    findUser : function(){
        this.redirectTo('user/1234');
        console.log('recognize hash');
    }
});