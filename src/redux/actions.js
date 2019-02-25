let taskId = 0;
export const addTask = content => ({
  type: "ADD_TASK",
  id: taskId++,
  ...content
});

export const toggleTask = taskId => ({
  type: "TOGGLE_TASK",
  taskId
});

export const removeTask = taskId => ({
  type: "REMOVE_TASK",
  taskId
});

let groupId = 0;
export const addGroup = title => ({
  type: "ADD_GROUP",
  id: groupId++,
  title
});
