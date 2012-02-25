

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





