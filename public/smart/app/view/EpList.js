Ext.define('sslsmart.view.EpList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.eplist',
    config: {
        disableSelection: true,
        store: 'Endpoint',
        loadText: '正在读取端点...',
        itemTpl:'<pre> <div>{name}</div> <div>{net}</div> </pre>',
        //baseCls:'my-dataview'
        //onItemDisclosure:true
    }

});
