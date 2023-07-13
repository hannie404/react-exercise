import React from 'react';
import { Table } from 'react-bootstrap';
import boardData from '../components/BoardData';

const MyTable = ({ boardData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Category</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        {boardData.map((board) => (
          <tr key={board.id}>
            <td>{board.category}</td>
            <td>{board.post}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;