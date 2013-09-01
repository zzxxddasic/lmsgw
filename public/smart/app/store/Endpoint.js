Ext.define('sslsmart.store.Endpoint',{
    extend:'Ext.data.Store',
    config:{
        model: 'sslsmart.model.Endpoint',
        data:[
            {num:'1',net:'2c36',ep:'10',onoff:'0',level:'100',epdesc:'sunsun',name:'灯1'},
            {num:'2',net:'2c36',ep:'11',onoff:'0',level:'100',epdesc:'sunsun',name:'灯2'}
        ]
    }
});


