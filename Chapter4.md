# ExtJs data package

    How to handle data by using data package in ExtJs
    


## 1. Model
    
    Model like a RDB(DB Table)
    

#### 1_1. Define a model

* Board.js(model)
~~~javascript

Ext.define('ext5.model.Board',{
   extend : 'Ext.data.Model',
    idProperty : 'id',
    fields:[
        {
            name:'id',
            type:'int'
        },
        {
            name:'title',
            type:'string'
        },
        {
            name:'userName',
            type:'string'
        },
        {
            name:'role',
            type:'string'
        },
        {
            name:'createDate',
            type:'data',
            dateFormat:'Y.m.d'
        },
        {
            name:'readCnt',
            type:'int'
        },
        {
            name:'deleteYn',
            type:'boolean',
            defaultValue:false
        }
    ]
});

~~~

#### 1_2. Validation of Model

    To add a validator to check the data

* Board.js
~~~javascript

Ext.define('ext5.model.Board',{
   extend : 'Ext.data.Model',
    requires:[
      'Ext.data.*'
    ],
    idProperty : 'id',
    fields:[
        {
            name:'id',
            type:'int'
        },
        {
            name:'title',
            type:'string'
        },
        {
            name:'userName',
            type:'string'
        },
        {
            name:'role',
            type:'string'
        },
        {
            name:'createDate',
            type:'data',
            dateFormat:'Y.m.d'
        },
        {
            name:'readCnt',
            type:'int'
        },
        {
            name:'deleteYn',
            type:'boolean',
            defaultValue:false
        }
    ],

    validators:{
        title : 'presence',
        content:{
            type:'length',
            min:2,
            max:10
        },
        deleteYn:{
            type:'inclusion',
            list:[
                true, 
                false
            ]
        },
        role : [
            {
                type:'exclusion',
                list:[
                    'Admin',
                    'Manager'
                ]
            }
        ],
        userName:{
            type:'format',
            matcher:/^[ㄱ-힣]"'\\{\\}\s]+$/
        }

    }
});

~~~

~~~java
    1. presence
        - It doesn't allow to be Null or ''
    
    2. length 
        - It's in the middle of the min and max
    
    3. inclusion
        - Include the list
    
    4. exclusion
        - Not Include the list
    
    5. format
        - By using regular expression It have to enter the Korean into computer
~~~


