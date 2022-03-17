import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'



import { Color } from '../../styles/Color'
import { Header, SearchBar, DishDetails, TextComp, RestrorentItem } from '../../reuse/Reuse'
import { RestrorentData } from '../../assets/data/Data'

export default function Home() {
    return (
        <ScrollView style={styles.root}>
            <Header title={'Home'} />
            <SearchBar placeholder="Search your dish" name={'search'} />
            <View style={styles.imgWrapper}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.imgBackStyle} source={require('../../assets/images/restroback.png')}>
                    <DishDetails title={'Delivery to Home'} name={'right'} addres={'Uttara Street, 1201 Dhaka'} text={'3.6Km'} />
                </ImageBackground>
            </View>
            <OrderNow />
            <TextComp text="Top of the Week" subText="More" />
            <RestrorentItem RestrorentData={RestrorentData} />
        </ScrollView>
    )
}

const OrderNow = () => {
    return (
        <View style={styles.orderRoot}>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.deliveryContainer} source={require('../../assets/images/waves.png')}>
                <View style={styles.deliveryFlex}>
                    <View>
                        <Text style={styles.boldTitle}>Chicken Biryani</Text>
                        <Text style={styles.text}>Discount 25%</Text>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={{ fontWeight: 'bold' }}>Order Now</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.img} source={require('../../assets/images/b.png')} />
                </View>
            </ImageBackground>
        </View>
    )
}



const styles = StyleSheet.create({
    root: {
        backgroundColor: Color.White
    },
    // delivery comp styles
    imgWrapper: {
        marginHorizontal: 10,
        marginBottom: 20
    },
    imgBackStyle: {
        width: '100%',
        height: 150
    },

    // Order Comp styles

    orderRoot: {
        marginHorizontal: 10
    },
    deliveryContainer: {
        height: 210
    },
    deliveryFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 25,
        marginBottom: 10
    },
    boldTitle: {
        color: Color.White,
        fontWeight: 'bold',
        fontSize: 20
    },
    addresContainer: {
        marginHorizontal: 15
    },
    text: {
        fontSize: 16,
        color: Color.White,
        marginBottom: 8
    },
    btnContainer: {
        width: 80,
        height: 35,
        borderRadius: 15,
        backgroundColor: Color.White,
        alignItems: 'center',
        justifyContent: 'center'
    },

    img: {
        width: 150,
        height: 100
    }
})