export const config = {
  appName: 'Hardware & Steel',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
  useMock: import.meta.env.VITE_USE_MOCK !== 'false',
  mockLatencyMs: Number(import.meta.env.VITE_MOCK_LATENCY_MS ?? 420),
}
