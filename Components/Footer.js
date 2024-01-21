import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../Pages/OnboardScreen";
import { styles } from "./styles/footer.style";

export const Footer = ({ width, height }) => {
    return (
        <View style={[styles.viewContainer, { height: height * 0.25, }]}>
            <TouchableOpacity style={[styles.opcaityOne, {
                width: width / 4, height: height / 25,
            }]}>
                <Text style={{ textAlign: 'center', color: COLORS.white }}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.opcaityTwo, {
                width: width / 4, height: height / 25,
            }]}>
                <Text style={{ textAlign: 'center', color: COLORS.white }}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};
