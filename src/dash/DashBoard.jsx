import React from "react";
import { Container, Row, Col, Card, Table, Form, ButtonGroup, Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container fluid className="p-4">
      {/* Filters */}
      <h3 className="text-primary">ETB  Performance</h3>
      <Row className="mb-3   ">
        {["Make", "Calendar Year", "Financial Year", "Location", "Branch", "Consultant"].map((label, i) => (
          <Col md={2} key={i} >
            <Form.Group >
              <Form.Label >{label}</Form.Label>
              <Form.Select>
                <option >All</option>
              </Form.Select>
            </Form.Group>
          </Col>
        ))}
      </Row>

      
      <Row className="mb-4   ">
        {["Calendar Year", "Financial Year", "Rolling Year", "Current Month"].map((kpi, index) => (
          <Col md={3} key={index}>
            <Card className="text-center shadow-sm  text-danger ">
              <Card.Body>
                <Card.Title>{kpi}</Card.Title>
                <p>Enq: 4026</p>
                <p>Bkg: 423</p>
                <p>Ret: 282</p>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    
      <ButtonGroup className="mb-3">
        {["Model", "Source", "Location", "Manager", "Consultant", "Fuel Type", "Transmission", "Address"].map((tab, idx) => (
          <Button key={idx} variant="outline-primary">{tab}</Button>
        ))}
      </ButtonGroup>

      
      <h5 className="mt-4 ">Model Wise Performance</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Model</th>
            <th>Cont</th>
            <th>Enq</th>
            <th>TD</th>
            <th>Bkg</th>
            <th>Ret</th>
            <th>Ret Cont%</th>
            <th>E2T</th>
            <th>E2B</th>
            <th>B2R</th>
            <th>E2R</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NEW CRETA</td>
            <td>8,609</td>
            <td>892</td>
            <td>1,977</td>
            <td>1,521</td>
            <td>32%</td>
            <td>10%</td>
            <td>23%</td>
            <td>77%</td>
            <td>18%</td>
            <td>19%</td>
          </tr>
        </tbody>


        <tbody>
          <tr>
            <td>Venue</td>
            <td>8,609</td>
            <td>892</td>
            <td>1,977</td>
            <td>1,521</td>
            <td>32%</td>
            <td>10%</td>
            <td>23%</td>
            <td>77%</td>
            <td>18%</td>
            <td>28%</td>
          </tr>
        </tbody>
      </Table>

      
      <h5 className="mt-5">Model Wise ETBR Conversions</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Model</th>
            <th colSpan={3}>Same Day</th>
            <th colSpan={3}>2-3 Days</th>
            <th colSpan={3}>4-5 Days</th>
            <th colSpan={3}>6 Days</th>
            <th colSpan={3}>Total</th>
          </tr>
          <tr>
            <th></th>
            {[...Array(5)].map((_, i) =>
              ["Enq", "Bkg", "Ret"].map((header, j) => <th key={`${i}-${j}`}>{header}</th>)
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NEW CRETA</td>
            <td>7,621</td><td>992</td><td>545</td>
            <td>76</td><td>67</td><td>66</td>
            <td>60</td><td>51</td><td>66</td>
            <td>846</td><td>844</td><td>845</td>
            <td>8,609</td><td>1,977</td><td>1,532</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
