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
            var togLig = Ext.Ajax.request({
                url: '/toggle/' + record.data.net + '/' + record.data.ep,
                method: 'GET',
                success: function(response,opts) {
                    //console.log(response);
                    if (response.responseText=='1') {
                        record.data.onoff = 1;
		    		    //icon.setStyle({backgroundImage:'url(resources/images/lighton_50x50.png)'});
                    }
                    else {
                        record.data.onoff = 0;
		    		    //icon.setStyle({backgroundImage:'url(resources/images/lightoff_50x50.png)'});

                    }
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
