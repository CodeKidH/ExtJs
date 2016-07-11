Ext.define('ext5.view.chapter6.SurveyCheck', {
    extend: 'Ext.container.Container',
    xtype: 'chapter6-surveycheck',
    requires: ['ext5.view.chapter6.DataSet', 'ext5.model.smpl.Data'],		// #1
    layout: {
        type: 'vbox',						// #2
        align: 'stretch'						// #3
    },
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            items: [
                {
                    xtype: 'component',				// #4
                    html: me.label,				// #5
                    cls: 'x-form-check-group-label'			// #6
                }
            ]
        });
        this.callParent();						// #7
        this.on('render', function () {					// #8
            var checkboxGroup = {
                xtype:'checkboxgroup',
                columns: me.columns,
                name: me.code,
                style:{
                    padding:'5px 10px 5px 10px'
                },
                items:[]
            };

            check

        })
    }
});
