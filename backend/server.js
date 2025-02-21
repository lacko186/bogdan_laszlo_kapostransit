const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(cors());
app.use(express.json());

// Adatbázis kapcsolat
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kaposvar',
    port: 3306,
    charset: 'utf8mb4',
    connectTimeout: 10000,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}).promise();

// Adatbázis kapcsolat tesztelése
db.connect()
    .then(() => console.log('Sikeres adatbázis kapcsolódás'))
    .catch((err) => {
        console.error('Adatbázis kapcsolódási hiba:', err);
        process.exit(1);
    });

// Adatbázis hibakezelés
db.on('error', (err) => {
    console.error('Adatbázis hiba:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Az adatbázis kapcsolat megszakadt.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Túl sok kapcsolat az adatbázishoz.');
    }
    if (err.code === 'ECONNREFUSED') {
        console.error('Az adatbázis kapcsolat elutasítva.');
    }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Hiba:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Hibaüzenet
 *         details:
 *           type: string
 *           description: Részletes hibaüzenet (csak fejlesztői módban)
 *     Siker:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Sikeres művelet üzenete
 *     Kaposvar:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           description: Egyedi azonosító
 *         nev:
 *           type: string
 *           description: Megnevezés
 *         cim:
 *           type: string
 *           description: Cím
 *         telefon:
 *           type: string
 *           description: Telefonszám
 *         email:
 *           type: string
 *           description: Email cím
 *         nyitvatartas:
 *           type: string
 *           description: Nyitvatartási idő
 *     KKZRT:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           description: Egyedi azonosító
 *         jaratszam:
 *           type: string
 *           description: Járat száma
 *         indulas:
 *           type: string
 *           description: Indulási idő
 *         erkezes:
 *           type: string
 *           description: Érkezési idő
 *         utvonal:
 *           type: string
 *           description: Útvonal leírása
 *         menetido:
 *           type: integer
 *           description: Menetidő percben
 */

/**
 * @swagger
 * /api/{tabla}:
 *   get:
 *     tags: [Műveletek]
 *     summary: Összes rekord lekérése
 *     description: Lekéri az összes rekordot a megadott táblából
 *     parameters:
 *       - in: path
 *         name: tabla
 *         required: true
 *         schema:
 *           type: string
 *         description: Tábla neve
 *     responses:
 *       200:
 *         description: Sikeres lekérés
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 anyOf:
 *                   - $ref: '#/components/schemas/Kaposvar'
 *                   - $ref: '#/components/schemas/KKZRT'
 *       500:
 *         description: Szerver hiba
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hiba'
 *   post:
 *     tags: [Műveletek]
 *     summary: Új rekord létrehozása
 *     description: Új rekord hozzáadása a megadott táblához
 *     parameters:
 *       - in: path
 *         name: tabla
 *         required: true
 *         schema:
 *           type: string
 *         description: Tábla neve
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             anyOf:
 *               - $ref: '#/components/schemas/Kaposvar'
 *               - $ref: '#/components/schemas/KKZRT'
 *     responses:
 *       201:
 *         description: Sikeres létrehozás
 *       500:
 *         description: Szerver hiba
 */

/**
 * @swagger
 * /api/{tabla}/{id}:
 *   get:
 *     tags: [Műveletek]
 *     summary: Egy rekord lekérése
 *     description: Egy rekord lekérése azonosító alapján
 *     parameters:
 *       - in: path
 *         name: tabla
 *         required: true
 *         schema:
 *           type: string
 *         description: Tábla neve
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Rekord azonosító
 *     responses:
 *       200:
 *         description: Sikeres lekérés
 *         content:
 *           application/json:
 *             schema:
 *               anyOf:
 *                 - $ref: '#/components/schemas/Kaposvar'
 *                 - $ref: '#/components/schemas/KKZRT'
 *       404:
 *         description: Nem található
 *       500:
 *         description: Szerver hiba
 *   put:
 *     tags: [Műveletek]
 *     summary: Rekord módosítása
 *     description: Teljes rekord módosítása
 *     parameters:
 *       - in: path
 *         name: tabla
 *         required: true
 *         schema:
 *           type: string
 *         description: Tábla neve
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Rekord azonosító
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             anyOf:
 *               - $ref: '#/components/schemas/Kaposvar'
 *               - $ref: '#/components/schemas/KKZRT'
 *     responses:
 *       200:
 *         description: Sikeres módosítás
 *       404:
 *         description: Nem található
 *       500:
 *         description: Szerver hiba
 *   patch:
 *     tags: [Műveletek]
 *     summary: Részleges módosítás
 *     description: Rekord részleges módosítása
 *     parameters:
 *       - in: path
 *         name: tabla
 *         required: true
 *         schema:
 *           type: string
 *         description: Tábla neve
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Rekord azonosító
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             anyOf:
 *               - $ref: '#/components/schemas/Kaposvar'
 *               - $ref: '#/components/schemas/KKZRT'
 *     responses:
 *       200:
 *         description: Sikeres módosítás
 *       404:
 *         description: Nem található
 *       500:
 *         description: Szerver hiba
 *   delete:
 *     tags: [Műveletek]
 *     summary: Rekord törlése
 *     description: Rekord törlése azonosító alapján
 *     parameters:
 *       - in: path
 *         name: tabla
 *         required: true
 *         schema:
 *           type: string
 *         description: Tábla neve
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Rekord azonosító
 *     responses:
 *       200:
 *         description: Sikeres törlés
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Siker'
 *       404:
 *         description: Nem található
 *       500:
 *         description: Szerver hiba
 */

// CRUD végpontok generálása
function createCrudEndpoints(table) {
    // GET összes rekord
    app.get(`/api/${table}`, async (req, res) => {
        try {
            const [rows] = await db.query(`SELECT * FROM \`${table}\``);
            res.json(rows);
        } catch (err) {
            console.error(`Hiba a GET /${table} műveletnél:`, err);
            res.status(500).json({ 
                error: 'Adatbázis hiba',
                details: process.env.NODE_ENV === 'development' ? err.message : undefined 
            });
        }
    });

    // POST új rekord
    app.post(`/api/${table}`, async (req, res) => {
        try {
            const [result] = await db.query(`INSERT INTO \`${table}\` SET ?`, [req.body]);
            res.status(201).json({ id: result.insertId, ...req.body });
        } catch (err) {
            console.error(`Hiba a POST /${table} műveletnél:`, err);
            res.status(500).json({ 
                error: 'Adatbázis hiba',
                details: process.env.NODE_ENV === 'development' ? err.message : undefined 
            });
        }
    });

    // GET egy rekord
    app.get(`/api/${table}/:id`, async (req, res) => {
        try {
            const [rows] = await db.query(`SELECT * FROM \`${table}\` WHERE id = ?`, [req.params.id]);
            if (rows.length === 0) {
                res.status(404).json({ message: 'Nem található' });
            } else {
                res.json(rows[0]);
            }
        } catch (err) {
            console.error(`Hiba a GET /${table}/${req.params.id} műveletnél:`, err);
            res.status(500).json({ 
                error: 'Adatbázis hiba',
                details: process.env.NODE_ENV === 'development' ? err.message : undefined 
            });
        }
    });

    // PUT módosítás
    app.put(`/api/${table}/:id`, async (req, res) => {
        try {
            const [result] = await db.query(`UPDATE \`${table}\` SET ? WHERE id = ?`, [req.body, req.params.id]);
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Nem található' });
            } else {
                res.json({ id: req.params.id, ...req.body });
            }
        } catch (err) {
            console.error(`Hiba a PUT /${table}/${req.params.id} műveletnél:`, err);
            res.status(500).json({ 
                error: 'Adatbázis hiba',
                details: process.env.NODE_ENV === 'development' ? err.message : undefined 
            });
        }
    });

    // PATCH részleges módosítás
    app.patch(`/api/${table}/:id`, async (req, res) => {
        try {
            const [result] = await db.query(`UPDATE \`${table}\` SET ? WHERE id = ?`, [req.body, req.params.id]);
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Nem található' });
            } else {
                res.json({ id: req.params.id, ...req.body });
            }
        } catch (err) {
            console.error(`Hiba a PATCH /${table}/${req.params.id} műveletnél:`, err);
            res.status(500).json({ 
                error: 'Adatbázis hiba',
                details: process.env.NODE_ENV === 'development' ? err.message : undefined 
            });
        }
    });

    // DELETE törlés
    app.delete(`/api/${table}/:id`, async (req, res) => {
        try {
            const [result] = await db.query(`DELETE FROM \`${table}\` WHERE id = ?`, [req.params.id]);
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Nem található' });
            } else {
                res.json({ message: 'Sikeresen törölve' });
            }
        } catch (err) {
            console.error(`Hiba a DELETE /${table}/${req.params.id} műveletnél:`, err);
            res.status(500).json({ 
                error: 'Adatbázis hiba',
                details: process.env.NODE_ENV === 'development' ? err.message : undefined 
            });
        }
    });
}

