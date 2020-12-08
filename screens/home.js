import React,{useState,useEffect,useCallback} from 'react';
import {TouchableWithoutFeedback,Keyboard,Modal,View,Text,StyleSheet,TouchableOpacity,FlatList,Platform,ImageBackground,Dimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Card from "../widgets/card";
import ReviewForm from "./reviewForm";

const Home = (props) => {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);
    const [modalOpen,setModalOpen] = useState(false);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews(prevState => {
            return [review,...prevState];
        });
        setModalOpen(false);
    };

    const toggleModal = useCallback(() => {
        setModalOpen(prevState => !prevState);
    },[modalOpen]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleModal});
    },[toggleModal]);

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.image}>
        <View style={styles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Ionicons name='ios-close' size={32} color='red' onPress={toggleModal} style={styles.closeButton}/>
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <FlatList data={reviews} keyExtractor={(item,index) => item.key} renderItem={(data) => {
                return(
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate({routeName: 'detail',params: {'item': data.item}})
                    }}>
                        <Card>
                            <Text style={styles.title}>{data.item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )
            }}/>
        </View>
        </ImageBackground>
    )
};

Home.navigationOptions = navData => {
    const toggleModal = navData.navigation.getParam('toggleFav');
    return{
        headerTitle: 'Game Zone',
        headerLeft: () => {
            return <Ionicons name='ios-menu' color='white' size={24} onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>
        },
        headerRight: () => {
            return(
                <Ionicons name='ios-add' color='white' size={24} onPress={toggleModal}/>
            )
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
    },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    modalContent: {
        flex: 1,
        alignItems: 'center'
    },
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;