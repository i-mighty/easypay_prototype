import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import {
  Body,
  Header,
  Content,
  Container,
  Row,
  Col,
  Left,
  Right,
  StyleProvider,
  Title,
  Button,
  Text as NBText,
  Tabs,
  Tab,
  List,
  ListItem,
  Icon as NBIcon,
} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import { material } from 'react-native-typography';
import { Avatar, withBadge, Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import CardList from './CardList';
import BankList from './BankList';
import Settings from './Settings';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingModal: false,
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>My Profile</Title>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() =>
                  this.setState({ settingModal: !this.state.settingModal })
                }
              >
                <NBIcon name={'cog'} type={'Entypo'} />
              </Button>
            </Right>
          </Header>
          <Content>
            <View
              style={{ backgroundColor: platform.brandPrimary, height: 100 }}
            />
            <View style={{ flex: 1, alignItems: 'center', top: -75 }}>
              <Col>
                <Avatar
                  size={150}
                  containerStyle={{
                    borderWidth: 2,
                    borderColor: platform.brandPrimary,
                  }}
                  rounded
                  source={{ uri: '' }}
                  // showEditButton
                  // editButton={{
                  //     name: 'edit',
                  //     type: 'entypo',
                  //     color: platform.brandLight,
                  // }}
                  placeholderStyle={{ backgroundColor: platform.brandLight }}
                  icon={{
                    name: 'user',
                    type: 'entypo',
                    color: '#356A9B',
                  }}
                />
              </Col>
              <Col style={{ marginVertical: 10 }}>
                <Body>
                  <Text style={[material.title]}>Josiah Adegboye</Text>
                  <Text style={[material.subheading]}>
                    josadegboye@gmail.com
                  </Text>
                </Body>
              </Col>
              <Row
                style={{
                  backgroundColor: platform.brandLight,
                  marginHorizontal: 50,
                  marginVertical: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <Row>
                  <Left style={{ alignItems: 'center' }}>
                    <BadgedIcon1
                      name={'wallet'}
                      type={'entypo'}
                      color={platform.brandInfo}
                    />
                    <Text
                      style={[material.body2, { color: platform.brandInfo }]}
                    >
                      Thrift Plans
                    </Text>
                  </Left>
                  <Right style={{ alignItems: 'center' }}>
                    <BadgedIcon2
                      name={'layers'}
                      type={'entypo'}
                      color={platform.brandInfo}
                    />
                    <Text
                      style={[material.body2, { color: platform.brandInfo }]}
                    >
                      Long Term Plans
                    </Text>
                  </Right>
                </Row>
              </Row>
              <Row
                style={{
                  marginVertical: 10,
                  marginHorizontal: 50,
                  borderRadius: 10,
                }}
              >
                <Button rounded>
                  <NBText>Start a new plan</NBText>
                </Button>
              </Row>
              <Tabs style={{ marginVertical: 10 }}>
                <Tab heading={'My Cards'}>
                  <View style={tabStyle}>
                    <CardList />
                  </View>
                </Tab>
                <Tab heading={'My Banks'}>
                  <View style={tabStyle}>
                    <BankList />
                  </View>
                </Tab>
              </Tabs>
            </View>
          </Content>
          <Modal
            isVisible={this.state.settingModal}
            onSwipeComplete={() => this.modalToggle()}
            swipeDirection={['up', 'left', 'right', 'down']}
            onBackdropPress={() => this.modalToggle()}
            style={{
              justifyContent: 'flex-end',
              margin: 0,
              marginTop: 100,
            }}
          >
            <Settings />
          </Modal>
        </Container>
      </StyleProvider>
    );
  }

  modalToggle() {
    this.setState({ settingModal: !this.state.settingModal });
  }
}

const tabStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 30,
};
const BadgedIcon1 = withBadge(1, { right: -5, top: 5 })(Icon);
const BadgedIcon2 = withBadge(1, { status: 'success', right: -5, top: 5 })(
  Icon
);
export default MyComponent;
