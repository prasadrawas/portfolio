import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { SiVisualstudiocode, SiAndroidstudio, SiPhpstorm, SiXcode, SiSlack, SiGithub, SiAdobephotoshop, SiCanva, SiMacos, SiWindows, SiPostman, SiJira, SiConfluence, SiMedium } from "react-icons/si";

const tools = [
    { icon: <SiVisualstudiocode />, name: "VSCode" },
    { icon: <SiAndroidstudio />, name: "Android Studio" },
    { icon: <SiPhpstorm />, name: "PHPStorm" },
    { icon: <SiXcode />, name: "XCode" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiGithub />, name: "GitHub Desktop" },
    { icon: <SiAdobephotoshop />, name: "Photoshop" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiMacos />, name: "MacOS" },
    { icon: <SiWindows />, name: "Windows" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJira />, name: "JIRA" },
    { icon: <SiConfluence />, name: "Confluence" },
    { icon: <SiMedium />, name: "Medium" }
];

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {tools.map((tool, index) => (
                <Col xs={4} md={2} className="tech-icons" key={index}>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
                    >
                        <div>{tool.icon}</div>
                    </OverlayTrigger>
                </Col>
            ))}
        </Row>
    );
}

export default Toolstack;
