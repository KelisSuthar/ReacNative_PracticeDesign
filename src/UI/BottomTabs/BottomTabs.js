import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home1 from '../Home/Home';
import Home2 from '../Home/Home2';
import Home3 from '../Home/Home3';
import Home4 from '../Home/Home4';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import FeatherIcons from 'react-native-vector-icons/Feather';
import ZocialIcons from 'react-native-vector-icons/Zocial';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const HomeIcon = (
  <FontistoIcons name="home" color={'black'} selectionColor="blue" />
);
const SearchIcon = (
  <FeatherIcons name="search" color={'black'} selectionColor="blue" />
);
const ReelIcon = (
  <ZocialIcons name="instagram" color={'black'} selectionColor="blue" />
);
const HearIcon = (
  <AntDesignIcons name="hearto" color={'black'} selectionColor="blue" />
);
const BottomTabs = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home1}
        options={{tabBarLabel: 'Home ',tabBarIcon: ({ color, size }) => (
            <FontistoIcons name="home" color={color} size = {size} selectionColor="blue" />
          ),}}
      />
      <Tab.Screen
        name="Home2"
        component={Home2}
        options={{tabBarLabel: 'Search', tabBarIcon: ({ color, size }) => (
            <FeatherIcons name="search" color={color} size = {size} selectionColor="blue" />
          ),}}
      />
      <Tab.Screen
        name="Home3"
        component={Home3}
        options={{tabBarLabel: 'Reels', tabBarIcon: ({ color, size }) => (
            <ZocialIcons name="instagram" color={color} size = {size} selectionColor="blue" />
          ),}}
      />
      <Tab.Screen
        name="Home4"
        component={Home4}
        options={{tabBarLabel: 'Chat', tabBarIcon: ({ color, size }) => (
            <AntDesignIcons name="hearto" color={color} size = {size} selectionColor="blue" />
          ),}}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
