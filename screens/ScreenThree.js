import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,Toast,Root} from 'native-base';
// import darkblue from '../../color'
import { updateRoomInfo } from "../Redux/actions/authActions";
import { connect } from "react-redux";

class ScreenThree extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          countR:1,
        rnameOne:'',
        rbedOne:null,
        guestOne:null,
        priceOne:null,
        lrglS:'no',
        rnameTwo:'',
        rbedTwo:null,
        guestTwo:null,
        priceTwo:null,
        lrglSTwo:'no',
        }

    }
    _incrementCountR = () => {
        if (this.state.countR == 2) {
            alert("Can't go to above 4");
          } else {
        this.setState(prevState => ({ countR: prevState.countR + 1 }));
    }  
    };
      _decrementR = () => {
        if (this.state.countR == 1) {
          alert("Can't go to below 1");
        } else {
          this.setState(prevState => ({ countR: prevState.countR - 1 }));
        }
      };

      ToastFunc=(txt)=>{
        Toast.show({
            text: txt,
            position: "bottom",
            duration: 1500,
            type: "danger",
          });
    }
      Next=()=>{
        const { rnameOne,rbedOne,guestOne,priceOne,lrglS, rnameTwo,rbedTwo,guestTwo,priceTwo,lrglSTwo   } = this.state;
        if(this.state.countR===1){
        if(this.state.rnameOne.length < 6){
          console.log('asdasdsdas')
          this.ToastFunc('Room One Name should be atleast 6 character ');
            }
            else if(this.state.rbedOne=== null || this.state.rbedOne=== ""){
          this.ToastFunc('Room One Bed field is empty ')
            }
            else if(this.state.guestOne=== null || this.state.guestOne=== ""){
              this.ToastFunc('Room One Guest field is empty ')
                }else if(this.state.priceOne=== null || this.state.priceOne===  ""){
                  this.ToastFunc('Room One Price field is empty ')
                    }
                    else{
                      console.log('asds')
             
             const RoomInfoData ={rnameOnes:rnameOne,rbedOnes:rbedOne,guestOnes:guestOne,priceOnes:priceOne,lrglSs:lrglS}
                      this.props.updateRoomInfo({
                        RoomInfo_Data: RoomInfoData
                          })
                    }
                  }
                  else{

// CONDITION for room 2
if(this.state.rnameOne.length < 6){
  console.log('asdasdsdas')
  this.ToastFunc('Room One Name should be atleast 6 character ');
    }
    else if(this.state.rbedOne=== null || this.state.rbedOne===  ""){
  this.ToastFunc('Room One Bed field is empty ')
    }
    else if(this.state.guestOne=== null || this.state.guestOne===  ""){
      this.ToastFunc('Room One Guest field is empty ')
        }else if(this.state.priceOne=== null || this.state.priceOne===  ""){
          this.ToastFunc('Room One Price field is empty ')
            }
            else if(this.state.rnameTwo.length < 6){
              this.ToastFunc('Room Two Name should be atleast 6 character ');
                }
                else if(this.state.rbedTwo=== null || this.state.rbedTwo=== ""){
              this.ToastFunc('Room Two Bed field is empty ')
                }
                else if(this.state.guestTwo=== null || this.state.guestTwo===  ""){
                  this.ToastFunc('Room Two Guest field is empty ')
                    }else if(this.state.priceTwo=== null || this.state.priceTwo=== ""){
                      this.ToastFunc('Room Two Price field is empty ')
                        }
                        else{
                          console.log("condition of room 2")
                          const RoomInfoData ={rnameOnes:rnameOne,rbedOnes:rbedOne,guestOnes:guestOne,priceOnes:priceOne,lrglSs:lrglS,
                            rnameTwos:rnameTwo,rbedTwos:rbedTwo,guestTwos:guestTwo,priceTwos:priceTwo,lrglSTwos:lrglSTwo}
                          this.props.updateRoomInfo({
                            RoomInfo_Data: RoomInfoData
                              })
                        }
                  }
      }


