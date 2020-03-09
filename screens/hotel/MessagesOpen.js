import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground,Text,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat'


class MessagesOpen extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 1,
          text: 'Hello developersss',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  render() {
    const {navigate}=this.props.navigation;
    return (
      <View style={{ flex:1}}>
        <Header
         containerStyle={{
          backgroundColor: '#213d48',
          height:60
        }}
  leftComponent={
    <TouchableOpacity onPress={()=>navigate('Message')}>
                 <Image source={require('../../images/back.png')}  style={{marginBottom:25,width:22,height:22,}}/>
            </TouchableOpacity>
  }
 
/>
      <View style={{ flex: 1}}>
     
 <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MessagesOpen;

