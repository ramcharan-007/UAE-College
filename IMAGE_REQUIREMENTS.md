# 📸 Image Requirements for International Center for Applied Studies & Research College Website

This document lists all required images with their recommended dimensions and responsive variants. Place your images in `/public/images/` folder.

---

## 📁 Folder Structure

```
public/
└── images/
    ├── hero/
    │   ├── hero-banner-desktop.webp    (2560×1080)
    │   ├── hero-banner-tablet.webp     (1600×900)
    │   └── hero-banner-mobile.webp     (900×600)
    ├── about/
    │   ├── about-hero.webp             (2000×900)
    │   ├── about-story.webp            (1200×800)
    │   └── campus-aerial.webp          (1600×900)
    ├── leadership/
    │   ├── leader-1.webp               (600×600)
    │   ├── leader-2.webp               (600×600)
    │   ├── leader-3.webp               (600×600)
    │   └── leader-4.webp               (600×600)
    ├── facilities/
    │   ├── smart-classroom.webp        (1200×900)
    │   ├── research-lab.webp           (1200×900)
    │   ├── library.webp                (1200×900)
    │   ├── sports-complex.webp         (1200×900)
    │   ├── student-lounge.webp         (1200×900)
    │   └── cafeteria.webp              (1200×900)
    ├── testimonials/
    │   ├── testimonial-1.webp          (300×300)
    │   ├── testimonial-2.webp          (300×300)
    │   ├── testimonial-3.webp          (300×300)
    │   ├── testimonial-4.webp          (300×300)
    │   └── testimonial-5.webp          (300×300)
    ├── blog/
    │   ├── blog-featured.webp          (1600×900)
    │   ├── blog-1.webp                 (1200×800)
    │   ├── blog-2.webp                 (1200×800)
    │   ├── blog-3.webp                 (1200×800)
    │   ├── blog-4.webp                 (1200×800)
    │   ├── blog-5.webp                 (1200×800)
    │   ├── blog-6.webp                 (1200×800)
    │   ├── blog-7.webp                 (1200×800)
    │   └── blog-8.webp                 (1200×800)
    ├── courses/
    │   ├── course-mba.webp             (1200×800)
    │   ├── course-project-mgmt.webp    (1200×800)
    │   ├── course-computer-science.webp(1200×800)
    │   ├── course-digital-marketing.webp(1200×800)
    │   ├── course-healthcare.webp      (1200×800)
    │   └── course-data-science.webp    (1200×800)
    ├── events/
    │   ├── event-dubai-fair.webp       (1200×800)
    │   ├── event-abudhabi-expo.webp    (1200×800)
    │   ├── event-hyderabad.webp        (1200×800)
    │   └── event-london.webp           (1200×800)
    ├── branding/
    │   ├── logo.svg                    (Vector)
    │   ├── logo-white.svg              (Vector)
    │   ├── favicon-32.png              (32×32)
    │   ├── favicon-192.png             (192×192)
    │   └── apple-touch-icon.png        (180×180)
    └── social/
        └── og-image.jpg                (1200×630)
```

---

## Detailed Image List

### 1. Hero Section (Homepage)

**Location:** `app/components/Hero.tsx`
**Purpose:** Full-screen background banner behind hero text

| Variant      | Filename                   | Dimensions     | Aspect Ratio     | Max File Size |
| ------------ | -------------------------- | -------------- | ---------------- | ------------- |
| Desktop (2K) | `hero-banner-desktop.webp` | 2560 × 1080 px | 21:9 (Ultrawide) | 500 KB        |
| Desktop (HD) | `hero-banner-1920.webp`    | 1920 × 810 px  | 21:9             | 350 KB        |
| Tablet       | `hero-banner-tablet.webp`  | 1600 × 900 px  | 16:9             | 250 KB        |
| Mobile       | `hero-banner-mobile.webp`  | 900 × 600 px   | 3:2              | 150 KB        |

