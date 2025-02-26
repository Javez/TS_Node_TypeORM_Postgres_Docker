module.exports = {
    preset: 'ts-jest', // Required if using TypeScript
    // testEnvironment: 'node', // 'jsdom' if testing frontend code
    testMatch: ['**/tests/**/*.test.(ts|js)'], // Specify test file patterns
    transform: {
        '^.+\\.ts?$': 'ts-jest', // Use ts-jest for TypeScript files (use tsx?$ for React components)
    },
    moduleFileExtensions: ['ts', 'js', 'json'], // File types Jest should recognize
    coverageDirectory: 'coverage', // Directory for coverage reports
    collectCoverage: true, // Enable coverage reports
    collectCoverageFrom: ['src/**/*.{ts,js}', '!src/**/*.d.ts'], // Define coverage scope
    verbose: true, // Show detailed test results
    clearMocks: true, // Automatically clear mocks before each test
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Global setup (optional)
};