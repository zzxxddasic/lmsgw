Ext.define('sslsmart.view.GroupConfig',  {
    extend: 'Ext.Container',
    alias: 'widget.groupconfig',
    initialize: function() {
        this.callParent(arguments);
        var groupList = Ext.create(sslsmart.view.GroupList,{width: '70%',style:"opacity:0.5"});
        var groupcontent = Ext.create(Ext.Container,{
                                                        width:'70%',
							items: [groupList]
                                                     /*   items:[
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
                                                        ]
							*/
							}
							);
        //var lightList = Ext.create(sslsmart.view.LightList,{height:'40%',docked:'bottom'});
        var lightList = Ext.create(sslsmart.view.LightList,{draggable: 'horizontal',scrollable:'vertical'});

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

        var topToolbar = {
            xtype: 'toolbar',
            docked: 'top',
	    title: 'Lighting',
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
        //this.add([lightList,groupList,topToolbar,bottomToolbar]);
    },
    config: {
	items: [
		{
			xtype: 'container',
			docked: 'top',
			left: 0,
			height: '100%',
			itemId: 'left',
			zIndex: 1,
			html: 'group select'
		},
	        {
			xtype: 'container',
			itemId: 'main',
			zIndex: 3,
			layout: {
				type: 'card'
			},
			draggable: 'horizontal',
			items: [
				{
					xtype: 'toolbar',
					docked: 'top',
					title: 'Lighting'
				},
				{
					xtype: 'container',
					style:"background:url(resources/images/bkimg460x320.jpg);background-repeat:no-repeat",
					html: 'main'
				}
			],
		}
	       ],
	//style:"background:url(resources/images/bkimg460x320.jpg);background-repeat:no-repeat",
        //layout: {
            //type: 'hbox',
        //    align: 'stretch'
        //}
    }
});
