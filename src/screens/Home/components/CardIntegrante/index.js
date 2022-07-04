import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import AppStyles from "../../../../themes/AppStyles";

import { styles } from "./styles";
import { useCallback } from "react";

const CardIntegrante = ({ nome, urlFoto, urlLinkedin, urlGithub }) => {
  const handleLinkedin = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(urlLinkedin);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(urlLinkedin);
    } else {
      Alert.alert(`Don't know how to open this URL: ${urlLinkedin}`);
    }
  }, [urlLinkedin]);

  const handleGithub = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(urlGithub);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(urlGithub);
    } else {
      Alert.alert(`Don't know how to open this URL: ${urlGithub}`);
    }
  }, [urlGithub]);

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
        <Pressable style={styles.button} onPress={handleLinkedin}>
          <FontAwesomeIcon icon={faLinkedin} size={20} color="white" />
        </Pressable>
        <Pressable style={styles.button} onPress={handleGithub}>
          <FontAwesomeIcon icon={faGithub} size={20} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default CardIntegrante;
