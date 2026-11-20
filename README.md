# Personal Portfolio - Manoj Kumar Bathiri

A modern, responsive, and visually stunning personal portfolio website built with clean **HTML5**, **CSS3**, and **Vanilla JavaScript**.

---

## 🌟 Features Included

- **Modern Hero Section**:
  - Interactive typewriter effect cycling through developer titles.
  - Call-to-action buttons for getting in touch and viewing projects.
  - Direct contact quick-pills (Phone & Email).
  - Floating tech badge animations.
- **Theme Switcher**:
  - Seamless Dark Mode & Light Mode toggle with persistence (`localStorage`).
- **About Me Section**:
  - Detailed bio highlighting your passion and strengths.
  - Key information cards with phone number, email, and location.
  - "Copy Email" button with instant toast notification.
- **Interactive Skills Section**:
  - Visual animated progress bars for Frontend and Logic skills.
  - Tools & workflow badge grid (Git, GitHub, VS Code, DevTools, Postman, NPM).
- **Projects Showcase**:
  - Filter projects by category (**All**, **Web Apps**, **JavaScript**, **UI/Design**).
  - Feature tags, live demo buttons, and GitHub code links.
- **Contact Section**:
  - Interactive contact form with input validation and feedback toast.
  - Clickable phone call (`tel:+917601034571`), email (`mailto:manojkumar191952@gmail.com`), and WhatsApp (`wa.me`) integration.
- **Fully Responsive**:
  - Optimized for mobile phones, tablets, laptops, and ultra-wide desktops.
  - Mobile slide-out navigation menu with smooth backdrop blur.

---

## 📁 File Structure

```
Manoj/
├── index.html        # Main semantic HTML structure
├── style.css         # Modern glassmorphism CSS & Dark/Light theme styles
├── script.js         # Interactive JavaScript (theme toggle, typewriter, form, filtering)
└── README.md         # Documentation and guide
```

---

## 🚀 How to Open and View

1. **Directly in Browser**:
   - Double-click `index.html` in your file explorer, or right-click `index.html` and choose **Open with** -> **Google Chrome** (or Edge / Firefox / Brave).

2. **Using VS Code Live Server**:
   - Open the `Manoj` folder in Visual Studio Code.
   - Right click on `index.html` and click **"Open with Live Server"**.

---

## 🛠️ How to Customize

- **Add Your Profile Photo**:
  - In `index.html`, inside `<div class="avatar-inner">`, replace the placeholder `<span class="avatar-initials">MB</span>` with `<img src="your-photo.jpg" alt="Manoj Kumar Bathiri" style="width:100%; height:100%; object-fit:cover;">`.
- **Update Social Links**:
  - Search for `https://github.com` and `https://linkedin.com` in `index.html` and add your username/URL.
- **Add Your Own Projects**:
  - In `index.html`, inside `<section class="projects">`, duplicate or edit the `<div class="project-card">` elements with your project titles, descriptions, and repo links.
