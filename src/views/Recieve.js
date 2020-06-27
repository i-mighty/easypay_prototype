import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import HistoryList from './History';
import { Container, Content, Text } from 'native-base';

export class Recieve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCode: '2143252',
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <View style={[style.center, style.margin]}>
            <QRCode value={this.state.userCode} size={250} borderRadius={5} />
            <Text style={style.margin}>
              Or enter User ID: {this.state.userCode}
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Recieve;

const style = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    marginVertical: 32,
  },
});
