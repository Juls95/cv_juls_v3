# Juls.Terminal - Advanced Data Portfolio

Welcome to **Juls.Terminal**, a concept portfolio designed for high-frequency trading of ideas and skills. This project reimagines the traditional CV as a financial trading terminal, providing a real-time, data-driven window into the career of a Lead Data Expert & Software Engineer.

![Project Preview](https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop) 
*(Note: Replace with actual screenshot of your application)*

> **"Made in Latam for the world."** 🇲🇽 🇨🇴

## 🚀 Project Overview

This portfolio leverages the visual language of stock market dashboards (Bloomberg Terminal, TradingView) to present professional experience. Instead of a static PDF, users interact with "assets" (skills), view "market performance" (career growth), and read "analyst reports" (case studies).

**Key Design Principles:**
- **Theme:** Dark Mode, Cyberpunk/Financial aesthetics.
- **Interaction:** Real-time feedback, pulsing indicators, and glassmorphism.
- **Data-Driven:** Every UI element represents a datapoint from over 9 years of experience.

## 🛠️ Technology Stack

This application is built with a modern, high-performance stack:

- **Core Framework:** [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for fluid transitions and modal effects.
- **Data Visualization:** [Recharts](https://recharts.org/) for the main career performance chart.
- **Icons:** [Lucide React](https://lucide.dev/) for consistent, lightweight iconography.

## 📦 Features & Component Architecture

The application is structured into a single-page dashboard containing several specialized modules:

### 1. Market Performance (Main Chart)
- **Visuals:** Switchable Area Chart and Candlestick Chart.
- **Data:** Visualizes career timeline vs. "Market Value" (Role seniority/Impact).
- **Interactive:** Hover tooltips showing stack usage per role and company logos (Clearbit API).
- **Markers:** "Dividend" markers representing major industries entered.

### 2. Skills Market Depth
- **Visuals:** Order book style list.
- **Logic:** Skills are ranked by "Volume" (Years of Experience) and "Depth" (Competency Level).
- **Assets:** SQL, Python, PowerBI, RPA, etc.

### 3. Experience Feed
- **Visuals:** Scrolling news ticker / social feed.
- **Content:** Chronological history of roles, companies, and high-impact bullets (e.g., "+20% Efficiency").

### 4. Analyst Reports (Gallery)
- **Visuals:** Card grid with hover effects.
- **Function:** Opens "Reports" (Deep dives/Case studies) in an embedded modal view. Links to external PowerBI/Fabric dashboards.

### 5. Fundamentals (Bio & Stats)
- **Content:** Education, Certifications, Contact Links.
- **Footer:** Quick access to GitHub, LinkedIn, and Email.

## 💻 Installation & Usage

To run this terminal locally on your machine:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Juls95/cv_juls_v3.git
    cd cv_juls_v3
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Access the terminal at `http://localhost:5173`.

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # React Components
│   │   ├── Dashboard.tsx    # Main layout grid
│   │   ├── StockChart.tsx   # Recharts visualization
│   │   ├── SkillsDepth.tsx  # Skill list component
│   │   ├── InfoModal.tsx    # Contextual help popups
│   │   └── ...
│   ├── data.ts          # Centralized data store (CV content)
│   ├── App.tsx          # Root component
│   └── index.css        # Tailwind directives & global styles
├── tailwind.config.js   # Custom color palette and theme config
└── ...
```

## 👨‍💻 Author

**Julian Ramirez**
*Lead Data Analyst & Software Engineer*

---
*This portfolio is an open-source demonstration of creative frontend engineering.*
