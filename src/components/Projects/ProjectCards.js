import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body className="d-flex flex-column justify-content-between text-center">
          <div>
            <Card.Title style={{ color: "white", textAlign: "left" }}>
              {props.title}
            </Card.Title>
            <Card.Text style={{ textAlign: "left", color: "white" }}>
              {props.description}
            </Card.Text>
          </div>

          {/* More Info Button */}
          <div className="mt-auto">
            <Button
              variant="info"
              onClick={handleShow}
              style={{
                backgroundColor: "#6f42c1",
                border: "none",
                width: "350px", // Fixed width for consistency
                color: "white", // Button text color
              }}
            >
              More Info
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Modal for More Info */}
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        contentClassName="custom-modal" // Custom class for modal styling
        animation={true}
      >
        <Modal.Header closeButton closeVariant="white" style={{ borderBottom: "none" }}>
          <Modal.Title style={{ color: "#c770f0", fontSize: "1.5rem" }}>
            {props.title} - More Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Extended Description */}
          <p style={{ color: "lightgray" }}>{props.extendedDescription}</p>

          {/* Display Screenshots */}
          {props.screenshots && (
            <div className="project-screenshots">
              {props.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`screenshot-${index}`}
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    border: "1px solid #6f42c1", // Purple border to match theme
                  }}
                />
              ))}
            </div>
          )}

          {/* Video Link */}
          {props.videoLink && (
            <div className="project-video">
              <iframe
                width="100%"
                height="315"
                src={props.videoLink}
                title={props.title}
                frameBorder="0"
                allowFullScreen
                style={{
                  borderRadius: "10px",
                  border: "1px solid #6f42c1", // Purple border for videos
                }}
              ></iframe>
            </div>
          )}

          {/* Demo Link inside Modal */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                marginTop: "20px",
                backgroundColor: "#28a745", // Green background color
                color: "#fff", // White text color for contrast
                border: "none", // No border for a clean look
                width: "150px", // Adjust width
                alignItems: "rightr", // Center icon and text vertically
                justifyContent: "right", // Center icon and text horizontally
              }}
            >
              <CgWebsite /> &nbsp; Link
            </Button>
          )}
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "none" }}>
          <Button
            variant="outline-light"
            onClick={handleClose}
            style={{ color: "#e0aaff", borderColor: "#e0aaff" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;
