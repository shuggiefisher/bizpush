
ContactDetail = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    showSessionData: true,
    initComponent: function(){
        this.dockedItems = [{
            xtype: 'toolbar',
            ui: 'light',
            title: 'Contact',
            items: [{
                ui: 'back',
                text: 'Back',
                scope: this,
                handler: this.back
            }, {xtype: 'spacer'}, {
        		xtype: 'button',
        		text: 'Save',
        		scope: this,
        		handler: this.saveAndBack
        	}]
        }];
        
        this.form = new Ext.form.FormPanel({
        	id: 'contact_detail_form',
            scroll: 'vertical',
            items: [{
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '35%'
                },
	        	items: [{
	        		xtype: 'textfield',
	        		name: 'first_name',
	        		label: 'First Name',
	        		useClearIcon: true
	        	}, {
	        		xtype: 'textfield',
	        		name: 'last_name',
	        		label: 'Last Name',
	        		useClearIcon: true
	        	}]
        	},{
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '35%'
                },
	        	items: [{
	        		xtype: 'emailfield',
	        		name: 'email',
	        		label: 'Email',
	        		useClearIcon: true
	        	}, {
	        		xtype: 'textfield',
	        		name: 'twitter',
	        		label: 'Twitter',
	        		placeHolder: '@',
	        		useClearIcon: true
	        	}]
        	}]
        });
        this.form.load(this.record);
        
        this.items = this.form;
        
        this.listeners = {
            activate: { fn: function(){
                if (this.sessionList) {
                    this.sessionList.getSelectionModel().deselectAll();
                }
            }, scope: this }
        };
        
        ContactDetail.superclass.initComponent.call(this);
    },

	saveAndBack: function() {
		this.save();
		this.back();	
	},  
	  
    save: function() {
		var formValues = this.form.getValues(false);
		for (key in formValues) {
			this.record.set(key, formValues[key]);
		}
			        			
		this.record.save();
	},
	
    back: function(){
        this.ownerCt.setActiveItem(this.prevCard, {
            type: 'slide',
            reverse: true,
            scope: this,
            after: function(){
                this.destroy();
            }
        });
    }
});

Ext.reg('contact-detail', ContactDetail);
