import { useState } from 'react';
import User from '../src/data/Data';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const filteredUsers = User.filter((user) => {
    const fullName =
      `${user.title} ${user.firstName} ${user.lastName} ${user.id}`.toLowerCase();
    return fullName.includes(searchValue.toLowerCase());
  });

  return (
    <div className="App">
      <header className="search-box">
        <input
          type="search"
          name="search"
          id="search"
          className="search"
          placeholder="Search by name..."
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </header>
      <main className="main">
        {filteredUsers.length === 0 ? (
          <p className="not-found">No matching users found.</p>
        ) : (
          filteredUsers.map((user, i) => {
            return (
              <div className="card">
                <div className="card-picture">
                  <img key={i} src={user.picture} alt="User Profile" />
                </div>
                <div className="card-title">
                  <p className="id">{user.id}</p>
                  <p className="title">
                    <span>{user.title}.</span> {''}
                    <span>{user.firstName}</span> {''}
                    <span>{user.lastName}</span>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}

export default App;
