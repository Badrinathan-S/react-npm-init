import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import baseUrl from "../../../baseUrl";
import { postThunk } from "../recuder/postThunk";
import Loader from "./Loader";
import { connect } from "react-redux";

const Dashboard = ({ Post, getPost }) => {
  const [loading, setLoading] = useState(Post.loading);
  const [posts, setPosts] = useState(Post.posts);

  useEffect(() => {
    setLoading(Post.loading)
    setPosts(Post.posts)
  }, [Post.posts])

  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
                <td>
                  <Button variant="primary">Edit</Button>{" "}
                  <Button variant="danger">Delete</Button>
                </td>
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
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    Post: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: () => {
      dispatch(postThunk());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);