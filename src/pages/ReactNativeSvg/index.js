import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SvgFile from '../../assets/image/undraw_Online_learning_re_qw08.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Using SVG file in React Native</Text>
      <SvgFile width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
