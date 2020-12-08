import React,{useState} from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';

import Card from "../widgets/card";

const ReviewDetail = (props) => {
    const item = props.navigation.getParam('item');
    const ratingImage = () => {
      if(item.rating == 1){
        return(
            <Image source={require('../assets/rating-1.png')}/>
        )
      }else if(item.rating == 2){
          return(
              <Image source={require('../assets/rating-2.png')}/>
          )
      }else if(item.rating == 3){
          return(
              <Image source={require('../assets/rating-3.png')}/>
          )
      }else if(item.rating == 4){
          return(
              <Image source={require('../assets/rating-4.png')}/>
          )
      }else if(item.rating == 5){
          return(
              <Image source={require('../assets/rating-5.png')}/>
          )
      }
    };
    return(
        <View style={styles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating</Text>
                    {ratingImage()}
                </View>
            </Card>
        </View>
    )
};

ReviewDetail.navigationOptions = navData => {
    return{
        headerTitle: 'Review Details'
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
    },
    rating: {

    }
});

export default ReviewDetail;