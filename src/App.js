import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent'
import FlexBox from './pages/FlexBox';
import Positon from './pages/Position';
import PropsDinamis from './pages/PropsDimamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Positon /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        <Communication />
      </ScrollView>
    </View>
  )
}

export default App;