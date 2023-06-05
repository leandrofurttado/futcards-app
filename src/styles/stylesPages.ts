import { extendTheme } from "native-base";
import { ViewStyle } from 'react-native';



export const STYLES = extendTheme({
    button_style_editarPerfil: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 250,
    } as ViewStyle, //sendo necessário passar ViewStyle pois o style TouchableOpacity nao aceita o style direto do native-base
    button_style: {
        marginTop: 20,
        backgroundColor: '#191970',
        borderRadius: 10,
        padding: 20,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 250,
    } as ViewStyle,
})

export default STYLES