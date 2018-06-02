import React from 'react';
import Expo from 'expo';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, TouchableOpacity, TextInput, AsyncStorage, Keyboard } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Icon,ActionSheet, Card, CardItem,Input, Item } from 'native-base';
import numeral from 'numeral'
export default class App extends React.Component {


state = {
zakat:null,
rugi:'0',
cicilan:'0'
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
modal = (a) => {

    this.setState({modal: a})

  }
  untung = (a) => {

      this.setState({untung: a})

    }
    rugi = (a) => {

        this.setState({rugi: a})

      }
      cicilan = (a) => {

          this.setState({cicilan: a})

        }

  hitungZakat = () => {
    const tambah = parseInt(this.state.modal)+parseInt(this.state.untung)
    const cicilan = parseInt(this.state.cicilan)*12
    const kurang = tambah - parseInt(this.state.rugi) - cicilan
    const kali = kurang*2.5/100
    this.setState({
      zakat:kali
    })
  }

  kewajiban = () => {
    const tambah = parseInt(this.state.modal)+parseInt(this.state.untung)
    const cicilan = parseInt(this.state.cicilan)*12
    const kurang = tambah - parseInt(this.state.rugi) - cicilan

    if (kurang > 85*parseInt(this.state.emas)) {
      return (
        <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}} >Wajib</Text>
      )
    }else{
      return (
        <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}} >Tidak Wajib</Text>
      )
    }
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
            <Title>Zakat Perdagangan</Title>
          </Body>

        </Header>
        <Content>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Modal</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Input  placeholder='Jumlah modal' keyboardType='numeric'  onChangeText={(text) => this.modal(text)} />
          </Item>

          </View>
        </View>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Untung</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Input  placeholder='Untung dalam 1 tahun' keyboardType='numeric'  onChangeText={(text) => this.untung(text)} />
          </Item>

          </View>
        </View>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Rugi/Hutang</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Input keyboardType='numeric'  onChangeText={(text) => this.rugi(text)} value={this.state.rugi} />
          </Item>

          </View>
        </View>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Cicilan perbulan</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Input keyboardType='numeric'  onChangeText={(text) => this.cicilan(text)} value={this.state.cicilan} />
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
