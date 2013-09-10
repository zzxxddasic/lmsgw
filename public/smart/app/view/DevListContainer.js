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
            
        var backOperButton ={
            xtype: 'button',
            text: '操作',
            ui:'back',
            handler:this.onBackOperButtonTap,
            scope: this
        };

        var topToolbar = {
            xtype: 'toolbar',
            docked: 'top',
            title: '已发现的设备',
            items: [
                backOperButton,
                { xtype: 'spacer'},
                refreshDevButton
            ]
        };

        //var devList = Ext.create(
        var devList = 
            //sslsmart.view.DevList,
            {
                xtype:'devlist',
                store:'Device',
                listeners: {
                    //disclose:{
                    //    fn:this.onDevListDisclose,
                    //    scope:this
                    //},
                    itemswipe:{
                        fn:this.onDevListSwipe,
                        scope:this
                
                    }
                }
            };
       // );
        //devList.on('itemtaphold',function() {Ext.Msg.alert('tap')});
        //Ext.getStore('Device').load();
        //console.log(devList);
        this.add([topToolbar,devList]);
    },

    onRefreshDevButtonTap: function() {
        //Ext.Msg.alert('refresh dev');
        this.fireEvent('refreshDevCommand',this);
    },

    onBackOperButtonTap: function() {
        this.fireEvent('backOperCommand',this);
    },

    onDevListSwipe: function(scope,index,target,record,e) {
        //Ext.Msg.alert('Dev List swip');
        if (e.deltaX > 0) {
            this.fireEvent('detailDevCommand',this,record.data.net);
        }
    },
/*
    onDevListDisclose: function(list,record) {
        //Ext.Msg.alert('list disclosed');
        //console.log(record.data.net);

        this.fireEvent('detailDevCommand',this,record.data.net);
    },
*/
    config: {
        layout: {
            type: 'fit'
        }
    }

});
