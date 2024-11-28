import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      'Accept': 'application/vnd.github.v3+json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      'Authorization': `token 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`,
    },
  }
});