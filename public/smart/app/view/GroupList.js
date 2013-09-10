Ext.define('sslsmart.view.GroupList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.grouplist',
    initialize: function() {
        this.callParent(arguments);
    },
    config: {
        store:{
            fields: ['name','addr'],
            proxy: {
                type: 'ajax',
                url: '/groupinfo',
                reader: {
                    type: 'json'
                }
            }
        },
        loadingText: '正在读取组数据...',
        emptyText: '没有组',
        itemTpl:'<pre> <div>{name}</div> </pre>',
        listeners: {
            painted:function() {
                this.getStore().load();
            }
        }
        //baseCls:'my-dataview'
        //onItemDisclosure:true
    }

});
