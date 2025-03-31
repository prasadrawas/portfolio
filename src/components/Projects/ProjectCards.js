import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsGithub } from "react-icons/bs";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            {/* Card UI */}
            <Card className="project-card-view" style={{cursor: "pointer"}}>
                <Card.Img
                    variant="top"
                    src={props.imgPath}
                    alt="card-img"
                    style={{objectFit: "contain", width: "100%", height: "auto", maxHeight: "250px"}}
                />
                <Card.Body>
                    <Card.Title className="text-center">{props.title}</Card.Title>
                    <Card.Text style={{textAlign: "justify"}}>
                        {props.short_desc}
                    </Card.Text>

                    {/* Tech Stack Tags */}
                    {props.techStack && props.techStack.length > 0 && (
                        <div className="tech-stack mb-3 text-center">
                            {props.techStack.map((tech, index) => (
                                <span key={index} className="badge bg-secondary mx-1">{tech}</span>
                            ))}
                        </div>
                    )}

                    {/* Centered Links in Card */}
                    <div className="d-flex flex-wrap justify-content-center gap-2 my-2">
                        {props.ghLink && (
                            <Button variant="dark" href={props.ghLink} target="_blank" className="my-2">
                                <BsGithub/> GitHub
                            </Button>
                        )}
                        {props.playStoreLink && (
                            <Button variant="success" href={props.playStoreLink} target="_blank" className="my-2">
                                <FaGooglePlay/> Play Store
                            </Button>
                        )}
                        {props.appStoreLink && (
                            <Button variant="primary" href={props.appStoreLink} target="_blank" className="my-2">
                                <FaAppStore/> App Store
                            </Button>
                        )}
                    </div>

                    {/* Open Modal Button */}
                    <div className="text-center">
                        <Button variant="outline-secondary mt-3" onClick={() => setShow(true)}>
                            View Details
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Modal UI */}
            <Modal show={show} onHide={() => setShow(false)} centered dialogClassName="custom-modal" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mt-3"><b>Description:</b></p>
                    <ul>
                        {props.long_desc.split(".").filter(sentence => sentence.trim() !== "").map((sentence, index) => (
                            <li key={index}>{sentence.trim()}.</li>
                        ))}
                    </ul>

                    {/* Tech Stack */}
                    {props.techStack && (
                        <div className="mb-3 text-center">
                            <strong>Tech Stack:</strong>{" "}
                            {props.techStack.map((tech, index) => (
                                <span key={index} className="badge bg-secondary mx-1">{tech}</span>
                            ))}
                        </div>
                    )}

                    {/* Centered Links in Modal */}
                    <div className="d-flex flex-wrap justify-content-center gap-2 my-2">
                        {props.ghLink && (
                            <Button variant="dark" href={props.ghLink} target="_blank" className="my-2">
                                <BsGithub/> GitHub
                            </Button>
                        )}
                        {props.playStoreLink && (
                            <Button variant="success" href={props.playStoreLink} target="_blank" className="my-2">
                                <FaGooglePlay/> Play Store
                            </Button>
                        )}
                        {props.appStoreLink && (
                            <Button variant="primary" href={props.appStoreLink} target="_blank" className="my-2">
                                <FaAppStore/> App Store
                            </Button>
                        )}
                    </div>
                </Modal.Body>
            </Modal>

            <style>
                {`
                    .project-card-view {
                        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                    }
                    .project-card-view:hover {
                        transform: translateY(-5px);
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                    }
                    .card-img-top {
                        object-fit: contain;
                        width: 100%;
                        height: auto;
                        max-height: 220px;
                        padding: 10px;
                    }
                `}
            </style>
        </>
    );
}

export default ProjectCards;
