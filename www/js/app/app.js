Ext.ns('hello', 'hello.views');

hello.cfg = {};

hello.App = Ext.extend(Ext.TabPanel, {
    
    fullscreen: true,
    
    // dockedItems: [{
        // xtype: 'toolbar',
        // title: 'biz'
    // }],
            
    tabBar: {
        ui: 'light',
        dock: 'bottom',
        layout: { pack: 'center' }
    },
    
    cardSwitchAnimation: false,
    
    header: {
    	xtype: 'toolbar',
        title: 'bizpush'
  	},
           
    initComponent: function() {

       // if (navigator.onLine) {
            this.items = [{
                title: 'Contacts',
                header: this.header,
                iconCls: 'bookmarks',
                xtype: 'contact-list'                
            }, {
                title: 'Campaigns',
                header: this.header,
                iconCls: 'compose',
                xtype: 'campaigns'
            }, {
                title: 'Settings',
                header: this.header,
                iconCls: 'settings',
                xtype: 'settings'
            }];
        // } else {
            // this.on('render', function(){
                // this.el.mask('No internet connection.');
            // }, this);
        // }
        
        hello.cfg = {};
        hello.cfg.shortUrl = this.shortUrl;
        hello.cfg.title = this.title;
        
        hello.App.superclass.initComponent.call(this);
    }
    
});