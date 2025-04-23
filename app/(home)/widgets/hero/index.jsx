"use client";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        backgroundImage: "url('/WEB site 03A 2.png')", // replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        minHeight: "100vh",
        padding: "3rem 1rem",
        // marginTop:"-120px"
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col
            xs={12}
            md={6}
            className="text-center text-md-start"
          >
            <div>
              <p
                className="text-uppercase"
                style={{ fontSize: "14px", color: "#ccc" }}
              >
                Your Trusted Partner for Best Legal Services
              </p>

              <h1 className="fw-bold display-5 display-md-4">
                Akshay Kumar{" "}
                <span style={{ color: "#2abecb", fontSize: "45px" }}>
                  Associates
                </span>
              </h1>

              <p
                className="mx-auto mx-md-0"
                style={{
                  color: "#aaa",
                  fontSize: "18px",
                  lineHeight: "1.7rem",
                  maxWidth: "100%",
                }}
              >
                With a steadfast commitment to excellence, we have earned the
                reputation of being among the top providers of legal services.
                We dedicate our team of attorneys to delivering superior legal
                counsel and achieving top results for our clients.
              </p>

              {/* Button & Icon Row */}
              <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-3 flex-wrap mt-4">
                <button
                  className="btn btn-outline-light px-4 py-2 rounded-pill"
                  style={{
                    border: "2px solid white",
                    fontWeight: "500",
                    fontSize: "16px",
                    height: "60px",
                    minWidth: "170px",
                  }}
                >
                  Contact Me
                </button>

                <i
                  className="fas fa-arrow-down"
                  style={{
                    fontSize: "40px",
                    color: "#ccc",
                  }}
                ></i>
              </div>
            </div>
          </Col>

          {/* Right Image */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-end mt-5 mt-md-0" >
            <div style={{ maxWidth: "100%", height: "auto" }}>
              <Image
                src="/AK rt.png"
                alt="Akshay Kumar"
                width={530}
                height={630}
                style={{ objectFit: "contain", maxWidth: "100%", height: "auto", position:"relative", top:"50px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
