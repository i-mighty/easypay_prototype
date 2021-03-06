import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Container,
  Row,
  Left,
  Right,
  StyleProvider,
} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import { material } from 'react-native-typography';
import * as Progress from 'react-native-progress';
class PlansList extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <ScrollView>
          <Card style={{ borderRadius: 8 }}>
            <CardItem header last style={{ borderRadius: 8 }}>
              <Left>
                <Text style={material.body2}>{'1 month/ 3 months'}</Text>
              </Left>
              <Right>
                <Text
                  style={[material.body2, { color: platform.brandSuccess }]}
                >
                  Personal plan
                </Text>
              </Right>
            </CardItem>
            <CardItem header first style={{ borderRadius: 8 }}>
              <Body style={{ alignItems: 'center' }}>
                <Row>
                  <Text style={[material.display2, { textAlign: 'center' }]}>
                    {'\u20A6' + '10,000'}
                  </Text>
                </Row>
              </Body>
            </CardItem>
            <CardItem header first style={{ borderRadius: 8 }}>
              <Left>
                <Progress.Bar progress={0.8} borderRadius={2} color="#194C80" />
              </Left>
              <Right>
                <Text style={material.body2}>{'\u20A6' + '1000 '}</Text>
              </Right>
            </CardItem>
          </Card>
        </ScrollView>
      </StyleProvider>
    );
  }
}

export default PlansList;
