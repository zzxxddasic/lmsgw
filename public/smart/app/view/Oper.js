Ext.define("sslsmart.view.Oper", {
    extend: "Ext.DataView",
    alias: 'widget.useroper',
    initialize: function() {
        this.callParent(arguments);
        this.h = 0;
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
	    style:"opacity:0.5",
            items: [
                { xtype: 'spacer'},
                groupButton,
                configButton
            ]
        };
        var level = Ext.create('sslsmart.view.Level');
        this.add([level,bottomToolbar]);
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
	//style:"background:url(resources/images/bkimg460x320.jpg);background-repeat:no-repeat",
        itemTpl:'<div style="float:left;padding-top:50px;padding-left:5px;word-wrap:break-word;width:52px;height:52px;margin:10px;background-image:url(resources/images/lighton.png)">{name}</div>',
	//itemTpl:'<div width:60px;height:100%;background:#000>kkkkkkkkkkkkk</div>',
        fullscreen:true,
        scrollable:'vertical',
        listeners: {
            itemtap:function(scope,index,target,record) {
                    //console.log(index,record);
                    //Ext.Msg.alert('light tapped'); 
                    //console.log(this.h);
                    if (this.h == 0) {
                        this.fireEvent('userOper',this,record.data.net,record.data.ep);
                    };
                    this.h = 0;
                },
            itemtaphold:function(s,index,target,record,e,eOpts) {
                            //Ext.Msg.alert('light hold');
                            this.h = 1;
                            var lvl = this.getComponent('level');
                            console.log(record.get('net'));
                            lvl.net = record.get('net');
                            lvl.ep = record.get('ep');
                            lvl.show();
                        },
            painted:function() {
                this.getStore().load();
            }
        }
    }

});
