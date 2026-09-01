# Hardware & Steel — Project Documentation

This directory contains the product requirements, architecture specifications, security requirements, API preparation, and agile backlog for Hardware & Steel.

## Documentation Structure

### Product Epics

1. [Product Catalog & Categories](./01-product-catalog.md)
2. [User Engagement](./02-user-engagement.md)
3. [Personalized Sharing & Token Authentication](./03-personalized-sharing-token-auth.md)
4. [Authentication](./04-authentication.md)
5. [Admin Panel](./05-admin-panel.md)
6. [Admin Interface Customization](./06-admin-interface-customization.md)
7. [User Interaction Analytics](./07-user-interaction-analytics.md)
8. [Targeted Discounts](./08-targeted-discounts.md)
9. [Navigation & Layout](./09-navigation-layout.md)
10. [UX States](./10-ux-states.md)

### Architecture

* [Mock Data Architecture](./mock-data-architecture.md)
* [API Preparation](./api-preparation.md)
* [Suggested Future API Contracts](./future-api-contracts.md)
* [Security Architecture](./security-architecture.md)

### Project Planning

* [Agile Backlog Priority](./agile-backlog-priority.md)

## Cursor Development Rule

Before implementing a feature, read the relevant documentation in this directory.

Do not assume that a feature should be implemented simply because it exists in the backlog. Follow the current sprint priority defined in `agile-backlog-priority.md`.

When requirements conflict, prioritize:

1. Security
2. Current sprint scope
3. Architecture
4. Feature requirements
5. Implementation convenience

The frontend should be implemented first using mock data and service abstractions before backend integration.

Do not implement payment functionality unless explicitly requested.
