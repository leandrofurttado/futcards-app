import React, {createContext, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { Loading } from "../components/loading";

//TYPAGEM DO CONTEXT PARA EVITAR ERROS
interface AuthContextType {
  logar: (username: string, password: string) => void;
  idUser: string;
  isReady: boolean;
}

//APLICAÇÃO DA TIPAGEM NO CONTEXT
export const AuthContext = createContext<AuthContextType>({
  logar: () => {},
  idUser: '',
  isReady: false,
});

function AuthProvider({children}){
  const [idUser, setIdUser] = useState('');
  const [isReady, setIsReady] = useState(false);
  const navegar = useNavigation();

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
            //foi usado para passar no body da pesquisa.
            setIsReady(true);
            setTimeout(() => {
              setIsReady(false);
            }, 3000);
            
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);

            const response = await fetch('https://futcardsbrasil.000webhostapp.com/usuarios/login', {
              method: 'POST',
              body: formData
            });
            const data = await response.json();

            //Momento da ultima verificação de login.
            if(data["0"]=="erro"){
              return Alert.alert('Erro', 'Usuário ou senha inválidos.')
            } else if (data["0"]=="sucesso"){
              setIsReady(false);
              Alert.alert('Sucesso', 'Login efetuado com sucesso!')
              setIdUser(data["mensagem"]);
              navegar.navigate("home");
            }

          } catch (error) {
            return Alert.alert('Erro', 'Usuário não encontrado em nosso banco de dados!');
          }
        }
        
        fetchData();
    }
  }

  return(
    //provider irá passar para outros lugares o USUARIO logado.
      <AuthContext.Provider value={{ logar , idUser, isReady}}>
          {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider;