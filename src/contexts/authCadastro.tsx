import React, { createContext, useState } from "react";

import { Alert } from "react-native";
import { Loading } from "../components/loading";


//TYPAGEM DO CONTEXT PARA EVITAR ERROS
interface AuthContextType {
    cadastrar: (username: string, password: string, confirmPassword:string, nomeCompleto: string, fotoPerfil: string) => void;
    isReady: boolean;
}

//APLICAÇÃO DA TIPAGEM NO CONTEXT
export const AuthContextCadastro = createContext<AuthContextType>({
    cadastrar: () => { },
    isReady: false,
});

function AuthProviderCadastro({ children }) {
    const [isReady, setIsReady] = useState(false);

    function cadastrar(username, password, confirmPassword, nomeCompleto, fotoPerfil) {
        if (!username && !password && !nomeCompleto &&!confirmPassword) {
            return Alert.alert('Erro', 'Preencha todos os campos para fazer o login!')
        }
        if (!username && !password && !nomeCompleto) {
            return Alert.alert('Erro', 'Preencha todos os campos para fazer o login!')
        }

        if (!username && password) {
            return Alert.alert('Erro', 'Usuário inválido!')
        }

        if (!confirmPassword) {
            return Alert.alert('Erro', 'Confirme a sua senha!')
        }

        if (username && !password) {
            return Alert.alert('Erro', 'Senha inválida!')
        }

        if (username && password && nomeCompleto) {
            async function fetchData() {
                try {
                    //foi usado para passar no body da pesquisa.
                    setIsReady(true);
                    setTimeout(() => {
                        setIsReady(false);
                    }, 3000);

                    const formData = new FormData();
                    formData.append('username', username);
                    formData.append('senha', password);
                    formData.append('nome_completo', nomeCompleto);
                    formData.append('imageBase64', fotoPerfil);

                    const response = await fetch('https://futcardsbrasil.000webhostapp.com/usuarios/cadastrar', {
                        method: 'POST',
                        body: formData
                    });
                    const data = await response.json();

                    console.log(data)

                    //Momento da ultima verificação de login.
                    if (data["0"] == "erro") {
                        return Alert.alert('Erro', 'Dados inválidos.')
                    } else if (data["0"] == "sucesso") {
                        setIsReady(false);
                        Alert.alert('Sucesso', 'Cadastro efetuado com sucesso! Agora faça o login!')
                    }

                } catch (error) {
                    return Alert.alert('Erro', 'Usuário não encontrado em nosso banco de dados!');
                }
            }

            fetchData();
        }
    }

    return (
        //provider irá passar para outros lugares o USUARIO logado.
        <AuthContextCadastro.Provider value={{ cadastrar, isReady }}>
            {children}
        </AuthContextCadastro.Provider>
    )
}

export default AuthProviderCadastro;