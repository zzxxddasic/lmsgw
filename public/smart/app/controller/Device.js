Ext.define('sslsmart.controller.Device', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            devListContainer:'devlistcontainer',
            devList: 'devlist',
            epListContainer: 'eplistcontainer',
            epList: 'eplist',
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
                detailLightCommand: 'onDetailLightCommand',
                detailEpCommand:'getEpInfo'
            }
        }
    },

    getDevInfo: function() {
        //console.log('get device info');
        Ext.getStore('Device').removeAll();
        Ext.getStore('Device').load();
    },

    getEpInfo: function() {
        //Ext.getStore('Endpoint').removeAll();
        //console.log(epproxy);
        var epstore = Ext.getStore('Endpoint');
        epstore.removeAll();
        epstore.load();
    },

    onRefreshDevCommand: function() {
        //Ext.Msg.alert('onRefreshDevCommand');
        this.getDevInfo();
    },
    onDetailDevCommand: function(scope,net) {
        //Ext.Msg.alert('onDetailDevCommand');
        //var detailDevice = this.getDetailDev();
        var epstore = Ext.getStore('Endpoint');
        var epproxy = epstore.getProxy();
        epproxy.setUrl('/epinfo/' + net);
        epstore.setProxy(epproxy);
        var epListContainer = this.getEpListContainer();
        Ext.Viewport.animateActiveItem(epListContainer, {type: 'slide', direction: 'right'});
    },
    onDetailLightCommand: function(scope,net,ep) {
        //Ext.Msg.alert('onDetailLightCommand');
        var ligstore = Ext.getStore('Light');
        var ligproxy = ligstore.getProxy();
        var lightProperty = this.getLightProperty();
        ligproxy.setUrl('/epinfo/' + net + '/' + ep);
        ligstore.setProxy(ligproxy);
        ligstore.load(function(records,operations,success) {
                lightProperty.setRecord(records[0]);
                //console.log(records[0].data);
            });
        Ext.Viewport.animateActiveItem(lightProperty, {type: 'slide', direction: 'right'});
    },

    onBackEpCommand: function() {
        //Ext.Msg.alert('onBackEpCommand');
        var devListContainer = this.getDevListContainer();
        Ext.Viewport.animateActiveItem(devListContainer, {type: 'slide', direction: 'left'});
    },
    launch:function() {
        this.callParent(arguments);
    },
    init:function() {
        this.callParent(arguments);
    }
});

