import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/AntDesign'
import { Color } from '../styles/Color'
import { AllData } from '../assets/data/Data'

export const Header = (props) => (
    <View style={styles.headerStyles}>
        <View></View>
        <View>
            <Text style={styles.headText}>{props.title}</Text>
        </View>
        <View>
            <Icon name='bell' size={25} color={Color.deepBlack} />
        </View>
    </View>
)

export const SearchBar = (props) => (
    <TouchableOpacity style={styles.searchBarContainer}>
        <Icon name={props.name} size={25} color={Color.deepGray} />
        <TextInput style={styles.input} placeholder={props.placeholder} />
    </TouchableOpacity>
)

export const DishDetails = (props) => {
    const { title, name, text, addres } = props;

    return (
        <View>
            <View style={styles.deliveryFlex}>
                <Text style={styles.boldTitle}>{title}</Text>
                <Icons name={'right'} size={24} color={Color.White} />
            </View>
            <View style={styles.addresContainer}>
                <Text style={styles.text}>{addres}</Text>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={{ fontWeight: 'bold' }}>{text} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const TextComp = (props) => (
    <View style={styles.textContainer}>
        <Text style={styles.textBold}>{props.text}</Text>
        <Text style={styles.subText}>{props.subText}</Text>
    </View>
)

export const RestrorentItem = (props) => {
    const { RestrorentData } = props
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                RestrorentData.map((data) => (
                    <View key={data.id} style={styles.itemContainer}>
                        <View style={styles.imgContainer}>
                            <Image source={{ uri: data.img }} style={styles.imgStyle} />
                        </View>
                        <View>
                            <Text style={styles.titleText}>{data.title}</Text>
                            <Text style={styles.priceText}>{data.price}</Text>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    )
}

export const TabViewData = () => {
    return (
        <>
            <FlatList data={AllData} renderItem={({ item }) => (
                <View key={item.id} style={styles.itemContainer}>
                    <View style={styles.imgContainer}>
                        <Image source={{ uri: item.img }} style={styles.imgStyle} />
                    </View>
                    <View>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={styles.priceText}>{item.price}</Text>
                    </View>
                </View>
            )} />
        </>
    )
}

const styles = StyleSheet.create({



    // Header comp Styels
    headerStyles: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        marginBottom: 15
    },
    headText: {
        fontSize: 25,
        color: Color.deepBlack,
        fontWeight: 'bold'
    },

    // Searchbar styles

    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.lightGray,
        marginHorizontal: 10,
        borderRadius: 15,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    input: {
        color: Color.deepGray,
        width: '90%',
        padding: 14
    },

    // DishDetails styles

    deliveryFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        width: 70,
        height: 35,
        borderRadius: 15,
        backgroundColor: Color.White,
        alignItems: 'center',
        justifyContent: 'center'
    },

    // RestrorentitemComp style
    itemContainer: {
        marginHorizontal: 8,
        marginBottom: 20,
        borderRadius: 10
    },
    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 10
    },

    imgContainer: {
        marginBottom: 10
    },
    titleText: {
        fontSize: 15,
        marginBottom: 8,
        color: Color.primary,
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: 15,
        color: Color.deepGray,
        fontWeight: 'bold'
    },

    // TextComp Styles

    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 20
    },
    textBold: {
        color: Color.deepBlack,
        fontSize: 18,
        fontWeight: 'bold'
    },
    subText: {
        fontSize: 16,
        color: Color.Red,
        fontWeight: 'bold'
    }

})