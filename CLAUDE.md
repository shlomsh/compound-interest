# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An interactive, visually-driven educational website teaching teenagers (13-18) about compound interest. The goal is to make financial literacy engaging through real-time visualizations, emotional storytelling, and hands-on exploration.

**Design Philosophy**: "Serious topic, playful delivery"

## Common Commands

```bash
# Initial project setup (if not already initialized)
npx create-next-app@14 . --typescript --tailwind --app --src-dir=false
npm install framer-motion recharts @tailwindcss/forms

# Development
npm run dev              # Start dev server at http://localhost:3000
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint

# Testing calculations
npm test                 # Run tests (once implemented)
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS 3.4+ with custom design tokens
- **Animations**: Framer Motion for all motion design
- **Charts**: Recharts with Framer Motion integration
- **State**: React useState/useContext (no external state management)
- **Deployment**: Vercel (static export, no backend)

### Project Structure

```
app/
├── layout.tsx          # Root layout with fonts
├── page.tsx            # Main single-page application
└── globals.css         # Base styles and CSS variables

components/
├── ui/                 # Reusable design system components
│   ├── Button.tsx      # Primary/Secondary/Ghost variants
│   ├── Card.tsx        # Elevated card with hover effects
│   ├── Slider.tsx      # Custom styled range slider
│   └── AnimatedNumber.tsx  # Counting number animation
├── Hero.tsx            # Entry section with snowball animation
├── SnowballAnimation.tsx   # Framer Motion snowball
├── WhatIsCompound.tsx  # Educational explanation section
├── Calculator.tsx      # Main interactive calculator (core feature)
├── GrowthChart.tsx     # Animated area chart visualization
├── TwoFriends.tsx      # Alex vs Jordan comparison story
├── TimeMachine.tsx     # "What if you started X years ago"
└── LatteCalculator.tsx # Daily expense to long-term growth

lib/
├── compound.ts         # Compound interest calculation utilities
└── format.ts           # US currency/number formatting

