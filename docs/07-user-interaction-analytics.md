# EPIC 7 — User Interaction Analytics

## Feature 7.1 — Activity Tracking UI

### User Story

> As an administrator, I want to see how users interact with products so that I can understand customer interest.

The eventual activity model should resemble:

```text
UserActivity

id
userId
actionType
productId
timestamp
metadata
```

Where:

```text
actionType =
LIKE
COMMENT
SHARE
```

### Tasks

* Create activity table.
* Display user.
* Display action.
* Display product.
* Display timestamp.
* Add action filters.
* Add product filters.
* Add user search.
* Add pagination mockup.
* Create analytics summary cards.
* Prepare analytics API interface.
