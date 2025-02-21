VizsgaremekVizsgaremek
KaposbuszKaposbusz
Dokumentum InformációkDokumentum Információk
DátumDátum : 2024
KészítetteKészítette: Falka Marietta & Bogdán László
IntézményIntézmény: Kaposvári Szakképzési Centrum Nsozlopy Gáspár Közgazdasági Technikum
KépzésKépzés: Szoftverfejlesztő és tesztelő
TartalomjegyzékTartalomjegyzék
1. BevezetBevezető
1.1 A Projekt Háttere
1.2 Célkitűzéseink
1.3 Jelenlegi Megoldások Hiányosságai
2. RendszerkövetelményekRendszerkövetelmények
2.1 Hardver Követelmények
2.2 Szoftver Követelmények
2.3 Hálózati Követelmények
3. ElsElső LépésekLépések
3.1 Regisztrációs Folyamat
3.2 Bejelentkezési Módok
3.3 Felhasználói Profil Kezelése
4. FFő FunkciókFunkciók
4.1 Menetrendek
4.2 Jegyvásárlási Rendszer
4.3 Térképes Útvonaltervező
4.4 Járatállapot Figyelő
5. Speciális SzolgáltatásokSpeciális Szolgáltatások
5.1 Diák és Kedvezményes Jegyek
5.2 Bérlet Vásárlás
5.3 Utazási Kedvezmények
5.4 Egyedi Útiterv Készítés
6. Mobil KompatibilitásMobil Kompatibilitás
6.1 Reszponzív Dizájn
6.2 Mobil Alkalmazás Lehetőségek
dokumentáció_vizsga
Page 1 of 26

6.3 Offline Módban Elérhető Funkciók
7. Biztonsági és Adatvédelmi SzabályzatBiztonsági és Adatvédelmi Szabályzat
7.1 Felhasználói Adatok Védelme
7.2 Adatkezelési Tájékoztató
7.3 Biztonságos Fizetési Rendszer
8. Hibakeresés és TámogatásHibakeresés és Támogatás
8.1 Gyakori Hibajelenségek
8.2 Ügyfélszolgálati Elérhetőségek
8.3 Technikai Támogatás
9. Fejlesztési Ter vekFejlesztési Ter vek
9.1 Jövőbeni Funkciók
9.2 Felhasználói Visszajelzések Kezelése
10. MellékletMelléklet
10.1 Fogalomtár
10.2 Gyors Hivatkozások
10.3 Kapcsolódó Dokumentumok
1. Bevezet1. Bevezető
1.1 A Projekt Háttere: Digitális Átalakulás a Közösségi Közlekedésben1.1 A Projekt Háttere: Digitális Átalakulás a Közösségi Közlekedésben
A modern városi mobilitás kihívásai egyre komplexebbé válnak napjainkban, és Kaposvár önkormányzata
felismerte, hogy a hagyományos közlekedésirányítási módszerek már nem képesek kielégíteni a 21. század
digitális igényeit. A Kaposbusz Digitális Platform nem csupán egy új szoftver, hanem egy átfogó válasz azokra
a technológiai és felhasználói elvárásokra, amelyek a mai utazóközönséget jellemzik.
A projekt kiindulópontja az a felismerés volt, hogy a helyi tömegközlekedés rendszere évtizedek óta alig
változott, miközben az informatikai technológiák forradalmi fejlődésen mentek keresztül. A korábbi rendszer
számos kritikus hiányossággal küzdött, amelyek megnehezítették az utazók mindennapi tapasztalatait. A
papíralapú menetrendek, a kizárólag helyszíni jegyértékesítés, és a statikus információs rendszerek már nem
tudták kiszolgálni a folyamatosan változó felhasználói igényeket.
Kaposvár városa tudatosan törekedett arra, hogy ne csupán egy egyszerű digitalizációs projektet valósítson
meg, hanem egy valóban felhasználóközpontú, innovatív megoldást hozzon létre. A digitális platform célja
nem csupán az információáramlás megkönnyítése, hanem egy komplex ökoszisztéma kialakítása, amely az
utazók teljes felhasználói élményét képes javítani.
1.2 Stratégiai Célkit1.2 Stratégiai Célkitűzések: Átfogó Megközelítés a Mobilitászések: Átfogó Megközelítés a Mobilitás
DigitalizációjábanDigitalizációjában
A projekt átfogó célrendszere több szinten kíván választ adni a modern városi mobilitás kihívásaira. A digitális
transzformáció nem csupán technológiai fejlesztést jelent, hanem egy komplex szemléletváltást is a
közösségi közlekedés működésében.
A digitális platform elsődleges stratégiai célja egy olyan felhasználóbarát rendszer létrehozása, amely valós
dokumentáció_vizsga
Page 2 of 26

idejű, naprakész információkkal szolgál az utazók számára. Ez magában foglalja a dinamikus menetrendek, a
valós idejű járatkövetés, és a azonnali útvonaltervezési lehetőségek biztosítását. A rendszer nem csupán egy
egyszerű alkalmazás, hanem egy intelligens mobilitási ökoszisztéma, amely képes alkalmazkodni a
felhasználók egyedi igényeihez.
A technológiai innováció mellett kiemelt figyelmet kapott a felhasználói élmény tökéletesítése. Ennek
érdekében a fejlesztők olyan interfészt alakítottak ki, amely intuitív, könnyen kezelhető, és képes kiszolgálni
mind a digitálisan képzett fiatal generációt, mind az idősebb korosztályt. A személyre szabhatóság
lehetősége, a gyors és hatékony útvonaltervezés, valamint a többféle fizetési és jegyértékesítési csatorna
mind-mind ezt a célt szolgálják.
Környezettudatos megközelítésünk sem elhanyagolható szempont. A papírmentes jegyrendszer, a digitális
megoldások által csökkentett környezeti terhelés, és a fenntartható mobilitási alternatívák népszerűsítése
olyan stratégiai célok, amelyek túlmutatnak egy egyszerű közlekedésirányítási rendszeren.
1.3 A Meglév1.3 A Meglévő Rendszer Korlátainak Átfogó ElemzéseRendszer Korlátainak Átfogó Elemzése
A korábbi közlekedésirányítási rendszer komplex technikai és felhasználói korlátokkal küzdött, amelyek
jelentősen megnehezítették az utazók mindennapjait. A statikus, PDF formátumú menetrendek nem csupán
nehezen értelmezhetőek voltak, hanem azonnali frissítésük is rendkívül körülményes és időigényes
folyamatnak bizonyult.
Az értékesítési csatornák elavultsága súlyos problémákat okozott. A kizárólag helyszíni jegyértékesítés hosszú
várakozási időkkel és korlátozottan elérhető szolgáltatásokkal járt, ami különösen hátrányos volt azok
számára, akik nem tudtak személyesen megjelenni az értékesítési pontokon. Ez a modell nem vette
figyelembe a modern felhasználók digitális térben való folyamatos jelenlétét és azonnali információigényét.
A felhasználói felület hiányosságai tovább súlyosbították a helyzetet. A nem reszponzív dizájn, a bonyolult
navigáció és az elavult technológiai megoldások olyan akadályokat gördítettek az utazók elé, amelyek
megnehezítették a platform használatát. Az információhiány pedig különösen kritikus problémát jelentett: a
hiányzó valós idejű járatinformációk, a nem transzparens útvonaltervezési lehetőségek és a korlátozottan
elérhető forgalmi adatok nagyban csökkentették a rendszer használhatóságát.
Ez a komplex kihívásrendszer tette szükségessé egy teljesen új, a kor technológiai színvonalának megfelelő
digitális platform kifejlesztését, amely képes átfogó módon kezelni a helyi közösségi közlekedés valamennyi
jelenlegi problémáját.
2. Rendszerkövetelmények: Technológiai Alapok és2. Rendszerkövetelmények: Technológiai Alapok és
KompatibilitásKompatibilitás
2.1 Hardver Követelmények: Az Optimális Felhasználói Élmény M2.1 Hardver Követelmények: Az Optimális Felhasználói Élmény Műszakiszaki
FeltételeiFeltételei
A Kaposbusz Digitális Platform tervezése során kiemelt figyelmet fordítottunk arra, hogy a rendszer a lehető
legszélesebb eszközpark számára elérhető legyen. A modern mobilitási megoldások alapvető célja, hogy ne
jelentsenek technológiai korlátot a felhasználók számára, ezért a hardver követelményeket úgy alakítottuk ki,
hogy az elérhető legyen mind a legújabb, mind a kissé régebbi eszközökön.
A minimális hardver specifikáció gondosan lett meghatározva annak érdekében, hogy még a kevésbé
korszerű eszközök is képesek legyenek zökkenőmentesen futtatni alkalmazásunkat. Az eszköztámogatás
kiterjedt a hagyományos asztali számítógépektől kezdve a mobil eszközökön át egészen a táblagépekig,
biztosítva ezzel a maximális hozzáférhetőséget.
dokumentáció_vizsga
Page 3 of 26

