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

#### 1_5. CheckBox and CheckBoxGroup

    Ext.form.field.Checkbox
    Ext.form.CheckboxGroup
    Ext.form.CheckboxGroup will be extended from Ext.form.FieldContainer and It give support to form field and label in form panel

* 4_CheckBox.html
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
           xtype:'checkboxgroup', //1
            fieldLabel:'checkBox',
            name:'mobilephone', //2
            columns:3, //3
            items:[//4
                {
                    xtype:'checkbox', //5
                    boxLabel:'iphone4',
                    name:'ip4'//6
                },
                {
                    boxLabel :'iphone5',
                    xtype:'checkbox',
                    name:'mobilephone',
                    inputValue:'ip5'
                },
                {
                    boxLabel : 'galaxy5',
                    xtype:'checkbox',
                    name:'mobilephone',
                    inputValue:'gs'
                },
                {
                    boxLabel:'galaxynote',
                    xtype:'checkbox',
                    name:'mobilephone',
                    inputValue:'gnote'
                },
                {
                    boxLabel:'vega',
                    xtype:'checkbox',
                    name:'mobilephone',
                    inputValue:'vege'
                },
                {
                    boxLabel:'g2',
                    xtype:'checkbox',
                    name:'mobilephone',
                    inputValue:g2
                }
            ]
        });

    });
</script>
~~~

~~~java
    1. name:'mobilephone'
        - It will be used to access the group
~~~
 
![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/checkboxgroup.png)  

* How to handle it

    - Find a group
    ~~~javascript
          var checkboxgroup = fp.down('checkboxgroup[name=mobilephone]');
    ~~~
    
    - Check
    ~~~javascript
          /* checkboxgroup.setValue({
            mobilephone : 'gs'
        });

        checkboxgroup.setValue({
           ip4 : true
        });*/

        checkboxgroup.setValue({
            mobilephone : ['vega','g2'],
            ip4: true

        });
    ~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/checkboxchecked.png)  

#### 1_6. RadioButton and RadioGroup

    Ext.form.RadioGroup extend from checkgroup
    

* 5_Radio.html
~~~javascript
Ext.onReady(function () {

        var fp = Ext.create('ext5.view.chapter6.MyForm',{
           renderTo : document.body
        });
        fp.add({
          xtype:'radiogroup',
            fieldLabel:'radioGroup',
            allowBlank : false,
            columns: 3,
            items:[
                {
                    xtype:'radio',
                    boxLabel : 'window98',
                    name:'os',
                    inputValue : 'wind95',
                    checked : true
                },
                {
                    boxLabel : 'windowXP',
                    xtype:'radio',
                    name:'os',
                    inputValue : 'windxp'
                },
                {
                    boxLabel : 'window7',
                    xtype:'radio',
                    name:'os',
                    inputValue : 'win8'
                },
                {
                    boxLabel:'ubuntu',
                    xtype:'radio',
                    name:'os',
                    inputValue:'ubuntu'
                },
                {
                    boxLabel:'Mac',
                    xtype:'radio',
                    name:'os',
                    inputValue:'mac'
                }

            ]
        });

    });
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/radiogroup.png) 
      

#### 1_7. ComboBox and data load

    Ext.form.field.ComboBox
    If I use a store, I can load data easily


* Code.js-model
~~~javascript
Ext.define('ext5.model.smpl.Code',{
    extend: 'Ext.data.Model',
    fields:[
        {
            name:'cd_code',
            type:'string'
        },
        {
            name:'cd_desc',
            type:'string'
        }
    ]
});
~~~

* 6_Combo.html -store: data load
~~~html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>

</head>
<body>
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'ext5': '/app'
        }
    });
    Ext.require([
        'ext5.model.smpl.Code',
        'ext5.view.chapter6.MyForm'
    ]);

    Ext.onReady(function () {

        var fp = Ext.create('ext5.view.chapter6.MyForm',{
           renderTo : document.body
        });

        var store = Ext.create('Ext.data.Store',{
            model : ext5.model.smpl.Code,
            proxy:{
                type:'ajax',
                url:'/resources/data/code.json',
                reader:{
                    type:'json',
                    root:'entitys'
                }
            }
        });

        fp.add({
            xtype:'combo',
            name:'code',
            store : store,
            fieldLabel:'ComboBox',
            displayField:'cd_desc',//4
            valueField:'cd_code',//5
            queryMode:'remote',//6
            forceSelection : true,//7
            typeAhead:'true',//8
            typeAheadDelay:100,//9
            minChars:1,//10
            hideTrigger: false//11
        });

    });
</script>
</body>
</html>

~~~

