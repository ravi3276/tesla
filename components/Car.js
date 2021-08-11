import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Dimentions } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';
import Buttons from './Buttons';

const Car = ({model,delivery,imgURL}) => {
   
  const image=imgURL;
    return (
            <View style={styles.carContainer}>
                {/* <Header /> */}
          <ImageBackground
          source={{
              uri:image
          }}
          style={styles.backgroundIMG}/>
          
              <View style={styles.titles}>
                    <Text style={styles.title}>{model}</Text>
                    <Text style={styles.price}>
                        Order Online for {' '}
                        <Text style={{textDecorationLine:'underline'}}>{delivery}</Text>
                    </Text>
              </View>

              <View style={styles.btnContainer}>
             <Buttons type="primary" btnName="Custom Order" color/>
             <Buttons btnName="Custom Order" />
              </View>

        </View>
    )
}

export default Car

const styles = StyleSheet.create({
    carContainer:{
        height:'100%',
        width:'100%',
        position:'absolute',
    },
    backgroundIMG:{
        height:'100%',
        width:'100%',
        resizeMode:'contain',
        position: 'absolute',
    },
    titles:{
      width:'100%',
      marginTop: '30%',
      alignItems: 'center',
    },
    title:{
      color: '#181b21',
      fontSize:40,
      fontWeight:'600'
    },
    price:{
      color: '#5C5D41',
      fontSize:14,
    },
    btnContainer:{
        position:'absolute',
        bottom:60,
        width:'100%',
    }
})
