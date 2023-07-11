import React from 'react';
import {Switch,Route,Routes,Link} from 'react-router-dom';
import {Layout,Typography,Space } from 'antd';
import {Navbar,Homepage,Cryptodetails,Cryptocurrencies,News} from './components'
import './App.css'


const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="cryptocurrencies/*" element={<Cryptocurrencies/>}/>
                <Route path="crypto/:coinId/*" element={<Cryptodetails/>}/>
                <Route path="news/*" element={<News/>}/>
              </Routes>
              </div>
            </Layout>
            <div classNAme="footer">
            <Typography.Title level={5} style={{background:'#001529',color: 'white', textAlign: 'center'}}>
              Cryptoverse <br/>
              All rights reserved <br/> <br/>
              <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
              </Space>
            </Typography.Title>
            
          </div>
        </div>
        
        
    </div>
  );
}
 export default App;
