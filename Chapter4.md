# ExtJs data package

    How to handle data by using data package in ExtJs
    


# 1. Model
    
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

* Destroy

~~~javascript
  var board = ext5.model.Board.load(33,{
        success: function(record, operation){
            console.log('read data:',record.data);

            record.erase({
                success : function(record, operation){
                    console.log('After delete, Value that send ')
                }
            });

        }

    });
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/destory.png)

#### 1_5 Relationship between models and Data loading

    Model == DB Table(RDB)
    


![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/RDB.jpg)

    1 : M(Ext.data.HashManyAssociation)
    M : M(Ext.data.BelongsToAssociation)
    1 : 1(Ext.data.association.HasOne)
    
* 3_ModelAssociation.html

~~~html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
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
        'Ext.Component',
        'ext5.model.ticket.User',
        'ext5.model.ticket.Organization',
        'ext5.model.ticket.Project',
        'ext5.model.ticket.Group'
    ]);

    Ext.onReady(function () {

    });
</script>
</body>
</html>

~~~

* Base.js

~~~javascript
/**
 * Created by Administrator on 2016-05-19.
 */
Ext.define('ext5.model.ticket.Base',{
   extend:'Ext.data.Model',
    requires:['Ext.data.proxy.JsonP'],
    fields:[
        {
            name : 'id',
            type:'int'
        }
    ],
    schema : {
        namespace : 'ext5.model.ticket',
        proxy:{
            type : 'jsonp',
            actionMethods:{
                read:'GET'
            },
            api : {
                read : 'http://extuxgroup.com/ticket-{entityName:uncapitalize}.do?read'
            },
            reader : {
                type:'json',
                rootProperty : 'entitys'
            }

        }
    }
});
~~~

