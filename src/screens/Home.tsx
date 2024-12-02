import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CSS Stipend Rankings</Text>
      <Button
        title="View Stipend Rankings"
        onPress={() => navigation.navigate('Stipend Rankings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default Home;
