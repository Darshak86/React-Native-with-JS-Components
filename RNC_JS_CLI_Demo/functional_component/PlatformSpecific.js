import React from 'react';
import { Platform, StyleSheet, Text, ScrollView } from 'react-native';
import getColor from "../config/colors";

const PlatformSpecific = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.data}>OS</Text>
      <Text style={styles.value}>{Platform.OS}</Text>
      <Text style={styles.data}>OS Version</Text>
      <Text style={styles.value}>{Platform.Version}</Text>
      <Text style={styles.data}>isTV</Text>
      <Text style={styles.value}>{Platform.isTV.toString()}</Text>
      {Platform.OS === 'ios' && <>
        <Text style={styles.data}>isPad</Text>
        <Text style={styles.value}>{Platform.isPad.toString()}</Text>
      </>}
      <Text style={styles.data}>Constants</Text>
      <Text style={styles.value}>
        {JSON.stringify(Platform.constants, null, 2)}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  data :{
    color: getColor("RED"),
  },
  value: {
    fontWeight: '600',
    padding: 4,
    marginBottom: 8,
    color: getColor("BLACK"),
  }
});

export default PlatformSpecific;