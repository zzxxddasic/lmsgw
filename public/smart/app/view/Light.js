Ext.define('sslsmart.view.Light',{
    extend : 'Ext.form.Panel',
    alias : 'widget.lightproperty',
    initialize: function() {
        this.callParent(arguments);
        var identifyButton = {
            xtype : 'button',
            id : 'identify',
            text : '标识',
            handler:this.onIdentifyButtonTap,
            scope: this
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
            text : '保存',
            handler:this.onSaveButtonTap,
            scope: this
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
        var lightToggle = {
            xtype: 'togglefield',
            name: 'onoff',
            label: '开关',
        };
        var lightName = {
            xtype : 'textfield',
            id : 'lightname',
            name : 'name',
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
            name : 'minlevel',
            label : '最低亮度',
            minValue : 0,
            maxValue : 255,
            increment : 2,
            value :20 
        };
        /*
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
        */
        this.add([topToolbar,
                {
                    xtype:'fieldset',
                    items: [
                        lightName,lightToggle,groupName,dimmable,minLevel
                    ]
                },
                bottomToolbar]);

    },
    config : {
        scrollable : 'vertical'
    },

    onBackEpButtonTap:function() {
        this.fireEvent('onBackToEpCommand',this);
    },
    onSaveButtonTap:function() {
        this.fireEvent('onSaveLightCommand',this);
    },
    onIdentifyButtonTap:function() {
        this.fireEvent('onIdentifyCommand',this);
    }
});
