import React from 'react';
import{View,Text,Stylesheet}from'react-native';

export default function Home({navigation,route}){
 return(
   <View style={styles.container}>
     <Text>Tela Home{route.params?.email}</Text>
     <Text>Olá{route.params?.name},seja bem-vindo!</Text>
   </View>

 );
}
    
const styles = Stylesheet.create({
    container:{
        flex:1,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'#FFC300',
    },
});
       