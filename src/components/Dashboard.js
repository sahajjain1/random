import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  background: #f9f9f9;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const Dashboard = () => {
  const projects = useSelector(state => state.projects.projects);

  return (
    <DashboardContainer>
      <h2>Project Management Dashboard</h2>
      <ProjectList>
        {projects.map(project => (
          <ProjectItem key={project.id}>
            <ProjectLink to={`/project/${project.id}`}>
              {project.name}
            </ProjectLink>
          </ProjectItem>
        ))}
      </ProjectList>
    </DashboardContainer>
  );
};

export default Dashboard;
