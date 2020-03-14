//import React from 'react';
import React, { Component } from 'react';
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

class AddCustomers extends Component {
  



  render() {
    return (
      <div>
        
        
   





<Container>
  <h2>Add New Customer</h2>
  <Row>
    <Col md={{ span: 8, offset: -3 }}>     <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>


<Form.Group controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="email" placeholder="Enter Last Name" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

<Form.Group controlId="formBasicEmail">
    <Form.Label>Surname</Form.Label>
    <Form.Control type="email" placeholder="Enter Surname" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>


  <Form.Group controlId="formBasicEmail">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" placeholder="Enter Phone Number" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>


  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>



  <Form.Group controlId="formBasicEmail">
    <Form.Label>Id Number</Form.Label>
    <Form.Control type="text" placeholder="Enter Id Number" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Address" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Add New Customer
  </Button>
</Form>
</Col>
  </Row>
</Container>





      </div>
    );
  }
}

export default AddCustomers;
