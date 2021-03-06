Ext.define('sslsmart.model.Endpoint',{
    extend:'Ext.data.Model',
    config:{
        idProperty: 'num',
        fields:[
            'num','net','ep','onoff','level','epdesc','name','groupname','minlevel','dimmable'
        ],
        proxy: {
            type: 'ajax',
            url: '/epinfo',
            reader: {
                type: 'json'
            }
        }
    }
});


