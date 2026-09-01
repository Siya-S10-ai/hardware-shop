# Hardware & Steel — Project Context

## 1. Project Identity

**Repository Name:** `hardware-shop`

**Application Name:** Hardware & Steel

Hardware & Steel is a web application designed to provide an easy, enjoyable, and engaging way for customers to browse a hardware and building-materials catalog.

The application is not simply intended to display products. It should create an experience that encourages users to explore products, interact with them, share them with others, and develop an ongoing relationship with the business.

As the developer, the broader goals of the project are to:

* Increase user engagement.
* Grow the number of users interacting with the platform.
* Improve customer satisfaction.
* Make product discovery easier and more enjoyable.
* Encourage users to return to the platform.
* Create opportunities for targeted marketing.
* Ultimately contribute toward increased sales.

The application should therefore be designed with both **customer experience** and **future business growth** in mind.

---

# 2. Technology Stack

## Frontend

* React
* JavaScript
* HTML5
* CSS3
* React Router, DOM, useState, useEffect, etc
  Tailwind CSS

Use modern JavaScript features where appropriate.

**Do NOT use TypeScript.**

The developer is intentionally learning and building the application using JavaScript. Do not introduce TypeScript, `.ts`, or `.tsx` files.

## Backend — Future Phase

The planned backend technology is:

* Node.js
* Express.js
* REST API

Backend integration is not the primary objective of the initial frontend development phases.

## Database — Future Phase

A database will eventually be introduced for:

* Products
* Users
* Authentication
* User interactions
* Site settings
* Discounts
* Analytics

The specific database implementation should not unnecessarily constrain the frontend architecture.

---

# 3. Phase 1 Scope

Phase 1 focuses on establishing the customer-facing product experience and the foundations required for future functionality.

The initial application should provide:

### Product Catalog

Users should be able to:

* Browse products.
* Browse products by category.
* Search for products.
* Filter products.
* View product details.
* Discover related products.

### User Engagement

The interface should prepare for:

* Likes.
* Comments.
* Shares.
* Engagement tracking.

The initial implementation may use mock data and local frontend state.

### Authentication Preparation

The frontend should eventually support:

* Login.
* Signup.
* Protected areas.
* Personalized links.
* Secure token-based authentication.

Authentication should initially be represented through mock behavior rather than production authentication logic.

### Administration Preparation

The application architecture should leave room for a future administrative interface capable of:

* Managing products.
* Viewing users.
* Viewing engagement.
* Customizing selected website elements.
* Creating targeted discounts.

The admin functionality does not need to be fully implemented during the initial foundation and catalog phases.

### Payments

**No payment gateway is required for Phase 1.**

Do not implement checkout or payment processing unless explicitly requested later.

---

# 4. Product Categories

Hardware & Steel must support the following product categories:

1. Window Frames
2. Timber
3. Corrugated IBR
4. Glass
5. Doors
6. Cables
7. Steel
8. Log Sets / Door Handles
9. Tiles / Floor Tiles
10. Tools
11. Paints
12. Cement
13. Plumbing
14. Fencing
15. Electric

The original specification referred to 14 product types, but the supplied list contains 15 categories.

**Use all 15 categories.**

Categories should be defined centrally rather than repeatedly hardcoded throughout the application.

---

# 5. Product Images

Products may use relevant legal images sourced from the internet during the mockup and development phase.

When using external images:

* Prefer images that are legally permitted for the intended use.
* Prefer royalty-free, public-domain, Creative Commons, or appropriately licensed sources.
* Do not intentionally use copyrighted commercial imagery without permission.
* Keep image sources identifiable where appropriate.
* Use local placeholders when a suitable legally usable image cannot be established.
* Do not make the application dependent on an external image URL remaining permanently available.

The image strategy should allow product images to eventually be replaced by images managed through the backend or an appropriate storage service.

---

# 6. Frontend-First Philosophy

Hardware & Steel will be developed **frontend-first**.

The initial priority is to establish:

* Good user experience.
* Clear navigation.
* Strong visual hierarchy.
* Responsive layouts.
* Reusable components.
* Clean application structure.
* Realistic mock data.
* Clear service boundaries.
* Future API integration points.

The frontend should not be tightly coupled to backend implementation details.

Use mock data and mock services where the backend does not yet exist.

The architectural direction should be:

```text
React UI
    ↓
Feature Service
    ↓
Mock Repository
    ↓
Mock Data
```

Eventually:

```text
React UI
    ↓
Feature Service
    ↓
API Repository
    ↓
Node.js / Express API
    ↓
Database
```

The goal is to allow the mock implementation to be replaced with a real API without rebuilding the user interface.

---

# 7. JavaScript Requirement

This project intentionally uses JavaScript.

---

# 8. Responsive Design Requirement

Hardware & Steel must provide a good experience across:

* Mobile phones.
* Tablets.
* Laptops.
* Desktop screens.

The application should not simply shrink the desktop interface onto mobile.

Navigation, product grids, forms, buttons, cards, filters, comments, and administrative interfaces should adapt appropriately to smaller screens.

Prioritize:

```text
Mobile
   ↓
Tablet
   ↓
Desktop
```

The application should remain usable at different viewport sizes.

---

