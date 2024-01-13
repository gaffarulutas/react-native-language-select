import { NavLink } from "react-router-dom";
import "./franchise.css";
function Franchise() {
  return (
    <div className="container-lg">
      <nav className="navbar py-0 navbar-expand-lg position-static border-bottom">
        <div className="container-fluid px-5 py-3 mt-4-8 mt-lg-0">
          <NavLink to="/" className="navbar-brand  me-lg-0">
            <img
              src="./assets/brand-dark.png"
              className="w-50 w-lg-75"
              alt="brand"
            />
          </NavLink>
          <button
            className="navbar-toggler border-0 p-0"
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
            className="collapse navbar-collapse ms-lg-auto me-lg-auto flex-grow-1 fw-600 "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 text-center mb-lg-0 w-100 justify-content-around ">
              <li className="nav-item">
                <a className="nav-link " href="">
                  OUR OFFICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="">
                  OUR CONSULTANTS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="">
                  OUR PRESENCE IN THE PRESS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="">
                  ABOUT US
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div
            className="btn-toolbar flex-shrink-1 d-flex w-100 w-lg-auto px-5 px-lg-0 
                    justify-content-between justify-content-lg-end position-absolute 
                    position-lg-relative "
          >
            <button className="btn border me-2 rounded-3">
              <img
                src="./assets/flag-england.png"
                className="d-inline-block w-1-8"
                alt=""
              />
              <i className="fa-solid fa-sort-down fa-xs ms-2"></i>
            </button>
            <a className="btn border px-3 rounded-3 d-flex align-items-center">
              <i className="fa-regular lh-1 fa-building me-1  fs-0-8"></i>
              <span className="fw-600 lh-1  fs-0-8 fs-lg-1-0">
                OPEN AN OFFICE
              </span>
              <i className="fa-solid lh-1  fs-0-8 fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </nav>
      <div className="franchise-home pb-8 pb-lg-0 rounded-bottom-4 pt-5 mx-5 px-lg-5 ">
        <div className="position-relative mt-lg-5 overflow-hidden">
          <img
            src="/assets/pink-rectangle.png"
            className="pink-background"
            alt=""
          />
          <div className=" position-absolute ps-5 pe-4 top-0 left-0">
            <div className="button-group mb-4 pt-lg-5">
              <button className=" border bg-inherit fw-600 fs-0-6 me-1 fs-lg-0-9 rounded-pill lh-lg py-2 px-3 ">
                LOREM IPSUM SET
              </button>
              <button className=" border bg-inherit fw-600 fs-0-6 me-1 fs-lg-0-9 rounded-pill lh-lg py-2 px-3 ">
                LOREM IPSUM SET
              </button>
              <button className=" border bg-inherit fw-600 fs-0-6 fs-lg-0-9 rounded-pill lh-lg py-2 px-3 ">
                LOREM IPSUM SET
              </button>
            </div>
            <h2 className="fs-2-3 fs-lg-4-2 py-2 fw-lighter">
              JOIN{" "}
              <span className="fw-600">
                REALTOR GLOBAL, <br />
              </span>
              LET'S GET PROFIT TOGETHER!
            </h2>
            <p className="fw-600 fs-0-6 my-4 fs-lg-1-1 w-68 w-lg-45 pe-lg-5 text-justify">
              REALTOR GLOBAL HAS BECOME A RAPIDLY RECOGNIZED AND GROWING BRAND
              IN THE GLOBAL MARKET IN A SHORT TIME WITH INNOVATIONS IN THE REAL
              ESTATE SECTOR WITH MANY COUNTRIES' CONNECTIONS, REACHING LOCAL AND
              FOREIGN CUSTOMERS
            </p>
            <p className=" fs-0-6 fs-lg-0-8 bg-light-red d-inline-block text-white rounded-3 w-75 w-lg-60 text-justify px-2 pt-2 pb-1 lh-sm ">
              {" "}
              GRAB YOUR SEAT IN THE WORLD OF PRIVILEGES WITH REALTOR GLOBAL,
              TURKEY'S FASTEST GROWING REAL ESTATE FRANCHISE BRAND!
            </p>
          </div>
        </div>
      </div>
      <div className="section mx-5 ">
        <img
          src="/assets/down-arrow-icon.png"
          className="d-block mx-auto mt-3 py-5"
          style={{ width: "2.65rem" }}
          alt=""
        />
        <h2 className="section-title fs-lg-3-4">
          WHAT DO OUR <span>FIGURES</span> SAY?
        </h2>
        <p className="fs-lg-1-4 text-center ">
          Realtor Global operates in the field of real estate with its
          cooperation in many countries, international offices, and happy
          customers
        </p>
        <img
          src="/assets/statistics-lg.png"
          className="d-none d-lg-block w-75 mx-auto my-5"
          alt=""
        />
        <img
          src="./assets/statistics.png"
          className="my-5 d-block d-lg-none w-60 mx-auto"
          alt="brand"
        />
      </div>
      <div className="section mx-4 pt-5">
        <h2 className="section-title fs-lg-3-4">
          WHY CHOOSE <span>REALTOR GLOBAL</span>?
        </h2>
        <p className=" fs-lg-1-4 text-center">
          With 10 years of experience in the field of real estate, our company
          gathers everyone who wants to rise in the sector and sign the firsts
          under the root of Realtor Global
        </p>

        <div className="accordion-section my-5 row ">
          <div className="col-12 col-lg-4 px-4">
            <ul className="list-group bg-custom1 border rounded-4 p-0">
              <li
                className="list-group-item p-4 bg-light-red text-white 
                            fw-bold d-flex align-items-center"
              >
                <img
                  src="/assets/brand-icon.png"
                  className="me-3 w-2-0"
                  alt=""
                />
                <span className="me-auto fs-1-4">WHY REALTOR GLOBAL?</span>
                <i className="fa-solid fa-arrow-down-long d-lg-none"></i>
                <i className="fa-solid fa-arrow-right-long d-none d-lg-inline"></i>
              </li>
              <div className=" d-lg-none mx-5 overflow-auto">
                <h3 className=" mt-5 mb-0 fw-bold fs-2-4">
                  WHY REALTOR GLOBAL?
                </h3>
                <p className="fw-normal fs-1-3 pt-5 pe-5 text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                  error. Rem eos iure error neque inventore dolore repellendus!
                  Facilis architecto commodi, quos id tempora laudantium tenetur
                  suscipit, autem dolore minima dolorem quis cum velit esse
                  placeat nemo aliquid odit fuga? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Nam, error. Rem eos iure error
                  neque inventore dolore repellendus! Facilis architecto
                  commodi, quos id tempora laudantium tenetur suscipit, autem
                  dolore minima dolorem quis cum velit esse placeat nemo aliquid
                  odit fuga? Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Nam, error. Rem eos iure error neque inventore dolore
                  repellendus! Facilis architecto commodi, quos id tempora
                  laudantium tenetur suscipit, autem dolore minima dolorem quis
                  cum velit esse placeat nemo aliquid odit fuga?
                </p>
              </div>
              <li className="list-group-item p-4 bg-custom1 fw-bold">
                <i className="fa-regular fa-circle-question fs-3 fw-lighter me-3"></i>
                <span className="fs-1-4">WHO IS REALTOR GLOBAL?</span>
              </li>
              <li className="list-group-item p-4 bg-custom1 fw-bold">
                <i className="fa-solid fa-user-group fs-5 me-3"></i>
                <span className="fs-1-4">EXPERIENCED TEAM</span>
              </li>
              <li className="list-group-item p-4 bg-custom1 fw-bold">
                <i className="fa-solid fa-microchip fs-4 me-3"></i>
                <span className="fs-1-4">TECHNOLOGİCAL INFRASTRUCTURE</span>
              </li>
              <li className="list-group-item p-4 bg-custom1 fw-bold">
                <i className="fa-solid fa-route fs-4 me-3"></i>
                <span className="fs-1-4">FRANCHISING IS UNIQUE</span>
              </li>
              <li className="list-group-item p-4 bg-custom1 fw-bold">
                <i className="fa-regular fa-building fs-3 me-3"></i>
                <span className="fs-1-4">RIGHT PLACE AT THE RIGHT TIME</span>
              </li>
              <li className="list-group-item p-4 bg-custom1 fw-bold">
                <i className="fa-regular fa-id-badge fs-4 me-3"></i>
                <span className="fs-1-4">CONSULTING AND SUPPORT</span>
              </li>
              <li className="list-group-item p-4 bg-custom1 fw-bold">
                <i className="fa-solid fs-6 me-3 fa-cube"></i>
                <span className="fs-1-4">EDUCATION AND GUIDANCE</span>
              </li>
              <li className="list-group-item p-4 bg-custom1 fw-bold">
                <i className="fa-solid fs-6 me-3 fa-bullseye"></i>
                <span className="fs-1-4">MARKETING AND COMMUNICATION</span>
              </li>
              <li className="list-group-item p-4 bg-custom1 fw-bold">
                <i className="fa-solid fs-6 me-3 fa-video"></i>
                <span className="fs-1-4">CONGRESS AND MEETINGS</span>
              </li>
            </ul>
          </div>
          <div className="d-none d-lg-block col-lg-8 align-self-center">
            <div className="monitor2 p-5 bg-custom1 rounded-4 d-lg-flex justify-content-between align-items-center">
              <div className=" text-justify me-4 monitor2-text pe-2">
                <h5 className="fw-bold mb-3 fs-lg-2-1">WHY REALTOR GLOBAL?</h5>
                <div className="fw-600 fs-lg-1-1 lh-lg pe-lg-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis, blanditiis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nobis, blanditiis! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Nobis, blanditiis! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                  blanditiis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nobis, blanditiis! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Nobis, blanditiis! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                  blanditiis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nobis, blanditiis! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Nobis, blanditiis! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                  blanditiis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nobis, blanditiis! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Nobis, blanditiis! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                  blanditiis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nobis, blanditiis! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Nobis, blanditiis! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                  blanditiis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nobis, blanditiis! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Nobis, blanditiis! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                  blanditiis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nobis, blanditiis! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Nobis, blanditiis! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                  blanditiis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nobis, blanditiis! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Nobis, blanditiis! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                  blanditiis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nobis, blanditiis! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Nobis, blanditiis! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                  blanditiis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nobis, blanditiis!
                </div>
              </div>
              <div className="position-relative mt-5">
                <img
                  src="/assets/rectanle3.png"
                  className="accordion-img rounded-5 "
                  alt=""
                />
                <img
                  src="/assets/brand-icon-2.png"
                  className="position-absolute brand-in-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section mx-0 ceo-section mx-lg-4 rounded-lg-5 position-relative p-5">
        <div
          className="ceo-text-container w-lg-70 mx-lg-auto rounded-4 
                rounded-lg-5 p-4 px-lg-5 pt-lg-5 pb-lg-0 mb-4 mt-lg-5
                d-lg-flex
                "
        >
          <div className="z-100">
            <div className="ps-2 position-absolute position-lg-relative pt-5 pt-lg-0 top-0 mt-lg-3 start-0">
              <p className="mt-5 mt-lg-0 ms-5 ms-lg-0 mb-0 pb-0 fw-600 text-white fs-lg-0-5">
                CHAIRMAN OF REALTOR GLOBAL REAL ESTATE
              </p>
              <h3 className="my-2 ms-5 ms-lg-0 text-white fw-bold fs-2-2 fs-lg-1-2">
                ANIL ULAŞ ÖVENÇOĞLU
              </h3>
              <p
                className="bg-light-red ms-5 ms-lg-0 me-lg--7 mb-2 text-white fw-600 py-2 my-lg-3 px-2 lh-1 rounded-pill
                            d-inline-block fs-0-6 fs-lg-0-8"
              >
                A NAME THAT MAKES A NAME FOR ITSELF WITH ITS LEADING REAL ESTATE
                COMPANY
              </p>
            </div>
            <div className="ceo-text text-white text-justify ps-2 pe-4 pe-lg-5 my-2 fs-0-9 lh-sm">
              <p>
                Anıl Ulaş Övençoğlu, who created a new brand by gathering the
                buyers and sellers of premium properties in many cities of
                Turkey under a common roof, stepped into the real estate
                consultancy sector in 2014, realizing the lack of qualifed
                brokerage services while he was a real estate investor until
                2013.
              </p>
              <p>
                Realtor Global, which stands out with its communication skills
                and has been serving for years with Turkey's expert teams and
                sector experience, was founded in 2014 by Anıl Ulaş Övençoğlu.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                Anıl Ulaş Övençoğlu, who created a new brand by gathering the
                buyers and sellers of premium properties in many cities of
                Turkey under a common roof, stepped into the real estate
                consultancy sector in 2014, realizing the lack of qualifed
                brokerage services while he was a real estate investor until
                2013.
              </p>
              <p>
                Realtor Global, which stands out with its communication skills
                and has been serving for years with Turkey's expert teams and
                sector experience, was founded in 2014 by Anıl Ulaş Övençoğlu.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                Anıl Ulaş Övençoğlu, who created a new brand by gathering the
                buyers and sellers of premium properties in many cities of
                Turkey under a common roof, stepped into the real estate
                consultancy sector in 2014, realizing the lack of qualifed
                brokerage services while he was a real estate investor until
                2013.
              </p>
              <p>
                Realtor Global, which stands out with its communication skills
                and has been serving for years with Turkey's expert teams and
                sector experience, was founded in 2014 by Anıl Ulaş Övençoğlu.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                Anıl Ulaş Övençoğlu, who created a new brand by gathering the
                buyers and sellers of premium properties in many cities of
                Turkey under a common roof, stepped into the real estate
                consultancy sector in 2014, realizing the lack of qualifed
                brokerage services while he was a real estate investor until
                2013.
              </p>
              <p>
                Realtor Global, which stands out with its communication skills
                and has been serving for years with Turkey's expert teams and
                sector experience, was founded in 2014 by Anıl Ulaş Övençoğlu.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
              <p>
                The diference between Realtor Global Real Estate and Investment
                company is that it is a company that can think internationally,
                adopts a universal approach model, not just for its own market
                and customer, and has made rapid progress with its well-trained
                staf in this feld.
              </p>
            </div>
          </div>
          <img
            src="/assets/ceo-lg.png"
            className="ceo-img-lg d-none d-lg-inline"
            alt=""
          />
          <img src="/assets/ceo.png" alt="" className="ceo-img d-lg-none" />
        </div>
      </div>
      <div className="section offices mt-5 mb-lg-5 py-lg-5 mx-5 mx-lg-4">
        <div className="office1 pt-5 pb-lg-5">
          <div className="row">
            <div className="col-12 col-lg-6 pb-5">
              <img
                src="/assets/house3.png"
                className=" office-img w-90 rounded-4"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6 fw-600 my-5 my-lg-0 ps-lg-5">
              <h2 className="fs-2-4 fw-200 mb-4 fs-lg-3-0">
                <span className="fw-600">REALTOR GLOBAL</span> OFFICES
              </h2>
              <p className=" text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo expedita, beatae cum et sint inventore maxime, doloribus
                ullam provident quas adipisci at ab fugit voluptatibus, esse
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque nam inventore?dignissimos.Consectetur fugit
                magnam molestiae nobis ducimus dolores qui ea neque
              </p>
              <p className=" text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo expedita, beatae cum et sint inventore maxime, doloribus
                ullam provident quas adipisci at ab fugit voluptatibus, esse
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque nam inventore?dignissimos.Consectetur fugit
                magnam molestiae nobis ducimus dolores qui ea neque
              </p>
              <p className=" text-justify d-none d-lg-block">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo expedita, beatae cum et sint inventore maxime, doloribus
                ullam provident quas adipisci at ab fugit voluptatibus, esse
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque dignissimos.Consectetur fugit magnam
                molestiae nobis ducimus dolores qui ea neque
              </p>
              <p className=" text-justify d-none d-lg-block">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo expedita, beatae cum et sint inventore maxime, doloribus
                ullam provident quas adipisci at ab fugit voluptatibus, esse
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque dignissimos.Consectetur fugit magnam
                molestiae nobis ducimus dolores qui ea neque
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque
              </p>
              <p className=" text-justify d-none d-lg-block">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo expedita, beatae cum et sint inventore maxime, doloribus
                ullam provident quas adipisci at ab fugit voluptatibus, esse
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque dignissimos.Consectetur fugit magnam
                molestiae nobis ducimus dolores qui ea neque
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque dignissimos.Consectetur fugit magnam
                molestiae nobis ducimus dolores qui ea neque
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque dignissimos.Consectetur fugit magnam
                molestiae nobis ducimus dolores qui ea neque
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui
              </p>
            </div>
          </div>
        </div>
        <div className="office2 pt-5 my-lg-5">
          <div className="row">
            <div className="col-12 col-lg-6 pb-5">
              <img
                src="/assets/house4.png"
                className=" office-img w-90 d-block ms-auto rounded-4"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6 fw-600 mt-5 mb-2 mb-lg-0 mt-lg-0 order-lg-first pe-lg-5">
              <h2 className="fs-2-4 fw-200 mb-4 fs-lg-3-0">
                <span className="fw-600">REALTOR GLOBAL</span> OFFICES
              </h2>
              <p className=" text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo expedita, beatae cum et sint inventore maxime, doloribus
                ullam provident quas adipisci at ab fugit voluptatibus, esse
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque nam inventore?dignissimos.Consectetur fugit
                magnam molestiae nobis ducimus dolores qui ea neque
              </p>
              <p className=" text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo expedita, beatae cum et sint inventore maxime, doloribus
                ullam provident quas adipisci at ab fugit voluptatibus, esse
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque nam inventore?dignissimos.Consectetur fugit
                magnam molestiae nobis ducimus dolores qui ea neque
              </p>
              <p className=" text-justify d-none d-lg-block">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo expedita, beatae cum et sint inventore maxime, doloribus
                ullam provident quas adipisci at ab fugit voluptatibus, esse
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque dignissimos.Consectetur fugit magnam
                molestiae nobis ducimus dolores qui ea neque
              </p>
              <p className=" text-justify d-none d-lg-block">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo expedita, beatae cum et sint inventore maxime, doloribus
                ullam provident quas adipisci at ab fugit voluptatibus, esse
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque dignissimos.Consectetur fugit magnam
                molestiae nobis ducimus dolores qui ea neque
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque
              </p>
              <p className=" text-justify d-none d-lg-block">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo expedita, beatae cum et sint inventore maxime, doloribus
                ullam provident quas adipisci at ab fugit voluptatibus, esse
                dignissimos.Consectetur fugit magnam molestiae nobis ducimus
                dolores qui ea neque dignissimos.Consectetur fugit magnam
                molestiae nobis ducimus dolores qui ea neque
              </p>
            </div>
          </div>
        </div>
        <div className="btn-group my-5 py-lg-5 my-lg-0 d-flex justify-content-center gap-4 gap-lg-5">
          <button
            className="d-flex align-items-center flex-grow-lg-0 btn bg-light-red text-white rounded-pill 
                    py-2 px-4 py-lg-3 px-lg-5 fs-0-7 fs-lg-1-0"
          >
            <i className="fas fa-user-alt me-2 me-lg-3"></i>
            <span className="flex-grow-1 flex-grow-lg-0 lh-1">
              I WANT TO BE A CONSULTANT
            </span>
            <i className="fa-solid ms-2 ms-lg-3 fa-arrow-right-long"></i>
          </button>
          <button
            className="d-flex align-items-center btn  flex-grow-lg-0 bg-black text-white rounded-pill 
                    py-2 px-4 py-lg-3 px-lg-5 fs-0-7 fs-lg-1-0"
          >
            <i className="fa-regular fa-building me-2 me-lg-3 fs-4"></i>
            <span className="lh-1 flex-grow-1 flex-grow-lg-0 ">
              I WANT TO OPEN AN OFFICE
            </span>
            <i className="fa-solid fa-arrow-right-long ms-2 ms-lg-3"></i>
          </button>
        </div>
      </div>
      <div className="section mx-5 mx-lg-4 pt-5">
        <h2 className="section-title fs-lg-3-8">
          <span>REALTOR GLOBAL</span> IN THE PRESS
        </h2>
        <p className="fs-0-9 text-center pb-4 pb-lg-0 fs-lg-1-8">
          You can follow Realtor Global's innovations, developments and much
          more
        </p>
        <div className="">
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-xxl-4">
              <div className="card mt-4  rounded-5">
                <div className="img-container p-3">
                  <img
                    src="./assets/house.png"
                    className="card-img-top rounded-5"
                    alt=""
                  />
                </div>
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold w-75 mt-0">
                    Realtor Global Becomes Hull City's Global Real Estate
                    Sponsor
                  </h3>
                </div>
                <div
                  className="card-footer bg-white rounded-bottom-5 px-4 py-4 d-flex
                             justify-content-between align-items-center"
                >
                  <div className="brand ms-3">
                    <img
                      src="/assets/logo.png"
                      className="me-3  w-2-5"
                      alt=""
                    />
                    <span className="fw-600">Realtor Global</span>
                  </div>
                  <span className="fw-600 me-3">Monday 09.08.2023</span>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-flex col-sm-12 col-lg-6 col-xxl-4">
              <div className="card mt-4  rounded-5">
                <div className="img-container p-3">
                  <img
                    src="./assets/house.png"
                    className="card-img-top rounded-5"
                    alt=""
                  />
                </div>
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold w-75 mt-0">
                    Realtor Global Becomes Hull City's Global Real Estate
                    Sponsor
                  </h3>
                </div>
                <div
                  className="card-footer bg-white rounded-bottom-5 px-4 py-4 d-flex
                                 justify-content-between align-items-center"
                >
                  <div className="brand ms-3">
                    <img
                      src="/assets/logo.png"
                      className="me-3  w-2-5"
                      alt=""
                    />
                    <span className="fw-600">Realtor Global</span>
                  </div>
                  <span className="fw-600 me-3">Monday 09.08.2023</span>
                </div>
              </div>
            </div>
            <div className="d-none d-xxl-flex col-sm-12 col-lg-6 col-xxl-4">
              <div className="card mt-4  rounded-5">
                <div className="img-container p-3">
                  <img
                    src="./assets/house.png"
                    className="card-img-top rounded-5"
                    alt=""
                  />
                </div>
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold w-75 mt-0">
                    Realtor Global Becomes Hull City's Global Real Estate
                    Sponsor
                  </h3>
                </div>
                <div
                  className="card-footer bg-white rounded-bottom-5 px-4 py-4 d-flex
                                    justify-content-between align-items-center"
                >
                  <div className="brand ms-3">
                    <img
                      src="/assets/logo.png"
                      className="me-3  w-2-5"
                      alt=""
                    />
                    <span className="fw-600">Realtor Global</span>
                  </div>
                  <span className="fw-600 me-3">Monday 09.08.2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5 pb-4">
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
      </div>
      <div className="section mt-5 mx-5">
        <div className="bg-custom1 section-footer pt-5 px-4  rounded-top-5 rounded-lg-5">
          <div className="row">
            <div className="col-12 col-lg-7">
              <div
                className="section-header mb-5 mt-5 mt-lg-0 h-100 d-lg-flex 
                            align-items-center flex-column justify-content-center"
              >
                <h2 className="section-title fs-lg-2-8">
                  <span>DISCOVER REALTOR GLOBAL!</span>
                </h2>
                <p className="fs-1-2 py-4 fs-lg-1-5 text-center">
                  Realtor Global provides consultancy services using new
                  generation marketing techniques with its digital offices and
                  professional real estate consultants.
                </p>
                <div className="btn-group px-4 pb-4 pb-lg-5 d-flex justify-content-center gap-4">
                  <button
                    className="flex-grow-1 d-flex align-items-center justify-content-center btn bg-light-red text-white rounded-4 
                                    rounded-lg-5 py-3 px-4 px-lg-5 fs-0-7 fs-lg-1-0 "
                  >
                    <i className="fas fa-user-alt me-2"></i>
                    <span className="lh-1">BE A CONSULTANT</span>
                    <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                  </button>
                  <button
                    className="flex-grow-1 d-flex align-items-center justify-content-center btn bg-black text-white rounded-4 
                                    rounded-lg-5 py-3 px-4 px-lg-5 fs-0-7 fs-lg-1-0"
                  >
                    <i className="fa-regular fa-building me-2"></i>
                    <span className="lh-1 ">OPEN AN OFFICE</span>
                    <i className="fa-solid ms-2 fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 order-lg-first">
              <div className="purple-background w-75 mx-auto mt--3">
                <img src="/assets/person3.png" className="w-100 mt--3" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-foot rounded-bottom-5 mt-lg-5 p-4 d-flex flex-column 
                flex-lg-row align-items-center justify-content-between bg-custom2 text-white p-lg-5"
        >
          <div className="icons my-3 my-lg-0">
            <i className="fa-brands fa-whatsapp me-4 fs-1-3"></i>
            <i className="fa-brands fa-x-twitter me-4 fs-1-3"></i>
            <i className="fa-brands fa-square-youtube  me-4 fs-1-3"></i>
            <i className="fa-brands fa-instagram  me-4 fs-1-3"></i>
            <i className="fa-brands fa-facebook  me-4 fs-1-3"></i>
          </div>
          <p className="mb-4 mb-lg-0 mt-lg-0 mb-0 text-center">
            &copy; 2014-2024 REALTOR GLOBAL. ALL RIGHT RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Franchise;
