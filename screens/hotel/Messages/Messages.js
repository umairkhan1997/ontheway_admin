import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground,Text,TouchableOpacity,FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
import MessageList from '../../../component/messageList'

// const list = [
//   {
//     name: 'Amy Farha',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//     subtitle: 'Vice President'
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//     subtitle: 'Vice Chairman'
//   },
// ]

class Messages extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
    this.state = {
      Text:'',
      data: []
    }
  }
  
  
  // keyExtractor = (item, index) => index.toString()
  
  // renderItem = ({ item }) => (
  //   <ListItem
  //     title={item.name}
  //     subtitle={item.subtitle}
  //     leftAvatar={{ source: { uri: item.avatar_url } }}
  //     bottomDivider
  //     chevron
  //   />
  // )

  render() {
    
    // const {navigate}=this.props.navigation;
    return (
      <View style={{ flex:1}}>
        <Header
         containerStyle={{
          backgroundColor: '#213d48',
          height:Platform.OS==='ios'?85:60
        }}
  leftComponent={{ text: 'Messages', style: { color: '#fff',fontSize:18,marginBottom:10,fontWeight:'bold',width:'150%' } }}
  rightComponent={{ icon: 'search', color: '#fff',marginRight:10,marginBottom:10 }}
/>
      <View style={{ flex: 1}}>
     {/* <TouchableOpacity onPress={()=>navigate('MessagesOpen')}>
      <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
      />
      </TouchableOpacity> */}
         <FlatList 
                            data={[1,2,3]}
                            renderItem={({item}) => 
                                <MessageList  
                                    // user_id={item.user.id} 
                                    // uri={item.user.profile_pic_url} 
                                   // title={'umair' + ' ' + 'khan'} 
                                    //subtitle={'hello jee'} 
                                    //time={item.time}
                                />
                            }
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

export default Messages;

