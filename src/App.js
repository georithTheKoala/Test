import './App.css';
import './css/Sidebar.css';
import React, { useEffect, useState } from 'react';
import './css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
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
      <div className="App">
        <Header />  
        <Sidebar />
        <main>
          <section className="content">  
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
          </section>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
