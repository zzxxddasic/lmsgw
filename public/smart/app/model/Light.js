Ext.define('sslsmart.model.Light',{
    extend:'Ext.data.Model',
    config:{
        idProperty: 'num',
        fields:[
            'num','net','ep','onoff','level','epdesc','name','groupname','minlevel','dimmable','inoper'
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