Eszköztípusok Részletes TámogatásaEszköztípusok Részletes Támogatása
1. Asztali Számítógépek és LaptopokAsztali Számítógépek és Laptopok A platformot úgy terveztük, hogy zökkenőmentesen
működjön a különböző hardverkonfigurációjú számítógépeken. A minimális elvárások magukban
foglalnak egy alapszintű processzort, elegendő memóriát és grafikai képességeket a zökkenőmentes
böngészéshez és térképes funkciókhoz.
2. Mobil EszközökMobil Eszközök Kiemelt figyelmet fordítottunk a mobil eszközök támogatására, mivel a felhasználók
jelentős része okostelefonról vagy táblagépről éri majd el a szolgáltatást. Az alkalmazás reszponzív
dizájnja biztosítja, hogy az összes funkció elérhető legyen a különböző képernyőméreteken.
Minimális Hardver KövetelményekMinimális Hardver Követelmények
ProcesszorProcesszor: Minimum 1.5 GHz dual-core processzor
Memória (RAM)Memória (RAM): Legalább 2 GB
TárhelyTárhely: 100 MB szabad lemezterület
KépernyKépernyőfelbontásfelbontás: 1024 x 768 pixel
InternetkapcsolatInternetkapcsolat: Minimum 5 Mbps sávszélesség
Ajánlott HardverkonfigurációAjánlott Hardverkonfiguráció
A teljes felhasználói élmény érdekében javasoljuk a következő hardverkonfigurációt:
ProcesszorProcesszor: 2.5 GHz quad-core vagy újabb
MemóriaMemória : 4 GB RAM vagy több
TárhelyTárhely: 256 MB szabad terület
KépernyKépernyőfelbontásfelbontás: 1920 x 1080 pixel vagy magasabb
InternetkapcsolatInternetkapcsolat: 20 Mbps vagy gyorsabb sávszélesség
2.2 Szoftver Követelmények: Átfogó Kompatibilitás és2.2 Szoftver Követelmények: Átfogó Kompatibilitás és
PlatformfüggetlenségPlatformfüggetlenség
A Kaposbusz Digitális Platform fejlesztése során alapvető célunk volt, hogy a lehető legszélesebb körben
biztosítsuk a kompatibilitást, figyelembe véve a felhasználók eltérő szoftverkörnyezetét. Ez a megközelítés
lehetővé teszi, hogy szinte bármilyen modern eszközről elérhető legyen a szolgáltatás.
Támogatott Operációs RendszerekTámogatott Operációs Rendszerek
1. Asztali Operációs RendszerekAsztali Operációs Rendszerek
Windows: 10 és újabb verziók (64 bites)
macOS: 10.15 (Catalina) és újabb verziók
Linux disztribúciók:
Ubuntu 20.04 LTS és újabb
Debian 10 és újabb
Fedora 34 és újabb
2. Mobil Operációs RendszerekMobil Operációs Rendszerek
iOS: 13 és újabb verziók
Android: 8.0 (Oreo) és újabb verziók
dokumentáció_vizsga
Page 4 of 26

BöngészBöngésző TámogatásTámogatás
A platformot úgy terveztük, hogy kompatibilis legyen a legmodernebb böngészőkkel, biztosítva a
zökkenőmentes, biztonságos böngészést:
1. Asztali BöngészAsztali Böngészőkk
Google Chrome (legújabb verzió)
Mozilla Firefox (legújabb verzió)
Microsoft Edge (legújabb verzió)
Safari (legújabb verzió)
2. Mobil BöngészMobil Böngészőkk
Chrome for Android
Safari for iOS
Firefox Mobile
Speciális Szoftver KövetelményekSpeciális Szoftver Követelmények
JavaScript támogatás
HTML5 kompatibilitás
WebGL támogatás (térképes funkciókhoz)
Cookies és helyi tárhely engedélyezése
2.3 Hálózati Követelmények: Folyamatos és Biztonságos Kapcsolat2.3 Hálózati Követelmények: Folyamatos és Biztonságos Kapcsolat
A Kaposbusz Digitális Platform hálózati követelményrendszere úgy került kialakításra, hogy biztosítsa a
folyamatos, biztonságos és hatékony adatkapcsolatot, minimális felhasználói beavatkozás mellett.
Kapcsolat Típusok és MinKapcsolat Típusok és Minőségi Elvárásokségi Elvárások
1. Internetkapcsolat TípusokInternetkapcsolat Típusok
Vezetékes internetkapcsolat
WiFi hálózatok
Mobil adatkapcsolatok (4G/5G)
2. Minimális Sávszélesség ElvárásokMinimális Sávszélesség Elvárások
Letöltési sebesség: 5 Mbps
Feltöltési sebesség: 1 Mbps
Ajánlott sávszélesség: 20 Mbps
Adatforgalmi JellemzAdatforgalmi Jellemzőkk
Minimális havi adatforgalom: 50 MB
Ajánlott havi adatforgalom: 500 MB - 2 GB
Folyamatos adatszinkronizálás
Alacsony késleltetésű kapcsolat
Biztonsági ProtokollokBiztonsági Protokollok
dokumentáció_vizsga
Page 5 of 26

