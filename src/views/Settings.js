import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Body,
  List,
  ListItem,
  Switch,
  Content,
  Left,
  Right,
  StyleProvider,
  Row,
  Col,
  Button,
  Text as NBText,
  Icon as NBIcon,
  Input,
} from 'native-base';
import { Avatar, withBadge, Icon } from 'react-native-elements';
import platform from '../native-base-theme/variables/platform';
import { material, systemWeights } from 'react-native-typography';
import { widthPercentageToDP } from 'react-native-responsive-screen';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameDisabled: true,
    };
  }

  cwm
  render() {
    return (
      <Content
        style={{
          paddingHorizontal: 50,
          paddingBottom: 50,
          backgroundColor: '#fff',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: widthPercentageToDP('70%'),
        }}
      >
        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Avatar
            size={'large'}
            containerStyle={{
              borderWidth: 2,
              borderColor: platform.brandPrimary,
            }}
            rounded
            source={{ uri: '' }}
            showEditButton
            editButton={{
              name: 'edit',
              type: 'entypo',
              color: platform.brandWarning,
            }}
            placeholderStyle={{ backgroundColor: platform.brandLight }}
            icon={{
              name: 'user',
              type: 'entypo',
              color: '#356A9B',
            }}
          />
          <Col
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 100,
            }}
          >
            <Text style={material.title}>Josiah Adegboye</Text>
            <Text style={material.subheading}>josadegboye@gmail.com</Text>
          </Col>
        </Row>
        <ScrollView>
          <List>
            <ListItem noIndent />
            <ListItem itemDivider last>
              <Text style={{ ...material.subheading, ...systemWeights.bold }}>
                Edit Profile
              </Text>
            </ListItem>
            <ListItem noIndent>
              <Body>
                <Input
                  placeholder={'Name'}
                  disabled={this.state.nameDisabled}
                />
              </Body>
              <Right>
                <Button
                  info={this.state.nameDisabled}
                  success={!this.state.nameDisabled}
                  transparent
                  onPress={() =>
                    this.setState({ nameDisabled: !this.state.nameDisabled })
                  }
                >
                  {this.state.nameDisabled ? (
                    <NBIcon name={'edit'} type={'Entypo'} />
                  ) : (
                    <NBIcon name={'check'} type={'Entypo'} />
                  )}
                </Button>
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ ...material.subheading, ...systemWeights.bold }}>
                Account Settings
              </Text>
            </ListItem>
            <ListItem noIndent>
              <Body>
                <Text
                  style={{ ...material.subheading, ...systemWeights.light }}
                >
                  Receive Notifications
                </Text>
              </Body>
              <Right>
                <Switch />
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ ...material.subheading, ...systemWeights.bold }}>
                Support
              </Text>
            </ListItem>
            <ListItem noIndent>
              <Button dark transparent>
                <NBText>Call Us</NBText>
              </Button>
            </ListItem>
            <ListItem noIndent>
              <Body>
                <Button dark transparent>
                  <NBText>Feedback</NBText>
                </Button>
              </Body>
            </ListItem>
          </List>
        </ScrollView>
      </Content>
    );
  }
}

export default Settings;
