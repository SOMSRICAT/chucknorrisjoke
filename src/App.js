import React, { Component } from 'react';
import axios from 'axios';
import { Container, Button, Form, FormGroup, Label, Input, Row, Col, Table, Alert } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      first: '',
      last: '',
      amount: 1,
      data: []
    }
  }
  render() {
    const { first, last, amount, data } = this.state;
    return (
      <div>
        <Container style={{ paddingTop: '50px' }}>

          <Row style={{ justifyContent: "center" }} >
            <Col lg='4'>
              <Form onSubmit={e => {
                e.preventDefault()
                axios.get(`http://api.icndb.com/jokes/random/${amount}?firstName=${first}&lastName=${last}`)
                  .then(res => {
                    this.setState({ data: res.data.value })
                    console.log(JSON.stringify(data))
                  })
                  .catch(err => { throw err })
              }}>
                <FormGroup>
                  <Label for="f">Firstname</Label>
                  <Input type="text" name="first" onChange={elementna => { this.setState({ first: elementna.target.value }) }} value={first} id="f" required />
                </FormGroup>
                <FormGroup>
                  <Label for="l">Lastname</Label>
                  <Input type="text" name="last" onChange={elementna => { this.setState({ last: elementna.target.value }) }} value={last} id="l" required />
                </FormGroup>
                <FormGroup>
                  <Label for='amount'> Amount </Label>
                  <Input type="number" name="amount" onChange={elementna => { this.setState({ amount: elementna.target.value }) }} value={amount} min={1} id="amount" />
                </FormGroup>
                <Button type='submit' color="success">Submit</Button>
              </Form>
            </Col>
          </Row>
          <br /><br />
          <Row style={{ justifyContent: "center" }} >
            <Col >
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th style={{ textAlign: "center" }}>Joke </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map(i => (
                      <tr>
                        <td><Label key={i.id} bsStyle="primary"> {i.id} </Label></td>
                        <td><Alert bsStyle="danger"> {i.joke} </Alert></td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
