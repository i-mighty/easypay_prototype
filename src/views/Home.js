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
import {
  RNCamera
} from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from "react-native-qrcode-scanner";
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import { CardView } from 'react-native-credit-card-input';
import ThriftList from './ThriftList';
import PlansList from './PlansList';
import HistoryList from './History';

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
      targetQRCode: ''
    };
  }

  static navigationOptions = {
    header: null,
  };

  onQRSuccess = (barcodeString) => {

  }

  makePayment = () => {// Action to complete payment after srtring retrival either QRCode or Inout

  }

  qrCodeInput = (code) => {
    this.setState({targetQRCode: code})
  }


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
                  <Icon name={"wallet"} type={"Entypo"} />
                </TabHeading>
              }
            >
              <View style={{ paddingVertical: 30}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{marginVertical: 10}}>Let customer scan the QR Code to pay</Text>
                  <QRCode value="{Pass user id as text to this point}" size={200} borderRadius={5} />
                  <Text style={{marginVertical: 10}}>Or enter User ID: {'User ID goes here'}</Text>
                </View>
                <ScrollView>
                  <HistoryList danger={true} data={[]} />
                </ScrollView>                
                
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <NBText>Pay</NBText>
                  <Icon name={"layers"} type={"Entypo"} />
                </TabHeading>
              }
            >
              <View style={{ padding: 30 }}>
                <View style={{alignItems: 'center', paddingHorizontal: 10}}>
                  <QRCodeScanner
                    onRead={this.onQRSuccess}
                    topContent={<Text >Scan the QR Code to pay</Text>}
                    containerSTyle={{
                      height: 300,
                      width: 300
                    }}
                    bottomContent={
                      <>
                        <View style={{alignItems: 'center'}}>
                          <Text style={{marginVertical: 10}}>Or enter User ID </Text>
                          <Item>
                            <Input placeholder="QR Code" onChangeText={this.qrCodeInput} />
                          </Item>
                        </View>
                        <ScrollView>
                          <HistoryList danger={true} data={[]} />
                        </ScrollView>
                      </>
                    }
                  />
                  <Text style={{marginVertical: 10}}>Or enter User ID: {'User ID goes here'}</Text>
                </View>
              </View>
            </Tab>
          </Tabs>
        </Container>
      </StyleProvider>
    );
  }
}

export default Home;
