import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {sportTypes} from '../screens/home/HomeScreen';

export default function IconsBar() {
  const [selectedSport, setSelectedSport] = useState(0);

  return (
    <View style={styles.IconsBar}>
      <ScrollView
        style={{paddingLeft: 20, marginTop: 16}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {sportTypes.map((e, i) => {
          let Icon = e.icon;
          let isSelected = selectedSport == i;
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedSport(i);
              }}>
              <View
                style={[
                  styles.footballIconContainer,
                  isSelected && styles.activeSport,
                ]}>
                <Icon
                  // stroke={isSelected ? 'white' : 'rgba(50, 50, 50, 0.5)'}
                  fill={isSelected ? 'white' : 'rgba(50, 50, 50, 0.5)'}
                />
                {isSelected && (
                  <Text
                    style={[styles.iconText, isSelected && {color: 'white'}]}>
                    {e.title}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  footballIconContainer: {
    backgroundColor: '#F3F4F5',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontWeight: '700',
    marginLeft: 8,
  },
  activeSport: {
    backgroundColor: 'black',
  },
});
