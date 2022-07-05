import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { Pressable, Text, View, StatusBar } from "react-native";
import { styles } from "./styles";

export const BotaoPesquisa = () => {

    return (
        <View
            style={{
                marginTop: StatusBar.currentHeight || 0,
                alignSelf: "flex-end",
                zIndex: 1,
            }}>
            <View
                style={{
                    alignSelf: "center",
                    top: 0,
                    zIndex: 1,
                }}>
                <Pressable style={[styles.button, { paddingHorizontal: 6, paddingVertical: 7, marginLeft: 3 }]} title="sair" onPress={() => (console.log("pesquisei"))}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="white" />
                </Pressable>
            </View>
        </View>
    );
};
