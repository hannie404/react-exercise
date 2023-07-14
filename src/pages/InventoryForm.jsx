import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form as BTForm, FormGroup, Input, Label, Col, Button } from 'reactstrap';

function InventoryForm() {
  const handleProductName = () => {
    console.log('handle product name')
  }

  return (
    <div>
      <h2>Inventory Tracker</h2>
      <BTForm className='form-control p-3'>
        <FormGroup className='row'>
          <Label for='productName'>Product Name</Label>
          <Col sm={4}>
            <Input type='text' name='productName' id='productName' placeholder='Enter Product Name' value='' onChange={handleProductName}></Input>
          </Col>
          <Label for='productDescription'>Product Description</Label>
          <Col sm={4}>
            <Input type='text' name='productDescription' id='productDescription' placeholder='Enter Product Description' value='' onChange={handleProductName}></Input>
          </Col>
        </FormGroup>

        <FormGroup className='row'>
          <Label for='productName2'>Product Name</Label>
          <Col sm={4}>
            <Input type='text' name='productName2' id='productName2' placeholder='Enter Product Name' value='' onChange={handleProductName}></Input>
          </Col>
          <Label for='productDescription2'>Product Description</Label>
          <Col sm={4}>
            <Input type='text' name='productDescription2' id='productDescription2' placeholder='Enter Product Description' value='' onChange={handleProductName}></Input>
          </Col>
        </FormGroup>
        <Button type='submit' className='btn btn-info'>Submit</Button>
      </BTForm>
    </div>
  )
}

export default InventoryForm