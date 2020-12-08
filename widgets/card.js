import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Card = (props) => {
  return(
      <View style={styles.card}>
          <View style={styles.cardContent}>
              {props.children}
          </View>
      </View>
  )
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        borderColor: 'gray',
        elevation: 5,
        backgroundColor: '#fff',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20
    }
});

export default Card;