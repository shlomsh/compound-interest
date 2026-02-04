# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An interactive educational website teaching teenagers (13-18) about compound interest through real-time visualizations and hands-on exploration. Single-page application with Hebrew (RTL) localization and Israeli Shekel (₪) currency.

## Commands

```bash
npm run dev              # Start dev server at localhost:3000
npm run build            # Production build
npm run lint             # ESLint

# E2E tests (Playwright)
npm run test:e2e         # Run all E2E tests (auto-starts dev server)
npm run test:e2e:headed  # Run with visible browser
npm run test:e2e:ui      # Interactive Playwright UI
npm run test:e2e:debug   # Debug mode
npm run test:e2e:report  # View HTML test report
```

## Architecture

- **Next.js 14** with App Router, single page (`app/page.tsx` renders all sections in order)
- **Tailwind CSS** with custom color palette defined in `tailwind.config.ts`
- **Framer Motion** for all animations (scroll-triggered reveals, counters, transitions)
- **Recharts** for the interactive growth chart
- **No backend** — static site, no API routes, no analytics

### Layout & Localization

The root layout (`app/layout.tsx`) sets `lang="he" dir="rtl"` and loads three Google Fonts via CSS variables:
- `--font-inter` (body text)
- `--font-space-grotesk` (headings)
- `--font-jetbrains-mono` (numbers/data in calculator)

Currency formatting uses `he-IL` locale with ILS currency (`lib/format.ts`).

### Page Structure

`app/page.tsx` assembles sections in this order: Hero → WhatIsCompound → Calculator → TwoFriends → TimeMachine → LatteCalculator → CTASection → Footer, separated by `SectionDivider` components.

### Core Logic

`lib/compound.ts` — All compound interest math. Uses **annual compounding** (not monthly/daily). Key functions:
- `calculateCompoundInterest()` — Returns year-by-year data for charting
- `compareInvestments()` — Difference between two scenarios (used by TwoFriends)
- `dailyExpenseToInvestment()` — Daily expense converted to long-term growth (used by LatteCalculator)

### Key Component: Calculator

`components/Calculator.tsx` — 4 sliders (starting amount, monthly contribution, years, interest rate) that trigger real-time recalculation. No "Calculate" button — every slider change immediately updates the chart and results.

Default values: ₪1,000 starting, ₪100/month, 30 years, 7% rate.

## Design System

Colors in `tailwind.config.ts`:
- `mauve` / `mauve-dark` — Primary text/headers
- `taupe` — Secondary text/borders
- `rose` — Card backgrounds, soft accents
- `peach` — CTAs, highlights, growth indicators
- `cream` — Page background
- `success` — Positive growth
- `coral` — Warnings/attention

## Development Guidelines

- All interactive elements: 48px+ touch targets (mobile-first, primary design target is 320-767px)
- Animations must respect `prefers-reduced-motion`
- WCAG 2.1 AA: minimum 4.5:1 contrast, keyboard navigation, ARIA labels on charts
- Path alias: `@/*` maps to project root

## Testing

E2E tests live in `tests/e2e/` using Playwright. Test config (`playwright.config.ts`) runs against Chrome, Firefox, Safari, Mobile Chrome (Pixel 5), and Mobile Safari (iPhone 12). The dev server starts automatically when running tests.
