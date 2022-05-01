import { Card, Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'

export default function Details () {
  return (
    <div className='bg-light my-0 mx-auto'>
      <Container className='w-75'>
        <Card>
          <Row className='p-4'>
            <Col xs={3}>
              <Image
                width='400'
                fluid
                src='https://kinopoisk-ru.clstorage.net/146RpL269/11603fDD2/Ke0kHpjPz1gejJkZhNknpSqwjzFXjyvkdlCi_BZjCE9QDzrbjsNpjyZ2XxtumirKmMG5VHpN1rLnMggOJYkAlxjlOQ_Ns4cpS83hQKDFBuk22OpIJ9tGxTtA1rFXGnTzkK_yfkZblS-mx9oCZ6J3p_WYuFRPNMKWl38VxsnNvYrl_bTqzJey8PIEbMHo-ceRrt2LlZOeP7xmzU4QPvvgK_C_7tay6z1rrveKdq-XS5dphEScd3CKHzOH3f78jTXqtf24LtwDIkjy3MCdNEWPVd5xKwFrzpsYNhG2ZCJXrB8EZ0ry5n9tWz4Dunr3l-O_3YiwJLNE3h_n__EGhN0Z-m1l-OpUr6rItiCYeXi51z3-Bd_JE7oDyCpBCkhq03g7qPuWTh5_eaOyt96-Z9OfD-0c0FTbWIJjy2OV6uDlGWIBpXiOhJOm1H58kIEg-bOB-jX3NRN2c9R2ja4EmuNwS8gD2p6OR50fgjM2Vueb4xM1GJhcV3S2j08bAYIIKU1mmQ2QCrSzyqCCEEwdtLWnGQa1Pz3_AqvcphEqlCZXYLvES842CofRR5bXUg6nN5uzRezsxBskKtszg1GqrGWtLp2VNNLUq96A-rgERVAdD2Eaxf89E46jMM7FLpiW66QTzMu2Vr7_yb-u897yg8OLD-0IlLz7BNLfy2fl5nB1pdIlPSRipGMWwK5U0GnkCasphsEfEed60yRSlY5Eml9gR2SH7sL-6-mjGveu5pvD1-9hBOwYP5g-4x8jYeZgJWnSpdUI_iCDomwGGFwdJJEL5R5pExWjvvco7sW-hJpvFEtci2Z6vltVM6YvpsL_s6vjRayQ1HuUKhPnO9kiYKXZer05bJ40Kz5YLgicYdC1Wz1aCf-dm5LHnArVdpSSh4yjwKciPopH8TNiNzaaD_cD3zXsrMz7IKrr_2sptizBnUb5eZBexGOyKCaAyDHASQMFlnWjAVe-Q-gmCfZUHhP0i_AXZnL2b33fflda8is3q7NF4Mh8Z3ja6ytzbbZ0xaGqhVXkUhjHmiCe-GxxyMnXDVppdxmH0sPYZpHe_BY_FAPUjzLGjrO5b27DdtKX268X7ejIvLNQop8Pr0kykF1Nru2peArEX8q8_njknVBxJwmWkRsF90Y3VNK1otgGP9xPIBPaxrYv5bNeZzYOD6N7XxWMtPBTKFIDAwfRGnRxaQ4JqfDCrEOu8IpMaEGI2as9DrEDpUeGj3R-mV50VlMMS0CH5t4aMw3j0rs6ii_PazPN-ES8T5QC7z9XJe6E8dnGERX82vTDzuwSXGxJdEW7rYJ1072Xts-shukGhJpzaE90t1q-Pg9BqyLbzgLv09_DDeRAQFtArnOP_81-KI29mj0lLJq0w9qknsSYebQVi6VWWbNpo27XMGrVJvQ2G9y3OIt63l7jyVuK32q6P2tbw90cDBjbVJqfK4Mh0iDBGYIp6WBG3LMy2Goo9JHoWas5FmnnEatWu3TeFUac5rOEm3wzLlYC4-0rCvc2QntznxfVCOy0-4Saa2PvjRowyTnWvYUU1pBbYoAuOEitcGnHkZJh9xGTSotAKuGGGFLvXCvkOx5ucqed4_o_Vkbz4yejEXzcsDfYHgMf-x2O5IVlnhGpfNrMK7b88jQA_fwJE3Fi-esx10qnmNrJDuTybyS_SJfyIgJDnc-Swy6eJ--bb-0MQIwnSFL7bz-VNujV2XqRaZTaFOOO3Gr8PLXcDQt9-pUnzZ_Wn2jmJVZsHnfoH4TvnpIa1_FH_ttKHu_njxfxFIB8z6SiLx-jofaAlTmepSE8gsQ7UrR-qOwd8JkH-fZBq0F30lMw7pkaHJ7HhL9cB85GKtN5z6ZzKpb_m2NfCehM0KOEUq-DK12KrOUhojm58PbQ366smiBARVBh-3VaBS-lG5aLaFYZssCeR_Qf3C_KzrZHva8Sp7ZqmzMPE13wRIDLdL4TH1elYjABTSrNPTDigNMO7HJ0AP1YZVM9Yl2_IU86LzAyzT7Elosko0SD4n6Gh82HjjfmZtsjV695bJzIs7CiYzt_GZKgqW3WYdWQSsSXWtRKdGTx-FkvIQ7lg5H7mhNMNpWCwB5TnE_wt_Ku3k-9t37DPkbvnydPOawU0M840p-_m1mmIJVp4unduO5YH8L0zrDsjWy9oykaWQsFX4rzqCbRXoRaX1TDjAMuwpZ7dUe-bwp2M7uvg8kEHCAXMB4vi-eF5nxZpcJF7WTyEN9qoOrUUIXsaX91apETJWdus3Da4Q7kgsv85wQLLsom04Xf6qcKGgM_n9txdBjYb4heP-cj1QoMBdkCEeWwljSLwqSayJDhKI030SJ9s5mjcvNwbpnSmHpjdN-kc0KuamNRw96_du4_M2O_RRTQRJNUGo8j8w1aiKXJAuFVdBY8k2ogLpCAOaQ1M6Um5eeNR-ZPEOZlpsRi4zxPXIuqRipf9aMCZ7bCs7PHo50USJDfuDIbe4cpfmhVTcZNHehqmFvKzC6AUL3sBS_tJuGzBSsGh5zqKUK06gdoZ3T_cl6Kw20D0vP6atObGzNFvDzM0_DS57cT5R5k0dXWkaFIgrirEnhCmAQFBH0rKTZZg0XHutdkRq0uaK4_8EP0ay7m4q-9s2Yjqp5TM18DCYTctM_E6g-nm90ypEU94mmZHFqEt5Y0ihA8yaTxM5VeTYuh03ab8P49RpTqY2hLYLt6Tmb38cda__qef9OnO9lkoATvsAZ_o6d5npiFWcZNjQwquGPeeG4MNPm86b_lHkX7aU_OtyxWZZoMrl9gK_CH3nJ2u2EjUjOyCucrXyNx7FQMf4zGDx__zW6cpYHiSRHIJgTPXjgmCNw5wFUrJappCzUHPjcY8oXOQKbPDBtIA07uqmN5V657MloLGwsHhazQEKO06vv3L-WK6H0ZWj1d-C7UiyJwDqhMDdS5l7mWiRO9226P2PqdMnhix2iL0Gu6lo4zzdMaA9YKqx9bOx0wJLBjuIoLiyvs'
              ></Image>
            </Col>
            <Col xs={9}>
              <Row>
                <span className='h1'>Побег из Шоушенка (1994)</span>
              </Row>
              <Row>
                <span>
                  Несправедливо осужденный банкир готовит побег из тюрьмы. Тим
                  Роббинс в выдающейся экранизации Стивена Кинга
                </span>
              </Row>
              <Row>
                <span className='h2 mt-5'>О фильме</span>
              </Row>
              <Row>
                <ListGroup style={{ width: '930px' }} variant='flush'>
                  <ListGroup.Item className='ListItem'>
                    <span style={{ float: 'left' }}>Год производства</span>
                    <span>
                      <strong style={{ float: 'right' }}>1994</strong>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className='ListItem'>
                    <span style={{ float: 'left' }}>Страна</span>
                    <span>
                      <strong style={{ float: 'right' }}>США</strong>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className='ListItem'>
                    <span style={{ float: 'left' }}>Жанр</span>
                    <span>
                      <strong style={{ float: 'right' }}>драма</strong>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className='ListItem'>
                    <span style={{ float: 'left' }}>Время</span>
                    <span>
                      <strong style={{ float: 'right' }}>142 мин.</strong>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className='ListItem'>
                    <span style={{ float: 'left' }}>Слоган</span>
                    <span>
                      <strong style={{ float: 'right' }}>
                        "Страх - это кандалы. Надежда - это свобода"
                      </strong>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className='ListItem'>
                    <span style={{ float: 'left' }}>Режиссер</span>
                    <span>
                      <strong style={{ float: 'right' }}>Фрэнк Дарабонт</strong>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className='ListItem'>
                    <span style={{ float: 'left' }}>Бюджет</span>
                    <span>
                      <strong style={{ float: 'right' }}>$ 25 000 000</strong>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className='ListItem'>
                    <span style={{ float: 'left' }}>Сборы в мире</span>
                    <span>
                      <strong style={{ float: 'right' }}>$ 28 418 687</strong>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className='ListItem'>
                    <span style={{ float: 'left' }}>Возраст</span>
                    <Badge
                      bg='secondary'
                      style={{ width: '40px', float: 'right' }}
                    >
                      16 +
                    </Badge>
                  </ListGroup.Item>
                </ListGroup>
              </Row>
            </Col>
          </Row>
          <Row>
            <span className='h2 m-3'>Отзывы и оценки</span>
          </Row>
          <Card className='m-3' bg='light'>
            <Card.Header>Добавить отзыв</Card.Header>
            <Card.Body>
              <Form.Group controlId='listCreaterName'>
                <Form.Label>Текст отзыва</Form.Label>
                <Form.Control as='textarea'></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3 col'>
                <Form.Label>
                  <b>Оценка</b>
                </Form.Label>
                <Form.Control type='text' required></Form.Control>
              </Form.Group>

              <Form.Group className='mt-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Оставить отзыв анонимно' />
              </Form.Group>
              <Button type='submit' variant='primary' className='mt-2'>
                Сохранить
              </Button>
            </Card.Body>
          </Card>
        </Card>
      </Container>
    </div>
  )
}
