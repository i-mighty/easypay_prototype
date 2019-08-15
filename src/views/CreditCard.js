import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Row, Button, Icon } from 'native-base';
import { CardView } from 'react-native-credit-card-input';
class CreditCard extends Component {
  render() {
    return (
      <Row style={{ marginVertical: 10 }}>
        <CardView />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 10,
          }}
        >
          <Button iconRight danger block transparent>
            <Icon name={'trash'} type={'Entypo'} />
          </Button>
        </View>
      </Row>
    );
  }
}

export default CreditCard;
