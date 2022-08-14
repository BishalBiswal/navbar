import React from 'react'

const App = () => {
  return (
    <>
      <section className='navbar'>
        <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Menu</button>
        <h2>My Company</h2>
        <div className='right'>
          <button className='btn btn-danger'>Profile</button>
          <button className='btn btn-danger'>helpdesk</button>
        </div>
      </section>

      <section>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <button className='btn btn-warning'>home</button>
            <button className='btn btn-warning'>About Us</button>
            <div class="dropdown">
              <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Pants</a></li>
                <li><a className="dropdown-item" href="#">Shirts</a></li>
                <li><a className="dropdown-item" href="#">Hats</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default App