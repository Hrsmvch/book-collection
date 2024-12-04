/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', 
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], // Додаємо файл для налаштування jest-dom
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Для обробки TypeScript файлів
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Для ігнорування стилів
  },
};