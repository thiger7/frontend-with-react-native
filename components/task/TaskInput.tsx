import React from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

interface TaskInputProps {
  setTaskText: (text: string) => void;
  taskText: string;
  handleSaveTask: () => void;
  isEditting: string | null;
}

const TaskInput = ({ taskText, setTaskText, handleSaveTask, isEditting }: TaskInputProps) => {
  return (
    <>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
        <Text style={styles.saveButtonText}>
          {isEditting ? "編集" : "追加"}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#ccceee",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default TaskInput;
