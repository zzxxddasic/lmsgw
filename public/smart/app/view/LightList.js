Ext.define("sslsmart.view.LightList", {
    extend: "Ext.DataView",
    alias: 'widget.lightlist',
    initialize: function() {
        this.callParent(arguments);
    },
	lastSelect:'div[id^="ffffff"]',
	onOff:{},
    hold: 0,
    config: {
        store: {
            fields: ['net','ep','name','onoff'],
            proxy: {
                type:'ajax',
                url: '/oper',
                reader: {
                    type:'json'
                }
            }
        },
        itemTpl:[
        '<tpl if="onoff==1"><div id={net}{ep} style="float:left;opacity:0.6;padding-top:50px;padding-left:1px;font-size:12px;word-wrap:break-word;width:50px;height:50px;margin:25px;background-image:url(resources/images/lighton_50x50.png);color:#FFF">{name}</div></tpl>',
        '<tpl if="onoff==0"><div id={net}{ep} style="float:left;opacity:0.6;padding-top:50px;padding-left:1px;font-size:12px;word-wrap:break-word;width:50px;height:50px;margin:25px;background-image:url(resources/images/lightoff_50x50.png);color:#FFF">{name}</div></tpl>'
        ],
        scrollable:'vertical',
        listeners: {
            itemtap:function(scope,index,target,record) {
                this.fireEvent('updateLevel',this,record);
                this.selectedItem = record;
                if (this.hold == 1) {
                    this.hold = 0;
                    return;
                }
                this.hold = 0;
		        //var selGrp = this.getParent().getParent().getParent().getComponent('right').getComponent('grpselect');
		        //console.log(selGrp.getSelection());
		        var selectId = 'div[id^=' + '"' + record.data.net + record.data.ep + '"' + ']';
		        this.selectIcon = this.element.select(selectId);
		        this.selectIcon.setStyle({opacity:'1',color:'yellow',fontSize:'14px'});

		        //if((selectId in this.onOff) == false) { this.onOff[selectId]=1;}
		        this.onOff[selectId] = record.data.onoff;
		        if (this.onOff[selectId] == 0) {
			        this.selectIcon.setStyle({backgroundImage:'url(resources/images/lightoff_50x50.png)'});
			    }
		        else {
			        this.selectIcon.setStyle({backgroundImage:'url(resources/images/lighton_50x50.png)'});
			    }

		        //console.log(this.onOff);
		        var selectIdLast = this.lastSelect;
		        //console.log(selectIdLast);
		        if (selectId != selectIdLast) {
		    		this.lastSelectIcon = this.element.select(selectIdLast);
		    		this.lastSelectIcon.setStyle({opacity:'0.6',color:'#fff',fontSize:'12px'});
			    }  else {
                    this.fireEvent('userOper',this,record,this.selectIcon);
			        //console.log('Operate Lighting',this.onOff[selectId]);
			        if (this.onOff[selectId] == 0) {
				        //this.onOff[selectId] = 1;

		    		    this.selectIcon.setStyle({backgroundImage:'url(resources/images/lighton_50x50.png)'});
				    }
			        else {
				        //this.onOff[selectId] = 0;
		    		    this.selectIcon.setStyle({backgroundImage:'url(resources/images/lightoff_50x50.png)'});
				    }
			    }
		        this.lastSelect = selectId;
            },
            itemtaphold:function(scope,index,target,record) {
                var initvalue = scope.selectIcon.el.getHtml(); 
                this.hold = 1;
                Ext.Msg.prompt('修改灯具名称','请输入灯名',
                    function(button,value) {
                        if (button=='ok' && value != '') {
                            scope.selectIcon.setHtml(value);
                            Ext.Ajax.request({
                                url: '/upepname/' + record.data.net + '/' + record.data.ep + '/' + value,
                                mothed: 'GET'
                            });
                        }
                },this,false,initvalue)
            },
            painted:function() {
                this.getStore().load();
            }
        }
    }

});
