Ext.define('sslsmart.view.DetailDev', {
    extend: 'Ext.form.Panel',
    requires: 'Ext.form.FieldSet',
    alias: 'widget.detaildev',
    config: {
        scrollable:'none'
    },
    initialize:function() {
        this.callParent(arguments);
        var backButton = {
            xtype: 'button',
            ui: 'back',
            text: '设备列表',
            handler:this.onBackButtonTap,
            scope: this
        };

        var saveButton={
            xtype: 'button',
            text: '保存'
        };

        var topToolbar = {
            xtype: 'toolbar',
            docked: 'top',
            title: '设备信息',
            items: [
                backButton,
                {xtype:'spacer'},
                saveButton
            ]
        };

        var deviceName = {
            xtype: 'textfield',
            name: 'name',
            label: '设备名称',
            clearIcon:false
        };
        
        this.add([
            topToolbar,
            {
                xtype:'fieldset',
                items:[deviceName]
            }
        ]);

    },

    onBackButtonTap: function() {
        this.fireEvent('backDevCommand',this);
    }

});
