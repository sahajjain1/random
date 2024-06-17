import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const ProjectContainer = styled.div`
  padding: 2rem;
  background: #f9f9f9;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.3rem 0.6rem;
  background: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #c82333;
  }
`;

const AddTaskButton = styled(Button)`
  background: #007bff;

  &:hover {
    background: #0056b3;
  }
`;

const ProjectDetails = () => {
  const { id } = useParams();
  const project = useSelector(state => state.projects.projects.find(p => p.id === id));
  const tasks = useSelector(state => state.tasks.tasks.filter(t => t.projectId === id));
  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: { ...task, id: uuidv4(), projectId: id } });
  };

  const removeTask = (taskId) => {
    dispatch({ type: 'REMOVE_TASK', payload: taskId });
  };

  return (
    <ProjectContainer>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <h3>Tasks</h3>
      <TaskList>
        {tasks.map(task => (
          <TaskItem key={task.id}>
            {task.name}
            <Button onClick={() => removeTask(task.id)}>Delete</Button>
          </TaskItem>
        ))}
      </TaskList>
      <AddTaskButton onClick={() => addTask({ id: new Date().getTime().toString(), name: 'New Task' })}>Add Task</AddTaskButton>
    </ProjectContainer>
  );
};

export default ProjectDetails;
