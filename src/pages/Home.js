import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Alert } from "react-native-web";


export default function Home (){

    let [valor1, setAnoAtual] = useState();    
    let [valor2, setAnoNascimento] = useState();
    //let [total, setTotal] = useState();

    function CalcularTotal(){

        let resultado = parseFloat(valor1) - parseFloat(valor2);
        //setTotal(resultado);

        alert("O Resultado total: " + resultado);
        alert("PALMEIRAAAAS")
    }


    return(
        <View style= {styles.container}>
            <Text style= {styles.titulo}><i>App Born</i></Text>

            <TextInput onChangeText={setAnoAtual} style= {styles.campo} placeholder="Ano Atual"/>

            <TextInput onChangeText={setAnoNascimento} style= {styles.campo} placeholder="Ano de Nascimento"/>

            <TouchableOpacity style= {styles.botao} onPress={CalcularTotal}>
                <Text style= {styles.botaoTexto}><i>Minha idade</i></Text>
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFF99',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',        
    },

    titulo:{
        fontSize:30,
        color:'#000',
        fontWeight:'bold',
        marginBottom: 40,
    },

    campo:{
        backgroundColor:'#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width:300,
        borderRadius: 10,
        textAlign: 'center',
        
    },

    botao:{
        backgroundColor:'#FFFF66',
        alignItems: 'center',
        padding: 15,
        borderRadius:7,
        marginTop: 20,
        widht: 250
    },

    botaoTexto: {
        color: "",
        fontSize:17,
        fontWeight: "700",

    }
});


