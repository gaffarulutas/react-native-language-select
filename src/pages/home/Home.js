import { NavLink } from "react-router-dom";
import "./home.css";
function Home() {
  return (
    <div className="container-lg bg-light pt-1 position-relative">
      <div className="home-menu mt-12 mt-lg-5 rounded-lg-5 box-lg-shadow">
        <nav className="navbar mx-lg-5 p-0 w-100 w-lg-auto mt-lg-0 bg-white bg-lg-inherit navbar-expand-lg position-absolute top-0 position-lg-static">
          <div className="container-fluid position-static py-lg-4 px-0">
            <NavLink
              to="/"
              className="navbar-brand my-4 my-lg-0 ms-5 ms-lg-0 flex-shrink-1"
            >
              <img
                src="./assets/brand.png"
                alt="brand "
                className="brand-img d-none d-lg-inline"
              />
              <img
                src="./assets/mobile-brand.png"
                alt="brand"
                className="brand-img d-lg-none"
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-lg-4 text-center px-lg-4 fw-bold d-lg-flex w-lg-100 justify-content-between align-items-center text-shadow">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-lg-white fw-normal"
                    to="/list"
                  >
                    REALESTATEINTURKEY
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-lg-white fw-normal" href="">
                    BLOG
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-lg-white fw-normal" href="#">
                    TESTIMONIALS
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-lg-white fw-normal"
                    to="/franchise"
                  >
                    FRANCHISE
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-lg-white fw-normal" href="#">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-lg-white fw-normal" href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn-toolbar flex-nowrap order-first order-lg-last px-5 py-4 p-lg-0 w-100 w-lg-auto d-flex justify-content-between align-items-center bg-black bg-lg-inherit">
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
        <div className="row w-lg-90 mx-lg-auto pt-lg-12 pb-lg-20">
          <div className="col-12 col-lg-7">
            <div className="home-menu-text h-lg-100 mx-5 text-white d-lg-flex flex-column justify-content-between">
              <h3 className="fs-1-2 fs-lg-1-4 fw-600">Welcome</h3>
              <h1 className="fw-lighter fs-3-2 fs-lg-4-4 ls-2">
                DISCOVER <br />
                <span className="fw-600">THE MOST POPULAR</span>
                <br />
                PROPERTY FOR SALE <br />
                IN TURKEY NOW!
              </h1>
              <div className="mt-5 mt-lg-0">
                <button className="fw-600 fs-1-4 me-5 btn bg-red text-white rounded-5 px-5 py-3">
                  READ MORE
                </button>
                <a href="#" className="text-white fs-1-4">
                  CALL ME NOW
                  <i className="ms-2 fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <form className="home-form rounded-5 m-5 m-lg-0 ms-lg-5 p-5 p-lg-4">
              <select
                name="regions"
                className="form-control rounded-pill p-4 fw-600 lh-lg"
                id="regions"
              >
                <option value="">BÖLGELER</option>
              </select>
              <select
                name="type"
                className="form-control rounded-pill p-4 fw-600 lh-lg rounded-pill mt-4"
                id="type"
              >
                <option value="">TİP</option>
              </select>
              <select
                name="room"
                className="form-control rounded-pill p-4 fw-600 lh-lg rounded-pill mt-4"
                id="room"
              >
                <option value="">ODA</option>
              </select>
              <select
                name="price-range"
                className="form-control rounded-pill p-4 fw-600 lh-lg rounded-pill mt-4"
                id="price-range"
              >
                <option value="">FİYAT ARALIĞI</option>
              </select>
              <button className="btn form-control p-3 fs-1-4 fw-600 lh-lg bg-red text-white mt-4 rounded-pill">
                ARAMA
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="section px-5 bg-white py-6">
        <h2 className="section-title">
          FEATURED PROPERTIES<span> IN TURKEY</span>
        </h2>
        <p className="text-center fs-1-6 fs-1-8 fw-light">
          Daily Update Hot Offers
        </p>
        <div className="row pb-4">
          <div className="col-12 col-lg-6 col-xl-4">
            <div className="card mt-4 rounded-5 p-3">
              <div className="position-relative">
                <img
                  src="./assets/house.png"
                  className="card-img-top rounded-5"
                  alt=""
                />
                <img
                  src="assets/citizen-badge.png"
                  className="w-37 position-absolute top-1 left-1"
                  alt=""
                />
                <span className="position-absolute bottom-2 left-2 fw-600 text-white ls-2 fs-2-6">
                  137,000 <i className="fa-solid fa-euro-sign"></i>
                </span>
                <button className="position-absolute rounded-circle right-2 bottom-2">
                  <i className="fa-solid fa-heart text-danger fs-1-4 lh-1 mt-1"></i>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger fs-1-4">Apartment</h5>
                <h4 className="card-title fw-bold fs-1-8">
                  Skyper Pool Apartment
                </h4>
                <p className="card-text fs-1-5 fs-lg-1-3 fw-600">
                  <i className="fa-solid fa-location-dot me-1"></i>
                  <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                </p>
                <div className="d-flex gap-5 fs-1-2 align-items-center">
                  <span>BEDS:3</span>
                  <span className="">BATHS:2</span>
                  <span className="">SQFT:190</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-none col-lg-6 d-lg-block col-xl-4">
            <div className="card mt-4 rounded-5 p-3">
              <div className="position-relative">
                <img
                  src="./assets/house.png"
                  className="card-img-top rounded-5"
                  alt=""
                />
                <img
                  src="assets/citizen-badge.png"
                  className="w-37 position-absolute top-1 left-1"
                  alt=""
                />
                <span className="position-absolute bottom-2 left-2 fw-600 text-white ls-2 fs-2-6">
                  137,000 <i className="fa-solid fa-euro-sign"></i>
                </span>
                <button
                  className="position-absolute rounded-circle right-2 bottom-2"
                  style={{ aspectRatio: 1 }}
                >
                  <i className="fa-solid fa-heart text-danger fs-1-4 lh-1 mt-1"></i>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger fs-1-4">Apartment</h5>
                <h4 className="card-title fw-bold fs-1-8">
                  Skyper Pool Apartment
                </h4>
                <p className="card-text fs-1-5 fs-lg-1-3 fw-600">
                  <i className="fa-solid fa-location-dot me-1"></i>
                  <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                </p>
                <div className="d-flex gap-5 fs-1-2 align-items-center">
                  <span>BEDS:3</span>
                  <span className="">BATHS:2</span>
                  <span className="">SQFT:190</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-none col-lg-6 col-xl-4 d-xl-block">
            <div className="card mt-4 rounded-5 p-3">
              <div className="position-relative">
                <img
                  src="./assets/house.png"
                  className="card-img-top rounded-5"
                  alt=""
                />
                <img
                  src="assets/citizen-badge.png"
                  className="w-37 position-absolute top-1 left-1"
                  alt=""
                />
                <span className="position-absolute bottom-2 left-2 fw-600 text-white ls-2 fs-2-6">
                  137,000 <i className="fa-solid fa-euro-sign"></i>
                </span>
                <button
                  className="position-absolute rounded-circle right-2 bottom-2"
                  style={{ aspectRatio: 1 }}
                >
                  <i className="fa-solid fa-heart text-danger fs-1-4 lh-1 mt-1"></i>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger fs-1-4">Apartment</h5>
                <h4 className="card-title fw-bold fs-1-8">
                  Skyper Pool Apartment
                </h4>
                <p className="card-text fs-1-5 fs-lg-1-3 fw-600">
                  <i className="fa-solid fa-location-dot me-1"></i>
                  <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                </p>
                <div className="d-flex gap-5 fs-1-2 align-items-center">
                  <span>BEDS:3</span>
                  <span className="">BATHS:2</span>
                  <span className="">SQFT:190</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-none col-lg-6 col-xl-4">
            <div className="card mt-4 rounded-5 mx-2 p-3">
              <div className="position-relative">
                <img
                  src="./assets/house.png"
                  className="card-img-top rounded-5"
                  alt=""
                />
                <img
                  src="assets/citizen-badge.png"
                  className="w-37 position-absolute top-1 left-1"
                  alt=""
                />
                <span className="position-absolute bottom-2 left-2 fw-600 text-white ls-2 fs-2-6">
                  137,000 <i className="fa-solid fa-euro-sign"></i>
                </span>
                <button
                  className="position-absolute rounded-circle right-2 bottom-2"
                  style={{ aspectRatio: 1 }}
                >
                  <i className="fa-solid fa-heart text-danger fs-1-4 lh-1 mt-1"></i>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger fs-1-4">Apartment</h5>
                <h4 className="card-title fw-bold fs-1-8">
                  Skyper Pool Apartment
                </h4>
                <p className="card-text fs-1-5 fs-lg-1-3 fw-600">
                  <i className="fa-solid fa-location-dot me-1"></i>
                  <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                </p>
                <div className="d-flex gap-5 fs-1-2 align-items-center">
                  <span>BEDS:3</span>
                  <span className="">BATHS:2</span>
                  <span className="">SQFT:190</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-none col-lg-6 col-xl-4">
            <div className="card mt-4 rounded-5 mx-2 p-3">
              <div className="position-relative">
                <img
                  src="./assets/house.png"
                  className="card-img-top rounded-5"
                  alt=""
                />
                <img
                  src="assets/citizen-badge.png"
                  className="w-37 position-absolute top-1 left-1"
                  alt=""
                />
                <span className="position-absolute bottom-2 left-2 fw-600 text-white ls-2 fs-2-6">
                  137,000 <i className="fa-solid fa-euro-sign"></i>
                </span>
                <button
                  className="position-absolute rounded-circle right-2 bottom-2"
                  style={{ aspectRatio: 1 }}
                >
                  <i className="fa-solid fa-heart text-danger fs-1-4 lh-1 mt-1"></i>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger fs-1-4">Apartment</h5>
                <h4 className="card-title fw-bold fs-1-8">
                  Skyper Pool Apartment
                </h4>
                <p className="card-text fs-1-5 fs-lg-1-3 fw-600">
                  <i className="fa-solid fa-location-dot me-1"></i>
                  <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                </p>
                <div className="d-flex gap-5 fs-1-2 align-items-center">
                  <span>BEDS:3</span>
                  <span className="">BATHS:2</span>
                  <span className="">SQFT:190</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-none col-lg-6 col-xl-4">
            <div className="card mt-4 rounded-5 mx-2 p-3">
              <div className="position-relative">
                <img
                  src="./assets/house.png"
                  className="card-img-top rounded-5"
                  alt=""
                />
                <img
                  src="assets/citizen-badge.png"
                  className="w-37 position-absolute top-1 left-1"
                  alt=""
                />
                <span className="position-absolute bottom-2 left-2 fw-600 text-white ls-2 fs-2-6">
                  137,000 <i className="fa-solid fa-euro-sign"></i>
                </span>
                <button
                  className="position-absolute rounded-circle right-2 bottom-2"
                  style={{ aspectRatio: 1 }}
                >
                  <i className="fa-solid fa-heart text-danger fs-1-4 lh-1 mt-1"></i>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger fs-1-4">Apartment</h5>
                <h4 className="card-title fw-bold fs-1-8">
                  Skyper Pool Apartment
                </h4>
                <p className="card-text fs-1-5 fs-lg-1-3 fw-600">
                  <i className="fa-solid fa-location-dot me-1"></i>
                  <span>Ziraat Çıkmaz sok 2/Avcılar/ISTANBUL</span>
                </p>
                <div className="d-flex gap-5 fs-1-2 align-items-center">
                  <span>BEDS:3</span>
                  <span className="">BATHS:2</span>
                  <span className="">SQFT:190</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <button className="btn text-secondary">
            <i className="fa-solid fa-circle"></i>
          </button>
          <button className="btn text-secondary">
            <i className="fa-solid fa-circle"></i>
          </button>
          <button className="btn text-secondary">
            <i className="fa-solid fa-circle"></i>
          </button>
          <button className="btn text-secondary">
            <i className="fa-solid fa-circle"></i>
          </button>
          <button className="btn text-dark rounded-circle">
            <i className="fa-solid fa-circle"></i>
          </button>
          <button className="btn text-secondary">
            <i className="fa-solid fa-circle"></i>
          </button>
        </div>
      </div>
      <div className="section pt-13 pb-8">
        <h2 className="section-title mb-4">
          WHAT <span>OUR CLIENTS</span> SAY ABOUT US!
        </h2>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="card h-100 bg-inherit justify-content-between border-0 mx-5">
              <div className="text-center flex-grow-1 d-flex border rounded-5 position-relative">
                <img
                  src="./assets/person1.png"
                  className="card-img-top person1-img align-self-end mb-0 w-50 mx-auto"
                  alt=""
                />
                <button className="position-absolute youtube-button">
                  <img
                    className="youtube-icon img-fluid"
                    src="./assets/youtube-icon.png"
                    alt=""
                  />
                </button>
              </div>
              <h4 className="card-title fs-1-7 fw-600 text-center mt-3 mb-1">
                Muhammed SHAGALEH
              </h4>
              <p className="card-text text-center fs-1-2">
                Bosnia and Herzegovina
              </p>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-6">
            <div className="card bg-inherit border-0 mx-5">
              <div className="text-center border rounded-5 position-relative">
                <img
                  src="./assets/person2.png"
                  className="card-img-top person1-img mt-4 w-50 mx-auto"
                  alt=""
                />
                <button className="position-absolute youtube-button">
                  <img
                    className="youtube-icon img-fluid"
                    src="./assets/youtube-icon.png"
                    alt=""
                  />
                </button>
              </div>
              <h4 className="card-title text-center mt-3 mb-1">
                Muhammed SHAGALEH
              </h4>
              <p className="card-text text-center">Bosnia and Herzegovina</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section mx-5">
        <h2 className="section-title">
          DISCOVER OUR LOCATIONS <span>IN TURKEY</span>
        </h2>
        <p className="text-center mb-5 fs-1-6 fs-1-8 fw-light">
          Search Top Selling Locations
        </p>
        <div className="row">
          <div className="col-6 col-lg-4">
            <div className="card mb-5 mx-lg-4 rounded-4">
              <div className="row">
                <div className="col-5">
                  <img
                    className="img-fluid rounded-start-4"
                    src="assets/ANTALYA.png"
                    alt=""
                  />
                </div>
                <div className="col-7 card-body py-2 ps-3 pe-0 d-flex flex-column justify-content-center">
                  <h4 className="card-title fs-1-0 fs-lg-1-6 mb-1 fw-600">
                    ANTALYA
                  </h4>
                  <p className="card-text fs-0-5 fs-lg-0-8">997 PROPERTIES</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div className="card mb-5 mx-lg-4 rounded-4">
              <div className="row">
                <div className="col-5">
                  <img
                    className="img-fluid rounded-start-4"
                    src="assets/ISTANBUL.png"
                    alt=""
                  />
                </div>
                <div className="col-7 card-body py-2 ps-3 pe-0 d-flex flex-column justify-content-center">
                  <h4 className="card-title fs-1-0 fs-lg-1-6 mb-1 fw-600">
                    ISTANBUL
                  </h4>
                  <p className="card-text fs-0-5 fs-lg-0-8">997 PROPERTIES</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div className="card mb-5 mx-lg-4 rounded-4">
              <div className="row">
                <div className="col-5">
                  <img
                    className="img-fluid rounded-start-4"
                    src="assets/IZMIR.png"
                    alt=""
                  />
                </div>
                <div className="col-7 card-body py-2 ps-3 pe-0 d-flex flex-column justify-content-center">
                  <h4 className="card-title fs-1-0 fs-lg-1-6 mb-1 fw-600">
                    İZMİR
                  </h4>
                  <p className="card-text fs-0-5 fs-lg-0-8">997 PROPERTIES</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div className="card mb-5 mx-lg-4 rounded-4">
              <div className="row">
                <div className="col-5">
                  <img
                    className="img-fluid rounded-start-4"
                    src="assets/MERSIN.png"
                    alt=""
                  />
                </div>
                <div className="col-7 card-body py-2 ps-3 pe-0 d-flex flex-column justify-content-center">
                  <h4 className="card-title fs-1-0 fs-lg-1-6 mb-1 fw-600">
                    MERSİN
                  </h4>
                  <p className="card-text fs-0-5 fs-lg-0-8">997 PROPERTIES</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div className="card mb-5 mx-lg-4 rounded-4">
              <div className="row">
                <div className="col-5">
                  <img
                    className="img-fluid rounded-start-4"
                    src="assets/BODRUM.png"
                    alt=""
                  />
                </div>
                <div className="col-7 card-body py-2 ps-3 pe-0 d-flex flex-column justify-content-center">
                  <h4 className="card-title fs-1-0 fs-lg-1-6 mb-1 fw-600">
                    BODRUM
                  </h4>
                  <p className="card-text fs-0-5 fs-lg-0-8">997 PROPERTIES</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div className="card mb-5 mx-lg-4 rounded-4">
              <div className="row">
                <div className="col-5">
                  <img
                    className="img-fluid rounded-start-4"
                    src="assets/KIBRIS.png"
                    alt=""
                  />
                </div>
                <div className="col-7 card-body py-2 ps-3 pe-0 d-flex flex-column justify-content-center">
                  <h4 className="card-title fs-1-0 fs-lg-1-6 mb-1 fw-600">
                    NORTHERN CYPRUS
                  </h4>
                  <p className="card-text fs-0-5 fs-lg-0-8">997 PROPERTIES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information-block rounded-5 section m-5 p-5 px-lg-0 text-white">
        <div className="w-lg-50 mx-auto py-lg-5">
          <div className="img-block w-50 mx-auto my-5">
            <img className="img-fluid" src="assets/Group2.png" alt="" />
          </div>
          <h2 className="section-title mb-5">
            PROPERTY FOR SALE<span> IN TURKEY</span>
          </h2>
          <p className="text-justify fs-0-7 fs-lg-1-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde,
            non facere consectetur voluptatum quod culpa nihil blanditiis
            commodi vel iusto fuga possimus quam omnis voluptatem magni dolorem
            inventore vitae quos placeat eligendi doloremque. Molestias eveniet
            voluptates a quasi, amet odio ad, voluptate atque neque aut soluta
            dolorem, qui suscipit!
          </p>
          <p className="text-justify mb-5 fs-0-7 fs-lg-1-0">
            in order to make profit in real estate in turkey, first of all, it
            is neccessary to calculate the right income, find the right real
            estate company, and the right negotiator. if you are considering
            buying a house for real estate investment, careful advice awaits you
            for this process
          </p>
        </div>
      </div>
      <div className="section px-5 py-6">
        <h2 className="section-title">
          ARTICLES<span> & TIPS</span>
        </h2>
        <p className="text-center fs-1-6 fs-1-8 fw-light">
          Lorem ipsum dolor sit amet consectetur elit
        </p>
        <div className="row pt-4 pb-4">
          <div className="col-12 col-lg-6 col-xl-4">
            <div className="card mt-4 rounded-5">
              <div className="p-3">
                <img
                  src="./assets/house.png"
                  className="card-img-top rounded-5"
                  alt=""
                />
              </div>
              <div className="card-body px-5 py-3">
                <h5 className="card-title text-danger fs-0-8">FAMILY HOUSE</h5>
                <h4 className="card-title fw-bold fs-1-8">Lorem Ipsum</h4>
                <p className="card-text fs-0-9 fw-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  volupta nam sit fugit vero consectetur fugit vero consectetur.
                </p>
              </div>
              <div className="card-footer px-5 py-3 rounded-bottom-5 bg-inherit d-flex justify-content-between align-items-center">
                <div>
                  <img src="assets/logo.png" className="me-2" alt="" />
                  <span className="fw-600">Realtor Global</span>
                </div>
                <span className="fw-600  fs-lg-0-8">Monday 09.08.2023</span>
              </div>
            </div>
          </div>
          <div className="col-12 d-none d-lg-block col-lg-6 col-xl-4">
            <div className="card mt-4 rounded-5">
              <div className="p-3">
                <img
                  src="./assets/house.png"
                  className="card-img-top rounded-5"
                  alt=""
                />
              </div>
              <div className="card-body px-5 py-3">
                <h5 className="card-title text-danger fs-0-8">FAMILY HOUSE</h5>
                <h4 className="card-title fw-bold fs-1-8">Lorem Ipsum</h4>
                <p className="card-text fs-0-9 fw-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  volupta nam sit fugit vero consectetur fugit vero consectetur.
                </p>
              </div>
              <div className="card-footer px-5 py-3 rounded-bottom-5 bg-inherit d-flex justify-content-between align-items-center">
                <div>
                  <img src="assets/logo.png" className="me-2" alt="" />
                  <span className="fw-600">Realtor Global</span>
                </div>
                <span className="fw-600 fs-lg-0-8">Monday 09.08.2023</span>
              </div>
            </div>
          </div>
          <div className="col-12 d-none d-xl-block col-lg-6 col-xl-4">
            <div className="card mt-4 rounded-5">
              <div className="p-3">
                <img
                  src="./assets/house.png"
                  className="card-img-top rounded-5"
                  alt=""
                />
              </div>
              <div className="card-body px-5 py-3">
                <h5 className="card-title text-danger fs-0-8">FAMILY HOUSE</h5>
                <h4 className="card-title fw-bold fs-1-8">Lorem Ipsum</h4>
                <p className="card-text fs-0-9 fw-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  volupta nam sit fugit vero consectetur fugit vero consectetur.
                </p>
              </div>
              <div className="card-footer px-5 py-3 rounded-bottom-5 bg-inherit d-flex justify-content-between align-items-center">
                <div>
                  <img src="assets/logo.png" className="me-2" alt="" />
                  <span className="fw-600">Realtor Global</span>
                </div>
                <span className="fw-600 fs-lg-0-8">Monday 09.08.2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" section rounded-5 mt-5 bg-gradient-2 mx-5 px-lg-5 row">
        <div className="col-sm-12 col-lg-6 align-self-center order-lg-first px-4 py-lg-5 text-center text-lg-start ">
          <h2 className="fs-2-0 fs-lg-2-5 fw-bold ms-lg-5">
            Realtor Global's Youtube Channel
          </h2>
          <p className="px-3 ps-lg-0 pe-lg-5 fs-0-8 fs-lg-1-0 ms-lg-5 fw-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod earum
            at, deleniti dolorum impedit in illo! Sed obcaecati quos laborum
            beatae veritatis assumenda neque qui.
          </p>
        </div>
        <div className="d-flex col-sm-12 col-lg-4  order-first">
          <div className=" w-65 w-md-50 w-lg-100 mx-auto position-relative d-flex mb-5 mb-lg-0 mt--10">
            <img
              src="assets/house2.png"
              className="img-fluid align-self-end me-auto"
              alt=""
            />
            <button className="bg-transparent position-absolute youtube-button">
              <img src="assets/youtube-icon.png" className="img-fluid" alt="" />
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-lg-2 d-flex">
          <button className="btn rounded-pill py-3 mt-4 mb-5 align-self-lg-center px-5 px-lg-3 d-block bg-red text-white w-50 w-lg-100 mx-auto ">
            <img
              src="assets/youtube-icon-white.png"
              className="img-fluid me-2 w-2-0"
              alt=""
            />
            <span className="fw-bold lh-1">SUBSCRIBE</span>
          </button>
        </div>
      </div>
      <div className="section mx-5 pt-5">
        <h2 className="section-title mt-5">
          WHY <span>CHOOSE US</span>
        </h2>
        <p className="fs-1-6 pb-3 text-center mx-5">
          A Professional Real Estate Serving Buyers & Sellers of Only Good
          Properties in Turkey{" "}
        </p>
        <div className="row gx-0 mt-5 bg-custom1 rounded-5 ">
          <div className="col-lg-3 col-6 py-5 py-lg-0 my-lg-5 border-bottom border-bottom-lg-0 border-end text-center">
            <img
              src="assets/icon1.png"
              className="d-block mx-auto w-25"
              alt=""
            />
            <h3 className=" mt-4 fw-600 fs-1-3 mb-0 mx-5 fs-lg-1-6">
              FIND YOUR FUTURE HOME
            </h3>
            <p className="fw-600 fs-0-7 mt-3 fs-lg-1-0">
              We help you find a new home by offering <br /> a smart real estate
              experience
            </p>
            <a className="text-black " href="#">
              <span className="me-2">READ MORE</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="col-lg-3 col-6 py-5 py-lg-0 my-lg-5 border-bottom border-bottom-lg-0  border-lg-end text-center">
            <img
              src="assets/icon2.png"
              className="d-block mx-auto w-25"
              alt=""
            />
            <h3 className=" mt-4 fw-600 fs-1-3 mb-0 mx-5 fs-lg-1-6">
              FIND YOUR FUTURE HOME
            </h3>
            <p className="fw-600 fs-0-7 mt-3 fs-lg-1-0">
              We have many years experience <br /> Real Estate Serving in Turkey
            </p>
            <a className="text-black " href="#">
              <span className="me-2">READ MORE</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="col-lg-3 col-6 py-5 py-lg-0 my-lg-5  border-end text-center">
            <img
              src="assets/icon3.png"
              className="d-block mx-auto w-25"
              alt=""
            />
            <h3 className=" mt-4 fw-600 fs-1-3 fs-lg-1-6 mb-0 mx-5">
              FIND YOUR FUTURE HOME
            </h3>
            <p className="fw-600 fs-0-7 fs-lg-1-0 mt-3">
              Thousands of Villas and Apartments <br /> in your favorite cities
            </p>
            <a className="text-black " href="#">
              <span className="me-2">READ MORE</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="col-lg-3 col-6 py-5 py-lg-0 my-lg-5 text-center">
            <img
              src="assets/icon4.png"
              className="d-block mx-auto pb-1 w-25"
              alt=""
            />
            <h3 className="mt-4 pt-3 fw-600 fs-1-3 mb-0 mx-5 fs-lg-1-6">
              FIND YOUR FUTURE HOME
            </h3>
            <p className="fw-600 fs-0-7 mt-3 fs-lg-1-0">
              Meet some of our Happy clients from <br /> the all around the
              world
            </p>
            <a className="text-black " href="#">
              <span className="me-2">READ MORE</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="section">
        <img
          src="assets/Group.png"
          className="mt-6 mb-3 w-50 w-lg-25 d-block mx-auto"
          alt=""
        />
        <h2 className="section-title">
          <span>JOIN </span>OUR NETWORK
        </h2>
        <p className="fw-600 mb-2 text-center fs-lg-1-4 mt-4 px-5">
          Keep up to Date with the Latest Market Trends and Opportunities in
          Turkey!
        </p>
        <p className="fs-1-3 fs-1-7  text-center">
          Total Email Subscribers <span className="fw-600">30.000+</span>{" "}
        </p>
        <div className="d-flex bg-white justify-content-between w-60 w-lg-35 border mt-5 p-2 mx-auto rounded-pill">
          <input
            className="border-0 rounded-pill fs-0-8 fs-lg-1-0 px-3 w-100 outline-0"
            placeholder="Write Your E-Mail Here"
            type="email"
          />
          <button className="rounded-circle py-4 px-3 border-0 bg-red text-white fs-0-8 fs-lg-1-0">
            SEND
          </button>
        </div>
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
            <a href="#" className="fs-1-5 fs-lg-1-0">
              <span className="fw-600 me-1">Read More</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="col-6 col-lg-3 px-lg-5">
            <ul className="footer-list">
              <li className="header-text">
                <a href="#">COMPANY</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">WORK WITH US</a>
              </li>
              <li>
                <a href="#">FREE VIEWING TRIP</a>
              </li>
              <li>
                <a href="#">RENTAL PROPERTIES</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 px-lg-5">
            <ul className="footer-list">
              <li className="header-text">
                <a href="#">POPULAR LOCATIONS</a>
              </li>
              <li>
                <a href="#">ANTALYA</a>
              </li>
              <li>
                <a href="#">ISTANBUL</a>
              </li>
              <li>
                <a href="#">NORTHERN CYPRUS</a>
              </li>
              <li>
                <a href="#">MERSIN</a>
              </li>
              <li>
                <a href="#">IZMIR</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 px-lg-5 mt-5 mt-lg-0">
            <ul className="footer-list">
              <li className="header-text">
                <a href="#">CONTACT US</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-phone-volume me-2"></i> +90 542 658
                  70 07
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-paper-plane me-2"></i>
                  info@realtorglobal.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-location-dot me-2"></i> Kestel Mah.
                  Toklar Cd. 7/A-B, 07450 Alanya/Antalya
                </a>
              </li>
              <li>
                <a href="#">
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

export default Home;
