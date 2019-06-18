import React from 'react';
import {StatusBar, View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {lifecycle} from 'recompose';
import {store, persistor} from './app/store';
import Navigator from './app/navigation/NavigatorContainer';
import styles from './app/styles/AppStyles';
import colors from './app/styles/colors';
import {appOperations} from './app/modules/app';
import {Notifications} from 'expo';

console.ignoredYellowBox = ['MenuContext', 'Deprecation warning'];

class App extends React.Component {
  render() {
    return (
      <MenuProvider>
        <View style={styles.rootStyle}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={colors.white}
          />
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Navigator/>
            </PersistGate>
          </Provider>
        </View>
      </MenuProvider>
    );
  }
};

const enhance = lifecycle({
  componentDidMount() {
    store.dispatch(appOperations.loadAssets());
    // Create daily notification
    const dailyNotification = {
      title: 'Daily reminder',
      body: 'Don\'t forget to update your financial state !',
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        icon: './app/assets/images/app-icon.png',
      },
    };
    const schedulingOptions = {
      time: new Date().getTime() + 1000,
      repeat: 'day',
    };

    Notifications.scheduleLocalNotificationAsync(dailyNotification, schedulingOptions);
  },
});

export default enhance(App);
