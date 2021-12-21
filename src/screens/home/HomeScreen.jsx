import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Platform,
  TextInput,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {
  PlusIcon,
  SearchIcon,
  ChevronRightIcon as ChevronIcon,
  BallIcon,
  BasketballIcon,
  VolleyballIcon,
  TennisIcon,
  BaseballIcon,
  CricketIcon,
} from '../../assets/icons';
import SearchBar from '../../components/SearchBar';
import IconsBar from '../../components/IconsBar';

let bannerData = [
  {
    title: 'PREMIER LEAGUE',
    image: require('../../assets/images/player.png'),
  },
  {
    title: 'Premier League',
    image: {
      uri: 'https://www.pngall.com/wp-content/uploads/5/Lionel-Messi-PNG-Pic.png',
    },
  },
  {
    title: 'Premier League',
    image: require('../../assets/images/player.png'),
  },
  {
    title: 'Premier League',
    image: require('../../assets/images/player.png'),
  },
  {
    title: 'Premier League',
    image: require('../../assets/images/player.png'),
  },
  {
    title: 'Premier League',
    image: require('../../assets/images/player.png'),
  },
];

export let sportTypes = [
  {title: 'Football', icon: BallIcon},
  {title: 'Basketball', icon: BasketballIcon},
  {title: 'Volleyball', icon: VolleyballIcon},
  {title: 'Tennis', icon: TennisIcon},
  {title: 'Baseball', icon: BaseballIcon},
  {title: 'Cricket', icon: CricketIcon},
];

export let matches = [
  {
    league: 'Premier league',
    teams: [
      {
        logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/c/cc/Chelsea_FC.svg/2048px-Chelsea_FC.svg.png',
        name: 'Chelsea',
        score: 1,
      },
      {
        logo: 'https://clipart.info/images/ccovers/1503438224arsenal-logo-png.png',
        name: 'Arsenal',
        score: 2,
      },
    ],
    time: '49:30',
  },
  {
    league: 'Premier league',
    teams: [
      {
        logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/c/cc/Chelsea_FC.svg/2048px-Chelsea_FC.svg.png',
        name: 'Chelsea',
        score: 1,
      },
      {
        logo: 'https://clipart.info/images/ccovers/1503438224arsenal-logo-png.png',
        name: 'Arsenal',
        score: 2,
      },
    ],
    time: '49:30',
  },
  {
    league: 'Premier league',
    teams: [
      {
        logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/c/cc/Chelsea_FC.svg/2048px-Chelsea_FC.svg.png',
        name: 'Chelsea',
        score: 1,
      },
      {
        logo: 'https://clipart.info/images/ccovers/1503438224arsenal-logo-png.png',
        name: 'Arsenal',
        score: 2,
      },
    ],
    time: '49:30',
  },
  {
    league: 'Premier league',
    teams: [
      {
        logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/c/cc/Chelsea_FC.svg/2048px-Chelsea_FC.svg.png',
        name: 'Chelsea',
        score: 1,
      },
      {
        logo: 'https://clipart.info/images/ccovers/1503438224arsenal-logo-png.png',
        name: 'Arsenal',
        score: 2,
      },
    ],
    time: '49:30',
  },
];

