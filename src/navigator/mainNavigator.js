import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile203786Navigator from '../features/UserProfile203786/navigator';
import Settings203785Navigator from '../features/Settings203785/navigator';
import Settings203783Navigator from '../features/Settings203783/navigator';
import SignIn2203781Navigator from '../features/SignIn2203781/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile203786: { screen: UserProfile203786Navigator },
Settings203785: { screen: Settings203785Navigator },
Settings203783: { screen: Settings203783Navigator },
SignIn2203781: { screen: SignIn2203781Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
