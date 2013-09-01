Ext.define('sslsmart.controller.Test',{
    extend:'Ext.app.Controller',
    /*
    init:function(){
        Ext.Msg.alert('test is running!');
    },
    */
    //init : function() {
    //    this.getGroupname().setValue([{text:'g1',value:'1'}]);
    //},
    config:{
        refs:{
          lig:'#lightoper',
          ligattr : 'lightproperty',
          ligname : '#lightname',
          ligok : '#lightok',
          ligidentify : '#identify',
          ligsave:'#lightsave',
          groupname : '#groupname'
        },
        control: {
            lig:{initialize:'add'},
            ligok : {tap : 'changetxt'},
            ligidentify : {tap : 'removetxt'},
            ligsave : {tap : 'updateLight'}
        }
    },
    add:function() {
        this.getLig().add({xtype:'light'});
    },
    changetxt:function() {
        var ligstore = Ext.create('Ext.data.Store',{model:'sslsmart.model.Light',
                                                    autoLoad:false
                                                    });

        ligstore.load(function(records,operation,success) {
                console.log(records);
                this.getLigattr().setRecord(ligstore.getAt(0));
                this.getGroupname().setValue(3);
            },this);
    },
    removetxt:function() {
        this.getLigname().setValue('');
        var grpstore = Ext.create('Ext.data.Store', {
            model : 'sslsmart.model.Group',
            proxy : {
                type:'ajax',
                url : 'data/group.json',
                reader : {
                    type : 'json'
                }
            },
            autoLoad:false
        });
        grpstore.load({
            callback:function(record,operation,success) {
                this.getGroupname().setStore(grpstore);
            },
            scope:this
        });
    },
    updateLight:function() {
        var us = Ext.create('sslsmart.model.Light',
                {lightname:'test'});
        this.getLigattr().updateRecord(us);
        us.save();
        Ext.Msg.alert('已保存灯光属性');
    }
});
