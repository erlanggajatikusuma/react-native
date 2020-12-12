import React from 'react';
import {View, ScrollView} from 'react-native';
import CallAPIAxios from './pages/CallAPIAxios';
// import CallAPIVanilla from './pages/CallAPIVanilla';
// import ReactNativeSvg from './pages/ReactNativeSvg';
// import SampleComponent from './pages/SampleComponent';
// import StylingComponent from './pages/StylingComponent'
// import FlexBox from './pages/FlexBox';
// import Positon from './pages/Position';
// import PropsDinamis from './pages/PropsDimamis';
// import StateDinamis from './pages/StateDinamis';
// import Communication from './pages/Communication';

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
        {/* <Communication /> */}
        {/* <ReactNativeSvg /> */}
        {/* <CallAPIVanilla /> */}
        <CallAPIAxios />
      </ScrollView>
    </View>
  );
};

export default App;
