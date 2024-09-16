import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {

    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/google.png')} />
        </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin);


/*

_ Session 5:
_ No pude hacer el  Inicio de sesión de Google: componente y configuración nativa:
. Episodio 31

*/