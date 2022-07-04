import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import CarouselCards from './CarouselCards'

export default function MyCarousel() {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});



// import Carousel from 'react-native-snap-carousel';
// import { SafeAreaView, StyleSheet, View } from 'react-native';

// const carouselItems =[
//    {
//      imgUrl:
//      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fst2.depositphotos.com%2F6544740%2F9337%2Fi%2F600%2Fdepositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg&imgrefurl=https%3A%2F%2Fbr.depositphotos.com%2Fstock-photos%2Fp%25C3%25B4r-do-sol.html&tbnid=MVPifzW9pIRDFM&vet=12ahUKEwjTrL_h6d_4AhXTs5UCHaVdA2AQMygBegUIARC-AQ..i&docid=lPtar6DAj3Pg5M&w=600&h=400&q=imagens&ved=2ahUKEwjTrL_h6d_4AhXTs5UCHaVdA2AQMygBegUIARC-AQ'
//    },
//    {
//     imgUrl:
//     'https://www.uol.com.br/tilt/noticias/redacao/2022/05/24/novidade-do-google-converte-descricoes-de-texto-em-imagens-veja-resultados.htm'
//   }
// ]

// const CarouselCardItem = ({ item, index }) => {
//   return (
//     <View style={styles.container} key={index}>
//       <Image
//         source={{ uri: item.imgUrl }}
//         style={styles.image}
//       />
//     </View>
//   )
// }

// export const MyCarousel = () =>{
//     return (
//         <SafeAreaView style={styles.container}>
//             <Carousel
//             layout={"default"}
//             ref={ref => Carousel = ref}
//               data={carouselItems}
//               renderItem={CarouselCardItem}
//               sliderWidth={300}
//               itemWidth={300}
//               onSnapToItem = { index => this.setState({activeIndex:index}) } />
//             </SafeAreaView>

//         )
// }

// const styles = StyleSheet.create({
//    container:{
//     flex: 1,
//     height: 250,
//     backgroundColor: 'white',
//     padding: 30,
//     margimHorizontal: 25

//    },
//    cardCarousel: {
//     width: Item_Width,
//    },
//    image: {
//     height: 250,
//     borderRadius: 8,
//    resizeMode: "contain"

//    }
// })
