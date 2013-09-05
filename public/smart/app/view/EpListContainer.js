Ext.define("sslsmart.view.EpListContainer", {
    extend: "Ext.Container",
    alias: 'widget.eplistcontainer',
    initialize: function() {
        this.callParent(arguments);
        var refreshButton ={
            xtype: 'button',
            text: '刷新',
            handler:this.onRefreshButtonTap,
            scope: this
        };

        var backButton ={
            xtype: 'button',
            ui:'back',
            text: '设备',
            handler:this.onBackButtonTap,
            scope: this
        };
            
        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: '灯光列表',
            items: [
                backButton,
                { xtype: 'spacer'},
                refreshButton
            ]
        };

        var epList = {
            xtype:'eplist',
            //store:Ext.getStore('Endpoint'),
            listeners: {
                //disclose:{
                //    fn:this.onEpListDisclose,
                //    scope:this
                //},
                itemswipe: {
                    fn:this.onEpListSwipe,
                    scope:this
                },
                painted:{
                    fn:this.onEpListPainted,
                    scope:this
                }
            }
        };
        this.add([topToolbar,epList]);
    },

    onRefreshButtonTap: function() {
        this.fireEvent('refreshEpCommand',this);
        //console.log('refreshDevCommand');
    },
    onBackButtonTap: function() {
        this.fireEvent('backEpCommand',this);
        //Ext.Msg.alert('back to device list');
    },
    onEpListSwipe: function(s,index,target,record,e) {
        //Ext.Msg.alert('' + e.deltaX);
        //console.log(index);
        //console.log(target);
        //console.log(record);
        //console.log(e);
        if (e.deltaX > 0) {
            this.fireEvent('detailLightCommand',this,record.data.net,record.data.ep);
        }
        else {
            this.fireEvent('backEpCommand',this);
        }
    },
    /*
    onEpListDisclose: function(list,record) {
        //Ext.Msg.alert('list disclosed');
        this.fireEvent('detailLightCommand',this,record.data.net,record.data.ep);
    },
    */
    onEpListPainted: function() {
        //Ext.Msg.alert('Ep painted');
        this.fireEvent('detailEpCommand',this);
    },
    config: {
        layout: {
            type: 'fit'
        }
    }

});
