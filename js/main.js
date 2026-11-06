/**
 * DIGITAL CYBER CAFE - MAIN INTERACTIVITY & APPLICATION SCRIPT
 * Supports both Direct On-Site Data Collection & Configured Google Form Links
 */

document.addEventListener('DOMContentLoaded', () => {
  // SVG Icon definitions (Feather / Lucide style crisp SVGs)
  const ICONS = {
    'file-text': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    'briefcase': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    'printer': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
    'credit-card': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    'file-check': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>`,
    'ticket': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
    'camera': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    'layers': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    'check-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    'layout-grid': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    'user-check': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
    'map-pin': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    'arrow-right': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    'external-link': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    'info': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    'upload': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    'download': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    'printer-sm': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`
  };

  const getIcon = (name) => ICONS[name] || ICONS['file-text'];

  // DOM Elements
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const servicesContainer = document.getElementById('services-grid-container');
  const whyGridContainer = document.getElementById('why-grid-container');
  const modalBackdrop = document.getElementById('application-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');
  const modalActionBtn = document.getElementById('modal-action-btn');
  const modalServiceTitle = document.getElementById('modal-service-title');
  const modalServiceBadge = document.getElementById('modal-service-badge');
  const modalBodyContent = document.getElementById('modal-body-content');
  const modalFooter = document.querySelector('.modal-footer');

  // Load config
  const config = window.SITE_CONFIG || {
    business: {
      name: "Digital Cyber Cafe",
      owner: "Rahul",
      address: { full: "Aman Nagar, In Front of Evershine High School, Near Jalandhar Bypass, Punjab, India" },
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aman+Nagar+In+Front+of+Evershine+High+School+Near+Jalandhar+Bypass+Punjab+India"
    },
    googleFormUrls: {},
    services: [],
    whyChooseUs: []
  };

  // Local Storage Applications Store Key
  const STORAGE_KEY = 'digital_cyber_cafe_applications';

  function getSavedApplications() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveApplication(appData) {
    const list = getSavedApplications();
    list.unshift(appData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  // 1. Render Services Cards
  if (servicesContainer && config.services) {
    servicesContainer.innerHTML = '';
    config.services.forEach(service => {
      const card = document.createElement('article');
      card.className = 'service-card';
      card.setAttribute('data-service-id', service.id);

      card.innerHTML = `
        <div class="service-icon-wrap" aria-hidden="true">
          ${getIcon(service.icon)}
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.shortDesc}</p>
        <div class="service-action">
          <button type="button" class="btn btn-apply" data-service-id="${service.id}" aria-label="Apply now for ${service.title}">
            <span>Apply Now</span>
            ${getIcon('arrow-right')}
          </button>
        </div>
      `;

      servicesContainer.appendChild(card);
    });
  }

  // 2. Render Why Choose Us Cards
  if (whyGridContainer && config.whyChooseUs) {
    whyGridContainer.innerHTML = '';
    config.whyChooseUs.forEach(item => {
      const card = document.createElement('div');
      card.className = 'why-card';
      card.innerHTML = `
        <div class="why-icon-wrap" aria-hidden="true">
          ${getIcon(item.icon)}
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      `;
      whyGridContainer.appendChild(card);
    });
  }

  // 3. Mobile Navigation Toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 4. Header Shadow on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 5. Active Nav Highlight on Scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 6. Application System: Handle "Apply Now" Button Clicks
  document.addEventListener('click', (e) => {
    const applyBtn = e.target.closest('.btn-apply') || e.target.closest('[data-action="apply-service"]');
    if (!applyBtn) return;

    const serviceId = applyBtn.getAttribute('data-service-id');
    const service = config.services.find(s => s.id === serviceId) || config.services[0];

    openApplicationFormModal(service);
  });

  // Open the Interactive Data Collection Form for the selected service
  function openApplicationFormModal(service) {
    modalServiceBadge.textContent = "Online Service Application";
    modalServiceTitle.textContent = service.title;
    const modalCard = modalBackdrop.querySelector('.modal-card');
    if (modalCard) modalCard.classList.remove('modal-card-large');

    const formUrl = (config.googleFormUrls && service.formKey) 
      ? (config.googleFormUrls[service.formKey] || "").trim() 
      : "";
    const hasExternalGoogleForm = formUrl && /^https?:\/\//i.test(formUrl);

    // Build service options for the select element
    const serviceOptionsHtml = config.services.map(s => {
      const isSelected = s.id === service.id ? 'selected' : '';
      return `<option value="${s.title}" ${isSelected}>${s.title}</option>`;
    }).join('');

    modalBodyContent.innerHTML = `
      ${hasExternalGoogleForm ? `
        <div class="external-form-callout">
          <p>An official Google Form is also linked for this service.</p>
          <a href="${formUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="padding: 0.35rem 0.75rem; font-size: 0.78rem;">
            <span>Open Google Form</span>
            ${getIcon('external-link')}
          </a>
        </div>
      ` : ''}

      <form id="online-application-form" class="app-form">
        <div class="form-group">
          <label class="form-label" for="app-service">Selected Service <span class="required">*</span></label>
          <select id="app-service" class="form-select" required>
            ${serviceOptionsHtml}
          </select>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="app-fullname">Full Name <span class="required">*</span></label>
            <input type="text" id="app-fullname" class="form-input" placeholder="Your full name" required autocomplete="name">
          </div>
          <div class="form-group">
            <label class="form-label" for="app-mobile">Mobile Number <span class="required">*</span></label>
            <input type="tel" id="app-mobile" class="form-input" placeholder="10-digit mobile number" pattern="[0-9]{10}" required autocomplete="tel">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-email">Email Address <span style="font-weight: 400; color: #64748B;">(Optional)</span></label>
          <input type="email" id="app-email" class="form-input" placeholder="name@example.com" autocomplete="email">
        </div>

        <div class="form-group">
          <label class="form-label">Attach Document / Photo <span style="font-weight: 400; color: #64748B;">(PDF, JPG, PNG)</span></label>
          <div class="file-upload-zone" id="file-drop-zone">
            <input type="file" id="app-file" accept=".pdf,.jpg,.jpeg,.png">
            <div class="file-upload-icon">${getIcon('upload')}</div>
            <div class="file-upload-text">Click to choose or drag document file here</div>
            <div class="file-upload-subtext">Supports PDF, JPG, PNG up to 15MB</div>
            <div class="file-selected-badge" id="file-badge">
              <span id="file-name-text">No file selected</span>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="app-notes">Additional Details / Instructions <span style="font-weight: 400; color: #64748B;">(Optional)</span></label>
          <textarea id="app-notes" class="form-textarea" placeholder="Provide any specific requirements, exam name, category, or urgent notes..."></textarea>
        </div>

        <div style="font-size: 0.8rem; color: #64748B; background: #F8FAFC; padding: 0.6rem 0.85rem; border-radius: 6px; border-left: 3px solid #3478D4;">
          Your details are submitted directly to Digital Cyber Cafe (Managed by Rahul). Please bring original documents when visiting the shop in Aman Nagar.
        </div>
      </form>
    `;

    // File input event listener
    const fileInput = document.getElementById('app-file');
    const fileBadge = document.getElementById('file-badge');
    const fileNameText = document.getElementById('file-name-text');
    if (fileInput && fileBadge) {
      fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
          const file = fileInput.files[0];
          fileNameText.textContent = `Attached: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
          fileBadge.style.display = 'inline-flex';
        } else {
          fileBadge.style.display = 'none';
        }
      });
    }

    // Modal buttons
    modalFooter.style.display = 'flex';
    modalDismissBtn.textContent = "Cancel";
    modalActionBtn.textContent = "Submit Application";
    modalActionBtn.className = "btn btn-primary btn-sm";
    modalActionBtn.style.display = "inline-flex";

    // Handle Form Submit
    modalActionBtn.onclick = () => {
      const form = document.getElementById('online-application-form');
      if (!form.reportValidity()) {
        return;
      }

      const selectedService = document.getElementById('app-service').value;
      const fullName = document.getElementById('app-fullname').value.trim();
      const mobile = document.getElementById('app-mobile').value.trim();
      const email = document.getElementById('app-email').value.trim();
      const notes = document.getElementById('app-notes').value.trim();
      const attachedFileName = fileInput.files.length > 0 ? fileInput.files[0].name : "None attached (in-person)";

      // Generate a clean application tracking number
      const trackingId = "DCC-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
      const submissionDate = new Date().toLocaleString();

      const newApp = {
        trackingId,
        date: submissionDate,
        service: selectedService,
        fullName,
        mobile,
        email: email || "N/A",
        fileName: attachedFileName,
        notes: notes || "No additional notes",
        status: "Received"
      };

      // Save application
      saveApplication(newApp);

      // Render Confirmation Receipt Slip
      showApplicationReceipt(newApp);
    };

    openModal();
  }

  // Display Receipt Slip After Submission
  function showApplicationReceipt(app) {
    modalServiceBadge.textContent = "Application Submitted Successfully";
    modalServiceTitle.textContent = "Receipt Confirmation";

    modalBodyContent.innerHTML = `
      <div class="application-receipt">
        <div class="receipt-icon-wrap" aria-hidden="true">
          ${getIcon('check-circle')}
        </div>
        <h4 style="font-size: 1.25rem; color: #173B67; margin-bottom: 0.25rem;">Thank You, ${app.fullName}!</h4>
        <p style="font-size: 0.9rem; color: #64748B;">Your digital application details have been safely received.</p>
        
        <div>
          <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B; display: block; margin-top: 0.75rem;">Application Reference Number</span>
          <span class="receipt-id-tag">${app.trackingId}</span>
        </div>

        <table class="receipt-table">
          <tr>
            <td>Service Requested:</td>
            <td><strong>${app.service}</strong></td>
          </tr>
          <tr>
            <td>Applicant Name:</td>
            <td>${app.fullName}</td>
          </tr>
          <tr>
            <td>Contact Mobile:</td>
            <td>${app.mobile}</td>
          </tr>
          <tr>
            <td>Document:</td>
            <td>${app.fileName}</td>
          </tr>
          <tr>
            <td>Submission Time:</td>
            <td>${app.date}</td>
          </tr>
        </table>

        <div style="background-color: #F8FAFC; border: 1px dashed #CBD5E1; border-radius: 8px; padding: 1rem; text-align: left; font-size: 0.86rem; color: #172B45;">
          <strong style="display: block; color: #173B67; margin-bottom: 0.35rem;">Next Steps:</strong>
          Please visit <strong>Digital Cyber Cafe</strong> with your original documents and reference ID <strong>${app.trackingId}</strong> for instant processing.<br>
          <span style="color: #64748B; display: block; margin-top: 0.4rem;">
            Location: Aman Nagar, In Front of Evershine High School, Near Jalandhar Bypass, Punjab.
          </span>
        </div>
      </div>
    `;

    modalDismissBtn.textContent = "Close";
    modalActionBtn.innerHTML = `
      ${getIcon('printer-sm')}
      <span>Print Receipt</span>
    `;
    modalActionBtn.className = "btn btn-secondary btn-sm";
    modalActionBtn.onclick = () => {
      window.print();
    };
  }

  // 7. Owner Portal (View All Inquiries & Export to Excel/CSV)
  const ownerPortalBtn = document.getElementById('owner-portal-btn');
  if (ownerPortalBtn) {
    ownerPortalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openOwnerPortal();
    });
  }

  function openOwnerPortal() {
    modalServiceBadge.textContent = "Administrator Portal";
    modalServiceTitle.textContent = "Customer Applications & Inquiries";
    const modalCard = modalBackdrop.querySelector('.modal-card');
    if (modalCard) modalCard.classList.add('modal-card-large');

    const applications = getSavedApplications();

    if (applications.length === 0) {
      modalBodyContent.innerHTML = `
        <div class="empty-inquiries-state">
          <p style="font-size: 1.1rem; color: #173B67; font-weight: 600; margin-bottom: 0.5rem;">No Applications Submitted Yet</p>
          <p style="font-size: 0.9rem;">When customers click "Apply Now" on any service and submit their form, their inquiries and document names will appear here automatically.</p>
        </div>
      `;
      modalActionBtn.style.display = "none";
    } else {
      const rowsHtml = applications.map((item, index) => `
        <tr>
          <td><strong>${item.trackingId}</strong></td>
          <td>${item.date}</td>
          <td><strong>${item.fullName}</strong></td>
          <td>${item.mobile}</td>
          <td>${item.service}</td>
          <td>${item.fileName}</td>
          <td><span style="background: #DCFCE7; color: #166534; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 0.75rem;">${item.status}</span></td>
        </tr>
      `).join('');

      modalBodyContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <p style="font-size: 0.9rem; color: #64748B; margin: 0;">Total Applications Received: <strong>${applications.length}</strong></p>
          <button type="button" id="clear-inquiries-btn" style="font-size: 0.8rem; color: #EF4444; text-decoration: underline;">Clear History</button>
        </div>
        <div class="inquiries-table-wrap">
          <table class="inquiries-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Service</th>
                <th>Document</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      `;

      // Clear button listener
      const clearBtn = document.getElementById('clear-inquiries-btn');
      if (clearBtn) {
        clearBtn.onclick = () => {
          if (confirm("Are you sure you want to clear all saved applications?")) {
            localStorage.removeItem(STORAGE_KEY);
            openOwnerPortal();
          }
        };
      }

      // Export to CSV button
      modalActionBtn.innerHTML = `
        ${getIcon('download')}
        <span>Export to Excel / CSV</span>
      `;
      modalActionBtn.className = "btn btn-primary btn-sm";
      modalActionBtn.style.display = "inline-flex";
      modalActionBtn.onclick = () => {
        exportInquiriesToCSV(applications);
      };
    }

    modalDismissBtn.textContent = "Close";
    openModal();
  }

  // CSV Exporter
  function exportInquiriesToCSV(list) {
    let csv = "Reference ID,Date,Applicant Name,Mobile,Email,Service,Document,Notes,Status\n";
    list.forEach(item => {
      const row = [
        `"${item.trackingId}"`,
        `"${item.date}"`,
        `"${item.fullName}"`,
        `"${item.mobile}"`,
        `"${item.email}"`,
        `"${item.service}"`,
        `"${item.fileName}"`,
        `"${item.notes.replace(/"/g, '""')}"`,
        `"${item.status}"`
      ];
      csv += row.join(",") + "\n";
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', url);
    downloadAnchor.setAttribute('download', `digital_cyber_cafe_applications_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  }

  // Modal display helpers
  function openModal() {
    modalBackdrop.classList.add('active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      modalCloseBtn.focus();
    }, 100);
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Dynamic Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