public/
└── parent-guide.pdf    # Downloadable conversation starter
```

### Key Components

**Calculator.tsx** (Core Feature)
- 4 sliders: Starting amount, monthly contribution, years, interest rate
- Real-time recalculation on any input change
- Integrates GrowthChart and ResultsDisplay
- Shows "Your Money" vs "Interest Earned" split visualization

**GrowthChart.tsx**
- Uses Recharts area chart with Framer Motion
- Animated transitions on data changes
- Gradient fills under curves
- Mobile-responsive with touch-friendly tooltips

**TwoFriends.tsx**
- Side-by-side comparison (Alex starts at 18, Jordan at 28)
- Dramatic reveal animation showing final difference
- Interactive age adjustment sliders

## Design System

### Color Palette
Defined in [tailwind.config.js](tailwind.config.js):
```js
colors: {
  mauve: {
    DEFAULT: '#574964',  // Primary text, headers
    dark: '#3D3347',     // Darker text when needed
  },
  taupe: '#9F8383',      // Secondary text, borders
  rose: '#C8AAAA',       // Backgrounds, cards, soft accents
  peach: '#FFDAB3',      // CTAs, highlights, growth indicators
  cream: '#FFF9F5',      // Page background
  success: '#6B9080',    // Positive growth
  coral: '#E8998D',      // Warnings, attention
}
```

### Typography
- **Headings**: Space Grotesk or Plus Jakarta Sans (bold, modern)
- **Body**: Inter or DM Sans (clean, readable, 16-18px)
- **Numbers/Data**: JetBrains Mono or Space Mono (monospace for calculators)

### Motion Principles
- Growth animations: Ease-out curves (fast start, slow end)
- Number counters: Rolling/counting up effect
- Transitions: 300-500ms with spring physics
- Implement `useReducedMotion` fallbacks for accessibility

## Critical Technical Decisions

1. **Compounding Frequency**: Annual (not monthly/daily)
   - Simpler to explain to teenagers
   - Cleaner math visualization

2. **Default Interest Rate**: 7%
   - Based on S&P 500 historical average
   - Realistic expectation setting

3. **Default Calculator Values**:
   ```js
   startingAmount: 1000      // $1,000
   monthlyContribution: 100  // $100
   years: 30
   interestRate: 7           // 7%
   ```

4. **Currency Format**: US English only ($1,234.56)
   - Simplified scope, USD-focused audience

5. **No Analytics**: Privacy-first for teen audience

6. **CTA**: Parent conversation guide (PDF download)
   - Actionable next step for teenagers

## Calculation Formula

Annual compound interest with monthly contributions:

```typescript
// lib/compound.ts
function calculateCompoundInterest(
  principal: number,
  monthlyContribution: number,
  years: number,
  annualRate: number
): { yearData: YearData[], totalValue: number, totalContributed: number, interestEarned: number }
```

Formula accounts for:
- Initial principal
- Monthly contributions (converted to annual total)
- Annual compounding (not monthly)
- Return year-by-year data for charting

## Development Guidelines

### Component Creation
- All interactive elements must have 48px+ touch targets (mobile-first)
- Every slider change triggers immediate visual update (no "Calculate" button)
- Use Framer Motion for all animations (consistency)
- Implement loading states for chart transitions

### Accessibility Requirements
- WCAG 2.1 AA compliance (minimum 4.5:1 contrast)
- All charts need screen reader descriptions
- Full keyboard navigation support
- Respect `prefers-reduced-motion` media query

### Mobile Responsiveness
Breakpoints:
- Mobile: 320px - 767px (primary design target)
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large: 1440px+ (max-width container)

### Performance Targets
- Lighthouse Performance > 90
- Lighthouse Accessibility > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s

## Implementation Phases

Refer to [IMPLEMENTATION-PLAN.md](IMPLEMENTATION-PLAN.md) for detailed task breakdown. High-level phases:

1. **Phase 1**: Project setup + design system (foundation)
2. **Phase 2**: Hero section + introduction (hook visitors)
3. **Phase 3**: Interactive calculator (core feature)
4. **Phase 4**: Comparison tools (emotional impact)
5. **Phase 5**: Page assembly (cohesive flow)
6. **Phase 6**: Polish + optimization (production-ready)

## User Flow

1. **HOOK** (0-5s): Animated hero captures attention
2. **EDUCATE** (5-30s): Simple explanation of compound interest
3. **EXPLORE** (1-5min): Interactive calculator experimentation
4. **FEEL** (emotional): Two Friends comparison, Time Machine reveals
5. **ACT** (CTA): Download parent conversation guide

## Testing Focus Areas

- **Calculation Accuracy**: Verify compound interest formulas match expected outputs
- **Real-time Updates**: Every slider move must update chart without lag
- **Animation Performance**: Target 60fps, test on mid-range mobile devices
- **Touch Interactions**: Test all sliders and buttons on iOS Safari and Android Chrome
- **Cross-browser**: Chrome, Safari, Firefox support

## Current Implementation Status

**Completed Phases** (as of 2026-02-03):
- ✅ **Phase 1**: Project setup + design system
- ✅ **Phase 2**: Hero section + introduction
- ✅ **Phase 3**: Interactive calculator (core feature)

**Current State**:
- Fully functional compound interest calculator with real-time updates
- Mobile-optimized with enhanced touch targets (32px on mobile)
- Responsive chart heights (300px mobile, 400px desktop)
- Beautiful snowball animation and scroll-triggered reveals
- Educational flow from hero → explanation → calculator

**Next Steps**: See [IMPROVEMENTS.md](IMPROVEMENTS.md) for detailed enhancement roadmap

## Mobile Optimization Details

**Slider Touch Targets** (components/ui/Slider.tsx):
- Desktop: 28px thumb size
- Mobile: 32px thumb size (meets 48px+ touch target with padding)
- Active state feedback with scale transforms
- Tap highlight removal for cleaner mobile UX

**Responsive Spacing**:
- Calculator cards: p-5 mobile, p-8 desktop
- Slider spacing: mb-6 mobile, mb-8 desktop
- Results cards: p-4 mobile, p-6 desktop
- Breakdown grid: 2 columns on mobile, maintains usability

**Chart Optimization**:
- Dynamic height based on viewport (300px/400px)
- Mobile-specific legend below chart
- Touch-friendly tooltips
- Optimized data points for performance

## Key Files to Review

- [PRD-compound-interest-site.md](PRD-compound-interest-site.md) - Complete product requirements and design system
- [IMPLEMENTATION-PLAN.md](IMPLEMENTATION-PLAN.md) - Detailed task breakdown and file creation order
- [PROGRESS.md](PROGRESS.md) - Current progress and recently completed work
- [IMPROVEMENTS.md](IMPROVEMENTS.md) - Planned enhancements and polish (Phase 4+)
