import React, { Component } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import {
  Form,
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
} from 'native-base';
import { material, materialColors  } from 'react-native-typography';
import Modal from 'react-native-modal';
import styles from '../style';
import getTheme from '../native-base-theme/components';
import auth from "@react-native-firebase/auth";
import platform from '../native-base-theme/variables/platform';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const style = {
  input: {
    marginVertical: 10,
    borderRadius: 10,
  },
};

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eSuccess: false,
      eFail: false,
      pSuccess: false,
      pFail: false,
      pVisible: false,
      registerUser: false,
      onRegister: true,
      email: '',
      password: '',
      name: ''
    };
  }

  updateEmailValue = (value) => {
    this.setState({email: value})
  }

  updatePasswordValue = (value) => {
    this.setState({password: value})
  }

  updateNameValue = (value) => {
    this.setState({name: value})
  }

  login = () => {
    //TODO: Validate form data
    //TODO: Firebase auth is already imported and configured. Perform the Login action.
    //TODO: Navigate to the home page 
  }

  register = () => {
    //TODO: Validate form data
    //TODO: Firebase auth is already imported and configured. Perform the Register action.
    //TODO: Send user verification
    //TODO: Navigate to the home page 
  }

  static navigationOptions = {
    header: null,
  };

  changeField = () => {
    this.setState({ registerUser: true });
  };

  render() {
    const { navigation } = this.props;
    return (
      <StyleProvider style={getTheme(platform)}>
        <Content>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: SCREEN_WIDTH,
              height: 0,
              borderTopColor: '#194C80',
              borderTopWidth: SCREEN_HEIGHT * 0.4,
              elevation: 10,
              borderRightColor: 'transparent',
            }}
          >
            <View style={{ top: -200 }}>
              <Image
                source={require('../assets/banner.png')}
                style={{marginVertical: 10 }}
              />
              <Text style={[material.headlineWhite, { textAlign: 'center' }]}>
                Log in
              </Text>
            </View>
          </View>
          <View
            style={{ marginRight: 30, marginLeft: 15, paddingVertical: 20 }}
          >
            <Form>
              <Item style={style.input}>
                <Input placeholder="Email Address" onChangeText={this.updateEmailValue}/>
                {!this.state.eFail || this.state.eSuccess ? null : (
                  <Icon name="checkmark-circle" />
                )}
              </Item>
              <Item style={style.input}>
                <Input
                  placeholder="Password"
                  secureTextEntry={!this.state.pVisible}
                  onChangeText={this.updatePasswordValue}
                />
                {!this.state.pFail || !this.state.pSuccess ? (
                  <Icon
                    name={this.state.pVisible ? 'eye-off' : 'eye'}
                    type="Ionicons"
                    onPress={() =>
                      this.setState({ pVisible: !this.state.pVisible })
                    }
                  />
                ) : (
                  <Icon name="checkmark-circle" />
                )}
              </Item>
              <Item style={{ borderBottomWidth: 0 }}>
                <Row style={{ justifyContent: 'flex-end' }}>
                  <Button transparent small onPress={() => this.resetPass()}>
                    <NBText>Forgot password</NBText>
                  </Button>
                </Row>
              </Item>
              <Button
                block
                info
                style={[style.input, { marginLeft: 15 }]}
                onPress={() => navigation.navigate('MainScreenNavigator')}
              >
                <NBText>Login</NBText>
              </Button>
              <Text style={[material.body1, {textAlign: 'center'}]}>
                Or register if you don't have a account
              </Text>
              <Button
                onPress={this.changeField}
                bordered
                block
                style={[style.input, { marginLeft: 15 }]}
              >
                <NBText>Register</NBText>
              </Button>
            </Form>
          </View>
          <Modal
            isVisible={this.state.registerUser}
            onSwipeComplete={this.modalToggle}
            swipeDirection={['up', 'down', 'left', 'right']}
            onBackdropPress={this.modalToggle}
            style={{
              justifyContent: 'flex-end',
              margin: 0,
              marginTop: 100,
            }}
          >
            <Form Form style = {{
                paddingVertical: 100,
                paddingHorizontal: 15,
                backgroundColor: materialColors.whitePrimary
            }}>
              <Item style={style.input}>
                <Input placeholder="Your name" onChangeText={this.updateNameValue} />
              </Item>
              <Button
                onPress={() => this.changeField}
                block
                style={[style.input, { marginLeft: 15 }]}
              >
                <NBText>Continue registration</NBText>
              </Button>
              <Text style={[material.body1, {textAlign: 'center'}]}>
                By continuing the registration, you agree to our terms and conditions
              </Text>
            </Form>
          </Modal>
        </Content>
      </StyleProvider>
    );
  }

  modalToggle() {
    const registerUser = this.state.registerUser;
    this.setState({ registerUser: !registerUser });
  }
}

export default Auth;
