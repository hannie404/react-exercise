import React from 'react';
import Mycard from '../Mycard';
import Myfooter from '../components/Myfooter';
import Welcome from '../components/Welcome'
import { Container, Stack } from 'react-bootstrap';
import Image from '../images/bolaga.png';
import boardData from '../components/BoardData';
import MyTable from '../components/MyTable';
import Product from '../components/Product';

function Home() {
  return (
    <div>
      <Welcome meassage='Annie' />
        <div className='d-flex row justify-content-center m-0'>
        <form className='form-control text-center w-50 m-5 p-4 bg-secondary text-light'>
        <h1>Board Table</h1>
        <MyTable boardData={boardData} />
        </form>
      </div>
      <Container className="d-flex justify-content-center mb-4">
          <Stack direction='horizontal' gap={3} className="flex-wrap d-flex justify-content-center">
            <Mycard image={ Image } />
            <Mycard image={ Image } />
            <Mycard image={ Image } />
            <Mycard image={ Image } />
          </Stack>
        <br></br>
      </Container>
      <Container className="d-flex justify-content-center mb-4">
        <Stack direction='horizontal' gap={3} className="flex-wrap d-flex justify-content-center">
          <Product image={ Image } />
          <Product image={ Image } />
          <Product image={ Image } />
        </Stack>
      </Container>
      <Myfooter />
    </div>
  )
}

export default Home