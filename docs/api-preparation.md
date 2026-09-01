# API Preparation

Do NOT hardcode API URLs throughout React components.

Create an API abstraction such as:

```text
services/
├── apiClient.js
├── productService.js
├── authService.js
├── engagementService.js
├── adminService.js
├── discountService.js
└── settingsService.js
```

The frontend should be able to switch from:

```text
MockProductService
```

to:

```text
ApiProductService
```

without rewriting the UI.
