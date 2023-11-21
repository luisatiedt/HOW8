import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App = () => {
  const onPressLogin = () => {
    // funcao para entrar na conta
  };
  const onPressForgotPassword = () => {
    // funcao para esqueceu a senha
  };
  const onPressSignUp = () => {
    // funcao para criar conta
  };
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  return (
    <View style={styles.container}>

      <Text style={styles.title}> ALERTABLU</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Usuário"
          placeholderTextColor="#023047"
          onChangeText={text => setState({ email: text })} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor="#023047"
          onChangeText={text => setState({ password: text })} />
      </View>
      <TouchableOpacity
        onPress={onPressForgotPassword}>
        <Text style={styles.forgotAndSignUpText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressLogin}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>Entrar </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressSignUp}>
        <Text style={styles.forgotAndSignUpText}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressLogin}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#caf0f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#023047",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#8ecae6",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgotAndSignUpText: {
    color: "#023047",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#FFB703",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
});
export default App;