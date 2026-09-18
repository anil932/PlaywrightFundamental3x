# PlaywrightFundamental3x

A hands-on collection of Playwright examples covering the fundamentals: the test runner, raw browser/context APIs, locators, network headers, and homework exercises against real demo sites.

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
npx playwright test tests/01_Basic/example.spec.ts
```

Run a specific test by title:

```bash
npx playwright test -g "has title"
```

List the tests Playwright will run without executing them:

```bash
npx playwright test --list
```

## Test Report

After a run, an HTML report is generated in `playwright-report/`:

```bash
npx playwright show-report
```

## Project Structure

```
.
├── tests/
│   ├── 01_Basic/                  # Starter specs and raw Playwright API examples
│   │   ├── example.spec.ts
│   │   ├── multicontext.spec.ts
│   │   └── normal.spec.ts
│   ├── 03_Loc_command/            # Locators, referers, and navigation options
│   │   ├── 01_loactor.spec.ts
│   │   ├── 02-referer.spec.ts
│   │   └── 03_fresh.spec.ts
│   └── 04_locator_homework.spec.ts/
│       └── 01_cura_app.spec.ts    # Login flow exercise (CURA demo app)
├── playwright.config.ts           # Playwright configuration
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
