import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Advanced Data Protection Control (ADPC)</Text>
      <Text style={styles.paragraph}>
        ADPC is a proposed automated mechanism for the communication of users’ privacy decisions.
        It aims to empower users to protect their online choices in a human-centric, easy, and enforceable manner.
        ADPC also supports online publishers and service providers to comply with data protection and consumer protection regulations.
      </Text>

      <Text style={styles.subTitle}>Why ADPC?</Text>
      <Text style={styles.paragraph}>
        Reducing friction
        Replacing outdated banners
        You hate “cookie banners” too? ADPC would allow users to set their privacy preferences in their browser, plugin, or operating system and communicate them in a simple way – limiting friction in user interaction for providers and users alike, as foreseen or planned in various innovative laws.
      </Text>

      <Text style={styles.subTitle}>How can it help you?</Text>
      <Text style={styles.paragraph}>
        Are you tired of clicking cookie banners? ADPC enables you to automatically communicate your privacy preferences to websites.
        You can manage your privacy choices on your device, e.g., in your browser or operating system.
        Default settings can be set to communicate your choices without having your online experience interrupted, or you can set rules that determine when consent requests should be presented to you.
        All your decisions will be accessible through a central interface that you can edit when you want.
      </Text>

      {/* Add more content sections as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
});

export default AboutScreen;