SSL/TLS titkosítás
Végponttól végpontig terjedő adatvédelem
Biztonságos hálózati kommunikáció
Automatikus kapcsolatkezelés
Offline Üzemmód TámogatásaOffline Üzemmód Támogatása
A rendszer képes alapvető funkciók biztosítására korlátozott vagy nem elérhető internetkapcsolat esetén is:
Letöltött menetrendek megtekintése
Korábban vásárolt jegyek elérése
Alapvető térképes funkciók használata
A hálózati követelményre vonatkozó részletes specifikáció biztosítja, hogy a Kaposbusz Digitális Platform
szinte bármilyen körülmények között elérhető és használható legyen a felhasználók számára.# Kaposbusz
Digitális Platform
3. Els3. Első Lépések: Csatlakozás a Digitális PlatformhozLépések: Csatlakozás a Digitális Platformhoz
3.1 Regisztrációs Folyamat: Belépés a Kaposbusz Digitális Világába3.1 Regisztrációs Folyamat: Belépés a Kaposbusz Digitális Világába
A felhasználói regisztráció az első és legfontosabb lépés a Kaposbusz Digitális Platform használatbavételekor.
Gondosan megtervezett folyamatunk célja, hogy egyszerű, biztonságos és felhasználóbarát legyen, miközben
maximálisan védi a felhasználók személyes adatait.
Regisztráció LépésrRegisztráció Lépésről Lépésrel Lépésre
1. Platform ElérésePlatform Elérése A regisztrációs folyamat első lépéseként a felhasználónak fel kell keresnie a
Kaposbusz hivatalos weboldalát vagy mobil alkalmazását. A biztonság érdekében mindig ellenőrizze
a https://kaposbusz.huhttps://kaposbusz.hu típusú biztonságos kapcsolatot, amelyet a zöld lakat ikon jelez a
böngészőben.
2. RegisztrációsRegisztrációsŰrlap Kitöltéserlap Kitöltése A felhasználónak egy átfogó, de könnyen kitölthető űrlapot kell
kitöltenie. A kötelező mezők gondosan lettek kiválasztva annak érdekében, hogy csak a
legszükségesebb információkat kérjük el:
Teljes név (valós személyes adatok)
Érvényes e-mail cím
Jelszó megadása
Opcionális: Telefonszám
3. Jelszó BiztonságJelszó Biztonság A jelszó létrehozásakor kiemelt figyelmet fordítunk a biztonságra. A rendszer valós
idejű visszajelzést ad a jelszó erősségéről:
Minimum 12 karakter hosszúság
Tartalmazzon nagybetűt, kisbetűt, számot és speciális karaktert
Ne legyen könnyen kitalálható (pl. születési dátum, egyszerű sorozatok)
Automatikus erősség-visszajelzés
4. Adatkezelési NyilatkozatAdatkezelési Nyilatkozat A regisztráció szerves része az adatkezelési szabályzat átolvasása és
elfogadása. Átlátható módon mutatjuk be, hogyan kezeljük a felhasználók személyes adatait,
biztosítva a teljes körű tájékoztatást.
dokumentáció_vizsga
Page 6 of 26

5. MegerMegerősítsítő FolyamatFolyamat A regisztráció nem tekinthető véglegesnek az e-mail cím megerősítéséig:
Aktivációs link küldése a megadott e-mail címre
24 órán belül szükséges az aktiválás
Sikertelen aktiválás esetén a regisztráció törlésre kerül
Speciális Regisztrációs FeltételekSpeciális Regisztrációs Feltételek
Minimum életkor: 14 év
Kiskorúak esetén szülői hozzájárulás szükséges
Egy e-mail cím csak egy fiókhoz használható
Valós személyes adatok megadásának kötelezettsége
3.2 Bejelentkezési Lehet3.2 Bejelentkezési Lehetőségek: Biztonság és Kényelemségek: Biztonság és Kényelem
A Kaposbusz Digitális Platform többféle bejelentkezési módszert kínál, alkalmazkodva a felhasználók eltérő
igényeihez és technológiai jártasságához.
Hagyományos BejelentkezésHagyományos Bejelentkezés
1. Felhasználónév vagy E-mailFelhasználónév vagy E-mail
Regisztrált e-mail cím vagy egyedi felhasználónév használata
Jelszó megadása
Automatikus hibajelzés érvénytelen hitelesítő adatok esetén
2. Jelszó KezelésJelszó Kezelés
Elfelejtett jelszó helyreállítási folyamat
Ideiglenes visszaállító link küldése
Biztonságos jelszócsere mechanizmus
Alternatív Bejelentkezési MódokAlternatív Bejelentkezési Módok
1. Közösségi Média BejelentkezésKözösségi Média Bejelentkezés
Google fiók
Facebook
Apple ID (iOS eszközökön)
Gyors és egyszerű regisztráció
Meglévő felhasználói profil felhasználása
2. Egyszeri Bejelentkezés (SSO)Egyszeri Bejelentkezés (SSO)
Intézményi és vállalati felhasználók számára
Központosított hitelesítési rendszer
Active Directoryintegráció
Kétfaktoros AzonosításKétfaktoros Azonosítás
Opcionális biztonsági szint
Támogatott módszerek:
dokumentáció_vizsga
Page 7 of 26

SMS-ben érkező egyszeri kód
Authenticator alkalmazások
E-mail alapú megerősítés
Hardveres biztonsági kulcs
3.3 Felhasználói Profil Kezelése: Személyre Szabott Élmény3.3 Felhasználói Profil Kezelése: Személyre Szabott Élmény
A felhasználói profil nem csupán egy adattár, hanem a személyre szabott utazási élmény kulcsfontosságú
eleme.
AlapvetAlapvető Profiladatok KezeléseProfiladatok Kezelése
1. Személyes Információk MódosításaSzemélyes Információk Módosítása
Teljes név frissítése
Kapcsolattartási adatok szerkesztése
Profilkép feltöltése és cseréje
2. Kommunikációs BeállításokKommunikációs Beállítások
Értesítési preferenciák
Hírlevél beállítások
Kommunikációs csatornák kiválasztása
Utazási ElUtazási Előzmények és Statisztikákzmények és Statisztikák
Korábbi jegyek listázása
Kedvenc útvonalak mentése
Utazási statisztikák megtekintése
Pénzügyi áttekintő
Adatvédelem és BiztonságAdatvédelem és Biztonság
Személyes adatok megtekintése
Adatok exportálása
Adatok törlésének lehetősége
Hozzájárulások kezelése
4. F4. Fő Funkciók: A Digitális Mobilitás Komplex RendszereFunkciók: A Digitális Mobilitás Komplex Rendszere
4.1 Menetrendek: Dinamikus Információs Rendszer4.1 Menetrendek: Dinamikus Információs Rendszer
A Kaposbusz Digitális Platform menetrendjei túlmutatnak a hagyományos, statikus információszolgáltatáson.
Egy élő, valós idejű rendszert hoztunk létre, amely folyamatosan frissül és alkalmazkodik a pillanatnyi forgalmi
viszonyokhoz.
4.1.1 Statikus Menetrendek Új Dimenziója4.1.1 Statikus Menetrendek Új Dimenziója
A platform négyféle módon teszi elérhetővé a menetrendeket:
1. Interaktív Online FelületInteraktív Online Felület
dokumentáció_vizsga
Page 8 of 26

