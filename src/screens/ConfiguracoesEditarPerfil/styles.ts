import { extendTheme } from "native-base";
import { ViewStyle } from 'react-native';



export const STYLES = extendTheme({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    } as ViewStyle, //sendo necessário passar ViewStyle pois o style TouchableOpacity nao aceita o style direto do native-base
})

export default STYLES