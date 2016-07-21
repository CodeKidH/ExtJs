/**
 * Created by Administrator on 2016-07-21.
 */
Ext.define('ext5.view.chapter8.ticket.Main',{
   extend:Ext.container.Container,
    alias:'widget.chapter8-ticketmain',
    width:500,
    requires:['ext5.view.chapter8.ticket.login.Login'],
    otherContent:[
        { //1
            xtype:'Login',
            path:'app/view/chapter8/ticket/login/Login.js'
        },
        {
            xtype:'LoginController',
            path:'app/view/chapter8/ticket/login/LoginController.js'
        },
        {
            xtype:'LoginModel',
            path:'app/view/chapter8/ticket/login/LoginModel.js'
        }
    ],
    initComponent : function(){
        Ext.apply(this,{
           items:[
               {
                   padding: '5 5 5 5',
                   xtype:'component',
                   id:'databinding'//2
               }
           ]
        });
        this.callParent(arguments);

        var fp = Ext.create('ext5.view.chapter8.ticket.login.Login',{//3
            autoShow : true,//4
            listeners:{
                scope:this,
                login:function(loginController,user, organization){ //5
                    console.log('Login Success:',user, organization); //6
                    fp.close(); //7
                }
            }
        });
    }
});
