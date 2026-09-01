# Suggested Future API Contracts

These are contracts to prepare for, NOT necessarily endpoints to implement immediately.

## Products

```text
GET    /api/products
GET    /api/products/:id
GET    /api/categories
```

## Engagement

```text
POST   /api/products/:id/like
DELETE /api/products/:id/like
GET    /api/products/:id/comments
POST   /api/products/:id/comments
POST   /api/products/:id/share
```

## Authentication

```text
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/token-exchange
```

## Admin

```text
GET    /api/admin/analytics
GET    /api/admin/activity
GET    /api/admin/users
PUT    /api/admin/settings
```

## Discounts

```text
GET  /api/admin/discounts
POST /api/admin/discounts
PUT  /api/admin/discounts/:id
```

These should be treated as future contracts and should not force premature backend implementation.
