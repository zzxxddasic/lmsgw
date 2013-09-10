Ext.define('sslsmart.controller.Oper',{ 
        extend:'Ext.app.Controller',
        config:{
            refs:{
                oper: 'useroper',
                devListContainer: 'devlistcontainer',
                groupConfig: 'groupconfig'
            },
            control: {
                oper: {
                    configSystem: 'showDevListContainer',
                    userOper: 'operlight',
                    groupConfig: 'toGroupConfig',
                },
                devListContainer: {
                    backOperCommand: 'showOper'
                },
                groupConfig: {
                    groupToOper: 'showOper'
                }
            },
        },


        operlight: function(scope,net,ep) {
            var togLig = Ext.Ajax.request({
                url: '/toggle/' + net + '/' + ep,
                method: 'GET',
            });
            
        },
        showDevListContainer: function() {
            var devcontainer = this.getDevListContainer();
            Ext.Viewport.animateActiveItem(devcontainer,{type:'slide',direction:'left'});
        },
        showOper: function() {
            var oper = this.getOper();
            Ext.Viewport.animateActiveItem(oper,{type:'slide',direction:'right'});
        },
        toGroupConfig: function() {
            var grpconfig = this.getGroupConfig();
            Ext.Viewport.animateActiveItem(grpconfig,{type:'slide',direction:'right'});
        }

    }
);
