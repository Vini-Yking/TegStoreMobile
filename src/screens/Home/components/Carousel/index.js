import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { styles } from '../../styles';
import CarouselCards from './CarouselCards'

export default function MyCarousel() {
  return (
    <SafeAreaView style={styles.sobreContainer}>
      <CarouselCards />
    </SafeAreaView>
  );
}