import React from 'react';
import Expo from 'expo';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, TouchableOpacity, TextInput, AsyncStorage, Keyboard } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Icon,ActionSheet, Card, CardItem,Input, Item, Picker } from 'native-base';
import numeral from 'numeral'
export default class App extends React.Component {


state = {
zakat:null,

ternak: 'Kambing',

}

componentWillMount(){
  AsyncStorage.getItem('harga', (error, result) => {
        if (result) {
           let resultParsed = JSON.parse(result)
           this.setState({
            beras:resultParsed.beras.toString(),
            emas:resultParsed.emas.toString(),
            perak:resultParsed.perak.toString()
           })
        }
   });
}
bannerError () {
  console.log("An error");
  return;
}
jumlah = (a) => {

    this.setState({jumlah: a})

  }


  hitungZakat = () => {
    if (this.state.ternak == 'Kambing') {
      if (parseInt(this.state.jumlah)<120) {
        this.setState({
          zakat:'1 ekor kambing'
        })

      }else if (parseInt(this.state.jumlah)>120 && parseInt(this.state.jumlah)<200) {
        this.setState({
          zakat:'2 ekor kambing'
        })
      }else{
        const hasil = Math.round(parseInt(this.state.jumlah)/100)
        this.setState({
          zakat:hasil+' ekor kambing'
        })
      }

    }else{
      if (parseInt(this.state.jumlah)<29) {
        this.setState({
          zakat:'0 ekor sapi'
        })
      }else if (parseInt(this.state.jumlah)>29 && parseInt(this.state.jumlah)<39) {
        this.setState({
          zakat:"1 ekor sapi tabi'"
        })
      }
    else if (parseInt(this.state.jumlah)>39 && parseInt(this.state.jumlah)<59) {
      this.setState({
        zakat:"1 ekor sapi musinnah'"
      })
    }else if (parseInt(this.state.jumlah)>59 && parseInt(this.state.jumlah)<69) {
      this.setState({
        zakat:"2 ekor sapi tabi'"
      })
    }else if (parseInt(this.state.jumlah)>69 && parseInt(this.state.jumlah)<79) {
      this.setState({
        zakat:"1 ekor sapi musinnah dan 1 ekor tabi'"
      })
    }else if (parseInt(this.state.jumlah)>79 && parseInt(this.state.jumlah)<89) {
      this.setState({
        zakat:"2 ekor sapi musinnah"
      })
    }else if (parseInt(this.state.jumlah)>89 && parseInt(this.state.jumlah)<99) {
      this.setState({
        zakat:"3 ekor sapi tabi'"
      })
    }else if (parseInt(this.state.jumlah)>99&&parseInt(this.state.jumlah)<109) {
      this.setState({
        zakat:"2 ekor sapi tabi' dan 1 ekor musinnah"
      })
    }else if (parseInt(this.state.jumlah)>109&&parseInt(this.state.jumlah)<119) {
      this.setState({
        zakat:"2 ekor sapi musinnah dan 1 ekor tabi'"
      })
    }else if (parseInt(this.state.jumlah)>119&&parseInt(this.state.jumlah)<129) {
      this.setState({
        zakat:"3 ekor sapi musinnah atau 4 ekor tabi'"
      })
    }else if (parseInt(this.state.jumlah)>129) {
      const tabi = Math.round(parseInt(this.state.jumlah)/30)
      const musinnah = Math.round(parseInt(this.state.jumlah)/40)
      this.setState({
        zakat:tabi+" ekor sapi tabi' dan "+musinnah+" ekor musinnah"
      })
    }



  }
}

  kewajiban = () => {
    if (this.state.ternak == 'Kambing') {
      if (this.state.jumlah > 39) {
        return (
          <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}} >Wajib</Text>
        )
      }else{
        return (
          <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}} >Tidak Wajib</Text>
        )
      }
    }else{
      if (this.state.jumlah > 29) {
        return (
          <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}} >Wajib</Text>
        )
      }else{
        return (
          <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}} >Tidak Wajib</Text>
        )
      }
    }
  }



  onValueChange(value: string) {
    this.setState({
      ternak: value
    });
  }

  hasil = () => {
    if (this.state.zakat !== null) {


      return(
        <View>

        <View style={{height:30, backgroundColor:'#cecece', justifyContent:'center'}}>
            {this.kewajiban()}
          </View>

          <View style={{height:80, backgroundColor:'#faaf3b', justifyContent:'center'}}>
            <Text style={{fontWeight:'bold', color:'white', fontSize:20, textAlign:'center'}} >{this.state.zakat}</Text>
          </View>

          </View>
      )
    }
  }



  render() {
    return (
      <Container style={{backgroundColor: '#f5f5f5'}}>
      <View style={styles.statusBar} />
        <Header style={{backgroundColor: '#faaf3b'}}>
        <Left>
        <TouchableOpacity
    onPress={() => {

      this.props.navigation.goBack()
    }}
    >
        <Icon type="Ionicons" name="ios-arrow-back" style={{color: 'white'}} />
        </TouchableOpacity>
        </Left>
          <Body>
            <Title>Zakat Perternakan</Title>
          </Body>

        </Header>
        <Content>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Jenis Ternak</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Picker

              mode="dropdown"
              selectedValue={this.state.ternak}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Kambing" value="Kambing" />
              <Picker.Item label="Sapi" value="Sapi" />

            </Picker>
          </Item>

          </View>
        </View>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Jumlah {this.state.ternak}</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Input  placeholder={this.state.ternak+' yang dimiliki'} keyboardType='numeric'  onChangeText={(text) => this.jumlah(text)} />
          </Item>

          </View>
        </View>




        <TouchableNativeFeedback onPress={
          ()=>{
            Keyboard.dismiss()
            this.hitungZakat()
          }
        }>
        <View style={{flex:1, flexDirection:'column', backgroundColor:'#faaf3b', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20, marginBottom:20}}>
        <Text style={{alignSelf:'center',fontWeight: 'bold', color: 'white', fontSize:20}}>Hitung</Text>
        </View>
        </TouchableNativeFeedback>

        <View style={{flex:1, flexDirection:'column', marginTop:20, marginLeft:20, marginRight:20, justifyContent: 'center'}}>
        <AdMobBanner

        bannerSize="largeBanner"
        adUnitID="ca-app-pub-2181847764588510/8522524525"
        testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={this.bannerError} />
        </View>

        </Content>
        {this.hasil()}

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#faaf3b",
    height: Expo.Constants.statusBarHeight,
  },
});
