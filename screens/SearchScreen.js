import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      style={styles.container}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
