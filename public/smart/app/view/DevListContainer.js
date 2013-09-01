Ext.define("sslsmart.view.DevListContainer", {
    extend: "Ext.Container",
    alias: 'widget.devlistcontainer',
    initialize: function() {
        this.callParent(arguments);
        var refreshDevButton ={
            xtype: 'button',
            text: '刷新',
            handler:this.onRefreshDevButtonTap,
            scope: this
        };
            
        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: '已发现的设备',
            items: [
                { xtype: 'spacer'},
                refreshDevButton
            ]
        };

        var devList = {
            xtype:'devlist',
            store:Ext.getStore('Device'),
            listeners: {
                disclose:{
                    fn:this.onDevListDisclose,
                    scope:this
                }
            }
        };
        this.add([topToolbar,devList]);
    },

    onRefreshDevButtonTap: function() {
        //Ext.Msg.alert('refresh dev');
        this.fireEvent('refreshDevCommand',this);
    },
    onDevListDisclose: function() {
        //Ext.Msg.alert('list disclosed');
        this.fireEvent('detailDevCommand',this);
    },

    config: {
        layout: {
            type: 'fit'
        }
    }

});
