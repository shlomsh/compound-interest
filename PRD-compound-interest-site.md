# Compound Interest Educational Site - PRD & Design System

## Overview
An interactive, visually-driven educational website teaching teenagers about compound interest and the importance of early investing.

---

## Product Requirements Document (PRD)

### Problem Statement
Teenagers lack financial literacy, particularly around compound interest. Traditional explanations are abstract, boring, and fail to create emotional connection with long-term financial benefits.

### Target Audience
- **Primary**: Teenagers (13-18 years old)
- **Secondary**: Young adults (18-25), Parents, Teachers

### Core Learning Objectives
1. Understand what compound interest is (money earns money)
2. Visualize exponential growth vs linear growth
3. Feel the emotional impact of "time in market"
4. Internalize "start early" through interactive exploration

### Key Features

#### 1. Hero Section - "The Snowball Effect"
- Animated snowball rolling downhill, growing exponentially
- Tagline: "Your money can grow itself"
- Immediate hook with motion and scale transformation

#### 2. Interactive Compound Calculator
- **Inputs** (slider-based, touch-friendly):
  - Starting amount ($0 - $10,000)
  - Monthly contribution ($0 - $500)
  - Years (1 - 50)
  - Interest rate (1% - 12%)
- **Real-time visualization**:
  - Growing animated bar/mountain
  - Split view: "Your money" vs "Interest earned"
  - Running counter animation

#### 3. "Two Friends" Comparison Tool
- **The Story**: Alex starts at 18, Jordan starts at 28
- Side-by-side animated growth charts
- Same monthly contribution, same rate
- Dramatic reveal of final difference
- Emotional impact: "10 years = X dollars difference"

#### 4. Time Machine Slider
- Single dramatic slider: "What if you started X years ago?"
- Shows potential current wealth
- Creates FOMO/motivation without guilt

#### 5. Daily Latte Calculator
- Input: small daily expense ($3-$15)
- Output: 40-year growth visualization
- "Your daily coffee could become a house"

#### 6. Milestone Markers
- Visual timeline showing:
  - When investment doubles
  - When interest > contributions
  - Projected milestones ($10K, $100K, $1M)

---

## Visual Language & Design System

### Design Philosophy
**"Serious topic, playful delivery"**
- Make money feel tangible and growing
- Use motion to show growth over time
- Create emotional connection through scale

### Color Palette

Based on: https://colorhunt.co/palette/5749649f8383c8aaaaffdab3

```
Core Palette:
- Deep Mauve:    #574964 (primary text, headers, trust)
- Warm Taupe:    #9F8383 (secondary text, borders, subtle elements)
- Dusty Rose:    #C8AAAA (backgrounds, cards, soft accents)
- Soft Peach:    #FFDAB3 (highlights, CTAs, growth indicators)

Extended Colors:
- White:         #FFFFFF (card backgrounds, contrast)
- Off-White:     #FFF9F5 (page background, warm tint)
- Dark Mauve:    #3D3347 (darker text when needed)
- Success Green: #6B9080 (positive growth, complements palette)
- Alert Coral:   #E8998D (warnings, attention - palette adjacent)

Usage Guidelines:
- #574964: Headers, primary buttons, important text
- #9F8383: Body text, secondary elements, chart lines
- #C8AAAA: Card backgrounds, dividers, muted UI
- #FFDAB3: CTAs, highlights, "money growing" visualizations
```

**Palette Mood**: Warm, approachable, vintage-modern - less "finance bro", more "friendly mentor"

### Typography

```
Headings: "Space Grotesk" or "Plus Jakarta Sans"
- Bold, modern, slightly playful
- Large sizes for impact (48-72px heroes)

Body: "Inter" or "DM Sans"
- Clean, highly readable
- 16-18px base size

Numbers/Data: "JetBrains Mono" or "Space Mono"
- Monospace for counters and calculations
- Creates "calculator" feel
```

### Visual Elements

#### Iconography Style
- Rounded, friendly icons
- 2-3px stroke weight
- Consistent 24px/32px sizes
- Animated on interaction

#### Illustration Style
- Flat design with subtle gradients
- Geometric shapes representing abstract concepts
- Characters: Simple, diverse, relatable teens
- Money represented as seeds/plants/snowballs (not literal bills)

#### Data Visualization
- Smooth animated line charts
- Gradient fills under curves
- Particle effects for "money growing"
- Avoid pie charts (confusing)

#### Motion Principles
- **Growth animations**: Ease-out curves (fast start, slow end)
- **Number counters**: Rolling/counting up effect
- **Transitions**: 300-500ms, spring physics
- **Micro-interactions**: Hover states, button feedback
- **Scroll-triggered**: Reveal as user progresses

### Component Library

#### Buttons
```
Primary: Soft Peach background (#FFDAB3), Deep Mauve text, rounded-full
Secondary: Deep Mauve outline, Deep Mauve text
Ghost: Transparent, underline on hover
```

#### Cards
```
- White background
- Subtle shadow (0 4px 6px rgba(87,73,100,0.08))
- 16-24px padding
- 12-16px border radius
- Hover: lift effect + shadow increase
```

#### Sliders (Key Interactive Element)
```
- Large thumb (48px touch target)
- Gradient track (Dusty Rose to Soft Peach)
- Real-time value tooltip
- Haptic feedback consideration
```

#### Input Fields
```
- Large, touch-friendly (min 48px height)
- Clear labels above
- Prefix/suffix for currency ($)
- Animated focus states
```

---

## UX Design & Information Architecture

### Site Structure

