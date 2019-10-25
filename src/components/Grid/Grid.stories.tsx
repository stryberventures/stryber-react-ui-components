import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from './Grid';
import * as Card from '../Card';
import { Container } from '../Container';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Grid', module)
  .add('Normal Demo', () => {
    return (
      <Wrapper>
        <Row>
          <Col xl={3} lg={4} md={6} sm={12} xs={4}>
            <Card.Wrapper><Card.Body>Col1</Card.Body></Card.Wrapper>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12} xs={4}>
            <Card.Wrapper><Card.Body>Col2</Card.Body></Card.Wrapper>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12} xs={4}>
            <Card.Wrapper><Card.Body>Col3</Card.Body></Card.Wrapper>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}>
            <Card.Wrapper><Card.Body>Col4</Card.Body></Card.Wrapper>
          </Col>

          <Col xl={2} lg={10} md={6} sm={6} xs={6}>
            <Card.Wrapper><Card.Body>Col5</Card.Body></Card.Wrapper>
          </Col>
          <Col xl={2} lg={10} md={6} sm={6} xs={6}>
            <Card.Wrapper><Card.Body>Col6</Card.Body></Card.Wrapper>
          </Col>
          <Col xl={2} lg={4} md={6} sm={3}>
            <Card.Wrapper><Card.Body>Col7</Card.Body></Card.Wrapper>
          </Col>
          <Col xl={2} lg={4} md={6} sm={3}>
            <Card.Wrapper><Card.Body>Col8</Card.Body></Card.Wrapper>
          </Col>

          <Col><Card.Wrapper><Card.Body>Col9</Card.Body></Card.Wrapper></Col>
          <Col><Card.Wrapper><Card.Body>Col10</Card.Body></Card.Wrapper></Col>
          <Col><Card.Wrapper><Card.Body>Col11</Card.Body></Card.Wrapper></Col>
          <Col><Card.Wrapper><Card.Body>Col12</Card.Body></Card.Wrapper></Col>
        </Row>
      </Wrapper>
    );
  })
  .add('Container Wrapped Demo', () => {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col xl={3} lg={4} md={6} sm={12}>
              <Card.Wrapper><Card.Body>Col1</Card.Body></Card.Wrapper>
            </Col>
            <Col xl={3} lg={4} md={6} sm={12}>
              <Card.Wrapper><Card.Body>Col2</Card.Body></Card.Wrapper>
            </Col>
            <Col xl={3} lg={4} md={6} sm={12}>
              <Card.Wrapper><Card.Body>Col3</Card.Body></Card.Wrapper>
            </Col>
            <Col xl={3} lg={4} md={6} sm={12}>
              <Card.Wrapper><Card.Body>Col4</Card.Body></Card.Wrapper>
            </Col>
            <Col><Card.Wrapper><Card.Body>Col5</Card.Body></Card.Wrapper></Col>
            <Col><Card.Wrapper><Card.Body>Col6</Card.Body></Card.Wrapper></Col>
            <Col><Card.Wrapper><Card.Body>Col7</Card.Body></Card.Wrapper></Col>
            <Col><Card.Wrapper><Card.Body>Col8</Card.Body></Card.Wrapper></Col>
            <Col><Card.Wrapper><Card.Body>Col9</Card.Body></Card.Wrapper></Col>
            <Col><Card.Wrapper><Card.Body>Col10</Card.Body></Card.Wrapper></Col>
            <Col><Card.Wrapper><Card.Body>Col11</Card.Body></Card.Wrapper></Col>
            <Col><Card.Wrapper><Card.Body>Col12</Card.Body></Card.Wrapper></Col>
          </Row>
        </Container>
      </Wrapper>
    );
  })
