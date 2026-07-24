# 93B eSports Clan Website

A professional, production-ready React + Vite website for the 93B eSports clan in Garena Delta Force. Built with a dark Gothic Tactical visual identity featuring smooth animations, responsive design, and optimized for Vercel hosting.

## 🎨 Features

- **Dark Gothic Tactical Design** - Custom color palette with deep tactical black background and blood-red neon accents
- **Smooth Animations** - Framer Motion-powered scroll-triggered animations and transitions
- **Custom Cursor** - Crosshair cursor on desktop (auto-disabled on touch devices)
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Loading Screen** - Animated initialization screen on first load
- **Interactive Components** - Hover effects, glassmorphism cards, and lightbox image preview
- **Performance Optimized** - Compressed WebP images, lightweight animations
- **Single Data Source** - All content managed through `clanData.json`

## 🚀 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Orbitron (headings), Rajdhani (body) via Google Fonts

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 93B-CLAN-WEBSITE
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
93B-CLAN-WEBSITE/
├── public/
│   ├── logo.png              # Clan logo
│   ├── favicon.ico           # Site favicon
│   └── scrims/               # Scrim result screenshots
│       ├── scrim1.webp
│       ├── scrim2.webp
│       └── scrim3.webp
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx    # Initial loading animation
│   │   ├── CustomCursor.jsx     # Custom crosshair cursor
│   │   ├── Navbar.jsx           # Navigation with mobile menu
│   │   ├── Hero.jsx             # Hero section with animations
│   │   ├── About.jsx            # About section
│   │   ├── Stats.jsx            # Animated stat counters
│   │   ├── Roster.jsx           # Management and player roster
│   │   ├── Scrims.jsx           # Recent scrims with lightbox
│   │   ├── Contact.jsx          # Social links and contact
│   │   └── Footer.jsx           # Site footer
│   ├── data/
│   │   └── clanData.json        # All dynamic content
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## ⚙️ Configuration

### Content Management

All website content is managed through `src/data/clanData.json`. Edit this file to update:

- Clan information (name, tagline, description)
- Battle statistics (wins, losses, draws)
- Management roles and names
- Player roster by role (Attacker, Engineering, Sniper, Medical)
- Recent scrim results
- Social media links

### Customization

- **Colors**: Edit `tailwind.config.js` to modify the color theme
- **Fonts**: Google Fonts are imported in `index.html`
- **Animations**: Adjust Framer Motion settings in individual components

## 🌐 Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign up/login
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Option 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## 📝 Adding Content

### Adding Scrim Screenshots

1. Place your scrim result screenshots in `public/scrims/`
2. Use WebP format for optimal compression
3. Update the `recentScrims` array in `clanData.json` with the correct image paths

### Updating Roster

Edit the `roster` object in `clanData.json`:
```json
{
  "roster": {
    "attacker": ["Player1", "Player2"],
    "engineering": ["Player3"],
    "sniper": ["Player4"],
    "medical": ["Player5"]
  }
}
```

## 🎯 Performance Notes

- Images are optimized as WebP for Vercel's 100GB/month bandwidth limit
- Animations are lightweight and use hardware acceleration
- Custom cursor is automatically disabled on touch devices
- Lazy loading implemented for images
- CSS-in-JS via Tailwind for optimal bundle size

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a clan website - content updates should be made through the `clanData.json` file. For code changes, ensure they maintain the dark Gothic Tactical aesthetic and performance optimizations.

## 📄 License

© 2025 93B Clan. All rights reserved.

## 🆘 Support

For issues or questions about the website, contact the clan leadership through the contact section on the website.
