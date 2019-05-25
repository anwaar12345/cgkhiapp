import React, { Component } from 'react';
import {StyleSheet,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Spreadsheet from 'react-native-vector-icons/Entypo';
import { Container, Left, Body, Right, Button, Title, Content,  Card, CardItem,Footer,FooterTab } from 'native-base';
export default class AppMain extends Component {

  static navigationOptions = {
     title : 'Home',
     headerStyle: {
      backgroundColor: 'lightseagreen',
      height:65,
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center',
      textAlign:"center", 
        flex:1 ,
        fontSize:30
        
    },
    headerLeft:(
      <Left>
      <Title style={{fontSize:25,marginLeft:10}}>C&gkhi</Title>
    </Left>
  
    ),
    headerRight: (
 
      <Right>
      <Button transparent>
      <Icon name='bell'style={{fontSize:27,marginRight:13}}/>
      </Button>
    </Right>
    ),
  };


  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Card >
            <CardItem style={styles.CardItem}>
            <Body style={styles.viewStyle}>
            <Image source={require('../../user.png')} style={styles.user}/>
            <Text style={styles.text1}>Loged In User</Text>
            <Text style={styles.text1}>Citizen of Karachi</Text>
          </Body>
            </CardItem>
          </Card>
          
        <Button transparent success style={styles.transbutton} onPress={() => this.props.navigation.navigate('Suggestion')}>
            <Text style={styles.text}>Suggest us How we can improve our App</Text>
          </Button>
        
        </Content>
        <Footer >
          <FooterTab style={{tabActiveBgColor:'lightseagreen'}}>
            <Button vertical>
              <Icon1 name="report-problem" />
              <Text>Complaint</Text>
            </Button>
            <Button vertical>
              <Icon3 name="profile" />
              <Text>Our City</Text>
            </Button>
            <Button vertical active>
              <Spreadsheet active name="spreadsheet" />
              <Text>Report</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

  );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightseagreen',
  },
  user:{
    height: 170,
      maxWidth: '40%',
  },
  viewStyle: {
    backgroundColor: 'lightseagreen',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    paddingTop: 20,
    position: 'relative'
},
CardItem:{
backgroundColor: 'lightseagreen',
},
text:{
  color:'black',
  fontSize:20,
},
text1:{
  color:'white',
  fontSize:20,
},
transbutton:{
  marginLeft:'5%',
  backgroundColor:'white',
  opacity:0.4,
  marginTop:'30%',
 paddingTop:25,
 height:100,
}
});
