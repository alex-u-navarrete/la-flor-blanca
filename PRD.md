# 🍽️ PRD: Salvadoran Restaurant Website

## 🗭 Overview

We're building a production-ready website for a small, family-owned Salvadoran restaurant based in Los Angeles. The website will serve as both a digital storefront and an ordering platform that integrates directly with Square for POS management and DoorDash Drive for on-demand delivery. It must be responsive, fast, and optimized for mobile SEO.

The project will be executed in structured feature branches inside Cursor, using modern dev workflows (GitHub, Vercel previews, API integrations). Code quality, maintainability, and readability will be enforced throughout.

---

## 🌟 Engineering Quality Standards

- All components must be cleanly separated and reside in their own folders/files (e.g., `/components/MenuItemCard.jsx`)
- No single file should exceed ~200 lines unless absolutely necessary
- Code must follow best practices:
  - Use semantic HTML and accessible markup
  - Break down large components into small, reusable ones
  - Use consistent naming conventions and formatting
  - Limit inline styles; use Tailwind utility classes or reusable classes
- Use TypeScript for interfaces when possible (optional for v1, but encouraged)
- Every Cursor agent request must clarify: "Write readable code, with small, well-named components. Avoid large blocks."
- Each branch should end with a PR that includes a code cleanup and file structure sanity check

---

## 🌟 Core Goals

- Real-time dynamic menu synced with Square POS Catalog API
- Online ordering with option for Pickup or Delivery
- Secure, embedded payments via Square Web Payments SDK
- White-label delivery fulfillment via DoorDash Drive API
- SEO-optimized, mobile-first design with professional food photography

---

## 🧱 Tech Stack

- **Frontend:** React (via Cursor)
- **Styling:** TailwindCSS
- **Hosting:** Vercel
- **State Mgmt:** Local React state (no Redux for now)
- **APIs:**
  - Square Catalog API
  - Square Orders API
  - Square Payments API
  - DoorDash Drive API (quote + create delivery)
- **Auth:** Developer tokens / OAuth (Square), JWT (DoorDash)
- **No custom database needed in v1**

---

## 🔀 Git Branching Strategy

- `main`: Production-ready code
- `feat/static-ui`: Basic layout, About, Contact, Menu (static)
- `feat/menu-integration`: Square Catalog API integration
- `feat/checkout-flow`: Cart, order logic, payment
- `feat/doordash-integration`: Delivery quote + dispatch
- `feat/admin-notifications`: Notify staff about new orders
- `feat/seo-social`: Schema, OpenGraph, review integration

All features will be developed in dedicated branches. Cursor will help create PRs to merge into `main` once features are verified in Vercel preview.

---

## 🔧 Key Features

### 1. Homepage
- Restaurant intro, CTA buttons (Order Now, Call Now)
- Featured dish carousel or video
- Embedded Google Map

### 2. Menu Page
- Dynamically loaded from Square Catalog API
- Show images, name, description, price
- Organized by categories (e.g., Pupusas, Antojitos, etc.)

### 3. Cart + Checkout
- Add/remove items
- Select Pickup or Delivery
- Collect customer info
- Show total with tax + delivery (if sel
