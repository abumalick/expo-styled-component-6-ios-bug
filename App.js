import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.View`
  background-color: red;
  border-color: red;
  padding: 10px;
  border-width: 3px;
  width: 100px;
  height: 100px;
`;
export default function App() {
  return (
    <View style={styles.container}>
      {/* With styled-components it does not work: */}
      <Wrapper
        style={{
          backgroundColor: "blue", // Overrides
          borderColor: "blue", // Does not overrides!
          padding: 0,
        }}
      >
        <Text>Styled component</Text>
      </Wrapper>
      {/* With normal react-native overrides it work: */}
      <View
        style={[
          styles.block,
          {
            backgroundColor: "blue",
            borderColor: "blue",
            padding: 0,
          },
        ]}
      >
        <Text>RN</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  block: {
    backgroundColor: "red",
    borderColor: "red",
    padding: 10,
    borderWidth: 3,
    width: 100,
    height: 100,
  },
});
