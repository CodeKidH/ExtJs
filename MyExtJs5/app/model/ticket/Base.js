/**
 * Created by Administrator on 2016-05-19.
 */
Ext.define('ext5.model.ticket.Base',{
   extend:'Ext.data.Model',
    requires:['Ext.data.proxy.JsonP'],
    fields:[
        {
            name : 'id',
            type:'int'
        }
    ],
    schema : {
        namespace : 'ext5.model.ticket',
        proxy:{
            type : 'jsonp',
            actionMethods:{
                read:'GET'
            },
            api : {
                read : 'http://extuxgroup.com/ticket-{entityName:uncapitalize}.do?read'
            },
            reader : {
                type:'json',
                rootProperty : 'entitys'
            }

        }
    }
});