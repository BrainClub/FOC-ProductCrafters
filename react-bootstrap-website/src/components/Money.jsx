import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Money.css';

export default class Money extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
              <h2>Money</h2>
              <Col xs={12} md={8} >
                  <h3>Balance</h3>
                <p>На цьому місці має бути скріпт по вирахунку грошей</p>
                  <p className="red">-20 грн - мандаринки</p>
                  <p className="red">-20 грн - мандаринки</p>
                  <p className="red">-20 грн - мандаринки</p>
                  <p className="red">-20 грн - мандаринки</p>
                  <p className="green">+800 грн - Олег</p>
                  <p className="red">-20 грн - мандаринки</p>
                  <p className="red">-20 грн - мандаринки</p>
                  <p className="red">-20 грн - мандаринки</p>
                  <p className="red">-20 грн - мандаринки</p>
                  <p className="red">-20 грн - мандаринки</p>
                  <p className="green">+10 грн - Олексій</p>
                  <p > <span  className="green">Deposit</span> - <span  className="red">Costs</span> = balance</p>
              </Col>

              <Col xs={6} md={4}>
                  <h3>Patrons</h3>
                <p>Oleg - 800 грн </p>
                <p>Oleksyi - 300 грн</p>
                <p>Anatolyi - 10 грн</p>
                  <p> Deposit[0] + Deposit[deposit.length] = Deposit</p>
              </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
