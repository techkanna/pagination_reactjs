import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from './Post';
import { PaginationBar } from './PaginationBar';

export const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // pagination trick
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const setCurrentPageNumber = num => {
    setCurrentPage(num);
  };

  return (
    <div>
      <h2>Blog Pagination</h2>
      <ul>
        {currentPosts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            id={post.id}
            loading={loading}
          />
        ))}
      </ul>
      <PaginationBar
        totalPage={posts.length}
        postPerPage={postPerPage}
        currentNumber={setCurrentPageNumber}
      />
    </div>
  );
};
