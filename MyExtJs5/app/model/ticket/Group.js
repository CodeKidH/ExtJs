/**
 * Created by Administrator on 2016-05-20.
 */
Ext.define('ext5.model.ticket.Group',{
    extend:'ext5.model.ticket.Base',
    fields:[
        {
            name: 'organizationId', reference:'Organization'

        },
        {
            name:'userId', reference:'User'
        }
    ]
});