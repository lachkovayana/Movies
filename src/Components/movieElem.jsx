import React from 'react'
import { Card, Row, Col, Badge } from 'react-bootstrap'

export default function MovieElem(props) {
  return (
    <Card className='px-2 py-2'>
      <Row>
        <Col lg={2} md={4} sm={6} xs={12} className='my-auto'>
          <Card.Img
            src={props.movie.poster}
          />
        </Col>
        <Col lg={10} md={8} sm={6} xs={12} className='p-md-3'>
            <Row className='mx-0'>
              <Col xs={12} md={8}>
                <h6 className='mx-0 my-1 px-0'>{props.movie.name}</h6>
                <p className='my-4'>{props.movie.year}</p>
                <p>
                  {props.movie.country}{' '}&bull;{' '}
                  {props.movie.genres?.map(elem => (
                    <span>{elem.name} </span>
                  ))}
                </p>
              </Col>
              <Col xs={12} md={4} className='align-items-center d-flex p-md-3 justify-content-start justify-content-md-end'>
                <Badge bg='primary' className='border border-dark '>
                  Средняя оценка -
                </Badge>
              </Col>
            </Row>
        </Col>
      </Row>
    </Card>
  )
}
