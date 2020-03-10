import React, { Component } from 'react'
import { Text, View, Platform, TouchableOpacity, AsyncStorage } from 'react-native';
import { SearchBar,Avatar, Divider } from 'react-native-elements';
// import { withNavigation } from '@react-navigation/stack';


class MessageList extends Component {

  state = {
    room_id: null
  }

  // fetchRoomDetails = async () => {
  //   const Token = await AsyncStorage.getItem('TOKEN');
  //   const Response = await fetch(`https://campus-gruv-heroku.herokuapp.com/api/v1/room/details?user_id=${this.props.user_id}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${Token}`,
  //       },
  //   });
  //   const JsonResponse = await Response.json();
  //   this.setState({
  //     room_id: JsonResponse[0].room_id
  //   })
  // }

  // async componentDidMount() {
  //   await this.fetchRoomDetails()
  // }

    render() {
      // const {navigate}=this.props.navigation;

        return (
          <View style={{}}>
           <TouchableOpacity 
          //  onPress={()=>navigate('MessagesOpen')}
           >

            <View style={{padding:8,flexDirection:'row',justifyContent:'space-between'}}>
              <Avatar
                size="small"
                rounded
                source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}
                size={40}
              />
              <View style={{flexDirection:'column',alignSelf:'center',marginLeft:10,flex:2}}>
                <Text style={{fontWeight:'bold',color:'#181a1a'}}>umair</Text>
                <Text style={{color:'grey'}}>khan</Text>
              </View>
              <View style={{marginBottom:10,alignSelf:'center'}}>
                <Text style={{color:'grey',fontSize:8}}>28-03-2020</Text>
              </View>
            </View>
           </TouchableOpacity>
          </View>
        )
    }
}

export default MessageList;