# Implementation Plan - Compound Interest Educational Site

## Project Overview
Build an interactive, visually-driven educational website teaching teenagers about compound interest using Next.js, Tailwind CSS, and Framer Motion.

**GitHub Repository**: https://github.com/shlomsh/compound-interest-site
**All Issues**: https://github.com/shlomsh/compound-interest-site/issues

---

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CTA Action | Parent conversation guide (PDF) | Actionable next step for teens |
| Offline Support | Standard web app | Simpler, no PWA complexity |
| Compounding Frequency | Annual | Easier to explain, cleaner math |
| Character Visuals | Simple icons/avatars | Clean, no custom illustration needed |
| Default Interest Rate | 7% | S&P 500 historical average |
| Analytics | None | Privacy-first for teen audience |
| Number Format | US English ($1,234.56) | USD only, simplified |

---

## Task Breakdown

### Phase 1: Project Setup & Design System
**Goal**: Establish foundation with all design tokens and reusable components

| # | Task | Priority | Issue |
|---|------|----------|-------|
| 1.1 | Initialize Next.js 14 project with App Router | High | [#1](https://github.com/shlomsh/compound-interest-site/issues/1) |
| 1.2 | Install dependencies (Tailwind, Framer Motion, Recharts) | High | [#2](https://github.com/shlomsh/compound-interest-site/issues/2) |
| 1.3 | Configure Tailwind with custom color palette | High | [#3](https://github.com/shlomsh/compound-interest-site/issues/3) |
| 1.4 | Set up Google Fonts (Space Grotesk, Inter, JetBrains Mono) | High | [#4](https://github.com/shlomsh/compound-interest-site/issues/4) |
| 1.5 | Create `globals.css` with base styles and CSS variables | High | [#5](https://github.com/shlomsh/compound-interest-site/issues/5) |
| 1.6 | Create `lib/compound.ts` - calculation utilities (annual compounding) | High | [#6](https://github.com/shlomsh/compound-interest-site/issues/6) |
| 1.6b | Create `lib/format.ts` - US currency/number formatting | High | [#7](https://github.com/shlomsh/compound-interest-site/issues/7) |
| 1.7 | Create `components/ui/Button.tsx` | Medium | [#8](https://github.com/shlomsh/compound-interest-site/issues/8) |
| 1.8 | Create `components/ui/Card.tsx` | Medium | [#9](https://github.com/shlomsh/compound-interest-site/issues/9) |
| 1.9 | Create `components/ui/Slider.tsx` (custom styled) | High | [#10](https://github.com/shlomsh/compound-interest-site/issues/10) |
| 1.10 | Create `components/ui/AnimatedNumber.tsx` | High | [#11](https://github.com/shlomsh/compound-interest-site/issues/11) |

**Deliverable**: Running dev server with design system components

---

### Phase 2: Hero & Introduction
**Goal**: Create engaging entry point that hooks visitors

| # | Task | Priority | Issue |
|---|------|----------|-------|
| 2.1 | Create `components/Hero.tsx` - layout and content | High | [#12](https://github.com/shlomsh/compound-interest-site/issues/12) |
| 2.2 | Create `components/SnowballAnimation.tsx` - Framer Motion | High | [#13](https://github.com/shlomsh/compound-interest-site/issues/13) |
| 2.3 | Add scroll-triggered text reveal animations | Medium | [#14](https://github.com/shlomsh/compound-interest-site/issues/14) |
| 2.4 | Create `components/WhatIsCompound.tsx` - explanation section | High | [#15](https://github.com/shlomsh/compound-interest-site/issues/15) |
| 2.5 | Add simple animated diagram (linear vs exponential) | Medium | [#16](https://github.com/shlomsh/compound-interest-site/issues/16) |
| 2.6 | Mobile responsive adjustments for hero | High | [#17](https://github.com/shlomsh/compound-interest-site/issues/17) |

**Deliverable**: Animated hero section with explanation

---

### Phase 3: Interactive Calculator (Core Feature)
**Goal**: Build the main interactive tool with real-time visualization

| # | Task | Priority | Issue |
|---|------|----------|-------|
| 3.1 | Create `components/Calculator.tsx` - container & state | High | [#18](https://github.com/shlomsh/compound-interest-site/issues/18) |
| 3.2 | Implement starting amount slider ($0-$10,000) | High | [#19](https://github.com/shlomsh/compound-interest-site/issues/19) |
| 3.3 | Implement monthly contribution slider ($0-$500) | High | [#20](https://github.com/shlomsh/compound-interest-site/issues/20) |
| 3.4 | Implement years slider (1-50) | High | [#21](https://github.com/shlomsh/compound-interest-site/issues/21) |
| 3.5 | Implement interest rate slider (1%-12%) | High | [#22](https://github.com/shlomsh/compound-interest-site/issues/22) |
| 3.6 | Create `components/GrowthChart.tsx` - Recharts area chart | High | [#23](https://github.com/shlomsh/compound-interest-site/issues/23) |
| 3.7 | Add chart animation on data change | Medium | [#24](https://github.com/shlomsh/compound-interest-site/issues/24) |
| 3.8 | Create `components/ResultsDisplay.tsx` - totals breakdown | High | [#25](https://github.com/shlomsh/compound-interest-site/issues/25) |
| 3.9 | Style "Your Money" vs "Interest Earned" split view | Medium | [#26](https://github.com/shlomsh/compound-interest-site/issues/26) |
| 3.11 | Mobile layout for calculator | High | [#27](https://github.com/shlomsh/compound-interest-site/issues/27) |

**Deliverable**: Fully functional compound interest calculator

---

### Phase 4: Comparison Tools
**Goal**: Create emotional impact through comparisons

| # | Task | Priority | Issue |
|---|------|----------|-------|
| 4.1 | Create `components/TwoFriends.tsx` - Alex vs Jordan story | High | [#28](https://github.com/shlomsh/compound-interest-site/issues/28) |
| 4.1b | Create simple avatar icons for Alex & Jordan | Medium | [#29](https://github.com/shlomsh/compound-interest-site/issues/29) |
| 4.2 | Create `components/DualChart.tsx` - side-by-side visualization | High | [#30](https://github.com/shlomsh/compound-interest-site/issues/30) |
| 4.3 | Add dramatic reveal animation for difference | Medium | [#31](https://github.com/shlomsh/compound-interest-site/issues/31) |
| 4.4 | Add interactive age adjustment sliders | Medium | [#32](https://github.com/shlomsh/compound-interest-site/issues/32) |
| 4.5 | Create `components/TimeMachine.tsx` - "what if" slider | High | [#33](https://github.com/shlomsh/compound-interest-site/issues/33) |
| 4.6 | Add emotional number callout animations | Medium | [#34](https://github.com/shlomsh/compound-interest-site/issues/34) |
| 4.7 | Create `components/LatteCalculator.tsx` - daily expense tool | Medium | [#35](https://github.com/shlomsh/compound-interest-site/issues/35) |
| 4.9 | Mobile responsive for all comparison tools | High | [#36](https://github.com/shlomsh/compound-interest-site/issues/36) |

**Deliverable**: Three comparison/visualization tools

---

### Phase 5: Page Assembly & Flow
**Goal**: Combine all sections into cohesive scrolling experience

| # | Task | Priority | Issue |
|---|------|----------|-------|
| 5.1 | Assemble all sections in `app/page.tsx` | High | [#37](https://github.com/shlomsh/compound-interest-site/issues/37) |
| 5.2 | Add scroll-triggered section animations | Medium | [#38](https://github.com/shlomsh/compound-interest-site/issues/38) |
| 5.3 | Create section transitions/dividers | Low | [#39](https://github.com/shlomsh/compound-interest-site/issues/39) |
| 5.4 | Add "Start Now" CTA section | Medium | [#40](https://github.com/shlomsh/compound-interest-site/issues/40) |
| 5.5 | Create parent conversation guide PDF content | Medium | [#41](https://github.com/shlomsh/compound-interest-site/issues/41) |
| 5.6 | Implement PDF download functionality | Medium | [#42](https://github.com/shlomsh/compound-interest-site/issues/42) |
| 5.7 | Create simple footer with resources | Low | [#43](https://github.com/shlomsh/compound-interest-site/issues/43) |
| 5.8 | Implement smooth scroll navigation | Low | [#44](https://github.com/shlomsh/compound-interest-site/issues/44) |

**Deliverable**: Complete single-page application with downloadable guide

---

### Phase 6: Polish & Optimization
**Goal**: Refine experience and ensure quality

| # | Task | Priority | Issue |
|---|------|----------|-------|
| 6.1 | Add micro-interactions (hover states, button feedback) | Medium | [#45](https://github.com/shlomsh/compound-interest-site/issues/45) |
| 6.2 | Implement reduced motion media query support | Medium | [#46](https://github.com/shlomsh/compound-interest-site/issues/46) |
| 6.3 | Add aria-labels for all interactive elements | High | [#47](https://github.com/shlomsh/compound-interest-site/issues/47) |
| 6.4 | Add screen reader descriptions for charts | Medium | [#48](https://github.com/shlomsh/compound-interest-site/issues/48) |
| 6.5 | Test keyboard navigation throughout | High | [#49](https://github.com/shlomsh/compound-interest-site/issues/49) |
| 6.6 | Cross-browser testing (Chrome, Safari, Firefox) | High | [#50](https://github.com/shlomsh/compound-interest-site/issues/50) |
| 6.7 | Mobile device testing (iOS Safari, Android Chrome) | High | [#51](https://github.com/shlomsh/compound-interest-site/issues/51) |
| 6.8 | Performance optimization (lazy loading, code splitting) | Medium | [#52](https://github.com/shlomsh/compound-interest-site/issues/52) |
| 6.9 | Run Lighthouse audit, fix issues | High | [#53](https://github.com/shlomsh/compound-interest-site/issues/53) |
| 6.10 | Final build test and deployment prep | High | [#54](https://github.com/shlomsh/compound-interest-site/issues/54) |

**Deliverable**: Production-ready application

---

## File Creation Order

```
1. package.json
2. tailwind.config.js
3. app/globals.css
4. app/layout.tsx
5. lib/compound.ts (annual compounding formula)
6. lib/format.ts (US currency formatting)
7. components/ui/AnimatedNumber.tsx
8. components/ui/Slider.tsx
9. components/ui/Button.tsx
10. components/ui/Card.tsx
11. components/ui/Avatar.tsx (simple icon avatars)
12. components/SnowballAnimation.tsx
13. components/Hero.tsx
14. components/WhatIsCompound.tsx
15. components/GrowthChart.tsx
16. components/Calculator.tsx (default: 7% rate)
17. components/DualChart.tsx
18. components/TwoFriends.tsx
19. components/TimeMachine.tsx
20. components/LatteCalculator.tsx
21. components/CTASection.tsx (with PDF download)
22. public/parent-guide.pdf
23. app/page.tsx (final assembly)
```

---

## Dependencies to Install

```bash
# Core
npx create-next-app@14 compound-interest-site --typescript --tailwind --app --src-dir=false

# Additional
npm install framer-motion recharts @tailwindcss/forms
```

---

## Tailwind Config Colors

```js
colors: {
  mauve: {
    DEFAULT: '#574964',
    dark: '#3D3347',
  },
  taupe: '#9F8383',
  rose: '#C8AAAA',
  peach: '#FFDAB3',
  cream: '#FFF9F5',
  success: '#6B9080',
  coral: '#E8998D',
}
```

---

## Key Milestones

| Milestone | Tasks | Target |
|-----------|-------|--------|
| **M1: Foundation** | Phase 1 complete | Day 1 |
| **M2: Hero Live** | Phase 2 complete | Day 2 |
| **M3: Calculator Works** | Phase 3 complete | Day 3-4 |
| **M4: Comparisons Done** | Phase 4 complete | Day 5-6 |
| **M5: Full Site** | Phase 5 complete | Day 7 |
| **M6: Ship It** | Phase 6 complete | Day 8 |

---

## Testing Checklist

### Functional
- [ ] Calculator produces correct compound interest values
- [ ] All sliders update visualization in real-time
- [ ] Two Friends comparison shows accurate difference
- [ ] Time Machine calculates correct "what if" scenarios
- [ ] Latte Calculator converts daily to long-term correctly

### Visual
- [ ] Colors match palette specification
- [ ] Typography hierarchy is clear
- [ ] Animations are smooth (60fps)
- [ ] Charts render correctly at all sizes
- [ ] No layout shifts during interactions

### Responsive
- [ ] Mobile (375px) - all features work
- [ ] Tablet (768px) - layout adapts properly
- [ ] Desktop (1024px+) - full experience
- [ ] Touch interactions work on mobile

### Accessibility
- [ ] Color contrast passes WCAG AA
- [ ] All interactive elements keyboard accessible
- [ ] Screen reader can navigate and understand content
- [ ] Reduced motion preference respected

---

## Risk & Mitigation

| Risk | Mitigation |
|------|------------|
| Chart performance on mobile | Use `recharts` with limited data points, test early |
| Complex animations lag | Implement `useReducedMotion` fallbacks |
| Touch slider UX issues | Large touch targets (48px+), test on real devices |
| Calculation accuracy | Unit tests for `compound.ts` functions |
| PDF download fails | Host PDF in `/public`, use native `<a download>` |
| Color contrast issues | Run WCAG checks early, adjust taupe (#9F8383) if needed |

---

## Calculator Defaults

```
Starting Amount: $1,000
Monthly Contribution: $100
Years: 30
Interest Rate: 7% (S&P 500 historical average)
Compounding: Annual
```

---

## Parent Conversation Guide (PDF Content Outline)

1. **Why Start Now?** - The power of time in investing
2. **Simple Steps to Begin** - Custodial accounts, Roth IRAs for teens
3. **Conversation Starters** - Questions to ask parents
4. **Next Steps Together** - Action items for parent-teen discussion
5. **Resources** - Links to learn more (Investopedia, Khan Academy, etc.)

*Note: PDF will be a simple 1-2 page document, created as static asset*

---

## Next Steps

1. **Approve this plan**
2. **Start Phase 1**: Initialize project and design system
3. **Review after each phase** before proceeding
