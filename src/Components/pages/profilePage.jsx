import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import userPhoto from '../../resources/noPhoto.png'
import { loadProfileThunkCreator } from '../../reducers/user/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function ProfilePage() {
    const { profile } = useSelector(state => state.profilePage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadProfileThunkCreator())
        console.log(profile);   
    }, [dispatch])


    return (
        <div className='bg-light'>
            <Container className="w-75">
                <Card className='my-3'>
                    <Card.Body>
                        <Row>
                            <Col xs={12} lg={4}>
                                <Image src={userPhoto} thumbnail></Image>
                            </Col>
                            <Col xs={12} lg={8}>
                                <h1>Nick</h1>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><b>Email</b></Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><b>Ссылка на аватар</b></Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><b>ФИО</b></Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><b>Дата рождения</b></Form.Label>
                                        <Form.Control type="date" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label><b>Пол</b></Form.Label>
                                        <Form.Select>
                                            <option value="0">Мужской</option>
                                            <option value="1">Женский</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Button className='my-3' type='button'>Редактировать</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}