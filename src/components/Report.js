import React from 'react';
import {View,Text,Button} from 'react-native'; 
export default class Report extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Report',
    };
    render() {
      return (
        <View>
          <Text>Report</Text>
             </View>
      );
    }
  }