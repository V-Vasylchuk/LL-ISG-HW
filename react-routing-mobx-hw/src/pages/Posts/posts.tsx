import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { getPosts } from "../../services";
import { IPost } from "../../interfaces";
import { Post } from "../../components";
import './posts.style.scss';

function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getPosts(10).then(({ data }) => setPosts(data));
  }, []);

  return (
    <ul className={'ul_wrap'}>
      {posts.map(post =>
        <li key={post.id}>
          <Link to={`${post.id}`}>
            {post.title}
          </Link>
          <Routes>
            <Route path={`${post.id}`}
              element={<Post
                title={post.title}
                body={post.body}
                userId={post.userId}
                id={post.id}
                key={post.id} />} />
          </Routes>
        </li>
      )}
    </ul>
  );
}

export { Posts };