Teljes városi és elővárosi menetrendek
Valós idejű frissítések
Könnyen átlátható grafikai megjelenítés
Több szempont szerinti szűrési lehetőségek
2. LetölthetLetölthető DokumentumokDokumentumok
PDF formátumú menetrendek
Nyomtatóbarát verziók
Részletes járatinformációk
Digitálisan és fizikailag is használható dokumentumok
3. Csopor tosítási LehetCsopor tosítási Lehetőségekségek
Járatszám szerint rendezés
Útvonal alapján történő csoportosítás
Megállóhelyek szerinti keresés
Személyre szabható megjelenítési módok
4.1.2 Dinamikus Járatkövetés: Valós Idej4.1.2 Dinamikus Járatkövetés: Valós Idejű MobilitásMobilitás
A rendszer forradalmi módon közelíti meg a járatkövetést:
1. Valós IdejValós Idejű Információs RendszerInformációs Rendszer
GPS-alapú nyomkövetés
Pontos érkezési idők jelzése
Aktuális járatpozíciók megjelenítése
Átszállási lehetőségek azonnali kijelzése
2. Térképes Meg jelenítésTérképes Meg jelenítés
Interaktív várostérkép
Járatok valós idejű mozgásának nyomonkövetése
Átszállási pontok dinamikus jelölése
Forgalmi információk azonnali megjelenítése
3. KiegészítKiegészítő SzolgáltatásokSzolgáltatások
Késések pontos jelzése
Alternatív útvonalak ajánlása
Zsúfoltság jelzése
Rendkívüli forgalmi helyzetek értesítése
4.2 Jegyvásárlási Rendszer: Digitális Jegykezelés4.2 Jegyvásárlási Rendszer: Digitális Jegykezelés
A jegyvásárlás teljes digitalizálása forradalmasítja a helyi tömegközlekedés hozzáférhetőségét.
4.2.1 Online Jegyvásárlási Folyamat4.2.1 Online Jegyvásárlási Folyamat
1. Vásárlási LépésekVásárlási Lépések
Egyszerűsített, lépésről-lépésre vezető folyamat
dokumentáció_vizsga
Page 9 of 26

Azonnali elektronikus jegykiadás
PDF formátumú jegyek instant letöltése
Mobil és asztali eszközökön egyaránt elérhető
2. Jegytípusok Széles VálasztékaJegytípusok Széles Választéka
Egyszeri utazásra szóló jegyek
Napijegyek
Heti bérletek
Havi bérletek
Diák és nyugdíjas kedvezményes jegyek
Kombinált bérletek
4.2.3 Fizetési Módok4.2.3 Fizetési Módok
A rugalmasság jegyében többféle fizetési csatornát biztosítunk:
Bankkártya
PayPal
Online banki fizetés
Mobilfizetés
Elektronikus pénztárca
4.2.4 Digitális Jegyek Kezelése4.2.4 Digitális Jegyek Kezelése
1. Tárolási MegoldásokTárolási Megoldások
Digitális pénztárca integráció
Vonalkód és QR-kód generálás
Megosztási lehetőségek
2. Ér vényesítési FolyamatÉr vényesítési Folyamat
Azonnali ellenőrzési rendszer
Valós idejű érvényesség-ellenőrzés
Automatikus lejárati idő figyelés
4.3 Térképes Útvonaltervez4.3 Térképes Útvonaltervező: Intelligens Navigáció: Intelligens Navigáció
4.3.1 Kiindulási Pont Meghatározása4.3.1 Kiindulási Pont Meghatározása
1. Helymeghatározási MódszerekHelymeghatározási Módszerek
GPS-alapú automatikus helymeghatározás
Manuális cím bevitel
Kedvenc helyszínek mentése
Legutóbbi úticélok gyors elérése
2. Keresési LehetKeresési Lehetőségekségek
Megállónév alapján keresés
Térképes kiválasztás
dokumentáció_vizsga
Page 10 of 26

Koordináta-alapú pontosítás
4.3.2 Célállomás Kiválasztása4.3.2 Célállomás Kiválasztása
Részletes keresési lehetőségek
Előzmények mentése
Földrajzi pontosság
4.3.3 Útvonalak Megjelenítése4.3.3 Útvonalak Megjelenítése
1. Útvonalter vezési OpciókÚtvonalter vezési Opciók
Gyalogos és tömegközlekedési útvonalak
Több útvonal összehasonlítása
Becsült utazási idő
Átszállási pontok jelölése
4.3.4 Átszállási Lehet4.3.4 Átszállási Lehetőségekségek
Részletes átszállási információk
Átszállási idő kiszámítása
Legoptimálisabb útvonal ajánlása
4.4 Járatállapot Figyel4.4 Járatállapot Figyelő: Valós Idej: Valós Idejű Mobilitási InformációkMobilitási Információk
4.4.1 Valós Idej4.4.1 Valós Idejű JáratinformációkJáratinformációk
1. Pontos Érkezési AdatokPontos Érkezési Adatok
Valós idejű érkezési és indulási idők
Járatok aktuális tartózkodási helye
Zsúfoltság jelzése
2. Részletes JáratinformációkRészletes Járatinformációk
Pontos késési idők
Késés okának megjelölése
Alternatív útvonalak ajánlása
4.4.2 Forgalmi Információk4.4.2 Forgalmi Információk
Útlezárások jelzése
Rendkívüli forgalmi helyzetek
Kerülő útvonalak ajánlása
A fő funkciók részletesen bemutatják, hogyan válik a Kaposbusz Digitális Platform egy átfogó,
felhasználóbarát mobilitási megoldássá.## 3. Első Lépések: Csatlakozás a Digitális Platformhoz
5. Speciális Szolgáltatások: Egyedi Igények Komplex5. Speciális Szolgáltatások: Egyedi Igények Komplex
KiszolgálásaKiszolgálása
dokumentáció_vizsga
Page 11 of 26

5.1 Diák és Kedvezményes Jegyek: Támogató Rendszer a Mobilitásért5.1 Diák és Kedvezményes Jegyek: Támogató Rendszer a Mobilitásért
A Kaposbusz Digitális Platform kiemelt figyelmet fordít a különböző felhasználói csoportok speciális
igényeinek kiszolgálására, különös tekintettel a diákokra és a kedvezményre jogosult csoportokra.
Diákkedvezmények RészletesenDiákkedvezmények Részletesen
1. Elektronikus Diákigazolvány RendszerElektronikus Diákigazolvány Rendszer
Elektronikus diákigazolvány azonnali elfogadása
Középiskolai és felsőoktatási kedvezmények automatikus érvényesítése
Valós idejű jogosultság-ellenőrzés
Országos diáknyilvántartással való közvetlen integráció
2. Kedvezményes Bérlet TípusokKedvezményes Bérlet Típusok
Tanuló bérletek
Kontrollált igénylési folyamat
Automatikus kedvezményszámítás
Féléves és éves bérletek speciális opciói
3. Kedvezmény-ér vényesítési MechanizmusKedvezmény-ér vényesítési Mechanizmus
Digitális igazolások feltöltésének lehetősége
Automatikus ellenőrzési rendszer
Visszamenőleges kedvezmény-nyilvántartás
Átlátható kedvezményi statisztikák
5.2 Bérlet Vásárlási Rendszer: Rugalmasság és Kényelem5.2 Bérlet Vásárlási Rendszer: Rugalmasság és Kényelem
Bérlettípusok Átfogó KínálataBérlettípusok Átfogó Kínálata
1. Felhasználói Csopor tok Szerinti BérletekFelhasználói Csopor tok Szerinti Bérletek
Tanuló bérlet
Felnőtt bérlet
Munkáltatói bérlet
Alkalmazotti bérlet
Nyugdíjas bérlet
2. Vásárlási Folyamat InnovációiVásárlási Folyamat Innovációi
Online bérlethosszabbítás
Automatikus megújítási lehetőség
Régi bérletek adatainak mentése
Bérletek megosztásának opciója
3. Speciális Bérlet SzolgáltatásokSpeciális Bérlet Szolgáltatások
Rugalmas érvényességi idők
Részarányos bérletváltás
Kedvezményes csomagok
dokumentáció_vizsga
Page 12 of 26

