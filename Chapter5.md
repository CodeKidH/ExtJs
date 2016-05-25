# Form field and Form load, submit


# 1. Form and Form field

    1) Form class is extended from Ext.panel.Panel class and Create a Ext.form.Base object by using createForm()
    2) getForm() - I can get a form by using it , I use it because real form exist inside of form panel


#### 1_1. Create a form panel
    
    Form object will be defined by extending or creating the Ext.form.panel

* 1_FormPanelDefine.html
~~~html
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'ext5': '/app'
        }
    });
    Ext.require([
        'ext5.view.chapter6.MyForm'
    ]);

    Ext.onReady(function () {

        var fp = Ext.create('ext5.view.chapter6.MyForm',{
           renderTo : document.body
        });
    })
</script>
~~~


* MyForm.js
~~~javascript
/**
 * Created by Administrator on 2016-05-25.
 */
Ext.define('ext5.view.chapter6.MyForm',{
    extend : 'Ext.form.Panel', //1
    xtype : 'chapter6-myform', //2
    requires : [],
    frame: true,
    width : 500,//3
    title : 'create form panel',//4
    bodyStyle:'padding 6px',//5
    defaultType : 'textfield',//6
    default:{//7
        msgTarget:'under',
        anchor:'100%',
        labelWidth : 120,
        LabelAlign : 'right'
    },
    items:[], //8
    buttons:[
        {
            text:'translation',
            handler: function(){ //9
                this.up('form').getForm().submit({ //10
                    url : 'serverside/formSave.do',//11
                    success:function(form, action){//12
                        Ext.Msg.alert('success','save success');
                    },
                    failure: function(form, action){//13
                        Ext.Msg.alert('Failure','save Fail')
                    }
                });
            }
        }
    ]
});

~~~

~~~java
    1.  width : 500
        - Config the Form's width
    
    2. bodyStyle:'padding 6px'
        - Form's body style
    
    3. defaultType : 'textfield'
        - If items doesn't have a xtype, It will create a textfield
        
    4.  default:{
        - items default set
    
    
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/formInit.png)

