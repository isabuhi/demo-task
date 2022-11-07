import React, {useState, useEffect} from 'react';
import { useAccordionButton } from 'react-bootstrap';

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

  const [ userName, setUserName] = useState("")
  const [ password, setPassword] = useState("")

  

  

  return <div className="show-fake-browser login-page">
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Brand>
            <a style={{ color: '#fff' }}>Brand</a>
          </Navbar.Brand>
        </Navbar>
      </Header>
      <Content>
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
                  <Form.Control onChange={(value)=>{setPassword(value)}} name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary" onClick={()}>Sign in</Button>
                    <Button appearance="link">Forgot password?</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
      <Footer></Footer>
  </div>
};

export default App;
