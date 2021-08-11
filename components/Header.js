import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={{uri:'../assets/logo.png'}}/>
            <Image style={styles.menu} source={{uri:'../assets/menu.png'}}/>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        position: 'absolute',
        top: 50,
        zIndex:100
    },
    logo:{
        height:20,
        width:100,
        resizeMode:'contain'
    },
    menu: {
        height:20,
        width:100,
        resizeMode:'contain'
    }
})
