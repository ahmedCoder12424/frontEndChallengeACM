import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

import{Table} from"antd";
import
{ Avatar }
from
"antd"
;

function App() {



  const url = "https://random-data-api.com/api/v2/users?size=10";

  const[data, setUserData] = useState([]);

 

  useEffect(() => {
    fetchData();
  }, []);




  
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },

    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
      
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },

    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (dataIndex, record) =>  <Avatar src={dataIndex} alt={record.name} />
    },
  ];


  const [dataSource, setList] = React.useState([]);

  const fetchData = async () => {

    try{

      const response =  await fetch("https://random-data-api.com/api/v2/users?size=10")
      const userData = await response.json()


       
      setUserData(userData);

      const newList = [];

      setList(newList);

      const peopleList = []
      data.map((dataObj, index) => {


        console.log(dataObj.first_name);

         peopleList.push(  { 
          first_name: dataObj.first_name, 
          last_name: dataObj.last_name, 
          username: dataObj.username,
          email: dataObj.email,
          avatar: dataObj.avatar
        
           } );
      
      
      });

      setList(peopleList);
      
    }
    catch(error){

      console.log("Failed to fetch data", error)
    
    }

 

  }


 
  console.log(dataSource);


  return (
    <div className="App">
      <header className="App-header">

      <h1>ACM Frontend Interview Challenge</h1>

      <button onClick={fetchData} >Fetch Data</button>

        <Table 
          dataSource={dataSource} 
          columns={columns}> 
        </Table>

  
           
        
    
      </header>
    </div>
  );
}

export default App;
