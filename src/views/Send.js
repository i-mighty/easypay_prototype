import React, { Component, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  Item,
  Input,
  Form,
  Label,
  Container,
  Content,
  Button,
  StyleProvider,
  Text,
} from 'native-base';

import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

import HistoryList from './History';

export class Send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scan: false,
      userID: '',
    };
  }

  onQRSuccess = code => {
    this.setState({ userID: code });
  };

  sendMoney = () => {
    this.state.userID ? this.send() : this.scanQR();
  };

  send = () => {
    alert('Transaction successful.');
  };

  scanQR = () => {
    this.setState({ scan: true });
  };

  qrCodeInput = value => {
    this.setState({ scan: false, userID: value });
  };

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Content padder={!this.state.scan}>
          {this.state.scan ? (
            <QRCodeScanner
              onRead={this.onQRSuccess}
              containerStyle={[style.qrScanner, style.button]}
              bottomContent={
                <Button
                  style={style.button}
                  full
                  onPress={() => this.sendMoney()}
                >
                  <Text>Scan the QRCode</Text>
                </Button>
              }
            />
          ) : (
            <>
              <Text style={[style.qrInput, style.margin]}>
                Enter the UserID or scan the QR Code.
              </Text>
              <Form>
                <Item inlineLabel>
                  <Input
                    value={this.state.userID}
                    placeholder='UserID'
                    onChangeText={text => this.qrCodeInput(text)}
                  />
                </Item>
              </Form>
              <Button full onPress={() => this.sendMoney()}>
                <Text>{this.state.userID ? 'SEND MONEY' : 'SCAN'}</Text>
              </Button>
            </>
          )}
        </Content>
      </StyleProvider>
    );
  }
}

export default Send;

const style = StyleSheet.create({
  margin: {
    marginTop: 8,
    marginHorizontal: 16,
  },
  button: {
    marginVertical: 16,
  },
  qrInput: {
    fontSize: 18,
  },
  bottom: {
    flex: 1,
  },
  qrScanner: {
    width: 200,
    // height: 250,
  },
});