~~~java
    1. displayField:'cd_desc'
        - Show me the display
    
    2. valueField:'cd_code'
        - data sended
    
    3. queryMode:'remote'
        - Automatically load a data by using store
        - If I don't need to communicate with server, I set up 'local'
    
    4. forceSelection : true
        - If user write it down something, It can be sended to server(true)
        - false, It is the other way around
    
    5. typeAhead:'true',
        - If User enter a similar value among combo data, It is make a value automatically
    
    6.  typeAheadDelay:100,//9
        - configure typeAhead
    
    7. minChars:1,//10
        - configure entered value for typeAhead
        
    8.  hideTrigger: false//11
        - Trigger button
        
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/combodata.png) 

#### 1_8. HTML rich Editor

    Ext.form.field.HtmlEditor
    - HtmlEditor include a complicated source
    

* HtmlEditor.html
~~~html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <link href="//cdn.sencha.com/ext/gpl/5.1.0/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="//cdn.sencha.com/ext/gpl/5.1.0/build/ext-all.js"></script>

</head>
<body>
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
            xtype : 'fieldcontainer',
            fieldLabel : 'rich text editor',
            itemId : 'htmlfield1',
            layout:'anchor',
            items:[
                {
                    xtype : 'htmleditor',
                    name:'bigcontent',
                    anchor:'100%'
                },
                {
                    anchor:'100%',
                    style:{
                        borderColor:'#000000',
                        borderStyle:'solid',
                        borderWidth:'1px'
                    },
                    xtype:'displayfield',
                    itemId:'bigcontent'
                }
            ]
        });

        var htmlcontainer = fp.down('container[itemId=htmlfield1]');//To get a field container

        htmlcontainer.insert(0,{
            xtype:'toolbar',
            items:[
                    '-',
                {
                    xtype:'button',
                    text:'Save',
                    handler: function(button){

                        var myView = button.up('fieldcontainer');
                        var bigcontent = myView.down('[itemId=bigcontent]');
                        var myEditor = myView.down('[name=bigcontent]');
                        if(button.getText() == "Save"){
                            button.setText('Edit');
                            bigcontent.setValue(myEditor.getValue());
                            myEditor.hide();
                            bigcontent.show();
                        }else{
                            button.setText("Save");
                            myEditor.setValue(bigcontent.getValue());
                            bigcontent.hide();
                            myEditor.show();
                        }
;                    }
                },
                    '-'
            ]
        })


    });
</script>
</body>
</html>

~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/htmleditor.png) 

#### 1_9. To make a popup by using picker field

    Ext.form.field.Picker
    - datefield will be extended from picker field


* 8_PickerField.html
~~~html
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'ext5': '/app'
        }
    });
    Ext.require([
        'ext5.view.chapter6.MyForm',
   'ext5.view.chapter6.CustomPickerField'
    ]);

    Ext.onReady(function () {

        var fp = Ext.create('ext5.view.chapter6.MyForm',{
           renderTo : document.body
        });
        fp.add({
            xtype:'chapter6-custompicker',
            fieldLabel:'First name',
            name:'first',
            allowBlank : false
        });
    });
</script>
~~~

* CustomPickerField.js
~~~javascript
/**
 * Created by Administrator on 2016-05-30.
 */
Ext.define('ext5.view.chapter6.CustomPickerField',{
   extend : 'Ext.form.field.Picker',//1
    alias:'widget.chapter6-custompicker',//2
    triggerCls : 'x-form-search-trigger',//3
    createPicker: function(){//4
        var me = this;
        if(!me.picker){//5
            me.picker = Ext.create('Ext.window.Window',{ //6
                title:'Hello',
                closeAction:'hide',
                height: 200,
                width : 150,
                layout:'fit',
                items:{
                    xtype:'grid',//7
                    border:false,
                    columns:[
                        {
                            header : 'World',
                            dataIndex:'field1',
                            flex:1
                        }
                    ],
                    store: Ext.create('Ext.data.ArrayStore',{
                        fields:['field1'],
                        data:[['Hello']]
                    }),
                    listeners:{
                        select : function(grid, record){//8
                            me.setValue(record.get('field1'));//9
                            me.collapse();//10
                        }
                    }
                }
            });
        }
        return me.picker; //11
    }
});

~~~
~~~java
    1. extend : 'Ext.form.field.Picker'
        - This class will be extended from 
    
    2.  triggerCls : 'x-form-search-trigger'
        - It will be extended from Ext.form.field.Trigger
        - I can use a trigger button cls
        - x-from-clear-trigger : Shape of 'X'
        - x-form-trigger : 'Select icon'
        - x-form-date-trigger : 'date'
    
    3. createPicker: function(){
        - Picker class have to have a createpicker()
    
    4.  if(!me.picker){//5
        - Check a picker exist
    
    5.  me.picker = Ext.create('Ext.window.Window',{ /
        - Create a Ext.window.Window and send a picker value
    
    6. xtype:'grid',//7
        - Add a grid to window
    
    7.   select : function(grid, record){
        - picker class provide a select () 
    
    8. me.setValue(record.get('field1'))
        - selected value will be set 
    
    9.  me.collapse();
        - fold a picker and hide
    
    10.  return me.picker; 
        - return picker value
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/custompicker.png) 

