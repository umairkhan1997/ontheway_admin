import React from 'react';
import { Text, View,Image,ScrollView,TouchableOpacity} from 'react-native';
import { Header,Left,Right,Button,Input,Root,Toast} from 'native-base';
// import darkblue from '../../color'


class ScreenFour extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          parkStatus:'no',breakStatus:'no',wifi:'free',restaurent:'free',rmService:'free',bar:'free',
          hourService:'free',garden:'free',terreace:'free',airportShuttle:'free',fmRoom:'free',swPool:'free',
          addMattress:'free',airCond:'free',fitCenter:'free',extraBed:'no',extraMattress:'no',
          parkStatusRs:0,breakStatusRs:0,wifiRs:0,restaurentRs:0,rmServiceRs:0,barRs:0,hourServiceRs:0,gardenRs:0,terreaceRs:0,airportShuttleRs:0,
          fmRoomRs:0,swPoolRs:0,addMattressRs:0,airCondRs:0,fitCenterRs:0,extraBedRs:0,extraMattressRs:0,
        }
    }

    parkFunc=(check)=>{
        if(check==='no'){
          this.setState({
            parkStatus:'no'
          })
        }
        else if(check==='free'){
          this.setState({
            parkStatus:'free'
          })
        }
        else if(check==='paid'){
            this.setState({
              parkStatus:'paid'
            })
          }
        }
        breakFunc=(check)=>{
            if(check==='no'){
              this.setState({
                breakStatus:'no'
              })
            }
            else if(check==='inlPrice'){
              this.setState({
                breakStatus:'inlPrice'
              })
            }
            else if(check==='addCharge'){
                this.setState({
                  breakStatus:'addCharge'
                })
              }
            }

