import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Tab, TabView } from 'react-native-elements';



import { Header, SearchBar, TabViewData } from '../../reuse/Reuse'
import { Color } from '../../styles/Color'


export default function Menu() {

    return (
        <ScrollView style={styles.root}>
            <Header title={'Menu'} />
            <View style={styles.textWrapper}>
                <Text style={styles.ourFoodText}>Our Food</Text>
                <Text style={styles.specialText}>Special for you</Text>
            </View>
            <View style={{ marginVertical: 10 }}>
                <SearchBar placeholder={'Search your Menus'} name={'search'} />
            </View>

            <TabViewComp />
        </ScrollView>
    )
}


const TabViewComp = () => {
    const [index, setIndex] = React.useState(0);
    return (
        <View style={{ marginHorizontal: 10 }}>
            <Tab

                value={index} onChange={setIndex}
                indicatorStyle={{
                    backgroundColor: 'white',
                    height: 3,
                }}
                variant="primary"
            >
                <Tab.Item
                    title="All"
                    titleStyle={{ fontSize: 15 }}
                />

                <Tab.Item
                    title="Top of the Week"
                    titleStyle={{ fontSize: 12 }}
                />
                <Tab.Item
                    title="Newly Added"
                    titleStyle={{ fontSize: 12 }}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={{ backgroundColor: 'red', width: '95%', marginVertical: 10, marginRight: 10 }}>
                    <View>
                        <TabViewData />

                    </View>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                    <Text h1>Cart</Text>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: 'dodgerblue', width: '100%' }}>
                    <Text h1>Newly added</Text>
                </TabView.Item>
            </TabView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: Color.White
    },

    textWrapper: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    ourFoodText: {
        fontSize: 22,
        color: Color.deepGray
    },
    specialText: {
        fontSize: 35,
        color: Color.primary,
        fontWeight: 'bold'
    }
})