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
beras:'0',
air: 'hujan',

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
laba = (a) => {

    this.setState({laba: a})

  }



  hitungZakat = () => {
    if (this.state.logam == 'hujan') {
      const hasil = parseInt(this.state.laba) * 10/100
      this.setState({
        zakat:hasil
      })
    }else if (this.state.logam == 'irigasi') {
      const hasil = parseInt(this.state.laba) * 5/100
      this.setState({
        zakat:hasil
      })
    }else {
      const hasil = parseInt(this.state.laba) * 7.5/100
      this.setState({
        zakat:hasil
      })
    }



  }

  kewajiban = () => {


    if (parseInt(this.state.laba) > 85*parseInt(this.state.beras)) {
      return (
        <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}} >Wajib</Text>
      )
    }else{
      return (
        <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}} >Tidak Wajib</Text>
      )
    }
  }

  onValueChange(value: string) {
    this.setState({
      air: value
    });
  }

  hasil = () => {
    if (this.state.zakat !== null) {

      const display = "Rp."+numeral(this.state.zakat).format('0,0.00')
      return(
        <View>

        <View style={{height:30, backgroundColor:'#cecece', justifyContent:'center'}}>
            {this.kewajiban()}
          </View>

          <View style={{height:80, backgroundColor:'#faaf3b', justifyContent:'center'}}>
            <Text style={{fontWeight:'bold', color:'white', fontSize:25, textAlign:'center'}} >{display}</Text>
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
            <Title>Zakat Pertanian</Title>
          </Body>

        </Header>
        <Content>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Jenis Pengairan</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Picker

              mode="dropdown"
              selectedValue={this.state.air}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Air Hujan" value="hujan" />
              <Picker.Item label="Irigasi / Disiram" value="irigasi" />
              <Picker.Item label="Air Hujan & Irigasi" value="hujanIrigasi" />

            </Picker>
          </Item>

          </View>
        </View>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Laba</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Input  placeholder='Untung dalam sekali panen' keyboardType='numeric'  onChangeText={(text) => this.laba(text)} />
          </Item>

          </View>
        </View>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Harga Beras perKg</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Input  placeholder='Harga beras saat ini' keyboardType='numeric'  onChangeText={(text) => this.beras(text)} value={this.state.beras} />
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