# 9. Accessibility

Accessibility is part of the product quality standard.

Use:

* Semantic HTML.
* Proper heading hierarchy.
* Descriptive button labels.
* Form labels.
* Keyboard-accessible controls.
* Visible focus states.
* Appropriate alternative text for meaningful images.
* Accessible form validation.
* Sufficient text/background contrast.
* Clear error and success messages.
* ARIA attributes only where they provide meaningful assistance.

Do not rely solely on:

* Color.
* Icons.
* Hover states.

to communicate important information.

The application should be usable by as many people as reasonably possible.

---

# 10. Design Direction

Hardware & Steel should visually communicate:

**Hardware + Steel + Construction + Reliability + Modern Commerce**

The interface should feel:

* Strong.
* Professional.
* Industrial.
* Modern.
* Practical.
* Trustworthy.
* Clean.
* Product-focused.

Avoid making the application feel like a generic e-commerce template.

The visual identity should have a sense of physical strength and reliability while remaining approachable to everyday customers.

Prioritize:

* Clear typography.
* Strong visual hierarchy.
* Good spacing.
* High-quality product presentation.
* Clear calls to action.
* Consistent components.
* Simple navigation.
* Useful feedback to users.

The interface should make browsing feel effortless.

---

# 11. User Experience Philosophy

The customer should be able to answer these questions quickly:

1. What does Hardware & Steel sell?
2. Where can I find what I need?
3. What products are available?
4. What category does a product belong to?
5. Can I learn more about a product?
6. Can I interact with a product?
7. Can I share a product with someone?
8. Can I easily return to browsing?

Avoid unnecessary complexity.

Every additional interaction should have a purpose.

The application should encourage exploration without overwhelming the user.

---

# 12. Growth Philosophy

User growth and customer satisfaction are important long-term objectives.

The architecture should therefore allow future measurement of:

* Product views.
* Likes.
* Comments.
* Shares.
* Category interest.
* Returning users.
* Product popularity.
* User engagement patterns.

These insights may eventually be used to support targeted marketing and personalized discounts.

The initial frontend should prepare for these capabilities without prematurely implementing a complicated analytics platform.

---

# 13. Cursor Implementation Rules

When working inside the `hardware-shop` repository:

### Before changing code

1. Inspect the existing repository.
2. Understand the current project structure.
3. Identify the framework and dependencies already installed.
4. Reuse existing functionality where appropriate.
5. Do not overwrite working code unnecessarily.
6. Read the relevant documentation inside `/docs`.

### During implementation

* Use JavaScript.
* Use React.
* Keep components focused.
* Prefer reusable components.
* Avoid giant components.
* Avoid duplicated logic.
* Keep mock data centralized.
* Keep services separate from presentation.
* Keep business logic out of purely presentational components.
* Avoid unnecessary dependencies.
* Do not hardcode API URLs inside components.
* Do not introduce backend functionality unless explicitly requested.
* Do not implement payments.
* Clearly identify mock functionality.
* Maintain responsive behavior.
* Consider accessibility while implementing every feature.

### Documentation

Before implementing a feature, read its corresponding Epic documentation.

For architecture decisions, consult:

* `mock-data-architecture.md`
* `api-preparation.md`
* `future-api-contracts.md`
* `security-architecture.md`

For implementation priority, consult:

* `agile-backlog-priority.md`

---

# 14. Security Boundary

Security must not be sacrificed for convenience.

The frontend may simulate authentication and token behavior during development, but frontend-only validation must never be treated as production authentication.

Eventually, personalized links should use a secure, short-lived token exchange mechanism.

The frontend should not:

* Store passwords.
* Put passwords into URLs.
* Generate production authentication credentials.
* Decide independently whether a production authentication token is valid.
* Treat a visible URL token as permanent authentication.

Production authentication will ultimately be validated by the backend.

---

# 15. Definition of Done

A feature is considered complete when:

* The intended UI has been implemented.
* The feature works with the current mock data/service architecture.
* The layout is responsive.
* Important interaction states have been considered.
* Loading states exist where appropriate.
* Empty states exist where appropriate.
* Error states exist where appropriate.
* Validation exists where appropriate.
* Accessibility has been considered.
* Components are reasonably reusable.
* Business logic is separated from presentation where appropriate.
* No unnecessary dependencies have been introduced.
* No secrets or credentials have been hardcoded.
* No production authentication behavior has been faked as secure authentication.
* The implementation follows the project's documentation.
* The code remains understandable to a developer learning the project.
* The implementation does not unnecessarily block future Node.js/Express API integration.

---

# 16. Current Development Philosophy

Build Hardware & Steel incrementally.

Do not attempt to build the entire application in one step.

The immediate objective is not to have every planned feature.

The immediate objective is to create a **solid foundation that can grow**.

Build the application like constructing a physical structure:

```text
Foundation
    ↓
Structure
    ↓
Rooms
    ↓
Systems
    ↓
Finishing
```

For Hardware & Steel:

```text
Foundation
    ↓
Application Shell
    ↓
Product Catalog
    ↓
User Engagement
    ↓
Authentication
    ↓
Administration
    ↓
Analytics & Marketing
    ↓
Backend Integration
```

Each stage should be stable enough to support the next stage.
