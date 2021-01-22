import React,{useState} from 'react';
import {StyleSheet,Text,View,ScrollView,Image} from 'react-native';
import json from './db.json';

function ProductList(){
    var [data] = useState(json);

    return(
        <ScrollView style={styles.listContainer}>
            <Text>List Of Products</Text>
            <View>
                {
                    data.map((item) => {
                        return(
                            <View key={item.id} style={styles.productblock}>
                                <Image style={styles.placeImage} source={{uri:item.image}}/>
                                <Text style={styles.textval}>{item.name}</Text>
                                <Text>kjhkj</Text>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    listContainer:{
        width:"80%"
    },
    productblock:{
        marginBottom:"5%"
    },
    placeImage:{
        height:200
    },
    textval:{
        fontSize:30,
        textAlign:'center',
        color:'red'
    }
})

export default ProductList