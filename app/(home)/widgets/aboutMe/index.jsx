"use client";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

function AboutMe() {
  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "#0f0f0f",
        color: "white",
        minHeight: "700px",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left: Image and Icons */}
          <Col
            xs={12}
            md={6}
            className="text-center position-relative mb-5 mb-md-0"
          >
            <div
              className="mx-auto d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                aspectRatio: "3 / 4", // keep shape consistent on smaller screens
                borderRadius: "50% / 40%",
                border: "2px solid white",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/image 21.png"
                alt="Profile"
                width={300} // smaller than the container
                height={420}
                style={{
                  objectFit: "cover",
                  borderRadius: "inherit",
                }}
              />
            </div>

            {/* Icons */}
            <Image
              src="/Scales.png"
              alt="Scales Icon"
              width={50}
              height={50}
              style={{
                position: "absolute",
                top: "5%",
                left: "5%",
              }}
            />
            <Image
              src="/Law Book (1).png"
              alt="Law Book Icon"
              width={50}
              height={50}
              style={{
                position: "absolute",
                bottom: "15%",
                left: "10%",
              }}
            />
            <Image
              src="/Law.png"
              alt="Law Icon"
              width={50}
              height={50}
              style={{
                position: "absolute",
                bottom: "10%",
                right: "15%",
              }}
            />
          </Col>

          {/* Right: Text */}
          <Col xs={12} md={6} className="pt-3 pt-md-0 text-center text-md-start">
            <h6 style={{ color: "#00f7ff" }}>ABOUT ME</h6>
            <h5>
              I'm Creative Director and UI-UX Designer{" "}
              <span className="fw-bold">
                from Sydney, Australia, working in web development and print
                media.
              </span>
            </h5>
            <p className="text-muted">
              I enjoy turning complex problems into simple, beautiful and
              intuitive designs. My aim is to bring across your message and
              identity in the most creative way. I created web design for many
              famous brand companies.
            </p>

            <Row className="pt-4 text-center text-md-start">
              <Col xs={6}>
                <h3>100%</h3>
                <p className="text-muted">Clients Satisfaction</p>
              </Col>
              <Col xs={6}>
                <h3>6700</h3>
                <p className="text-muted">Projects Completed</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
