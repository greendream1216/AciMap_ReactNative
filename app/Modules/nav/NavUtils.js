import React from 'react'
import DrawerContent from './components/DrawerContent'
import TopRightButton from './components/TopRightButton'

export const getNavigationOptions = (title, backgroundColor, color) => ({
  title,
  headerTitle: title,
  headerStyle: {
    backgroundColor
  },
  headerTitleStyle: {
    color,
    fontFamily: 'Montserrat-Bold'
  },
  headerTintColor: color
})

export const getNavigationOptionsWithAction = (title, backgroundColor, color, headerLeft) => ({
  title,
  headerStyle: {
    backgroundColor
  },
  headerTitleStyle: {
    color,
    fontFamily: 'Montserrat-Bold'
  },
  headerTintColor: color,
  headerLeft
})

export const getDrawerNavigationOptions = (title, backgroundColor, titleColor, drawerIcon) => ({
  title,
  headerTitle: title,
  headerStyle: {
    backgroundColor
  },
  headerTitleStyle: {
    color: titleColor,
    fontFamily: 'Montserrat-Bold'
  },
  headerTintColor: titleColor,
  drawerLabel: title,
  drawerIcon,
  headerRight: <TopRightButton />
})

export const getDrawerConfig = (drawerWidth, drawerPosition, initialRouteName, drawerRoutes) => ({
  drawerWidth,
  drawerPosition,
  initialRouteName,
  contentComponent: ({navigation}) => <DrawerContent navigation={navigation} routes={drawerRoutes} />
})