checkMultiCond=(parone,partwo)=>{
console.log(this.state[parone])
if(this.state[parone]==='paid'){
    this.setState({
      [parone]:'free'
    })
  }
  else if(this.state[parone]==='free'){
    this.setState({
        [parone]:'paid'
    })
  }
}
checkAmeniCond=(parone,partwo)=>{
    if(partwo==='no'){
      this.setState({
        [parone]:'no'
      })
    }
    else if(partwo==='free'){
      this.setState({
        [parone]:'free'
      })
    }
    else if(partwo==='paid'){
        this.setState({
          [parone]:'paid'
        })
      }
    }

    render() {

        const {navigate}=this.props.navigation;
      // console.log(this.state,'this.state')
        return (
            <Root>
            <View  style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
            <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('ScreenThree')}>
                                     <Image source={require('../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>4# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      <Text style={{marginVertical:20,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48',marginTop:Platform.OS==='ios'?40:0}}>Facilities & Services</Text>
      {/* <KeyboardAvoidingView behavior="padding" enabled style={{ ,backgroundColor:'white' }}> */}
          <View style={{flex: 0.95}}>
          <ScrollView style={{ flex:1 }}>

            {/* Parking FIELD */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Parking :</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>this.parkFunc('no')} style={{opacity:this.state.parkStatus==='no'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>this.parkFunc('free')} style={{opacity:this.state.parkStatus==='free'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'0%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Free</Text>
    </Button>
    <Button onPress={()=>this.parkFunc('paid')} style={{opacity:this.state.parkStatus==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Paid</Text>
    </Button>
            </View>
            </View>
            {
this.state.parkStatus==='paid'?
                <Input
                value={this.state.parkStatusRs}
                onChangeText={parkStatusRs => this.setState({ parkStatusRs })}
                keyboardType="numeric"
                placeholder='Rs. Parking per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}

            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Break Fast :</Text>
            <View style={{flexDirection:'column',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>this.breakFunc('no')} style={{opacity:this.state.breakStatus==='no'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'90%',marginHorizontal:'5%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>this.breakFunc('addCharge')} style={{opacity:this.state.breakStatus==='addCharge'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'90%',marginHorizontal:'5%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Additional Charges</Text>
    </Button>
    <Button onPress={()=>this.breakFunc('inlPrice')} style={{opacity:this.state.breakStatus==='inlPrice'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'90%',marginHorizontal:'5%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,It's Includes In Price</Text>
    </Button>
            </View>
            </View>
            {this.state.breakStatus==='inlPrice'?
                <Input
                value={this.state.breakStatusRs}
                onChangeText={breakStatusRs => this.setState({ breakStatusRs })}
                keyboardType="numeric"
                placeholder='Rs. Breakfast per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}

            {/* WIFI/ */}

  <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Facilities :</Text>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Wifi : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('wifi','free')} style={{opacity:this.state.wifi==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('wifi','paid')} style={{opacity:this.state.wifi==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
            </View>
            {
this.state.wifi==='paid'?
               <Input
   value={this.state.wifiRs}
   onChangeText={wifiRs => this.setState({ wifiRs })}
   placeholder='Rs. Wifi per day' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10,marginBottom:20}}/>
            :null}
 {/* RESTAURENT/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Restaurent : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('restaurent','free')} style={{opacity:this.state.restaurent==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('restaurent','paid')} style={{opacity:this.state.restaurent==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.restaurent==='paid'?
                <Input
                value={this.state.restaurentRs}
                onChangeText={restaurentRs => this.setState({ restaurentRs })}
                keyboardType="numeric"
                placeholder='Rs. Restaurent per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}


  {/* ROOM SERVICES/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Room Service : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('rmService','free')} style={{opacity:this.state.rmService==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('rmService','paid')} style={{opacity:this.state.rmService==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.rmService==='paid'?
                <Input
                value={this.state.rmServiceRs}
                onChangeText={rmServiceRs => this.setState({ rmServiceRs })}
                keyboardType="numeric"
                placeholder='Rs. Room Service per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
   {/* Bar/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Bar : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('bar','free')} style={{opacity:this.state.bar==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('bar','paid')} style={{opacity:this.state.bar==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.bar==='paid'?
                <Input
                value={this.state.barRs}
                onChangeText={barRs => this.setState({ barRs })}
                keyboardType="numeric"
                placeholder='Rs. Bar per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
  {/* ROOM SERVICES/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>24 Hour Service : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('hourService','free')} style={{opacity:this.state.hourService==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('hourService','paid')} style={{opacity:this.state.hourService==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.hourService==='paid'?
                <Input
                value={this.state.hourServiceRs}
                onChangeText={hourServiceRs => this.setState({ hourServiceRs })}
                keyboardType="numeric"
                placeholder='Rs. Service per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
   {/* Garden/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Garden : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('garden','free')} style={{opacity:this.state.garden==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('garden','paid')} style={{opacity:this.state.garden==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.garden==='paid'?
                <Input
                value={this.state.breakStatusRs}
                onChangeText={breakStatusRs => this.setState({ breakStatusRs })}
                keyboardType="numeric"
                placeholder='Rs. Garden per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
    {/* Terrace/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Terrace : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('terreace','free')} style={{opacity:this.state.terreace==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('terreace','paid')} style={{opacity:this.state.terreace==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.terreace==='paid'?
                <Input
                value={this.state.terreaceRs}
                onChangeText={terreaceRs => this.setState({ terreaceRs })}
                keyboardType="numeric"
                placeholder='Rs. Terrace per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
    {/* Arport/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Airport Shuttle: </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('airportShuttle','free')} style={{opacity:this.state.airportShuttle==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('airportShuttle','paid')} style={{opacity:this.state.airportShuttle==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.airportShuttle==='paid'?
                <Input
                value={this.state.airportShuttleRs}
                onChangeText={airportShuttleRs => this.setState({ airportShuttleRs })}
                keyboardType="numeric"
                placeholder='Rs. Shuttle per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
     {/* Family Room  / */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Family Room : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('fmRoom','free')} style={{opacity:this.state.fmRoom==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('fmRoom','paid')} style={{opacity:this.state.fmRoom==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.fmRoom==='paid'?
                <Input
                value={this.state.fmRoomRs}
                onChangeText={fmRoomRs => this.setState({ fmRoomRs })}
                keyboardType="numeric"
                placeholder='Rs. Family Room per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
  {/* Swimming Pool  / */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Swimming Pool : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('swPool','free')} style={{opacity:this.state.swPool==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('swPool','paid')} style={{opacity:this.state.swPool==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.swPool==='paid'?
                <Input
                value={this.state.swPoolRs}
                onChangeText={swPoolRs => this.setState({ swPoolRs })}
                keyboardType="numeric"
                placeholder='Rs. Pool per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
  {/* Additional Matteras  / */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Additional Matteras : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('addMattress','free')} style={{opacity:this.state.addMattress==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('addMattress','paid')} style={{opacity:this.state.addMattress==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.addMattress==='paid'?
                <Input
                value={this.state.addMattressRs}
                onChangeText={addMattressRs => this.setState({ addMattressRs })}
                keyboardType="numeric"
                placeholder='Rs. Mattress per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
   {/* Air Condition  / */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Air Condition : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('airCond','free')} style={{opacity:this.state.airCond==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('airCond','paid')} style={{opacity:this.state.airCond==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>
 {this.state.airCond==='paid'?
                <Input
                value={this.state.airCondRs}
                onChangeText={airCondRs => this.setState({ airCondRs })}
                keyboardType="numeric"
                placeholder='Rs. Air Condition per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
   {/* Air Condition  / */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Fitness Center : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>this.checkMultiCond('fitCenter','free')} style={{opacity:this.state.fitCenter==='free'?1:0.5,justifyContent:'center',marginBottom:20,backgroundColor:'#0078d7',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
    <Button onPress={()=>this.checkMultiCond('fitCenter','paid')} style={{opacity:this.state.fitCenter==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
            </View>
 </View>

 </View>
 {this.state.fitCenter==='paid'?
                <Input
                value={this.state.fitCenterRs}
                onChangeText={fitCenterRs => this.setState({ fitCenterRs })}
                keyboardType="numeric"
                placeholder='Rs. Fitness per day' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}

<View>
<Text style={{fontSize:18,fontWeight:'500',marginLeft:10}}>
Amenities :
</Text>

   {/* Extra Bed */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:20,marginTop:20}}>i) Can You Provide Extra Bed ?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>this.checkAmeniCond('extraBed','no')} style={{opacity:this.state.extraBed==='no'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>this.checkAmeniCond('extraBed','free')} style={{opacity:this.state.extraBed==='free'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'0%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Free</Text>
    </Button>
    <Button onPress={()=>this.checkAmeniCond('extraBed','paid')} style={{opacity:this.state.extraBed==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Paid</Text>
    </Button>
            </View>
            {
this.state.extraBed==='paid'?
                <Input
                value={this.state.extraBedRs}
                onChangeText={extraBedRs => this.setState({ extraBedRs })}
                keyboardType="numeric"
                placeholder='Rs. Extra Bed' placeholderTextColor='gray'
                style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            :null}
            </View>



              {/* Extra Matteras */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:20,marginTop:20}}>ii) Can You Provide Extra Matteras ?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>this.checkAmeniCond('extraMattress','no')} style={{opacity:this.state.extraMattress==='no'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>this.checkAmeniCond('extraMattress','free')} style={{opacity:this.state.extraMattress==='free'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'0%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Free</Text>
    </Button>
    <Button onPress={()=>this.checkAmeniCond('extraMattress','paid')} style={{opacity:this.state.extraMattress==='paid'?1:0.5,justifyContent:'center',backgroundColor:'#0078d7',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Paid</Text>
    </Button>
            </View>
            {
this.state.extraMattress==='paid'?
               <Input
   value={this.state.extraMattressRs}
   onChangeText={extraMattressRs => this.setState({ extraMattressRs })}
   keyboardType='numeric'
   placeholder='Rs. Extra Matteras' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10,marginBottom:20}}/>
            :null}</View>
</View>


          </ScrollView>
          </View >
          <View>
    <Button onPress={()=>navigate('ScreenFive')} style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
            </Root>
);
}
}

export default  ScreenFour;
