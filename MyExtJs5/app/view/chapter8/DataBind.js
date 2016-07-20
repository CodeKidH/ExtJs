/**
 * Created by Administrator on 2016-07-20.
 */
Ext.define('ext5.view.chapter8.DataBind',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.chapter8-databind',
    requires:[
        'ext5.view.chapter8.DataBindModel',
        'ext5.view.chapter8.DataBindController'


    ],
    width: 500,
    bodyPadding: 10,
    viewModel:'chapter8-databind',
    controller : 'chapter8-databind',
    items:[{
       padding: '5 5 5 5',
        xtype:'panel', //1
        height:50,
        reference : 'datapanel',//2
        bind:{
            title:'{name}'//3
        }
    }],
    bind:{//3
        title : '{title}',
        html:'{html}'
    },
    tbar:[{ //4
        bind:'{buttonText}',
        handler : 'onClickButton'
    }]
});