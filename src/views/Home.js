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

// const NewIcon = createIconSetFromFontello(fontelloConfig, 'line-icons', 'line-icons.ttf');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header hasTabs>
            <Left />
            <Body>
              <Title>MoniBag</Title>
            </Body>
          </Header>
          <Tabs>
            <Tab
              heading={
                <TabHeading>
                  <NBText>Thrift Plans</NBText>
                  <Icon name={'wallet'} type={'Entypo'} />
                </TabHeading>
              }
            >
              <View style={{ padding: 30 }}>
                <ThriftList />
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <NBText>Fixed Plans</NBText>
                  <Icon name={'layers'} type={'Entypo'} />
                </TabHeading>
              }
            >
              <View style={{ padding: 30 }}>
                <PlansList />
              </View>
            </Tab>
          </Tabs>
        </Container>
      </StyleProvider>
    );
  }
}

export default Home;
