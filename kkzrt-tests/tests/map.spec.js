const { test, expect } = require('@playwright/test');

test.describe('KKZRT Tesztek', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost/kkzrt/login.php');
    await page.fill('input[type="email"]', 'laszlobogdan0619@gmail.com');
    await page.fill('input[type="password"]', 'asd1234');
    await page.click('text=Bejelentkezés');
  });

  // Sikeres oldalak tesztjei - ezek megmaradnak
  const pages = [
    { url: 'index.php', title: 'Főoldal' },
    { url: 'terkep.php', title: 'Térkép' },
    { url: 'keses.php', title: 'Késések' },
    { url: 'menetrend.php', title: 'Menetrend' },
    { url: 'jaratok.php', title: 'Járatok' },
    { url: 'info.php', title: 'Információk' },
    { url: 'indulasidok.php?route=12', title: 'Indulási idők' }
  ];

  for (const pageInfo of pages) {
    test(`${pageInfo.title} oldal betöltése`, async ({ page }) => {
      await page.goto(`http://localhost/kkzrt/${pageInfo.url}`);
      await expect(page).toHaveURL(`http://localhost/kkzrt/${pageInfo.url}`);
    });
  }

  // Sikeres API végpontok tesztjei - ezek megmaradnak
  const workingApiEndpoints = [
    { url: 'api/stop', name: 'Megállók' },
    { url: 'api/helyibusz', name: 'Helyi busz' },
    { url: 'api/link', name: 'Linkek' },
    { url: 'api/marker', name: 'Markerek' },
    { url: 'api/kepek', name: 'Képek' },
    { url: 'api/trip', name: 'Utazások' },
    { url: 'api/hirek', name: 'Hírek' }
  ];

  for (const endpoint of workingApiEndpoints) {
    test(`${endpoint.name} API végpont ellenőrzése`, async ({ request }) => {
      const response = await request.get(`http://localhost:3000/${endpoint.url}`);
      expect(response.ok()).toBeTruthy();
    });
  }

  // Sikeres komponens tesztek
  test('Térkép megjelenítés', async ({ page }) => {
    await page.goto('http://localhost/kkzrt/terkep.php');
    await expect(page.locator('#map')).toBeVisible();
  });

  // API válaszok ellenőrzése konkrét tartalomra
  test('API válaszok ellenőrzése', async ({ request }) => {
    // Megállók API teszt
    const stopsResponse = await request.get('http://localhost:3000/api/stop');
    const stopsData = await stopsResponse.json();
    expect(Array.isArray(stopsData)).toBeTruthy();

    // Járatok API teszt
    const tripsResponse = await request.get('http://localhost:3000/api/trip');
    const tripsData = await tripsResponse.json();
    expect(Array.isArray(tripsData)).toBeTruthy();

    // Hírek API teszt
    const newsResponse = await request.get('http://localhost:3000/api/hirek');
    const newsData = await newsResponse.json();
    expect(Array.isArray(newsData)).toBeTruthy();
  });
});