/**
 * Created by Administrator on 2016-04-22.
 */

Ext.define('ext5.view.chapter2.ClassStatic',{
   extend : 'Ext.panel.Panel',
    xtype : 'chapter2-classstatic',
    config:{
        studentName: null
    },
    statics :{
        studentCount :0,
        student: function(studentName){
            return new this({
                studentName : studentName,
                studentCount : this.studentCount++
            });
        }
    }
});