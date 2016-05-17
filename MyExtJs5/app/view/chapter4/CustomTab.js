
Ext.define('ext5.view.chapter4.CustomTab', {
    extend: 'Ext.Component',
    alias : 'widget.chapter4-customtab',
    onRender: function () {     // #1
        this.callParent(arguments);
        Ext.core.DomHelper.append(this.getEl(),     // #2
            '<div class="main_dashboard">' +
                '<div class="tab_bg">' +
                '<ul class="dashboard_tab_menu" id="ulroot">' +
                '</ul>' +
                '</div>' +
                '</div>'
        );

        this.setTabMenu();
    },

    setTabMenu: function(){
      var root = this.el.select('.dashboard_tab_menu').first();
        var html = '<li><a href = "#" tabidx="{tabIdx}" class="{tabCls}">{tabName}</a></li>';

        var tpl = Ext.DomHelper.createTemplate(html);

        Ext.Ajax.request({
           url:"/resources/data/tablist.json",
            method:"GET",
            success: function(result, request){
                var obj = Ext.JSON.decode(result.responseText);
                Ext.each(obj.entitys, function(tabData){
                    tpl.append(root,tabData);
                })
            }
        });
    },

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.on('afterrender', function () {
            this.el.on("click", function (eventObject, htmlElement) {
                eventObject.preventDefault();

                Ext.select('.dashboard_tab_menu li a').removeCls('on');
                Ext.get(htmlElement).addCls('on');

                var idx = Ext.get(htmlElement).getAttribute('tabidx');
                me.fireEvent('tabselect',idx);

            }, this,{
                deletegate:"a"
            });


            this.el.on("contextmenu", function (eventObject, htmlElement) { //1
                var menu = Ext.create('Ext.menu.Menu',{//2
                    items:[
                        {
                            xtype:'menuitem',//3
                            text:'delete',
                            scope : me,
                            handler: function(){ //4
                                this.destroyTabMenu(htmlElement);//5
                            }
                        },
                        {
                            xtype:'menuitem',
                            text:'before add',
                            scope: me,
                            handler : function(){
                                this.insertBeforeTabMenu(htmlElement);
                            }
                        },
                        {
                            xtype:'menuitem',
                            text:'after add',
                            scope: me,
                            handler:function(){
                                this.insertAfterTabMenu(htmlElement);
                            }
                        }
                    ]
                });

            eventObject.preventDefault();
                menu.showBy(htmlElement);

            }, this, {
                delegate: "a" ,  // #6
                preventDefault: true
            });
        });
    },

    destroyTabMenu:function(htmlElement){
        Ext.get(htmlElement).destroy();
    },

    insertBeforeTabMenu: function(htmlElement){
        var root = this.el.select('.dashboard_tab_menu').first(); //1
        var insertBefore = Ext.get(htmlElement).up('li'); //2

        root.createChild('<li><a href="#" tabIdx="0" class="">before add</a></li>',insertBefore,true); //3

    },

    insertAfterTabMenu:function(htmlElement){
        var insertAfter = Ext.get(htmlElement).up('li');
        Ext.DomHelper.insertAfter(insertAfter, '<li><a href="#" tabIdx="0" class="">after add</a></li>')
    }


});
