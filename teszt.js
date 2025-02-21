const { test, expect } = require('@playwright/test');

test.describe('Térkép Oldal Tesztek', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    // Minden teszt előtt új oldal megnyitása
    page = await browser.newPage();
    await page.goto('http://localhost/kkzrt/terkep.php');
    
    // Console üzenetek figyelése
    page.on('console', msg => {
      console.log('Browser console:', msg.text());
      if (msg.type() === 'error' && msg.text().includes('Google Maps JavaScript API')) {
        console.error('Google Maps API hiba észlelve:', msg.text());
      }
    });
  });

  test.afterEach(async () => {
    await page.close();
  });

  // 1. Oldal betöltés és alapvető elemek tesztelése
  test('Alapvető oldalelemek ellenőrzése', async () => {
    // Fejléc ellenőrzése
    await expect(page.locator('.header h1')).toHaveText('Kaposvár Közlekedési Zrt.');
    
    // Térkép konténer megjelenése
    const mapContainer = page.locator('#map');
    await expect(mapContainer).toBeVisible();
    await expect(mapContainer).toHaveCSS('height', '650px');
    
    // Inputmezők ellenőrzése
    await expect(page.locator('#start')).toBeVisible();
    await expect(page.locator('#end')).toBeVisible();
    await expect(page.locator('#travel-time')).toBeVisible();
  });

  // 2. Google Maps API betöltés ellenőrzése
  test('Google Maps API betöltés', async () => {
    // API script betöltés ellenőrzése
    const apiScript = await page.evaluate(() => {
      return document.querySelector('script[src*="maps.googleapis.com"]') !== null;
    });
    expect(apiScript).toBeTruthy();

    // API kulcs ellenőrzése
    const invalidApiKeyError = await page.evaluate(() => {
      return new Promise(resolve => {
        let hasError = false;
        const errorHandler = (event) => {
          if (event.message.includes('Google Maps JavaScript API error')) {
            hasError = true;
          }
        };
        window.addEventListener('error', errorHandler);
        setTimeout(() => {
          window.removeEventListener('error', errorHandler);
          resolve(hasError);
        }, 2000);
      });
    });
    
    if (invalidApiKeyError) {
      console.warn('⚠️ Google Maps API kulcs hiba: Az API kulcs lejárt vagy érvénytelen');
    }
  });

  // 3. Útvonaltervező gombok és funkciók tesztelése
  test('Útvonaltervező gombok működése', async () => {
    // Közlekedési mód gombok tesztelése
    const transitButtons = await page.locator('.transit-mode-btn').all();
    for (const button of transitButtons) {
      await button.click();
      await expect(button).toHaveClass(/active/);
      
      // Ellenőrizzük, hogy csak egy gomb aktív
      const activeButtons = await page.locator('.transit-mode-btn.active').count();
      expect(activeButtons).toBe(1);
    }

    // Complex route select megjelenése/eltűnése
    await page.locator('.transit-mode-btn[data-mode="complex"]').click();
    await expect(page.locator('#complex-route-select')).toBeVisible();
    
    await page.locator('.transit-mode-btn[data-mode="bus"]').click();
    await expect(page.locator('#complex-route-select')).toBeHidden();
  });

  // 4. Útvonaltervezés tesztelése
  test('Útvonaltervezés folyamat', async () => {
    // Tesztadatok megadása
    await page.fill('#start', 'Kaposvár, Vasútállomás');
    await page.fill('#end', 'Kaposvár, Egyetem');
    
    // Dátum és idő beállítása
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateTimeString = tomorrow.toISOString().slice(0, 16);
    await page.fill('#travel-time', dateTimeString);

    // Útvonalkeresés gomb tesztelése
    const findRouteButton = page.locator('#find-route');
    await expect(findRouteButton).toBeEnabled();
    await findRouteButton.click();

    // Eredmények megjelenésének ellenőrzése
    await expect(page.locator('#route-details')).toBeVisible();
    await expect(page.locator('#route-info')).not.toBeEmpty();
  });

  // 5. Helyi járat kiválasztás tesztelése
  test('Helyi járat kiválasztás', async () => {
    // Complex mode aktiválása
    await page.locator('.transit-mode-btn[data-mode="complex"]').click();
    
    // Select mező ellenőrzése
    const routeSelect = page.locator('#complex-route');
    await expect(routeSelect).toBeVisible();
    
    // Járat kiválasztása
    await routeSelect.selectOption('20');
    
    // Megállók megjelenésének ellenőrzése
    await expect(page.locator('#route-info')).toBeVisible();
  });

  // 6. Térképmarkerek és útvonalak tesztelése
  test('Térképmarkerek és útvonalak', async () => {
    // Útvonal tervezése
    await page.fill('#start', 'Kaposvár, Vasútállomás');
    await page.fill('#end', 'Kaposvár, Egyetem');
    await page.click('#find-route');

    // Markerek megjelenésének ellenőrzése
    const markersExist = await page.evaluate(() => {
      return document.querySelectorAll('.gm-style img[src*="markers"]').length > 0;
    });
    expect(markersExist).toBeTruthy();
  });

  // 7. Hibaüzenetek és visszajelzések tesztelése
  test('Hibaüzenetek és visszajelzések', async () => {
    // Üres mezőkkel próbálkozás
    await page.click('#find-route');
    
    // Alert megjelenésének ellenőrzése
    const alertVisible = await page.evaluate(() => {
      return document.querySelector('.alert') !== null;
    });
    expect(alertVisible).toBeTruthy();

    // Érvénytelen cím megadása
    await page.fill('#start', 'Nemlétező utca 123');
    await page.click('#find-route');
    
    // Hibaüzenet ellenőrzése
    await expect(page.locator('.alert')).toContainText('nem található');
  });

  // 8. Teljesítmény metrikák
  test('Teljesítmény metrikák', async () => {
    // Oldal betöltési idő mérése
    const timing = await page.evaluate(() => {
      return {
        loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
        domReady: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
      };
    });
    
    expect(timing.loadTime).toBeLessThan(5000); // Max 5 másodperc
    expect(timing.domReady).toBeLessThan(3000); // Max 3 másodperc
  });

  // 9. Responsive design tesztelése
  test('Responsive design', async () => {
    // Mobil nézet
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('#map')).toBeVisible();
    await expect(page.locator('.menu-btn')).toBeVisible();

    // Tablet nézet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('#map')).toBeVisible();

    // Desktop nézet
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('#map')).toBeVisible();
  });

  // 10. Console hibák vizsgálata
  test('Console hibák elemzése', async () => {
    const consoleErrors = [];
    
    // Console hibák gyűjtése
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Oldal újratöltése
    await page.reload();

    // Várunk kicsit a lehetséges hibákra
    await page.waitForTimeout(2000);

    // Hibák elemzése
    for (const error of consoleErrors) {
      if (error.includes('Google Maps JavaScript API')) {
        console.warn('⚠️ Google Maps API hiba:', error);
      } else {
        fail(`Nem várt console hiba: ${error}`);
      }
    }
  });
});

