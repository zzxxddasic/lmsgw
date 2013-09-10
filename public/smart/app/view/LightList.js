Ext.define("sslsmart.view.LightList", {
    extend: "Ext.DataView",
    alias: 'widget.lightlist',
    initialize: function() {
        this.callParent(arguments);
    },
    config: {
        store: {
            fields: ['name','addr'],
            proxy: {
                type:'ajax',
                url: '/oper',
                reader: {
                    type:'json'
                }
            }
        },
        itemTpl:'<div style="float:left;padding-top:50px;padding-left:5px;word-wrap:break-word;width:64px;height:64px;margin:20px;background-image:url(resources/images/06.png)">{name}</div>',
        //fullscreen:true,
        //scrollable:'vertical',
        listeners: {
            //itemtap:function(scope,index,target,record) {
            //        this.fireEvent('userOper',this,record.data.net,record.data.ep);
            //    },
            //itemtaphold:function() {Ext.Msg.alert('light hold'); },
            painted:function() {
                this.getStore().load();
            }
        }
    }

});
