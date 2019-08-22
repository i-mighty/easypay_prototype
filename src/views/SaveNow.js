import React, { Component } from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Icon,
  Input,
  Left,
  Footer,
  Button,
  Label,
  Body,
  Title,
  Segment,
  Text,
  Tabs,
  Tab,
  Right,
} from 'native-base';

export default class SaveNow extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Save Now</Title>
          </Body>
        </Header>
        <Content>
          <Col>
            <Text>Select A plan to save to </Text>
          </Col>
        </Content>
      </Container>
    );
  }
}
