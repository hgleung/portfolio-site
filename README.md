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
