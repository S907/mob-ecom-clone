import { StyleSheet } from "react-native";
import { COLORS } from "../../Pages/OnboardScreen";

export const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        width: '70%',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    opcaityOne: {
        borderWidth: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    opcaityTwo: {
        borderWidth: 1,
        marginRight: 10,
        justifyContent: 'center'
    }

})