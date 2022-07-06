import React from "react";
import { FlatList, View, Dimensions, Image, TouchableOpacity, Text } from "react-native";
import data from "./data";

const { width } = Dimensions.get("window");
const valor = (width /2) - 20

const ListaHorizontal = ({ handleCategoria }) => {
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array(data.length)].map(
         (x, i) => x= (i * valor) + (i * 10) )}
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
            maxWidth: 200,
            maxHeight:200,
             height:valor,
             justifyContent:"center",
             alignItems:"center" 
            }}
            onPress={()=>handleCategoria(item.categoria)}
            >
          <Image  source={{ uri: item.imgUrl }} 
          resizeMode="contain"
          style={{width:"75%" , height:"75%",}}
           />
          </TouchableOpacity>
      )}
    />
  );
};

export default ListaHorizontal;
