# Compound Interest Calculator

> **Making financial literacy engaging for teenagers through interactive visualizations and storytelling**

An educational web experience that transforms the abstract concept of compound interest into something teenagers can see, feel, and experiment with in real-time.

## Demo

**[View Live Site →](https://shlomsh.github.io/compound-interest-site/)**

## The Problem We're Solving

Most teenagers don't understand compound interest until it's too late—whether missing out on decades of growth or falling into debt traps. Traditional financial education is boring, abstract, and disconnected from their lives.

**This project changes that.**

## Features

### Interactive Calculator
Real-time compound interest calculator with instant visual feedback. Adjust four simple sliders and watch your money grow:
- Starting amount ($0 - $10,000)
- Monthly contribution ($0 - $500)
- Time horizon (1 - 50 years)
- Interest rate (0% - 15%)

### Visual Storytelling
- **Snowball Animation**: Watch money grow like a snowball rolling downhill
- **Growth Chart**: Animated area chart showing compound growth over time with Framer Motion
- **Your Money vs. Interest**: Clear visual breakdown of contributions vs. earnings

### Emotional Impact Features
- **Two Friends Comparison**: See how starting 10 years earlier transforms outcomes
- **Time Machine**: "What if you started X years ago?" reveals
- **Latte Calculator**: Transform daily expenses into long-term wealth

### Mobile-First Design
- Touch-optimized sliders with 32px+ targets
- Responsive charts (300px mobile, 400px desktop)
- Smooth animations that respect `prefers-reduced-motion`
- Works beautifully on phones, tablets, and desktops

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 3.4+](https://tailwindcss.com/) with custom design system
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for all motion design
- **Charts**: [Recharts](https://recharts.org/) with motion integration
- **Language**: TypeScript for type safety
- **Deployment**: GitHub Pages (static export)

## Design Philosophy

**"Serious topic, playful delivery"**

We use a warm color palette (mauve, taupe, rose, peach, cream) and smooth animations to make finance approachable without being childish. Every interaction is designed to feel responsive and rewarding.

### Color System
```
Mauve (#574964)  → Primary text, trust
Taupe (#9F8383)  → Secondary, sophistication
Rose (#FFDAB3)   → Backgrounds, warmth
Peach (#FFDAB3)  → CTAs, growth, optimism
Cream (#FFF9F5)  → Page background, breathing room
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shlomsh/compound-interest-site.git
cd compound-interest-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Available Commands

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test:e2e     # Run Playwright E2E tests
npm run test:e2e:ui  # Open Playwright UI mode
```

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Main single-page application
│   └── globals.css          # Design tokens and base styles
├── components/
│   ├── ui/                  # Design system components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Slider.tsx
│   │   └── AnimatedNumber.tsx
│   ├── Hero.tsx             # Entry with snowball animation
│   ├── Calculator.tsx       # Core interactive calculator
│   ├── GrowthChart.tsx      # Animated area chart
│   └── TwoFriends.tsx       # Comparison storytelling
├── lib/
│   ├── compound.ts          # Calculation utilities
│   └── format.ts            # Currency formatting
└── public/
    └── parent-guide.pdf     # Downloadable conversation starter
```

## Key Design Decisions

1. **Annual Compounding**: Simpler to explain to teens than monthly/daily
2. **7% Default Interest Rate**: Based on S&P 500 historical average
3. **No Analytics**: Privacy-first for youth audience
4. **Instant Updates**: No "Calculate" button—every slider change updates immediately
5. **Accessible by Default**: WCAG 2.1 AA compliant with keyboard navigation

## Documentation

- [CLAUDE.md](CLAUDE.md) - Development guidelines and project overview
- [PRD-compound-interest-site.md](PRD-compound-interest-site.md) - Complete product requirements
- [IMPLEMENTATION-PLAN.md](IMPLEMENTATION-PLAN.md) - Detailed task breakdown
- [PROGRESS.md](PROGRESS.md) - Current implementation status
- [IMPROVEMENTS.md](IMPROVEMENTS.md) - Planned enhancements

## Performance Targets

- Lighthouse Performance > 90
- Lighthouse Accessibility > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- 60fps animations on mid-range mobile devices

## Browser Support

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile Safari (iOS 14+)
- Chrome Android

## Contributing

This is an educational project, but contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing design system (see [CLAUDE.md](CLAUDE.md))
- Maintain mobile-first approach
- Test on real devices when possible
- Respect accessibility requirements
- Keep animations smooth (60fps target)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the need to make financial literacy accessible to teenagers
- Built with modern web technologies to ensure great performance
- Design informed by cognitive load theory and teen UX research

## Contact & Feedback

Have ideas for improvement? Found a bug? Open an issue or reach out!

---

**Built with ❤️ for the next generation of financially-savvy teens**
