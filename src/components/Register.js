import React from 'react';
import{View,Text,TextInput,TouchableOpacity,Alert,Stylesheet}from'react-native';
import * as SecureStore from'expo-secure-store';
import Separator from "../components/Separator";

export default function Register({navigation}){

  const[state,setState] = useState({
    userName: '',
    userPhone: '',
    userEmail: '',
    userPassword: ''
  });

  const[userPasswordConfirm,setUserPasswordConfirm] = useState('');

 // Salva dados de registro do usuário com SecureStore
  const saveUserData=(userData)=>{
    return SecureStore.setItemAsync('userData',JSON.stringify(userData));
 };

 function handleRegister(){
   if(!state.userName ||!state.userPhone ||!state.userEmail ||
        !state.userPassword ||!userPasswordConfirm){
        Alert.alert(
        'Erro ao tentar cadastrar usuário:',
        'Preencha todos os campos corretamente!');
        } else{
            if(state.userPassword !== userPasswordConfirm){
                alert('Erro ao tentar cadastrar usuário:', 'Senha não confere com a confirmação da senha');
            } else{
                saveUserData({
                    name:state.userName,
                    phone:state.userPhone,
                    email:state.userEmail,
                    password:state.userPassword
                });

                navigation.navigate("Login",{email:state.userEmail});
            }
        }
    }

    const handleChangeText = (key, value) => {
        setState({ ...state, [key]:value })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Dados do Usuário</Text>
            <TextInput
                style={styles.input}
                value={state.userName}
                onChangeText={(value) => handleChangeText("userName", value)}
                placeholder={"Nome"}
            />
            <TextInput
                style={styles.input}
                value={state.userPhone}
                onChangeText={(value) => handleChangeText('user Phone',value)}
                placeholder={"Telefone"}
                keyboard Type="numeric"
            />
            <TextInput
                style={styles.input}
                value={state.userEmail}
                onChangeText={(value) => handleChangeText("userEmail", value)}
                placeholder={"E-mail"}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
            />
            <TextInput
                value={state.userPassword}
                onChangeText={(value)=>handleChangeText('userPassword',value)}
                placeholder={'Senha'}
                secureTextEntry={true}
                style={styles.input}
            />
            <TextInput
                value={userPasswordConfirm}
                onChangeText={(value)=>setUserPasswordConfirm(value)}
                placeholder={'Confirmar Senha'}
                secureTextEntry={true}
                style={styles.input}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleRegister}>
                <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>

            <Separator marginVertical={30} />
            
            <Text style={styles.textSimple}>Atenção!</Text>
            <Text style={styles.textSimple}>Informe um e-mail válido,pois em caso de recuperação de
            senha,ela será enviada para o e-mail cadastrado.</Text>
        </View>
    );
}

const styles = Stylesheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFC300'
      },
    titleText:{
        fontweight:'bold',
        fontSize:30,
        color:'#730000',
        marginBottom:20,
        textAlign:'center',
    },
    saveButton:{
        width:'50%',
        height:40,
        backgroundColor:'#E37D00',
        padding:5,
        borderRadius:5,
    },
    saveButtonText:{
        fontSize:20,
        fontweight:'bold',
        color:'#730000',
        textAlign:'center',
    },
    input:{
        width:'90%',
        height:45,
        padding:10,
        borderWidth:1,
        borderColor: '#730000',
        borderRadius: 5,
        marginBottom: 10,
    },
    textSimple: {
        color: '#730000',
        width: '95%',
        textAlign: 'justify',
    }
})