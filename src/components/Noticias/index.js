import React from "react";
import {
    Text,
    ScrollView,
    View,
    Image
} from "react-native";

import CartNews from './cart';

import styles from './styles';

import newsImage from '../../imgs/newsImage.jpg';

import newsImage1 from '../../imgs/news/news1.png';
import newsImage2 from '../../imgs/news/news2.png';
import newsImage3 from '../../imgs/news/news3.png';
import newsImage4 from '../../imgs/news/news4.png';

function Noticias() {
    return (
        <ScrollView>
            <View style={styles.cartImage}>

                <Image style={styles.image} source={newsImage} />
                
            </View>

            <View style={{borderWidth: 0.5, opacity: 0.5, borderLeftWidth: 0,borderRightWidth: 0,borderTopWidth: 0, borderColor: "#20232a", padding: 40, alignItems: "center", justifyContent: "center"}}> 
                <Text style={{fontSize: 30}}>notícias 📰 </Text>
            </View>

            <View style={styles.cardContainer}>
                <CartNews link='https://www.hospvetsantamarinha.com/blog/60-curiosidades-gatos/' title="Aprenda com os erros" img={newsImage3}/>
                <CartNews link='https://www.hospvetsantamarinha.com/blog/60-curiosidades-gatos/' title="O insolucionável mistério da fisica: Caia sempre em pé" img={newsImage2}/>
                <CartNews link='https://www.hospvetsantamarinha.com/blog/60-curiosidades-gatos/' title="Insistindo uma hora da certo " img={newsImage1}/>
                <CartNews link='https://www.hospvetsantamarinha.com/blog/60-curiosidades-gatos/' title="Festeje a diversidade" img={newsImage4}/>
            </View>
        </ScrollView>

    );
}

{/* style={{borderWidth: 2,borderColor: "#20232a"}} */}

export default Noticias;


