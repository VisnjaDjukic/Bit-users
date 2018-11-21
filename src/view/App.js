import React, { Fragment } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { Header } from "./partials/Header"
import { Footer } from "./partials/Footer"

import { UserList } from "./users/UserList"
// import { UserCard } from "./users/UserCard"
import { getData } from "../services/UserService"


const App = () => {

  return (
    <Fragment>

      <Header />
      <main className="container clearfix">
        {/* <UserCard list={getData} /> */}
        <UserList className="profile" list={getData()} />
      </main>
      <Footer />
    </Fragment>

  );
}

export default App;
