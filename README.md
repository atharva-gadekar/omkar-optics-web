# Omkar Optics Website

A modern, professional website for Omkar Optics - Your trusted local optician in Dombivli, India.

## About Omkar Optics

Omkar Optics is a local optical shop dedicated to providing high-quality eyewear and personalized eye care services to the Dombivli community. Led by owner Dhananjay, we pride ourselves on offering:

- **Personalized Service:** Individual attention for every customer
- **Quality Craftsmanship:** Only the finest frames and lenses
- **Latest Styles:** Modern and classic eyewear designs
- **Community Focus:** Your neighborhood vision experts

## Website Features

### Pages
- **Home:** Hero section, Our Promise, Product Categories, Meet the Owner, Testimonials
- **About Us:** Company story, mission, and values
- **Products:** Filterable gallery of Spectacles, Sunglasses, Contact Lenses, and Kids' Eyewear
- **Our Store & Technology:** Store gallery and services overview
- **Contact:** Location, hours, contact information with embedded map

### Technical Stack
- **Framework:** Next.js 13 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Montserrat (headings) + Open Sans (body text)
- **Color Scheme:** Professional blue (#4A90E2), white, light grey, warm beige

## Getting Started

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd omkar-optics
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Replace Placeholder Images

All placeholder image paths are documented in `IMAGE_PLACEHOLDERS.md`. Replace these files in the `/public` directory with your actual photos:

- Hero banner
- Owner photo
- Product category images
- Individual product photos
- Store photos
- Customer testimonials

### 2. Update Contact Information

Edit `constants/index.js` to update:
- Phone number
- Physical address
- Email address
- Business hours
- Social media links
- Google Maps embed URL

### 3. Customize Content

Edit the content in:
- `constants/index.js` - Product info, testimonials, features
- Section components in `/sections` - Customize text and messaging
- Page components in `/app` - Update page-specific content

### 4. Color Customization

To change the color scheme, edit:
- `tailwind.config.js` - Update color definitions
- `styles/globals.css` - Update gradient styles

### 5. Add Real Products

Update the `productsGallery` array in `constants/index.js` with your actual products, prices, and image paths.

## Project Structure

```
omkar-optics/
├── app/                    # Next.js 13 App Router pages
│   ├── page.js            # Homepage
│   ├── about/             # About Us page
│   ├── products/          # Products page
│   ├── store/             # Store & Technology page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── sections/              # Page sections
│   ├── Hero.jsx
│   ├── OurPromise.jsx
│   ├── Products.jsx
│   ├── Owner.jsx
│   └── Testimonials.jsx
├── constants/             # Site data and content
│   └── index.js
├── styles/                # Global styles and Tailwind
│   ├── globals.css
│   └── index.js
├── public/                # Static assets (images, icons)
└── utils/                 # Utility functions (animations)
```

## Key Files to Update

1. **`constants/index.js`** - All site content, products, testimonials, contact info
2. **`IMAGE_PLACEHOLDERS.md`** - Complete list of images to replace
3. **`app/head.js`** - SEO meta tags and site title
4. **`public/`** - All images and assets

## SEO & Performance

- Optimized images (WebP format recommended)
- Semantic HTML structure
- Fast loading with Next.js optimization
- Mobile-responsive design
- Accessible navigation and content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

- **Netlify:** Connect GitHub repo and deploy
- **Traditional Hosting:** Run `npm run build` and upload the `.next` folder

## Support & Maintenance

For technical support or questions:
- Review `IMAGE_PLACEHOLDERS.md` for image requirements
- Check `constants/index.js` for content updates
- Ensure all placeholder content is replaced before going live

## License

This project is private and proprietary to Omkar Optics.

## Credits

- Built with Next.js and React
- Animations by Framer Motion
- Styled with Tailwind CSS
- Icons from SVG sources

---

**Omkar Optics** - Clarity in Vision, Quality in Care

Visit us in Dombivli for all your eyewear needs!
