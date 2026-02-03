# E2E Testing with Playwright

This directory contains end-to-end tests for the Compound Interest Educational Site.

## Test Structure

```
tests/
└── e2e/
    └── phase2.spec.ts    # Phase 2: Hero & Introduction tests
```

## Running Tests

### Run all tests (headless mode)
```bash
npm run test:e2e
```

### Run tests with UI mode (visual debugger)
```bash
npm run test:e2e:ui
```

### Run tests in headed mode (see the browser)
```bash
npm run test:e2e:headed
```

### Run tests in debug mode
```bash
npm run test:e2e:debug
```

### View test report
```bash
npm run test:e2e:report
```

### Run specific test file
```bash
npx playwright test tests/e2e/phase2.spec.ts
```

### Run tests on specific browser
```bash
npm run test:e2e -- --project=chromium
npm run test:e2e -- --project=firefox
npm run test:e2e -- --project=webkit
```

## Phase 2 Test Coverage

The Phase 2 tests verify all requirements from `IMPLEMENTATION-PLAN.md`:

### ✅ Task 2.1: Hero.tsx - Layout and Content
- Display of all required hero elements (tagline, heading, description, CTAs, stats)
- Proper gradient background styling

### ✅ Task 2.2: SnowballAnimation.tsx - Framer Motion
- Snowball animation with dollar sign
- Floating particle effects
- Animated scroll indicator

### ✅ Task 2.3: Scroll-Triggered Text Reveal Animations
- ScrollReveal component functionality
- Proper animation timing
- Elements reveal when scrolled into view

### ✅ Task 2.4: WhatIsCompound.tsx - Explanation Section
- Three-step explanation cards
- Snowball effect visual explanation
- Simple example walkthrough
- Call to action for calculator

### ✅ Task 2.5: Animated Diagrams (Linear vs Exponential)
- Linear growth diagram with correct values ($36,000 after 30 years)
- Exponential growth diagram with correct values ($122,709 after 30 years)
- Diagram animations on scroll

### ✅ Task 2.6: Mobile Responsive Adjustments
- Hero layout adapts for mobile (375px viewport)
- Three-step cards stack vertically on mobile
- Comparison charts work in mobile layout
- Touch-friendly button sizes (minimum 48px)

### ✅ Interactive Elements
- Smooth scroll navigation for CTA buttons
- "Learn How It Works" scrolls to explanation section
- "See It In Action" scrolls to calculator section

### ✅ Design System Compliance
- Correct color scheme (cream, mauve, rose, peach, success)
- Proper typography hierarchy (h1, h2, h3)

### ✅ Performance & Console
- Page loads without console errors
- No failed network requests

### ✅ Accessibility
- Proper heading hierarchy (exactly one h1, multiple h2/h3)
- Accessible button labels

## Test Results

**Total Tests**: 26
**Status**: ✅ All Passing

### Test Breakdown by Category
- Layout & Content: 2 tests
- Animations: 2 tests
- Scroll Triggers: 2 tests
- Content Sections: 4 tests
- Diagrams: 4 tests
- Mobile Responsive: 4 tests
- Interactions: 2 tests
- Design System: 2 tests
- Performance: 2 tests
- Accessibility: 2 tests

## Writing New Tests

When adding tests for Phase 3, 4, etc., create new spec files:

```bash
tests/e2e/phase3.spec.ts    # Interactive Calculator
tests/e2e/phase4.spec.ts    # Comparison Tools
# etc.
```

### Test Best Practices

1. **Use semantic selectors**: Prefer `getByRole`, `getByLabel` over CSS selectors
2. **Scope selectors**: Use `.locator()` to scope to specific sections when text appears multiple times
3. **Exact matching**: Use `{ exact: true }` option when text might be a substring of other text
4. **Wait for animations**: Use `waitForTimeout` sparingly, prefer `waitForLoadState` or element visibility
5. **Mobile testing**: Test responsiveness at key breakpoints (375px, 768px, 1024px)

### Example Test Structure

```typescript
test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should do something specific', async ({ page }) => {
    // Arrange: set up test conditions
    const element = page.getByRole('button', { name: 'Click Me' });

    // Act: perform the action
    await element.click();

    // Assert: verify expected outcome
    await expect(page.getByText('Success!')).toBeVisible();
  });
});
```

## CI/CD Integration

Tests are configured to run in CI environments:
- Retries: 2 attempts on CI
- Workers: Single worker on CI for stability
- Screenshots: Captured on failure
- Traces: Captured on first retry for debugging

## Troubleshooting

### Dev server not starting
Make sure the dev server is running on `http://localhost:3000` before tests run, or let Playwright start it automatically via the `webServer` config.

### Flaky tests
If tests are flaky due to animations:
1. Increase `waitForTimeout` values
2. Use `waitForLoadState('networkidle')`
3. Check for timing issues in animations

### Strict mode violations
If a selector matches multiple elements:
1. Add `{ exact: true }` option
2. Scope the selector to a parent container
3. Use more specific role-based selectors

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Accessibility Testing](https://playwright.dev/docs/accessibility-testing)
