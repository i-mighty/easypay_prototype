import React, { Component } from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Icon,
  Input,
  Left,
  Footer,
  FooterTab,
  Button,
  Row,
  Body,
  Title,
  Col,
  Text,
  Tabs,
  Tab,
  DatePicker,
} from 'native-base';

const { windowWidth: windowWidth, height: windowHeight } = Dimensions.get(
  'window'
);

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 5,
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    width: windowWidth * 0.7,
    alignSelf: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.7,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginBottom: 20,
  },
  button: {
    width: 75,
    height: 75,
    backgroundColor: '#3477db',
    // alignSelf: 'center',
    borderRadius: 38,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default class CreateThriftClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ThriftPlan: false,
      selected: 'key1',
      chosenDate: new Date(),
    };
    this.setDate = this.setDate.bind(this);
  }

  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Container>
        <Content style={{ padding: 20 }}>
          <Form>
            <Text>Name of the Plan</Text>
            <View>
              <Input placeholder="Something Catchy" />
            </View>
            <Text>Goal to reach</Text>
            <View>
              <Input
                keyboardType="numeric"
                placeholder="Break the boundaries"
              />
            </View>
            <Text>Saving Frequency</Text>
            <Input keyboardType="numeric" placeholder="> #2,000 " />
            <Col>
              <Text>Deduction Mode</Text>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Weekly" value="key1" />
                <Picker.Item label="Monthly" value="key2" />
              </Picker>
            </Col>
            <Button block info>
              <Text>Create New Plan</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
