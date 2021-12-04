/* eslint-disable react/prop-types */
import React from 'react';
import {
  StatusBar as RNStatusBar,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {SafeAreaView} from 'react-native-safe-area-context';

const defaultStyle = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  contents: {
    flex: 1,
    alignItems: 'center',
  },
});

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? getStatusBarHeight() : RNStatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: 'black',
  },
});

export function StatusBar() {
  return (
    <View style={styles.statusBar}>
      <RNStatusBar
        translucent
        backgroundColor={'black'}
        barStyle="light-content"
      />
    </View>
  );
}

export function ScreenWrapper({children}) {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={defaultStyle.root}>
        <View style={defaultStyle.contents}>{children}</View>
      </SafeAreaView>
    </>
  );
}
