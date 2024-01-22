import React, { useState } from 'react';
import { View, FlatList, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const BLEDeviceList = ({ devices }) => {
  const [consents, setConsents] = useState({}); // State to manage switch toggles

  const toggleConsent = (deviceName) => {
    setConsents(prevConsents => ({
      ...prevConsents,
      [deviceName]: !prevConsents[deviceName],
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => console.log('Item clicked', item)}>
        <Text style={styles.title}>{item}</Text>
      </TouchableOpacity>
      <Switch
        value={consents[item] || false}
        onValueChange={() => toggleConsent(item)}
      />
    </View>
  );

  return (
    <FlatList
      data={devices}
      renderItem={renderItem}
      keyExtractor={item => item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
  },
});

export default BLEDeviceList;
