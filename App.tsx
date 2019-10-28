import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

const facebookLogin = async () => {
  const appID = "1378404828993249";
  const result = await Facebook.logInWithReadPermissionsAsync(appID);
  console.log(JSON.stringify(result, null, "  "));
}

const googleLogin = async () => {
  const result = await Google.logInAsync({
    clientId: "170907473553-8fv1b87pc1m50t0bvfnqfkksu34t0pv8.apps.googleusercontent.com",
    iosClientId: "170907473553-8fv1b87pc1m50t0bvfnqfkksu34t0pv8.apps.googleusercontent.com",
  });
  console.log(JSON.stringify(result, null, "  "));
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Facebook" onPress={facebookLogin} />
      <Button title="Google" onPress={googleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
