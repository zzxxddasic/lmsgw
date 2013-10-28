Ext.define('sslsmart.view.Level',{
    extend: 'Ext.Panel',
    alias: 'widget.level',
    config: {
        centered: true,
        height: 100,
        width:300,
        ui: 'light',
        itemId: 'level',
        id: 'level',
        hideOnMaskTap: true,
        hidden: true,
        modal: true,
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        listeners: {
            painted: function() {
                var sl = this.getComponent(0).getComponent(0);
                sl.net = this.net;
                sl.ep = this.ep;
                //console.log(sl.ep,sl.net,this.net,this.ep);
            }
        }
    },
    initialize: function() {
        this.callParent(arguments);
        this.net = 0;
        this.ep = 0;
        var level = {
            xtype : 'sliderfield',
            id: 'lvlSl',
            itemId: 'lvlSl',
            name : 'level',
            label : '亮度',
            labelWidth: 60,
            minValue : 0,
            maxValue : 255,
            increment : 2,
            value :200,
            net: 1,
            ep: 2,
            listeners: {
                change: function(me,sl,thumb,newValue,oldValue,eOpts) {
                    console.log(newValue,this.net,this.ep);
                    var lvl = Ext.Ajax.request({
                        url: '/lvlabs/' + this.net + '/' + this.ep + '/' + newValue,
                        mothed: 'GET'
                    });
                }
            },
            scope: this
        };
        
        this.net = 0;
        this.ep = 0;

        this.add([
                {
                    xtype: 'fieldset',
                    items: [level]
                }
                ]
                );
    }
});
