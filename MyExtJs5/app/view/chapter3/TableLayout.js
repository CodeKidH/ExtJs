/**
 * Created by Administrator on 2016-04-29.
 */
Ext.define('ext5.view.chapter3.TableLayout',{
    alias:'widget.chapter3-tablelayout',
    extend:'Ext.panel.Panel',
     title:'table layout',
    width: 500,
    height: 300,
    layout:{
        type : 'table',
        columns : 4
    },
    items:[{
        height : 100,
        html :'header<br/>Colspan:4, rowspan:1',
        colspan:4
    },{
        width:100,
        height:200,
        html:'menu<br/>colsapne:2,rowspan:1',
        rowspan:2
    },{
        width:300,
        height:100,
        html:'content above<br/>colspan:2, rowspan:1',
        colspan:2
    },{
        width:100,
        height:200,
        html:'rightside<br/>colspan:1, rowspan:2',
       rowspan:2
    },{
        html:'contentdown1<br/><br/>colspan:1,rowspan:1',
        height:100,
        width:150
    },{
        html:'contentdown2<br/><br/>colspan:1, rowspan:1',
        height:100,
        width:150
    }]

});