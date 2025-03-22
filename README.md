# Harry Leung's Portfolio

Built using T3

## Overview

A modern, responsive personal portfolio website showcasing Harry Leung's skills, experience, and projects. This portfolio is designed with a clean, minimalist aesthetic featuring a dark/light mode toggle and smooth scrolling navigation.

## Features

### Core Components
- **About Me**: Personal introduction and professional overview
- **Skills**: Interactive display of technical skills with custom icons
- **Experience**: Tab-based browser window UI showcasing professional and educational experience
- **Projects**: Showcase of personal and professional projects
- **Contact**: Multiple contact options with animated interactive elements

### Technical Highlights
- Responsive design that works seamlessly on mobile, tablet, and desktop
- Dark/light mode with system preference detection
- Smooth scrolling navigation with custom scroll button
- Browser window component with tabbed navigation for experience section
- PostgreSQL database integration with Drizzle ORM
- Modern UI with glassmorphism effects, animations, and gradient text

## Technology Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Components**: Custom React components with CSS modules
- **Icons**: React Icons and custom SVG components
- **Typography**: Geist font family

### Backend
- **Database**: PostgreSQL via Vercel Postgres
- **ORM**: Drizzle ORM for type-safe database operations
- **API**: Next.js API routes
- **Environment**: T3 environment configuration

### Development Tools
- **Package Manager**: pnpm
- **TypeScript**: Strict type checking
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting with Tailwind plugin

## Project Structure

- `/src/app`: Next.js app router pages and layouts
- `/src/components`: Reusable UI components
- `/src/server`: Server-side code including database schema
- `/src/styles`: Global styles and CSS modules
- `/public`: Static assets including profile picture and favicons

## Database Schema

Currently implements an image schema for storing portfolio project images with the following fields:
- `id`: Serial primary key
- `name`: Image name (indexed)
- `url`: Image URL
- `createdAt`: Timestamp with timezone
- `updatedAt`: Timestamp with timezone with auto-update

## Planned Features

- Enhanced About Me section with more personal details
- Improved Skills section with colored icons and labels
- Scrolling header with tighter UI
- Complete database integration for dynamic content
- Portfolio project showcase with filtering
- Notes section for blog/thoughts
- Interactive map component
- Mobile-optimized navigation with dropdown menu

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 9.5.0+
- PostgreSQL database

### Installation
1. Clone the repository
2. Install dependencies with `pnpm install`
3. Set up environment variables (see `.env.example`)
4. Run the development server with `pnpm dev`

### Database Setup
1. Set up PostgreSQL database
2. Configure connection in `.env`
3. Generate database schema with `pnpm db:generate`
4. Push schema to database with `pnpm db:push`

## Deployment

The portfolio is designed to be deployed on Vercel with the following features:
- Vercel Postgres for database
- Edge runtime for optimal performance
- Automatic preview deployments for PRs

## License

All rights reserved. This project is private and not licensed for public use.

## Contact

- Email: hleung.cs@gmail.com
- LinkedIn: harrygleung
- X: hleung_dev
- GitHub: hgleung
