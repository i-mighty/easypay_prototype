import React, { Component } from 'react';
import { View, Dimensions, Image, Text, ScrollView } from 'react-native';
import {
  Right,
  Item,
  Input,
  Label,
  Container,
  Content,
  StyleProvider,
  Button,
  Icon,
  Text as NBText,
  Row,
  Header,
  Body,
  Tabs,
  Tab,
  Left,
  Title,
  TabHeading,
  Card,
  CardItem,
} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import { CardView } from 'react-native-credit-card-input';
import ThriftList from './ThriftList';
import PlansList from './PlansList';

class NewPlan extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>New Plan</Title>
            </Body>
          </Header>
          <Content>
            <Tabs>
              <Tab
                heading={
                  <TabHeading>
                    <NBText>Thrift Plans</NBText>
                    <Icon name={'wallet'} type={'Entypo'} />
                  </TabHeading>
                }
              >
                <View style={{ padding: 30 }} />
              </Tab>
              <Tab
                heading={
                  <TabHeading>
                    <NBText>Fixed Plans</NBText>
                    <Icon name={'layers'} type={'Entypo'} />
                  </TabHeading>
                }
              >
                <View style={{ padding: 30 }} />
              </Tab>
            </Tabs>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default NewPlan;
