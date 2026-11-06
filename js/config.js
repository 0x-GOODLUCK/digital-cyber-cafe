/**
 * DIGITAL CYBER CAFE - CENTRAL CONFIGURATION FILE
 * 
 * Edit this file to update business details, add Google Form links,
 * customize service descriptions, or set future service pricing.
 * 
 * NOTE FOR OWNER (Rahul):
 * - To link a service to a Google Form, paste your Google Form URL in the `googleFormUrls` section.
 * - If left empty ("") or as a placeholder, the website will automatically display a friendly fallback:
 *   "Online application for this service is coming soon. Please visit our shop for assistance."
 * - When ready, future prices can be filled in the `price` property of each service.
 */

const SITE_CONFIG = {
  // Business Information
  business: {
    name: "Digital Cyber Cafe",
    owner: "Rahul",
    tagline: "Your Trusted Partner for Digital Services",
    subheading: "Making online services, government applications and digital documentation simple, accessible and convenient.",
    address: {
      line1: "Aman Nagar, In Front of Evershine High School",
      line2: "Near Jalandhar Bypass",
      state: "Punjab",
      country: "India",
      full: "Aman Nagar, In Front of Evershine High School, Near Jalandhar Bypass, Punjab, India"
    },
    // Google Maps search query link based on the exact physical address
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aman+Nagar+In+Front+of+Evershine+High+School+Near+Jalandhar+Bypass+Punjab+India"
  },

  /**
   * Google Sheet Webhook URL (Solution 2)
   * Connects the on-site application form directly to your Google Sheet!
   * Every on-site submission will automatically write a new row to your sheet in real-time.
   */
  googleSheetWebhookUrl: "",

  /**
   * Google Form URLs for Each Service
   * Replace the empty string "" with your actual Google Form URL when ready.
   * Example: "https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform"
   */
  googleFormUrls: {
    onlineFormFilling: "https://docs.google.com/forms/d/e/1FAIpQLSerOcirQHAROvJbv37-b1nwvrGn7Wic8CeAJWL8Hi21ftNfVg/viewform",
    governmentJobApplications: "https://docs.google.com/forms/d/e/1FAIpQLSerOcirQHAROvJbv37-b1nwvrGn7Wic8CeAJWL8Hi21ftNfVg/viewform",
    printingPhotocopy: "https://docs.google.com/forms/d/e/1FAIpQLSerOcirQHAROvJbv37-b1nwvrGn7Wic8CeAJWL8Hi21ftNfVg/viewform",
    panCardServices: "https://docs.google.com/forms/d/e/1FAIpQLSerOcirQHAROvJbv37-b1nwvrGn7Wic8CeAJWL8Hi21ftNfVg/viewform",
    resumeMaking: "https://docs.google.com/forms/d/e/1FAIpQLSerOcirQHAROvJbv37-b1nwvrGn7Wic8CeAJWL8Hi21ftNfVg/viewform",
    ticketBooking: "https://docs.google.com/forms/d/e/1FAIpQLSerOcirQHAROvJbv37-b1nwvrGn7Wic8CeAJWL8Hi21ftNfVg/viewform",
    passportPhotos: "https://docs.google.com/forms/d/e/1FAIpQLSerOcirQHAROvJbv37-b1nwvrGn7Wic8CeAJWL8Hi21ftNfVg/viewform",
    otherDigitalServices: "https://docs.google.com/forms/d/e/1FAIpQLSerOcirQHAROvJbv37-b1nwvrGn7Wic8CeAJWL8Hi21ftNfVg/viewform"
  },

  /**
   * Services Catalog
   * Contains the 8 core services offered by Digital Cyber Cafe.
   * `price`: Kept as null or "" for now as per instructions (ready for future updates).
   */
  services: [
    {
      id: "online-form-filling",
      formKey: "onlineFormFilling",
      title: "Online Form Filling",
      shortDesc: "Accurate online submission for admission forms, university portals, certificates, and citizen welfare schemes.",
      detailedDesc: "Professional assistance with all types of digital application forms, university registrations, scholarship submissions, and government portal registrations with zero errors.",
      icon: "file-text",
      price: null // Future price placeholder (e.g. "Starting from ₹50")
    },
    {
      id: "govt-job-applications",
      formKey: "governmentJobApplications",
      title: "Government Job Applications",
      shortDesc: "Complete application submission for SSC, UPSC, Banking, Railway, Defence, State exams, and admit cards.",
      detailedDesc: "End-to-end guidance for government recruitment forms, mandatory document resizing, photo/signature formatting, and timely admit card downloads.",
      icon: "briefcase",
      price: null
    },
    {
      id: "printing-photocopy",
      formKey: "printingPhotocopy",
      title: "Printing & Photocopy",
      shortDesc: "Crisp black & white and vibrant colour printing, high-speed document photocopying, scanning, and spiral binding.",
      detailedDesc: "High-resolution prints for study materials, official documents, project reports, and legal papers with fast turnaround.",
      icon: "printer",
      price: null
    },
    {
      id: "pan-card-services",
      formKey: "panCardServices",
      title: "PAN Card Services",
      shortDesc: "Hassle-free new PAN card applications, updates, name/DOB corrections, and reprint requests with verified guidance.",
      detailedDesc: "Complete paperwork and online submission assistance for fresh NSDL/UTI PAN cards, address corrections, and minor-to-major conversions.",
      icon: "credit-card",
      price: null
    },
    {
      id: "resume-making",
      formKey: "resumeMaking",
      title: "Resume Making",
      shortDesc: "Professional CV and resume creation tailored for freshers, experienced job seekers, and technical positions.",
      detailedDesc: "Clean, ATS-friendly modern resumes, biodata formats for marriages, and cover letters formatted to leave a great impression.",
      icon: "file-check",
      price: null
    },
    {
      id: "ticket-booking",
      formKey: "ticketBooking",
      title: "Ticket Booking",
      shortDesc: "Convenient online booking assistance for train (IRCTC), bus, flight reservations, and status inquiries.",
      detailedDesc: "Instant online travel ticket booking, PNR status tracking, cancellation help, and printouts for hassle-free travel.",
      icon: "ticket",
      price: null
    },
    {
      id: "passport-photos",
      formKey: "passportPhotos",
      title: "Passport Size Photos",
      shortDesc: "Instant high-quality passport photographs with white or blue backgrounds strictly matching official specifications.",
      detailedDesc: "Standard passport photos for government forms, visas, ID cards, driving licenses, and school admissions printed instantly on premium photo paper.",
      icon: "camera",
      price: null
    },
    {
      id: "other-digital-services",
      formKey: "otherDigitalServices",
      title: "Other Digital Services",
      shortDesc: "Digital utility bill payments, email assistance, document scanning & conversion, Aadhaar card services help, and more.",
      detailedDesc: "All-in-one digital support for everyday needs: electricity bills, internet registrations, file conversions (PDF to Word), and digital inquiries.",
      icon: "layers",
      price: null
    }
  ],

  /**
   * Why Choose Us Feature Cards
   */
  whyChooseUs: [
    {
      title: "Convenient Digital Services",
      desc: "Get all your documentation, applications, and printing tasks done smoothly without technical hassles or confusion.",
      icon: "check-circle"
    },
    {
      title: "Multiple Online Application Services",
      desc: "From central & state government exams to college admissions and welfare schemes, we manage all your online submissions.",
      icon: "layout-grid"
    },
    {
      title: "Customer-Friendly Assistance",
      desc: "Personal attention by Rahul to ensure your details are entered accurately and your documents meet all exact specifications.",
      icon: "user-check"
    },
    {
      title: "One Place for Everyday Digital Needs",
      desc: "A single, dependable local centre for form filling, printing, photo generation, and digital utility payments in Aman Nagar.",
      icon: "map-pin"
    }
  ]
};

// Export to window for vanilla JS browser usage
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
