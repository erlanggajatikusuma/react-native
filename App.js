import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReacNativeComponent from './StylingReactNativeCompionent'
import FlexBox from './FlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReacNativeComponent /> */}
        <FlexBox />
      </ScrollView>
    </View>
  )
}

export default App;