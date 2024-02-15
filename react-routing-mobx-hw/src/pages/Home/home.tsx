import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Main } from "../Main/main";
import { Posts } from "../Posts/posts";
import { Users } from "../Users/users";
import { NotFound } from "../NotFound/notFound";
import TodoList from '../ToDos/todos';
import './home.style.scss';

function Home() {
  return (
    <>
      <div className={'header'}>
        <Link to={'/'}>Main</Link>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/todos'}>ToDo</Link>
        <Link to={'/login'}>
          <button>Log Out</button>
        </Link>
      </div>
      <div className={'content'}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts/*" element={<Posts />} />
          <Route path="/users/*" element={<Users />} />
          <Route path='/todos/*' element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export { Home };
