import { Text, View } from 'native-base';
import React, { Component } from 'react';
import { FlatList, Image } from 'react-native';

class App extends Component {


  myData = [
    { title: "Bangladesh", subtitle: "MyCountry", img: "https://cdn.pixabay.com/photo/2017/03/09/07/09/bangladesh-2128620_960_720.jpg" },

    { title: "India", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2012/04/26/12/50/mahatma-gandhi-42390_960_720.png' },
    { title: "Usa", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2017/03/10/12/45/usa-2132680_960_720.jpg' },
    { title: "Portugal", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2017/03/10/13/02/portugal-2132717_960_720.jpg' },
    { title: "Germany", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2016/04/16/11/44/german-flag-1332897__340.png' },
    { title: "africa", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2016/04/16/11/44/german-flag-1332897__340.png' },
    { title: "bhutan", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2016/04/16/11/44/german-flag-1332897__340.png' },
    { title: "nepal", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2016/04/16/11/44/german-flag-1332897__340.png' },
    { title: "Jordan", subtitle: "Country", img: 'https://cdn.pixabay.com/photo/2016/04/16/11/44/german-flag-1332897__340.png' }

  ];

  childView = ({ Childtitle, Childsubtitle, img }) => {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: 'white', margin: 5, flex: 100 }}>

        <View style={{ flex: 30 }}>
          <Image style={{ height: 70, width: "100%" }} source={{ uri: img }} />
        </View>
        <View style={{ flex: 70, padding: 20 }}>
          <Text style={{ color: 'black', fontSize: 18 }}>{Childtitle}</Text>
          <Text style={{ color: 'black', fontSize: 12 }}>{Childsubtitle}</Text>
        </View>



      </View>
    )
  }





  render() {
    return (
      <FlatList data={this.myData} renderItem={({ item }) => <this.childView Childtitle={item.title} Childsubtitle={item.subtitle} img={item.img} />} />
    );
  }
}

export default App;