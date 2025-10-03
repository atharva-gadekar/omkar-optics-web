# Quick Start Guide - Omkar Optics Website

**Get your website running in 5 minutes!**

## Step 1: Install & Run (2 minutes)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: http://localhost:3000

## Step 2: Critical Updates (15 minutes)

### Update Contact Info
Edit `constants/index.js` - Search for `contactInfo`:

```javascript
export const contactInfo = {
  address: 'YOUR STORE ADDRESS HERE',
  phone: '+91 YOUR PHONE',
  email: 'YOUR EMAIL',
  // ... update everything marked with PLACEHOLDER
};
```

### Update Social Media
In same file, search for `socials`:

```javascript
export const socials = [
  { name: 'facebook', url: '/facebook.svg', link: 'YOUR FACEBOOK URL' },
  { name: 'instagram', url: '/instagram.svg', link: 'YOUR INSTAGRAM URL' },
  { name: 'whatsapp', url: '/whatsapp.svg', link: 'https://wa.me/91YOUR_NUMBER' },
];
```

## Step 3: Add Your Photos

### Must-Have Images (Priority)
1. **Hero Banner** → `/public/hero-banner.jpg` (1920x700px)
2. **Your Photo** → `/public/owner-dhananjay.jpg` (800x1000px)
3. **Product Categories** (4 images, 600x600px):
   - `/public/products/spectacles.jpg`
   - `/public/products/sunglasses.jpg`
   - `/public/products/contact-lenses.jpg`
   - `/public/products/kids-eyewear.jpg`

### Additional Photos (Add Later)
- Store photos in `/public/store/`
- Product gallery in `/public/products/gallery/`
- About page photos in `/public/about/`

## Step 4: Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

## Quick Deploy Options

### Option A: Vercel (Easiest - 5 minutes)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Click deploy ✅

### Option B: Netlify
1. Push to GitHub
2. Go to netlify.com
3. Import repository
4. Deploy ✅

## What You Get

✅ **5 Pages Ready:**
- Homepage (Hero, Services, Products, Owner, Testimonials)
- About Us
- Products (with filters)
- Store & Technology
- Contact (with map)

✅ **Professional Design:**
- Blue & white color scheme
- Mobile responsive
- Modern animations
- Clean layout

✅ **Features:**
- Working navigation
- Product filters
- Contact information
- Social media links
- Google Maps integration

## Need Help?

- **Images:** See `IMAGE_PLACEHOLDERS.md`
- **Setup:** See `SETUP_GUIDE.md`
- **Changes:** See `TRANSFORMATION_SUMMARY.md`
- **General:** See `README.md`

## Common Quick Fixes

### Images Not Showing?
- Check file paths are exact (case-sensitive)
- Ensure images are in `/public` folder
- Refresh browser cache

### Wrong Phone/Email?
- Edit `constants/index.js`
- Search for `contactInfo`
- Update and restart dev server

### Change Colors?
- Edit `tailwind.config.js`
- Look for `colors:` section
- Update color hex codes

### Change Text?
- Edit files in `/sections` folder
- Or edit page files in `/app/[page]/page.js`

## Your Website is Ready! 🎉

After updating contact info and adding photos, your professional optical shop website is ready to go live.

**Next Step:** Follow detailed customization in `SETUP_GUIDE.md`

---

**Need immediate help?** Check the other documentation files for detailed instructions.
