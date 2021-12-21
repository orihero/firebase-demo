import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {SearchIcon} from '../assets/icons';

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon style={styles.searchIcon} />
      <TextInput
        style={styles.textInput}
        placeholder="Search by events, teams"
        placeholderTextColor="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: 32,
    marginVertical: 12,
    backgroundColor: '#F3F4F5',
    borderRadius: 8,
    alignItems: 'center',
    padding: 8,
  },
  searchIcon: {marginRight: 12, marginTop: 5},
  textInput: {
    width: '100%',
    fontSize: 16,
  },
});
