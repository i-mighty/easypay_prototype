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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const circleInactive = '#ecbfbe';
const circleActive = '#90ee90';

const styles = StyleSheet.create({
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
            <Row style={{ justifyContent: 'space-around', marginVertical: 10 }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> #500</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> #1000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> #1500</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> #2000</Text>
              </TouchableOpacity>
            </Row>
            <Text>Saving Period</Text>
            <DatePicker
              defaultDate={new Date(2019, 11, 10)}
              minimumDate={new Date(2019, 8, 4)}
              maximumDate={new Date(2020, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="Select withdrawal date"
              textStyle={{ color: 'green' }}
              placeHolderTextStyle={{ color: '#d3d3d3' }}
              onDateChange={this.setDate}
              disabled={false}
            />
            {/* <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text> */}
            <Button block info>
              <Text>Create New Plan</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
