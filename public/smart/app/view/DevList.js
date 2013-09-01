Ext.define('sslsmart.view.DevList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.devlist',
    config: {
        disableSelection:true,
        store: 'Device',
        loadText: '正在读取设备...',
        itemTpl: [
                '<span>{name}<img src=resources/images/sig.png width=20></img></span>',
                '<tpl if="lqi==0"><div>0</div></tpl>',
                '<div>{net}</div>'
            ],
        onItemDisclosure:true
    }

});
