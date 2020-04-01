import React from 'react';
import { Text, View,Image,ScrollView,TouchableOpacity} from 'react-native';
import { Header,Left,Right,Button,Root,Toast} from 'native-base';
// import darkblue from '../../color'


class CarScreenSix extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
            ccCard:'no',
            aggOne:'no',
            aggTwo:'no',
            aggThree:'no',
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

        aggFunc=(parone,partwo)=>{
            console.log(this.state[parone])
            if(this.state[parone]==='no'){
                this.setState({
                  [parone]:'yes'
                })
              }
              else if(this.state[parone]==='yes'){
                this.setState({
                    [parone]:'no'
                })
              }
            }
    render() {

        const {navigate}=this.props.navigation;
      console.log(this.state)
        return (
            <Root>
            <View  style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
            <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('ScreenSix')}>
                                     <Image source={require('../../../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>6# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      <View  style={{ flex: 0.95,backgroundColor:'white' }}>
          <ScrollView style={{ flex:1 }}>


<View style={{marginBottom:20}}>

             <Text style={{marginTop:0,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48'}}>Agreements</Text>

             <Text style={{fontSize:16,fontWeight:'500',textAlign:'center',marginVertical:20,fontWeight:'bold'}}> To Complete your registration, please read it before you tick the boxes .</Text>

             <View style={{width:'92%',marginLeft:'4%',marginRight:'4%',flexDirection:'row'}}>
                 {
this.state.aggOne==='yes'?
<TouchableOpacity onPress={()=>this.aggFunc('aggOne','no')}>
                     <Image source={require('../../../images/check-box.png')} style={{width:20,height:20}}/>
                     </TouchableOpacity>
                     :
                 <TouchableOpacity onPress={()=>this.aggFunc('aggOne','yes')}>
                 <Image source={require('../../../images/uncheck.png')} style={{width:20,height:20}}/>
                 </TouchableOpacity>
                    }
            <Text style={{marginLeft:5,fontWeight:'bold'}}> I certify that this is a legal accomodation business with all permits and licenses required from local government  
            </Text>
             </View>
             <View style={{marginTop:10,width:'92%',marginLeft:'4%',marginRight:'4%',flexDirection:'row'}}>
             {
this.state.aggTwo==='yes'?
<TouchableOpacity onPress={()=>this.aggFunc('aggTwo','no')}>
                     <Image source={require('../../../images/check-box.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
                 :
                 <TouchableOpacity onPress={()=>this.aggFunc('aggTwo','yes')}>
                 <Image source={require('../../../images/uncheck.png')} style={{width:20,height:20}}/>
                 </TouchableOpacity>
                    }
            <Text style={{marginLeft:5,fontWeight:'bold'}}> In case , if  you don't send us our comission (from past 2 months ) , we will send you legal notice for it .  
            </Text>
             </View>
             <View style={{marginTop:10,width:'92%',marginLeft:'4%',marginRight:'4%',flexDirection:'row'}}>
             {
this.state.aggThree==='yes'?
<TouchableOpacity onPress={()=>this.aggFunc('aggThree','no')}>
                     <Image source={require('../../../images/check-box.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
                 :
                 <TouchableOpacity onPress={()=>this.aggFunc('aggThree','yes')}>
                 <Image source={require('../../../images/uncheck.png')} style={{width:20,height:20}}/>
                 </TouchableOpacity>
                    }
            <Text style={{marginLeft:5,fontWeight:'bold'}}> If your property gets 6 or more than 6 complains in a month on our platform , we can cancel/block you/your property with giving you any details . 
            </Text>
             </View>
      </View>       
          </ScrollView>
          </View >
          <View>
    <Button  style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
            </Root>
);
}
}

export default  CarScreenSix;
