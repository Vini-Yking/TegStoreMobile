import React from "react";
import { FlatList, View, Dimensions, Image } from "react-native";
import data from "./data";

const { width } = Dimensions.get("window");
const valor = (width /2)

const ListaHorizontal = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item)}
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array(data.length)].map(
        (x, i) => i * (valor -10 - 40) + (i - 1) * 40)}
             // index*(largura - margem de cada lado ) + (index - 1)*margem
      horizontal
      snapToAlignment={"start"}
      scrollEventThorottle={16}
      decelerationRate="fast"
      style={{ maginTop: 20 }}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: "blueviolet",
            maginHorizontal: 10,
            // padding:10,
            borderRadius: 12,
          }}
        >
          <Image source={{ uri: item.imgUrl }} 
          style={{width:valor , height:valor}} />
        </View>
      )}
    />
  );
};

export default ListaHorizontal;