import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

const App = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'light';

  // Theme-aware colors
  const themeColors = {
    background: isDarkMode ? '#121212' : '#F5F5F5',
    text: isDarkMode ? '#FFFFFF' : '#333333',
    accent: isDarkMode ? '#BB86FC' : '#6200EE',
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: themeColors.background}]}>
      <View style={styles.content}>
        {/* Title with animated styling */}
        <Text 
          style={[
            styles.title,
            {color: themeColors.text},
            styles.textShadow
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          Hello Everynyan!
        </Text>
        {/* Theme-aware image */}
        <Image
          source={require('./assets/logoicon.jpg')} // Replace with your image
          style={styles.image}
          resizeMode="contain"
          accessibilityLabel="Welcome illustration"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0.75,
    marginBottom: 40,
    textAlign: 'center',
  },
  image: {
    width: '80%',
    height: 250,
    maxWidth: 300,
    borderRadius: 16,
    overflow: 'hidden',
  },
  textShadow: {
    textShadowColor: 'rgba(243, 192, 9, 0.6)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  }
});

export default App;