Kombinált bérleti lehetőségek
5.3 Utazási Kedvezmények: Társadalmilag Érzékeny Megközelítés5.3 Utazási Kedvezmények: Társadalmilag Érzékeny Megközelítés
Kedvezményes Csoportok Komplex TámogatásaKedvezményes Csoportok Komplex Támogatása
1. Speciális Kedvezményi KategóriákSpeciális Kedvezményi Kategóriák
Nyugdíjasok
Fogyatékkal élők
Nagycsaládosok
Munkanélküliek
Közgyógyellátottak
2. Kedvezmény-ér vényesítési MechanizmusokKedvezmény-ér vényesítési Mechanizmusok
Digitális igazolások feltöltése
Automatikus ellenőrzési rendszer
Egyedi elbírálási lehetőségek
Átlátható nyilvántartás
3. Speciális Utazási KedvezményekSpeciális Utazási Kedvezmények
Ingyenes utazás meghatározott csoportoknak
Kedvezményes csoportos utazási lehetőségek
Kulturális és sportrendezvényekhez kapcsolódó speciális ajánlatok
5.4 Egyedi Útiterv Készítés: Személyre Szabott Mobilitási Megoldások5.4 Egyedi Útiterv Készítés: Személyre Szabott Mobilitási Megoldások
Komplex Útvonaltervezési SzolgáltatásokKomplex Útvonaltervezési Szolgáltatások
1. Személyre Szabott Útvonalter vezésSzemélyre Szabott Útvonalter vezés
Rendszeres útvonalak mentése
Munkahely/iskola útvonalának optimalizálása
Többszörös megállóhelyek kezelése
Egyedi preferenciák figyelembevétele
2. Speciális Útvonalter vezési OpciókSpeciális Útvonalter vezési Opciók
Átszállási pontok egyszerűsítése
Alternatív közlekedési módok ajánlása
Valós idejű optimalizálás
Environmentálisan tudatos útvonalajánlatok
3. KiegészítKiegészítő Útvonalter vezési SzolgáltatásokÚtvonalter vezési Szolgáltatások
Időalapú optimalizálás
Legkevesebb átszállással járó útvonalak
Gazdaságossági elemzés
Személyes preferenciák mentén történő ajánlások
dokumentáció_vizsga
Page 13 of 26

A speciális szolgáltatások célja, hogy a Kaposbusz Digitális Platform ne csupán egy egyszerű közlekedési
alkalmazás legyen, hanem egy komplex, a felhasználók egyedi igényeit maximálisan kiszolgáló mobilitási
ökoszisztéma.
6. Mobil Kompatibilitás: Mobilitás a Mobilon6. Mobil Kompatibilitás: Mobilitás a Mobilon
6.1 Reszponzív Dizájn: Zökken6.1 Reszponzív Dizájn: Zökkenőmentes Felhasználói Élmény Mindenmentes Felhasználói Élmény Minden
EszközönEszközön
A Kaposbusz Digitális Platform mobil kompatibilitása nem csupán egy technikai megoldás, hanem egy átfogó
felhasználói élményt biztosító stratégia. A reszponzív dizájn alapelveit maximálisan érvényesítve hoztuk létre
platformunkat, amely képes alkalmazkodni bármilyen eszköz képernyőméretéhez és felbontásához.
Dizájn AlapelvekDizájn Alapelvek
1. Adaptív FelületarchitektúraAdaptív Felületarchitektúra
Automatikus képernyőméret-igazítás
Dinamikus elrendezés
Eszközfüggetlen felhasználói felület
Konzisztens felhasználói élmény minden platformon
2. ÉrintÉrintőképernyképernyős Optimalizációs Optimalizáció
Nagy érintési felületek
Ujjbarát navigációs elemek
Gesztus-alapú interakciók támogatása
Érzékeny és precíz érintésvezérlés
3. Teljesítmény-optimalizálásTeljesítmény-optimalizálás
Gyors betöltési idők
Minimális adatforgalom
Hatékony erőforrás-kezelés
Alacsony energiafogyasztás
Támogatott EszköztípusokTámogatott Eszköztípusok
Okostelefonok (Android, iOS)
Táblagépek
Kisméretű és nagy képernyős eszközök
Érintőképernyős és hagyományos eszközök
6.2 Mobil Alkalmazás Lehet6.2 Mobil Alkalmazás Lehetőségek: Natív Funkcionalitásségek: Natív Funkcionalitás
A mobilalkalmazás nem csupán egy webes felület leképezése, hanem egy teljes értékű mobil megoldás,
amely kihasználja az okoseszközök speciális képességeit.
Natív Alkalmazás FunkciókNatív Alkalmazás Funkciók
1. Ér tesítési RendszerÉr tesítési Rendszer
dokumentáció_vizsga
Page 14 of 26

Push-értesítések
Valós idejű forgalmi hírek
Személyre szabható értesítési beállítások
Rendkívüli helyzetek azonnali jelzése
2. Offline Módú FunkciókOffline Módú Funkciók
Letöltött menetrendek
Előzetesen vásárolt jegyek megtekintése
Alapvető térképes funkciók
Legutóbbi útvonalak mentése
3. Eszközspecifikus KépességekEszközspecifikus Képességek
GPS-alapú helymeghatározás
Kamera integrációk (QR-kód olvasás)
Mozgásérzékelő támogatás
Eszköz hardveres képességeinek kihasználása
KülsKülső Rendszerekkel Való IntegrációRendszerekkel Való Integráció
1. Alkalmazáson Kívüli Kapcsolódási PontokAlkalmazáson Kívüli Kapcsolódási Pontok
Google Maps útvonaltervezés
Naptár szinkronizáció
Megosztási lehetőségek
Widget támogatás
2. Megosztott Közlekedési EszközökMegosztott Közlekedési Eszközök
Kerékpármegosztó rendszerek
Elektromos rollerek
Egyéb városi mobilitási szolgáltatások
6.3 Offline Módban Elérhet6.3 Offline Módban Elérhető Funkciók: Folyamatos HozzáférhetFunkciók: Folyamatos Hozzáférhetőségség
A Kaposbusz Digitális Platform offline módban is biztosít alapvető funkciókat, garantálva a folyamatos
használhatóságot még gyenge vagy megszakadó internetkapcsolat esetén is.
Offline Funkciók RészletesenOffline Funkciók Részletesen
1. MenetrendekMenetrendek
Előzetesen letöltött menetrendek
Statikus útvonalak megtekintése
Megállóhelyek információi
2. JegykezelésJegykezelés
Korábban vásárolt jegyek megtekintése
Jegyek érvényességének ellenőrzése
Offline jegyérvényesítés
dokumentáció_vizsga
Page 15 of 26

