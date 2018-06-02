import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, TouchableOpacity, TextInput, AsyncStorage, Keyboard } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Icon,ActionSheet, Card, CardItem,Input, Item } from 'native-base';
import numeral from 'numeral'
export default class App extends React.Component {


state = {
  beras:'0',
  emas:'0',
  perak:'0',
  zakat:null
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

beras = (a) => {

    this.setState({beras: a})

  }
  emas = (a) => {

      this.setState({emas: a})

    }
    perak = (a) => {

        this.setState({perak: a})

      }
  hitungZakat = () => {
    const data = {
      beras:this.state.beras,
      emas:this.state.emas,
      perak:this.state.perak
    }
    AsyncStorage.setItem('harga', JSON.stringify(data));
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
            <Title>Pengaturan</Title>
          </Body>
          <Right/>
        </Header>
        <Content>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Harga Beras perliter</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Input  placeholder='Harga beras saat ini' keyboardType='numeric'  onChangeText={(text) => this.beras(text)} value={this.state.beras} />
          </Item>

          </View>
        </View>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Emas pergram</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Input  placeholder='Harga emas saat ini' keyboardType='numeric'  onChangeText={(text) => this.emas(text)} value={this.state.emas} />
          </Item>

          </View>
        </View>

        <View style={{flex:1, flexDirection:'column', backgroundColor:'white', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>

          <View>

            <Text style={{ color: '#faaf3b', fontSize:20, marginLeft: 10, marginBottom:10}}>Perak pergram</Text>
          </View>

          <View>
          <Item regular style={{marginRight:10, marginLeft: 10}}>
            <Input  placeholder='Harga perak saat ini' keyboardType='numeric'  onChangeText={(text) => this.perak(text)} value={this.state.perak} />
          </Item>

          </View>
        </View>

        <TouchableNativeFeedback onPress={
          ()=>{
            Keyboard.dismiss()
            this.hitungZakat()
          }
        }>
        <View style={{flex:1, flexDirection:'column', backgroundColor:'#faaf3b', marginTop:20, marginLeft:20, marginRight:20, padding:10, justifyContent: 'flex-start', paddingBottom:20}}>
        <Text style={{alignSelf:'center',fontWeight: 'bold', color: 'white', fontSize:20}}>Simpan</Text>
        </View>
        </TouchableNativeFeedback>


        </Content>


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
