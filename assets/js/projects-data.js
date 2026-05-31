// ========================================
// PROJECTS DATA
// ========================================
window.PROJECTS_DATA = {

    // ==========================================
    // PROFESSIONAL PROJECTS
    // ==========================================

    "realcadence": {
        title: "RealCADENCE",
        subtitle: "Production iOS app for enterprise field operations and work management, enabling action tracking, on-demand services, evidence capture, QR scanning, and in-app messaging.",
        badge: "Professional | iOS",
        gradient: ["#F05138", "#FF6B4A"],
        overview: [
            "RealCADENCE is a production-grade iOS application built for enterprise field operations and work management. It enables users to track assigned actions, request on-demand services, collect evidence (notes, attachments, MCSI), scan QR codes for quick action/service lookup, and communicate via a full in-app messaging system.",
            "The app is built with Swift and UIKit using Storyboards and XIBs for the UI layer. It follows MVVM architecture with a dedicated service layer for API communication. Data persistence is handled through three separate CoreData stores. API Queue (for offline request queuing), AppData (for cached application state), and OffLineData (for offline-first operations).",
            "With 229 Swift files, 35 storyboard/XIB files, and 26+ data models, this is a large-scale enterprise iOS application designed for reliability and offline resilience in field conditions."
        ],
        features: [
            "Action Management: view, track, and complete assigned actions with evidence capture (notes, attachments, MCSI)",
            "Service & Action On-Demand: request and manage time-sensitive field services in real-time",
            "Full in-app messaging system (Inbox) for team communication",
            "QR Code Scanner via AVFoundation for quick action/service lookup",
            "Reflections: review and accept action reflections from the field",
            "Location-aware features with work location management using CoreLocation",
            "Problem Reporting: built-in issue reporting workflow for field teams",
            "3 CoreData stores for comprehensive offline support (API Queue, AppData, OffLineData)"
        ],
        userFlow: [
            { title: "Login & Authentication", desc: "User authenticates with enterprise credentials to access their assigned workspace." },
            { title: "Dashboard", desc: "View assigned actions, pending services, and unread messages at a glance." },
            { title: "Action Tracking", desc: "Select an action, view details, capture evidence (photos, notes, MCSI), and mark as complete." },
            { title: "On-Demand Services", desc: "Request time-sensitive field services with location and priority details." },
            { title: "QR Scan", desc: "Scan QR codes on equipment/locations for instant action or service lookup." },
            { title: "Messaging", desc: "Communicate with team members through the in-app inbox system." }
        ],
        architecture: {
            description: "MVVM architecture with a dedicated service layer. Clean feature-based folder structure with clear separation of concerns across 229 Swift files.",
            layers: [
                { abbr: "V", name: "View Layer", desc: "35 Storyboard/XIB files with UIKit controllers" },
                { abbr: "VM", name: "ViewModel Layer", desc: "Business logic and data transformation" },
                { abbr: "S", name: "Service Layer", desc: "Custom URLSession-based API session layer" },
                { abbr: "D", name: "Data Layer", desc: "3 CoreData stores with 26+ data models" }
            ]
        },
        techStack: ["Swift", "UIKit", "CoreData", "SwiftData", "CoreLocation", "AVFoundation", "UserDefaults", "URLSession", "XCTest", "CocoaPods"],
        info: [
            { label: "Type", value: "iOS App" },
            { label: "Platform", value: "iOS" },
            { label: "Swift Files", value: "229" },
            { label: "Storyboards", value: "35" },
            { label: "Data Models", value: "26+" },
            { label: "Role", value: "Lead Developer" }
        ]
    },

    "service-dispatcher": {
        title: "Service Dispatcher",
        subtitle: "Production-grade RESTful API for automated service dispatch and job queue orchestration, integrating with the RealCADENCE platform.",
        badge: "Professional | Full Stack",
        gradient: ["#FF2D20", "#FF6347"],
        overview: [
            "Service Dispatcher is a production RESTful API built for automated service dispatch and job queue orchestration. It integrates with the RealCADENCE platform for field service management, using a two-phase dispatch architecture.",
            "Phase 1 (Synchronous Enqueue): The API receives dispatch requests, validates them per connector type, and persists jobs to the database queue. Phase 2 (Async Batch Processing): Jobs are reserved into batches, dispatched to external APIs (RealCADENCE), and archived to history tables.",
            "The system supports multiple dispatch channels via a pluggable connector system. Service on Demand (SoD), Action on Demand (AoD), Email, and SMS, each implemented as a strategy pattern. Built with Laravel 12, PHP 8.2+, and hardened with distributed batch locking, retry mechanisms, and comprehensive test coverage (193 tests, 528 assertions)."
        ],
        features: [
            "Connector/Strategy Pattern: pluggable dispatch channels implementing ConnectorInterface, resolved via ConnectorFactory",
            "Immutable DTOs with readonly properties, wire-format key constants, and with*() copy methods",
            "Distributed batch locking with configurable lock TTL for concurrent worker safety",
            "Retry mechanism: transient failures (5xx, timeouts) retried up to 3x with backoff; permanent failures (4xx) fail immediately",
            "RealCADENCE API integration with 4 focused sub-services extending BaseService with auto-cached auth tokens",
            "Custom logging facade (AppLogger) with dedicated channels for dispatch vs. API vs. general logging",
            "193 tests with 528 assertions covering unit + feature tests with Http::fake(), Queue::fake(), Storage::fake()",
            "Auto-generated OpenAPI 3.0 docs via Scramble"
        ],
        userFlow: [
            { title: "API Request", desc: "External system sends a dispatch request to the API endpoint with connector type and payload." },
            { title: "Validation", desc: "Request is validated per connector type schema. Invalid requests are rejected with detailed errors." },
            { title: "Job Enqueue", desc: "Valid jobs are persisted to the database queue with metadata and status tracking." },
            { title: "Batch Processing", desc: "Worker picks up jobs in batches with distributed locking, dispatches to RealCADENCE API." },
            { title: "Retry/Archive", desc: "Successful jobs are archived to history. Failed jobs are retried (up to 3x) or marked as failed." }
        ],
        architecture: {
            description: "SOLID throughout, interface segregation for connectors and services, dependency inversion via constructor injection, single-responsibility services, and open/closed extension via new connector classes.",
            layers: [
                { abbr: "R", name: "Routes / Controllers", desc: "API endpoints with Sanctum authentication" },
                { abbr: "S", name: "Services", desc: "Business logic with constructor injection" },
                { abbr: "C", name: "Connectors", desc: "Pluggable strategy pattern for dispatch channels" },
                { abbr: "D", name: "DTOs", desc: "Immutable data transfer objects with readonly props" },
                { abbr: "M", name: "Models / Repos", desc: "Eloquent models with database queue" },
                { abbr: "Q", name: "Queue / Workers", desc: "Batch processor with distributed locking" }
            ]
        },
        techStack: ["PHP 8.2+", "Laravel 12", "MySQL", "Laravel Sanctum", "SendGrid", "PHPUnit 11.5", "Mockery", "Scramble (OpenAPI)", "Laravel Pint", "Bitbucket Pipelines"],
        info: [
            { label: "Type", value: "REST API" },
            { label: "Tests", value: "193" },
            { label: "Assertions", value: "528" },
            { label: "Test Files", value: "41" },
            { label: "Deploy", value: "Zero-downtime" },
            { label: "Role", value: "Lead Developer" }
        ]
    },

    "vapr": {
        title: "VAPR: VoloX All Products Recognizer",
        subtitle: "Enterprise product management platform with bulk CSV import, QR code generation, role-based access control, and zero-downtime CI/CD deployments.",
        badge: "Professional | Full Stack",
        gradient: ["#05998B", "#00C9B7"],
        overview: [
            "VAPR is a production-grade product management platform built for enterprise-scale product cataloging and tracking. It features bulk CSV import with async processing, QR code bulk generation and export, passwordless OTP authentication, and role-based access control.",
            "The backend is built with FastAPI (Python) and PostgreSQL, using SQLAlchemy as the ORM and Celery + Redis for async task processing. Authentication uses a passwordless OTP flow via AWS SES (email) and AWS SNS (SMS), with JWT access tokens and rotating refresh tokens.",
            "The API follows strict layered architecture with SOLID principles. Routes to Services (DI) to Repositories (protocols) to Models. All operations use a standard API envelope format. The system includes 416 tests covering unit, integration, and end-to-end scenarios."
        ],
        features: [
            "Bulk CSV Import: upload CSV to S3, Celery async processing with savepoint-based batch commits (50 rows), progress tracking and error logging per row",
            "QR Bulk Export: async ZIP generation via Celery with three modes: all active products, custom IDs, or date range (400x400px PNGs with UID overlay)",
            "Passwordless OTP authentication via AWS SES (email) and AWS SNS (SMS) with JWT + rotating refresh tokens",
            "Surrogate ID System: standalone entities with nullable FK to products, globally unique values with link/unlink operations",
            "Soft Deletes: products set to INACTIVE, never hard-deleted, default listing filters by ACTIVE",
            "Standard API Envelope: all responses wrapped in {success, message, data, meta} with paginated list endpoints",
            "416 tests, unit, integration (TestClient), and end-to-end test coverage",
            "14-step CI/CD pipeline with zero-downtime deploys via symlink swap pattern"
        ],
        userFlow: [
            { title: "Authentication", desc: "User requests OTP via email or SMS. Enters OTP to receive JWT access + refresh tokens." },
            { title: "Dashboard", desc: "View aggregated stats across products, divisions, and import jobs." },
            { title: "Product Management", desc: "Browse, search, filter, and sort products. Create/edit individual products or use bulk CSV import." },
            { title: "Bulk Import", desc: "Upload CSV file → stored in S3 → Celery processes rows in batches of 50 with progress tracking." },
            { title: "QR Code Export", desc: "Select products and generate QR codes. Celery creates ZIP with 400x400px PNGs. Download via presigned S3 URL." },
            { title: "CSV Export", desc: "Export filtered product records as CSV with a 50K row cap." }
        ],
        architecture: {
            description: "Strict layered architecture following SOLID principles with domain exceptions, constructor injection, and repository contracts using Python protocols.",
            layers: [
                { abbr: "R", name: "Routes (FastAPI)", desc: "API endpoints with Pydantic v2 request/response schemas" },
                { abbr: "S", name: "Services", desc: "Business logic with dependency injection" },
                { abbr: "Re", name: "Repositories", desc: "Data access via protocol contracts (SQLAlchemy)" },
                { abbr: "M", name: "Models", desc: "SQLAlchemy models with PostgreSQL BIGSERIAL PKs" },
                { abbr: "Q", name: "Task Queue", desc: "Celery + Redis for async CSV import and QR export" },
                { abbr: "St", name: "Storage", desc: "AWS S3 via boto3 for file storage with presigned URLs" }
            ]
        },
        techStack: ["FastAPI", "Python", "PostgreSQL 15", "SQLAlchemy", "Celery", "Redis", "AWS S3", "AWS SES", "AWS SNS", "Pydantic v2", "Liquibase", "Gunicorn", "Ruff", "Bitbucket Pipelines"],
        info: [
            { label: "Type", value: "Full Stack API" },
            { label: "Tests", value: "416" },
            { label: "Migrations", value: "17 changesets" },
            { label: "Server", value: "Gunicorn + Apache" },
            { label: "OS", value: "Rocky Linux 9" },
            { label: "Deploy", value: "Zero-downtime" }
        ]
    },

    "kerb-driver": {
        title: "Kerb Driver",
        subtitle: "Production mobile app for delivery drivers to book loading bays in advance, reducing stress, saving time, and lowering emissions in congested city areas.",
        badge: "Professional | Mobile",
        gradient: ["#00B4AB", "#4DD0C8"],
        playStore: "https://play.google.com/store/apps/details?id=com.gridsmartercities.kerbdeliverydriver&hl=en_IN",
        appStore: "https://apps.apple.com/us/app/kerb-driver/id1616141860",
        overview: [
            "Kerb Driver is a production mobile app that helps delivery drivers book loading bays in advance within congested city areas. The app reduces driver stress, saves time searching for parking, and contributes to lower emissions by eliminating circling.",
            "Features include viewing available bays on city maps, booking time slots, managing reservations, and reporting unauthorized vehicle usage. The app integrates with Google Maps for real-time bay visualization.",
            "I led the full mobile app development, ensuring smooth functionality across both Android and iOS. Optimized state management which improved performance by 30-40%. Achieved 100% unit test coverage for reliability, and added integration tests to enhance stability."
        ],
        features: [
            "View available loading bays on interactive city maps with real-time availability",
            "Advance slot booking with time/date selection for loading bay reservations",
            "Reservation management, view, modify, and cancel upcoming bookings",
            "Report unauthorized vehicle usage in booked bays",
            "Google Maps integration for bay visualization and navigation",
            "Optimized state management with 30-40% performance improvement",
            "100% unit test coverage ensuring reliability",
            "Integration tests for end-to-end stability"
        ],
        userFlow: [
            { title: "Open App", desc: "Driver opens the app and sees a map view of their current city area." },
            { title: "Browse Bays", desc: "Available loading bays are displayed on the map with color-coded availability status." },
            { title: "Select & Book", desc: "Driver selects a bay, picks a time slot, and confirms the reservation." },
            { title: "Navigate", desc: "App provides directions to the booked bay via Google Maps integration." },
            { title: "Manage", desc: "View upcoming reservations, modify times, or cancel if plans change." },
            { title: "Report", desc: "Report unauthorized vehicles occupying a booked bay." }
        ],
        architecture: {
            description: "Flutter app with clean state management architecture, provider-based reactive UI updates, and comprehensive test coverage.",
            layers: [
                { abbr: "UI", name: "Presentation Layer", desc: "Flutter widgets with reactive state management" },
                { abbr: "BL", name: "Business Logic", desc: "State management with performance-optimized providers" },
                { abbr: "D", name: "Data Layer", desc: "Firebase integration and REST API services" },
                { abbr: "M", name: "Maps", desc: "Google Maps SDK for bay visualization" }
            ]
        },
        techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "Provider", "Unit Testing", "Integration Testing"],
        info: [
            { label: "Type", value: "Mobile App" },
            { label: "Platforms", value: "iOS & Android" },
            { label: "Test Coverage", value: "100%" },
            { label: "Performance", value: "+30-40%" },
            { label: "Status", value: "Production" },
            { label: "Role", value: "Lead Mobile Dev" }
        ]
    },

    "lostit-tag": {
        title: "LostIt Tag",
        subtitle: "A tech-powered lost and found solution using QR code tags, helping users recover lost items through secure, anonymous contact systems.",
        badge: "Professional | Mobile",
        gradient: ["#00B4AB", "#4DD0C8"],
        playStore: "https://play.google.com/store/apps/details?id=com.lost_it_tag&hl=en_IN",
        appStore: "https://apps.apple.com/us/app/lostit-tag-qrcode-lost-found/id1623152388",
        overview: [
            "LostIt Tag is a mobile app that helps users recover lost items through QR codes and a secure contact system. Users generate unique QR codes for their valuable belongings, which finders can scan to contact the owner without exposing personal details.",
            "The app includes real-time status updates, encrypted messaging between owner and finder, and notifications for lost item reports. Firebase Firestore and Cloud Functions handle backend operations, while deep linking improves the scanning experience."
        ],
        features: [
            "Generate unique QR codes for valuable belongings",
            "Secure anonymous contact system, finders reach owners without seeing personal info",
            "Real-time status updates for lost item reports",
            "Encrypted messaging between owner and finder",
            "Push notifications for lost item reports and finder messages",
            "Deep linking for seamless QR scan experience",
            "Firebase Cloud Functions for backend operations"
        ],
        userFlow: [
            { title: "Register Items", desc: "User creates an account and generates unique QR code tags for their valuables." },
            { title: "Attach Tags", desc: "Print or display QR codes and attach them to belongings (luggage, keys, laptop, etc.)." },
            { title: "Item Lost", desc: "User marks an item as lost in the app, triggering notifications." },
            { title: "Finder Scans", desc: "A finder scans the QR code with any camera app, opening the secure contact page." },
            { title: "Anonymous Chat", desc: "Finder and owner communicate through encrypted messaging without revealing personal details." },
            { title: "Item Recovered", desc: "Owner arranges pickup/delivery and marks the item as found." }
        ],
        techStack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Cloud Functions", "Firebase Storage", "QR Code API", "Deep Linking"],
        info: [
            { label: "Type", value: "Mobile App" },
            { label: "Platforms", value: "iOS & Android" },
            { label: "Status", value: "Production" },
            { label: "Role", value: "Developer" }
        ]
    },

    "parking-ev": {
        title: "Parking & EV Charging Portal",
        subtitle: "A multi-tenant React web platform for booking parking spaces and EV charging points in advance with role-based access control.",
        badge: "Professional | Web Platform",
        gradient: ["#61DAFB", "#8BE9FD"],
        overview: [
            "This multi-tenant web application enables users to book parking spaces and EV charging points in advance for specific durations, ensuring seamless availability and automated pricing calculations.",
            "The platform supports multiple roles including Drivers, Admins, and Super Admins. Admin users have a dedicated interface for managing parking spaces, charging points, sub-tenant users, and more. I was responsible for building the Admin UI modules, optimizing user interactions, and implementing unit tests."
        ],
        features: [
            "Advance booking for parking spaces and EV charging points with duration-based pricing",
            "Multi-tenant architecture supporting multiple organizations",
            "Role-based access control. Driver, Admin, and Super Admin roles",
            "Admin dashboard for managing spaces, charging points, and users",
            "Automated pricing calculations based on booking duration",
            "Unit tests for bug-free admin module experience"
        ],
        userFlow: [
            { title: "Login", desc: "User logs in with role-based credentials (Driver, Admin, or Super Admin)." },
            { title: "Browse Spaces", desc: "Drivers browse available parking spaces and EV charging points." },
            { title: "Book & Pay", desc: "Select a space, choose duration, review automated pricing, and confirm booking." },
            { title: "Admin Management", desc: "Admins manage spaces, charging points, users, and view booking analytics." }
        ],
        techStack: ["React", "Redux", "TypeScript", "Unit Testing"],
        info: [
            { label: "Type", value: "Web Platform" },
            { label: "Architecture", value: "Multi-tenant" },
            { label: "Roles", value: "3 (Driver/Admin/Super)" },
            { label: "Role", value: "Frontend Developer" }
        ]
    },

    "micro-center": {
        title: "Micro Center",
        subtitle: "Mobile app for one of the largest electronics retailers in the US, serving 22 million+ customers across 30 stores nationwide.",
        badge: "Professional | Mobile",
        gradient: ["#CF202F", "#FF4D5A"],
        overview: [
            "Micro Center is one of the largest computer and electronics retailers in the United States, operating 30 stores across 20 states and serving over 22 million customers. I built their mobile application using Flutter, delivering a cross-platform experience for both iOS and Android.",
            "The app enables customers to browse products, check real-time store inventory, and shop across Micro Center's catalog of 25,000+ in-stock products per location. Built with a focus on smooth performance and intuitive UX to serve a massive and diverse customer base of gamers, builders, students, and professionals."
        ],
        features: [
            "Cross-platform mobile app for iOS and Android from a single Flutter codebase",
            "Product browsing and search across 25,000+ in-stock items per store",
            "Real-time store inventory availability",
            "Smooth, performant UI built for a diverse customer base of 22M+ users",
            "Store locator with 30 locations across 20 US states",
            "Built for scale to handle high-traffic retail demand"
        ],
        userFlow: [
            { title: "Open App", desc: "Customer launches the app and sees featured products and deals." },
            { title: "Browse / Search", desc: "Browse categories or search across 25,000+ products available in store." },
            { title: "Check Availability", desc: "View real-time inventory at their nearest Micro Center location." },
            { title: "Store Details", desc: "Find store location, hours, and directions via the store locator." },
            { title: "Shop", desc: "Add items to cart and complete the shopping experience." }
        ],
        architecture: {
            description: "Flutter cross-platform app with layered architecture, optimized for performance across a large product catalog and high user traffic.",
            layers: [
                { abbr: "UI", name: "Presentation Layer", desc: "Flutter widgets with responsive layouts for phone and tablet" },
                { abbr: "BL", name: "Business Logic", desc: "State management for product data, cart, and inventory" },
                { abbr: "D", name: "Data Layer", desc: "REST API integration for products, inventory, and store data" }
            ]
        },
        techStack: ["Flutter", "Dart", "REST APIs", "iOS", "Android"],
        info: [
            { label: "Type", value: "Mobile App" },
            { label: "Platforms", value: "iOS & Android" },
            { label: "Customer Base", value: "22M+" },
            { label: "Stores", value: "30 across US" },
            { label: "Products", value: "25,000+ per store" },
            { label: "Role", value: "Mobile Developer" }
        ]
    },

    "secure-api-proxy": {
        title: "Secure API Proxy",
        subtitle: "A Laravel and Vue.js-based security proxy layer for frontend API communication, hiding sensitive keys, mitigating CORS, and centralizing request handling.",
        badge: "Professional | Security",
        gradient: ["#FF2D20", "#41B883"],
        overview: [
            "This is a Laravel-based proxy API layer for a Vue.js frontend, enhancing security, flexibility, and maintainability. The design pattern hides sensitive API keys, tokens, and configurations on the backend, preventing exposure on the frontend.",
            "It acts as middleware to restrict direct backend access, reducing the attack surface and mitigating CORS issues. Centralized request handling enables logging, validation, and authentication before forwarding requests. This abstraction ensures frontend changes don't require backend modifications, improving scalability and security."
        ],
        features: [
            "API key and token hiding, sensitive credentials never reach the frontend",
            "CORS mitigation, proxy handles cross-origin requests server-side",
            "Centralized request logging and validation before forwarding",
            "JWT authentication layer between frontend and proxy",
            "Request/response transformation and normalization",
            "Decoupled architecture, frontend and backend can evolve independently"
        ],
        userFlow: [
            { title: "Frontend Request", desc: "Vue.js frontend sends API request to the Laravel proxy endpoint." },
            { title: "Auth & Validation", desc: "Proxy validates JWT token, checks permissions, and validates request payload." },
            { title: "Request Forwarding", desc: "Proxy injects API keys/tokens and forwards request to the actual backend API." },
            { title: "Response Handling", desc: "Proxy receives response, transforms if needed, strips sensitive headers, and returns to frontend." }
        ],
        techStack: ["Laravel", "Vue.js", "MySQL", "JWT Authentication", "CORS", "Middleware"],
        info: [
            { label: "Type", value: "API Proxy" },
            { label: "Pattern", value: "Proxy / BFF" },
            { label: "Auth", value: "JWT" },
            { label: "Role", value: "Developer" }
        ]
    },

    "kerb-automation": {
        title: "Kerb App Automation",
        subtitle: "Cross-browser automated testing infrastructure using BrowserStack APIs and Bitrise CI/CD for the Kerb Driver mobile app.",
        badge: "Professional | QA Automation",
        gradient: ["#1BC47D", "#4ADE80"],
        overview: [
            "A comprehensive test automation suite integrated with BrowserStack APIs on the Bitrise CI/CD platform. The setup uploads Android and iOS builds to BrowserStack, starts app automation using APIs, fetches real-time results via Bash scripts using cURL, and displays test execution status in the Bitrise pipeline.",
            "Implemented parallel execution to speed up tests, configured environment variables for secure API key management, and automated test retries for flaky tests. Integrated BrowserStack App Automate for real-device testing with detailed test reports including logs, screenshots, and video recordings."
        ],
        features: [
            "Automated upload of Android and iOS builds to BrowserStack",
            "Real-time test result fetching via cURL API scripts",
            "Parallel test execution for faster CI/CD feedback",
            "Automated retries for flaky tests ensuring stable runs",
            "Real-device testing via BrowserStack App Automate",
            "Detailed reports with logs, screenshots, and video recordings",
            "Secure API key management via environment variables"
        ],
        userFlow: [
            { title: "Code Push", desc: "Developer pushes code changes to the repository, triggering Bitrise CI pipeline." },
            { title: "Build Upload", desc: "CI builds Android/iOS apps and uploads them to BrowserStack." },
            { title: "Test Execution", desc: "BrowserStack runs automated tests in parallel on real devices." },
            { title: "Result Fetch", desc: "Bash scripts fetch real-time results via BrowserStack API." },
            { title: "Report", desc: "Test status is displayed in Bitrise with detailed logs, screenshots, and videos." }
        ],
        techStack: ["BrowserStack", "Bitrise CI/CD", "Flutter Integration Tests", "Bash Scripting", "cURL", "App Automate"],
        info: [
            { label: "Type", value: "Test Automation" },
            { label: "Execution", value: "Parallel" },
            { label: "Devices", value: "Real (BrowserStack)" },
            { label: "Role", value: "QA Engineer" }
        ]
    },

    "flutter-mfe-cicd": {
        title: "Flutter MFE CI/CD",
        subtitle: "Bitbucket CI/CD pipelines for deploying multiple Flutter Micro Front-end applications for the RealCADENCE product.",
        badge: "Professional | DevOps",
        gradient: ["#2684FF", "#6DB3F2"],
        overview: [
            "Created and deployed four micro front-end applications for the RealCADENCE product. The CI/CD pipeline is set up using Bitbucket Pipelines, which triggers deployment on every main branch push.",
            "The pipeline automates installing Flutter, setting up environment variables, running unit tests, building optimized web assets, and securely transferring files to remote hosts via SCP. It includes caching to speed up builds and automated failure notifications for quick debugging."
        ],
        features: [
            "4 independent micro front-end Flutter web apps deployed from a single pipeline",
            "Automated Flutter SDK installation and environment setup",
            "Unit test execution as a deployment gate",
            "Optimized web asset builds with tree-shaking",
            "Secure file transfer to remote hosts via SCP",
            "Build caching for faster subsequent deployments",
            "Automated failure notifications for quick debugging"
        ],
        userFlow: [
            { title: "Code Push", desc: "Developer pushes to main branch, triggering Bitbucket Pipeline." },
            { title: "Environment Setup", desc: "Pipeline installs Flutter, sets up env variables, and restores build cache." },
            { title: "Test & Build", desc: "Runs unit tests, then builds optimized Flutter web assets for each MFE." },
            { title: "Deploy", desc: "Transfers built assets to remote servers via SCP with proper permissions." },
            { title: "Verify", desc: "Health checks verify deployment. Failure notifications sent if any step fails." }
        ],
        techStack: ["Bitbucket Pipelines", "Flutter Web", "Docker", "SCP", "Bash", "YAML"],
        info: [
            { label: "Type", value: "CI/CD Pipeline" },
            { label: "MFE Apps", value: "4" },
            { label: "Trigger", value: "Main branch push" },
            { label: "Role", value: "DevOps Engineer" }
        ]
    },

    // ==========================================
    // PERSONAL PROJECTS
    // ==========================================

    "freevpn": {
        title: "FreeVPN",
        subtitle: "A free, open-source VPN client for Android that connects to VPN Gate public relay servers using the OpenVPN protocol with intelligent server selection and ISP bypass.",
        badge: "Open Source | Mobile",
        gradient: ["#6366f1", "#818cf8"],
        banner: "assets/images/freevpn-banner.webp",
        github: "https://github.com/prasadrawas/free-vpn",
        live: "https://prasadrawas.github.io/free-vpn/",
        overview: [
            "FreeVPN is an open-source Android VPN client that connects to VPN Gate public relay servers via the OpenVPN protocol. The app features one-tap auto-connect that intelligently selects the best server by scoring reliability, speed, and latency.",
            "It handles ISP-level DNS blocking (Jio, Vi, Airtel) by falling back to direct IP endpoints with certificate validation. The connection engine sanitizes OpenVPN configs on-the-fly, stripping 21 problematic directives and injecting cipher negotiation for compatibility.",
            "Built with a focus on resilience, the app detects reconnect loops (4 retries = server offline), automatically switches dead servers, persists connection state across app kills, and prompts users to disable battery optimization on aggressive OEM ROMs (Xiaomi, Huawei, Oppo, Vivo). Includes 115 unit tests and Firebase Crashlytics with full event breadcrumb logging."
        ],
        features: [
            "One-tap auto-connect with intelligent server selection (score/speed/ping ranking)",
            "ISP DNS bypass via direct IP fallback with SSL certificate validation",
            "OpenVPN config sanitization. 21 dangerous directives stripped on-the-fly",
            "Reconnect loop detection (4 retries = server declared offline, auto-switch)",
            "Connection state persistence across app kills with accurate timer restoration",
            "Background server list refresh every 5 minutes with 30s connection timeout",
            "Battery optimization detection for Xiaomi/Huawei/Oppo/Vivo devices",
            "115 unit tests covering models, services, and provider logic"
        ],
        userFlow: [
            { title: "Launch App", desc: "User opens the app and sees the main connect screen with server status." },
            { title: "One-Tap Connect", desc: "Tap the connect button. App scores all available VPN Gate servers and selects the best one." },
            { title: "Config Sanitization", desc: "App downloads OpenVPN config, strips dangerous directives, injects cipher settings." },
            { title: "VPN Tunnel", desc: "OpenVPN tunnel is established. Connection timer starts with state persistence." },
            { title: "Auto-Recovery", desc: "If connection drops, app retries up to 4 times then auto-switches to next best server." },
            { title: "Disconnect", desc: "User taps disconnect. VPN tunnel closes and connection state is cleared." }
        ],
        architecture: {
            description: "Flutter app using Provider for state management with a service-oriented architecture. Platform channels (Kotlin) handle native OpenVPN engine integration.",
            layers: [
                { abbr: "UI", name: "Presentation", desc: "Flutter widgets with Provider-reactive state" },
                { abbr: "P", name: "Providers", desc: "State management and business logic" },
                { abbr: "S", name: "Services", desc: "VPN connection, server scoring, config sanitization" },
                { abbr: "N", name: "Native", desc: "Kotlin platform channels for OpenVPN engine" }
            ]
        },
        techStack: ["Flutter", "Dart", "Provider", "OpenVPN (openvpn_flutter)", "Dio", "Firebase Crashlytics", "Firebase Analytics", "SharedPreferences", "Platform Channels (Kotlin)"],
        info: [
            { label: "Type", value: "Mobile App" },
            { label: "Platform", value: "Android" },
            { label: "Unit Tests", value: "115" },
            { label: "License", value: "Open Source" },
            { label: "Protocol", value: "OpenVPN" }
        ]
    },

    "toolshub": {
        title: "ToolsHub",
        subtitle: "A large-scale Turborepo monorepo hosting 112 financial calculators and 150 developer tools under a single domain with full SEO optimization.",
        badge: "Open Source | Web",
        gradient: ["#000", "#333"],
        github: "https://github.com/prasadrawas/toolshub",
        overview: [
            "ToolsHub is a Turborepo monorepo hosting two production-grade tool websites under a single domain. The finance suite offers 112 financial calculators spanning 8 categories, mortgage amortization, retirement planning, tax estimation, investment analysis, debt payoff strategies, auto loans, insurance, and real estate.",
            "The developer tools suite provides 150 client-side utilities for color manipulation, data conversion, CSS generation, encoding/decoding, code formatting, random data generation, image processing, math operations, and text transformation.",
            "A lightweight gateway app at the root domain routes traffic to sub-apps using Next.js rewrites. Each tool page includes JSON-LD structured data for SEO (WebApplication, FAQPage, BreadcrumbList schemas), per-tool metadata, and auto-generated sitemaps. All calculations run client-side with no server dependency."
        ],
        features: [
            "112 financial calculators across 8 categories with real-time chart visualizations (Recharts)",
            "150 developer tools running entirely client-side with zero server dependency",
            "Turborepo monorepo architecture with shared packages and independent deployments",
            "Gateway reverse proxy routing sub-apps under a single domain via Next.js rewrites",
            "Dynamic imports per category for optimal code splitting and performance",
            "Full SEO. JSON-LD structured data (WebApplication, FAQPage, BreadcrumbList schemas)",
            "Auto-generated sitemaps via next-sitemap",
            "US state tax data integration for tax calculators"
        ],
        userFlow: [
            { title: "Visit Domain", desc: "User lands on the root domain. Gateway routes to the appropriate sub-app." },
            { title: "Browse Categories", desc: "User browses tool categories, finance calculators or developer tools." },
            { title: "Select Tool", desc: "Pick a specific tool (e.g., Mortgage Calculator, Color Converter)." },
            { title: "Use Tool", desc: "All calculations run client-side in real-time. Finance tools show interactive charts." },
            { title: "SEO Discovery", desc: "Each tool page has structured data for Google rich results and search visibility." }
        ],
        architecture: {
            description: "Turborepo monorepo with gateway routing. Three Next.js apps (gateway, finance, devtools) sharing common packages.",
            layers: [
                { abbr: "GW", name: "Gateway App", desc: "Root domain routing via Next.js rewrites" },
                { abbr: "FI", name: "Finance App", desc: "112 calculators with Recharts visualizations" },
                { abbr: "DT", name: "DevTools App", desc: "150 client-side utilities" },
                { abbr: "PK", name: "Shared Packages", desc: "Common UI components and utilities" }
            ]
        },
        techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Turborepo", "Radix UI", "Recharts", "next-sitemap", "JSON-LD"],
        info: [
            { label: "Type", value: "Web Platform" },
            { label: "Finance Tools", value: "112" },
            { label: "Dev Tools", value: "150" },
            { label: "Architecture", value: "Monorepo" },
            { label: "Rendering", value: "Client-side" }
        ]
    },

    "birthday-game": {
        title: "Birthday Game",
        subtitle: "A creative 2D side-scrolling endless runner built entirely with vanilla HTML5 Canvas API and pure JavaScript, zero external assets, all graphics rendered procedurally.",
        badge: "Creative | Game",
        gradient: ["#F0DB4F", "#F5E663"],
        github: "https://github.com/prasadrawas/birthday-game",
        overview: [
            "A 2D side-scrolling endless runner game built entirely with the HTML5 Canvas API and pure JavaScript, no game engine, no frameworks, no external image assets. Every character, environment, and animation is drawn programmatically on canvas using a chibi/kawaii art style with procedural rendering.",
            "The player character (Prasad) races through 4 progressively challenging environments (Bus Stand, City Road, Highway, Park) to reach his girlfriend before midnight on her birthday. Features parallax scrolling backgrounds, collectible power-ups (chai boost for speed, shield rose for invincibility, time bonus), an 8-minute countdown, 3-heart health system, and full intro/victory cutscenes with level transitions.",
            "Supports both keyboard (Space/Up to jump, Down to slide) and mobile touch controls. Renders at 900x506 logical resolution with CSS letterbox scaling and devicePixelRatio support for crisp HiDPI displays."
        ],
        features: [
            "4 unique environments with multi-layer parallax scrolling backgrounds",
            "All graphics rendered procedurally on canvas, zero external sprite or image assets",
            "Jump and slide mechanics with mobile touch support",
            "6 collectible types with unique gameplay effects (speed boost, invincibility, time bonus)",
            "8-minute countdown timer with time bonus pickups",
            "Complete intro and victory cutscene system with story progression",
            "HiDPI display support with canvas transform scaling and letterbox rendering",
            "Full game state machine (title, playing, paused, cutscenes, transitions, victory, game over)"
        ],
        userFlow: [
            { title: "Title Screen", desc: "Game loads with an intro screen. Player reads the story setup." },
            { title: "Start Game", desc: "Press Space or tap to begin. The 8-minute countdown starts." },
            { title: "Run & Dodge", desc: "Character auto-runs. Player jumps (Space/Up) and slides (Down) to avoid obstacles." },
            { title: "Collect Power-ups", desc: "Grab chai boosts for speed, shield roses for invincibility, clocks for time bonuses." },
            { title: "Level Transitions", desc: "After clearing each environment, a cutscene plays before the next level." },
            { title: "Victory/Game Over", desc: "Reach the park before midnight for the victory cutscene, or run out of hearts/time." }
        ],
        architecture: {
            description: "Custom game engine built from scratch with a state machine pattern, game loop with requestAnimationFrame, and procedural rendering pipeline.",
            layers: [
                { abbr: "SM", name: "State Machine", desc: "Manages game states (title, playing, paused, cutscene, victory, game over)" },
                { abbr: "GL", name: "Game Loop", desc: "requestAnimationFrame loop with delta time updates" },
                { abbr: "R", name: "Renderer", desc: "Procedural canvas drawing, all art is code, no sprites" },
                { abbr: "P", name: "Physics", desc: "Collision detection, gravity, and movement systems" }
            ]
        },
        techStack: ["HTML5 Canvas API", "Vanilla JavaScript", "CSS (Letterbox Scaling)", "requestAnimationFrame"],
        info: [
            { label: "Type", value: "Browser Game" },
            { label: "Engine", value: "Custom (No framework)" },
            { label: "Assets", value: "Zero (all procedural)" },
            { label: "Resolution", value: "900x506" },
            { label: "Controls", value: "Keyboard + Touch" }
        ]
    },

    "wp-agent": {
        title: "WP Agent Node",
        subtitle: "A WhatsApp AI chatbot powered by Google Gemini 2.0 Flash that acts as a personal AI assistant over WhatsApp DMs with a custom Hinglish persona.",
        badge: "Open Source | AI",
        gradient: ["#25D366", "#5AE88C"],
        github: "https://github.com/prasadrawas/wp-agent-node",
        overview: [
            "WP Agent Node is a WhatsApp AI chatbot powered by Google Gemini 2.0 Flash that acts as a personal AI assistant over WhatsApp DMs. The bot authenticates via QR code scan using the whatsapp-web.js library (a Puppeteer-based WhatsApp Web client) and maintains persistent sessions via LocalAuth.",
            "The bot only responds to whitelisted contact numbers for privacy. The AI persona is configured with a custom Hinglish system prompt, it replies like a casual desi friend with short, natural chat-style responses without emojis. Messages from non-whitelisted contacts are silently ignored."
        ],
        features: [
            "QR-code WhatsApp Web authentication with persistent session storage (LocalAuth)",
            "Whitelist-based contact filtering, only responds to approved numbers",
            "Custom Hinglish AI persona via Gemini system prompt configuration",
            "Real-time message processing and AI response generation",
            "Automatic session recovery across Node.js restarts",
            "Puppeteer-based WhatsApp Web client (whatsapp-web.js)"
        ],
        userFlow: [
            { title: "Setup", desc: "Developer runs the Node.js server. A QR code appears in the terminal." },
            { title: "Auth", desc: "Scan the QR code with WhatsApp to authenticate the bot session." },
            { title: "Receive Message", desc: "A whitelisted contact sends a message to the bot's WhatsApp number." },
            { title: "AI Processing", desc: "Message is forwarded to Gemini 2.0 Flash with the Hinglish system prompt." },
            { title: "Reply", desc: "AI generates a casual, natural response and sends it back via WhatsApp." }
        ],
        techStack: ["Node.js", "whatsapp-web.js", "Puppeteer", "Google Gemini 2.0 Flash API", "dotenv", "LocalAuth"],
        info: [
            { label: "Type", value: "AI Chatbot" },
            { label: "AI Model", value: "Gemini 2.0 Flash" },
            { label: "Platform", value: "WhatsApp" },
            { label: "Auth", value: "QR Code" },
            { label: "Language", value: "Hinglish" }
        ]
    },

    "grocery-api": {
        title: "Grocery API",
        subtitle: "A production-grade RESTful backend API for grocery e-commerce, built with strict layered architecture, design patterns, and auto-generated Swagger documentation.",
        badge: "Open Source | Backend",
        gradient: ["#6366f1", "#818cf8"],
        github: "https://github.com/prasadrawas/groccery-api",
        overview: [
            "A production-grade RESTful backend API for a grocery e-commerce app, built with strict layered architecture and design patterns. The codebase is organized into domain, data, presentation, and common layers with dependency injection via tsyringe IoC container using TypeScript decorators.",
            "Features JWT-based authentication with bcrypt password hashing, full CRUD for products/categories/orders, image uploads to Cloudinary via Multer, request validation using Joi schemas, and auto-generated Swagger API documentation from Mongoose models. Security is hardened with Helmet headers and CORS configuration."
        ],
        features: [
            "Layered architecture with domain/data/presentation/common separation",
            "Dependency injection via tsyringe IoC container with TypeScript decorators",
            "JWT authentication with bcrypt password hashing",
            "Product, category, and order management APIs with full CRUD",
            "Cloudinary image upload with Multer middleware",
            "Auto-generated Swagger UI documentation from Mongoose schemas",
            "Request validation with Joi schemas and custom error handling",
            "Security headers via Helmet and CORS configuration"
        ],
        userFlow: [
            { title: "Register/Login", desc: "User creates an account or logs in. Server returns a JWT access token." },
            { title: "Browse Products", desc: "Fetch paginated product listings with category filtering." },
            { title: "Product Details", desc: "View individual product with images, pricing, and category info." },
            { title: "Place Order", desc: "Add products to cart and submit an order via the orders API." },
            { title: "Admin: Manage", desc: "Admin users can create/update/delete products, categories, and manage orders." }
        ],
        architecture: {
            description: "Layered architecture with SOLID principles and dependency injection via tsyringe IoC container. Four layers with clear boundaries and TypeScript decorators for DI registration.",
            layers: [
                { abbr: "P", name: "Presentation Layer", desc: "Express routes and controllers" },
                { abbr: "D", name: "Domain Layer", desc: "Business logic and use cases" },
                { abbr: "Da", name: "Data Layer", desc: "Mongoose models and repositories" },
                { abbr: "C", name: "Common Layer", desc: "Shared utilities, middleware, validation" }
            ]
        },
        techStack: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose", "JWT", "bcrypt", "Cloudinary", "Multer", "Joi", "Swagger", "tsyringe", "Helmet"],
        info: [
            { label: "Type", value: "REST API" },
            { label: "Database", value: "MongoDB" },
            { label: "Auth", value: "JWT + bcrypt" },
            { label: "DI Container", value: "tsyringe" },
            { label: "Docs", value: "Swagger UI" }
        ]
    },

    "react-blog": {
        title: "React Blog App",
        subtitle: "A full-featured blog platform with rich text content creation, user authentication, and cloud-hosted Appwrite backend.",
        badge: "Open Source | Web",
        gradient: ["#61DAFB", "#8BE9FD"],
        github: "https://github.com/prasadrawas/react-blog-app",
        overview: [
            "A full-featured blog platform with rich text content creation, user authentication, and cloud-hosted backend. Users can register, log in, and create blog posts using the TinyMCE WYSIWYG rich text editor with image embedding.",
            "Posts are stored in Appwrite's cloud database with associated images in Appwrite Storage. The app uses Redux Toolkit for centralized state management, react-hook-form for validated form handling, and html-react-parser for rendering stored HTML content."
        ],
        features: [
            "User registration and authentication via Appwrite BaaS",
            "Rich text blog post creation with TinyMCE WYSIWYG editor",
            "Image upload and storage in Appwrite cloud storage",
            "Global state management with Redux Toolkit",
            "Form validation with react-hook-form",
            "HTML content rendering for stored blog posts via html-react-parser",
            "Responsive design with Tailwind CSS"
        ],
        userFlow: [
            { title: "Register/Login", desc: "User creates an account or logs in via Appwrite authentication." },
            { title: "Dashboard", desc: "View all published blog posts with titles, previews, and authors." },
            { title: "Create Post", desc: "Use TinyMCE rich text editor to write content with formatting and images." },
            { title: "Publish", desc: "Submit the post, content stored in Appwrite DB, images in Appwrite Storage." },
            { title: "Read", desc: "Other users can browse and read published posts with full HTML rendering." }
        ],
        techStack: ["React 18", "Vite", "Tailwind CSS", "Redux Toolkit", "Appwrite", "TinyMCE", "react-hook-form", "html-react-parser", "React Router v6"],
        info: [
            { label: "Type", value: "Web App" },
            { label: "Backend", value: "Appwrite (BaaS)" },
            { label: "State", value: "Redux Toolkit" },
            { label: "Editor", value: "TinyMCE" }
        ]
    },

    "dattakrupa": {
        title: "Dattakrupa Store",
        subtitle: "A real-world Android grocery store management app built for an actual store, shipping two product flavors from a single codebase.",
        badge: "Open Source | Mobile",
        gradient: ["#7F52FF", "#A78BFA"],
        github: "https://github.com/prasadrawas/compose-dattakrupa",
        overview: [
            "A real-world Android grocery store management app built for an actual store named 'Dattakrupa.' Ships two product flavors from a single codebase, an associates variant for staff/admin (inventory management, category/product CRUD, active users dashboard) and a customers variant (product browsing, cart, ordering).",
            "Uses MVVM architecture with Dagger Hilt for dependency injection, Retrofit for REST API communication, Room database for local cart persistence, and Firebase for authentication, analytics, and Firestore data. Each screen is paired with a dedicated ViewModel."
        ],
        features: [
            "Two product flavors (associates/customers) from single codebase via Gradle",
            "MVVM architecture with per-screen ViewModels",
            "Dagger Hilt dependency injection for clean service resolution",
            "Retrofit REST API integration with custom backend",
            "Room local database for cart persistence (CartDao, CustomerDao, CustomerDetailsDao)",
            "Firebase authentication with password reset flow",
            "Inventory management admin panel for store staff",
            "Navigation Compose with sealed class route definitions"
        ],
        userFlow: [
            { title: "Choose Variant", desc: "Install either the Associates (staff) or Customers app from the same codebase." },
            { title: "Login", desc: "Authenticate with Firebase, staff get admin access, customers get shopping access." },
            { title: "Staff: Manage", desc: "Associates can manage inventory, CRUD products/categories, view active users." },
            { title: "Customer: Browse", desc: "Customers browse products, add to cart (persisted in Room DB)." },
            { title: "Customer: Order", desc: "Review cart and place order through the REST API." }
        ],
        architecture: {
            description: "MVVM architecture with Dagger Hilt DI, per-screen ViewModels, and clean separation between data, domain, and presentation layers.",
            layers: [
                { abbr: "V", name: "View (Compose)", desc: "Jetpack Compose UI with Material 3" },
                { abbr: "VM", name: "ViewModels", desc: "Per-screen ViewModels with Coroutines" },
                { abbr: "DI", name: "Dagger Hilt", desc: "Dependency injection for all services" },
                { abbr: "D", name: "Data Layer", desc: "Retrofit (API) + Room (local) + Firebase" }
            ]
        },
        techStack: ["Kotlin", "Jetpack Compose", "Dagger Hilt", "Retrofit", "Room", "Firebase Auth", "Firestore", "Firebase Analytics", "Coil", "Coroutines", "Navigation Compose", "Material 3"],
        info: [
            { label: "Type", value: "Android App" },
            { label: "Flavors", value: "2 (Staff + Customer)" },
            { label: "Architecture", value: "MVVM" },
            { label: "DI", value: "Dagger Hilt" },
            { label: "Local DB", value: "Room" }
        ]
    },

    "password-manager": {
        title: "Password Manager",
        subtitle: "A fully offline password manager with AES encryption, biometric authentication, and encrypted backup/restore, zero network dependency.",
        badge: "Open Source | Security",
        gradient: ["#DC382D", "#EF5350"],
        github: "https://github.com/prasadrawas/password_manager",
        overview: [
            "A fully offline password manager built with Flutter that stores credentials encrypted with AES encryption in a local SQLite database. All data stays on-device with zero network dependency.",
            "Supports 5 credential categories, logins, bank accounts, card details, net banking, and mobile banking. Protected by biometric authentication (fingerprint/Face ID) with a PIN-based fallback. Includes email backup functionality and file import/export for encrypted backups."
        ],
        features: [
            "AES-encrypted local credential storage in SQLite database",
            "5 credential categories, logins, bank accounts, cards, net banking, mobile banking",
            "Biometric unlock, fingerprint and Face ID support via local_auth",
            "PIN-based alternative authentication as fallback",
            "Email backup export with encrypted credential data",
            "File import/export for encrypted backup and restore",
            "Fully offline, zero network dependency for maximum security",
            "Speed dial FAB for quick credential entry"
        ],
        userFlow: [
            { title: "Setup", desc: "First launch, user sets up a PIN and optionally enables biometric authentication." },
            { title: "Unlock", desc: "On subsequent launches, authenticate via fingerprint/Face ID or PIN." },
            { title: "Add Credentials", desc: "Use speed dial FAB to add a credential, choose category, enter details." },
            { title: "Browse & Search", desc: "View credentials by category, search across all stored entries." },
            { title: "Backup", desc: "Export encrypted backup via email or save to file for offline storage." },
            { title: "Restore", desc: "Import encrypted backup file to restore credentials on a new device." }
        ],
        techStack: ["Flutter", "Dart", "GetX", "SQLite (sqflite)", "AES Encryption (encrypt)", "local_auth", "mailer", "file_picker", "pinput"],
        info: [
            { label: "Type", value: "Mobile App" },
            { label: "Storage", value: "Local SQLite" },
            { label: "Encryption", value: "AES" },
            { label: "Auth", value: "Biometric + PIN" },
            { label: "Network", value: "None (offline)" }
        ]
    }
};
