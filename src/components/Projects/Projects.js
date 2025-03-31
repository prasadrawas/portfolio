import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
      {
        "title": "Kerb Driver",
        "short_desc": "An app to assist delivery drivers in booking loading bays in advance within congested city areas.",
        "long_desc": "Kerb Driver helps delivery drivers book loading bays in advance, reducing stress, saving time, and lowering emissions. Features include viewing available bays, city mapping integration, slot booking, and reservation management. Also allows reporting unauthorized vehicle usage. I led the full mobile app development, ensuring smooth functionality. Optimized state management and improved performance by 30-40%. Achieved 100% unit test coverage for reliability. Added integration tests to enhance stability.",        "imgPath": "https://raw.githubusercontent.com/prasadrawas/flutter-apps/refs/heads/main/kerbApp.png",
        "techStack": ["Flutter", "Firebase", "Google Maps API"],
        "playStoreLink": "https://play.google.com/store/apps/details?id=com.gridsmartercities.kerbdeliverydriver&hl=en_IN",
        "appStoreLink": "https://apps.apple.com/us/app/kerb-driver/id1616141860"
      },
      {
        "title": "Kerb App Automation",
        "short_desc": "Automated cross-browser testing using BrowserStack & Bitrise CI/CD.",
        "long_desc": "I've written a test suite in the integration tests package and integrated BrowserStack APIs in the Bitrise CI/CD platform. This setup uploads Android and iOS builds to BrowserStack, starts app automation using the BrowserStack API, fetches real-time results via a Bash script using cURL API, and displays real-time test execution status in the Bitrise CI pipeline. Implemented parallel execution to speed up tests. Configured environment variables for secure API key management. Automated test retries for flaky tests, ensuring stable runs. Integrated BrowserStack App Automate for real-device testing. Set up detailed test reports with logs, screenshots, and video recordings for debugging.",
        "imgPath": "https://tse4.mm.bing.net/th?id=OIP.V9Fh8WOTIAuGKRBZjytupQHaHa&w=474&h=474&c=7",
        "techStack": ["BrowserStack", "Bitrise", "CI/CD", "Automated Testing"]
      },
      {
        "title": "Kerb App CI/CD",
        "short_desc": "Implemented Bitrise CI/CD for automated testing, build, and deployment of the Kerb Driver app.",
        "long_desc": "I've integrated multiple steps in Bitrise CI/CD, including installing Flutter, creating configuration files, running unit tests, building Android/iOS applications, running integration tests, and uploading builds to the app stores using automated workflows. Implemented caching mechanisms to speed up builds. Configured Fastlane for automated code signing and deployment. Set up artifact management for tracking build versions. Automated environment variable management for secure API key handling. Integrated notifications to Github PR for build status updates.",
        "imgPath": "https://tse3.mm.bing.net/th?id=OIP.bvqAcppQ4XkOOP_pFhbgCQHaD4&w=248&h=248&c=7",
        "techStack": ["Bitrise", "CI/CD", "Flutter", "Fastlane"]
      },
      {
        "title": "Parking & EV Charging Portal",
        "short_desc": "A React-based web platform for booking parking spaces and EV charging points in advance.",
        "long_desc": "This multi-tenant application enables users to book parking spaces and EV charging points in advance for specific durations, ensuring seamless availability and automated pricing calculations. The platform supports multiple roles, including Drivers, Admins, and Super Admins. Admin users have a dedicated interface for managing parking spaces, charging points, sub-tenant users, and more. I was responsible for handling the Admin UI modules, optimizing user interactions, and implementing unit tests to ensure a bug-free experience.",
        "imgPath": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "techStack": ["React", "Redux", "TypeScript"],
        "ghLink": "#"
      },
      {
        "title": "Secure API Proxy for Park & Charge",
        "short_desc": "A Laravel and Vue.js-based POC providing a secure proxy layer for frontend API communication.",
        "long_desc": "A Laravel-based proxy API layer for the Vue Js frontend, enhancing security, flexibility, and maintainability. This design pattern hides sensitive API keys, tokens, and configurations on the backend, preventing exposure on the frontend. It acts as a middleware to restrict direct backend access, reducing the attack surface and mitigating CORS issues. Centralized request handling enables logging, validation, and authentication before forwarding requests. This abstraction ensures that frontend changes don’t require backend modifications, improving scalability and security while simplifying development.",
        "imgPath": "https://tse3.mm.bing.net/th?id=OIP.Hh_tEbIb4-MagJsV6x_RZwHaHa&w=474&h=474&c=7",
        "techStack": ["Laravel", "Vue.js", "MySQL", "JWT Authentication"],
      },
      {
        "title": "Flutter Web Apps CI/CD",
        "short_desc": "Bitbucket CI/CD setup for deploying multiple Flutter Micro Front-end (MFE).",
        "long_desc": "I've created and deployed four micro front-end applications for our main product, RealCADENCE. The CI/CD pipeline is set up using Bitbucket Pipelines, which triggers deployment on every main branch push. It automates installing Flutter, setting up environment variables, running unit tests, building optimized web assets, and securely transferring files to remote hosts via SCP. The pipeline also includes caching to speed up builds and automated failure notifications for quick debugging.",
        "imgPath": "https://tse1.mm.bing.net/th?id=OIP.j4oBt7Ub2i5Z9rE0U7h9vQHaD4&w=248&h=248&c=7",
        "techStack": ["Bitbucket CI/CD", "Flutter", "Docker"]
      },
      {
        "title": "LostIt Tag",
        "short_desc": "A tech-powered solution for lost and found items using QR code tags.",
        "long_desc": "Developed a mobile app using Flutter and Firebase to help users recover lost items through QR codes and secure contact systems. Users can generate unique QR codes for their valuable belongings, allowing finders to scan the tag and contact them without exposing personal details. The app includes features like real-time status updates, encrypted messaging between the owner and finder, and notifications for lost item reports. Firebase Firestore and Cloud Functions ensure seamless backend operations, while deep linking improves user experience when scanning tags.",        "imgPath": "https://github.com/prasadrawas/flutter-apps/blob/main/lostItTagApp.png?raw=true",
        "techStack": ["Flutter", "Firebase", "QR Code API"],
        "playStoreLink": "https://play.google.com/store/apps/details?id=com.lost_it_tag&hl=en_IN",
        "appStoreLink": "https://apps.apple.com/us/app/lostit-tag-qrcode-lost-found/id1623152388"
      },
      {
        "title": "CV Generator",
        "short_desc": "A Flutter app designed to create professional resumes with templates.",
        "long_desc": "Built a simple and efficient resume generator app that allows users to create CVs using customizable templates and export them in various formats.",
        "imgPath": "https://github.com/prasadrawas/flutter-apps/blob/main/CV%20Generator.jpg?raw=true",
        "techStack": ["Flutter", "Dart"],
        "ghLink": "https://github.com/prasadrawas/cvgenerator"
      },
      {
        "title": "Movie Ticket Booking App",
        "short_desc": "A Flutter app to book movie tickets with seat selection and payment integration.",
        "long_desc": "Designed and developed a movie ticket booking app that supports real-time seat selection, user authentication, and payments.",
        "imgPath": "https://github.com/prasadrawas/flutter-apps/blob/main/Movie%20Ticket%20Booking.jpg?raw=true",
        "techStack": ["Flutter", "Firebase", "Stripe"],
        "ghLink": "#"
      },
      {
        "title": "Messenger App",
        "short_desc": "A real-time chat application with Firebase backend.",
        "long_desc": "Created a messaging application featuring real-time chat, image sharing, and push notifications using Firebase Cloud Messaging.",
        "imgPath": "https://github.com/prasadrawas/flutter-apps/blob/main/Messaging%20App.jpg?raw=true",
        "techStack": ["Flutter", "Firebase", "Cloud Messaging"],
        "ghLink": "#"
      },
      {
        "title": "Food Delivery App",
        "short_desc": "A Flutter app for ordering food and tracking deliveries.",
        "long_desc": "Built a fully functional food delivery application with features like real-time tracking, order management, and seamless UI/UX.",
        "imgPath": "https://github.com/prasadrawas/flutter-apps/blob/main/Food%20Delivery%20Clone.jpg?raw=true",
        "techStack": ["Flutter", "Node.js", "MongoDB"],
        "ghLink": "#"
      },
      {
        "title": "Nutrition Tracker App",
        "short_desc": "A Flutter application for tracking daily food intake and calories.",
        "long_desc": "Developed a Flutter app that helps users track their nutrition intake, calculate calories, and set diet goals with Health API integration.",
        "imgPath": "https://github.com/prasadrawas/flutter-apps/blob/main/Nutrition%20Tracker.jpg?raw=true",
        "techStack": ["Flutter", "Dart", "Health API"],
        "ghLink": "#"
      },
      {
        "title": "Password Manager App",
        "short_desc": "A secure Flutter app for managing passwords with encryption.",
        "long_desc": "Built a password manager app with features like biometric authentication, secure storage, and encrypted cloud sync.",
        "imgPath": "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
        "techStack": ["Flutter", "SQLite", "Biometric Auth"],
        "ghLink": "#"
      },
      {
        "title": "React Blog App",
        "short_desc": "A blog platform built with React.js featuring markdown support.",
        "long_desc": "Developed a fully functional blog application using React.js, supporting markdown-based content creation, authentication, and user management.",
        "imgPath": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "techStack": ["React.js", "Firebase", "Markdown"],
        "ghLink": "#"
      },
      {
        "title": "Grocery Store API",
        "short_desc": "A backend API built with Express.js for grocery store management.",
        "long_desc": "Created a REST API using Express.js and MongoDB to handle grocery store operations, including inventory management and authentication.",
        "imgPath": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        "techStack": ["Node.js", "Express.js", "MongoDB"],
        "ghLink": "#"
      },
      {
        "title": "Grocery Store Mobile App",
        "short_desc": "A React Native application for online grocery shopping.",
        "long_desc": "Built a mobile application using React Native that allows users to browse grocery items, add them to cart, and complete purchases with a secure checkout system.",
        "imgPath": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "techStack": ["React Native", "Redux", "Firebase"],
        "ghLink": "#"
      }
    ];

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((project, index) => (
                <Col md={4} className="project-card" key={index}>
                  <ProjectCard
                      imgPath={project.imgPath}
                      isBlog={false}
                      title={project.title}
                      short_desc={project.short_desc}
                      long_desc={project.long_desc}
                      techStack={project.techStack}
                      playStoreLink={project.playStoreLink}
                      appStoreLink={project.appStoreLink}
                      ghLink={project.ghLink}
                  />
                </Col>
            ))}
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
