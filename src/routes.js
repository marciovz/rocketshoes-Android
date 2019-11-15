import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
      initialRouteName: 'Main',
    }
  )
);

export default Routes;
