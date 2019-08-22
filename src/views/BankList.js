import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import BankCard from './BankCard';

import { View } from 'react-native-animatable';
import { material, materialColors } from 'react-native-typography';
import { Button, Icon as NBIcon, Text as NBText, Row } from 'native-base';

class BankList extends Component {
  render() {
    return (
      <ScrollView>
        <BankCard />
        {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Row style={{ marginVertical: 10 }}>
            <NBIcon
              name={'piggy-bank'}
              type={'FontAwesome5'}
              style={{ color: materialColors.blackTertiary, fontSize: 60 }}
            />
          </Row>
          <Row style={{ marginVertical: 10 }}>
            <NBText
              style={{
                ...material.subheading,
                color: materialColors.blackTertiary,
              }}
            >
              You don't have any saved bank account.
            </NBText>
          </Row>
          <Row style={{ marginVertical: 10 }}>
            <Button light block>
              <NBText
                style={{
                  ...material.titleObject,
                  color: materialColors.blackTertiary,
                }}
              >
                Add your bank details
              </NBText>
            </Button>
          </Row>
        </View> */}
      </ScrollView>
    );
  }
}

export default BankList;
