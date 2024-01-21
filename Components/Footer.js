import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles/footer.style";
import { COLORS } from "../Pages/constants/color";

export const Footer = (props) => {
    console.log('footer', props);
    return (
        <View style={[styles.viewContainer, { height: props.height * 0.25, }]}>
            <TouchableOpacity style={[styles.opcaityOne, {
                width: props.width / 4, 
                height: props.height / 25,
                borderColor: COLORS.white,
            }]}>
                <Text style={{ textAlign: 'center', color: COLORS?.white }}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.opcaityTwo, {
                width: props.width / 4, 
                height: props.height / 25,
                borderColor: COLORS.white,
            }]}
            
            onPress={()=>props.navigation.navigate('Home')}
            >
                <Text style={{ textAlign: 'center', color: COLORS?.white }}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};
