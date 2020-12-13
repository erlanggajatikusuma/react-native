import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri: `https://ui-avatars.com/api/?name=${email}`}}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>x</Text>
      </TouchableOpacity>
    </View>
  );
};
const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    console.log('Data Before send: ', data);
    if (button === 'Simpan') {
      axios
        .post('http://192.168.1.9:3004/users/', data)
        .then((res) => {
          console.log('res: ', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
        })
        .catch((err) => console.log('err: ', err));
    } else {
      axios
        .put(`http://192.168.1.9:3004/users/${selectedUser.id}`, data)
        .then((res) => {
          console.log('res update', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        })
        .catch((err) => console.log('err: ', err));
    }
  };

  const getData = () => {
    axios
      .get('http://192.168.1.9:3004/users/')
      .then((res) => {
        console.log('res get data: ', res);
        setUsers(res.data);
      })
      .catch((err) => console.log('err: ', err));
  };

  const selectItem = (item) => {
    console.log('selected item: ', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  const deleteItem = (item) => {
    console.log(item);
    axios
      .delete(`http://192.168.1.9:3004/users/${item.id}`)
      .then((res) => {
        console.log('res delete: ', res);
        getData();
      })
      .catch((err) => console.log('err delete: ', err));
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Local API (JSON Server)</Text>
      <Text>Masukkan Anggota Kabayan Coding</Text>
      <TextInput
        placeholder="Nama lengkap"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={(value) => setBidang(value)}
      />
      <Button title={button} onPress={submit} />

      {users.map((user) => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert('Peringatan', 'Anda yakin ingin menghapus ini ?', [
                {
                  text: 'Tidak',
                  onPress: () => console.log('Button tidak'),
                },
                {
                  text: 'Ya',
                  onPress: () => deleteItem(user),
                },
              ])
            }
          />
        );
      })}
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  wrapper: {padding: 20},
  text: {textAlign: 'center', marginBottom: 20},
  input: {
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
    borderWidth: 1,
  },
  avatar: {
    borderRadius: 100,
    width: 80,
    height: 80,
  },
  itemContainer: {flexDirection: 'row', marginTop: 30, marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
