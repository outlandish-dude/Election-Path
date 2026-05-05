import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock window.scrollTo
window.scrollTo = vi.fn();

// Mock IntersectionObserver
window.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
}));

// Mock Firebase
vi.mock('../src/lib/firebase', () => ({
  auth: {
    onAuthStateChanged: vi.fn((cb) => {
      cb(null);
      return () => null;
    }),
  },
  googleProvider: {},
  db: {},
}));

// Mock GA
vi.mock('../src/lib/analytics', () => ({
  initGA: vi.fn(),
  logEvent: vi.fn(),
  logPageView: vi.fn(),
}));
