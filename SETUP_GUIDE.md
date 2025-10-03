# Omkar Optics Website Setup Guide

This guide will help you get the Omkar Optics website up and running with your actual content.

## Quick Start Checklist

- [ ] Install dependencies
- [ ] Replace all placeholder images
- [ ] Update contact information
- [ ] Customize product listings
- [ ] Update testimonials
- [ ] Test all pages
- [ ] Deploy to production

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see the site locally.

## Step 3: Replace Placeholder Images

### Critical Images (Required for Launch)

1. **Hero Banner** (`/public/hero-banner.jpg`)
   - Image of a happy customer wearing glasses
   - Size: 1920x700px
   - Use: Homepage hero section

2. **Owner Photo** (`/public/owner-dhananjay.jpg`)
   - Professional photo of Dhananjay
   - Size: 800x1000px (portrait)
   - Use: Homepage "Meet the Owner" section

3. **Product Categories** (4 images)
   - `/public/products/spectacles.jpg`
   - `/public/products/sunglasses.jpg`
   - `/public/products/contact-lenses.jpg`
   - `/public/products/kids-eyewear.jpg`
   - Size: 600x600px each
   - Use: Homepage product categories

4. **Store Photos** (4 images for Store & Technology page)
   - `/public/store/interior-1.jpg` - Store interior
   - `/public/store/equipment.jpg` - Eye testing equipment
   - `/public/store/frames-display.jpg` - Frame displays
   - `/public/store/consultation.jpg` - Customer consultation
   - Size: 1000x800px each

5. **About Page Photos** (2 images)
   - `/public/about/shop-exterior.jpg` - Storefront
   - `/public/about/shop-interior.jpg` - Inside view
   - Size: 1200x800px

### Optional Images

6. **Product Gallery** (8 images for Products page)
   - See IMAGE_PLACEHOLDERS.md for complete list
   - Size: 800x800px each

7. **Testimonial Photos** (3 images)
   - Customer headshots or stock photos
   - Size: 200x200px each

## Step 4: Update Contact Information

Edit `constants/index.js` and update the `contactInfo` object:

```javascript
export const contactInfo = {
  address: 'YOUR ACTUAL ADDRESS',
  phone: '+91 YOUR PHONE NUMBER',
  email: 'YOUR EMAIL',
  hours: {
    weekdays: 'Monday - Saturday: YOUR HOURS',
    sunday: 'Sunday: CLOSED or YOUR HOURS',
  },
  mapUrl: 'YOUR GOOGLE MAPS EMBED URL',
};
```

### Getting Google Maps Embed URL:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your store location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Paste into `mapUrl` in constants/index.js

## Step 5: Update Social Media Links

In `constants/index.js`, update the `socials` array:

```javascript
export const socials = [
  {
    name: 'facebook',
    url: '/facebook.svg',
    link: 'YOUR FACEBOOK PAGE URL',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
    link: 'YOUR INSTAGRAM PROFILE URL',
  },
  {
    name: 'whatsapp',
    url: '/whatsapp.svg',
    link: 'https://wa.me/919876543210', // Replace with your number
  },
];
```

## Step 6: Customize Products

### Update Product Categories

In `constants/index.js`, customize the `productCategories` array with your actual product descriptions.

### Update Products Gallery

In `constants/index.js`, edit the `productsGallery` array:

```javascript
export const productsGallery = [
  {
    id: 'prod-1',
    imgUrl: '/products/gallery/YOUR-IMAGE.jpg',
    category: 'spectacles', // or 'sunglasses', 'contact-lenses', 'kids-eyewear'
    title: 'Product Name',
    price: '₹YOUR PRICE',
  },
  // Add more products...
];
```

## Step 7: Update Testimonials

In `constants/index.js`, edit the `testimonials` array with real customer reviews:

```javascript
export const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Customer Name',
    image: '/testimonials/customer-photo.jpg',
    rating: 5,
    text: 'Their actual testimonial quote',
  },
  // Add more testimonials...
];
```

## Step 8: Customize Text Content

### Homepage
- Edit sections in `/sections/`:
  - `Hero.jsx` - Hero heading and subheading
  - `OurPromise.jsx` - Your promises to customers
  - `Owner.jsx` - Dhananjay's bio and message

### About Page
- Edit `/app/about/page.js` to update your store's story

### Other Pages
- Products page: `/app/products/page.js`
- Store page: `/app/store/page.js`
- Contact page: `/app/contact/page.js`

## Step 9: Test Everything

1. **Test Navigation**
   - Click all menu items
   - Verify all pages load correctly

2. **Test Links**
   - Phone numbers (should open phone dialer)
   - Email (should open email client)
   - Social media links
   - WhatsApp button

3. **Test on Mobile**
   - Open site on your phone
   - Check responsive design
   - Test hamburger menu

4. **Test Images**
   - Verify all images load
   - Check image quality
   - Ensure no broken image links

## Step 10: Build for Production

```bash
npm run build
```

This creates an optimized production build.

## Step 11: Deploy

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Deploy

### Option 3: Traditional Hosting

1. Run `npm run build`
2. Upload the build files to your hosting
3. Configure server for Next.js

## Common Issues & Solutions

### Images Not Loading
- Check file paths match exactly (case-sensitive)
- Ensure images are in `/public` directory
- Verify image file formats (jpg, png, webp)

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for console errors: `npm run dev`
- Verify all imports are correct

### Styling Issues
- Clear browser cache
- Check Tailwind classes are correct
- Verify custom CSS in globals.css

### Contact Form Not Working
- This template doesn't include a contact form backend
- Consider adding Formspree, Netlify Forms, or similar service

## Performance Optimization Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images (try tinypng.com)
   - Keep file sizes under 200KB

2. **Enable Next.js Image Optimization**
   - Replace `<img>` tags with `<Image>` from 'next/image'
   - Automatic lazy loading and optimization

3. **Check Load Speed**
   - Use Google PageSpeed Insights
   - Aim for 90+ score on mobile and desktop

## SEO Checklist

- [ ] Updated page title in `app/head.js`
- [ ] Added meta description
- [ ] Added alt text to all images
- [ ] Created sitemap.xml
- [ ] Set up Google Analytics (optional)
- [ ] Submitted to Google Search Console

## Support

For questions about:
- **Images:** See IMAGE_PLACEHOLDERS.md
- **Content:** Edit files in /constants and /sections
- **Styling:** Edit tailwind.config.js and styles/globals.css
- **Technical issues:** Check Next.js documentation

## Next Steps After Launch

1. Monitor website analytics
2. Collect customer testimonials
3. Add more product photos
4. Keep content updated
5. Respond to customer inquiries promptly

---

**Congratulations!** Your Omkar Optics website is ready to help you serve customers online.

For ongoing updates, refer to the README.md file.
