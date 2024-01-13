import { NavLink } from "react-router-dom";
import "./list.css";
function List() {
  return (
    <div className="container-lg bg-light pt-1 position-relative">
      <div className="filter-btn bg-light-red text-white position-absolute d-lg-none fs-1-8 fw-600 ps-5 pe-4 py-2 rounded-end-5">
        <span className="me-2">Filter</span>
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav className="navbar border-bottom border-1 mt-5-0 mt-lg-0 navbar-expand-lg position-static">
        <div className="container-fluid position-static py-4 px-0">
          <NavLink to="/" className="navbar-brand ms-5 ms-lg-0">
            <img
              src="./assets/mobile-brand.png"
              alt="brand"
              className="brand-img"
            />
          </NavLink>
          <button
            className="navbar-toggler me-5 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-lg-4 text-center px-lg-4 fw-bold d-lg-flex w-lg-100 justify-content-between align-items-center text-shadow">
              <li className="nav-item">
                <NavLink className="nav-link" to="/list">
                  REALESTATEINTURKEY
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  BLOG
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="">
                  TESTIMONIALS
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/franchise">
                  FRANCHISE
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-toolbar flex-nowrap px-5 py-4 p-lg-0 w-100 w-lg-auto d-flex justify-content-between align-items-center position-absolute position-lg-relative top-0 bg-black bg-lg-inherit">
            <div className="btn-group border border-lg-1 rounded-pill me-lg-4">
              <button className="btn btn-light px-3 fw-600 py-2 py-lg-2 rounded-start-5">
                <img
                  src="./assets/flag-england.png"
                  className="flag-img"
                  alt=""
                />
                <span>ENGLISH</span>
              </button>
              <button className="btn btn-light px-3 fw-600 py-2 border-start rounded-end-5">
                <span>EUR</span>
                <i className="fa-solid fa-chevron-down fa-2xs"></i>
              </button>
            </div>
            <div className="btn-group">
              <button className="btn bg-red text-white py-2 py-lg-2 px-4 px-lg-4 fw-light border-0 rounded-pill fw-600">
                <i className="fa-solid fa-phone-volume me-2"></i>
                <span>CALL ME</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="map mx-4">
        <img
          src="assets/map.png"
          className="d-lg-none map-img img-fluid rounded-bottom-5"
          alt=""
        />
        <img
          src="assets/map-big.png"
          className="d-none d-lg-inline map-img img-fluid rounded-bottom-5"
          alt=""
        />
      </div>
      <div className="orderBy bg-white border my-5 mx-4 py-5 px-4 rounded-4 d-flex justify-content-between align-items-center fs-lg-1-4">
        <span>Showing 1-9 of 14 Results</span>
        <div className="group">
          <i className="bi bi-grid me-2"></i>
          <i className="bi bi-list me-4"></i>
          <label htmlFor="order" className="fw-600">
            Sort by:
          </label>
          <select name="order" className="border-0" id="order">
            <option value="">Default</option>
          </select>
        </div>
      </div>
      <div className="row mx-4">
        <div className="d-none d-lg-block col-lg-4 px-0">
          <div className="filter bg-white mt-4 me-5 border border-1 rounded-4 py-4 px-5">
            <p className="d-flex justify-content-between mt-3 align-items-center">
              <span className="fw-bold fs-1-6">ADVANCED SEARCH</span>
              <i className="fa-solid fa-chevron-down fa-2xs"></i>
            </p>
            <input
              type="text"
              name="keyword"
              placeholder="KEYWORD"
              id="keyword"
              className="d-block w-100 rounded-5 px-4 py-3 outline-0 border border-1 mt-5"
            />
            <input
              type="text"
              name="location"
              placeholder="LOCATION"
              id="location"
              className="d-block w-100 rounded-5 px-4 py-3 mt-3 outline-0 border border-1"
            />
            <label htmlFor="distance" className="fw-600 mt-5 d-block">
              DISTANCE: 50 MILES
            </label>
            <input
              type="range"
              className="w-100 mt-3"
              name="distance"
              id="distance"
            />
            <select
              name="regions"
              className="d-block w-100 rounded-5 px-4 py-3 mt-5 outline-0 border border-1 fw-600"
              id="regions"
            >
              <option value="">REGIONS</option>
            </select>
            <select
              name="status"
              className="d-block w-100 rounded-5 px-4 py-3 mt-3 outline-0 border border-1 fw-600"
              id="status"
            >
              <option value="">STATUS</option>
            </select>
            <select
              name="type"
              className="d-block w-100 rounded-5 px-4 py-3 mt-3 outline-0 border border-1 fw-600"
              id="type"
            >
              <option value="">TYPE</option>
            </select>
            <select
              name="beds"
              className="d-block w-100 rounded-5 px-4 py-3 mt-3 outline-0 border border-1 fw-600"
              id="beds"
            >
              <option value="">BEDS</option>
            </select>
            <select
              name="BATHS"
              className="d-block w-100 rounded-5 px-4 py-3 mt-3 outline-0 border border-1 fw-600"
              id="BATHS"
            >
              <option value="">BATHS</option>
            </select>
            <select
              name="garages"
              className="d-block w-100 rounded-5 px-4 py-3 mt-3 outline-0 border border-1 fw-600"
              id="garages"
            >
              <option value="">GARAGES</option>
            </select>
            <select
              name="payment-plan"
              className="d-block w-100 rounded-5 px-4 py-3 mt-3 outline-0 border border-1 fw-600"
              id="payment-plan"
            >
              <option value="">PAYMENT PLAN</option>
            </select>
            <label htmlFor="price" className="fw-600 mt-5 d-block">
              FROM $2000 TO $8000
            </label>
            <input
              type="range"
              className="w-100 mt-3"
              name="price"
              id="price"
            />
            <button className="btn bg-light-red text-white rounded-pill py-3 my-5 w-100">
              Find Property
            </button>
          </div>
          <div className="latest bg-white me-5 border border-1 rounded-4 py-4 px-5">
            <p className="d-flex justify-content-between align-items-center mt-4">
              <span className="fw-bold fs-1-6">LATEST PROPERTIES</span>
              <i className="fa-solid fa-chevron-down fa-2xs"></i>
            </p>
            <div className="row property mb-5 mt-5">
              <div className="col-4">
                <img
                  src="assets/house-mini.png"
                  className="rounded-4 img-fluid"
                  alt=""
                />
              </div>
              <div className="col-8">
                <h5 className="fw-bold fs-1-2 mb-0 mt-3">
                  Eaton Garth Penthouse
                </h5>
                <p className="fw-bold fs-1-6 mb-0 mt-1 text-light-red">$7500</p>
                <div>
                  <span className="me-2">Beds: 4</span>
                  <span className="me-2">Baths: 1</span>
                  <span className="me-2">220 sqft</span>
                </div>
              </div>
            </div>
            <div className="row property mb-5">
              <div className="col-4">
                <img
                  src="assets/house-mini.png"
                  className="rounded-4 img-fluid"
                  alt=""
                />
              </div>
              <div className="col-8">
                <h5 className="fw-bold fs-1-2 mb-0 mt-3">
                  Eaton Garth Penthouse
                </h5>
                <p className="fw-bold fs-1-6 mb-0 mt-1 text-light-red">$7500</p>
                <div>
                  <span className="me-2">Beds: 4</span>
                  <span className="me-2">Baths: 1</span>
                  <span className="me-2">220 sqft</span>
                </div>
              </div>
            </div>
            <div className="row property mb-5">
              <div className="col-4">
                <img
                  src="assets/house-mini.png"
                  className="rounded-4 img-fluid"
                  alt=""
                />
              </div>
              <div className="col-8">
                <h5 className="fw-bold fs-1-2 mb-0 mt-3">
                  Eaton Garth Penthouse
                </h5>
                <p className="fw-bold fs-1-6 mb-0 mt-1 text-light-red">$7500</p>
                <div>
                  <span className="me-2">Beds: 4</span>
                  <span className="me-2">Baths: 1</span>
                  <span className="me-2">220 sqft</span>
                </div>
              </div>
            </div>
            <div className="row property mb-5">
              <div className="col-4">
                <img
                  src="assets/house-mini.png"
                  className="rounded-4 img-fluid"
                  alt=""
                />
              </div>
              <div className="col-8">
                <h5 className="fw-bold fs-1-2 mb-0 mt-3">
                  Eaton Garth Penthouse
                </h5>
                <p className="fw-bold fs-1-6 mb-0 mt-1 text-light-red">$7500</p>
                <div>
                  <span className="me-2">Beds: 4</span>
                  <span className="me-2">Baths: 1</span>
                  <span className="me-2">220 sqft</span>
                </div>
              </div>
            </div>
            <div className="row property mb-5">
              <div className="col-4">
                <img
                  src="assets/house-mini.png"
                  className="rounded-4 img-fluid"
                  alt=""
                />
              </div>
              <div className="col-8">
                <h5 className="fw-bold fs-1-2 mb-0 mt-3">
                  Eaton Garth Penthouse
                </h5>
                <p className="fw-bold fs-1-6 mb-0 mt-1 text-light-red">$7500</p>
                <div>
                  <span className="me-2">Beds: 4</span>
                  <span className="me-2">Baths: 1</span>
                  <span className="me-2">220 sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 px-0">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="card mt-4 border-1 rounded-4 p-3">
                <div className="position-relative">
                  <img
                    src="./assets/house.png"
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <img
                    src="assets/citizen-badge.png"
                    className="citizen-badge"
                    alt=""
                  />
                  <span
                    className="position-absolute fw-bold text-white fs-2-0"
                    style={{
                      left: "2rem",
                      bottom: "2rem",
                      letterSpacing: "2px",
                    }}
                  >
                    137,000 <i className="fa-solid fa-euro-sign"></i>
                  </span>
                  <button
                    className="position-absolute rounded-circle border-0"
                    style={{
                      right: "2rem",
                      bottom: "2rem",
                      aspectRatio: "1",
                    }}
                  >
                    <i className="fa-regular fa-heart mt-1 fs-1-2"></i>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-danger fs-1-3">Apartment</h5>
                  <h3 className="card-title fw-bolder fs-1-6">
                    Skyper Pool Apartment
                  </h3>
                  <p className="card-text mt-3 fs-1-4 fw-600">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                  </p>
                  <div className="d-flex justify-content-start align-items-center fs-1-6">
                    <span>BEDS:3</span>
                    <span className="ms-5">BATHS:2</span>
                    <span className="ms-5">SQFT:190</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card mt-4 border-1 rounded-4 p-3">
                <div className="position-relative">
                  <img
                    src="./assets/house.png"
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <img
                    src="assets/citizen-badge.png"
                    className="citizen-badge"
                    alt=""
                  />
                  <span
                    className="position-absolute fw-bold text-white fs-2-0"
                    style={{
                      left: "2rem",
                      bottom: "2rem",
                      letterSpacing: "2px",
                    }}
                  >
                    137,000 <i className="fa-solid fa-euro-sign"></i>
                  </span>
                  <button
                    className="position-absolute rounded-circle border-0"
                    style={{
                      right: "2rem",
                      bottom: "2rem",
                      aspectRatio: "1",
                    }}
                  >
                    <i className="fa-regular fa-heart mt-1 fs-1-2"></i>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-danger fs-1-3">Apartment</h5>
                  <h3 className="card-title fw-bolder fs-1-6">
                    Skyper Pool Apartment
                  </h3>
                  <p className="card-text mt-3 fs-1-4 fw-600">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                  </p>
                  <div className="d-flex justify-content-start fs-1-2 align-items-center">
                    <span>BEDS:3</span>
                    <span className="ms-5">BATHS:2</span>
                    <span className="ms-5">SQFT:190</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card mt-4 border-1 rounded-4 p-3">
                <div className="position-relative">
                  <img
                    src="./assets/house.png"
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <img
                    src="assets/citizen-badge.png"
                    className="citizen-badge"
                    alt=""
                  />
                  <span
                    className="position-absolute fw-bold text-white fs-2-0"
                    style={{
                      left: "2rem",
                      bottom: "2rem",
                      letterSpacing: "2px",
                    }}
                  >
                    137,000 <i className="fa-solid fa-euro-sign"></i>
                  </span>
                  <button
                    className="position-absolute rounded-circle border-0"
                    style={{
                      right: "2rem",
                      bottom: "2rem",
                      aspectRatio: "1",
                    }}
                  >
                    <i className="fa-regular fa-heart mt-1 fs-1-2"></i>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-danger fs-1-3">Apartment</h5>
                  <h3 className="card-title fw-bolder fs-1-6">
                    Skyper Pool Apartment
                  </h3>
                  <p className="card-text mt-3 fs-1-4 fw-600">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                  </p>
                  <div className="d-flex justify-content-start align-items-center fs-1-2">
                    <span>BEDS:3</span>
                    <span className="ms-5">BATHS:2</span>
                    <span className="ms-5">SQFT:190</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card mt-4 border-1 rounded-4 p-3">
                <div className="position-relative">
                  <img
                    src="./assets/house.png"
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <img
                    src="assets/citizen-badge.png"
                    className="citizen-badge"
                    alt=""
                  />
                  <span
                    className="position-absolute fw-bold text-white fs-2-0"
                    style={{
                      left: "2rem",
                      bottom: "2rem",
                      letterSpacing: "2px",
                    }}
                  >
                    137,000 <i className="fa-solid fa-euro-sign"></i>
                  </span>
                  <button
                    className="position-absolute rounded-circle border-0"
                    style={{
                      right: "2rem",
                      bottom: "2rem",
                      aspectRatio: "1",
                    }}
                  >
                    <i className="fa-regular fa-heart mt-1 fs-1-2"></i>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-danger fs-1-3">Apartment</h5>
                  <h3 className="card-title fw-bolder fs-1-6">
                    Skyper Pool Apartment
                  </h3>
                  <p className="card-text mt-3 fs-1-4 fw-600">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                  </p>
                  <div className="d-flex justify-content-start align-items-center fs-1-2">
                    <span>BEDS:3</span>
                    <span className="ms-5">BATHS:2</span>
                    <span className="ms-5">SQFT:190</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none row px-0 mx-0 d-lg-flex">
              <div className="col-12 col-lg-6">
                <div className="card mt-4 border-1 rounded-4 p-3">
                  <div className="position-relative">
                    <img
                      src="./assets/house.png"
                      className="card-img-top rounded-4"
                      alt=""
                    />
                    <img
                      src="assets/citizen-badge.png"
                      className="citizen-badge"
                      alt=""
                    />
                    <span
                      className="position-absolute fw-bold text-white fs-2-0"
                      style={{
                        left: "2rem",
                        bottom: "2rem",
                        letterSpacing: "2px",
                      }}
                    >
                      137,000 <i className="fa-solid fa-euro-sign"></i>
                    </span>
                    <button
                      className="position-absolute rounded-circle border-0"
                      style={{
                        right: "2rem",
                        bottom: "2rem",
                        aspectRatio: "1",
                      }}
                    >
                      <i className="fa-regular fa-heart mt-1 fs-1-2"></i>
                    </button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-danger fs-1-3">Apartment</h5>
                    <h3 className="card-title fw-bolder fs-1-6">
                      Skyper Pool Apartment
                    </h3>
                    <p className="card-text mt-3 fs-1-4 fw-600">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                    </p>
                    <div className="d-flex justify-content-start align-items-center fs-1-2">
                      <span>BEDS:3</span>
                      <span className="ms-5">BATHS:2</span>
                      <span className="ms-5">SQFT:190</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="card mt-4 border-1 rounded-4 p-3">
                  <div className="position-relative">
                    <img
                      src="./assets/house.png"
                      className="card-img-top rounded-4"
                      alt=""
                    />
                    <img
                      src="assets/citizen-badge.png"
                      className="citizen-badge"
                      alt=""
                    />
                    <span
                      className="position-absolute fw-bold text-white fs-2-0"
                      style={{
                        left: "2rem",
                        bottom: "2rem",
                        letterSpacing: "2px",
                      }}
                    >
                      137,000 <i className="fa-solid fa-euro-sign"></i>
                    </span>
                    <button
                      className="position-absolute rounded-circle border-0"
                      style={{
                        right: "2rem",
                        bottom: "2rem",
                        aspectRatio: "1",
                      }}
                    >
                      <i className="fa-regular fa-heart mt-1 fs-1-2"></i>
                    </button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-danger fs-1-3">Apartment</h5>
                    <h3 className="card-title fw-bolder fs-1-6">
                      Skyper Pool Apartment
                    </h3>
                    <p className="card-text mt-3 fs-1-4 fw-600">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                    </p>
                    <div className="d-flex justify-content-start align-items-center fs-1-2">
                      <span>BEDS:3</span>
                      <span className="ms-5">BATHS:2</span>
                      <span className="ms-5">SQFT:190</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="card mt-4 border-1 rounded-4 p-3">
                  <div className="position-relative">
                    <img
                      src="./assets/house.png"
                      className="card-img-top rounded-4"
                      alt=""
                    />
                    <img
                      src="assets/citizen-badge.png"
                      className="citizen-badge"
                      alt=""
                    />
                    <span
                      className="position-absolute fw-bold text-white fs-2-0"
                      style={{
                        left: "2rem",
                        bottom: "2rem",
                        letterSpacing: "2px",
                      }}
                    >
                      137,000 <i className="fa-solid fa-euro-sign"></i>
                    </span>
                    <button
                      className="position-absolute rounded-circle border-0"
                      style={{
                        right: "2rem",
                        bottom: "2rem",
                        aspectRatio: "1",
                      }}
                    >
                      <i className="fa-regular fa-heart mt-1 fs-1-2"></i>
                    </button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-danger fs-1-3">Apartment</h5>
                    <h3 className="card-title fw-bolder fs-1-6">
                      Skyper Pool Apartment
                    </h3>
                    <p className="card-text mt-3 fs-1-4 fw-600">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                    </p>
                    <div className="d-flex justify-content-start align-items-center fs-1-2">
                      <span>BEDS:3</span>
                      <span className="ms-5">BATHS:2</span>
                      <span className="ms-5">SQFT:190</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="card mt-4 border-1 rounded-4 p-3">
                  <div className="position-relative">
                    <img
                      src="./assets/house.png"
                      className="card-img-top rounded-4"
                      alt=""
                    />
                    <img
                      src="assets/citizen-badge.png"
                      className="citizen-badge"
                      alt=""
                    />
                    <span
                      className="position-absolute fw-bold text-white fs-2-0"
                      style={{
                        left: "2rem",
                        bottom: "2rem",
                        letterSpacing: "2px",
                      }}
                    >
                      137,000 <i className="fa-solid fa-euro-sign"></i>
                    </span>
                    <button
                      className="position-absolute rounded-circle border-0"
                      style={{
                        right: "2rem",
                        bottom: "2rem",
                        aspectRatio: "1",
                      }}
                    >
                      <i className="fa-regular fa-heart mt-1 fs-1-2"></i>
                    </button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-danger fs-1-3">Apartment</h5>
                    <h3 className="card-title fw-bolder fs-1-6">
                      Skyper Pool Apartment
                    </h3>
                    <p className="card-text mt-3 fs-1-4 fw-600">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                    </p>
                    <div className="d-flex justify-content-start align-items-center fs-1-2">
                      <span>BEDS:3</span>
                      <span className="ms-5">BATHS:2</span>
                      <span className="ms-5">SQFT:190</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination d-flex justify-content-center mt-5">
            <button className="btn bg-light-red rounded-circle border-0 text-white fs-1-8 me-4 fw-600">
              1
            </button>
            <button className="btn bg-white border border-1 rounded-circle text-black fs-1-8 me-4 fw-600">
              2
            </button>
            <button className="btn bg-white border border-1 rounded-circle text-black fs-1-8 me-4 fw-600">
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row explanation mx-4">
        <div className="col-12 col-lg-4 px-0">
          <div className="img-container w-90 ms-auto me-sm-auto">
            <img
              src="assets/house5.png"
              className="img-fluid pink-shadow ms-auto me-sm-auto d-block rounded-5"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-lg-8 ps-0 ps-lg-6 px-0">
          <div className="map-container">
            <img src="assets/dotted-map.png" className="w-60 w-lg-35" alt="" />
          </div>
          <h3 className="fs-3-0 fs-lg-2-7 w-lg-60 fw-600 mb-4 lh-base mt-4">
            REAL ESTATE IN TURKEY PROPERTY FOR SALE IN TURKEY
          </h3>
          <p className="fw-600 text-justify fs-1-3 fs-lg-1-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa
            quod harum? Voluptatum magni non, omnis aliquid hic vel rerum et
            quis, ex sed asperiores ducimus, repudiandae quod saepe eaque
            placeat tenetur ad officiis iste. Aperiam nobis incidunt atque totam
            saepe recusandae impedit saepe recusandae impedit. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vero culpa quod harum?
            Voluptatum magni non, omnis aliquid hic vel rerum et quis, ex sed
            asperiores ducimus, repudiandae quod saepe eaque placeat tenetur ad
            officiis iste. Aperiam nobis incidunt atque totam saepe recusandae
            impedit saepe impedit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vero culpa quod harum? atque totam saepe
            recusandae impedit saepe impedit.
          </p>
        </div>
      </div>
      <div className="form-section mx-4 mt-4 p-5 text-center rounded-4 bg-custom2">
        <h3 className="fs-2-0 fs-lg-3-4 form-title-lg-margin fw-lighter text-white mt-4">
          <span className="fw-600">COULD'NT FIND</span> THE PROPERTY YOU WERE
          LOOKING FOR?
        </h3>
        <p className="text-white fw-lighter fs-lg-1-8">
          For Private Properties Just Fill in The Form Below
        </p>

        <form className="p-4" action="">
          <div className="d-lg-flex justify-content-between align-items-center mt-3">
            <div className="form-mobile-row w-lg-25 rounded-lg-pill py-lg-4 flex-lg-grow-1">
              <label htmlFor="name">NAME</label>
              <input type="text" />
            </div>
            <div className="form-mobile-row w-lg-25 rounded-lg-pill py-lg-4 flex-lg-grow-1">
              <label htmlFor="email">E-MAIL</label>
              <input type="text" />
            </div>
            <div className="form-mobile-row w-lg-25 rounded-lg-pill py-lg-4 flex-lg-grow-1">
              <div className="label-group border-end border-end-1 border-secondary pe-2">
                <label htmlFor="phone">PHONE</label>
                <img
                  src="assets/flag-icon-turkish.png"
                  style={{ width: "1.8rem" }}
                  className="ps-2"
                  alt=""
                />
                <select className="ms-0" name="number" id="number">
                  <option value="+90">+90</option>
                </select>
              </div>
              <input className="w-35" type="text" />
            </div>
          </div>
          <div className="form-mobile-row rounded-lg-pill py-lg-4">
            <label
              className="align-self-start align-self-lg-center"
              htmlFor="message"
            >
              MESSAGE
            </label>
            <textarea
              name="message"
              id=""
              className="flex-grow-1 textarea-height"
            ></textarea>
          </div>
          <div className="mx-4 mt-4 mt-lg-5 mb-5">
            <button className="fw-600 btn btn-lg w-100 w-lg-30 mx-lg-auto bg-light-red text-white d-flex justify-content-between align-items-center rounded-4 rounded-lg-pill px-4 px-lg-5 py-3 py-lg-4 fs-1-4">
              <span>SEND NOW</span>
              <i className="fa-solid ms-2 fa-arrow-right-long"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="footer-container bg-white mx-4 p-5 rounded-top-5 mt-5 border border-1">
        <div className="row">
          <div className="col-12 col-lg-3 px-lg-5 mb-5 mb-lg-0">
            <img
              src="assets/brand-column.png"
              className="d-block w-50 mx-lg-auto"
              alt=""
            />
            <p className="mt-5 text-justify fs-1-5 fs-lg-1-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              necessitatibus culpa adipisci facere assumenda sequi tenetur rem
              voluptates. Soluta delectus officiis, vero libero qui laudantium
            </p>
            <a href="" className="fs-1-5 fs-lg-1-0">
              <span className="fw-600 me-1">Read More</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="col-6 col-lg-3 px-lg-5">
            <ul className="footer-list">
              <li className="header-text">
                <a href="">COMPANY</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">SERVICES</a>
              </li>
              <li>
                <a href="">WORK WITH US</a>
              </li>
              <li>
                <a href="">FREE VIEWING TRIP</a>
              </li>
              <li>
                <a href="">RENTAL PROPERTIES</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 px-lg-5">
            <ul className="footer-list">
              <li className="header-text">
                <a href="">POPULAR LOCATIONS</a>
              </li>
              <li>
                <a href="">ANTALYA</a>
              </li>
              <li>
                <a href="">ISTANBUL</a>
              </li>
              <li>
                <a href="">NORTHERN CYPRUS</a>
              </li>
              <li>
                <a href="">MERSIN</a>
              </li>
              <li>
                <a href="">IZMIR</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 px-lg-5 mt-5 mt-lg-0">
            <ul className="footer-list">
              <li className="header-text">
                <a href="">CONTACT US</a>
              </li>
              <li>
                <a href="">
                  <i className="fa-solid fa-phone-volume me-2"></i> +90 542 658
                  70 07
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-regular fa-paper-plane me-2"></i>
                  info@realtorglobal.com
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-solid fa-location-dot me-2"></i> Kestel Mah.
                  Toklar Cd. 7/A-B, 07450 Alanya/Antalya
                </a>
              </li>
              <li>
                <a href="">
                  <img src="assets/bitcoin.png" className="w-50" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-foot mx-4 bg-custom2 text-white p-5 d-flex flex-column flex-lg-row align-items-center justify-content-between rounded-bottom-5">
        <div className="icons">
          <i className="fa-brands fa-whatsapp me-4"></i>
          <i className="fa-brands fa-x-twitter me-4"></i>
          <i className="fa-brands fa-square-youtube me-4"></i>
          <i className="fa-brands fa-instagram me-4"></i>
          <i className="fa-brands fa-facebook me-4"></i>
        </div>
        <p className="mt-4 mt-lg-0 text-center">
          &copy; 2014-2024 REALTOR GLOBAL. ALL RIGHT RESERVED.
        </p>
      </div>
    </div>
  );
}

export default List;
