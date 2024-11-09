import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

interface Task {
  id: string;
  text: string;
}

interface TaskItemProps {
  item: Task;
  handleEdit: (item: Task) => void;
  handleDelete: (id: string) => void;
}

const TaskItem = ({ item, handleEdit, handleDelete }: TaskItemProps) => {
  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Icon name="edit" color="#4caf50" onPress={() => handleEdit(item)}>
            編集
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Icon name="delete" color="#f44336">
            削除
          </Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
  },
  taskText: {
    maxWidth: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default TaskItem;
