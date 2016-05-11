/**
 * Created by Administrator on 2016-05-11.
 */
Ext.define('ext5.view.chapter4.MyCustomTabPanelStep1',{
   extend:'Ext.Component',
    cls : 'custom-tab',
    xtype:'chapter4-customstep1',
    initComponent: function(){
        var me = this;
        Ext.apply(this,{
            html : this.setTabTpl()
        });

        me.callParent(arguments);
    },

    setTabTpl: function() {
        return new Ext.XTemplate(
            '<div class="main_dashboard">',
            '<div class="tab_bg">',
            '<ul class="dashboard_tab_menu">',
            '<li><a href="#" class="tab1 on">Tab1</a></li>',
            '<li><a href="#" class="tab1 on">Tab1</a></li>',
            '<li><a href="#" class="tab1">Tab1</a></li>',
            '<li><a href="#" class="tab1">Tab1</a></li>',
            '</ul>',
            '</div>',
            '</div>'
        )
    }

});