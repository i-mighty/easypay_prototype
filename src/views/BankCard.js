import React, {Component} from 'react';
import {View, ScrollView, ImageBackground, Text} from "react-native";
import {Row, Button, Icon, CardItem, Card, Left, Right} from "native-base";
import {material, materialColors} from "react-native-typography";

class BankCard extends Component {
    render() {
        return (
            <Row style={{marginVertical: 10}}>
                <Card style={{ borderRadius: 8 , minHeight: 190, minWidth: 300}}>
                    <CardItem cardBody>
                        <ImageBackground source={require('../assets/bank.png')} style={{height: 190, width: null, flex: 1}}>
                            <View style={{height: 190, backgroundColor: '#444a', width: null, justifyContent: 'flex-end', alignItems: 'center', padding: 20}}>
                                <Text style={[material.titleWhite, {color: materialColors.whiteSecondary}]}>
                                    Josiah Adegboye
                                </Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Left>
                                        <Text style={[material.subheadingWhite, {color: materialColors.whiteSecondary}]}>
                                            2209219773
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text style={[material.subheading, {color: materialColors.whiteSecondary}]} numberOfLines={1}>
                                            Zenith Bank PLC
                                        </Text>
                                    </Right>
                                </View>
                            </View>
                        </ImageBackground>
                    </CardItem>
                </Card>
                <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 10}}>
                    <Button iconRight danger block transparent>
                        <Icon name={'trash'} type={'Entypo'}/>
                    </Button>
                </View>
            </Row>
        );
    }
}

export default BankCard