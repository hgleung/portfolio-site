# Harry Leung's Portfolio

A modern, interactive personal portfolio website built with the [T3 Stack](https://create.t3.gg/). This project showcases my skills, professional experience, and technical projects through a clean, responsive interface.

## Overview

This portfolio serves as a central hub for my professional identity. It goes beyond a simple static page by incorporating interactive elements like a simulated browser window for viewing experience, a dynamic skills showcase, and a dedicated section for technical notes and reports.

## Key Features

-   **Interactive Experience UI**: A unique "browser window" interface that allows users to explore my professional background in a familiar, tabbed format.
-   **Technical Notes & Blog**: A dedicated section (`/notes`) for in-depth technical articles, project reports, and learning logs (e.g., "Building a Toy Language", "AI Art Detector Report").
-   **Project Showcase**: A visual gallery of my personal and professional projects, complete with descriptions and links.
-   **Responsive Design**: Fully responsive layout that adapts seamlessly to mobile, tablet, and desktop screens.
-   **Dark/Light Mode**: Built-in theme switching with system preference detection.
-   **Resume View**: A dedicated page (`/resume`) for a printer-friendly version of my resume.

## Technology Stack

This project is built using the **T3 Stack**, leveraging the best modern web technologies for type safety and performance.

### Frontend
-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `tailwindcss-animate`
-   **Icons**: [Lucide React](https://lucide.dev/) & React Icons
-   **Fonts**: [Geist](https://vercel.com/font)

### Backend & Database
-   **Database**: PostgreSQL (via [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres))
-   **ORM**: [Drizzle ORM](https://orm.drizzle.team/) for type-safe database interactions
-   **Environment**: [@t3-oss/env-nextjs](https://env.t3.gg/) for type-safe environment variables

### Tooling
-   **Package Manager**: [pnpm](https://pnpm.io/)
-   **Linting**: ESLint
-   **Formatting**: Prettier (with Tailwind plugin)

## Getting Started

Follow these steps to run the project locally.

### Prerequisites
-   Node.js (LTS recommended)
-   pnpm (`npm install -g pnpm`)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hgleung/portfolio-site.git
    cd portfolio-site
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory based on `.env.example` (if available) or ensure you have the following variables:
    ```env
    POSTGRES_URL="postgres://..."
    ```

4.  **Push the database schema:**
    ```bash
    pnpm db:push
    ```

5.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

-   `src/app`: Next.js App Router pages and layouts.
    -   `src/app/notes`: Technical notes and blog posts.
    -   `src/app/resume`: Dedicated resume page.
-   `src/components`: Reusable UI components (e.g., `BrowserWindow`, `Skills`, `Projects`).
-   `src/server/db`: Database configuration and Drizzle schema definitions.
-   `src/styles`: Global styles and CSS modules.
-   `public`: Static assets.

## Database Schema

The project uses a PostgreSQL database managed by Drizzle ORM. The current schema includes:

-   **Images Table** (`hleung-portfolio_image`): Stores metadata for portfolio images.
    -   `id`: Serial primary key
    -   `name`: Image name
    -   `url`: Image URL
    -   `createdAt` & `updatedAt`: Timestamps

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com).
-   Connect your GitHub repository to Vercel.
-   Configure the `POSTGRES_URL` environment variable in the Vercel dashboard.
-   Deployments are automatic on push to the `main` branch.

## Contact

-   **Email**: hleung.cs@gmail.com
-   **GitHub**: [hgleung](https://github.com/hgleung)
-   **LinkedIn**: [harrygleung](https://linkedin.com/in/harrygleung)
-   **X (Twitter)**: [hleung_dev](https://x.com/hleung_dev)

---
*Built with ❤️ by Harry Leung*
