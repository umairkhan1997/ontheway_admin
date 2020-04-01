import React from 'react';
import { Text, View,Image,ImageBackground,ScrollView,TouchableOpacity, Platform} from 'react-native';
import { Header,Left,Right,Button,Root,Toast} from 'native-base';
// import darkblue from '../../color'
import ImagePicker from 'react-native-image-picker'
// import ImagePickers from "react-native-customized-image-picker";
import ImagePickerss from 'react-native-image-crop-picker';
import Video from 'react-native-video';

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
          imageCarOne:null,
          imagesCarOne:null,
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

  // getImagess() {
  //   ImagePickerss.openPicker({
  //   multiple: true
  // }).then(images => {
  //   console.log(images);
  // });
  // }

  getImagess=(parOne,parTwo)=> {
    ImagePickerss.openPicker({
      multiple: true,
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

        const {navigate}=this.props.navigation;
      
        return (
          <Root>
            <View  style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:Platform.OS==='ios'?85:55,marginTop:0 }} >
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
      <View  style={{ flex: 0.95,backgroundColor:'white' }}>
          <ScrollView style={{ flex:1 }}>



          {/* <View style={{width:170,backgroundColor:'#0C91CF',alignSelf:'center',marginTop:10,borderRadius:10}}>
<TouchableOpacity onPress={this.getImage}>
    {this.state.selected<1?<ImageBackground source={require('../images/picture.png',)}style={{width:160,height:140,alignSelf:'center'}}
    />

:<ImageBackground source={{uri:this.state.images[0].image_uri}}style={{width:160,height:140,alignSelf:'center'}}/>
}

    </TouchableOpacity>
</View> */}
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
         

          </ScrollView>
          </View >
          <View>
    <Button onPress={()=>navigate('ScreenSix')} style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
            </Root>
);
}
}

export default  ScreenFive;