// Teszt konfiguráció
module.exports = {
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  use: {
    baseURL: 'http://localhost/kkzrt/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  expect: {
    timeout: 10000,
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'test-results/html' }],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ]
};

// Segédfüggvények a tesztekhez
const helpers = {
  // Google Maps API kulcs érvényességének ellenőrzése
  async checkGoogleMapsApiKey(page) {
    return await page.evaluate(() => {
      return new Promise(resolve => {
        let status = {
          isValid: false,
          error: null
        };
        
        window.gm_authFailure = () => {
          status.error = 'API kulcs érvénytelen vagy lejárt';
          resolve(status);
        };
        
        setTimeout(() => {
          if (!status.error && window.google && window.google.maps) {
            status.isValid = true;
          }
          resolve(status);
        }, 2000);
      });
    });
  },

  // Útvonaltervezés tesztelése
  async testRouteCalculation(page, start, end) {
    await page.fill('#start', start);
    await page.fill('#end', end);
    await page.click('#find-route');
    
    const routeInfo = await page.locator('#route-info');
    const isVisible = await routeInfo.isVisible();
    const content = await routeInfo.textContent();
    
    return {
      success: isVisible && content.length > 0,
      details: content
    };
  },

  // Térképmarkerek ellenőrzése
  async checkMapMarkers(page) {
    return await page.evaluate(() => {
      const markers = document.querySelectorAll('.gm-style img[src*="markers"]');
      return {
        count: markers.length,
        positions: Array.from(markers).map(marker => ({
          top: marker.style.top,
          left: marker.style.left
        }))
      };
    });
  }
};