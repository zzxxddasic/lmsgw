Ext.define('sslsmart.controller.Device', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            devListContainer:'devlistcontainer',
            devList: 'devlist',
            epListContainer: 'eplistcontainer',
            lightProperty: 'lightproperty'
        },
        control: {
            devListContainer: {
                refreshDevCommand:'onRefreshDevCommand',
                detailDevCommand:'onDetailDevCommand'
            },
            devList: {
                initialize: 'getDevInfo'
            },
            epListContainer: {
                refreshEpCommand: 'onrefreshEpCommand',
                backEpCommand: 'onBackEpCommand',
                detailLightCommand: 'onDetailLightCommand'
            }
        }
    },

    getDevInfo: function() {
        //console.log('get device info');
        Ext.getStore('Device').load();
    },

    onRefreshDevCommand: function() {
        //Ext.Msg.alert('onRefreshDevCommand');
        this.getDevInfo();
    },
    onDetailDevCommand: function() {
        //Ext.Msg.alert('onDetailDevCommand');
        //var detailDevice = this.getDetailDev();
        var epListContainer = this.getEpListContainer();
        Ext.Viewport.animateActiveItem(epListContainer, {type: 'slide', direction: 'left'});
    },
    onDetailLightCommand: function() {
        //Ext.Msg.alert('onDetailLightCommand');
        var lightProperty = this.getLightProperty();
        Ext.Viewport.animateActiveItem(lightProperty, {type: 'slide', direction: 'left'});
    },

    onBackEpCommand: function() {
        //Ext.Msg.alert('onBackEpCommand');
        var devListContainer = this.getDevListContainer();
        Ext.Viewport.animateActiveItem(devListContainer, {type: 'slide', direction: 'right'});
    },
    launch:function() {
        this.callParent(arguments);
    },
    init:function() {
        this.callParent(arguments);
    }
});

