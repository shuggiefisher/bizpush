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
		description: 'Just got this great new hairbrush. 25% with a haircut.',
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
		name : 'Beaver, Eager',
		email: 'eager@beaver.com'
	}, {
		first_name: 'Marisa',
		last_name: 'Tommasini',
		name : 'Tommasini, Marisa',
		email: 'sven@poppelmann.net'
	}, {
		first_name: 'Rob',
		last_name: 'Kyle',
		name : 'Kyle, Robert',
		email: 'r.kyle@ed.ac.uk'
	}, {
		first_name: 'Joe',
		last_name: 'Bloggs',
		name : 'Bloggs, Joe',
		email: 'j@bloggs.com'
	}, {
		first_name: 'Sven',
		last_name: 'Poppelmann',
		name : 'Poppelmann, Sven',
		email: 'sven@poppelmann.net'
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





