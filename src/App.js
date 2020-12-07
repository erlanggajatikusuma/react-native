import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent'
import FlexBox from './pages/FlexBox';
import Positon from './pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <Positon />
      </ScrollView>
    </View>
  )
}

export default App;