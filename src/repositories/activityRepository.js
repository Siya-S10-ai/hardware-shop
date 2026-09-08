const activities = []

export function recordActivity(event) {
  activities.unshift({
    id: `act-${activities.length + 1}`,
    at: new Date().toISOString(),
    ...event,
  })
}

export function listActivities() {
  return activities.map((item) => ({ ...item }))
}
