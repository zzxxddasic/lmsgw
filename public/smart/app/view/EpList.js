Ext.define('sslsmart.view.EpList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.eplist',
    config: {
        loadText: '正在读取端点...',
        itemTpl:'<pre> <div>{ep}</div> <div>{net}</div> </pre>',
        onItemDisclosure:true
    }

});
