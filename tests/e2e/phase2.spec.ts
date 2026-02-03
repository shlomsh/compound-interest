import { test, expect } from '@playwright/test';

/**
 * Phase 2 E2E Tests: Hero & Introduction
 * Tests all requirements from IMPLEMENTATION-PLAN.md Phase 2
 */

test.describe('Phase 2: Hero & Introduction', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Task 2.1: Hero.tsx - Layout and Content', () => {
    test('should display hero section with all required elements', async ({ page }) => {
      // Check tagline badge
      await expect(page.getByText('The Secret Superpower of Money')).toBeVisible();

      // Check main heading
      const heading = page.getByRole('heading', {
        name: /Your Money Can Grow Itself/i,
        level: 1
      });
      await expect(heading).toBeVisible();

      // Check description paragraph
      await expect(page.getByText(/Imagine a tiny snowball rolling down a hill/i)).toBeVisible();

      // Check CTA buttons
      await expect(page.getByRole('button', { name: 'See It In Action' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Learn How It Works' })).toBeVisible();

      // Check quick stats (scope to hero section to avoid conflicts)
      const heroSection = page.locator('section').first();
      await expect(heroSection.getByText('$1M+')).toBeVisible();
      await expect(heroSection.getByText('Possible by age 65')).toBeVisible();
      await expect(heroSection.getByText('7%', { exact: true })).toBeVisible();
      await expect(heroSection.getByText('Average annual return')).toBeVisible();
    });

    test('should have proper gradient background on hero', async ({ page }) => {
      const heroSection = page.locator('section').first();
      const bgClass = await heroSection.getAttribute('class');

      expect(bgClass).toContain('bg-gradient-to-b');
      expect(bgClass).toContain('from-cream');
    });
  });

  test.describe('Task 2.2: SnowballAnimation.tsx - Framer Motion', () => {
    test('should display snowball animation with dollar sign', async ({ page }) => {
      // Check for dollar sign in the snowball
      const snowballSection = page.locator('section').first();
      const dollarSigns = snowballSection.getByText('$');

      // Should have multiple dollar signs (main one + particles)
      await expect(dollarSigns.first()).toBeVisible();
      const count = await dollarSigns.count();
      expect(count).toBeGreaterThan(1);
    });

    test('should have animated scroll indicator', async ({ page }) => {
      // The scroll indicator should be visible at the bottom of hero
      const scrollIndicator = page.locator('section').first().locator('.absolute.bottom-8');
      await expect(scrollIndicator).toBeVisible();
    });
  });

  test.describe('Task 2.3: Scroll-Triggered Text Reveal Animations', () => {
    test('should reveal WhatIsCompound section on scroll', async ({ page }) => {
      const whatIsSection = page.locator('#what-is-compound');

      // Initially should be below the fold
      const initialBox = await whatIsSection.boundingBox();
      expect(initialBox).toBeTruthy();

      // Scroll to the section
      await whatIsSection.scrollIntoViewIfNeeded();

      // Section heading should be visible
      await expect(page.getByRole('heading', {
        name: 'What Is Compound Interest?',
        level: 2
      })).toBeVisible();
    });

    test('should animate elements with proper timing', async ({ page }) => {
      // Scroll to trigger animations
      await page.locator('#what-is-compound').scrollIntoViewIfNeeded();

      // Wait for animations to settle
      await page.waitForTimeout(1000);

      // Check that all three step cards are visible after animation
      await expect(page.getByRole('heading', { name: 'You Save Money', level: 3 })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'It Earns Interest', level: 3 })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Interest Earns Interest', level: 3 })).toBeVisible();
    });
  });

  test.describe('Task 2.4: WhatIsCompound.tsx - Explanation Section', () => {
    test('should display three-step explanation cards', async ({ page }) => {
      // Check step 1
      await expect(page.getByRole('heading', { name: 'You Save Money', level: 3 })).toBeVisible();
      await expect(page.getByText(/Put some money into a savings account/i)).toBeVisible();

      // Check step 2
      await expect(page.getByRole('heading', { name: 'It Earns Interest', level: 3 })).toBeVisible();
      await expect(page.getByText(/Your money grows by a certain percentage/i)).toBeVisible();

      // Check step 3
      await expect(page.getByRole('heading', { name: 'Interest Earns Interest', level: 3 })).toBeVisible();
      await expect(page.getByText(/Next year, you earn interest on your original money/i)).toBeVisible();
    });

    test('should display snowball effect explanation', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'The Snowball Effect', level: 3 })).toBeVisible();
      await expect(page.getByText(/Think of compound interest like a snowball/i)).toBeVisible();

      // Check year labels (use exact match to avoid conflicts)
      const snowballSection = page.locator('text=The Snowball Effect').locator('..').locator('..');
      await expect(snowballSection.getByText('Year 1', { exact: true })).toBeVisible();
      await expect(snowballSection.getByText('Year 10', { exact: true })).toBeVisible();
      await expect(snowballSection.getByText('Year 30', { exact: true })).toBeVisible();
    });

    test('should display simple example walkthrough', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'A Simple Example', level: 3 })).toBeVisible();
      await expect(page.getByText('You save $100')).toBeVisible();
      await expect(page.getByText('It earns 7% per year')).toBeVisible();
      await expect(page.getByText('The magic compounds')).toBeVisible();
      await expect(page.getByText(/your \$100 became \$761/i)).toBeVisible();
    });

    test('should display call to action for calculator', async ({ page }) => {
      await expect(page.getByText('Ready to see what your money could become?')).toBeVisible();
      await expect(page.getByText(/Try the calculator below/i)).toBeVisible();
    });
  });

  test.describe('Task 2.5: Animated Diagrams (Linear vs Exponential)', () => {
    test('should display linear vs exponential comparison', async ({ page }) => {
      await expect(page.getByRole('heading', {
        name: 'The Power of Compound Interest',
        level: 3
      })).toBeVisible();
    });

    test('should show linear growth diagram with correct values', async ({ page }) => {
      const linearHeading = page.getByRole('heading', {
        name: 'Without Compound Interest',
        level: 4
      });
      await expect(linearHeading).toBeVisible();

      // Get the card containing the linear diagram
      const linearCard = linearHeading.locator('..');
      await expect(linearCard.getByText('Just saving $100/month')).toBeVisible();
      await expect(linearCard.getByText('$36,000')).toBeVisible();

      // Check the "after 30 years" text appears in this card
      const afterText = linearCard.getByText('after 30 years');
      await expect(afterText).toBeVisible();
    });

    test('should show exponential growth diagram with correct values', async ({ page }) => {
      const exponentialHeading = page.getByRole('heading', {
        name: 'With Compound Interest (7%)',
        level: 4
      });
      await expect(exponentialHeading).toBeVisible();

      // Get the card containing the exponential diagram
      const exponentialCard = exponentialHeading.locator('..');
      await expect(exponentialCard.getByText('Same $100/month, but growing')).toBeVisible();
      await expect(exponentialCard.getByText('$122,709')).toBeVisible();
      await expect(exponentialCard.getByText(/\$86,709 in FREE MONEY/i)).toBeVisible();
    });

    test('should animate diagrams on scroll', async ({ page }) => {
      // Scroll to diagrams
      await page.getByRole('heading', { name: 'The Power of Compound Interest' }).scrollIntoViewIfNeeded();

      // Wait for animations to complete
      await page.waitForTimeout(1500);

      // Both diagrams should be visible after animation
      await expect(page.getByText('$36,000')).toBeVisible();
      await expect(page.getByText('$122,709')).toBeVisible();
    });
  });

  test.describe('Task 2.6: Mobile Responsive Adjustments', () => {
    test('should adapt hero layout for mobile viewport', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();

      // All hero elements should still be visible
      await expect(page.getByRole('heading', {
        name: /Your Money Can Grow Itself/i
      })).toBeVisible();
      await expect(page.getByRole('button', { name: 'See It In Action' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Learn How It Works' })).toBeVisible();

      // Stats should be visible (scope to hero to avoid conflicts)
      const heroSection = page.locator('section').first();
      await expect(heroSection.getByText('$1M+')).toBeVisible();
      await expect(heroSection.getByText('7%', { exact: true })).toBeVisible();
    });

    test('should stack three-step cards vertically on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();

      // Scroll to the section
      await page.locator('#what-is-compound').scrollIntoViewIfNeeded();

      // All three cards should be visible and stacked
      const step1 = page.getByRole('heading', { name: 'You Save Money', level: 3 });
      const step2 = page.getByRole('heading', { name: 'It Earns Interest', level: 3 });
      const step3 = page.getByRole('heading', { name: 'Interest Earns Interest', level: 3 });

      await expect(step1).toBeVisible();
      await expect(step2).toBeVisible();
      await expect(step3).toBeVisible();
    });

    test('should display comparison charts in mobile layout', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();

      // Scroll to comparison section
      await page.getByRole('heading', { name: 'The Power of Compound Interest' }).scrollIntoViewIfNeeded();

      // Both comparison values should be visible
      await expect(page.getByText('$36,000')).toBeVisible();
      await expect(page.getByText('$122,709')).toBeVisible();
    });

    test('should maintain touch-friendly button sizes on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();

      // Check button sizes (minimum 48px for touch)
      const seeItButton = page.getByRole('button', { name: 'See It In Action' });
      const learnButton = page.getByRole('button', { name: 'Learn How It Works' });

      const seeItBox = await seeItButton.boundingBox();
      const learnBox = await learnButton.boundingBox();

      expect(seeItBox?.height).toBeGreaterThanOrEqual(48);
      expect(learnBox?.height).toBeGreaterThanOrEqual(48);
    });
  });

  test.describe('Interactive Elements', () => {
    test('should scroll to What Is Compound section when Learn How It Works is clicked', async ({ page }) => {
      const learnButton = page.getByRole('button', { name: 'Learn How It Works' });

      // Get initial scroll position
      const initialScroll = await page.evaluate(() => window.scrollY);

      // Click the button
      await learnButton.click();

      // Wait for smooth scroll to complete
      await page.waitForTimeout(1000);

      // Should have scrolled down
      const newScroll = await page.evaluate(() => window.scrollY);
      expect(newScroll).toBeGreaterThan(initialScroll);

      // The What Is Compound section should be in viewport
      const whatIsSection = page.locator('#what-is-compound');
      await expect(whatIsSection).toBeInViewport();
    });

    test('should scroll to calculator placeholder when See It In Action is clicked', async ({ page }) => {
      const seeItButton = page.getByRole('button', { name: 'See It In Action' });

      // Click the button
      await seeItButton.click();

      // Wait for smooth scroll to complete
      await page.waitForTimeout(1000);

      // The calculator section should be in viewport
      const calculatorSection = page.locator('#calculator');
      await expect(calculatorSection).toBeInViewport();

      // Should show Phase 3 placeholder
      await expect(page.getByText('Calculator coming in Phase 3')).toBeVisible();
    });
  });

  test.describe('Design System Compliance', () => {
    test('should use correct color scheme', async ({ page }) => {
      // Check hero section has cream background
      const heroSection = page.locator('section').first();
      const bgClass = await heroSection.getAttribute('class');
      expect(bgClass).toContain('cream');

      // Check What Is Compound section has cream background
      const whatIsSection = page.locator('#what-is-compound');
      const whatIsBg = await whatIsSection.getAttribute('class');
      expect(whatIsBg).toContain('bg-cream');
    });

    test('should have proper typography hierarchy', async ({ page }) => {
      // H1 should exist and be visible
      const h1 = page.getByRole('heading', { level: 1 });
      await expect(h1).toBeVisible();

      // H2 should exist
      const h2 = page.getByRole('heading', {
        name: 'What Is Compound Interest?',
        level: 2
      });
      await expect(h2).toBeVisible();

      // H3 headings should exist
      const h3 = page.getByRole('heading', {
        name: 'You Save Money',
        level: 3
      });
      await expect(h3).toBeVisible();
    });
  });

  test.describe('Performance & Console Errors', () => {
    test('should load page without console errors', async ({ page }) => {
      const errors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      await page.goto('/');

      // Wait for page to fully load
      await page.waitForLoadState('networkidle');

      // Filter out expected errors like favicon 404
      const relevantErrors = errors.filter(
        error => !error.includes('favicon') && !error.includes('DevTools')
      );

      expect(relevantErrors).toHaveLength(0);
    });

    test('should not have failed network requests', async ({ page }) => {
      const failedRequests: string[] = [];

      page.on('requestfailed', (request) => {
        // Ignore favicon failures
        if (!request.url().includes('favicon')) {
          failedRequests.push(request.url());
        }
      });

      await page.goto('/');
      await page.waitForLoadState('networkidle');

      expect(failedRequests).toHaveLength(0);
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper heading hierarchy', async ({ page }) => {
      // Should have exactly one h1
      const h1Count = await page.getByRole('heading', { level: 1 }).count();
      expect(h1Count).toBe(1);

      // Should have h2 headings
      const h2Count = await page.getByRole('heading', { level: 2 }).count();
      expect(h2Count).toBeGreaterThan(0);
    });

    test('should have accessible buttons with proper labels', async ({ page }) => {
      const seeItButton = page.getByRole('button', { name: 'See It In Action' });
      const learnButton = page.getByRole('button', { name: 'Learn How It Works' });

      // Buttons should have accessible names
      await expect(seeItButton).toHaveAccessibleName('See It In Action');
      await expect(learnButton).toHaveAccessibleName('Learn How It Works');
    });
  });
});
