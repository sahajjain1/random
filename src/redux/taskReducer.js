const initialState = {
  tasks: [
    {
      id: '1',
      projectId: '1',
      name: 'Task 1',
    },
    {
      id: '2',
      projectId: '1',
      name: 'Task 2',
    },
    {
      id: '3',
      projectId: '2',
      name: 'Task 3',
    },
  ],
};
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'REMOVE_TASK':
        return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
      case 'UPDATE_TASK':
        return { ...state, tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task) };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  