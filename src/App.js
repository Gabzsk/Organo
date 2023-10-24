import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';


function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const whenUserAdded = (collaborator) => {

    setCollaborators([...collaborators, collaborator])
  }
  console.log(collaborators.filter(c => c.name === "Front-End"))
  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} whenRegistered={collaborator => whenUserAdded(collaborator)} />
      {teams.map(team => {
        return (<Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={collaborators.filter(collaborator => collaborator.time == team.name)}
        />)
      })}
    </div>
  );
}

export default App;
