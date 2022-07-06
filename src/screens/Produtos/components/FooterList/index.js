import { ActivityIndicator, View } from "react-native";

export const FooterList = ({ load }) => {
  if (!load) return null;
  return (
    <View>
      <ActivityIndicator size={25} color="white" />
    </View>
  );
};
