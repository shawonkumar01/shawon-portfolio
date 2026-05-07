# Shawon Kumar Modak - Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, and TypeScript. Features a dark theme design with smooth animations, project showcases with GitHub links, and a professional layout.

## Features

- **Hero Section**: Profile photo, availability status, and key statistics
- **Skills Section**: Categorized technical skills with visual tags
- **Projects Section**: Featured projects with GitHub links, live demos, and screenshot support
- **Experience Section**: Work history and education timeline
- **Contact Section**: Direct links to email, phone, LinkedIn, and GitHub
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Dark Theme**: Modern dark color scheme with purple/cyan accent colors

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Adding Your Profile Photo

1. Place your profile photo in `public/profile.jpg`
2. The Hero component will automatically display it
3. Recommended size: 400x400px or higher (square format)

### Adding Project Screenshots

1. Place project screenshots in the `public/projects/` folder
2. Update the `projects` array in `components/Projects.tsx`:
   - Set `image: '/projects/your-image.png'` for each project
   - Recommended size: 1200x800px or higher (landscape format)

### Updating Project Links

In `components/Projects.tsx`, update the following fields for each project:
- `github`: Your GitHub repository URL
- `live`: Live demo URL (if deployed)
- `backend`: Backend repository URL (if separate)
- `frontend`: Frontend repository URL (if separate)

### Updating Contact Information

In `components/Contact.tsx`, update the `contactLinks` array with your:
- Email address
- Phone number
- LinkedIn profile URL
- GitHub profile URL

### Updating Experience

In `components/Experience.tsx`, modify the `experiences` array to add or update your work history and education.

## Project Structure

```
shawon-portfolio/
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page (integrates all components)
├── components/
│   ├── Contact.tsx       # Contact section
│   ├── Experience.tsx    # Work history section
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section with profile photo
│   ├── Navbar.tsx        # Navigation bar
│   ├── Projects.tsx      # Projects section with GitHub links
│   └── Skills.tsx        # Skills section
└── public/
    ├── profile.jpg       # Your profile photo
    └── projects/         # Project screenshots folder
```

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS v4**: Utility-first CSS framework
- **Google Fonts**: Syne and DM Mono fonts

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Alternatively, you can deploy to other platforms like Netlify, Render, or your own server.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

## License

This project is open source and available for personal use.
