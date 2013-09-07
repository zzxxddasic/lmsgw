Ext.define('sslsmart.view.EpList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.eplist',
    config: {
        disableSelection: true,
        store: 'Endpoint',
        loadingText: '正在读取端点...',
        emptyText: '没有端点',
        itemTpl:'<pre> <div>{name}</div> <div>{net}</div> </pre>'
        //baseCls:'my-dataview'
        //onItemDisclosure:true
    }

});
