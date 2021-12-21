import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import SearchBar from '../../components/SearchBar';
import {BorderIcon, SettingsIcon, PlayIcon} from '../../assets/icons/index';
import IconsBar from '../../components/IconsBar';
import {matches} from '../home/HomeScreen';

export default function BallScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row'}}>
          <BorderIcon style={{marginTop: 10, marginLeft: 10}} />
          <Text style={styles.textLeft}>LIVE</Text>
          <Text style={styles.textRight}>LINE</Text>
        </View>
        <View style={styles.settingContainer}>
          <SettingsIcon />
        </View>
      </View>
      <SearchBar />
      <IconsBar />
      {matches.map((e, i) => {
        return (
            <ScrollView>
          <View style={styles.card}>
            <View>
              <Text style={{fontSize: 10, color: 'grey'}}>Premier League</Text>
              <View style={{flexDirection: 'row', paddingTop: 15}}>
                <Image
                  style={{width: 18, height: 18}}
                  source={{uri: e.teams[0].logo}}
                />
                <Text
                  style={{fontFamily: 'PilatExtended-Heavy', paddingLeft: 10}}>
                  Chelsea
                </Text>
                <View style={{flexDirection: 'row', paddingLeft: 77}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'PilatExtended-Heavy',
                      color: 'gray',
                    }}>
                    0
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'PilatExtended-Heavy',
                      paddingLeft: 15,
                    }}>
                    1
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <Image
                  style={{width: 18, height: 18}}
                  source={{uri: e.teams[1].logo}}
                />
                <Text
                  style={{fontFamily: 'PilatExtended-Heavy', paddingLeft: 10}}>
                  Arsenal
                </Text>
                <View style={{flexDirection: 'row', paddingLeft: 80}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'PilatExtended-Heavy',
                      color: 'gray',
                    }}>
                    2
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'PilatExtended-Heavy',
                      paddingLeft: 15,
                    }}>
                    2
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 10 }}>
                <PlayIcon />
                <Text
                  style={{
                    fontSize: 12,
                    color: 'gray',
                    paddingLeft: 10
                  }}>
                  {e.time}
                </Text>
              </View>
            </View>
          </View>
          </ScrollView>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  textLeft: {
    fontFamily: 'PilatExtended-Heavy',
    fontSize: 18,
    marginLeft: 10,
  },
  textRight: {
    color: 'grey',
    fontFamily: 'PilatExtended-Heavy',
    fontSize: 18,
    marginLeft: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  settingContainer: {
    backgroundColor: '#F3F4F5',
    padding: 8,
    borderRadius: 8,
  },
  card: {
    borderColor: '#E4E5E5',
    borderWidth: 1,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
