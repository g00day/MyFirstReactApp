//basic react.js
import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './styles.css';


function BookList() {
  return <TextHeader />
  return <PageHeader />
}

const TextHeader = () => (
  <div className="text-center">
    <h1 id="main-header">The best programming books ever!<span className="badge bg-primary">Arseniy's Opinion</span></h1>
    <h3 id="header-description">programming books...</h3>
  </div>
);

const PageHeader = () => (
    <header id="container">
      <div id="logo">
        <h2>Test<span className="badge bg-danger">React</span></h2>
      </div>
    </header>
);




ReactDom.render(<BookList />, document.getElementById("root"));