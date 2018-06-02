import React from 'react';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
import Expo from 'expo';
import { StyleSheet, Text, View, TouchableNativeFeedback,TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Icon,ActionSheet, Card, CardItem,   } from 'native-base';
export default class App extends React.Component {

componentWillMount(){



  AsyncStorage.getItem('harga', (error, result) => {
        if (result) {
           let resultParsed = JSON.parse(result)
           console.log(resultParsed)
        }else{
          const data = {
            beras:15000,
            emas:650000,
            perak:11000
          }
          AsyncStorage.setItem('harga', JSON.stringify(data));
        }
   });
}
bannerError () {
  console.log("An error");
  return;
}
  render() {

    return (
      <Container style={{backgroundColor: '#f5f5f5'}}>
      <View style={styles.statusBar} />
        <Header style={{backgroundColor: '#faaf3b'}}>
        <Left>
        <TouchableOpacity
    onPress={() => {this.props.navigation.navigate('Pengaturan')}}
    >
        <Icon type="Ionicons" name="ios-settings" style={{color: 'white'}} />
        </TouchableOpacity>
        </Left>
          <Body>
            <Title>Hitung Zakat</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Fitrah')}}
          >
              <View style={{flex:1, flexDirection:'row', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'space-between',}}>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{width: 50, height: 50}} source={require('../../assets/zakat-01.png')} />
                  <Text style={{alignSelf:'center',fontWeight: 'bold', color: '#faaf3b', fontSize:20, marginLeft: 10}}>Zakat Fitrah</Text>
                </View>



                <View style={{alignSelf:'center', }}>
                  <Icon name="ios-arrow-forward" style={{color: '#cecece', fontSize:20}} />
                </View>

              </View>

          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Perdagangan')}}
          >
              <View style={{flex:1, flexDirection:'row', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'space-between',}}>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{width: 50, height: 50}} source={require('../../assets/zakat-02.png')} />
                  <Text style={{alignSelf:'center',fontWeight: 'bold', color: '#faaf3b', fontSize:20, marginLeft: 10}}>Zakat Perdagangan</Text>
                </View>



                <View style={{alignSelf:'center', }}>
                  <Icon name="ios-arrow-forward" style={{color: '#cecece', fontSize:20}} />
                </View>

              </View>

          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Profesi')}}
          >
              <View style={{flex:1, flexDirection:'row', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'space-between',}}>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{width: 50, height: 50}} source={require('../../assets/zakat-03.png')} />
                  <Text style={{alignSelf:'center',fontWeight: 'bold', color: '#faaf3b', fontSize:20, marginLeft: 10}}>Zakat Profesi</Text>
                </View>



                <View style={{alignSelf:'center', }}>
                  <Icon name="ios-arrow-forward" style={{color: '#cecece', fontSize:20}} />
                </View>

              </View>

          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Emas')}}
          >
              <View style={{flex:1, flexDirection:'row', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'space-between',}}>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{width: 50, height: 50}} source={require('../../assets/zakat-04.png')} />
                  <Text style={{alignSelf:'center',fontWeight: 'bold', color: '#faaf3b', fontSize:20, marginLeft: 10}}>Zakat Emas & Perak</Text>
                </View>



                <View style={{alignSelf:'center', }}>
                  <Icon name="ios-arrow-forward" style={{color: '#cecece', fontSize:20}} />
                </View>

              </View>

          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Tabungan')}}
          >
              <View style={{flex:1, flexDirection:'row', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'space-between',}}>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{width: 50, height: 50}} source={require('../../assets/zakat-05.png')} />
                  <Text style={{alignSelf:'center',fontWeight: 'bold', color: '#faaf3b', fontSize:20, marginLeft: 10}}>Zakat Tabungan</Text>
                </View>



                <View style={{alignSelf:'center', }}>
                  <Icon name="ios-arrow-forward" style={{color: '#cecece', fontSize:20}} />
                </View>

              </View>

          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Pertanian')}}
          >
              <View style={{flex:1, flexDirection:'row', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'space-between',}}>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{width: 50, height: 50}} source={require('../../assets/zakat-06.png')} />
                  <Text style={{alignSelf:'center',fontWeight: 'bold', color: '#faaf3b', fontSize:20, marginLeft: 10}}>Zakat Pertanian</Text>
                </View>



                <View style={{alignSelf:'center', }}>
                  <Icon name="ios-arrow-forward" style={{color: '#cecece', fontSize:20}} />
                </View>

              </View>

          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Perternakan')}}
          >
              <View style={{flex:1, flexDirection:'row', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'space-between',}}>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{width: 50, height: 50}} source={require('../../assets/zakat-09.png')} />
                  <Text style={{alignSelf:'center',fontWeight: 'bold', color: '#faaf3b', fontSize:20, marginLeft: 10}}>Zakat Perternakan</Text>
                </View>



                <View style={{alignSelf:'center', }}>
                  <Icon name="ios-arrow-forward" style={{color: '#cecece', fontSize:20}} />
                </View>

              </View>

          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('BarangTemuan')}}
          >
              <View style={{flex:1, flexDirection:'row', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'space-between',}}>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{width: 50, height: 50}} source={require('../../assets/zakat-07.png')} />
                  <Text style={{alignSelf:'center',fontWeight: 'bold', color: '#faaf3b', fontSize:20, marginLeft: 10}}>Zakat Barang Temuan</Text>
                </View>



                <View style={{alignSelf:'center', }}>
                  <Icon name="ios-arrow-forward" style={{color: '#cecece', fontSize:20}} />
                </View>

              </View>

          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Hadiah')}}
          >
              <View style={{flex:1, flexDirection:'row', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20,marginBottom:20, padding:10, justifyContent: 'space-between',}}>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{width: 50, height: 50}} source={require('../../assets/zakat-08.png')} />
                  <Text style={{alignSelf:'center',fontWeight: 'bold', color: '#faaf3b', fontSize:20, marginLeft: 10}}>Zakat Hadiah</Text>
                </View>



                <View style={{alignSelf:'center', }}>
                  <Icon name="ios-arrow-forward" style={{color: '#cecece', fontSize:20}} />
                </View>

              </View>

          </TouchableNativeFeedback>


        </Content>
        <AdMobBanner

        bannerSize="banner"
        adUnitID="ca-app-pub-2181847764588510/6409806001"
        testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={this.bannerError} />
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
