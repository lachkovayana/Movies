import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Card, Row } from 'react-bootstrap'
import { RegisterUserRequest } from '../../Api/user/register'

export default function RegistrationPage () {
  let nameRef = React.createRef()
  let genderRef = React.createRef()
  let userNameRef = React.createRef()
  let emailRef = React.createRef()
  let passwdRef = React.createRef()
  let dateRef = React.createRef()

  async function handleClick (e) {
    e.preventDefault()
    try {
      await RegisterUserRequest(
        userNameRef.current.value,
        nameRef.current.value,
        passwdRef.current.value,
        emailRef.current.value,
        dateRef.current.value,
        parseInt(genderRef.current.value)
      )
    } catch (error) {
      console.log(error, 'registration error')
    }
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
              <Row>
                <Form.Group className='mb-3 col'>
                  <Form.Label><b>Пароль</b></Form.Label>
                  <Form.Control type='password' required></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3 col'>
                  <Form.Label><b>Подтверждение пароля</b></Form.Label>
                  <Form.Control
                    type='password'
                    ref={passwdRef}
                    required
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group type='email' className='mb-3 col'>
                  <Form.Label><b>Email</b></Form.Label>
                  <Form.Control
                    type='text'
                    ref={emailRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3 col'>
                  <Form.Label><b>ФИО</b></Form.Label>
                  <Form.Control type='text' ref={nameRef} required></Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className='mb-3 col'>
                  <Form.Label><b>Дата рождения</b></Form.Label>
                  <Form.Control type='date' ref={dateRef} required></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3 col'>
                  <Form.Label><b>Пол</b></Form.Label>
                  <Form.Select ref={genderRef}>
                    <option value='0'>Мужской</option>
                    <option value='1'>Женский</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Button variant='primary' type='submit'>
                Зарегестрироваться
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
