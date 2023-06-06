import React, {createContext, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";


export const AuthContext = createContext({});



function logar(username, password) {
    if(!username && !password){
        return Alert.alert('Erro', 'Preencha todos os campos para fazer o login!')
    }

    if(!username && password){
        return Alert.alert('Erro', 'Usuário inválido!')
    }

    if(username && !password){
        return Alert.alert('Erro', 'Senha inválida!')
    }

    if (username && password) {
        async function fetchData() {
          try {
            const response = await fetch('https://futcardsbrasil.000webhostapp.com/usuarios/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username: username, password: password })
            });
            
            const data = await response.json();

            console.log(data);
            
            // Fazer algo com a resposta da API


          } catch (error) {
            return Alert.alert('Erro', 'Usuário não encontrado em nosso banco de dados!');
          }
        }
        
        fetchData();
      }
}

function AuthProvider({children}){
    return(
        <AuthContext.Provider value={{nome: 'leandro'}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;