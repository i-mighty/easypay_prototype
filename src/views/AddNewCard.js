import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CreditCard from './CreditCard';
import {
  Body,
  Row,
  Col,
  Button,
  Text as NBText,
  Icon as NBIcon,
  Input,
} from 'native-base';

import { View } from 'react-native-animatable';
import { material, materialColors } from 'react-native-typography';
class AddNewCard extends Component {
  state = {
    cardStored: false,
  };

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Row style={{ marginVertical: 10 }}>
          <NBIcon
            name={'credit-card'}
            type={'EvilIcons'}
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
            You don't have any saved cards.
          </NBText>
        </Row>
        <Row style={{ marginVertical: 10 }}>
          <Button light block>
            <NBText
              style={{
                ...material.title,
                color: materialColors.blackTertiary,
              }}
            >
              Add a new Card
            </NBText>
          </Button>
        </Row>
      </View>
    );
  }
}

export default AddNewCard;
