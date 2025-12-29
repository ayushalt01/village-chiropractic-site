/**
 * Simple test to verify all expected pages are built correctly
 */
const fs = require('fs');
const path = require('path');

describe('Page Build Verification', () => {
  const appDir = path.join(__dirname, '../app');

  test('Home page exists', () => {
    const homePage = path.join(appDir, 'page.tsx');
    expect(fs.existsSync(homePage)).toBe(true);
  });

  test('About page exists', () => {
    const aboutPage = path.join(appDir, 'about/page.tsx');
    expect(fs.existsSync(aboutPage)).toBe(true);
  });

  test('Contact page exists', () => {
    const contactPage = path.join(appDir, 'contact/page.tsx');
    expect(fs.existsSync(contactPage)).toBe(true);
  });

  test('Services page exists', () => {
    const servicesPage = path.join(appDir, 'services/page.tsx');
    expect(fs.existsSync(servicesPage)).toBe(true);
  });

  test('New Patients page exists', () => {
    const newPatientsPage = path.join(appDir, 'newpatients/page.tsx');
    expect(fs.existsSync(newPatientsPage)).toBe(true);
  });

  test('Testimonials page exists', () => {
    const testimonialsPage = path.join(appDir, 'testimonials/page.tsx');
    expect(fs.existsSync(testimonialsPage)).toBe(true);
  });

  test('Not found page exists', () => {
    const notFoundPage = path.join(appDir, 'not-found.tsx');
    expect(fs.existsSync(notFoundPage)).toBe(true);
  });

  test('Layout file exists', () => {
    const layoutFile = path.join(appDir, 'layout.tsx');
    expect(fs.existsSync(layoutFile)).toBe(true);
  });

  test('All expected routes are present', () => {
    const expectedRoutes = [
      '/',
      '/about',
      '/contact',
      '/services',
      '/new-patients',
      '/testimonials',
    ];

    // Verify page files exist for each route
    expectedRoutes.forEach((route) => {
      let pagePath;
      if (route === '/') {
        pagePath = path.join(appDir, 'page.tsx');
      } else {
        const routeName = route.replace('/', '').replace('-', '');
        pagePath = path.join(appDir, routeName, 'page.tsx');
      }
      
      expect(fs.existsSync(pagePath)).toBe(true);
    });
  });

  test('Globals CSS file exists', () => {
    const globalsCss = path.join(appDir, 'globals.css');
    expect(fs.existsSync(globalsCss)).toBe(true);
  });

  test('Providers file exists', () => {
    const providersFile = path.join(appDir, 'providers.tsx');
    expect(fs.existsSync(providersFile)).toBe(true);
  });
});