```
/
├── Hero (Snowball animation + headline)
├── "What is Compound Interest?" (Simple explanation + visual)
├── Interactive Calculator (Main tool)
├── Two Friends Comparison
├── Time Machine
├── Daily Latte Calculator
├── "Start Now" CTA
└── Resources/Learn More
```

### User Flow

```
1. HOOK (0-5 seconds)
   └── Animated hero captures attention

2. EDUCATE (5-30 seconds)
   └── Simple "what is it" explanation

3. EXPLORE (1-5 minutes)
   └── Play with calculator
   └── See personal scenarios

4. FEEL (emotional moment)
   └── Two Friends comparison
   └── Time Machine reveals

5. ACT (CTA)
   └── "Start with $X today"
   └── Resources to begin
```

### Mobile-First Approach
- All interactions work with touch
- Vertical scroll for story progression
- Swipe gestures for comparisons
- Thumb-zone aware button placement

### Accessibility
- WCAG 2.1 AA compliance
- Color contrast minimum 4.5:1
- Screen reader support for charts
- Keyboard navigation
- Reduced motion option

### Key UX Patterns

#### 1. Progressive Disclosure
- Start simple, reveal complexity
- "Advanced options" collapsed by default
- Tooltips explain terms on hover/tap

#### 2. Immediate Feedback
- Every slider move = instant visual update
- No "calculate" buttons
- Real-time number animations

#### 3. Emotional Design
- Celebration animations at milestones
- Encouraging microcopy
- No shame/guilt for late starters

#### 4. Gamification Light
- Achievement badges for exploration
- "What if" scenarios to unlock
- Share your projection feature

### Responsive Breakpoints
```
Mobile: 320px - 767px (primary)
Tablet: 768px - 1023px
Desktop: 1024px+
Large: 1440px+ (max-width container)
```

---

## Technical Stack

```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS 3.4+
Animations: Framer Motion
Charts: Recharts with Framer Motion integration
State: React useState/useContext (simple)
Deployment: Vercel (static export)
Backend: None (fully static, client-side calculations)
```

### Key Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^10.16.0",
  "recharts": "^2.10.0",
  "@tailwindcss/forms": "^0.5.0"
}
```

---

## Success Metrics
- Time on site > 3 minutes
- Calculator interactions > 5 per session
- Scroll depth > 80%
- Share rate > 5%
- Return visitors > 15%

---

## Implementation Plan

### Phase 1: Project Setup & Design System
**Files to create:**
- `package.json` - Dependencies
- `tailwind.config.js` - Custom theme (colors, fonts, spacing)
- `app/globals.css` - Base styles, font imports
- `app/layout.tsx` - Root layout
- `app/page.tsx` - Main page shell
- `components/ui/` - Reusable components (Button, Slider, Card)
- `lib/compound.ts` - Compound interest calculation utilities

**Design tokens to implement:**
- Color palette (mauve, taupe, rose, peach)
- Typography scale (Space Grotesk, Inter, JetBrains Mono)
- Spacing and border radius system
- Shadow system

### Phase 2: Hero & Introduction Section
**Files to create:**
- `components/Hero.tsx` - Animated hero with snowball
- `components/SnowballAnimation.tsx` - Framer Motion snowball
- `components/WhatIsCompound.tsx` - Simple explanation section

**Key animations:**
- Snowball growing and rolling
- Text reveal on scroll
- Floating money/growth particles

### Phase 3: Interactive Calculator (Core Feature)
**Files to create:**
- `components/Calculator.tsx` - Main calculator container
- `components/CalcSlider.tsx` - Custom styled slider
- `components/GrowthChart.tsx` - Animated area chart
- `components/AnimatedNumber.tsx` - Counting number animation
- `components/ResultsDisplay.tsx` - Show principal vs interest

**Functionality:**
- Real-time recalculation on any input change
- Smooth chart transitions
- "Your money" vs "Interest earned" split visualization

### Phase 4: Comparison Tools
**Files to create:**
- `components/TwoFriends.tsx` - Alex vs Jordan comparison
- `components/DualChart.tsx` - Side-by-side growth charts
- `components/TimeMachine.tsx` - "What if you started X years ago"
- `components/LatteCalculator.tsx` - Daily expense converter

**Key UX:**
- Dramatic reveal animations for difference
- Emotional number callouts
- Interactive "try different ages" sliders

### Phase 5: Polish & Final Assembly
**Files to modify:**
- All components - Add micro-interactions
- `app/page.tsx` - Assemble full page flow
- Add scroll-triggered animations
- Mobile responsive testing
- Accessibility pass (aria labels, keyboard nav)

---

## File Structure

```
compound-interest-site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Slider.tsx
│   │   └── AnimatedNumber.tsx
│   ├── Hero.tsx
│   ├── SnowballAnimation.tsx
│   ├── WhatIsCompound.tsx
│   ├── Calculator.tsx
│   ├── GrowthChart.tsx
│   ├── TwoFriends.tsx
│   ├── TimeMachine.tsx
│   └── LatteCalculator.tsx
├── lib/
│   └── compound.ts
├── public/
│   └── fonts/
├── tailwind.config.js
├── package.json
└── next.config.js
```

---

## Verification Plan

1. **Run dev server**: `npm run dev`
2. **Test calculator**: Move all sliders, verify real-time updates
3. **Test animations**: Scroll through page, verify smooth reveals
4. **Test mobile**: Chrome DevTools responsive mode (375px, 768px)
5. **Test accessibility**: Tab through all interactive elements
6. **Build test**: `npm run build` - ensure no errors
7. **Lighthouse audit**: Performance > 90, Accessibility > 90
