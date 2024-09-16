import React, {useState} from "react";

import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";

import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signup = () => {

    const [checked, setChecked] = useState(false);

    return (

        <View style={styles.container}>
            
            <AuthHeader title="Sign Up"/>

            <Input label="Name" placeholder="Williams392"/>
            <Input label="Email" placeholder="ejemplo@gmail.com"/>
            <Input label="Contraseña" placeholder="Ingresa tu contraseña" isPassword={true} />

            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>

            <Button style={styles.button} title="Sign Up"/>

            <Seperator text="Or sign ip with"/>

            <GoogleLogin /> 

            <Text style={styles.footerText}>
                Already have an account?
                <Text style={styles.footerLink}>Sing in</Text>
            </Text>

             
        </View>
        
    )
}

export default Signup;
