import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiJava } from "react-icons/di";
import { SiTypescript, SiFlutter, SiVuedotjs, SiAndroid, SiSwift, SiJenkins, SiBrowserstack, SiFirebase, SiSupabase, SiExpress, SiLaravel } from "react-icons/si";

const techStack = [
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiAndroid />, name: "Android Native" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiVuedotjs />, name: "Vue.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiJenkins />, name: "CI/CD" },
    { icon: <SiSwift />, name: "iOS Swift" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <SiLaravel />, name: "Laravel" },
    { icon: <DiGit />, name: "Git" },
];

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {techStack.map((tech, index) => (
                <Col xs={4} md={2} className="tech-icons" key={index}>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
                    >
                        <div>{tech.icon}</div>
                    </OverlayTrigger>
                </Col>
            ))}
        </Row>
    );
}

export default Techstack;
