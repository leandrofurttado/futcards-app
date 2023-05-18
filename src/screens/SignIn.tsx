import { VStack, Heading, Icon, Image } from "native-base";
import React, { useState } from "react";
import Input from "../components/Input";
import { Envelope, Key } from 'phosphor-react-native'
import LogoBooks from '../assets/Books-logo.png'
import { Button } from "../components/Button";

export default function SignIn() {
    const [isLoading, setIsLoading] = useState(false);


    function LoadingLogin(){
        setIsLoading(true);
    }

    return (
        <VStack flex={1} bg="gray.600" alignItems="center" px={8} py={24}>
            <Image source={LogoBooks} resizeMode="contain" size="xl" alt="logo"/>
            <Heading color="gray.100" fontSize="xl" mt={10}>
                Acesse sua conta:
            </Heading>

            <Heading color="gray.100" fontSize="md" mt={10}>
                Usuario:
            </Heading>
            <Input 
                placeholder="E-mail"
                placeholderTextColor={"black"}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                mb={4}
                mt={4}
                _focus={{
                    borderWidth: 1,
                    borderColor: "yellow.500",
                    bg:"gray.400"
                }}

                InputLeftElement={<Icon as={<Envelope color={"white"}/> } ml={3} />}
            />

            <Heading color="gray.100" fontSize="md" mt={4}>
                Senha:
            </Heading>
            <Input 
                placeholder="Senha"
                placeholderTextColor={"black"}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                mb={4}
                mt={4}
                _focus={{
                    borderWidth: 1,
                    borderColor: "yellow.500",
                    bg:"gray.400"
                }}

                InputLeftElement={<Icon as={<Key color={"white"}/> } ml={3} />}
            />
            <Button 
                title="Entrar"
                onPress={LoadingLogin}
                isLoading={isLoading}
            />


            <Heading color="gray.100" fontSize="xs" mt={20}>
                Copyright ₢ 2023 - Leandro 
            </Heading>
        </VStack>
    );
}