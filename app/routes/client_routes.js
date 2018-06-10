var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, dbo) {
	// Get client by id
	app.get('/clients/:id',(req, res) => {
		console.log(req.params.id);
		const id = req.params.id;
		const details = { '_id' : new ObjectID(id) };
		dbo.collection('clients').findOne(details, (err, item) =>{
			if (err) {
				res.send({'error': 'An error has ocurred'});
			} else {
				res.send(item);
			}
		});
	});
	// Get client by id
	// Get all clients return id
	app.get('/all' , (req, res) => {
		dbo.collection('clients').distinct('_id', {}, {}, function (err, result) {
				res.send(JSON.stringify(result)); 
				})
	});
	// Get all clients return id
	// Delete
	app.delete('/clients/:id', (req,res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		dbo.collection('clients').remove(details, (err, item) => {
				if (err) {
					res.send({'error': 'An error has occurred'});
				} else {
					res.send('Client ' + id + ' deleted!' );
				}
			});
	});
	// Delete
	// Insert
	app.post('/clients', (req,res) => {
			// You'll create your client here
			const client = { 
				firstname	: req.body.firstname, 
				lastname	: req.body.lastname,
				agent			: req.body.agent,
				phone			: req.body.phone,
				email			: req.body.email,
				company		: req.body.company	
			 	}; 
			dbo.collection('clients').insert(client, (err, result) => {
				if (err) {
					res.send({ 'error': 'An error has occurred' });
				} else {
					res.send(result.ops[0]);
				}
			});
		});
	// Insert
	// Update
	app.put('/clients/:id', (req, res) => {
			const id = req.params.id;
			const details = { 'id' : new ObjectID(id) };
			const client = { firstname: req.body.firstname,
				lastname: req.body.lastname};
			dbo.collection('clients').update(details, client, (err,result) => {
				if (err) {
					res.send({'error':'An error has occurred'});
				} else {
					res.send(client);
				}
			});
		});
	// Update
};
