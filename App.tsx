import React from 'react';
import { Text } from 'react-native';

import Row from './GridSystem/row';
import Col from './GridSystem/col';
import Grid from './GridSystem/grid';

export default function App() {
  return (
    <Grid numberOfColumns={8} gutterSize={16}>
      <Row>
        <Col size={1}></Col>
        <Col size={2}></Col>
        <Col size={3}></Col>
        <Col size={2}></Col>
      </Row>
      <Row>
        <Col size={4}></Col>
        <Col size={4}></Col>
      </Row>
      <Row>
        <Col size={3}></Col>
        <Col size={5}></Col>
      </Row>
      <Row>
        <Col size={1}></Col>
        <Col size={7}></Col>
      </Row>
      <Row>
        <Col size={7}></Col>
        <Col size={1}></Col>
      </Row>
      <Row>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
      </Row>
      <Row>
        <Col size={8} styles={{alignItems: "center", justifyContent:"center"}}>
          <Text>Something</Text>
        </Col>
      </Row>
    </Grid>
  );
}
