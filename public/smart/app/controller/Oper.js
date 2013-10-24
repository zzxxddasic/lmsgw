Ext.define('sslsmart.controller.Oper',{ 
        extend:'Ext.app.Controller',
        config:{
            refs:{
                oper: 'lightlist',  //useroper
                devListContainer: 'devlistcontainer',
                groupConfig: 'groupconfig'
            },
            control: {
                oper: {
                    configSystem: 'showDevListContainer',
                    userOper: 'operlight',
                    groupConfig: 'toGroupConfig'
                },
                devListContainer: {
                    backOperCommand: 'showOper'
                },
                groupConfig: {
                    groupToOper: 'showOper'
                }
            }
        },


        operlight: function(scope,record,icon) {
            //console.log(record);
            var action = '';
            if (record.data.onoff == 1) {
                action = '/off';
                record.data.onoff = 0;
            } else {
                action = '/on';
                record.data.onoff = 1;
            }

            var togLig = Ext.Ajax.request({
                url: '/sw/' + record.data.net + '/' + record.data.ep + action,
                method: 'GET',
                success: function(response,opts) {
                /*
                    if (response.responseText=='1') {
                        record.data.onoff = 1;
                    }
                    else {
                        record.data.onoff = 0;

                    }
                */
                }
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
