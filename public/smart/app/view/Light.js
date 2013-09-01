Ext.define('sslsmart.view.Light',{
    extend : 'Ext.form.Panel',
    alias : 'widget.lightproperty',
    initialize: function() {
        this.callParent(arguments);
        var identifyButton = {
            xtype : 'button',
            id : 'identify',
            text : '标识'
        };
        var bottomToolbar = {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                identifyButton
            ]
        };
        var backEpButton = {
             xtype : 'button',
             //id : 'lightok',
             ui : 'back',
             text : '返回',
             handler:this.onBackEpButtonTap,
             scope: this
        };
        var saveButton = {
            xtype : 'button',
            //id : 'lightsave',
            text : '保存'
        };
        var topToolbar = {
            xtype : 'toolbar',
            //id : 'lighttoolbar',
            title : '灯光属性',
            docked : 'top',
            items:[
                backEpButton,
                {xtype: 'spacer'},
                saveButton
            ]
        };
        var lightName = {
            xtype : 'textfield',
            id : 'lightname',
            name : 'lightname',
            label : '名    称',
            value : 'light 1',
            clearIcon : false
        };
        /*
         var grpstore = Ext.create('Ext.data.Store', {
                    model : 'sslsmart.model.Group',
                    autoLoad:false
        });
         */                                                                                                                                            
        var groupName = {
            xtype : 'selectfield',
            id : 'groupname',
            name : 'groupname',
            label : '组',
            valueField:'addr',
            displayField:'name'
            //store: grpstore
        };
        var dimmable = {
            xtype : 'checkboxfield',
            id : 'dimmable',
            name : 'dimmable',
            label : '可 调 光',
            value : 'true',
            checked : true
        };

        var minLevel = {
            xtype : 'sliderfield',
            id : 'minlevel',
            name : 'minlevel',
            label : '最低亮度',
            minValue : 0,
            maxValue : 255,
            increment : 2,
            value : 20
        };
        var ieeeAdr = {
            xtype : 'textfield',
            readOnly : true,
            clearIcon : false,
            name : 'ieee',
            label : 'MAC'
        };
        var netAdr = {
            xtype : 'textfield',
            readOnly : true,
            clearIcon : false,
            name : 'net',
            label : '网络地址'
        };
        var epName = {
            xtype : 'textfield',
            readOnly : true,
            clearIcon : false,
            name : 'ep',
            label : '端点号'
        };
        this.add([topToolbar,
                {
                    xtype:'fieldset',
                    items: [
                        lightName,groupName,dimmable,minLevel,ieeeAdr,netAdr,epName
                    ]
                },
                bottomToolbar]);

    },
    config : {
        scrollable : 'vertical'
    },

/*
        items : [
        {
            xtype: 'fieldset',
            title: '',
            items: [
                {
                    xtype : 'textfield',
                    id : 'lightname',
                    name : 'lightname',
                    label : '名    称',
                    value : 'light 1',
                    clearIcon : false
                    //readOnly : true
                },
                {
                    xtype : 'selectfield',
                    id : 'groupname',
                    name : 'groupname',
                    label : '组',
                    valueField:'id',
                    displayField:'grp',
                    options : [
                    {
                        grp : '组1',
                        id : '1'
                    },
                    {
                        grp : '组2',
                        id : '2'
                    }
                    ]
                },
                {
                    xtype : 'checkboxfield',
                    id : 'dimmable',
                    name : 'dimmable',
                    label : '可 调 光',
                    value : 'true',
                    checked : true
                },
                {
                    xtype : 'sliderfield',
                    id : 'minlevel',
                    name : 'minlevel',
                    label : '最低亮度',
                    minValue : 0,
                    maxValue : 255,
                    increment : 2,
                    value : 20
                },
                {
                    xtype : 'textfield',
                    readOnly : true,
                    clearIcon : false,
                    name : 'ieee',
                    label : 'MAC'
                },
                {
                    xtype : 'textfield',
                    readOnly : true,
                    clearIcon : false,
                    name : 'net',
                    label : '网络地址'
                },
                {
                    xtype : 'textfield',
                    readOnly : true,
                    clearIcon : false,
                    name : 'ep',
                    label : '端点号',
                }
            ]
        },
        {
            xtype : 'toolbar',
            id : 'lighttoolbar',
            title : '灯光属性',
            docked : 'top',
            layout : {
                type : 'hbox'
            },
            items:[
            {
                xtype : 'button',
                //id : 'lightok',
                ui : 'back',
                text : '返回',
                handler:function() {console.log('back tap');
                        this.fireEvent('onBackCommand',this);
                    },
                scope: this
            },
            {
                xtype : 'spacer',
            },
            {
                xtype : 'button',
                id : 'lightsave',
                text : '保存'
            }
            ]

       }
       ]
       
    },
    */
    onBackEpButtonTap:function() {
        this.fireEvent('onBackToEpCommand',this);
    }
});
