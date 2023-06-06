import { VStack, Heading, Icon, Image } from "native-base";
import React, { useContext, useState } from "react";
import Input from "../components/Input";
import { Envelope, Key } from 'phosphor-react-native'
import FutCardsLogo from '../assets/FutCards_logo.png'
import { Button } from "../components/Button";
import * as Animatable from 'react-native-animatable';
import { AuthContext } from "../contexts/authLogin";

export default function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const { logar }  = useContext(AuthContext);


    function LoadingLogin(){
        logar(username, password);
    }

    const [isVisible, setIsVisible] = React.useState(false);
    
    React.useEffect(() => {
        setIsVisible(true);
    }, []);
      
    return (
        <VStack flex={1} bg="green.700" alignItems="center" px={8} py={24}>
            <Image source={FutCardsLogo} resizeMode="contain" size="xl" alt="logo"/>
            <Animatable.Text
                animation="fadeIn"
                duration={5000}
                delay={2000}
                style={{ color: 'yellow',  fontSize: 30, marginTop: 10, fontWeight:'bold' }}
            >
                FUTCARDS
            </Animatable.Text>
            <Heading color="gray.100" fontSize="xl" mt={10}>
                Acesse sua conta:
            </Heading>

            <Heading color="gray.100" fontSize="md" mt={10}>
                Usuario:
            </Heading>
            <Input 
                placeholder="E-mail"
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

            <Heading color="gray.100" fontSize="md" mt={4}>
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
            <Button 
                title="Entrar"
                onPress={LoadingLogin}
                isLoading={isLoading}
            />

            <Heading color="gray.100" fontSize="xs" mt={10}>
                Copyright ₢ 2023 - FutCards Brasil 
            </Heading>

        </VStack>
    );
}