import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontSize } from '../config/fonts'

const Flex = () => {
  return <View style={styles.mainContainer}>
      <Text style={styles.firstTest}>My Property is Flex : 1</Text>
      <Text style={styles.secondTest}>My Property is Flex : 2</Text>
      <Text style={styles.thirdTest}>My Property is Flex : 3</Text>
    </View>;
}

export default Flex

const styles = StyleSheet.create({
    mainContainer :{
        flex: 1,
    },
    firstTest :{
        flex : 1,
        backgroundColor : "goldenrod",
        fontSize : 20,
    },
    secondTest :{
        flex : 2,
        backgroundColor : "olive",
        fontSize : 20,
    },
    thirdTest :{
        flex : 3,
        backgroundColor : "chocolate",
        fontSize : 20,
    }
})