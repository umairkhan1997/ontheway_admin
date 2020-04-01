
    import React from 'react';
    import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
        ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity,Platform} from 'react-native';
    import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,Toast, Root} from 'native-base';
    import { connect } from "react-redux";
    import { updateShowRoomInfoData } from "../../../Redux/actions/authActions";
    import ImagePicker from 'react-native-image-picker'
import ImagePickerss from 'react-native-image-crop-picker';
import Video from 'react-native-video';
    
    class CarScreenFour extends React.Component {
        static navigationOptions={
            header:null,
        } 
        constructor(props) {
            super(props);
            this.state = {
                // images: [],
                imageCarOne: null,
                imagesCarOne: null,
                cPriceOne:null,
                imageCarTwo: null,
                imagesCarTwo: null,
                cPriceTwo:null,
                imageCarThree: null,
                imagesCarThree: null,
                cPriceThree:null,
                imageCarFour: null,
                imagesCarFour: null,
                cPriceFour:null,
                imageCarFive: null,
                imagesCarFive: null,
                cPriceFive:null,
                imageCarSix: null,
                imagesCarSix: null,
                cPriceSix:null,
                imageCarSeven: null,
                imagesCarSeven: null,
                cPriceSeven:null,
            }
        }

        getImage = () => {
    
            const options = {
                noData: true,
              }
            ImagePicker.showImagePicker(options, (response) => {
            
        
              if (response.didCancel) {
                console.log('User cancelled image picker');
              }
              else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              }
              else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              }
              else {
                let source = { uri: response.uri };
                //    this.setState({image_uri: response.uri})
                  //  this.setState({file:response.fileName})
                  console.log("response==========>",response.fileName  ,"uri",response.uri)
                this.setState({ images: this.state.images.concat({
                  path: response.path,
                  image_uri: response.uri,
                  fileName: response.fileName, 
                  }),
                  selected: this.state.selected + 1
                })
                console.log("response==========>",this.state.images  ,"uri",response.uri)
              }
            });
          }


        //   getImagess() {
        //     ImagePickerss.openPicker({
        //     multiple: true
        //   }).then(images => {
        //     console.log(images);
        //   });
        //   }
        
          getImagess=(parOne,parTwo)=> {
            ImagePickerss.openPicker({
            //   multiple: true,
            //   waitAnimationEnd: false,
            //   sortOrder: 'desc',
            //   includeExif: true,
            //   forceJpg: true,
              mediaType : 'photo',
            }).then(images => {
              this.setState({
                [parOne]: null,
                [parTwo]: images.map(i => {
                  console.log('received image', i);
                  return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
                })
              });
            }).catch(e => console.log(e));
          }
          renderVideo(video) {
            console.log('rendering video');
            return (<View style={{height: 300, width: 300}}>
              <Video source={{uri: video.uri, type: video.mime}}
                 style={{position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                  }}
                 rate={1}
                 paused={false}
                 volume={1}
                 muted={false}
                 resizeMode={'cover'}
                 onError={e => console.log(e)}
                 onLoad={load => console.log(load)}
                 repeat={true} />
             </View>);
          }
        
          renderImage(image) {
            return <Image style={{width: 200, height: 200, resizeMode: 'contain'}} source={image} />
          }
        
          renderAsset=(image)=> {
            if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
              return this.renderVideo(image);
            }
        
            return this.renderImage(image);
          }
        

    render() {
      console.log(this.props.updateCarCountDataProp,"this.props.user",this.state)
        const {navigate}=this.props.navigation;
        const prCrCoDP = this.props.updateCarCountDataProp.updateCarCount;
        // const {propertyNames,propertyStars,contactNumbers,phoneNumbers,altPhoneNumbers,startAddresss,countrys,citys,pCodes} = this.props.propInfo.propInfo_Data
        const propObj = this.props.propInfo
        return (
            <Root>
            <View  style={{flex:1,backgroundColor:'white'}} >
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
                                     <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('CarScreenThree')}>
                                     <Image source={require('../../../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>4# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      {/* <KeyboardAvoidingView behavior="padding" enabled style={{ backgroundColor:'white' }}> */}
      <Text style={{marginVertical:20,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48',marginTop:Platform.OS==='ios'?40:0}}>Cars Details</Text>
      <View style={{flex: 0.95,}}>
          <ScrollView style={{  }}>

{/* CAR ONE */}
              <View>
          <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Car One Price/day :</Text>
            <Input
   value={this.state.cPriceOne}
   onChangeText={cPriceOne => this.setState({ cPriceOne })}
   placeholder='Car One Price' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  

          <ScrollView horizontal={true} style={{marginVertical:20}}>
        {this.state.imageCarOne ? this.renderAsset(this.state.imageCarOne) : null}
        {this.state.imagesCarOne ? this.state.imagesCarOne.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </ScrollView>
          <Button onPress={()=>this.getImagess('imageCarOne','imagesCarOne')} style={{justifyContent:'center',backgroundColor:'#ba0916',width:'90%',marginLeft:'5%'}}>
        {
            this.state.imagesCarOne?
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select to Change Images for Car One</Text>
            :
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select Images for Car One</Text>
        }
    </Button>
    </View>

    {/* CAR TWO */}
    {this.props.updateCarCountDataProp.updateCarCount>=2?
    <View>
    <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Car Two Price/day :</Text>
            <Input
   value={this.state.cPriceTwo}
   onChangeText={cPriceTwo => this.setState({ cPriceTwo })}
   placeholder='Car Two Price' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  

          <ScrollView horizontal={true} style={{marginVertical:20}}>
        {this.state.imageCarTwo ? this.renderAsset(this.state.imageCarTwo) : null}
        {this.state.imagesCarTwo ? this.state.imagesCarTwo.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </ScrollView>
          <Button onPress={()=>this.getImagess('imageCarTwo','imagesCarTwo')} style={{marginBottom:prCrCoDP===2?20:0,justifyContent:'center',backgroundColor:'#ba0916',width:'90%',marginLeft:'5%'}}>
        {
            this.state.imagesCarTwo?
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select to Change Images for Car Two</Text>
            :
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select Images for Car Two</Text>
        }
    </Button>
    </View>
:null}
      {/* CAR THREE */}
      {this.props.updateCarCountDataProp.updateCarCount>=3?
      <View>
    <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Car Three Price/day :</Text>
            <Input
   value={this.state.cPriceThree}
   onChangeText={cPriceThree => this.setState({ cPriceThree })}
   placeholder='Car Three Price' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  

          <ScrollView horizontal={true} style={{marginVertical:20}}>
        {this.state.imageCarThree ? this.renderAsset(this.state.imageCarThree) : null}
        {this.state.imagesCarThree ? this.state.imagesCarThree.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </ScrollView>
          <Button onPress={()=>this.getImagess('imageCarThree','imagesCarThree')} style={{marginBottom:prCrCoDP===3?20:0,justifyContent:'center',backgroundColor:'#ba0916',width:'90%',marginLeft:'5%'}}>
        {
            this.state.imagesCarThree?
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select to Change Images for Car Three</Text>
            :
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select Images for Car Three</Text>
        }
    </Button>
    </View>
:null}
        {/* CAR FOUR */}
        {this.props.updateCarCountDataProp.updateCarCount>=4?
        <View>
    <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iv) Car Four Price/day :</Text>
            <Input
   value={this.state.cPriceFour}
   onChangeText={cPriceFour => this.setState({ cPriceFour })}
   placeholder='Car Four Price' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  

          <ScrollView horizontal={true} style={{marginVertical:20}}>
        {this.state.imageCarFour ? this.renderAsset(this.state.imageCarFour) : null}
        {this.state.imagesCarFour ? this.state.imagesCarFour.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </ScrollView>
          <Button onPress={()=>this.getImagess('imageCarFour','imagesCarFour')} style={{marginBottom:prCrCoDP===4?20:0,justifyContent:'center',backgroundColor:'#ba0916',width:'90%',marginLeft:'5%'}}>
        {
            this.state.imagesCarFour?
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select to Change Images for Car Four</Text>
            :
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select Images for Car Four</Text>
        }
    </Button>
    </View>
    :null}
     {/* CAR FIVE */}
     {this.props.updateCarCountDataProp.updateCarCount>=5?
     <View>
    <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>v) Car Five Price/day :</Text>
            <Input
   value={this.state.cPriceFive}
   onChangeText={cPriceFive => this.setState({ cPriceFive })}
   placeholder='Car Five Price' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  

          <ScrollView horizontal={true} style={{marginVertical:20}}>
        {this.state.imageCarFive ? this.renderAsset(this.state.imageCarFive) : null}
        {this.state.imagesCarFive ? this.state.imagesCarFive.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </ScrollView>
          <Button onPress={()=>this.getImagess('imageCarFive','imagesCarFive')} style={{marginBottom:prCrCoDP===5?20:0,justifyContent:'center',backgroundColor:'#ba0916',width:'90%',marginLeft:'5%'}}>
        {
            this.state.imagesCarFive?
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select to Change Images for Car Five</Text>
            :
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select Images for Car Five</Text>
        }
    </Button>
    </View>
:null}
      {/* CAR SIX */}
      {this.props.updateCarCountDataProp.updateCarCount>=6?
      <View>
    <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>v) Car Six Price/day :</Text>
            <Input
   value={this.state.cPriceSix}
   onChangeText={cPriceSix => this.setState({ cPriceSix })}
   placeholder='Car Six Price' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  

          <ScrollView horizontal={true} style={{marginVertical:20}}>
        {this.state.imageCarSix ? this.renderAsset(this.state.imageCarSix) : null}
        {this.state.imagesCarSix ? this.state.imagesCarSix.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </ScrollView>
          <Button onPress={()=>this.getImagess('imageCarSix','imagesCarSix')} style={{marginBottom:prCrCoDP===6?20:0,justifyContent:'center',backgroundColor:'#ba0916',width:'90%',marginLeft:'5%'}}>
        {
            this.state.imagesCarSix?
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select to Change Images for Car Six</Text>
            :
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select Images for Car Six</Text>
        }
    </Button>
    </View>
    :null}
      {/* CAR SEVEN */}
      {this.props.updateCarCountDataProp.updateCarCount>=7?
      <View>
    <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>v) Car Seven Price/day :</Text>
            <Input
   value={this.state.cPriceSeven}
   onChangeText={cPriceSeven => this.setState({ cPriceSeven })}
   placeholder='Car Seven Price' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>  

          <ScrollView horizontal={true} style={{marginVertical:20}}>
        {this.state.imageCarSeven ? this.renderAsset(this.state.imageCarSeven) : null}
        {this.state.imagesCarSeven ? this.state.imagesCarSeven.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </ScrollView>
          <Button onPress={()=>this.getImagess('imageCarSeven','imagesCarSeven')} style={{marginBottom:prCrCoDP===7?20:0,justifyContent:'center',backgroundColor:'#ba0916',width:'90%',marginLeft:'5%'}}>
        {
            this.state.imagesCarSeven?
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select to Change Images for Car Seven</Text>
            :
            <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select Images for Car Seven</Text>
        }
    </Button>
    </View>
    :null}
          </ScrollView>
          </View>
          <Button
    // onPress={()=>this.Next()}
     onPress={()=>navigate('CarScreenFive')} 
    style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
          </View>
            </Root>
);
}
}

const mapStateToProps = state => {
    return {
        updateCarCountDataProp: state.authReducers.updateCarCountDataProp,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      carUserInfo: user => dispatch(carUserInfo(user)),
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CarScreenFour);