import { VStack, Heading, Icon, Image, Text, KeyboardAvoidingView, ScrollView } from "native-base";
import React, { useContext, useState } from "react";
import Input from "../components/Input";
import { ArrowLeft, Envelope, Key } from 'phosphor-react-native'
import FutCardsLogo from '../assets/FutCards_logo.png'
import { Button } from "../components/Button";
import * as Animatable from 'react-native-animatable';
import { AuthContext } from "../contexts/authLogin";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [image, setImage] = useState('');

    const navegar = useNavigation();
    
    const { logar }  = useContext(AuthContext);

    async function _handleImagePicker() {
        const result = await ImagePicker.launchImageLibraryAsync(
            {
                aspect: [4,4],
                allowsEditing: true,
                base64: true,
                quality: 1,
            }
        );

        if (!result.cancelled) {
            console.log(result);
        }
    }


    function _handleBackLogin(){
        navegar.navigate('signin'); //TODO verificar o motivo da sinalização de erro
    }

    function LoadingLogin(){
        logar(username, password);
    }

    const [isVisible, setIsVisible] = React.useState(false);
    
    React.useEffect(() => {
        setIsVisible(true);
    }, []);
      
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
            <ScrollView>
                <VStack bg="green.700" alignItems="center" px={8} py={24}>
                    <Image source={FutCardsLogo} resizeMode="contain" size={20} alt="logo"/>
                    <Animatable.Text
                        animation="fadeIn"
                        duration={1000}
                        delay={1000}
                        style={{ color: 'yellow',  fontSize: 25, marginTop: 5, fontWeight:'bold' }}
                    >
                         FUTCARDS - Cadastro
                    </Animatable.Text>
                    <Heading color="gray.100" fontSize="xl" mt={5}>
                        Cadastre-se:
                    </Heading>

                    <Heading color="gray.100" fontSize="md" mt={5}>
                        Usuario:
                    </Heading>
                    <Input 
                        placeholder="Usuário"
                        backgroundColor="#4F4F4F"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        placeholderTextColor={"white"}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        mb={4}
                        mt={4}
                        _focus={{
                            borderWidth: 2,
                            borderColor: "white",
                            backgroundColor:"gray.400"
                        }}

                        InputLeftElement={<Icon as={<Envelope color={"white"}/> } ml={3} />}
                    />

                    <Heading color="gray.100" fontSize="md" mt={2}>
                        Senha:
                    </Heading>
                    <Input 
                        placeholder="Senha"
                        placeholderTextColor={"white"}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        backgroundColor="#4F4F4F"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        mb={4}
                        mt={4}
                        _focus={{
                            borderWidth: 2,
                            borderColor: "white",
                            backgroundColor:"gray.400",
                        }}

                        InputLeftElement={<Icon as={<Key color={"white"}/> } ml={3} />}
                    />
                    <Heading color="gray.100" fontSize="md" mt={2}>
                        Confirme sua Senha:
                    </Heading>
                    <Input 
                        placeholder="Confirme sua senha"
                        placeholderTextColor={"white"}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        backgroundColor="#4F4F4F"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        mb={4}
                        mt={4}
                        _focus={{
                            borderWidth: 2,
                            borderColor: "white",
                            backgroundColor:"gray.400",
                        }}

                        InputLeftElement={<Icon as={<Key color={"white"}/> } ml={3} />}
                    />
                    <TouchableOpacity onPress={_handleImagePicker} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{backgroundColor: 'white', borderRadius: 10, padding: 5}}>
                            Enviar imagem de perfil
                        </Text>
                    </TouchableOpacity>
                    
                    <Button 
                        title={"Finalizar cadastro"}
                        onPress={LoadingLogin}
                    />
                    
                    <TouchableOpacity onPress={_handleBackLogin} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <ArrowLeft size={20} weight="bold" style={{ marginRight: 5 }} color="white"/>
                        <Text style={{ color: 'white', fontSize: 15, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 10 }}>
                            Voltar ao login.
                        </Text>
                    </TouchableOpacity>

                </VStack>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}