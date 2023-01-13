import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React , {useState,useEffect}from 'react'

const ScrennOrientation = () => {
  const [orientation,setOrientation] = useState("PORTRAIT")
  useEffect(()=>{
    Dimensions.addEventListener('change',({window:{width,height}}) => {
      if(width<height){
        setOrientation("PORTRAIT")
      }else{
        setOrientation("LANDSCAPE")
      }
    })
   
  },[])

  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>{orientation}</Text>
    </View>
  )
}

export default ScrennOrientation

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