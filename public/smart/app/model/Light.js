Ext.define('sslsmart.model.Light',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            'ieee','net','ep','lightname','dimmable','minlevel','groupname'
        ],
        proxy:{
            type:'ajax',
            //url:'data/light.json',
            url:'/lightinfo/1234',
            reader:{
                type:'json'
            }
        }

    }
});


