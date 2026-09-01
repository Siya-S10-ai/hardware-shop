# EPIC 3 — Personalized Sharing & Token Authentication

This feature requires particular security attention.

## Feature 3.1 — Personalized Share Links

### User Story

> As a customer, I want to share a product using a personalized link so that the recipient can access the intended product.

### Tasks

* Create share-link generator UI.
* Create mock token generator.
* Add token to URL query parameter.
* Create share-link preview.
* Add copy-to-clipboard functionality.
* Prepare backend token exchange abstraction.

Example frontend URL:

```text
/products/steel-roofing?token=MOCK_TOKEN
```

---

## Feature 3.2 — Token Detection

### User Story

> As a pre-registered customer, I want the application to recognize a valid personalized link so that I can access the application without manually logging in.

### Tasks

* Detect token query parameter.
* Extract token safely.
* Store token only temporarily during the authentication process.
* Create mock token validation service.
* Display authentication/loading state.
* Redirect authenticated users appropriately.
* Handle invalid tokens.
* Handle expired tokens.
* Handle missing tokens.