** Notes:**

- Use a high-quality campus/college building photo
- Subject should be centered or left-of-center (text overlay on right)
- Avoid busy patterns that interfere with white text
- Recommended: Modern building, students, or aerial campus view

---

### 2. About Page

**Location:** `app/about/page.tsx`

#### 2.1 About Hero Background

| Variant | Filename                 | Dimensions    | Aspect Ratio | Max File Size |
| ------- | ------------------------ | ------------- | ------------ | ------------- |
| Desktop | `about-hero.webp`        | 2000 × 900 px | 20:9         | 400 KB        |
| Tablet  | `about-hero-tablet.webp` | 1200 × 600 px | 2:1          | 200 KB        |

#### 2.2 About Story Image (Campus Photo)

| Variant | Filename                  | Dimensions    | Aspect Ratio | Max File Size |
| ------- | ------------------------- | ------------- | ------------ | ------------- |
| Desktop | `about-story.webp`        | 1200 × 800 px | 3:2          | 250 KB        |
| Tablet  | `about-story-tablet.webp` | 800 × 533 px  | 3:2          | 150 KB        |
| Mobile  | `about-story-mobile.webp` | 600 × 400 px  | 3:2          | 100 KB        |

** Notes:**

- Show campus life, students interacting, or modern facilities
- Warm, welcoming atmosphere

---

### 3. Leadership Team Photos

**Location:** `app/about/page.tsx` (Leadership Section)
**Purpose:** Team member profile photos (displayed in grid)

| Person                   | Filename        | Dimensions   | Aspect Ratio | Max File Size |
| ------------------------ | --------------- | ------------ | ------------ | ------------- |
| Chancellor               | `leader-1.webp` | 600 × 600 px | 1:1 (Square) | 80 KB         |
| Vice Chancellor Academic | `leader-2.webp` | 600 × 600 px | 1:1          | 80 KB         |
| Vice Chancellor Research | `leader-3.webp` | 600 × 600 px | 1:1          | 80 KB         |
| Dean of Students         | `leader-4.webp` | 600 × 600 px | 1:1          | 80 KB         |

** Notes:**

- Professional headshots with neutral background
- Face centered in frame
- Consistent lighting across all photos
- Business attire preferred

---

### 4. Campus Facilities Gallery

**Location:** `app/about/page.tsx` (Campus Section)

| Facility         | Filename                  | Dimensions    | Aspect Ratio | Max File Size |
| ---------------- | ------------------------- | ------------- | ------------ | ------------- |
| Smart Classrooms | `facility-classroom.webp` | 1200 × 900 px | 4:3          | 200 KB        |
| Research Labs    | `facility-lab.webp`       | 1200 × 900 px | 4:3          | 200 KB        |
| Library          | `facility-library.webp`   | 1200 × 900 px | 4:3          | 200 KB        |
| Sports Complex   | `facility-sports.webp`    | 1200 × 900 px | 4:3          | 200 KB        |
| Student Lounge   | `facility-lounge.webp`    | 1200 × 900 px | 4:3          | 200 KB        |
| Cafeteria        | `facility-cafeteria.webp` | 1200 × 900 px | 4:3          | 200 KB        |

** Notes:**

- Well-lit interior shots
- Show modern equipment and furnishings
- Include students using facilities if possible

---

### 5. Testimonials / Student Avatars

**Location:** `app/components/Testimonials.tsx`
**Purpose:** Student profile photos for testimonials carousel

| Student       | Filename             | Dimensions   | Aspect Ratio | Max File Size |
| ------------- | -------------------- | ------------ | ------------ | ------------- |
| Testimonial 1 | `testimonial-1.webp` | 300 × 300 px | 1:1          | 30 KB         |
| Testimonial 2 | `testimonial-2.webp` | 300 × 300 px | 1:1          | 30 KB         |
| Testimonial 3 | `testimonial-3.webp` | 300 × 300 px | 1:1          | 30 KB         |
| Testimonial 4 | `testimonial-4.webp` | 300 × 300 px | 1:1          | 30 KB         |
| Testimonial 5 | `testimonial-5.webp` | 300 × 300 px | 1:1          | 30 KB         |

