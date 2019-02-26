let init = {
  tasks: [],
  groups: []
};

export default function counter(state = init, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const { id, groupId, title, status, date } = action;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id,
            title,
            groupId,
            status,
            date
          }
        ]
      };
    }
    case "ADD_GROUP": {
      const { id, title } = action;
      return {
        ...state,
        groups: [
          ...state.groups,
          {
            id,
            title
          }
        ]
      };
    }
    case "REMOVE_TASK": {
      const { taskId } = action;
      const index = state.tasks.findIndex(task => task.id == taskId);
      return {
        ...state,
        tasks: [...state.tasks.slice(0, index), ...state.tasks.slice(index + 1)]
      };
    }
    case "TOGGLE_TASK": {
      const { taskId } = action;
      const index = state.tasks.findIndex(task => task.id == taskId);

      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          {
            ...state.tasks[index],
            status: !state.tasks[index].status
          },
          ...state.tasks.slice(index + 1)
        ]
      };
    }

    default:
      return state;
  }
}
