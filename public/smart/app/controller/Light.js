Ext.define('sslsmart.controller.Light',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
          lightProperty: 'lightproperty',
          epListContainer: 'eplistcontainer',
          groupName: '#groupname'
        },
        control: {
            lightProperty: {onBackToEpCommand: 'backToEpList'},
            groupName : {initialize: 'initGroupName'}
        }
    },
    backToEpList:function() {
       var epListContainer = this.getEpListContainer();
       Ext.Viewport.animateActiveItem(epListContainer,{type:'slide', direction: 'right'});
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
