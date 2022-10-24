import './App.css';
import './css/Sidebar.css';
import React, { useEffect, useState } from 'react';
import './css/bootstrap.min.css';
import { ListGroup, Table } from 'react-bootstrap';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchApi(){
      const result = await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(result.data)
    }
    fetchApi()
  }, [data]) 

  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <div className="sidebar .sidebar-collapse">
          <ListGroup>
            <ListGroup.Item className="nav-item text-dark">
              <a className="nav-link" href="#">Dashboard</a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item text-dark">
              <a className="nav-link" href="#">Info</a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item text-dark">
              <a className="nav-link" href="#">Settings</a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item text-dark">
              <a className="nav-link" href="#">Notifications<span className="notification">2</span></a>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="content">  
          <Table bordered size="sm" variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>E-mail</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {
                data && data.map((person, index) => {
                  return(
                    <tr key={index}>
                      <td className="index">{person.id}</td>
                      <td>{person.name}</td>
                      <td>{person.username}</td>
                      <td>{person.email}</td>
                      <td>{person.phone}</td>
                    </tr>
                  )
                })
              }
            </tbody>
            </Table>
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
