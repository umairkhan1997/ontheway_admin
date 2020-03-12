import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';
// import darkblue from '../../color'
import ImagePicker from 'react-native-image-picker'
// import ImagePickers from "react-native-customized-image-picker";
import ImagePickerss from 'react-native-image-crop-picker';


class ScreenFive extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5,
               show:'HIDE',
          countR:1,
          images: [],
          selected:0,
          title:'',
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

  //   getImages = () => {
  //     ImagePickers.openPicker({
  //     multiple: true,
  //     includeBase64:true
  //   }).then(images => {
  //     console.log(images.bas);
  //   });
  // }

  getImagess() {
    ImagePickerss.openPicker({
    multiple: true
  }).then(images => {
    console.log(images);
  });
  }



    render() {

        const {navigate}=this.props.navigation;
      
        return (
            <View  style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
            <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('ScreenFour')}>
                                     <Image source={require('../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>5# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 0.95,backgroundColor:'white' }}>
          <ScrollView style={{ flex:1 }}>



          <View style={{width:170,backgroundColor:'#0C91CF',alignSelf:'center',marginTop:10,borderRadius:10}}>
<TouchableOpacity onPress={this.getImage}>
    {this.state.selected<1?<ImageBackground source={require('../images/picture.png',)}style={{width:160,height:140,alignSelf:'center'}}
    />

:<ImageBackground source={{uri:this.state.images[0].image_uri}}style={{width:160,height:140,alignSelf:'center'}}/>
}

    </TouchableOpacity>
</View>

    <Button onPress={this.getImagess} style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>pic crop </Text>
    </Button>
         
        {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
  
          </ScrollView>
          </KeyboardAvoidingView >
          <View>
    <Button onPress={()=>navigate('ScreenSix')} style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
);
}
}

export default  ScreenFive;
