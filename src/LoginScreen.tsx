import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Logging in with", email, password);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { marginBottom: 12, borderBottomWidth: 1, borderColor: '#ccc', padding: 8 },
});
