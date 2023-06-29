import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Schedule from '../screens/schedule';
import NewSchedule from '../screens/newschedule';

const Stack = createStackNavigator();

export default function ScheduleNavigation() {
    return (
        
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
    <Stack.Screen name="schedule" component={Schedule} />
      <Stack.Screen name="newschedule" component={NewSchedule} />

      </Stack.Navigator>
    );
}