import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const ScreenWidthHigth = () => {
 
    const size = useWindowDimensions()

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Width:{size.width.toFixed(2)}</Text>
      <Text style={styles.content}>Height{size.height.toFixed(2)}</Text>
    </View>
  )
}

export default ScreenWidthHigth

const styles = StyleSheet.create({
  container:{
   flex:1,
   flexDirection:'column',
   backgroundColor:'blue',
   justifyContent:'center',
   alignItems:'center'

  },
  content:{
    color:'white',
    margin:10,
    fontSize:30,

  },
})