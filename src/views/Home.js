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
import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import { CardView } from 'react-native-credit-card-input';
import ThriftList from './ThriftList';
import PlansList from './PlansList';
import HistoryList from './History';
import Recieve from './Recieve';
import Send from './Send';

// const NewIcon = createIconSetFromFontello(fontelloConfig, 'line-icons', 'line-icons.ttf');
/**
 * TODO:  Pass retrieve usr details from firebase
 * TODO: Hand qrcode scanner action and pass the data.
 * TODO: Creata the transfer action on QR Code scan or input
 * TODO: For input, fire action onBlur. PS:: Due to the nature of the input we cannot have a button
 *
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetQRCode: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  onQRSuccess = barcodeString => {};

  makePayment = () => {
    // Action to complete payment after srtring retrival either QRCode or Inout
  };

  qrCodeInput = code => {
    this.setState({ targetQRCode: code });
  };

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header Header hasTabs noLeft noShadow>
            <Left />
            <Body>
              <Title>EasyPay</Title>
            </Body>
          </Header>
          <Tabs>
            <Tab
              heading={
                <TabHeading>
                  <NBText>Receive</NBText>
                  <Icon name={'wallet'} type={'Entypo'} />
                </TabHeading>
              }
            >
              <Recieve />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <NBText>Send</NBText>
                  <Icon name={'direction'} type={'Entypo'} />
                </TabHeading>
              }
            >
              <Send />
            </Tab>
          </Tabs>
        </Container>
      </StyleProvider>
    );
  }
}

export default Home;