3. Térképes FunkciókTérképes Funkciók
Letöltött térképek
Alapvető navigációs lehetőségek
Legutóbbi útvonalak mentése
4. Szinkronizációs MechanizmusSzinkronizációs Mechanizmus
Automatikus adatfrissítés online állapotba kerüléskor
Módosítások szinkronizálása
Adatvesztés nélküli visszakapcsolódás
7. Biztonsági és Adatvédelmi Szabályzat: Átláthatóság és7. Biztonsági és Adatvédelmi Szabályzat: Átláthatóság és
BiztonságBiztonság
7.1 Felhasználói Adatok Védelme: Bizalmas Adatkezelés7.1 Felhasználói Adatok Védelme: Bizalmas Adatkezelés
A Kaposbusz Digitális Platform elsődleges célja, hogy a legmagasabb szintű adatvédelmi és biztonsági
standardokat alkalmazza, biztosítva felhasználóink személyes adatainak maximális védelmét.
Adatvédelmi AlapelvekAdatvédelmi Alapelvek
1. ÁtláthatóságÁtláthatóság
Világos és érthető adatkezelési tájékoztató
Teljes körű tájékoztatás az adatgyűjtés céljáról
Felhasználói jogok részletes ismertetése
Nyílt kommunikáció az adatkezelési folyamatokról
2. AdatminimalizálásAdatminimalizálás
Kizárólag a szükséges adatok gyűjtése
Célhoz kötött adatkezelés
Felesleges adatok azonnali törlése
Folyamatos adattisztítási eljárások
3. BizalmasságBizalmasság
Teljes körű adatvédelem
Harmadik fél általi adatkezelés szigorú korlátozása
Nemzetközi adatvédelmi szabványoknak való megfelelés
Rendszeres biztonsági auditok
Kezelt AdattípusokKezelt Adattípusok
1. Személyes Azonosító AdatokSzemélyes Azonosító Adatok
Teljes név
Kontaktinformációk
Születési adatok
Azonosító dokumentumok adatai
dokumentáció_vizsga
Page 16 of 26

2. Utazási ElUtazási Előzményekzmények
Útvonalak
Jegyvásárlási adatok
Utazási szokások
Kedvezményre jogosultság adatai
3. Technikai AdatokTechnikai Adatok
Eszköz típusa
IP-cím
Böngésző adatok
Felhasználói aktivitás naplózása
7.2 Adatkezelési Tájékoztató: Jogok és Kötelezettségek7.2 Adatkezelési Tájékoztató: Jogok és Kötelezettségek
Adatkezelés RészleteiAdatkezelés Részletei
1. Adattárolási IdAdattárolási Időtar tamoktar tamok
Személyes adatok: Tagság időtartama + 2 év
Pénzügyi tranzakciók: 8 év
Utazási előzmények: 3 év
Automatikus anonimizálás
2. Adatok Felhasználásának CéljaAdatok Felhasználásának Célja
Szolgáltatás nyújtása
Személyre szabott élmény biztosítása
Statisztikai és fejlesztési célok
Jogszabályi kötelezettségek teljesítése
3. Harmadik Fél Általi AdatkezelésHarmadik Fél Általi Adatkezelés
Szigorúan korlátozott adatmegosztás
Szerződéses kötelezettségvállalás
Átlátható adatkezelési megállapodások
Előzetes felhasználói hozzájárulás
Felhasználói JogokFelhasználói Jogok
1. Adatok MegtekintéseAdatok Megtekintése
Teljes körű hozzáférés saját adatokhoz
Azonnali betekintési lehetőség
Részletes adatlekérdezési felület
2. Adatok MódosításaAdatok Módosítása
Önálló adatmódosítási jogosultság
Valós idejű adatfrissítés
Módosítási előzmények nyomon követése
dokumentáció_vizsga
Page 17 of 26

3. Adatok Expor tálása és TörléseAdatok Expor tálása és Törlése
Teljes adatkör exportálásának lehetősége
Azonnali törlési opció
Végleges adatmegsemmisítés
7.3 Biztonságos Fizetési Rendszer: Pénzügyi Védelem7.3 Biztonságos Fizetési Rendszer: Pénzügyi Védelem
FizetésbiztonságFizetésbiztonság
1. Titkosítási ProtokollokTitkosítási Protokollok
SSL/TLS titkosítás
Végponttól végpontig terjedő védelem
PCI DSS szabvány szerinti biztonság
Többszintű védelmi mechanizmusok
2. Tranzakciós BiztonságTranzakciós Biztonság
Valós idejű fraud detekció
Gyanús tranzakciók azonnali zárolása
TranzakciósLimit rendszer
Automatikus biztonsági értesítések
3. Fizetési Módok VédelmeFizetési Módok Védelme
Bankkártya-adatok tokenizációja
Biztonságos pénzügyi tranzakciók
Valós idejű tranzakció-ellenőrzés
Azonnali biztonsági visszajelzések
Speciális Biztonsági IntézkedésekSpeciális Biztonsági Intézkedések
Rendszeres biztonsági frissítések
Etikus hackerek általi folyamatos tesztelés
Nemzetközi biztonsági szabványoknak való megfelelés
Átfogó kockázatkezelési stratégia
A biztonsági és adatvédelmi szabályzat nem csupán egy dokumentum, hanem a Kaposbusz Digitális Platform
iránti elkötelezettségünk a felhasználói bizalom és adatbiztonság iránt.
8. Hibakeresés és Támogatás: Átfogó Felhasználói8. Hibakeresés és Támogatás: Átfogó Felhasználói
SegítségnyújtásSegítségnyújtás
8.1 Gyakori Hibajelenségek: Diagnosztikai és Megoldási Útmutató8.1 Gyakori Hibajelenségek: Diagnosztikai és Megoldási Útmutató
A Kaposbusz Digitális Platform célja, hogy a lehető legzökkenőmentesebb felhasználói élményt biztosítsa,
ugyanakkor felkészültünk a felmerülő technikai kihívásokra is. Átfogó hibaelhárítási rendszerünk segít a
felhasználóknak gyorsan és hatékonyan megoldani a felmerülő problémákat.
dokumentáció_vizsga
Page 18 of 26

