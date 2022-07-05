import { ScrollView, Text, View } from "react-native";
import AppStyles from "../../../../themes/AppStyles";
import CardIntegrante from "../CardIntegrante";
import { styles } from "./styles";

const Sobre = () => {
  return (
    <>
      <View style={styles.textoContainer}>
        <Text style={[AppStyles.title, { color: "white", marginBottom: 20 }]}>
          Quem somos
        </Text>
        <Text style={[AppStyles.text, { textAlign: "center", color: "white" }]}>
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
          urlLinkedin="https://www.linkedin.com/in/thiago-paes-de-carvalho/"
          urlGithub="https://github.com/thiagocarvalho93"
        />
        <CardIntegrante
          nome="Nícolas"
          urlFoto="https://media-exp2.licdn.com/dms/image/C4E03AQEOCOihgfjQcg/profile-displayphoto-shrink_800_800/0/1648866992101?e=1662595200&v=beta&t=BBp9YKatAJjbeCcchJu2WVNDNmSZgVte1GSTaRj8YLg"
          urlLinkedin="https://www.linkedin.com/in/thiago-paes-de-carvalho/"
          urlGithub="https://github.com/thiagocarvalho93"
        />
        <CardIntegrante
          nome="Patricia"
          urlFoto="https://avatars.githubusercontent.com/u/104991190?v=4"
          urlLinkedin="https://www.linkedin.com/in/thiago-paes-de-carvalho/"
          urlGithub="https://github.com/thiagocarvalho93"
        />
        <CardIntegrante
          nome="Thiago"
          urlFoto="https://avatars.githubusercontent.com/u/80463699?v=4"
          urlLinkedin="https://www.linkedin.com/in/thiago-paes-de-carvalho/"
          urlGithub="https://github.com/thiagocarvalho93"
        />
        <CardIntegrante
          nome="Vinicios"
          urlFoto="https://avatars.githubusercontent.com/u/23295030?v=4"
          urlLinkedin="https://www.linkedin.com/in/thiago-paes-de-carvalho/"
          urlGithub="https://github.com/thiagocarvalho93"
        />
        <CardIntegrante
          nome="Wendel"
          urlFoto="https://cdn.discordapp.com/attachments/971451001276072002/993563499064205432/wndel.jpeg"
          urlLinkedin="https://www.linkedin.com/in/thiago-paes-de-carvalho/"
          urlGithub="https://github.com/thiagocarvalho93"
        />
      </View>
    </>
  );
};

export default Sobre;
