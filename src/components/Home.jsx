import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../baseUrl";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // async function result () {
    axios
      .get(`${baseUrl}/posts`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    // }
  }, []);

  return (
    <>
      <Table striped bordered hover responsive="lg" variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>UserId</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.userId}</td>
              <td><Button variant="primary">Edit</Button>{' '}<Button variant="danger">Delete</Button></td>
            </tr>
          ))}
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
