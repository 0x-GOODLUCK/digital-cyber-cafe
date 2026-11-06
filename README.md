# Digital Cyber Cafe – Official Business Website

A modern, fast, responsive, and professional static business website for **Digital Cyber Cafe**, managed by Rahul in Aman Nagar, Punjab, India.

---

## 1. Project Overview

Digital Cyber Cafe is a local digital service center helping residents and students with online job applications, university registrations, documentation, printing, photocopy, PAN card assistance, and ticket reservations.

This website is engineered as a **100% static, zero-dependency web application** designed specifically for free hosting on **GitHub Pages**. It requires no Node.js backend, no database subscriptions, no paid APIs, and no complex build pipelines.

### Key Highlights:
- **Clean Light Design System**: Built with modern typography (Inter & Poppins) and a professional corporate color palette (Deep Navy `#173B67` and Royal Blue `#3478D4`).
- **Original Branding & Logo**: Geometric SVG logo featuring a modern monitor, digital document, and tech accents, alongside a matching favicon.
- **Direct Online Application & Data Collection System**: Every single service has an immediate, functional interactive application form modal where customers submit their Name, Mobile Number, Service, Document attachments (PDF, JPG, PNG), and Notes.
- **Application Reference Receipt**: Automatically generates a unique tracking ID (`DCC-2026-XXXX`) and printable confirmation slip for the customer.
- **Owner Admin Inquiries Portal**: Accessible from the footer link "Owner Portal", allows Rahul to review all customer applications and **Export to CSV / Excel** with one click.
- **Google Form Integration Support**: Seamlessly configurable in `js/config.js` to also link external Google Forms for each service whenever desired.
- **Fully Responsive**: Optimized for smartphones, tablets, laptops, and ultra-wide desktop monitors.
- **Zero WhatsApp Dependency**: Compliant with client specifications—no WhatsApp buttons or widgets.
- **Strict Data Integrity**: No placeholder phone numbers, fake reviews, or invented pricing.

---

## 2. Project File Structure

```text
cafe/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Actions workflow for GitHub Pages
├── assets/
│   └── images/
│       ├── logo.svg          # Original vector logo for header & footer
│       ├── favicon.svg       # Vector favicon
│       └── hero-services.svg # Custom digital services hero illustration
├── css/
│   └── style.css             # Design system, responsive layout & animations
├── js/
│   ├── config.js             # Central configuration file for business details & form links
│   └── main.js               # Dynamic card rendering, modals, and navigation logic
├── index.html                # Semantic, SEO-optimized HTML5 entry point
└── README.md                 # Project documentation & user guide
```

---

## 3. How to Run Locally

Because this project is built with standard HTML5, CSS3, and JavaScript, no build commands or installations (`npm install`) are necessary.

### Option A: Direct Browser Preview
Double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Firefox, or Safari).

### Option B: Using VS Code Live Server
1. Open the `cafe` folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.

### Option C: Using Python Simple Server
Open your terminal inside the project directory and run:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## 4. How to Edit Business Details

All editable information is centralized in **`js/config.js`**. You do not need to modify HTML files to update business information.

Open `js/config.js` in any text editor:
```javascript
business: {
  name: "Digital Cyber Cafe",
  owner: "Rahul",
  address: {
    line1: "Aman Nagar, In Front of Evershine High School",
    line2: "Near Jalandhar Bypass",
    state: "Punjab",
    country: "India",
    full: "Aman Nagar, In Front of Evershine High School, Near Jalandhar Bypass, Punjab, India"
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aman+Nagar+In+Front+of+Evershine+High+School+Near+Jalandhar+Bypass+Punjab+India"
}
```

---

## 5. How to Add Google Form Links

Each service card features an **Apply Now** button that connects to a dedicated Google Form.

