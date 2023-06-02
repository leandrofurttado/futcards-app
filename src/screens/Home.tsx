import { HStack, Heading, VStack, Image, Icon } from "native-base";
import { ShoppingCart } from 'phosphor-react-native'
import FutCardsLogo from "../assets/bayernlogo.png"
import BayernLogo from "../assets/bayernlogo.png"
import { useEffect, useState } from "react";
import React from "react";
import { Loading } from "../components/loading";
import { TouchableOpacity, View } from "react-native";




export function Home() {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      // Função assíncrona para buscar os dados da API
      async function fetchData() {
        try {
            const response = await fetch('https://futcardsbrasil.000webhostapp.com/usuarios/consultar/40');
            const data = await response.json();
            setUserData(data); // Armazena os dados da API no estado
        } catch (error) {
            console.error('Erro ao consultar a API:', error);
        }
      }
  
      fetchData(); // Chama a função de busca de dados quando o componente for montado
    }, []);
  
    return (
      <View style={{ flex: 1 }}>
        <VStack flex={1} bg="green.900" alignItems="center" px={8} py={24}>
          <HStack
            w="full"
            h="24"
            justifyContent="center"
            alignItems="center"
            display="flex"
            backgroundColor="green.900"
          >
            <Image
              source={BayernLogo}
              resizeMode="contain"
              size={150}
              borderRadius={30}
              alt="perfil-img"
            />
          </HStack>

          <Heading color="gray.100" fontSize="xl" mt={10}>
            {userData ? `Bem vindo, ${userData.nome_completo}!` : <Loading />}
          </Heading>

          <Heading display="flex" color="gray.100" fontSize="xl" mt={10}>
            Créditos: $
          </Heading>

          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: '#191970',
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
            }}
          > 

            <Heading display="flex" color="gray.100" fontSize="xl">
              {<ShoppingCart size={20} weight="bold" color="white" />} Loja de cartas
            </Heading>
          </TouchableOpacity>
        </VStack>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 20,
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            alignItems: 'center',
            marginHorizontal: 20,
          }}
        >
          <Heading display="flex" color="black" fontSize="xl">
            Ganhar carta diária
          </Heading>
        </TouchableOpacity>
      </View>

    );
  }