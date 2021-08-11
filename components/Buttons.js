import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'

const Buttons = ({type,btnName,color}) => {
    const bgColor = (type === "primary")?'#181b21':'#ffffff';
    const textClr=color?"white":"black";
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:bgColor,color:textClr}]}>
                <Text style={[styles.buttonText,{color:textClr}]}>{btnName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons

const styles = StyleSheet.create({
    buttonStyle:{
        height:35,
        margin:7,
        marginLeft:10,
        marginRight:10,
        borderRadius:999,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText:{
        fontSize:14,
        fontWeight:'900',
        textTransform:'uppercase',
      },
      buttonContainer:{
        // position: 'absolute',
        // bottom:50,
        // width:'100%',
      }
})
