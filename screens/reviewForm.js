import React from 'react';
import {StyleSheet,Text,View,Button,TextInput} from 'react-native';
import {Formik} from 'formik';
import  * as yup from  'yup';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is num','rating must be 1 - 5',(val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

const ReviewForm = (props) => {
    return(
        <View style={styles.container}>
            <Formik initialValues={{title: '',body: '',rating: ''}} validationSchema={reviewSchema} onSubmit={(values,actions) => {
                props.addReview(values);
                actions.resetForm();
            }}>
                {(props) => {
                    return(
                        <View>
                            <TextInput style={styles.input} placeholder='Review title' onChangeText={props.handleChange('title')} value={props.values.title}/>
                            <Text style={styles.error}>{props.touched.title && props.errors.title}</Text>
                            <TextInput style={styles.input} placeholder='Review body' multiline={true} onChangeText={props.handleChange('body')} value={props.values.body}/>
                            <Text style={styles.error}>{props.touched.body && props.errors.body}</Text>
                            <TextInput keyboardType='numeric' style={styles.input} placeholder='Review rating' onChangeText={props.handleChange('rating')} value={props.values.rating}/>
                            <Text style={styles.error}>{props.touched.rating && props.errors.rating}</Text>
                            <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                        </View>
                    )
                }}
            </Formik>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 10,
        borderRadius: 6,
        fontSize: 20,
        marginVertical: 15,
        width: 300
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    }
});

export default ReviewForm;