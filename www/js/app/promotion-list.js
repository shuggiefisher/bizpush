PromotionList = Ext.extend(Ext.Panel, {
    layout: 'card',
    initComponent: function() {

        this.list = new Ext.List({
            
            // itemTpl: '<div class="avatar"<tpl if="photo"> style="background-image: url({photo})"</tpl>></div><span class="title">{title}<tpl if="position || affiliation"><br /></tpl></span>',
            itemTpl: '<span class="title">{title}</span><br/><img <tpl if="photo"> width="290" height="290" src="{photo}"</tpl>/><br/><span>{description}</span><br/><span>Sent to {distribution_count} people on {date:date("d/m/Y")}</span>',
            store: PromotionsStore,
            multiSelect: false,
            singleSelect: true,
            
            listeners: {
                selectionchange: {fn: this.onSelect, scope: this}
            }
        });


        this.listpanel = new Ext.Panel({
            layout: 'fit',
            items: this.list,
            
            dockedItems: [
            	this.header
        	],
        	 listeners: {
        		activate: { 
                	fn: function() {
	                    this.list.getSelectionModel().deselectAll();
	                    Ext.repaint();
                	}, scope: this 
            	}
        	}
        });

        this.items = this.listpanel;

        PromotionList.superclass.initComponent.call(this);
    },
    
    onSelect: function(sel, records){
    	this.list.getSelectionModel().deselectAll();
        Ext.repaint();
    	// if (records[0] !== undefined) {
            //alert('click' + records[0].get("photo"));
            // var contactCard = new ContactDetail({
                // prevCard: this.listpanel,
                // record: records[0]
            // });
//             
            // this.setActiveItem(contactCard, 'slide');
        // }
        
    }

});

Ext.reg('promotion-list', PromotionList);
