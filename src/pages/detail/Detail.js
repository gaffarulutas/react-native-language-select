import { NavLink } from "react-router-dom";
import "./detail.css";
function Detail() {
  return (
    <div className="container-lg bg-light pt-1 position-relative">
      <div className="filter-btn bg-light-red text-white position-absolute d-lg-none fs-1-8 fw-600 ps-5 pe-4 py-2 rounded-end-5">
        <span className="me-2">Filter</span>
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav className="navbar border-bottom border-1 mt-lg-0 navbar-expand-lg position-static">
        <div className="container-fluid position-static py-4 px-0">
          <NavLink to="/" className="navbar-brand ms-5 ms-lg-0">
            <img
              src="/assets/mobile-brand.png"
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
      <div className="img-container position-relative">
        <img
          src="/assets/apartment-mobile.png"
          className="img-fluid apartment-img d-lg-none"
          alt=""
        />
        <img
          src="/assets/apartment.png"
          className="img-fluid apartment-img d-none d-lg-inline"
          alt=""
        />
        <div className="slider-buttons d-flex justify-content-between align-items-center px-5 w-100 position-absolute">
          <button>
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          <button>
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
        <div className="header-information d-lg-flex justify-content-between align-items-center position-absolute bottom-0 text-white w-100 px-5 py-4">
          <div>
            <h3 className="d-flex align-items-center">
              <span className="me-2 fs-1-5 fs-lg-3-0">
                SKYPER POOL APARTMENT
              </span>
              <span className="bg-green text-white fw-lg-bold fs-0-5 fs-lg-0-8 px-3 py-1 py-lg-2 px-lg-4 rounded-pill">
                FEATURED
              </span>
            </h3>
            <div className="fs-0-8 fs-lg-1-6">
              <i className="fa-solid fa-location-dot me-2"></i>
              <span> Ziraat Çıkmaz Sk. 2/Avcılar/ISTANBUL </span>
            </div>
          </div>
          <div className="fw-600 fs-1-8 mt-2 fs-lg-3-0">165.000 EUR</div>
        </div>
      </div>
      <div className="mid-nav px-5 fs-lg-1-5 d-flex justify-content-between justify-content-lg-center align-items-center border-bottom border-1">
        <a className="active" href="">
          DETAILS
        </a>
        <a href="">FEATURES</a>
        <a href="">LOCATIONS</a>
        <a href="">PLANS</a>
        <a href="">VIDEO</a>
      </div>
      <div className="row px-2">
        <div className="col-12 col-lg-8">
          <div className="box">
            <div className="overview">
              <div>
                <div className="labels mt-5">
                  <span>
                    <i className="fa-regular fa-building"></i>CONDO
                  </span>
                  <span>
                    <i className="fa-solid fa-bed"></i>BEDS: 4
                  </span>
                  <span>
                    <i className="fa-solid fa-bath"></i>BATHS: 1
                  </span>
                  <span>
                    <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    120 SQFT
                  </span>
                </div>
                <h3>OVERVIEW</h3>
                <p className="text-justify fw-bold mb-1 fs-lg-1-1">
                  RADIANTLY POLISHED HOME INVESTMENT, GRAB THE APARTMENT FOR
                  SALE IN ALANYA NOW
                </p>
                <p className="text-justify text-uppercase fs-0-7 fs-lg-0-9 fw-600 lh-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  voluptates quo illum omnis impedit laudantium animi veniam?
                  Nesciunt architecto repellat ex culpa aut suscipit beatae?
                  Facilis, quis rem? Aliquid dolorum vero at magni libero quia
                  ut sint sunt ab deserunt. voluptates quo illum omnis impedit
                  laudantium animi veniam? Nesciunt architecto repellat ex culpa
                  laudantium animi veniam? Nesciunt architecto repellat ex culpa
                  aut suscipit beatae?
                </p>
                <p className="text-justify mt-3 mt-4 mb-1 fw-bold">
                  RADIANTLY POLISHED HOME INVESTMENT, GRAB THE APARTMENT FOR
                  SALE IN ALANYA NOW
                </p>
                <p className="text-justify text-uppercase fs-0-7 fs-lg-0-9 fw-600 lh-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  voluptates quo illum omnis impedit laudantium animi veniam?
                  Nesciunt architecto repellat ex culpa aut suscipit beatae?
                  Facilis, quis rem? Aliquid dolorum vero at magni libero quia
                  ut sint sunt ab deserunt. voluptates quo illum omnis impedit
                  laudantium animi veniam? Nesciunt architecto repellat ex culpa
                  laudantium animi veniam? Nesciunt architecto repellat ex culpa
                  aut suscipit beatae?
                </p>
              </div>
            </div>
            <div className="details px-5 py-3 border-bottom">
              <div className="px-3 mb-5">
                <h3>DETAILS</h3>
                <ul className="d-lg-flex justify-content-between align-items-center pe-lg-5">
                  <div>
                    <li>
                      <span className="icon me-1">ID.</span>
                      <span>REF ID:</span>
                      <span>5861</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                      <span>HOME AREA (SQFT):</span>
                      <span>100 SQFT</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-couch"></i>
                      <span>ROOMS:</span>
                      <span>6</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bath"></i>
                      <span>BATHS:</span>
                      <span>1</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-calendar"></i>
                      <span>YEAR BUILT:</span>
                      <span>2018</span>
                    </li>
                  </div>
                  <div>
                    <li>
                      <i className="fa-solid fa-ruler"></i>
                      <span>LOT AREA (SQFT):</span>
                      <span>120 SQFT</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-cube"></i>
                      <span>LOT DIMENSIONS</span>
                      <span>5x25x15</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-bed"></i>
                      <span>BEDS:</span>
                      <span>4</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-tag"></i>
                      <span>PRICE ($):</span>
                      <span>$5500</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-spinner"></i>
                      <span>STATUS:</span>
                      <span>FOR SALE</span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="files border-0 p-5">
              <div className="row p-3">
                <div className="col-12 col-lg-6 d-flex align-items-end p-3 justify-content-center gap-3">
                  <img src="/assets/pdf-img.png" className="file-icon" alt="" />
                  <img
                    src="/assets/download-icon.png"
                    className="download-icon align-self-center"
                    alt=""
                  />
                  <a className="file-link align-self-center fs-lg-1-3" href="">
                    Realestate_property.pdf
                  </a>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-end p-3 justify-content-center gap-3">
                  <img
                    src="/assets/doc-img.png"
                    className="file-icon ms-2"
                    alt=""
                  />
                  <img
                    src="/assets/download-icon.png"
                    className="download-icon align-self-center"
                    alt=""
                  />
                  <a className="file-link align-self-center fs-lg-1-3" href="">
                    Realestate_property.docx
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="tags">
              <div className="mb-5">
                <h3>TAGS</h3>
                <div className="row">
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>AIR CONDITIONING</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>BARBEQUE</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>DRYER</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>REFRIGERATOR</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>WASHER</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>AIR CONDITIONING</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>BARBEQUE</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>DRYER</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>REFRIGERATOR</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>WASHER</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="indoor">
              <div className="mb-5">
                <h3>INDOOR FACILITIES</h3>
                <div className="row">
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>AIR CONDITIONING</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>BARBEQUE</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>DRYER</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>REFRIGERATOR</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>WASHER</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>AIR CONDITIONING</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>BARBEQUE</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>DRYER</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>REFRIGERATOR</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>WASHER</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="outdoor border-0">
              <div className="mb-5">
                <h3>OUTDOOR FACILITIES</h3>
                <div className="row">
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>AIR CONDITIONING</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>BARBEQUE</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>DRYER</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>REFRIGERATOR</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>WASHER</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>AIR CONDITIONING</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>BARBEQUE</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>DRYER</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>REFRIGERATOR</span>
                  </div>
                  <div className="col-6 col-lg-4 mt-4 fs-1-1 fs-lg-1-3 fw-600">
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#00b96f" }}
                    ></i>
                    <span>WASHER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box p-5">
            <h3 className="mt-0 d-flex align-items-center justify-content-between p-lg-3">
              <span className="fs-1-2 fs-lg-1-6">LOCATION</span>
              <span className="fs-0-9 fs-lg-1-4 fw-600 ms-auto text-end">
                <i className="fa-solid fa-location-dot"></i> Ziraat Çıkmaz Sk.
                2/Avcılar/ISTANBUL
              </span>
            </h3>
            <div className="p-0 border-0 p-lg-3">
              <img
                src="/assets/map2.png"
                className="img-fluid rounded-4"
                alt=""
              />
            </div>
          </div>
          <div className="box p-5">
            <div className="p-0 px-lg-3 border-0">
              <h3 className="mt-0 d-lg-flex align-items-center justify-content-between">
                <span className="fs-1-2 fs-lg-1-6">FLOOR PLANS</span>
                <div className="d-none d-lg-block">
                  <span className="fs-0-9 fs-lg-1-4 fw-600 ms-auto text-end">
                    <i className="fa-solid fa-location-dot"></i> Ziraat Çıkmaz
                    Sk. 2/Avcılar/ISTANBUL
                  </span>
                </div>
              </h3>
              <button className="border-0 rounded-3 bg-custom1 w-100 d-flex justify-content-between align-items-center p-3 lh-1 mt-lg-5">
                <span className="fw-700 fs-0-7 fs-lg-1-4">FIRST FLOOR</span>
                <div className="fs-0-6 fs-lg-1-2 fw-600">
                  <span>ROOMS:</span>
                  <span>2</span>
                  <span className="ms-3 ms-lg-4">BATHS:</span>
                  <span>1</span>
                  <span className="ms-3 ms-lg-4">SIZE:</span>
                  <span>80 SQFT</span>
                  <i className="fa-solid fa-chevron-down fa-2xs ms-4 ms-lg-5"></i>
                </div>
              </button>
              <img src="/assets/floor-plan.png" className="img-fluid" alt="" />
              <button className="border-0 rounded-3 bg-custom1 w-100 d-flex justify-content-between align-items-center p-3 lh-1 mt-lg-5">
                <span className="fw-700 fs-0-7 fs-lg-1-4">FIRST FLOOR</span>
                <div className="fs-0-6 fs-lg-1-2 fw-600">
                  <span>ROOMS:</span>
                  <span>2</span>
                  <span className="ms-3 ms-lg-4">BATHS:</span>
                  <span>1</span>
                  <span className="ms-3 ms-lg-4">SIZE:</span>
                  <span>80 SQFT</span>
                  <i className="fa-solid fa-chevron-up fa-2xs ms-4 ms-lg-5"></i>
                </div>
              </button>
              <img
                src="/assets/floor-plan.png"
                className="img-fluid d-none"
                alt=""
              />
            </div>
          </div>
          <div className="box p-5">
            <h3 className="mt-0 d-flex align-items-center justify-content-between p-lg-3 fs-1-0 fs-lg-1-6">
              PROPERTY VIDEO
            </h3>
            <div className="p-0 border-0 p-lg-3 position-relative">
              <img
                src="/assets/video-img.png"
                className="img-fluid rounded-3"
                alt=""
              />
              <button className="border-0 bg-transparent p-0 youtube-btn">
                <img
                  src="/assets/youtube-icon.png"
                  className="img-fluid"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-4">
          <div className="box">
            <div className="agent border-0 text-center">
              <h3>CONTACT OUR AGENT</h3>
              <img
                src="/assets/agent-pp.png"
                className="rounded-circle agent-pp"
                alt=""
              />
              <h6 className="mt-5 fw-700 fs-1-2">MUHAMMED SHAGALEH</h6>
              <p className="fw-600 mb-2">+90 507 878 93 91</p>
              <p className="fw-600 mt-2">INFO@REALTORGLOBAL.COM</p>
            </div>
            <form action="" className="mx-5">
              <div className="form-row">
                <label htmlFor="name">NAME</label>
                <input type="text" />
              </div>
              <div className="form-row">
                <label htmlFor="email">E-MAIL</label>
                <input type="text" />
              </div>
              <div className="form-row">
                <label htmlFor="phone">PHONE</label>
                <input type="text" />
              </div>
              <div className="form-row d-flex">
                <label htmlFor="message" className="align-self-start">
                  MESSAGE
                </label>
                <textarea
                  className="text-black"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-row border-0 p-0">
                <button className="w-100 rounded-pill border-0 bg-light-red text-white py-3">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="box filter bg-white mt-4 me-5 border border-1 rounded-4 py-4 px-5">
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
          <div className="box latest bg-white me-5 border border-1 rounded-4 py-4 px-5">
            <p className="d-flex justify-content-between align-items-center mt-4">
              <span className="fw-bold fs-1-6">LATEST PROPERTIES</span>
              <i className="fa-solid fa-chevron-down fa-2xs"></i>
            </p>
            <div className="p-0 border-0 row property mb-5 mt-5">
              <div className="col-4">
                <img
                  src="/assets/house-mini.png"
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
            <div className="p-0 border-0 row property mb-5">
              <div className="col-4">
                <img
                  src="/assets/house-mini.png"
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
            <div className="p-0 border-0 row property mb-5">
              <div className="col-4">
                <img
                  src="/assets/house-mini.png"
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
            <div className="p-0 border-0 row property mb-5">
              <div className="col-4">
                <img
                  src="/assets/house-mini.png"
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
            <div className="p-0 border-0 row property mb-5">
              <div className="col-4">
                <img
                  src="/assets/house-mini.png"
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
      </div>
      <div className="footer-container bg-white mx-5 mx-lg-4 p-5 rounded-top-5 mt-5 border border-1">
        <div className="row">
          <div className="col-12 col-lg-3 px-lg-5 mb-5 mb-lg-0">
            <img
              src="/assets/brand-column.png"
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
                  <img src="/assets/bitcoin.png" className="w-50" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-foot mx-5 mx-lg-4 bg-custom2 text-white p-5 d-flex flex-column flex-lg-row align-items-center justify-content-between rounded-bottom-5">
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

export default Detail;
