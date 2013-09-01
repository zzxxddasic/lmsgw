Ext.define('sslsmart.view.Node',{
    extend : 'Ext.form.Panel',
    xtype : 'node',
    config : {
        items : [
        {
            xtype : 'checkboxfield',
            name : 'l1',
            label : '灯 1',
            value : 'sel',
            checked : true
        },
        {
            xtype : 'checkboxfield',
            name : 'l2',
            label : '灯 2',
            value : 'sel',
            checked : true
        },
        {
            xtype : 'checkboxfield',
            name : 'l3',
            label : '灯 3',
            value : 'sel',
            checked : true
        },
        {
           xtype : 'checkboxfield',
           name : 'l4',
           label : '灯 4',
           value : 'sel',
           checked : true
       }
       ]
    }
});