~~~java
    It's like a schema in DB
    
    1.  extend:'Ext.data.Model',
        - Extend Model class
    
    2.  schema : {
        - Config a schema
    
    3.   namespace : 'ext5.model.ticket',
        - Location of package that extend Base class
    
~~~

* Organization.js

~~~javascript
Ext.define('ext5.model.ticket.Organization',{
    extend:'ext5.model.ticket.Base'
});
~~~

~~~java
    I don't need to config a field on Ext5
    So I make a field whenever I need it
~~~

* project.js
~~~javascript
Ext.define('ext5.model.ticket.Project',{
    extend:'ext5.model.ticket.Base',
    fields:[
        {
            name: 'organizationId', reference : 'Organization'
        },
        {
            name:'leadId',
            unique: true,
            reference : 'User'
        }

    ]
});
~~~

~~~java
    1. name: 'organizationId', reference : 'Organization'
        - Make a organizationId field
        - This field will refer to Organization model
        - It has a forign key of Organization
        - 1:m
    
    2. unique: true,
        - 1 : 1
    
~~~

* User.js

~~~javascript
Ext.define('ext5.model.ticket.User',{
    extend:'ext5.model.ticket.Base',
    fields:[
        {
            name : 'organizationId',
            reference: 'Organization'
        },
        {
            name : 'projectId',
            reference:'Project'
        }

    ]
});
~~~

* Group.js
~~~javascript
Ext.define('ext5.model.ticket.Group',{
    extend:'ext5.model.ticket.Base',
    fields:[
        {
            name: 'organizationId', reference:'Organization'

        },
        {
            name:'userId', reference:'User'
        }
    ]
});
~~~

* 3_ModelAssociation.html
~~~javascript
 Ext.onReady(function () {
        var eachRecord = function(records, model){
            console.log(model)
            Ext.each(records, function(rec, idx){
                console.log('no:'+idx, rec.data);
            })
        };

        var user = ext5.model.ticket.Organization.load(1,{
            success: function(org, operation){
                console.log('Organ info:',org.data);
            }
        });
    });
~~~

~~~java
    1.  ext5.model.ticket.Organization.load(1,{
        - Organization call load() and send id field value 1 
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/organread.png)

* 3_ModelAssociation.html
~~~javascript
Ext.onReady(function () {
        var eachRecord = function(records, model){
            console.log(model)
            Ext.each(records, function(rec, idx){
                console.log('no:'+idx, rec.data);
            })
        };

        var user = ext5.model.ticket.Organization.load(1,{
            success: function(org, operation){
                console.log('Organ info:',org.data);

                org.projects().load({
                    callback : function(records){
                        eachRecord(records, 'Organization(1) > Project(n)');
                    }
                });

                org.users().load({
                    callback: function(records){
                        eachRecord(records, 'Organization(1) > User (n)')
                    }
                });
            }
        });
    });
~~~

~~~java
    1.   org.projects().load({
        - org is result of load of organ
        - Access to projects()
        
~~~
![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/readUserOrgan.png)
    

    Get a User Info and access to involved with model

* 3_ModelAssociation.html

~~~javascript
Ext.onReady(function () {
        var eachRecord = function(records, model){
            console.log(model)
            Ext.each(records, function(rec, idx){
                console.log('no:'+idx, rec.data);
            })
        };

        ext5.model.ticket.User.load(2,{
            success : function(record, operation){
                console.log('userInfo:', record.data);
                record.getProject({
                    callback: function(project){
                        console.log('Project:', project.data);
                        project.users().load({
                           callback: function(records){
                               eachRecord(records, 'Project(1) > User(n)');
                           }
                        });
                    }
                });

            }

        });
~~~

~~~java
    1. record.getProject({
        - I get a Project Info by using UserInfo loaded 
    
    2. project.users().load({
        - I get Users info by using project info
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/Users.png)

# 2. Store

    - Model handle a data but Store can handle many data
    - Collection of Model is the Store
    - Store send a request to server to get data by using proxy

#### 2_1. Create Store(load)

* 4_StoreOverview.html
~~~html
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'ext5': '/app'
        }
    });
    Ext.require([
        'Ext.Component',
        'ext5.model.ticket.User'

    ]);

    Ext.onReady(function () {
        var store = Ext.create('Ext.data.Store',{  //1
            model : 'ext5.model.ticket.User',//2
            proxy : {                       //3
                type : 'ajax',
                url:'../../resources/data/ticket-user.json',
                reader : {
                    type:'json',
                    rootProperty : 'entitys'
                }
            },
            autoLoad : true //4
        });
        
        store.on('load',function(records){ //5
           records.each(function(item){ //6
                console.log(item.data)
            })
        });
    });
</script>
~~~

~~~java
    1. Ext.create('Ext.data.Store',{
        - Create a Store
    
    2.  model : 'ext5.model.ticket.User'
        - Define a model class I need
    
    3.  proxy : {
        - config a proxy
        
    4.  store.on('load',function(records){
        - If I get a data by using store, I have to define a listener
    
    5. 'load',function(records)
        - I use a 'load' event to get a loaded data
~~~

* ticket-user.json

~~~json
{    entitys: [
        {
            id: 2,
            name: "이순신",
            projectId: 2,
            organizationId: 1
        }
    ],
    success: true
}
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/store.png)
    

#### 2_2. To handle Store(CRUD)

* 5_StoreHandling.html

~~~html
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'ext5': '/app'
        }
    });
    Ext.require([
        'Ext.Component',
        'ext5.model.ticket.User',
        'ext5.model.ticket.Organization',
        'ext5.model.ticket.Project',
        'ext5.model.ticket.Group'

    ]);

    Ext.onReady(function () {
        var store = Ext.create('Ext.data.Store',{
            model : 'ext5.model.ticket.User',
            proxy : {
                type : 'ajax',
                actionMehtod:{
                  read:'GET',
                  create:'POST',
                  update:'POST',
                  destroy:'POST'
                },
                api:{ //1
                  read : '../../resources/data/ticket-user.json?read',
                  create:'../../resources/data/ticket-user.json?create',
                  update:'../../resources/data/ticket-user.json?update',
                  destroy:'../../resources/data/ticket-user.json?destroy'
                },
                writer:{
                  type:'json',
                  allowSingle : false, //2
                  writeAllFields: true  //3
                },
                reader : {
                    type:'json',
                    rootProperty : 'entitys'
                }
            },
            autoLoad : true
        });
    });
</script>
~~~

~~~java
    1.  api:{ 
        - Define a CRUD
    
    2. allowSingle : false
        - Store can handle only one data 
    
    3. writeAllFields: true
        - When It modify or delete, It config either to send a field value or not
~~~

* Add a new record model

~~~javascript
    var store = Ext.create('Ext.data.Store',{
            .......
        });
        
        var user = Ext.create('ext5.model.ticket.User',{ //1
           name : 'Kyle',
            projectId : 2,
            organizationId: 1
        });
        store.add(user); //2
        store.sync(); //3
~~~

~~~java
    1. var user = Ext.create('ext5.model.ticket.User',{ 
        - Create User model
    
    2.  store.add(user);
        - Add a model to store
    
    3.  store.sync(); 
        - To send a server the data
~~~

* allowSingle : false

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/allowFalse.png)

~~~java
    Form of Array
~~~

* allowSingle : true

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/allowTrue.png)


* Another way to add a model to store object
~~~javascript
    store.add(user); 
    
    store.insert(0,{
       name:'Hee',
        projectId:2,
        organizationId: 1
    });
    
    var arrayModel = [];
    for(var i = 0; i<5; i++){
        arrayModel.push({
            name:"Kyle"+i,
            projectId:2,
            organizationId:1
        });
    }
    
    store.add(arrayModel);
    var newRecords = store.getNewRecords();
    Ext.each(newRecords, function(record, index){
        console.log('New(',index,')',record.get('name'));
    });
    
    store.sync(); 
~~~

~~~java
    
    0. store.insert(0,{
        - Insert() can designate place to add a object
        
    1.  arrayModel.push({
        - Add a object
    
    2. store.getNewRecords();
        - getNewRecords() find a object added
    
 
~~~

![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/addedobject.png)
      
    - data to server because of sync();

    
![child1layout]
      (https://raw.githubusercontent.com/KyleJeong/ExtJs/master/MyExtJs5/images/serveradded.png)


#### 2_3. To modify the store

    I can get a records and modify the data by using getUpdateRecords()
    

* 5_StoreHandling.html

~~~javascript
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'ext5': '/app'
        }
    });
    Ext.require([
        'Ext.Component',
        'ext5.model.ticket.User',
        'ext5.model.ticket.Organization',
        'ext5.model.ticket.Project',
        'ext5.model.ticket.Group'

    ]);

    Ext.onReady(function () {
        var store = Ext.create('Ext.data.Store',{
            model : 'ext5.model.ticket.Group',
            proxy : {
                type : 'ajax',
                actionMehtod:{
                  read:'GET',
                  create:'POST',
                  update:'POST',
                  destroy:'POST'
                },
                api:{ //1
                  read : '../../resources/data/ticket-group.json?read',
                  create:'../../resources/data/ticket-group.json?create',
                  update:'../../resources/data/ticket-group.json?update',
                  destroy:'../../resources/data/ticket-group.json?destroy'
                },
                writer:{
                  type:'json',
                  allowSingle : false, //2
                  writeAllFields: true  //3
                },
                reader : {
                    type:'json',
                    rootProperty : 'entitys'
                }
            },
            autoLoad : true
        });

        var user = Ext.create('ext5.model.ticket.User',{ //1
           name : 'Kyle',
            projectId : 2,
            organizationId: 1
        });
        store.add(user); //2

        store.insert(0,{
           name:'Hee',
            projectId:2,
            organizationId: 1
        });

        var arrayModel = [];
        for(var i = 0; i<5; i++){
            arrayModel.push({
                name:"Kyle"+i,
                projectId:2,
                organizationId:1
            });
        }

        store.add(arrayModel);
        var newRecords = store.getNewRecords();
        Ext.each(newRecords, function(record, index){
            console.log('New(',index,')',record.get('name'));
        });

        store.sync(); //3
    });
</script>
~~~

* ticket-group.json
~~~json
{
    entitys: [
        {
            id: 1,
            name: "manager",
            organizationId: 1
        },
        {
            id: 2,
            name: "dev",
            organizationId: 1
        },
        {
            id: 3,
            name: "QA",
            organizationId: 1
        },
        {
            id: 4,
            name: "Support",
            organizationId: 1
        },
        {
            id: 5,
            name: "sales",
            organizationId: 1
        }
    ],
    success: true,
    "errMsg": "",
    "errTitle": ""
}

~~~
    
