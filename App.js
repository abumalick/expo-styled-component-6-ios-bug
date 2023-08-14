import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.View`
  background-color: red;
  border-color: red;
  border-width: 3px;
`;
export default function App() {
  return (
    <View style={styles.container}>
      <Wrapper
        style={{
          backgroundColor: "blue", // Overrides
          borderColor: "blue", // Does not overrides!
        }}
      >
        <Text>Open up App.js to start working on your app!</Text>
      </Wrapper>
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
});
