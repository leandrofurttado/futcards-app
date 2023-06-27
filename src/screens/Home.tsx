import { HStack, Heading, VStack, Image, Icon } from "native-base";
import { BookOpen, IdentificationCard, ShoppingCart, SoccerBall, StarFour, User } from 'phosphor-react-native'
import BayernLogo from "../assets/bayernlogo.png"
import { useContext, useEffect, useState } from "react";
import React from "react";
import { Loading } from "../components/loading";
import { TouchableOpacity, View } from "react-native";
import STYLES from "../styles/stylesPages";
import { AuthContext } from "../contexts/authLogin";
import { THEME } from "../styles/theme";
import { useNavigation } from "@react-navigation/native";



export function Home() {
  const [userData, setUserData] = useState('');
  const [roletaOn, setRoletaOn] = useState(true);

  const navegar = useNavigation();

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
          {userData["imageBase64"] ? (
            <Image
              source={{ uri: `data:image/jpeg;base64,${userData["imageBase64"]}` }}
              style={{ width: 150, height: 150, borderRadius: 100, borderWidth: 2, borderColor: THEME.colors.white }}
              alt="Perfil Foto"
            />
          ) : <Image
            source={BayernLogo}
            style={{ width: 150, height: 150, borderRadius: 100 }}
            alt="Perfil Foto"
          />}
        </HStack>

        <View style={{flexDirection:'column', justifyContent: 'flex-start', }}>
          <Heading color="gray.100" fontSize="xl" mt={10}>
            {userData ? `Bem vindo, ${userData["nome_completo"]}!` : <Loading />}
          </Heading>

          <Heading display="flex" color="gray.100" fontSize="xl" mt={5}>
            * FC Points: {userData ? userData["credits"] : '-'}$
          </Heading>
        </View>



        {/* Editar */}
        <TouchableOpacity
          style={STYLES.button_style_editarPerfil}
          onPress={() => {navegar.navigate('Configuracoes')}}
        >
          <IdentificationCard size={30} weight="bold" color="black" style={{ display: 'flex' }} />
          <Heading display="flex" color="black" fontSize="xl" alignItems="center" ml={2}>
            Editar perfil
          </Heading>
        </TouchableOpacity>

        {/* Loja de cartas */}
        <TouchableOpacity
          style={STYLES.button_style}

        >
          <ShoppingCart size={30} weight="bold" color="white" style={{ display: 'flex' }} />
          <Heading display="flex" color="gray.100" fontSize="xl" alignItems="center" ml={2}>
            Loja de cartas
          </Heading>
        </TouchableOpacity>

        {/* Inventário */}
        <TouchableOpacity
          style={STYLES.button_style}
        >

          <BookOpen size={30} weight="bold" color="white" style={{ display: 'flex' }} />
          <Heading display="flex" color="gray.100" fontSize="xl" alignItems="center" ml={2}>
            Minhas Cartas
          </Heading>
        </TouchableOpacity>

      </VStack>

      <TouchableOpacity
        style={{
          backgroundColor: roletaOn ? 'gold' : 'white',
          borderRadius: 10,
          padding: 5,
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          alignItems: 'center',
          marginHorizontal: 20,
          justifyContent: 'center',
        }}
      >

        <Heading display="flex" color={"black"} fontSize="xl" mb={2}>
          {roletaOn ? 'Roleta diária disponível' : 'Roleta indisponível, aguarde para jogar.'}
        </Heading>
        <StarFour size={30} weight="bold" color="black" />
      </TouchableOpacity>
    </View>
  );
}