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

Ext.define('ext5.model.Board', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.*'
    ],
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'userName',
            type: 'string'
        },
        {
            name: 'role',
            type: 'string'
        },
        {
            name: 'content',
            type: 'string'
        },
        {
            name: 'createDate',
            type: 'date',
            dateFormat: 'Y.m.d'
        },
        {
            name: 'updateDate',
            type: 'date',
            dateFormat: 'Y.m.d'
        },
        {
            name: 'readCnt',
            type: 'int'
        },
        {
            name: 'deleteYn',
            type: 'boolean',
            defaultValue: false
        }
    ],

    validators: {
        title: 'presence',        // #1
        content: {
            type: 'length', min: 2, max: 10 //#2
        },
        deleteYn: {
            type: 'inclusion', list: [true, false]  // #3
        },
        role: [
            {   type: 'exclusion', list: ['Admin', 'Manager']} // #4
        ],
        userName: {
            type: 'format', matcher: /^[ㄱ-힣"'\\{\\}\s]+$/   // #5
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

* 1_ModelDefine.html

~~~html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>Table Layout</title>
    <link rel="stylesheet" type="text/css"
          href="/ext/packages/ext-theme-gray/build/resources/ext-theme-gray-all-debug.css">
    <script type="text/javascript" src="/ext/build/ext-all-debug.js"></script>

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
        'ext5.model.Board'
    ]);

    Ext.onReady(function () {
        // 모델을 생성하고 필드를 채운다.
        var board = Ext.create('ext5.model.Board', {
            id: 1,
            title: '안녕하세요^^',
            userName: '홍길동2',
            content: '게시물 내용을 입력합니다.',
            role: 'Admin',
            readCnt: 300,
            deleteYn: false
        });
        // 생성된 모델을 검증한다.
        var errors = board.getValidation();
        console.log('오류발견여부  :', errors.dirty);
        console.log("오류필드 content:", errors.get('content'));
        console.log("오류필드 role:", errors.get('role'));
    });
</script>
</body>
</html>

~~~

* view
![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/validate.png)


#### 1_3. Write and update by using proxy

    Model has a proxy to communicate with server and can read and update the data

* board.js
~~~javascript
 proxy:{
      type:'ajax',
        actionMethods:{
            read:'GET',
            create:'POST',
            update:'POST',
            destroy:'POST'
        },
        api:{
            read : '/resources/data/boards.json?read',
            create : '/resources/data/boards.json?create',
            update : '/resources/data/boards.json?update',
            destroy : '/resources/data/boards.json?destroy'
        },
        reader:{
            type:'json',
            rootProperty:'entitys'
        }
    },
~~~

~~~java
    1.  actionMethods:{
        - To set up a communication way
        - GET, POST, PUT, DELETE
        - Usually This way will be used when it is on the RESTful
    2.  reader:{
        - Api reader action config
        
~~~

* board.json
~~~json
{
    entitys: [
    {
        "id": 33,
        "title": "ExtJS에 대한 문의",
        "content": "ExtJS Model클래스의 Proxy설정에 대해 알아봅니다.",
        "userName": "홍길동",
        "role": "User",
        "createDate": "2013-12-03",
        "updateDate": "2013-12-04",
        "readCnt": 230,
        "deleteYn": false
    }],
    success: true
}

~~~

* 2_ModelProxy.html
~~~html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>Table Layout</title>
    <link rel="stylesheet" type="text/css"
          href="/ext/packages/ext-theme-gray/build/resources/ext-theme-gray-all-debug.css">
    <script type="text/javascript" src="/ext/build/ext-all-debug.js"></script>

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
        'ext5.model.Board'
    ]);

    Ext.onReady(function () {
        // 모델을 생성하고 필드를 채운다.
        var board = Ext.create('ext5.model.Board', {
            title: 'Hello',
            userName: 'kyle',
            content: 'check it out.',
            role: 'user',
            deleteYn: false
        });
        board.save({
            success: function(record, operation){
                console.log('read date:',record.data)
            },
            failure: function(record,options){
                console.log('save fail');
            },
            callback: function(){
                console.log('callback');
            }


        })
    });
</script>
</body>
</html>

~~~

~~~java
    1.  board.save({
        - Call the save() to connect to server
        - save() can use a update, create
        - idProperty is important
        - idProperty == primary key
~~~

* view

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/save.png)

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/save2.png)
![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/create.png)


* 2_ModelProxy.html(add id)
~~~script
 var board = Ext.create('ext5.model.Board', {
        id:1,
        title: 'Hello',
        userName: 'kyle',
        content: 'check it out.',
        role: 'user',
        deleteYn: false
    });
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/update.png)
      

#### 1_4. Read and delete

* 2_ModelProxy.html - read
~~~javascript
 var board = Ext.create('ext5.model.Board', {
        id:1,
        title: 'Hello',
        userName: 'kyle',
        content: 'check it out.',
        role: 'user',
        deleteYn: false
    });
    board.save({
        success: function(record, operation){
            console.log('read date:',record.data)
        },
        failure: function(record,options){
            console.log('save fail');
        },
        callback: function(){
            console.log('callback');
        }


    })

    var board = ext5.model.Board.load(33,{
        success: function(record, operation){
            console.log('read data:',record.data);

        }
    })
~~~

~~~java
    1. ext5.model.Board.load(33,{
        - Call the load()
        - FirstParam is id
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/read.png)

