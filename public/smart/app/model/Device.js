Ext.define('sslsmart.model.Device',{
    extend:'Ext.data.Model',
    config:{
        idProperty: 'id',
        fields:[
            'num','src','snet','ieee','net','name','lqi'
        ],
        proxy: {
            type: 'ajax',
            url: '/deviceinfo',
            reader: {
                type: 'json'
            }
        },
        autoLoad:false
    }
});


