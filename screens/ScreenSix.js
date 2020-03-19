import React from 'react';
import { Text, View,Image,ScrollView,TouchableOpacity} from 'react-native';
import { Header,Left,Right,Button,Root,Toast} from 'native-base';
// import darkblue from '../../color'


class ScreenSix extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5,
          selected: "Recent",
          show:'HIDE',
          countR:1
        }
    }


 _incrementCountR = () => {
        if (this.state.countR == 7) {
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


    render() {

        const {navigate}=this.props.navigation;
      
        return (
          <Root>
            <View  style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
            <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('ScreenFive')}>
                                     <Image source={require('../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>6# Form</Text>
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
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>v) Will You Accomodate Children ?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
            </View>
            </View>
       

          </ScrollView>
          </View >
          <View>
    <Button onPress={()=>navigate('ScreenSeven')} style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
            </Root>
);
}
}

export default  ScreenSix;
