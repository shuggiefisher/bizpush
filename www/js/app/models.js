

Ext.regModel('Contact', {
    fields: [
    	'id', 
    	'first_name', 
    	'last_name', 
    	'email', 
    	'twitter'
	]
});

Ext.regModel('Promotion', {
	fields: [
		'id',
		'title',
		{ name: 'date', type: 'date'},
		'photo',
		'description',
		'distribution_count'
	]
});
