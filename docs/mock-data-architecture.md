# Mock Data Architecture

Create centralized mock data.

Example:

```text
data/
├── products.js
├── categories.js
├── users.js
├── comments.js
├── activities.js
├── discounts.js
└── siteSettings.js
```

Components should consume mock services rather than importing large datasets directly.

Example:

```text
Component
    ↓
Feature Service
    ↓
Mock Repository
    ↓
Mock Data
```

Later this can become:

```text
Component
    ↓
Feature Service
    ↓
API Repository
    ↓
Node.js API
    ↓
Database
```

This is an important architectural requirement.
