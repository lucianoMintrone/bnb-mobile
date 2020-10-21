import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
});

const LoginScreen = ({ navigation, todos, addTodo }) => {
  console.log(todos);
  addTodo();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookbnb</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;
