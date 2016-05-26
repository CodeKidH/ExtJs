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


#### 1_2. Base Class

    1. Base class (Ext.form.field.Base) refer to Ext.form.Labellabel class and Ext.form.field.Field Class
    2. Base class will not create object but Form field class use it by extending 

#### 1_3. TextField
    
    
    Ext.form.field.Text
        1. Ext.form.field.ComboBox
        2. Ext.form.field.Date
        3. Ext.form.field.File
        4. Ext.form.field.Number
        5. Ext.form.field.Spinner
        6. Ext.form.field.TextArea


* 2_TextField.html

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
        fp.add({
            xtype : 'textfield',//1
            msgTarget : 'under',//2
            anchor:'100%',//3
            labelWidth : 120,//4
            fieldLabel : 'TextField',//5
            allowBlank : false,//6
            emptyText : 'This field only allow to write in English',//7
            maskRe: /[a-z]/i,//8
            name:'mytext',//9
            enableKeyEvents: true,//1o
            listener:{
                keydown: function(field, event){
                    console.log('keydown',arguments)
                },
                keypress: function(field,event){
                    console.log('keypress',arguments)
                },
                keyup: function(field, event){
                    console.log('keyup',arguments)
                }
            }
        });
    })
</script>
~~~

~~~java
    1. xtype : 'textfield'
        - widget's name
    
    2. msgTarget : 'under',
        - config of Ext.form.Labellabel, 
        - It will set up a location of field class message area
    
    3. anchor:'100%'
        - Form panel's default layout is anchor layout
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/textfield.png)
    
#### 1_4. Number field

    Ext.form.field.Number


* 3_NumberField.html
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
        fp.add({
           xtype : 'numberfield',
            fieldLabel: 'NumberField',
            name:'mynumber',
            value : 1.0,
            maxValue : 10,
            minValue : 0,
            step : 0.01,
            decimalPrecision : 2,
            allowBlank : false,
            allowDecimals: true,
            mouseWheelEnabled : true,
            emptyText : 'decimal point'
        });

    })
</script>
~~~

~~~java
    1. value : 1.0,
        - permission of number
    
    2.  step : 0.01,
        - Increase or decrease in number when I use a mouse scroll
    
    3. mouseWheelEnabled : true,
        - Mouse wheel
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/numberfield.png)