// Végpontok létrehozása minden táblához
[
    'agency', 'android_metadata', 'app_meta', 'buszjaratok', 'direction', 'direction_dates',
    'feed_info', 'gtfs_inf', 'gtfs_info', 'marker', 'place_info', 'route',
    'route_dates', 'route_places', 'route_type_info', 'shape', 'shape_compat',
    'stop', 'stops', 'stop_group', 'stop_info', 'stop_set', 'stop_set_exclude',
    'stop_set_include', 'stop_times', 'trip', 'trip_blocks', 'trip_delta_times',
    'trip_headsigns', 'trip_initial_times', 'buszjaratok', 'kepek', 'hirek', 'helyibusz','megallotabla','link'].forEach(createCrudEndpoints);

    // Swagger konfiguráció
    const swaggerOptions = {
        swaggerDefinition: {
            openapi: '3.0.0',
            info: {
                title: 'Kaposvár Közlekedési API',
                version: '1.0.0',
                description: 'Admin felület | API a kaposvári tömegközlekedési rendszerhez'
            },
            servers: [{
                url: 'http://localhost:3000',
                description: 'Fejlesztői szerver'
            }]
        },
        apis: ['server.js']
    };
    
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: "Kaposvár Közlekedési API Dokumentáció",
        customfavIcon: "/api-docs/favicon.ico",
        lang: 'hu',
        swaggerOptions: {
            docExpansion: 'list',
            showRequestDuration: true,
            defaultModelExpandDepth: 3,
            defaultModelsExpandDepth: 3
        }
    }));
    
    // Váratlan hibák kezelése
    process.on('uncaughtException', (error) => {
        console.error('Nem kezelt kivétel:', error);
        process.exit(1);
    });
    
    process.on('unhandledRejection', (reason, promise) => {
        console.error('Nem kezelt promise elutasítás:', reason);
        process.exit(1);
    });
    
    // Alapértelmezett hibakezelő
    app.use((err, req, res, next) => {
        console.error('Szerver hiba:', err);
        res.status(500).json({
            error: 'Szerver hiba történt',
            details: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    });
    
    // 404-es hibakezelő
    app.use((req, res) => {
        res.status(404).json({
            error: 'A kért erőforrás nem található',
            path: req.path
        });
    });
    
    // Szerver leállítás kezelése
    process.on('SIGTERM', () => {
        console.log('SIGTERM jelzés érkezett. Szerver leállítása...');
        db.end(() => {
            console.log('Adatbázis kapcsolat lezárva.');
            process.exit(0);
        });
    });
    
    // Szerver indítása
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`
        =======================================================
        🚀 Kaposvár Közlekedési API Szerver Elindult
        -------------------------------------------------------
        🌐 Szerver port: ${port}
        📚 Swagger dokumentáció: http://localhost:${port}/api-docs
        🔧 Környezet: ${process.env.NODE_ENV || 'development'}
        =======================================================
        `);
    });