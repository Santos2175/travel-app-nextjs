# 🌍 Travel App - Next.js 15

A modern, responsive travel landing page built with Next.js 15, TypeScript, and Tailwind CSS. This application showcases destinations, hotels, tours, and travel services with beautiful animations and a user-friendly interface.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Docker Deployment](#-docker-deployment)
- [Project Components](#-project-components)
- [Data Structure](#-data-structure)
- [Styling](#-styling)
- [Performance Optimizations](#-performance-optimizations)
- [Contributing](#-contributing)

---

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Interactive Components**: Hero section, destination showcase, hotel listings, client reviews
- **Animation Effects**: AOS (Animate On Scroll) integration for engaging user experience
- **Mobile Responsive**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development

---

## 🛠 Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: AOS (Animate On Scroll) 3.0.0-beta.6
- **Icons**: React Icons 5.5.0
- **Carousel**: React Multi Carousel 2.8.6
- **Slideshow**: Swiper 11.2.8
- **Font**: Poppins (Google Fonts)
- **Linting**: ESLint 9
- **Containerization**: Docker

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Santos2175/travel-app-nextjs.git
   cd travel-app-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Development

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start

# Run linting
npm run lint
```

---

## 🐳 Docker Deployment

### Building the Docker Image

```bash
# Build the Docker image
docker build -t travel-app .

# Run the container
docker run -p 3000:3000 travel-app
```

### Docker Compose (Optional)

Create a `docker-compose.yml` file for easier management:

```yaml
version: '3.8'
services:
  travel-app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Then run:

```bash
docker-compose up -d
```

---

## 🧩 Project Components

### Core Sections

1. **Hero Section**: Eye-catching landing area with call-to-action
2. **Destination Showcase**: Grid of popular travel destinations
3. **Hotel Listings**: Featured hotels with ratings and pricing
4. **Why Choose Us**: Value proposition and benefits
5. **Client Reviews**: Customer testimonials and feedback
6. **Blog Section**: Travel articles and tips
7. **Newsletter**: Email subscription for updates

### Key Features

- **Responsive Navigation**: Mobile-friendly navigation menu
- **Scroll Animations**: AOS integration for smooth scroll effects
- **Image Optimization**: Next.js automatic image optimization
- **Performance**: Optimized bundle size and loading times

---

## 📊 Data Structure

The application uses static data stored in `data/data.ts`:

- **Destinations**: Country information with traveler counts
- **Hotels**: Hotel details with ratings, reviews, and pricing
- **Tours**: Tour packages with locations and pricing
- **Reviews**: Customer testimonials with profile images

---

## 🎨 Styling

- **Tailwind CSS 4**: Latest version with enhanced features
- **Custom Components**: Reusable UI components
- **Responsive Design**: Mobile-first approach
- **Typography**: Poppins font family for modern look
- **Color Scheme**: Travel-themed color palette

---

## ⚡ Performance Optimizations

- **Next.js 15**: Latest framework with performance improvements
- **Turbopack**: Fast bundler for development
- **Image Optimization**: Automatic image compression and formats
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better SEO
- **Bundle Analysis**: Optimized JavaScript bundles

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design
- Add proper TypeScript types
- Follow ESLint rules

---

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [AOS Documentation](https://michalsnik.github.io/aos/)

---

**Built with ❤️ using Next.js 15**
