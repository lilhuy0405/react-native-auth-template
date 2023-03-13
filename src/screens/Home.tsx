import { Button, StyleSheet, Text, View } from "react-native";
import { appRouters } from "../routers";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View>
        {
          Object.keys(appRouters).map((key: string) => {
            return (
              <Button title={appRouters[key].name} key={key} onPress={() => {
                navigation.navigate(appRouters[key].name);
              }} />
            );
          })
        }
      </View>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black"
  }
});

export default Home;
