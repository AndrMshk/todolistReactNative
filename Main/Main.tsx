import React, { FC, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MySvgComponent } from '../svg/MySvg';
import { MySvgComponent2 } from '../svg/MySvg2';

type MainPropsType = {}

type TaskType = { key: string, title: string, isDone: boolean }

export const Main: FC<MainPropsType> = ({}) => {

  const [tasks, setTasks] = useState<TaskType[]>(
    [
      { key: '1', title: 'HTML', isDone: true },
      { key: '2', title: 'React', isDone: true },
      { key: '3', title: 'ReactNative', isDone: false },
    ]);

  const [title, setTitle] = useState('');

  const render: ListRenderItem<TaskType> = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={[styles.item, { opacity: item.isDone ? 0.5 : 1 }]}
          onLongPress={() => removeTaskHandler(item.key)}
          onPress={() => changeTaskIsDoneHandler(item.key, item.isDone)}
        >
          <>
            <Text
              style={[styles.title, { textDecorationLine: item.isDone ? 'line-through' : 'none' }]}>{item.title}</Text>
            <Text style={styles.isDone}>{item.isDone ? 'done' : ''}</Text>
          </>
          <MySvgComponent />
        </TouchableOpacity>
      </View>
    );
  };

  const addTaskHandler = () => {
    if (title !== '') {
      const newTask: TaskType = {
        key: `${title}${tasks.length + 1}`,
        title,
        isDone: false,
      };
      setTasks([newTask, ...tasks]);
    }
    setTitle('');
  };

  const removeTaskHandler = (key: string) => {
    setTasks(tasks.filter(el => el.key !== key));
  };

  const changeTaskIsDoneHandler = (key: string, isDone: boolean) => {
    setTasks(tasks.map(el => el.key === key ? { ...el, isDone: !isDone } : el));
  };

  const updateTaskTitle = (key: string, title: string) => {
    setTasks([]);
  };

  return (
    <View>
      <View style={styles.header}>
        <TextInput value={title} onChangeText={setTitle} style={styles.input} />
        <TouchableOpacity onPress={addTaskHandler}><MySvgComponent2 /></TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={render}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 2,
  },
  input: {
    width: 200,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  isDone: {
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 2,
  },
});
