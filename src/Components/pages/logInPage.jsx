import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { LogIn } from '../../Api/user/logIn'

export default function LogInPage () {
  let userNameRef = React.createRef()
  let passwdRef = React.createRef()

  async function handleClick (e) {
    e.preventDefault()
    return await LogIn(userNameRef.current.value, passwdRef.current.value)
      .then(data  => localStorage.setItem('token', data.token))
      .catch(error => console.error(error))
  }
  
  return (
    <div className='bg-light'>
      <Container className="w-75">
        <Card className='my-3'>
          <Card.Body>
            <Form onSubmit={handleClick}>
              <Form.Group className='mb-3'>
                <Form.Label><b>Логин</b></Form.Label>
                <Form.Control
                  type='text'
                  ref={userNameRef}
                  required
                ></Form.Control>
              </Form.Group>

              <Form.Group className='mb-3 col'>
                <Form.Label><b>Пароль</b></Form.Label>
                <Form.Control
                  type='password'
                  ref={passwdRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button variant='primary' type='submit'>
                Войти
              </Button>
              <Button variant='secondary' type='submit' className='mx-2'>
                Зарегестрироваться
              </Button>
            </Form>
          </Card.Body>
        </Card>
     </Container>
     </div>
  )
}
