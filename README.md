# PlaywrightFundamental3x

A starter project for learning end-to-end testing with [Playwright](https://playwright.dev/).

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

Run the full test suite:

```bash
npx playwright test
```

Run in headed mode (configured by default in this project):

```bash
npx playwright test --headed
```

Run a single test file:

```bash
npx playwright test tests/example.spec.ts
```

## Test Report

After a run, an HTML report is generated in `playwright-report/`:

```bash
npx playwright show-report
```

## Project Structure

```
.
├── tests/                 # Test specs
│   └── example.spec.ts
├── playwright.config.ts   # Playwright configuration
├── package.json
└── README.md
```

## Configuration

Key settings in `playwright.config.ts`:

- `testDir`: `./tests`
- `fullyParallel`: `true`
- `reporter`: `html`
- `headless`: `false` (tests run with a visible browser)
- `projects`: Chromium (Desktop Chrome)

## License

MIT © Anil Yadav
