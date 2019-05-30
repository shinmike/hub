import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a href="https://www.bestbuy.ca/en-CA/home.aspx" target="_blank" rel="noopener noreferrer">
        <img src="https://images.bbycastatic.ca/sf/images/common/main-logo.svg" width="120" height="120" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Preorder</a>
            </li>
          </ul>
        </div>
    </nav>
      )
    }
    
export default Nav