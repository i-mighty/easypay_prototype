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
  List,
  ListItem,
  Text,
  Title,
  Thumbnail,
  Button,
  Icon,
  Content,
  Container,
  Header,
} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import { material } from 'react-native-typography';
import * as Progress from 'react-native-progress';

class HistoryList extends Component {
  constructor(props) {
    super(props);
    const { data, debit } = props;
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
        <Container>
          <Header Header hasTabs noLeft noShadow>
            <Left />
            <Body>
              <Title>Transaction History</Title>
            </Body>
          </Header>
          <Content padder>
            <Card>
              <CardItem bordered>
                <Body>
                  <Text>Josiah</Text>
                  <Text note numberOfLines={2}>
                    Amount in Naira
                  </Text>
                </Body>
                <Right>
                  <Icon name='arrow-forward' />
                </Right>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>Michael</Text>
                  <Text note numberOfLines={2}>
                    Amount in Naira
                  </Text>
                </Body>
                <Right>
                  <Icon name='arrow-forward' />
                </Right>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>Josiah</Text>
                  <Text note numberOfLines={2}>
                    Amount in Naira
                  </Text>
                </Body>
                <Right>
                  <Icon name='arrow-forward' />
                </Right>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>Michael</Text>
                  <Text note numberOfLines={2}>
                    Amount in Naira
                  </Text>
                </Body>
                <Right>
                  <Icon name='arrow-forward' />
                </Right>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>Josiah</Text>
                  <Text note numberOfLines={2}>
                    Amount in Naira
                  </Text>
                </Body>
                <Right>
                  <Icon name='arrow-forward' />
                </Right>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>Michael</Text>
                  <Text note numberOfLines={2}>
                    Amount in Naira
                  </Text>
                </Body>
                <Right>
                  <Icon name='arrow-forward' />
                </Right>
              </CardItem>

              {/* <CardItem footer bordered>
              <Body>
                <Button full onPress={() => alert('This is Card Header')}>
                  <Text>Send Money</Text>
                </Button>
              </Body>
            </CardItem> */}
            </Card>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default HistoryList;
