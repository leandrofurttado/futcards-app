import { HStack, Heading, VStack, Image } from "native-base";
import FutCardsLogo from "../assets/FutCards_logo.png"
import { useEffect, useState } from "react";




export function Home() {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      // Função assíncrona para buscar os dados da API
      async function fetchData() {
        try {
            const response = await fetch('https://futcardsbrasil.000webhostapp.com/usuarios/consultar/20');
            const data = await response.json();
            setUserData(data); // Armazena os dados da API no estado
        } catch (error) {
            console.error('Erro ao consultar a API:', error);
        }
      }
  
      fetchData(); // Chama a função de busca de dados quando o componente for montado
    }, []);
  
    return (
      <VStack flex={1} bg="green.900" alignItems="center" px={8} py={24}>
        <HStack
          w="full"
          h="24"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          backgroundColor="green.900"
        >
          <Image source={FutCardsLogo} resizeMode="contain" size="sm" alt="logo" />
        </HStack>
  
        <Heading color="gray.100" fontSize="xl" mt={10}>
          {userData ? `Bem vindo, ${userData.nome_completo}!` : 'Carregando...'}
        </Heading>
      </VStack>
    );
  }