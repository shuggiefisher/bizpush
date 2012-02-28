PromotionsStore = new Ext.data.Store({
	model: 'Promotion',
	
	data: [{
		id: '1',
		title: 'Super hold gel',
		date: '02/15/2012',
		photo: './images/gel.jpg',
		description: 'Just got this great new gel. Buy one get one free until 1 March 2012',
		distribution_count: 10
	}, {
		id: '2',
		title: 'Super boeries fest',
		date: '02/17/2012',
		photo: './images/gel.jpg',
		description: 'Just have three loops left. One pound each.',
		distribution_count: 15
	}, {
		id: '3',
		title: 'New brush',
		date: '03/03/2012',
		photo: './images/gel.jpg',
		description: 'Just got this great new hairbrush. 50% off with a haircut.',
		distribution_count: 12
	}],
	
	sorters: [{
		property: 'date',
		direction: 'DESC'
	}]
	
	
});

ContactsStore = new Ext.data.Store({
    model: 'Contact',

	
	data: [{
		first_name: 'Eager',
		last_name: 'Beaver',
		email: 'eager@beaver.com'
	}, {
		first_name: 'Marisa',
		last_name: 'Tommasini',
		email: 'marisa@poppelmann.net'
	}, {
		first_name: 'Rob',
		last_name: 'Kyle',
		email: 'r.kyle@ed.ac.uk'
	}, {
		first_name: 'I P',
		last_name: 'Freely',
		email: 'ip@freely.com'
	}, {
		first_name: 'Joe',
		last_name: 'Bloggs',
		email: 'j@bloggs.com'
	}, {
		first_name: 'Smith',
		last_name: 'John',
		email: 'jsmith@email.com'
	}, {
		first_name: 'Sven',
		last_name: 'Poppelmann',
		email: 'sven@poppelmann.net',
		twitter: 'kalayl'
	}],

	sorters: [{
		property: 'last_name',
		direction: 'ASC'
	}, {
		property: 'first_name',
		direction: 'ASC'
	},],

    getGroupString: function(r){
        return r.get('last_name')[0]
    }
});





