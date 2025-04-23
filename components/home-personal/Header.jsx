'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/Frame 5.png"
      data-overlay-dark="2"
      style={{height:'740px'}}
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/header/hi.png" alt="" />
                </span>{' '}
                Hello! there
              </h6>
              <h1 className="fw-700 mb-10">
                Akshay Kumar <span className="main-color" style={{fontSize:'60px'}}>Associates</span>
              </h1>

              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      With a steadfast commitment to excellence, we have earned the reputation of being among the top providers of legal services. 
                      We dedicate our team of attorneys to delivering superior legal counsel and achieving top results for our clients
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contact Me</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">Webfolio.Info@gmail.com</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">+2 456 (343) 24 45</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">5919 Trussville Pkwy, Birmingham</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
