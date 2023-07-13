import React from 'react';
import Mycard from '../Mycard';
import Myfooter from '../components/Myfooter';
import SchoolBoard from '../components/SchoolBoard';
import Welcome from '../components/Welcome'
import { Container, Stack } from 'react-bootstrap';
import Image from '../images/bolaga.png';
import boardData from '../components/BoardData';
import MyTable from '../components/MyTable';


// import { Table } from 'react-bootstrap';
// const MyTable = ({ boardData }) => {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Category</th>
//           <th>Post</th>
//         </tr>
//       </thead>
//       <tbody>
//         {boardData.map((board) => (
//           <tr key={board.id}>
//             <td>{board.category}</td>
//             <td>{board.post}</td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };
// const table = document.createElement('table');
// const thead = document.createElement('thead');
// const tr = document.createElement('tr');
// const td = document.createElement('td');
// const tbody = document.createElement('tbody');
// const boardComponents = BoardData.map((board) => {
//   return (
//     <SchoolBoard category={board.category} post={board.post} key={board.id} />
//   )
// });
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