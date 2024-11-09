import TaskItem from "@/components/TaskItem";
import { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import { Icon } from "react-native-elements";

interface Task {
  id: string;
  text: string;
}

export default function HomeScreen() {
  const [taskText, setTaskText] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isEditting, setIsEditting] = useState<string | null>(null);

  console.log(taskText);

  const handleSaveTask = () => {
    if(!taskText.trim()) return;
    if (isEditting) {
      setTasks(
        tasks.map(task =>
          task.id === isEditting ? { ...task, text: taskText } : task,
        ),
      );
      setIsEditting(null);
    } else {
      const newTask = { id: Date.now().toString(), text: taskText };
      setTasks([...tasks, newTask]);
    }
    setTaskText("");
  };

  const handleEdit = (item: Task) => {
    setTaskText(item.text);
    setIsEditting(item.id);
  };
  
  const handleDelete = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderTask: ListRenderItem<Task> = ({ item }) => {
    return <TaskItem item={item} handleEdit={handleEdit} handleDelete={handleDelete} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODOアプリ</Text>
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

      <FlatList data={tasks} renderItem={renderTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
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
