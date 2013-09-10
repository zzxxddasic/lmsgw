Ext.define("sslsmart.view.Oper", {
    extend: "Ext.DataView",
    alias: 'widget.useroper',
    initialize: function() {
        this.callParent(arguments);
        var configButton ={
            xtype: 'button',
            text: '设置',
            handler:this.onConfigButtonTap,
            scope: this
        };
            
        var groupButton ={
            xtype: 'button',
            text: '组',
            handler:this.onGroupButtonTap,
            scope: this
        };

        var bottomToolbar = {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                { xtype: 'spacer'},
                groupButton,
                configButton
            ]
        };
        this.add([bottomToolbar]);
    },
    onConfigButtonTap: function() {
        this.fireEvent('configSystem');
    },
    onGroupButtonTap: function() {
        this.fireEvent('groupConfig');
    },
    config: {
        store: {
            fields: ['net','ep','name'],
            proxy: {
                type:'ajax',
                url: '/oper',
                reader: {
                    type:'json'
                }
            }
        },
        itemTpl:'<div style="float:left;padding-top:50px;padding-left:5px;word-wrap:break-word;width:64px;height:64px;margin:20px;background-image:url(resources/images/06.png)">{name}</div>',
        fullscreen:true,
        scrollable:'vertical',
        listeners: {
            itemtap:function(scope,index,target,record) {
                    //console.log(index,record);
                    //Ext.Msg.alert('light tapped'); 
                    this.fireEvent('userOper',this,record.data.net,record.data.ep);
                },
            itemtaphold:function() {Ext.Msg.alert('light hold'); },
            painted:function() {
                this.getStore().load();
            }
        }
    }

});
