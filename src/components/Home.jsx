import React from 'react';
import Mycard from '../Mycard';
import Myfooter from '../components/Myfooter';
import SchoolBoard from '../components/SchoolBoard';
import Welcome from '../components/Welcome'
import { Container, Stack } from 'react-bootstrap';
import Image from '../images/bolaga.png';
import BoardData from '../components/BoardData'

const boardComponents = BoardData.map((board) => {
  return (
    <SchoolBoard category={board.category} post={board.post} key={board.id} />
  )
});

function Home() {
  return (
    <div>
      <Welcome meassage='Annie' />
        <div className='d-flex row justify-content-center m-0'>
        <form className='form-control text-center w-50 m-5 p-4 bg-secondary text-light'>
          <h1>School Board</h1>
          {boardComponents}
        </form>
      </div>
      <Container>
        <Stack direction='horizontal' gap={3} className='d-flex justify-content-center flex-wrap'>
          <Mycard image={ Image } />
          <Mycard image={ Image } />
          <Mycard image={ Image } />
          <Mycard image={ Image } />
        </Stack>
        <br></br>
      </Container>
      <Myfooter />
    </div>
  )
}

export default Home