import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const About = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Develop by Bemal</Text>
            <Text>2020 </Text>
        </View>
    )
};

About.navigationOptions = navData => {
  return{
      headerLeft: () => {
          return <Ionicons name='ios-menu' size={24} color='white' onPress={() => {
            navData.navigation.toggleDrawer();
          }}/>
      }
  }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
    },
    title: {
        fontFamily: 'nunitobold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
});

export default About;