import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { loadMoviesThunkCreator } from '../../reducers/movies/actions'
import MovieElem from '../movieElem'
import { Pagination } from 'react-bootstrap'
import {  Link } from 'react-router-dom'

export default function MoviesPage () {
  const { movies } = useSelector(state => state.moviesPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadMoviesThunkCreator())
  }, [dispatch])

  let active = movies.pageInfo?.currentPage
  let items = []

  for (let number = 1; number <= movies.pageInfo?.pageCount; number++) {
    items.push(
      <Pagination.Item
        as={Link}
        to='/login'
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    )
  }

  return (
    <div className='bg-light'>
      <Container className='w-75 py-3'>
        {movies.movies?.map(elem => (
          <MovieElem movie={elem} key={elem.id} />
        ))}
        <Pagination className='my-3'>{items}</Pagination>
      </Container>
    </div>
  )
}
