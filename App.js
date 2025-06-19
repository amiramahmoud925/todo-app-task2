import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

export default function App() {
  const Data = [
  { id: '1', title: 'Finish UI task', description: 'Create layout for TODO app', completed: true },
  { id: '2', title: 'Study React Native', description: 'Review FlatList and useState', completed: false },
  { id: '3', title: 'Update resume', description: 'Add new Flutter project', completed: false },
  ];

  return (
    <View style={styles.container}>
         <Text style={{ marginBottom: 19, fontWeight: 'bold', fontSize: 35 }}>
        TODO APP</Text>

      <TextInput placeholder="Enter title" style={styles.input} />
      <TextInput placeholder="Enter description" style={styles.input} />

      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.7}>
        <Text style={{ ...styles.text, fontWeight: 'bold' }}>Save</Text>
      </TouchableOpacity>

      <View style={styles.dividerLine} />

      <View style={[styles.filterContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
        <TouchableOpacity style={[styles.filterBtn, styles.activeFilterBtn]}>
          <Text style={{ ...styles.filterText, fontWeight: 'bold', color: '#fff' }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ ...styles.filterText, fontWeight: 'bold' }}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ ...styles.filterText, fontWeight: 'bold' }}>Done</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              backgroundColor: item.completed ? '#d4edda' : '#f8d7da',
              borderRadius: 5,
              marginBottom: 5,
              marginTop : 10,
             flexDirection:'column'
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text style={{ marginTop: 5, fontStyle: 'italic' }}>
              Status: {item.completed ? 'Done' : 'Active'}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