Technikai Hibák KategorizálásaTechnikai Hibák Kategorizálása
1. Bejelentkezési ProblémákBejelentkezési Problémák
Elfelejtett jelszó
Fiók zárolása
Hitelesítési nehézségek
Közösségi média bejelentkezés hibái
Javasolt Megoldások:Javasolt Megoldások:
Jelszó-visszaállítási folyamat
Fiók feloldási kérelem
Alternatív bejelentkezési módok
Ügyfélszolgálati segítségkérés
2. Jegyvásárlási HibákJegyvásárlási Hibák
Fizetési tranzakciók megszakadása
Jegyek nem érkeznek meg
Dupla terhelés
Kedvezmények érvényesítésének problémái
Javasolt Megoldások:Javasolt Megoldások:
Tranzakciók újraindítása
Azonnali ügyfélszolgálati támogatás
Pénzvisszatérítési eljárás
Kedvezmények manuális ellenőrzése
3. Térképes Funkciók HibáiTérképes Funkciók Hibái
Helymeghatározási pontatlansságok
Útvonaltervezési hibák
Térképes adatok elavultsága
GPS-tracking problémák
Javasolt Megoldások:Javasolt Megoldások:
Manuális helymegadás
Térképes adatok frissítése
Alternatív útvonalak keresése
Offline módú térképhasználat
4. Ér tesítési Rendszer ProblémáiÉr tesítési Rendszer Problémái
Push-értesítések nem érkeznek
E-mail értesítések elakadása
Hibás rendszerüzenetek
Értesítési beállítások hibás működése
Javasolt Megoldások:Javasolt Megoldások:
dokumentáció_vizsga
Page 19 of 26

Értesítési beállítások ellenőrzése
Alkalmazás frissítése
Rendszerszintű értesítési teszt
Értesítési csatornák újrakonfigurálása
Hibaelhárítási FolyamatHibaelhárítási Folyamat
1. Gyors HibabejelentGyors Hibabejelentő RendszerRendszer
Azonnali hibajelzési lehetőség
Automatikus hibanapló generálás
Egyedi hibaazonosító kiadása
Valós idejű nyomonkövetés
2. Automatikus Hibajavítási JavaslatokAutomatikus Hibajavítási Javaslatok
Kontextusfüggő hibaüzenetek
Lépésről lépésre vezető javítási útmutatók
Önsegítő diagnosztikai eszközök
Részletes hibaüzenetek
8.2 Ügyfélszolgálati Elérhet8.2 Ügyfélszolgálati Elérhetőségek: Komplex Támogatási Rendszerségek: Komplex Támogatási Rendszer
Támogatási CsatornákTámogatási Csatornák
1. Telefonos ÜgyfélszolgálatTelefonos Ügyfélszolgálat
Közvetlen emberi segítségnyújtás
Munkanapokon: 8:00-16:00
Dedikált technikai támogatási vonal
Magyar nyelvű, képzett ügyintézők
2. E-mail TámogatásE-mail Támogatás
Részletes problémaleírás küldése
Hivatalos támogatási e-mail cím
Válaszadási idő: 24-48 óra
Részletes dokumentáció csatolásának lehetősége
3. ÉlÉlő Chat TámogatásChat Támogatás
Azonnali segítségnyújtás
Valós idejű kommunikáció
Munkanapokon: 8:00-20:00
Hétvégi ügyelet korlátozott óraszámban
4. Közösségi Média CsatornákKözösségi Média Csatornák
Facebook támogatás
Twitter ügyfélszolgálat
Hivatalos üzenetváltási felületek
dokumentáció_vizsga
Page 20 of 26

Nyilvános és privát kommunikációs csatornák
5. Gyakran Ismételt Kérdések (GYIK)Gyakran Ismételt Kérdések (GYIK)
Átfogó tudásbázis
Kategorizált problémamegoldási útmutatók
Rendszeresen frissített tartalom
Kereshető és szűrhető tartalomjegyzék
8.3 Technikai Támogatás: Professzionális Segítségnyújtás8.3 Technikai Támogatás: Professzionális Segítségnyújtás
Támogatási SzintekTámogatási Szintek
1. AlapszintAlapszintű TámogatásTámogatás
Alapvető hibaelhárítás
Általános kérdések megválaszolása
Önkiszolgáló erőforrások
Díjmentes szolgáltatás
2. Prémium TámogatásPrémium Támogatás
Kiterjesztett hibaelhárítás
Dedikált támogatási menedzser
Gyorsított ügyintézés
Részletes technikai elemzés
3. Vállalati TámogatásVállalati Támogatás
Teljes körű technikai mentorálás
Egyedi igényekre szabott megoldások
Közvetlen kapcsolattartás
Speciális fejlesztési lehetőségek
Támogatási SzolgáltatásokTámogatási Szolgáltatások
Távsegítség
Képernyőmegosztás
Részletes hibaanalízis
Rendszerfrissítési tanácsadás
Felhasználói képzések
A hibakeresés és támogatás nem csupán egy technikai folyamat, hanem a Kaposbusz Digitális Platform azon
elkötelezettsége, hogy minden felhasználónk zökkenőmentes és élménydús utazást tudjon tervezni.
9. Fejlesztési Tervek: Jöv9. Fejlesztési Tervek: Jövőbeni Innovációk és Stratégiai Irányokbeni Innovációk és Stratégiai Irányok
9.1 Jöv9.1 Jövőbeni Funkciók: Technológiai Horizont és Innovációs Stratégiabeni Funkciók: Technológiai Horizont és Innovációs Stratégia
A Kaposbusz Digitális Platform fejlesztési stratégiája nem csupán a jelenlegi igények kiszolgálásáról szól,
hanem egy folyamatosan megújuló, előremutató mobilitási ökoszisztéma létrehozásáról. Fejlesztési terveink
dokumentáció_vizsga
Page 21 of 26

négy fő pillérre épülnek: technológiai innováció, felhasználói élmény, rendszerintegráció és fenntarthatóság.
Technológiai FejlesztésekTechnológiai Fejlesztések
1. Mesterséges Intelligencia Alapú MegoldásokMesterséges Intelligencia Alapú Megoldások
Prediktív útvonaltervezés
Gépi tanuláson alapuló forgalmi előrejelzés
Személyre szabott utazási ajánlatok
Valós idejű forgalomoptimalizálás
Intelligens közlekedésirányítási rendszerek
2. Kiterjesztett Valóság (AR) NavigációKiterjesztett Valóság (AR) Navigáció
Valós idejű navigációs információk
Megállóhelyek és útvonalak AR-alapú megjelenítése
Valós környezetbe ágyazott utazási információk
Interaktív térképes megoldások
Látássérültek számára speciális navigációs segédeszközök
3. Gépi Tanulás és AdatelemzésGépi Tanulás és Adatelemzés
Forgalmi minták elemzése
Utazási szokások prediktív modellezése
Dinamikus árképzési modellek
Előrejelző karbantartási rendszerek
Környezeti hatások elemzése
Felhasználói Élmény FejlesztéseFelhasználói Élmény Fejlesztése
1. Személyre Szabott SzolgáltatásokSzemélyre Szabott Szolgáltatások
Mesterséges intelligencia alapú ajánlórendszer
Egyéni utazási preferenciák elemzése
Kontextusfüggő útvonaltervezés
Személyes mobilitási profil kialakítása
2. Gamifikációs ElemekGamifikációs Elemek
Utazási pontrendszer
Környezettudatos utazási kihívások
Közösségi visszajelzési mechanizmusok
Felhasználói teljesítmény-elismerési rendszer
3. Komplex Utazási StatisztikákKomplex Utazási Statisztikák
Részletes egyéni utazási elemzések
Környezeti hatásmérő eszközök
Pénzügyi megtakarítási kalkulátorok
Egészséggel és mozgással kapcsolatos statisztikák
dokumentáció_vizsga
Page 22 of 26

