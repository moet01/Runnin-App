import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { ImageBackground } from 'react-native';

export default function Welcome({navigation}) {

    return (

        <View style={styles.container}>
            <ImageBackground source={require("../assets/main/bgimage.png")}
                style={styles.bgimages} resizeMode='cover'>
                <View style={ styles.textMainContainer}>
                    <Text style={styles.mainText}> Running App </Text>
                    <Text style={styles.logoText}> Mr_Annaklycheff </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate("Run") } style= {styles.btnConatiner}> <Text style={styles.startText}> Get Started </Text>  </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#28333f",
        paddingTop: 81,
    },
    bgimages: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textMainContainer:{
        marginTop: 390,
    },  
    mainText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    logoText:{
        color: "white",

    },
    btnConatiner:{
        marginTop: 50,
        width: 300,
        height: 56,
        backgroundColor: "#7b61ff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    startText:{
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    }  
});
