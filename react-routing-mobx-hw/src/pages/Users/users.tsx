import React, { useEffect, useState } from 'react';
import { Link, Route, Routes} from 'react-router-dom';

import { IUser } from "../../interfaces";
import { User } from '../../components';
import { getUsers } from "../../services";
import './users.style.css';

function Users() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers(10).then(({ data }) => setUsers(data));
  }, []);

  return (
    <ul className={'ul_wrap'}>
      {users.map(user =>
        <li key={user.id}>
          <Link to={`${user.id}`}>{user.name}</Link>
          <Routes>
            <Route path={`${user.id}`}
              element={<User
                name={user.name}
                email={user.email}
                phone={user.phone}
                id={user.id}
                username={user.username}
                adress={user.adress}
                website={user.website}
                company={user.company}
                key={user.id} />} />
          </Routes>
        </li>
      )}
    </ul>
  );
}

export { Users };
