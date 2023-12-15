import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AntIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6Icons from 'react-native-vector-icons/FontAwesome6';

import {
  ChatsNavigation,
  GroupsNavigation,
  SettingsNavigation,
  SearchNavigation
} from "../stacks";
import { screens } from "../../utils";
import { styles } from "./BottomTabNavigation.styles";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: "#646464",
        tabBarActiveTintColor: "#0891b2",
        tabBarIcon: ({ color, size }) => screenIcon(route, color, size),
      })}
    >
      <Tab.Screen
        name={"perfil"}
        component={ChatsNavigation}
        options={{ title: "perfil", }}
      />

      <Tab.Screen
        name={screens.tab.chats.root}
        component={ChatsNavigation}
        options={{ title: "Chats", }}
      />

      <Tab.Screen
        name={screens.tab.search.root}
        component={SearchNavigation}
        options={{ title: "Search", }}
      />

      <Tab.Screen
        name={screens.tab.groups.root}
        component={GroupsNavigation}
        options={{ title: "Grupos" }}
      />
      <Tab.Screen
        name={screens.tab.settings.root}
        component={SettingsNavigation}
        options={{ title: "Ajustes" }}
      />
    </Tab.Navigator>
  );
}

function screenIcon(route, color, size) {
  let iconName;
  let as;

  if (route.name === screens.tab.chats.root) {
    iconName = "chatbox-outline";
    as = Ionicons
  }

  if (route.name === 'perfil') {
    iconName = "user";
    as = AntIcon
  }
  if (route.name === screens.tab.search.root) {
    iconName = "person-through-window";
    as = FontAwesome6Icons
  }

  if (route.name === screens.tab.groups.root) {
    iconName = "account-group";
    as = MaterialCommunityIcons
  }
  if (route.name === screens.tab.settings.root) {
    iconName = "cog-outline";
    as = MaterialCommunityIcons
  }

  return (
    <Icon
      as={as}
      name={iconName}
      color={color}
      size={size}
    />
  );
}