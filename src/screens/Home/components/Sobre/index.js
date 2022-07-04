import { ScrollView, Text, View } from "react-native";
import AppStyles from "../../../../themes/AppStyles";
import CardIntegrante from "../CardIntegrante";
import { styles } from "./styles";

const Sobre = () => {
  return (
    <>
      <View style={styles.textoContainer}>
        <Text style={AppStyles.title}>Quem somos</Text>
        <Text style={[AppStyles.text, { textAlign: "center" }]}>
          Tegloja é uma loja e-commerce de tecnologia, fundada por alunos do
          Serratec no primeiro semestre de 2022, e desde seu início tem se
          esforçado para oferecer produtos e atendimento de boa qualidade
          prezando sempre por atender as necessidades de nossos clientes da
          melhor forma.
        </Text>
      </View>
      <View style={styles.integrantesContainer}>
        <CardIntegrante
          nome="Hítalo"
          urlFoto="https://avatars.githubusercontent.com/u/104807075?v=4"
        />
        <CardIntegrante nome="Nícolas" urlFoto="" />
        <CardIntegrante
          nome="Patricia"
          urlFoto="https://avatars.githubusercontent.com/u/104991190?v=4"
        />
        <CardIntegrante
          nome="Thiago"
          urlFoto="https://avatars.githubusercontent.com/u/80463699?v=4"
        />
        <CardIntegrante
          nome="Vinicios"
          urlFoto="https://avatars.githubusercontent.com/u/23295030?v=4"
        />
        <CardIntegrante nome="Wendel" urlFoto="" />
      </View>
    </>
  );
};

export default Sobre;
