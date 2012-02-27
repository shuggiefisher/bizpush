CampaignList = Ext.extend(Ext.Panel, {
    layout: 'card',
    initComponent: function() {

        this.listpanel = new Ext.Panel({
            layout: 'fit',
            //,
            //items: this.list,
            dockedItems: [
            	this.header
        	]
        });

        this.items = this.listpanel;

        CampaignList.superclass.initComponent.call(this);
    }
});

Ext.reg('campaign-list', CampaignList);