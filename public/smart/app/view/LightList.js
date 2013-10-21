Ext.define("sslsmart.view.LightList", {
    extend: "Ext.DataView",
    alias: 'widget.lightlist',
    initialize: function() {
        this.callParent(arguments);
    },
	lastSelect:'div[id^="ffffff"]',
	onOff:{},
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
        itemTpl:'<div id={net}{ep} style="float:left;opacity:0.7;padding-top:50px;padding-left:1px;font-size:12px;word-wrap:break-word;width:50px;height:50px;margin:25px;background-image:url(resources/images/lighton_50x50.png);color:#FFF">{name}</div>',
        scrollable:'vertical',
        listeners: {
            itemtap:function(scope,index,target,record) {
                //this.fireEvent('userOper',this,record.data.net,record.data.ep);
		        var selGrp = this.getParent().getParent().getParent().getComponent('right').getComponent('grpselect');
		        //console.log(selGrp.getSelection());
		        var selectId = 'div[id^=' + '"' + record.data.net + record.data.ep + '"' + ']';
		        var selectIcon = this.element.select(selectId);
		        selectIcon.setStyle({backgroundColor:'#000'});
		        //if((selectId in this.onOff) == false) { this.onOff[selectId]=1;}
		        this.onOff[selectId] = record.data.onoff;
		        if (this.onOff[selectId] == 0) {
			        selectIcon.setStyle({backgroundImage:'url(resources/images/lightoff_50x50.png)'});
			    }
		        else {
			        selectIcon.setStyle({backgroundImage:'url(resources/images/lighton_50x50.png)'});
			    }

		        //console.log(this.onOff);
		        var selectIdLast = this.lastSelect;
		        //console.log(selectIdLast);
		        if (selectId != selectIdLast) {
		    		selectIcon = this.element.select(selectIdLast);
		    		selectIcon.setStyle({backgroundColor:'transparent'});
			    }
		        else {
                    this.fireEvent('userOper',this,record,selectIcon);
			        //console.log('Operate Lighting',this.onOff[selectId]);
			        if (this.onOff[selectId] == 0) {
				        this.onOff[selectId] = 1;

		    		    selectIcon.setStyle({backgroundImage:'url(resources/images/lighton_50x50.png)'});
				    }
			        else {
				        this.onOff[selectId] = 0;
		    		    selectIcon.setStyle({backgroundImage:'url(resources/images/lightoff_50x50.png)'});
				    }
			    }
		        this.lastSelect = selectId;
            },
            itemtaphold:function() {console.log(this.lastSelect); },
            painted:function() {
                this.getStore().load();
            }
        }
    }

});
