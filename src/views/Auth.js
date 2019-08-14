import React, { Component } from 'react'
import { View, Dimensions, Image, Text } from 'react-native'
import { Form, Item, Input, Label, Container, Content, StyleProvider, Button, Icon, Text as NBText, Row } from 'native-base';
import { material } from 'react-native-typography';
import styles from '../style'
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const style = {
    input:{
        marginVertical: 10,
        borderRadius: 10
    }
}

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            eSuccess: false,
            eFail: false,
            pSuccess: false,
            pFail: false,
            pVisible: false,
        };
    }
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                    <Content>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: SCREEN_WIDTH,
                            height: 0,
                            borderTopColor: "#194C80",
                            borderTopWidth: SCREEN_HEIGHT *0.5,
                            // borderRightWidth: SCREEN_WIDTH,
                            elevation: 10,
                            borderRightColor: 'transparent'
                        }}>
                            <View style={{ top: -200}}>
                                <Image source={require('../assets/MBLogo.png')} style={{width: 100, height: 100, marginVertical: 10}}/>
                                <Text style={[material.headlineWhite, {textAlign: 'center'}]}>
                                    Log in
                                </Text>
                            </View>
                        </View>
                        <View style={{marginRight: 30, marginLeft: 15, paddingVertical: 20}}>
                            <Form>
                                <Item style={style.input} >
                                    {/* <Icon active name='mail' style={{color: platform.brandDark}} type="Ionicons"/> */}
                                    <Input placeholder="Email Address"/>
                                    {
                                        !this.state.eFail||this.state.eSuccess?(null):(<Icon name='checkmark-circle' />)
                                    }
                                </Item>
                                <Item style={style.input}>
                                    {/* <Icon active name='lock' style={{color: platform.brandDark}} type="Ionicons"/> */}
                                    <Input placeholder="Password" secureTextEntry={!this.state.pVisible}/>
                                    {
                                        !this.state.pFail||!this.state.pSuccess?(
                                            <Icon name={this.state.pVisible?'eye-off':'eye'} type="Ionicons" onPress={() => this.setState({pVisible: !this.state.pVisible})}/>
                                        ):(
                                            <Icon name='checkmark-circle' />
                                        )
                                    }
                                </Item>
                                <Item style={{borderBottomWidth: 0}}>
                                    <Row style={{justifyContent: 'flex-end'}}>
                                    <Button transparent small onPress={() => this.resetPass()}>
                                        <NBText>Forgot password</NBText>
                                    </Button>
                                </Row>
                                </Item>
                                <Button block info style={[style.input, {marginLeft: 15}]}>
                                    <NBText>Login</NBText>
                                </Button>
                                <Button bordered block style={[style.input, {marginLeft: 15}]}>
                                    <NBText>Register</NBText>
                                </Button>
                            </Form>
                        </View>
                    </Content>
            </StyleProvider>
        )
    }
}

export default Auth