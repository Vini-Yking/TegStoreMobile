import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { Logout } from "../../util/Logout";

export const Sobre = () => {
    return (
        <><Logout />
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Sobre</Text>
            </View>
        </>
    );
};
