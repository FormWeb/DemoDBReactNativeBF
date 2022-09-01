import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { insertBook, loadDatabase, getBooks } from './src/db/db';

export default function App() {

  useEffect(() => {
    loadDatabase()
      .then(
        () => console.log("Database loaded")
      )
      .catch(
        (err) => console.log(err)
      )
  }, [])

  const getBooksFromDatabase = () => {
    getBooks()
      .then(
        (data) => console.log(data.rows._array)
      )
      .catch(
        (err) => console.log(err)
      )
  }

  const addBook = () => {
    insertBook("Harry Potter")
      .then(
        () => console.log("Book added")
      )
      .catch(
        (err) => console.log(err)
      )
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='Books' onPress={getBooksFromDatabase}></Button>
      <Button title='Add harry potter' onPress={addBook}></Button>
      <StatusBar style="auto" />
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
