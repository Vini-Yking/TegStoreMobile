import React from "react";
import { FlatList, View, Dimensions, Image, TouchableOpacity, Text } from "react-native";
import data from "./data";

const { width } = Dimensions.get("window");
const valor = (width /2)

const ListaHorizontal = () => {
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array(data.length)].map(
         (x, i) => x= i * valor )}
             // index*(largura - margem de cada lado ) + (index - 1)*margem
      horizontal
      pagingEnabled
      snapToAlignment={"start"}
      scrollEventThorottle={16}
      decelerationRate="fast"
      style={{marginTop: 20}}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor:'#fff',
            maginHorizontal: 10,
            margin: 5, 
            borderRadius: 45,
          }}
        >
          <TouchableOpacity>
          <Image  source={{ uri: item.imgUrl }} 
          style={{width:valor , height:valor,}} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default ListaHorizontal;
