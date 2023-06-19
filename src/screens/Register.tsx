import { VStack, Heading, Icon, Image, Text, KeyboardAvoidingView, ScrollView } from "native-base";
import React, { useContext, useState } from "react";
import Input from "../components/Input";
import { ArrowLeft, Envelope, Key } from 'phosphor-react-native'
import FutCardsLogo from '../assets/FutCards_logo.png'
import { Button } from "../components/Button";
import * as Animatable from 'react-native-animatable';
import { AuthContextCadastro } from "../contexts/authCadastro";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Loading } from "../components/loading";


export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [image, setImage] = useState('');

    const navegar = useNavigation();

    const { cadastrar, isReady } = useContext(AuthContextCadastro);

    async function _handleImagePicker(){
        const result = await ImagePicker.launchImageLibraryAsync(
            {
                aspect: [4, 4],
                allowsEditing: true,
                base64: true,
                quality: 1,
            }
        );

        if (!result.cancelled) {
            setImage(result.base64);
        }
    }


    function _handleBackLogin() {
        navegar.navigate('signin'); 
    }

    function _handleCadastrar() {
        cadastrar(username, password, confirmPass, nameUser, image);
    }

    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
            <ScrollView>
                <VStack bg="green.700" alignItems="flex-start" px={8} py={8}>
                    <Image source={FutCardsLogo} resizeMode="contain" size={20} alt="FutCards" />
                    <Animatable.Text
                        animation="fadeIn"
                        duration={1000}
                        delay={1000}
                        style={{ color: 'yellow', fontSize: 25, fontWeight: 'bold' }}
                    >
                         {isReady ? <Loading /> : 'FUTCARDS - Cadastro'}
                    </Animatable.Text>

                    <Heading color="gray.100" fontSize="2xl" mt={5}>
                        Cadastre-se:
                    </Heading>

                    <Heading color="gray.100" fontSize="md" mt={2}>
                        Nome Completo:
                    </Heading>
                    <Input
                        placeholder="Nome completo"
                        backgroundColor="#4F4F4F"
                        value={nameUser}
                        onChangeText={(text) => setNameUser(text)}
                        placeholderTextColor={"white"}
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                        mb={4}
                        mt={2}
                        _focus={{
                            borderWidth: 2,
                            borderColor: "white",
                            backgroundColor: "gray.400"
                        }}

                        InputLeftElement={<Icon as={<Envelope color={"white"} />} ml={3} />}
                    />

                    <Heading color="gray.100" fontSize="md" >
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
                            backgroundColor: "gray.400"
                        }}

                        InputLeftElement={<Icon as={<Envelope color={"white"} />} ml={3} />}
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
                            backgroundColor: "gray.400",
                        }}

                        InputLeftElement={<Icon as={<Key color={"white"} />} ml={3} />}
                    />
                    <Heading color="gray.100" fontSize="md" mt={2}>
                        Confirme sua Senha:
                    </Heading>
                    <Input
                        placeholder="Confirme sua senha"
                        placeholderTextColor={"white"}
                        value={confirmPass}
                        onChangeText={(text) => setConfirmPass(text)}
                        backgroundColor="#4F4F4F"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        mb={4}
                        mt={4}
                        _focus={{
                            borderWidth: 2,
                            borderColor: "white",
                            backgroundColor: "gray.400",
                        }}

                        InputLeftElement={<Icon as={<Key color={"white"} />} ml={3} />}
                    />
                    <View style={{justifyContent: 'flex-start'}}>
                        <TouchableOpacity onPress={_handleImagePicker} style={{ display: 'flex', marginTop: 20, marginBottom: 15 }}>
                            <Text style={{ backgroundColor: "black", borderRadius: 10, padding: 10, color:'yellow' }}>
                                Enviar imagem de perfil
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <Button
                        title={"Finalizar cadastro"}
                        onPress={_handleCadastrar}
                    />

                    <TouchableOpacity onPress={_handleBackLogin} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <ArrowLeft size={20} weight="bold" style={{ marginRight: 5 }} color="white" />
                        <Text style={{ color: 'white', fontSize: 15, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 10 }}>
                            Voltar ao login.
                        </Text>
                    </TouchableOpacity>

                </VStack>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}