** Notes:**

- Close-up face portraits
- Diverse student representation (different nationalities)
- Friendly, approachable expressions
- Displayed at 56×56px but use 300×300 for retina

---

### 6. Blog / News Article Thumbnails

**Location:** `app/components/NewsEvents.tsx`, `app/blog/page.tsx`

#### 6.1 Featured Blog Image

| Variant | Filename                    | Dimensions    | Aspect Ratio | Max File Size |
| ------- | --------------------------- | ------------- | ------------ | ------------- |
| Desktop | `blog-featured.webp`        | 1600 × 900 px | 16:9         | 300 KB        |
| Tablet  | `blog-featured-tablet.webp` | 1200 × 675 px | 16:9         | 200 KB        |

#### 6.2 Blog Card Thumbnails (8 needed)

| Article               | Filename      | Dimensions    | Aspect Ratio | Max File Size |
| --------------------- | ------------- | ------------- | ------------ | ------------- |
| Cybersecurity Article | `blog-1.webp` | 1200 × 800 px | 3:2          | 180 KB        |
| Online Learning       | `blog-2.webp` | 1200 × 800 px | 3:2          | 180 KB        |
| Professional Trends   | `blog-3.webp` | 1200 × 800 px | 3:2          | 180 KB        |
| Career Path           | `blog-4.webp` | 1200 × 800 px | 3:2          | 180 KB        |
| Tech Education        | `blog-5.webp` | 1200 × 800 px | 3:2          | 180 KB        |
| Global Opportunities  | `blog-6.webp` | 1200 × 800 px | 3:2          | 180 KB        |
| Business Education    | `blog-7.webp` | 1200 × 800 px | 3:2          | 180 KB        |
| Healthcare            | `blog-8.webp` | 1200 × 800 px | 3:2          | 180 KB        |

** Notes:**

- Topic-relevant imagery
- Professional stock photos or custom photography
- Consistent color grading across all thumbnails

---

### 7. Online Course Thumbnails

**Location:** `app/online-courses/page.tsx`

| Course             | Filename                        | Dimensions    | Aspect Ratio | Max File Size |
| ------------------ | ------------------------------- | ------------- | ------------ | ------------- |
| MBA                | `course-mba.webp`               | 1200 × 800 px | 3:2          | 180 KB        |
| Project Management | `course-project-mgmt.webp`      | 1200 × 800 px | 3:2          | 180 KB        |
| Computer Science   | `course-computer-science.webp`  | 1200 × 800 px | 3:2          | 180 KB        |
| Digital Marketing  | `course-digital-marketing.webp` | 1200 × 800 px | 3:2          | 180 KB        |
| Healthcare Mgmt    | `course-healthcare.webp`        | 1200 × 800 px | 3:2          | 180 KB        |
| Data Science       | `course-data-science.webp`      | 1200 × 800 px | 3:2          | 180 KB        |

** Notes:**

- Represent each field visually (e.g., laptops for IT, charts for business)
- Modern, professional imagery
- Avoid text overlays on images

---

### 8. Education Fair Event Images

**Location:** `app/education-fairs/page.tsx`

| Event                    | Filename               | Dimensions    | Aspect Ratio | Max File Size |
| ------------------------ | ---------------------- | ------------- | ------------ | ------------- |
| Dubai International Fair | `event-dubai.webp`     | 1200 × 800 px | 3:2          | 180 KB        |
| Abu Dhabi Expo           | `event-abudhabi.webp`  | 1200 × 800 px | 3:2          | 180 KB        |
| Hyderabad Connect        | `event-hyderabad.webp` | 1200 × 800 px | 3:2          | 180 KB        |
| London UK Fair           | `event-london.webp`    | 1200 × 800 px | 3:2          | 180 KB        |

