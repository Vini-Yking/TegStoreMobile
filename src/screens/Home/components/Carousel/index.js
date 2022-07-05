import React from "react";
import { FlatList, View, Dimensions, Image, TouchableOpacity, Text } from "react-native";
import data from "./data";

const { width } = Dimensions.get("window");
const valor = (width /2) - 10

const ListaHorizontal = () => {
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array(data.length)].map(
         (x, i) => x= (i * valor) + (i * 10) )}
             // index*(largura - margem de cada lado ) + (index - 1)*margem
      horizontal
      pagingEnabled
      snapToAlignment={"start"}
      scrollEventThorottle={16}
      decelerationRate="fast"
      renderItem={({ item }) => (
          <TouchableOpacity 
          style={{
            backgroundColor:'#fff',
            margin: 5, 
            borderRadius: 45,
            width:valor ,
             height:valor,
             justifyContent:"center",
             alignItems:"center" 
            }}>
          <Image  source={{ uri: item.imgUrl }} 
          resizeMode="contain"
          style={{width:"85%" , height:"85%",}}
           />
          </TouchableOpacity>
      )}
    />
  );
};

export default ListaHorizontal;
