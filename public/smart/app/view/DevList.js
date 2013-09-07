Ext.define('sslsmart.view.DevList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.devlist',
    config: {
        disableSelection:true,
        //scrollable:'none',
        //store: 'Device',
        loadingText: '正在读取设备...',
        emptyText: '没有设备',
        itemTpl: [
                '<tpl if="lqi==0"><span>{name}<img src=resources/images/no.png width=20></img></span></tpl>',
                '<tpl if="lqi &gt; 0 && lqi &lt; 64"><span>{name}<img src=resources/images/poor.png width=20></img></span></tpl>',
                '<tpl if="lqi &gt; 63 && lqi &lt; 128"><span>{name}<img src=resources/images/few.png width=20></img></span></tpl>',
                '<tpl if="lqi &gt; 127 && lqi &lt; 191"><span>{name}<img src=resources/images/better.png width=20></img></span></tpl>',
                '<tpl if="lqi &gt; 190"><span>{name}<img src=resources/images/full.png width=20></img></span></tpl>',
                '<div>{net}</div>'
            ]
        //onItemDisclosure:true
    }

});
