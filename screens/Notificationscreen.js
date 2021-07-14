import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import{Icon,ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config.js';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ImageEditor } from 'react-native';

export default class NotificationScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.1}}>
                    <MyHeader title={"Notifications"}navigation={this.props.navigation} />
                </View>
                <View style={{flex:0.9}}>
                    {
                        this.state.allNotifications.length===0
                        ?(
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:25}}>No Notifications</Text>
                             </View>   
                        )
                        :(
                            <Flatlist 
                            keyExtractor={this.keyExtractor}
                            data={this.state.allNotifications}
                            renderItem={this.renderItem}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
}