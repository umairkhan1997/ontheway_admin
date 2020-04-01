import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,Toast,Root,Textarea} from 'native-base';
// import darkblue from '../../color'
import { updateCarCount } from "../../../Redux/actions/authActions";
import { connect } from "react-redux";

class ScreenThree extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          countR:1,
        cnameOne:'',
        cModelOne:null,
        cDetailOne:'',
        cnameTwo:'',
        cModelTwo:null,
        cDetailTwo:'',
        cnameThree:'',
        cModelThree:null,
        cDetailThree:'',
        cnameFour:'',
        cModelFour:null,
        cDetailFour:'',
        cnameFive:'',
        cModelFive:null,
        cDetailFive:'',
        cnameSix:'',
        cModelSix:null,
        cDetailSix:'',
        cnameSeven:'',
        cModelSeven:null,
        cDetailSeven:'',
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

      ToastFunc=(txt)=>{
        Toast.show({
            text: txt,
            position: "bottom",
            duration: 1500,
            type: "danger",
          });
    }

    carFunc=(pOne,pTwo,Pthree,pFOur)=>{
      if(this.state[pOne].length < 6){
        console.log('asdasdsdas')
        this.ToastFunc(`Car ${pFOur} Name should be atleast 6 character `);
        return false;
          }
          else if(this.state[pTwo]=== null || this.state[pTwo]=== ""){
        this.ToastFunc(`Car ${pFOur} Model field is empty `)
        return false;
          }
          else if(this.state[Pthree]=== null || this.state[Pthree]=== ""){
            this.ToastFunc(`Car ${pFOur} Detail field is empty `)
            return false;    
          }
                  else{
                    console.log(`car ${pFOur} true`)
          //  const CarInfoData ={cnameOnes:cnameOne,cModelOnes:cModelOne,cDetailOnes:cDetailOne,}
           return true;         
                  }
    }

      Next=()=>{
        const { cnameOne,cModelOne,cDetailOne,cnameTwo,cModelTwo,cDetailTwo   } = this.state;
        const {navigate}=this.props.navigation;
        //For Car One
        if(this.state.countR===1){
if(this.carFunc('cnameOne','cModelOne','cDetailOne','One')){
  console.log('asdsadssd')
  this.props.updateCarCount({
    updateCarCount: 1
      })
      navigate('CarScreenFour')
}else{
  console.log('false')}}
//For Car Two
  if(this.state.countR===2){
  if(this.carFunc('cnameOne','cModelOne','cDetailOne','One') && this.carFunc('cnameTwo','cModelTwo','cDetailTwo','Two')){
    console.log('true car two') 
    this.props.updateCarCount({
      updateCarCount: 2
        })
        navigate('CarScreenFour') }
  else{
    console.log('false car two')}}
//For Car Three
    if(this.state.countR===3){
      if(this.carFunc('cnameThree','cModelThree','cDetailThree','Three') && this.carFunc('cnameOne','cModelOne','cDetailOne','One') && this.carFunc('cnameTwo','cModelTwo','cDetailTwo','Two')){
        console.log('true car Three') 
        this.props.updateCarCount({
          updateCarCount: 3
            })
            navigate('CarScreenFour') }
      else{
        console.log('false car Three')}}
//For Car Four
if(this.state.countR===4){
  if(this.carFunc('cnameFour','cModelFour','cDetailFour','Four') && this.carFunc('cnameThree','cModelThree','cDetailThree','Three') && this.carFunc('cnameOne','cModelOne','cDetailOne','One') && this.carFunc('cnameTwo','cModelTwo','cDetailTwo','Two')){
    console.log('true car Four')
    this.props.updateCarCount({
      updateCarCount: 4
        })
        navigate('CarScreenFour')  }
  else{
    console.log('false car Four')}}
    //For Car Five
if(this.state.countR===5){
  if(this.carFunc('cnameFive','cModelFive','cDetailFive','Five') && this.carFunc('cnameFour','cModelFour','cDetailFour','Four') && this.carFunc('cnameThree','cModelThree','cDetailThree','Three') && this.carFunc('cnameOne','cModelOne','cDetailOne','One') && this.carFunc('cnameTwo','cModelTwo','cDetailTwo','Two')){
    console.log('true car Five') 
    this.props.updateCarCount({
      updateCarCount: 5

        })
        navigate('CarScreenFour') }
  else{
    console.log('false car Five')}}
    //For Car Six
if(this.state.countR===6){
  if(this.carFunc('cnameSix','cModelSix','cDetailSix','Six') && this.carFunc('cnameFive','cModelFive','cDetailFive','Five') && this.carFunc('cnameFour','cModelFour','cDetailFour','Four') && this.carFunc('cnameThree','cModelThree','cDetailThree','Three') && this.carFunc('cnameOne','cModelOne','cDetailOne','One') && this.carFunc('cnameTwo','cModelTwo','cDetailTwo','Two')){
    console.log('true car Six')
    this.props.updateCarCount({
      updateCarCount: 6
        })
        navigate('CarScreenFour')  }
  else{
    console.log('false car Six')}}
        //For Car Seven
if(this.state.countR===7){
  if(this.carFunc('cnameSeven','cModelSeven','cDetailSeven','Seven') && this.carFunc('cnameSix','cModelSix','cDetailSix','Six') && this.carFunc('cnameFive','cModelFive','cDetailFive','Five') && this.carFunc('cnameFour','cModelFour','cDetailFour','Four') && this.carFunc('cnameThree','cModelThree','cDetailThree','Three') && this.carFunc('cnameOne','cModelOne','cDetailOne','One') && this.carFunc('cnameTwo','cModelTwo','cDetailTwo','Two')){
    console.log('true car Seven')
    this.props.updateCarCount({
      updateCarCount: 7
        })
        navigate('CarScreenFour')  }
  else{
    console.log('false car Seven')}}

    
      }




    render() {

        const {navigate}=this.props.navigation;
        // console.log(this.state,"RoomInfo",)
        return (
          <Root>
            <View  style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
            <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('ScreenTwo')}>
                                     <Image source={require('../../../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>3# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      <Text style={{marginVertical:20,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48',marginTop:Platform.OS==='ios'?40:0}}>Car Info</Text>
      {/* <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 0.95,backgroundColor:'white' }}> */}
      <View style={{flex:0.95}}>
          <ScrollView style={{ }}>

            {/* NAME FIELD */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) No Of Cars :</Text>
          
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
                            <Text style={{fontSize:26,textAlign:'center',fontWeight:'500',marginLeft:10,marginTop:20}}>Car One</Text> 
                            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Car Name :</Text>
            <Input
   value={this.state.cnameOne}
   onChangeText={cnameOne => this.setState({ cnameOne })}
   placeholder='car Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Car Model :</Text>
            <Input
   value={this.state.cModelOne}
   onChangeText={cModelOne => this.setState({ cModelOne })}
   placeholder='Model' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Car Details :</Text>
            <Textarea
            rowSpan={5} bordered
   value={this.state.cDetailOne}
   onChangeText={cDetailOne => this.setState({ cDetailOne })}
   placeholder='Guest' placeholderTextColor='gray' 
  //  keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
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
                        {this.state.countR>=2?
                        <View>
                            <Text style={{fontSize:26,textAlign:'center',fontWeight:'500',marginLeft:10,marginTop:20}}>Car Two</Text> 
                            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Car Name :</Text>
            <Input
   value={this.state.cnameTwo}
   onChangeText={cnameTwo => this.setState({ cnameTwo })}
   placeholder='Room Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Car Model :</Text>
            <Input
   value={this.state.cModelTwo}
   onChangeText={cModelTwo => this.setState({ cModelTwo })}
   placeholder='Room Bed' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Car Details :</Text>
            <Textarea
              rowSpan={5} bordered
   value={this.state.cDetailTwo}
   onChangeText={cDetailTwo => this.setState({ cDetailTwo })}
   placeholder='Guest' placeholderTextColor='gray' 
  //  keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginBottom:this.state.countR===2?20:0}}/>
            </View> 
            </View>
            :null}

      {/* ROOM NO 03                    */}
      {this.state.countR>=3?
                        <View>
                            <Text style={{fontSize:26,textAlign:'center',fontWeight:'500',marginLeft:10,marginTop:20}}>Car Three</Text> 
                            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Car Name :</Text>
            <Input
   value={this.state.cnameThree}
   onChangeText={cnameThree => this.setState({ cnameThree })}
   placeholder='Room Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Car Model :</Text>
            <Input
   value={this.state.cModelThree}
   onChangeText={cModelThree => this.setState({ cModelThree })}
   placeholder='Room Bed' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Car Details :</Text>
            <Textarea
              rowSpan={5} bordered
   value={this.state.cDetailThree}
   onChangeText={cDetailThree => this.setState({ cDetailThree })}
   placeholder='Guest' placeholderTextColor='gray' 
  //  keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginBottom:this.state.countR===3?20:0}}/>
            </View> 
            </View>
            :null}
                  {/* ROOM NO 04                    */}
                  {this.state.countR>=4?
                        <View>
                            <Text style={{fontSize:26,textAlign:'center',fontWeight:'500',marginLeft:10,marginTop:20}}>Car Four</Text> 
                            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Car Name :</Text>
            <Input
   value={this.state.cnameFour}
   onChangeText={cnameFour => this.setState({ cnameFour })}
   placeholder='Room Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Car Model :</Text>
            <Input
   value={this.state.cModelFour}
   onChangeText={cModelFour => this.setState({ cModelFour })}
   placeholder='Room Bed' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Car Details :</Text>
            <Textarea
              rowSpan={5} bordered
   value={this.state.cDetailFour}
   onChangeText={cDetailFour => this.setState({ cDetailFour })}
   placeholder='Guest' placeholderTextColor='gray' 
  //  keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginBottom:this.state.countR===4?20:0}}/>
            </View> 
            </View>
            :null}
      {/* ROOM NO 05                    */}
      {this.state.countR>=5?
                        <View>
                            <Text style={{fontSize:26,textAlign:'center',fontWeight:'500',marginLeft:10,marginTop:20}}>Car Five</Text> 
                            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Car Name :</Text>
            <Input
   value={this.state.cnameFive}
   onChangeText={cnameFive => this.setState({ cnameFive })}
   placeholder='Room Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Car Model :</Text>
            <Input
   value={this.state.cModelFive}
   onChangeText={cModelFive => this.setState({ cModelFive })}
   placeholder='Room Bed' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Car Details :</Text>
            <Textarea
              rowSpan={5} bordered
   value={this.state.cDetailFive}
   onChangeText={cDetailFive => this.setState({ cDetailFive })}
   placeholder='Guest' placeholderTextColor='gray' 
  //  keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginBottom:this.state.countR===5?20:0}}/>
            </View> 
            </View>
            :null}
                  {/* ROOM NO 06                    */}
                  {this.state.countR>=6?
                        <View>
                            <Text style={{fontSize:26,textAlign:'center',fontWeight:'500',marginLeft:10,marginTop:20}}>Car Six</Text> 
                            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Car Name :</Text>
            <Input
   value={this.state.cnameSix}
   onChangeText={cnameSix => this.setState({ cnameSix })}
   placeholder='Room Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Car Model :</Text>
            <Input
   value={this.state.cModelSix}
   onChangeText={cModelSix => this.setState({ cModelSix })}
   placeholder='Room Bed' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Car Details :</Text>
            <Textarea
              rowSpan={5} bordered
   value={this.state.cDetailSix}
   onChangeText={cDetailSix => this.setState({ cDetailSix })}
   placeholder='Guest' placeholderTextColor='gray'
    // keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginBottom:this.state.countR===6?20:0}}/>
            </View> 
            </View>
            :null}
                  {/* ROOM NO 07                   */}
                  {this.state.countR>=7?
                        <View>
                            <Text style={{fontSize:26,textAlign:'center',fontWeight:'500',marginLeft:10,marginTop:20}}>Car Seven</Text> 
                            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Car Name :</Text>
            <Input
   value={this.state.cnameSeven}
   onChangeText={cnameSeven => this.setState({ cnameSeven })}
   placeholder='Room Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>   
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Car Model :</Text>
            <Input
   value={this.state.cModelSeven}
   onChangeText={cModelSeven => this.setState({ cModelSeven })}
   placeholder='Room Bed' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Car Details :</Text>
            <Textarea
              rowSpan={5} bordered
   value={this.state.cDetailSeven}
   onChangeText={cDetailSeven => this.setState({ cDetailSeven })}
   placeholder='Guest' placeholderTextColor='gray' 
  //  keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginBottom:this.state.countR===7?20:0}}/>
            </View> 
            </View>
            :null}
          </ScrollView>
          </View >
          <View>
    <Button
    onPress={()=>this.Next()}
    //  onPress={()=>navigate('CarScreenFour')} 
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
    // RoomInfo: state.authReducers.RoomInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCarCount: user => dispatch(updateCarCount(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenThree);