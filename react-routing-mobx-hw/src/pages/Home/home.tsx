import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './home.style.css';
import { Main } from "../Main/main";
import { Posts } from "../Posts/posts";
import { Users } from "../Users/users";
import { NotFound } from "../NotFound/notFound";

function Home() {
  return (
    <>
      <div className={'header'}>
        <Link to={'/'}>Main</Link>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/login'}>
          <button>Log Out</button>
        </Link>
      </div>
      <div className={'content'}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts/*" element={<Posts />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export { Home };
