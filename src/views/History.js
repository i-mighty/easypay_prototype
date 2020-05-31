import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Row,
  Left,
  Right,
  StyleProvider,
  List, ListItem, Text, Thumbnail, Button
} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import { material } from 'react-native-typography';
import * as Progress from 'react-native-progress';

class HistoryList extends Component {

  constructor(props) {
    super(props);
    const {data, debit} = props;
    this.state = {
      basic: true,
      listViewData: data,
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
          <List>
            <ListItem itemDivider style={[{alignItems: 'center', justifyContent: 'center'}]}>
              <Text style={{textAlign: 'center', ...material.headline}}>History</Text>
            </ListItem> 
            <ListItem>
              <Body>
                <Text>Target user name here</Text>
                <Text note numberOfLines={1}>Amount in Naira</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
      </StyleProvider>
    );
  }
}

export default HistoryList;
