import { HStack, Heading, VStack, Image, Icon } from "native-base";
import { BookOpen, IdentificationCard, ShoppingCart, SoccerBall, StarFour, User } from 'phosphor-react-native'
import BayernLogo from "../../assets/bayernlogo.png"
import { useContext, useEffect, useState } from "react";
import React from "react";
import { Loading } from "../../components/loading";
import { TouchableOpacity, View, Text, Alert } from "react-native";
import { AuthContext } from "../../contexts/authLogin";
import STYLES from "./styles";
import * as ImagePicker from "expo-image-picker";
import Input from "../../components/Input";




export function Configuracoes() {
    const [userData, setUserData] = useState('');
    const [mudarNome, setMudarNome] = useState(false);
    const [newImage, setNewImage] = useState('');
    const [newName, setNewName] = useState('');


    const { idUser } = useContext(AuthContext); //pega o id do usuario logado


    useEffect(() => {
        // Função assíncrona para buscar os dados da API
        async function fetchData() {
            try {
                const response = await fetch(`https://futcardsbrasil.000webhostapp.com/usuarios/consultar/${idUser}`, {
                    method: 'GET',
                });
                const data = await response.json();
                setUserData(data); // Armazena os dados da API no estado

            } catch (error) {
                setUserData('');
            }
        }

        fetchData(); // Chama a função de busca de dados quando o componente for montado
    }, []);

    async function _handleImagePicker() {
        const result = await ImagePicker.launchImageLibraryAsync(
            {
                base64: true,
            }
        );

        if (!result.cancelled) {
            const imageSizeInBytes = result["base64"].length;
            const imageSizeInKB = Math.round(imageSizeInBytes / 1024);
            const maxSizeInKB = 2048; // Tamanho máximo permitido em KB

            if (imageSizeInKB > maxSizeInKB) {
                return Alert.alert('Erro', 'Imagem superior a 2MB. Foto deve ser até 2MB');
            }

            setNewImage(result["base64"]);
        }
    }

    function _handleMudarnome() {
        setMudarNome(!mudarNome);
    }


    return (
        <View style={STYLES.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 15 }}>
                {userData["imageBase64"] ? (
                    <Image
                        source={{ uri: `data:image/jpeg;base64,${userData["imageBase64"]}` }}
                        style={{ width: 150, height: 150, borderRadius: 100, borderWidth: 2, borderColor: 'white' }}
                        alt="Perfil Foto"
                    />
                ) : <Image
                    source={BayernLogo}
                    style={{ width: 150, height: 150, borderRadius: 10 }}
                    alt="Perfil Foto"
                />}



                <TouchableOpacity onPress={_handleImagePicker} style={{ backgroundColor: 'gray', padding: 20, borderRadius: 50, marginTop: 20 }}>
                    <Text style={{ color: 'white' }}>Alterar foto de perfil</Text>
                </TouchableOpacity>

                {
                    mudarNome ?
                        <Input
                            placeholder="Insira o seu novo nome"
                            backgroundColor="#4F4F4F"
                            value={newName}
                            onChangeText={(text) => setNewName(text)}
                            placeholderTextColor={"white"}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            mt={20}
                            width={'70%'}
                        />
                        :
                        ''
                }

                <TouchableOpacity onPress={_handleMudarnome} style={{ backgroundColor: 'gray', padding: 20, borderRadius: 50, marginTop: 20 }}>
                    <Text style={{ color: 'white' }}>{!mudarNome ? 'Alterar o nome de jogador' : 'Fechar'}</Text>
                </TouchableOpacity>


                <View style={{justifyContent: 'center', width: '70%'}}>
                    <TouchableOpacity onPress={_handleMudarnome} style={{ backgroundColor: 'gray', padding: 20, borderRadius: 50, marginTop: 20 }}>
                        <Text style={{ color: 'white' }}>SALVAR</Text>
                    </TouchableOpacity>
                </View>





            </View>
        </View>
    );
}