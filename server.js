const express = require('express');
const app = express();

app.get('/api/customers', (req, res)=>{
	
	const customers = [
    {id: 1, firstName: 'Kevin', lastName: 'Kibet'},
    {id: 2, firstName: 'Oscar', lastName: 'Bett'},
    {id: 2, firstName: 'The information above is from the backend.', lastName: ''},
    {id: 3, firstName: 'Now connection is established with the back end!', lastName: 'We can now start the project comfortably'},
  ];

  res.json(customers);
	
});

const port = 5000;

app.listen(port, ()=>{
	console.log(`Server Started on port ${port}`);
});