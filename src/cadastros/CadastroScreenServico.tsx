import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function CadastroScreenServico(): JSX.Element {

    const [nome, setNome] = useState("");
    const [duracao, setDuracao] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");    

    function login() {
        const dados = {
            nome: nome,
            duracao: duracao,
            descricao: descricao,
            preco: preco
        }
        console.log(dados);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain"
                source={require('../assets/images/Pandora.jpg')}  />
            
            <View style={styles.card}>

            <Text style={styles.title}>Cadastro do serviço</Text>

                <TextInput style={styles.input} placeholder="Nome:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textNome) => setNome(textNome)} />
                
                <TextInput style={styles.input} placeholder="Duração:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textDuracao) => setDuracao(textDuracao)} />
                
                <TextInput style={styles.input} placeholder="Descrição:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textDescricao) => setDescricao(textDescricao)} />
                
                <TextInput style={styles.input} placeholder="Preco:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textPreco) => setPreco(textPreco)} />

                <TouchableOpacity style={styles.button}
                    onPress={() => { login() }}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ACA3A9'
    },
    
    logo: {
        width: 450,
        height: 350,
        marginBottom: -50,
        marginTop: -150
    },
    card: {
        backgroundColor: '#96747E',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgb(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#D4CCC4',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D4CCC4'
    },
    button: {
        backgroundColor: '#7C2F3D',
        height: 40,
        borderRadius: 8,


    },
    buttonText: {
        color: '#ACA3A9',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,

    },
    forgetPassword: {
        color: '#f3eaf9',
        textAlign: 'center',
        marginTop: 10
    }

});
export default CadastroScreenServico;