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
import AddNewCard from './AddNewCard';
class CardList extends Component {
  state = {
    cardStored: false,
  };

  renderComp = () => {
    this.state.cardStored ? <CreditCard /> : <AddNewCard />;
  };

  render() {
    return (
      <ScrollView>
        {this.state.cardStored ? <CreditCard /> : <AddNewCard />}
      </ScrollView>
    );
  }
}

export default CardList;
