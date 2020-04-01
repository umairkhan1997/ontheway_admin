import React from 'react';
import { Text, View,Image,ScrollView,TouchableOpacity} from 'react-native';
import { Header,Left,Right,Button,Root,Toast} from 'native-base';
// import darkblue from '../../color'


class CarScreenFive extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5,
          accChild: "no",
          countR:1,
          ccCard:'no',
        }
    }


 _incrementCountR = () => {
        if (this.state.countR == 7) {
            alert("Can't go to above 7");
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

      lrgl=()=>{
        if(this.state.accChild==='yes'){
          this.setState({
            accChild:'no'
          })
        }
        else if(this.state.accChild==='no'){
          this.setState({
            accChild:'yes'
          })
        }
        }

        lrgl=()=>{
          if(this.state.ccCard==='yes'){
            this.setState({
              ccCard:'no'
            })
          }
          else if(this.state.ccCard==='no'){
            this.setState({
              ccCard:'yes'
            })
          }
          }
    render() {

        const {navigate}=this.props.navigation;
      
        return (
          <Root>
            <View  style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
            <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('ScreenFive')}>
                                     <Image source={require('../../../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>5# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      <Text style={{marginVertical:20,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48',marginTop:Platform.OS==='ios'?40:0}}>Policies</Text>
      <View  style={{ flex: 0.95,backgroundColor:'white' }}>
          <ScrollView style={{ flex:1 }}>

            {/* NAME FIELD */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20,width:'90%'}}>i) How Many Days In Advance Can Guest Cancel Free Of Charges ?</Text>
            {/* PLUS SIGN */}
          <View style={{ flexDirection: "row", marginLeft: 10,marginTop:20,justifyContent:'space-around' }}>
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
                              width: '30%',
                              textAlign: "center",
                              color: "black",
                              // borderColor: "white"
                            }}
                          >
                            {this.state.countR} Days
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
            </View>

            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:50}}>ii) Can You Charge Credit Cards At Your Hotel ?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>this.lrgl()} style={{opacity:this.state.ccCard==='yes'?1:0.5,justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes</Text>
    </Button>
    <Button onPress={()=>this.lrgl()} style={{opacity:this.state.ccCard==='no'?1:0.5,justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
            </View>
                        <Text style={{fontSize:16,fontWeight:'500',textAlign:'center',marginTop:20}}> You Can Change Payment When You Get Online.</Text>
            </View>

            <View>

<Text style={{marginVertical:20,marginTop:50,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48'}}>Commission</Text>
<Text style={{fontSize:16,fontWeight:'500',width:'90%',marginLeft:'5%',marginTop:20,width:'90%',textTransform:'capitalize',textAlign:'center'}}>At The Start Of The Month We Will Send You You An Invoice of all booking of previous month , invoice will be sent you in  your dashboard and also on email address : </Text>
<Text style={{marginBottom:30,marginTop:40,fontSize:18,fontWeight:'500',textAlign:"center",color:'#213d48'}}>Commission Percentage: 10%</Text>

</View>

          </ScrollView>
          </View >
          <View>
    <Button onPress={()=>navigate('CarScreenSix')} style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
            </Root>
);
}
}

export default  CarScreenFive;
