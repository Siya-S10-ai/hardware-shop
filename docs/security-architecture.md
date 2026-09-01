# Security Architecture

Security is a first-class requirement.

### Authentication tokens

For the eventual implementation:

* Use cryptographically secure random tokens.
* Make tokens short-lived.
* Store only a hashed representation server-side where appropriate.
* Make tokens single-use where possible.
* Never place passwords in URLs.
* Never trust frontend token validation.
* Validate tokens server-side.
* Implement token expiration.
* Implement token revocation.
* Prevent token replay.
* Avoid token leakage through logs.
* Avoid exposing tokens unnecessarily to analytics systems.
* Use HTTPS in production.

The frontend mock implementation must make it obvious which authentication behavior is simulated.

The eventual backend architecture should use:

```text
Shared URL
     ↓
Short-lived opaque token
     ↓
Backend validation
     ↓
Token exchange
     ↓
Secure authenticated session
     ↓
Frontend application
```

The frontend must NEVER independently decide that a token is valid in production.
