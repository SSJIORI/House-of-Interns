# House of Interns

A full-stack web application featuring a Next.js frontend with Tailwind CSS and a Strapi CMS backend for content management.

## Project Structure

```
House-of-Interns/
├── backend/          # Strapi CMS backend
├── house-of-interns/ # Next.js frontend
└── README.md         # This file
```

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### Backend Setup (Strapi CMS)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The Strapi admin panel will be available at `http://localhost:1337/admin`

### Frontend Setup (Next.js)

1. Navigate to the frontend directory:
   ```bash
   cd house-of-interns
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The Next.js application will be available at `http://localhost:3000`

## Development Workflow

To run both services simultaneously:

1. **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   cd house-of-interns
   npm run dev
   ```

## Technologies Used

### Backend (Strapi CMS)
- **Strapi** - Headless CMS
- **Node.js** - Runtime environment
- **TypeScript** - Type-safe JavaScript

### Frontend (Next.js)
- **Next.js** - React framework
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Available Scripts

### Backend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
