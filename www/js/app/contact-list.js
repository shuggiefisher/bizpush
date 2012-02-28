ContactList = Ext.extend(Ext.Panel, {
    layout: 'card',
    initComponent: function() {

        this.list = new Ext.List({
            grouped: true,
            
            indexBar: true,
            itemTpl: '<span class="name">{last_name}, {first_name}</span>',
            store: ContactsStore,
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

        ContactList.superclass.initComponent.call(this);
    },
    
    onSelect: function(sel, records){
    	if (records[0] !== undefined) {
            
            var contactCard = new ContactDetail({
                prevCard: this.listpanel,
                record: records[0]
            });
            
            this.setActiveItem(contactCard, 'slide');
        }
        
    }



});

Ext.reg('contact-list', ContactList);
