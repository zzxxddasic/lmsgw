Ext.define('sslsmart.view.GroupConfig',  {
    extend: 'Ext.Container',
    alias: 'widget.groupconfig',
    initialize: function() {
        this.callParent(arguments);
        var groupList = Ext.create(sslsmart.view.GroupList,{width:'30%'});
        var groupcontent = Ext.create(Ext.Container,{
                                                        width:'70%',
                                                        items:[
                                                            {
                                                                xtype:'toolbar',
                                                                docked:'bottom',
                                                                items:[
                                                                    {
                                                                        xtype:'button',
                                                                        ui:'back',
                                                                        text:'返回',
                                                                        handler: function() {
                                                                            //Ext.Msg.alert('df');
                                                                            this.fireEvent('groupToOper');
                                                                        },
                                                                        scope: this
                                                                    }
                                                                ]
                                                            }
                                                        ]});
        var lightList = Ext.create(sslsmart.view.LightList,{height:'40%',docked:'bottom'});
        this.add([groupList,lightList,groupcontent]);
    },
    config: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        }
    }
        /*
        items: [
            {
                flex: 2,
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },

                items: [
                    {
                        flex: 2,
                        xtype:'devlistcontainer'
                    },
                    {
                        flex:3,
                        xtype:'container',
                        items: {
                            xtype: 'lightlist'
                        },
                        html: 'right'
                    }
                ]
            }
    ]
    }
    */
});