** Notes:**

- Exhibition/conference hall imagery
- Crowds at education fairs
- University booths and displays

---

### 9. Branding Assets

**Location:** Header, Footer, Favicon

| Asset       | Filename               | Dimensions   | Format | Notes                |
| ----------- | ---------------------- | ------------ | ------ | -------------------- |
| Main Logo   | `logo.svg`             | Vector       | SVG    | Primary brand logo   |
| White Logo  | `logo-white.svg`       | Vector       | SVG    | For dark backgrounds |
| Favicon 32  | `favicon-32.png`       | 32 × 32 px   | PNG    | Browser tab icon     |
| Favicon 192 | `favicon-192.png`      | 192 × 192 px | PNG    | Android/Chrome       |
| Apple Touch | `apple-touch-icon.png` | 180 × 180 px | PNG    | iOS home screen      |

---

### 10. Social Media / Open Graph

**Location:** Meta tags in `layout.tsx`

| Purpose      | Filename           | Dimensions    | Aspect Ratio | Format |
| ------------ | ------------------ | ------------- | ------------ | ------ |
| OG Default   | `og-image.jpg`     | 1200 × 630 px | ~1.91:1      | JPEG   |
| Twitter Card | `twitter-card.jpg` | 1200 × 600 px | 2:1          | JPEG   |

** Notes:**

- Include college name/logo
- Professional campus imagery
- Text readable at small sizes

---

## Image Optimization Guidelines

### Recommended Formats

| Format   | Use Case                          | Browser Support             |
| -------- | --------------------------------- | --------------------------- |
| **WebP** | Primary format (best compression) | All modern browsers         |
| **AVIF** | Best compression (optional)       | Chrome, Firefox, Safari 16+ |
| **JPEG** | Fallback for older browsers       | Universal                   |
| **PNG**  | Logos, icons with transparency    | Universal                   |
| **SVG**  | Vector logos, icons               | Universal                   |

### Compression Settings

- **WebP Quality:** 75-85% (good balance)
- **JPEG Quality:** 80-85%
- **Max file sizes:** Listed per image above

### Tools for Optimization

1. **Squoosh.app** - Free online tool by Google
2. **ImageOptim** - Mac app
3. **TinyPNG/TinyJPG** - Online compressor
4. **Sharp** - Node.js library (can automate)

---

## Summary Table

| Category     | Total Images        | Primary Dimensions   |
| ------------ | ------------------- | -------------------- |
| Hero Banners | 4 variants          | 2560×1080 to 900×600 |
| About Page   | 3 images + variants | 2000×900, 1200×800   |
| Leadership   | 4 photos            | 600×600              |
| Facilities   | 6 photos            | 1200×900             |
| Testimonials | 5 avatars           | 300×300              |
| Blog/News    | 9 thumbnails        | 1200×800             |
| Courses      | 6 thumbnails        | 1200×800             |
| Events       | 4 thumbnails        | 1200×800             |
| Branding     | 5 assets            | Various              |
| Social       | 2 images            | 1200×630             |
| **TOTAL**    | **~48 images**      |                      |

---

## Checklist

- [ ] Hero banner (4 responsive sizes)
- [ ] About page images (3 images)
- [ ] Leadership headshots (4 photos)
- [ ] Facility photos (6 images)
- [ ] Testimonial avatars (5 photos)
- [ ] Blog thumbnails (9 images)
- [ ] Course thumbnails (6 images)
- [ ] Event images (4 images)
- [ ] Logo (SVG + PNG variants)
- [ ] Favicons (3 sizes)
- [ ] OG/Social images (2 images)

---

## After Adding Images

Once you've added your images to `/public/images/`, let me know and I'll update all components to use your local images instead of the Unsplash placeholders.

**Contact:** If you need help optimizing images or updating the code, just ask!