const HomeScreen = ({}) => {
  const {colors} = useTheme();

  const theme = useTheme();
  const [isTopEvent, setIsTopEvent] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <View>
          <Text style={styles.text}> Hello </Text>
          <Text style={styles.nameText}> Abduvohid </Text>
        </View>
        <View style={styles.iconContainer}>
          <PlusIcon />
        </View>
      </View>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tournamentsContainer}>
          <Text style={styles.text1}> Tournaments </Text>
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            decelerationRate={0}
            snapToAlignment={'center'}
            snapToInterval={Dimensions.get('window').width - 64}>
            <View style={{width: 16, height: 1}} />
            {bannerData.map(e => {
              return (
                <View style={styles.bannerItem}>
                  <View style={styles.imageContainer}>
                    <ImageBackground
                      source={require('../../assets/images/lion.png')}
                      style={styles.backgroundImage}
                      imageStyle={{overflow: 'hidden'}}></ImageBackground>
                  </View>
                  <View style={styles.bannerInner}>
                    <View style={styles.titleContainer}>
                      <View style={styles.iconRow}>
                        <View style={styles.vectorIcon}>
                          <ChevronIcon stroke="black" width={24} height={24} />
                        </View>
                        <Text style={styles.descriptionText}>All matches</Text>
                      </View>
                      <Text style={styles.titleText}>{e.title}</Text>
                    </View>
                    <Image source={e.image} style={styles.bannerImage} />
                  </View>
                </View>
              );
            })}
            <View style={{width: 32, height: 1}} />
          </ScrollView>
        </View>
        <View style={styles.topEvent}>
          <Text style={styles.topText}>Top event</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.liveText}>LIVE</Text>
            <Switch
              trackColor={{false: 'black', true: '#FF4B00'}}
              onValueChange={setIsTopEvent}
              value={isTopEvent}
            />
          </View>
        </View>
        <IconsBar />
        {matches.map((e, i) => {
          let team1 = e.teams[0];
          let team2 = e.teams[1];
          return (
            <View style={styles.card}>
              <View>
                <Image
                  style={{width: 48, height: 48}}
                  source={{uri: team1.logo}}
                />
                <Text style={{marginTop: 7.8}}>{e.teams[0].name}</Text>
              </View>
              <View>
                <Text style={{color: 'gray'}}>{e.league}</Text>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      marginTop: 5,
                      marginLeft: 15,
                      fontFamily: 'PilatExtended-Heavy',
                    }}>
                    {team1.score} : {team2.score}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FF4B00',
                      width: 8,
                      height: 8,
                      borderRadius: 15,
                      marginRight: 5,
                      marginTop: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: 3,
                      color: 'gray',
                    }}>
                    {e.time}
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  style={{width: 48, height: 48}}
                  source={{uri: team2.logo}}
                />
                <Text style={{marginTop: 7.8}}>{e.teams[1].name}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'PilatExtended-Regular',
    fontSize: 18,
    lineHeight: 24,
  },
  nameText: {
    fontFamily: 'PilatExtended-Heavy',
    fontSize: 18,
    textTransform: 'uppercase',
    lineHeight: 24,
  },
  header: {
    paddingHorizontal: 32,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  iconContainer: {
    backgroundColor: '#FF4B00',
    borderRadius: 8,
    padding: 2,
  },
  text1: {
    fontFamily: 'PilatExtended-Heavy',
    fontSize: 20,
    color: 'gray',
  },
  tournamentsContainer: {
    marginHorizontal: 28,
    marginTop: 12,
  },
  bannerItem: {
    height: 150,
    width: Dimensions.get('window').width - 96,
    backgroundColor: '#FF4B00',
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'visible',
    marginTop: 20,
  },
  image: {
    resizeMode: 'stretch',
    transform: [{scale: 0.8}],
    overflow: 'visible',
    width: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transform: [{translateX: -40}],
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  bannerInner: {
    flexDirection: 'row',
    overflow: 'visible',
    width: '100%',
  },
  bannerImage: {
    height: 165,
    resizeMode: 'contain',
    transform: [{translateY: -15}],
    width: 145,
  },
  vectorIcon: {
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  topEvent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 32,
    marginTop: 12,
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: 'PilatExtended-Heavy',
    width: '100%',
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 16,
    marginTop: 24,
  },
  titleContainer: {
    flexWrap: 'wrap',
    flexShrink: 1,
    paddingLeft: 24,
    paddingTop: 24,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionText: {
    color: 'white',
    marginLeft: 10,
  },
  topText: {
    fontFamily: 'PilatExtended-Heavy',
    flexDirection: 'row',
    fontSize: 20,
    color: 'gray',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveText: {
    fontFamily: 'PilatExtended-Heavy',
    marginRight: 8,
  },
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