Integrációs TervekIntegrációs Tervek
1. Országos és Nemzetközi RendszerintegrációOrszágos és Nemzetközi Rendszerintegráció
Országos közlekedési rendszerekkel való közvetlen kommunikáció
Multinacionális útvonaltervezési lehetőségek
Nemzetközi átszálló jegyek rendszere
Egységes európai mobilitási platform
2. Megosztott Közlekedési Eszközök IntegrációjaMegosztott Közlekedési Eszközök Integrációja
Kerékpáros és gyalogos útvonalak integrálása
Elektromos rollerek és megosztott járművek nyomonkövetése
Komplex mobilitási szolgáltatások összekötése
Multimodális közlekedési megoldások
9.2 Felhasználói Visszajelzések Kezelése: Folyamatos Fejlesztés és9.2 Felhasználói Visszajelzések Kezelése: Folyamatos Fejlesztés és
InnovációInnováció
Visszajelzési CsatornákVisszajelzési Csatornák
1. Közvetlen Visszajelzési LehetKözvetlen Visszajelzési Lehetőségekségek
Alkalmazáson belüli visszajelzési rendszer
Rendszeres elégedettségi felmérések
Felhasználói fórumok
Közösségi média csatornák
2. Visszajelzés-feldolgozási FolyamatVisszajelzés-feldolgozási Folyamat
Automatikus kategorizálás
Visszajelzések prioritási szintjeinek meghatározása
Fejlesztési javaslatok részletes elemzése
Rendszeres visszacsatolás a felhasználók felé
Fejlesztési CiklusFejlesztési Ciklus
1. Folyamatos Tesztelés és ValidálásFolyamatos Tesztelés és Validálás
Alfa és béta tesztelési programok
Nyílt forráskódú fejlesztői közösség bevonása
Rendszeres biztonsági auditok
Felhasználói élmény folyamatos monitorozása
2. Iteratív Fejlesztési Módszer tanIteratív Fejlesztési Módszer tan
Agilis fejlesztési módszerek
Gyors prototípus-készítés
Folyamatos integrációs és telepítési eljárások
Rendszeres szoftverfrissítések
A fejlesztési tervek nem csupán technológiai útitervet jelentenek, hanem a Kaposbusz Digitális Platform azon
dokumentáció_vizsga
Page 23 of 26

elkötelezettsége, hogy folyamatosan megújulva a lehető legmagasabb szintű mobilitási megoldásokat kínálja
a felhasználók számára.
10. Melléklet: Kiegészít10. Melléklet: Kiegészítő Információk és Referencia AnyagokInformációk és Referencia Anyagok
10.1 Fogalomtár: Technikai és Közlekedési Kifejezések Magyarázata10.1 Fogalomtár: Technikai és Közlekedési Kifejezések Magyarázata
A digitális platform használata során számos speciális technikai és közlekedési kifejezéssel találkozhat a
felhasználó. Az átláthatóság és könnyebb értelmezhetőség érdekében összeállítottunk egy átfogó
fogalomtárat.
Technikai KifejezésekTechnikai Kifejezések
1. GTFS (General Transit Feed Specification)GTFS (General Transit Feed Specification)
Szabványosított formátum a tömegközlekedési menetrendek és kapcsolódó földrajzi adatok
megosztására
Lehetővé teszi a különböző közlekedési rendszerek közötti adatcserét
Nemzetközileg elfogadott szabvány
2. API (Application Programming Interface)API (Application Programming Interface)
Szoftverek közötti kommunikációs felület
Lehetővé teszi a különböző rendszerek adatcseréjét
Biztosítja a platformok közötti interoperabilitást
3. Reszponzív DizájnReszponzív Dizájn
Olyan webes megjelenítési módszer, amely automatikusan igazodik a különböző eszközök
képernyőméretéhez
Egységes felhasználói élményt biztosít minden eszközön
4. TokenizációTokenizáció
Bizalmas adatok biztonságos helyettesítése nem érzékeny megfelelőkkel
Pénzügyi tranzakciók és személyes adatok védelmének eszköze
5. Valós IdejValós Idejű AdatfrissítésAdatfrissítés
Folyamatos, azonnali adatszolgáltatás
Naprakész információk biztosítása
Dinamikus rendszerfrissítési mechanizmus
Közlekedési KifejezésekKözlekedési Kifejezések
1. Dinamikus JáratkövetésDinamikus Járatkövetés
Járművek valós idejű nyomonkövetése
GPS-alapú helymeghatározás
Pontos érkezési idők jelzése
2. Multimodális KözlekedésMultimodális Közlekedés
Több közlekedési módot magába foglaló utazási forma
dokumentáció_vizsga
Page 24 of 26

Különböző közlekedési eszközök kombinált használata
Rugalmas és hatékony mobilitási megoldás
10.2 Gyors Hivatkozások: Fontos Elérhet10.2 Gyors Hivatkozások: Fontos Elérhetőségek és Linkekségek és Linkek
Ügyfélszolgálati CsatornákÜgyfélszolgálati Csatornák
Telefonos ÜgyfélszolgálatTelefonos Ügyfélszolgálat: +36 (XX) XXX-XXXX
E-mailE-mail: ugyfelszolgalat@kaposbusz.hu
HibabejelentésHibabejelentés: hibajegy@kaposbusz.hu
Hivatalos Online FelületekHivatalos Online Felületek
Hivatalos WeboldalHivatalos Weboldal: www.kaposbusz.huwww.kaposbusz.hu
Mobil Alkalmazás LetöltéseMobil Alkalmazás Letöltése:
Android: Google Play Store
iOS: Apple App Store
Hivatalos DokumentumokHivatalos Dokumentumok
Adatvédelmi Szabályzat
Felhasználási Feltételek
Általános Szerződési Feltételek
10.3 Kapcsolódó Dokumentumok: Kiegészít10.3 Kapcsolódó Dokumentumok: Kiegészítő ForrásanyagokForrásanyagok
Technikai DokumentációTechnikai Dokumentáció
1. Telepítési ÚtmutatóTelepítési Útmutató
Részletes rendszertelepítési leírás
Hardver- és szoftverkövelmények
Hibaelhárítási útmutató
2. FejlesztFejlesztői Dokumentációi Dokumentáció
API leírások
Integrációs útmutatók
Technikai specifikációk
Biztonsági DokumentumokBiztonsági Dokumentumok
Biztonsági Szabályzat
Adatvédelmi Tájékoztató
Kockázatkezelési Útmutató
Záró GondolatokZáró Gondolatok
A Kaposbusz Digitális Platform nem csupán egy alkalmazás, hanem egy komplex mobilitási ökoszisztéma,
amely folyamatosan alakul és fejlődik felhasználóinak igényei és a technológiai innovációk mentén.
dokumentáció_vizsga
Page 25 of 26

created with the evaluation version of Markdown MonsterMarkdown Monster
dokumentáció_vizsga
Page 26 of 26