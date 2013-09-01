Ext.define('sslsmart.model.Group',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'addr',type:'int'},
            {name:'name',type:'string'}
        ],
        proxy: {
            type: 'ajax',
            url: '/groupinfo',
            reader: {
                type: 'json'
            }
        }
    }
});


