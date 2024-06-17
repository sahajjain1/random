const initialState = {
  projects: [
    {
      id: '1',
      name: 'Project 1',
      description: 'This is the first project',
    },
    {
      id: '2',
      name: 'Project 2',
      description: 'This is the second project',
    },
  ],
};
  
  const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PROJECT':
        return { ...state, projects: [...state.projects, action.payload] };
      case 'REMOVE_PROJECT':
        return { ...state, projects: state.projects.filter(project => project.id !== action.payload) };
      case 'UPDATE_PROJECT':
        return { ...state, projects: state.projects.map(project => project.id === action.payload.id ? action.payload : project) };
      default:
        return state;
    }
  };
  
  export default projectReducer;
  