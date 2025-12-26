import React from 'react';
import { Button, Text, View } from 'react-native';

const Home = ({navigation}:any) => {
  return (
    <View>
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Profile Screen"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
};

export default Home;