Ext.define('sslsmart.controller.Light',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
          lightProperty: 'lightproperty',
          epListContainer: 'eplistcontainer',
          //epList: 'eplist',
          groupName: '#groupname'
        },
        control: {
            lightProperty: {
                            onBackToEpCommand: 'backToEpList',
                            onSaveLightCommand: 'saveLight',
                            onIdentifyCommand: 'identifyLight'
                        },
            groupName : {initialize: 'initGroupName'}
            //epList: {painted: 'getEpInfo'}

        }
    },
    backToEpList:function() {
       var epListContainer = this.getEpListContainer();
       Ext.Viewport.animateActiveItem(epListContainer,{type:'slide', direction: 'right'});
    },

    identifyLight: function() {
        var ligstore = Ext.getStore('Light');
        var record = ligstore.getAt(0);
        console.log('identify event',record.data.net,record.data.ep);
        Ext.Ajax.request({
            url: '/epidentify/' + record.data.net + '/' + record.data.ep,
        });
    },

    saveLight: function() {
        var ligstore = Ext.getStore('Light');
        this.getLightProperty().updateRecord(ligstore.getAt(0));
        console.log(ligstore);
        ligstore.sync();
        Ext.Msg.alert('Save Light OK');
    },

    getEpInfo: function() {
        //Ext.getStore('Endpoint').removeAll();
        Ext.getStore('Endpoint').load();
    },

    initGroupName:function() {
        var grpstore = Ext.create('Ext.data.Store', {
            model : 'sslsmart.model.Group',
            autoLoad:false
        });
        grpstore.load({
            callback:function(record,operation,success) {
                this.getGroupName().setStore(grpstore);
            },
            scope:this
        });

    },
    launch:function() {
        this.callParent(arguments);
    },
    init:function() {
        this.callParent(arguments);
    }
});