### Step 1: Create your Google Form
1. Visit [Google Forms](https://forms.google.com).
2. Create a form for your service (e.g., *PAN Card Application*).
3. Recommended form fields:
   - Full Name *(Short answer)*
   - Mobile Number *(Short answer)*
   - Required Service *(Dropdown or Multiple choice)*
   - Email *(Optional)*
   - Document Upload *(File upload field supporting PDF, JPG, PNG)*
   - Additional Notes / Queries *(Paragraph)*
4. Click **Send** in Google Forms, select the link icon, and copy the form URL.

### Step 2: Paste the URL into `js/config.js`
Open `js/config.js` and paste your link into the matching service property under `googleFormUrls`:

```javascript
googleFormUrls: {
  onlineFormFilling: "https://forms.gle/YOUR_FORM_ID_HERE",
  governmentJobApplications: "https://forms.gle/YOUR_FORM_ID_HERE",
  printingPhotocopy: "",          // Leave empty if not yet created
  panCardServices: "https://forms.gle/YOUR_FORM_ID_HERE",
  resumeMaking: "",
  ticketBooking: "",
  passportPhotos: "",
  otherDigitalServices: ""
}
```

### Friendly Coming Soon Behavior:
If a link is left empty (`""`), clicking **Apply Now** will display:
> *"Online application for this service is coming soon. Please visit our shop for assistance."*
> Along with Rahul's shop address and a direct button to get directions on Google Maps.

---

## 6. Document Upload & Security Limitations (Important)

When configuring Google Forms with a **File Upload** question:
1. **Google Account Requirement**: Google requires all respondents who upload files to sign in to a Google (Gmail) account. This is a built-in security feature by Google to prevent anonymous malicious uploads.
2. **Supported File Formats**: In your Google Form settings for the upload question, check **PDF**, **Image (JPEG/PNG)**, and set a reasonable file limit (e.g., 10 MB).
3. **Privacy**: Files uploaded via Google Forms are saved directly into Rahul's personal/business Google Drive folder. They are not stored on this public website or exposed to other visitors.

---

## 7. How to Add or Edit Services and Future Prices

All 8 services are configured in `js/config.js` under the `services` array.

To update an existing service description or add a future price:
```javascript
{
  id: "pan-card-services",
  formKey: "panCardServices",
  title: "PAN Card Services",
  shortDesc: "Hassle-free new PAN card applications, updates, and corrections.",
  detailedDesc: "Complete paperwork and online submission assistance for fresh NSDL/UTI PAN cards.",
  icon: "credit-card",
  price: "₹150" // Future pricing can be entered here
}
```

---

## 8. Free Deployment on GitHub Pages

You can host this website completely free of charge using GitHub Pages.

### Method 1: Automatic Deployment via GitHub Actions (Recommended)
1. Initialize git in your project directory (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Digital Cyber Cafe website"
   ```
2. Create a new public repository on [GitHub](https://github.com) named `digital-cyber-cafe` (or any name you choose).
3. Link your local project to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/digital-cyber-cafe.git
   git push -u origin main
   ```
4. On your GitHub repository page:
   - Go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
5. The pre-configured workflow file at `.github/workflows/deploy.yml` will automatically build and publish your website! Your site will be live at:
   `https://<YOUR-USERNAME>.github.io/digital-cyber-cafe/`

### Method 2: Classic GitHub Pages Deployment
1. Go to **Settings** > **Pages** in your repository.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**. Within 1–2 minutes, your website will be live.

---

## 9. Accessibility and Browser Compatibility

- **Semantic Landmarks**: Uses `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, and `<footer>` tags.
- **Color Contrast**: Complies with WCAG AA standards using dark text (`#172B45`) on crisp white (`#FFFFFF`) and light blue (`#F5F8FC`) backgrounds.
- **Keyboard Navigation**: Interactive elements support tab navigation with visible focus rings (`:focus-visible`) and modal dismissal via the `Escape` key.
- **Cross-Browser Tested**: Compatible with Chrome, Edge, Safari, Firefox, Opera, and mobile browsers.

---

## 10. Business Summary

- **Business**: Digital Cyber Cafe
- **Owner**: Rahul
- **Address**: Aman Nagar, In Front of Evershine High School, Near Jalandhar Bypass, Punjab, India
- **Directions**: [Google Maps Search](https://www.google.com/maps/search/?api=1&query=Aman+Nagar+In+Front+of+Evershine+High+School+Near+Jalandhar+Bypass+Punjab+India)
