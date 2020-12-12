import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios';

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     setDataUser(json.data);
    //   });
    axios
      .get('https://reqres.in/api/users/3')
      .then((result) => {
        console.log(result.data);
        setDataUser(result.data.data);
      })
      .catch((err) => console.log('err; ', err));
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application.json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log('post response: ', json);
    //     setDataJob(json);
    //   });
    axios
      .post('https://reqres.in/api/users', dataForAPI)
      .then((result) => {
        console.log(result);
        setDataJob(result.data);
      })
      .catch((err) => console.log('err: ', err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Axios</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response Get Data</Text>
      {dataUser.avatar.length > 0 && (
        <Image
          styles={styles.avatar}
          source={{uri: 'https://reqres.in/img/faces/3-image.jpg'}}
        />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {height: 100, width: 100, borderRadius: 100},
});
