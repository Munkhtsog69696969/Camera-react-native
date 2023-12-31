import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import CameraComponent from './Camera';
import Gallery from './Gallery';

const AllStacks=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='Camera' component={CameraComponent}/>
      <Stack.Screen
        name='Gallery' 
        component={Gallery}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <Button 
              title="Upload" 
            />
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
        <AllStacks/>
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    position:"relative",
  }
});