lrgl=()=>{
if(this.state.lrglS==='yes'){
  this.setState({
    lrglS:'no'
  })
}
else if(this.state.lrglS==='no'){
  this.setState({
    lrglS:'yes'
  })
}
}
lrglTwo=()=>{
  if(this.state.lrglSTwo==='yes'){
    this.setState({
      lrglSTwo:'no'
    })
  }
  else if(this.state.lrglSTwo==='no'){
    this.setState({
      lrglSTwo:'yes'
    })
  }
  }

    render() {

        const {navigate}=this.props.navigation;
        console.log(this.state.lrglS,"RoomInfo",this.props.RoomInfo)
        return (
          <Root>
            <View  style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
            <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('ScreenTwo')}>
                                     <Image source={require('../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>3# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      <Text style={{marginVertical:20,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48',marginTop:Platform.OS==='ios'?40:0}}>Property Info</Text>
      {/* <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 0.95,backgroundColor:'white' }}> */}
      <View style={{flex:0.95}}>
          <ScrollView style={{ }}>

            {/* NAME FIELD */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) No Of Rooms :</Text>
          
          {/* PLUS SIGN */}
          <View style={{ flexDirection: "row", marginLeft: 10,marginTop:20 }}>
                          <View>
                            <TouchableOpacity onPress={() => this._decrementR()}>
                              <Text
                                style={{
                                  marginLeft: 10,
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  color: "white",
                                  backgroundColor: "#213e4a"
                                }}
                              >
                                -
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <Text
                            style={{
                              fontSize: 20,
                             // fontWeight:'500',
                              // borderWidth: 1,
                              width: 30,
                              textAlign: "center",
                              color: "black",
                              // borderColor: "white"
                            }}
                          >
                            {this.state.countR}
                          </Text>
                          <View>
                            <TouchableOpacity
                              onPress={() => this._incrementCountR()}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  backgroundColor: "#213e4a",
                                  color: "white"
                                }}
                              >
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                          
                        </View>
          {/* PLUS END SIGN/ */}
            </View>

                    {/* ROOM NO 1                                     */}
                       <View>
                            <Text style={{fontSize:26,textAlign:'center',fontWeight:'500',marginLeft:10,marginTop:20}}>Room 1</Text> 
                            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Room Name :</Text>
            <Input
   value={this.state.rnameOne}
   onChangeText={rnameOne => this.setState({ rnameOne })}
   placeholder='Room Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Room Bed :</Text>
            <Input
   value={this.state.rbedOne}
   onChangeText={rbedOne => this.setState({ rbedOne })}
   placeholder='Room Bed' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) How Many Guest Can Stay In Room :</Text>
            <Input
   value={this.state.guestOne}
   onChangeText={guestOne => this.setState({ guestOne })}
   placeholder='Guest' placeholderTextColor='gray' keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View> 
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iv) Room Price Per Day :</Text>
            <Input
   value={this.state.priceOne}
   onChangeText={priceOne => this.setState({ priceOne })}
   placeholder='Room Price' placeholderTextColor='gray' keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View style={{marginBottom:30}}>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>v) Will You Offer Lower Rate When Guest are less ?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button 
            onPress={()=>this.lrgl()} 
            style={{justifyContent:'center',backgroundColor:'#0078d7',opacity:this.state.lrglS==='yes'?1:0.5,height:30,width:'30%',marginHorizontal:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes</Text>
    </Button>
    <Button onPress={()=>this.lrgl()} style={{justifyContent:'center',backgroundColor:'#0078d7',opacity:this.state.lrglS==='no'?1:0.5,height:30,width:'30%',marginHorizontal:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
            </View>
            </View>
            {/* <View style={{marginBottom:20}}>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>v) Will You Offer Lower Rate When Guest are less ?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'0%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Both</Text>
    </Button>
            </View>
            </View> */}
                       </View>

                        {/* ROOM NO 02                    */}
                        {this.state.countR===2?
                        <View>
                            <Text style={{fontSize:26,textAlign:'center',fontWeight:'500',marginLeft:10,marginTop:20}}>Room 2</Text> 
                            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Room Name :</Text>
            <Input
   value={this.state.rnameTwo}
   onChangeText={rnameTwo => this.setState({ rnameTwo })}
   placeholder='Room Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Room Bed :</Text>
            <Input
   value={this.state.rbedTwo}
   onChangeText={rbedTwo => this.setState({ rbedTwo })}
   placeholder='Room Bed' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) How Many Guest Can Stay In Room :</Text>
            <Input
   value={this.state.guestTwo}
   onChangeText={guestTwo => this.setState({ guestTwo })}
   placeholder='Guest' placeholderTextColor='gray' keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View> 
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iv) Room Price Per Day :</Text>
            <Input
   value={this.state.priceTwo}
   onChangeText={priceTwo => this.setState({ priceTwo })}
   placeholder='Room Price' placeholderTextColor='gray' keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View style={{marginBottom:30}}>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>v) Will You Offer Lower Rate When Guest are less ?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button 
            onPress={()=>this.lrglTwo()} 
            style={{justifyContent:'center',backgroundColor:'#0078d7',opacity:this.state.lrglSTwo==='yes'?1:0.5,height:30,width:'30%',marginHorizontal:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes</Text>
    </Button>
    <Button onPress={()=>this.lrglTwo()} style={{justifyContent:'center',backgroundColor:'#0078d7',opacity:this.state.lrglSTwo==='no'?1:0.5,height:30,width:'30%',marginHorizontal:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
            </View>
            </View>
            </View>
            :null}
          </ScrollView>
          </View >
          <View>
    <Button
    onPress={()=>this.Next()}
    //  onPress={()=>navigate('ScreenFour')} 
    style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
            </Root>
);
}
}

const mapStateToProps = state => {
  return {
    RoomInfo: state.authReducers.RoomInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateRoomInfo: user => dispatch(updateRoomInfo(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenThree);