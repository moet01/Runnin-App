import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


export default function RunScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Welcome")} >  <Image style={styles.strelka} source={require("../assets/secondScreen/arrowLeft.png")} />  </TouchableOpacity>
                <Text style={styles.headerText}>Skip</Text>
            </View>
            <View style={styles.mainContainer} >
                <View style={styles.logoContainer} > <Image source={require("../assets/secondScreen/secondLogo.png")} style={styles.logo} /> </View>
                <View style={styles.runTextContainer}>
                    <Text style={styles.runText} >Run</Text>
                    <Text style={styles.aboutAppText} >This program was invented by Annaklychev,
                        this is just proof that I could do it and I did it,
                        design from public figma</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.nextText} > Next </Text>
                        <Image source={require("../assets/secondScreen/VectorLeft.png")} style={styles.btnStrelka} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText} > Already have an account? Sign In  </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#28333f",
        padding: 15,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    strelka: {
        height: 24,
        width: 24,
    },
    headerText: {
        color: "white",
    },
    mainContainer: {
        flex: 2,
        alignItems: "center",
    },
    logoContainer: {
        marginTop: 15,
        marginBottom: 15,
    },
    logo: {
        width: 316,
        height: 242,
    },
    runTextContainer: {
        alignItems: "center",
        backgroundColor: "#2f3c50",
        paddingTop: 55,
        paddingLeft: 10,
        paddingRight: 10,
        width: 311,
        height: 303,
        borderRadius: "25%",
        borderColor: "#4e596a",
    },
    runText: {
        color: "white",
        fontSize: 18,

    },
    aboutAppText: {
        color: "white",
    },
    btn: {
        backgroundColor: "#7b61ff",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: 150,
        height: 56,
        marginTop: 45,
        borderRadius: 10,
    },
    nextText: {
        fontSize: 18,
        color: "white"
    },
    btnStrelka: {
        marginTop: 10,
        width: 20,
        height: 20,
    },
    footer:{
        alignItems: "center",
    },
    footerText:{
        color: "white",
    },

});