Ext.define('sslsmart.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Carousel',
        'Ext.data.Store'
        //'app/store/devicelist'
    ],
    config: {
        layout:{
            type : 'vbox',
            align: 'stretch'
        },


        items: [
            {
                xtype:'carousel',
                id:'lightoper',
                ui:'dark',
                flex:1,
                direction:'horizontal',
                defaults:{
                    styleHtmlContent:true
                },
                items:[
                    {
                        html:'icon for light,group and scense operating.',
                        style:'background-color:grey'
                    },
                    {
                        html:'组操作，显示已存在的组，可增加组，删除组，点击组图标后对组进行改名，修改成员，查看成员状态，增删成员',
                        style:'background-color:grey50'
                    },
                    {
                        html:'场景操作，显示已存在的场景，可增加场景，删除场景，点击场景图标后对场景进行改名，修改成员，查看成员状态，增删成员',
                        style:'background-color:grey'
                    },
                    {
                        xtype:'panel',
                        id:'deviceList',
                        items:[
                            {
                                xtype:'toolbar',
                                title:'已联网的设备',
                                docked:'top',
                                layout:{
                                    type:'hbox',
                                    pack:'end'
                                },
                                items:[{
                                        ui:'action',
                                        align:'right',
                                        iconCls:'refresh',
                                        handler:function() {
                                            var dev = Ext.create('Ext.Panel', {
                                                    html:'i'
                                            });
                                            Ext.ComponentManager.get('deviceList').add(dev);
                                            i++;
                                        }
                                    }
                                ]
                            },
                            {
                                html:'已联网的设备'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
