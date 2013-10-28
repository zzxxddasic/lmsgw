Ext.define('sslsmart.view.SideNav', {
  extend: 'Ext.Container',
  
  alias: 'widget.sidenav',

  config: {
    cls: 'sidenav',
    items: [
      {
        xtype: 'container',
        docked: 'top',
        left: 0,
        height: '100%',
        layout: 'card',
        itemId: 'left',
        cls: 'left',
        zIndex: 1,
        html: 'This is your left hand container. Normally for navigation'
      },
      {
        xtype: 'container',
        docked: 'top',
        right: 0,
        height: '100%',
        layout: 'card',
        cls: 'right',
        itemId: 'right',
        zIndex: 2,
	items:[
		{
		xtype: 'grouplist',
		itemId: 'grpselect',
		height: '100%',
		layout: 'fit'
		}
	]
        //html: 'This is your right hand container. Normally for search'
      },
      {
        xtype: 'container',
	height: '100%',
	width: '100%',
        zIndex: 3,
        itemId: 'main',
        cls: 'main',
        layout: {
          type: 'card'
        },
        scrollable: 'none',
	style: 'opacity:1',
        draggable: 'horizontal',
        items: [
          {
            xtype: 'toolbar',
            itemId: 'topToolbar',
            cls: 'top-toolbar',
            docked: 'top',
            title: 'Lighting',
            items: [
            {
              xtype: 'button',
              docked: 'right',
              itemId: 'showRightBtn',
              margin: '.3em .3em .3em 0',
              ui: 'action-round',
              iconCls: 'list',
              iconMask: true,
              text: ''
            },
            {
              xtype: 'button',
              docked: 'left',
              itemId: 'showLeftBtn',
              margin: '.3em 0 .3em .3em',
              ui: 'action-round',
              iconCls: 'list',
              iconMask: true,
              text: ''
            }
            ]
          },
          {
            xtype: 'container',
		   docked: 'top',
		   layout: 'hbox',
		   height: '100%',
		   items:[
			{
				xtype: 'lightlist',
				width: '95%'
			},
			{
				xtype: 'container',
				width: '5%',
				items:{xtype:'button',itemId: 'level',ui:'round',draggable: 'vertical',height: '30%'}
			}
			]
          }
        ]
      }
    ]
  }

});
