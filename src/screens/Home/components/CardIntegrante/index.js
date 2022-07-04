import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import AppStyles from "../../../../themes/AppStyles";

import { styles } from "./styles";

const CardIntegrante = ({ nome, urlFoto }) => {
  return (
    <View style={[{ paddingVertical: 13, width: 150 }]}>
      <Image source={{ uri: urlFoto }} style={styles.foto} />
      <Text
        style={[
          AppStyles.text,
          { textAlign: "center", color: "white", fontSize: 20 },
        ]}
      >
        {nome}
      </Text>
      <View style={styles.redesSociais}>
        <Pressable style={styles.button}>
          <FontAwesomeIcon icon={faLinkedin} size={20} color="white" />
        </Pressable>
        <Pressable style={styles.button}>
          <FontAwesomeIcon icon={faGithub} size={20} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default CardIntegrante;
