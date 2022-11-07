import React, {useState, useEffect} from 'react';
import {register, logIn} from "../src/core/index"

import {
  Container,
  Header,
  Content,
  Footer,
  Form,
  ButtonToolbar,
  Button,
  Navbar,
  Panel,
  FlexboxGrid
} from 'rsuite';


const App = () => {

  const [ userName, setUserName] = useState(null)
  const [ password, setPassword] = useState(null)
  const [ confimPassword, setConfimPassword] = useState(null)

  const [toggleSignIn, setToggleSignIn] = useState(true)

  const handleRegister = () =>{
    if(userName && password && confimPassword && (password === confimPassword) ){
       register(userName, password)
    }

  }
  const handleLogin = () =>{
    if(userName && password ){
       logIn(userName, password)
    }

  }



  let status =  JSON.parse(localStorage.getItem("verification")).status
  

  return <>
  {status? <div> Blogs</div>:<div className="show-fake-browser login-page">
      
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Brand>
            <a style={{ color: '#fff' }}>Brand</a>
          </Navbar.Brand>
        </Navbar>
      </Header>
      <Content>
        {toggleSignIn? <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel style={{marginTop : "150px"}} header={<h3>Register</h3>} bordered>
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Username or email address</Form.ControlLabel>
                  <Form.Control onChange={(value)=>{setUserName(value)}} name="name" />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control onChange={(value)=>{setPassword(value)}} name="password"  autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Confirm Password</Form.ControlLabel>
                  <Form.Control onChange={(value)=>{setConfimPassword(value)}} name="password"  autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary" onClick={()=>{handleRegister()}}>Sign in</Button>
                    <Button appearance="link">Forgot password?</Button>
                    <Button appearance="primary" onClick={()=>{setToggleSignIn(!toggleSignIn)}}>{!toggleSignIn? "Register": "Login"}</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>:
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel style={{marginTop : "150px"}} header={<h3>Login</h3>} bordered>
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Username or email address</Form.ControlLabel>
                  <Form.Control onChange={(value)=>{setUserName(value)}} name="name" />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control onChange={(value)=>{setPassword(value)}} name="password"  autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary" onClick={()=>{handleLogin()}}>Log in</Button>
                    <Button appearance="link">Forgot password?</Button>
                    <Button appearance="primary" onClick={()=>{setToggleSignIn(!toggleSignIn)}}>{!toggleSignIn? "Register": "Login"}</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        }
                

      </Content>
      <Footer></Footer>
  </div>
}
  </>
};

export default App;
