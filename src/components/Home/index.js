import React from "react";
import {
    Text,
    View,
    StatusBar,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";

import imageHome from "../../imgs/imageHome.jpg";
import Cart from "./cart";
import styles from "./styles";

function Home({navigation}) {

    function linkLogar() {
        navigation.navigate("Login")
    }
    function linkNoticias() {
        navigation.navigate("Noticias")
    }
    
    return (

        <ScrollView style={{fontFamily: "monospace"}}>
            <StatusBar />

            <View style={styles.cartImage}>
                <Image source={imageHome} style={styles.imageHome} />
                <Text style={{textAlign: "center", padding:"6%", fontSize: 16,color:"blue" }}>"Be More CAT" Viver novas experiências </Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            Saiba mais sobre o Big More CAT
                        </Text>
                        <Text style={{ fontSize: 16, textAlign: 'center' }}>
                           Faça seu login e veja o mundo com outros olhos!!
                        </Text>
                    </View>
                    <View style={styles.botaoCard}>
                        <TouchableOpacity style={styles.btn} onPress={linkLogar}
                        ><Text style={styles.texto} onPress={linkLogar}>Clique aqui, para acessar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Notícias do mundo Miauuu
                        </Text>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}>
                            Veja o que os pets andam aprontando e tenha seu momento de fofuraaa (e não é o salgadinho)
                        </Text>
                    </View>
                    <View style={styles.botaoCard}>
                        <TouchableOpacity style={styles.btn} onPress={linkNoticias}
                        ><Text style={styles.texto}>acessar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
                    
            {/* <Cart h1="LOGIN" txt="Clique aqui e realize seu login!"/> */}

        </ScrollView>
    );
}

export default Home;
