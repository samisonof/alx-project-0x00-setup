# ALX Project: 0x00 - Setup and Component Design in Next.js

## 📁 Directory: `alx-project-0x00`

This project is focused on building a basic layout using **Next.js**, **TypeScript**, and **Tailwind CSS**. The goal is to understand the fundamentals of creating reusable and dynamic components such as **Pill** and **Button**, applying TypeScript interfaces to enforce prop types, and structuring a modern front-end app.

---

## ✅ Objectives

- Scaffold a Next.js + TypeScript + Tailwind CSS project
- Create and use reusable React components
- Pass and validate props using TypeScript interfaces
- Render components dynamically
- Practice component reusability and styling via Tailwind

---

## 📦 Tasks Overview

### Task 0: Project Setup

- Initialized a new Next.js project
- Configured TypeScript support
- Integrated Tailwind CSS for styling
- Setup directory structure: `components/`, `interfaces/`, `public/assets/`, `pages/`

---

### Task 1: Add Image Assets

- Added images such as `house.png` and `star.png` under `public/assets/`
- Verified image rendering using the Next.js `Image` component

---

### Task 2: Create `Card` Component

- Built a reusable `Card.tsx` component
- Displays a house image, rating, and supporting text
- Used `Image` and custom `Pill` components inside Card

---

### Task 3: Create `Pill` Component

- Built a `Pill` component (`components/Pill.tsx`)
- Dynamic prop: `title` (passed via props)
- Styled as a capsule using Tailwind classes

```tsx
<Pill title="Top Villa" />
<Pill title="Free Reschedule" />
