import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customers from './components/customers';
import {Button} from 'react-bootstrap'
import {Alert} from 'react-bootstrap'
import AddCustomers from './components/addcustomer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
       <Button variant="warning">Add customer</Button>
        </p>
        <div >
        
     

<Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    <Customers />

  </p>
  <hr />
  <p className="mb-0">
    
  </p>
</Alert>
<AddCustomers />


        </div>
      </header>
    </div>
  );
}

export default App;
