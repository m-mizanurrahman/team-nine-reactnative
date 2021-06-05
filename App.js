import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Alert, FlatList, Image } from 'react-native';
import { Footer, FooterTab } from 'native-base';

class App extends Component {


  myData = [
    { id: "1", title: "Bangladesh", subtitle: "MyCountry", img: "https://cdn.pixabay.com/photo/2017/03/09/07/09/bangladesh-2128620_960_720.jpg" },

    { id: "2", title: "India", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2012/04/26/12/50/mahatma-gandhi-42390_960_720.png' },
    { id: "3", title: "Usa", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2017/03/10/12/45/usa-2132680_960_720.jpg' },
    { id: "4", title: "Portugal", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2017/03/10/13/02/portugal-2132717_960_720.jpg' },
    { id: "5", title: "Germany", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2016/04/16/11/44/german-flag-1332897__340.png' },
    { id: "6", title: "south africa", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2017/03/07/00/22/south-africa-2122942__340.jpg' },
    { id: "7", title: "bhutan", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2017/03/09/07/19/bhutan-2128637__340.jpg' },
    { id: "8", title: "nepal", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2017/03/10/00/19/nepal-2131320__340.jpg' },
    { id: "9", title: "Jordan", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2017/03/09/23/55/jordan-2131256__340.jpg' }

  ];


  onClickItem = (Alerttitle) => {
    Alert.alert(Alerttitle)

  }

  childView = ({ Childtitle, Childsubtitle, img }) => {
    return (
      <View style={{ flexDirection: 'column', backgroundColor: 'white', margin: 5, width: 170, height: 200 }}>

        <View style={{}}>
          <Image style={{ height: 100, width: "100%" }} source={{ uri: img }} />
        </View>
        <View style={{ padding: 20 }}>
          <Text onPress={this.onClickItem.bind(this, Childtitle)} style={{ color: 'black', fontSize: 18 }}>{Childtitle}</Text>
          <Text style={{ color: 'black', fontSize: 12 }}>{Childsubtitle}</Text>
        </View>



      </View>
    )
  }





  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Country</Title>
          </Body>
          <Right />
        </Header>
        <FlatList keyExtractor={item => item.id} numColumns={2} horizontal={false} data={this.myData} renderItem={({ item }) => <this.childView Childtitle={item.title} Childsubtitle={item.subtitle} img={item.img} />} />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>


    );
  }
}

export default App;