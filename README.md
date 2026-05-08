# Movie Finder App

Kunskapskontroll 1.
Julia Björling
FSU25D

Start av egen JSON-server:
npx json-server db.json --port 3001

Måste startas för att tillfälligt spara data.


## Projektbeskrivning

Detta projekt är en CRUD-baserad React-applikation byggd med React, Vite, Axios och React Router DOM.

Applikationen använder OMDb API för att söka efter filmer och visa information om dem. Användaren kan söka efter filmer, se detaljerad information om varje film och hantera en personlig favoritlista.

Eftersom OMDb API är read-only har CRUD-funktionaliteten implementerats lokalt med hjälp av JSON Server. Användaren kan nu:

- Lägga till filmer i favoriter
- Ta bort filmer från favoriter
- Skriva kommentarer på favoritfilmerna i listan
- Redigera kommentarer
- Ta bort kommentarer

Projektet är skapat som en del av Kunskapskontroll 1.

---

## Teknologier som använts

- React
- Vite
- Axios
- React Router DOM
- JSON Server
- OMDb API

---

## API som används

Projektet använder OMDb API:

https://www.omdbapi.com/

---

## Funktioner

### API-integration
- Axios-konfiguration i separat api-mapp
- Återanvändbara API-funktioner
- Felhantering med try/catch

### CRUD-funktionalitet
- Create – lägga till favoritfilmer
- Read – söka och visa filmer
- Update – redigera kommentarer på favoritfilmer
- Delete – ta bort favoriter och kommentarer

### Routing
- Startsida
- Movies-sida
- Detaljsida för filmer
- Favorites-sida

### React-funktionalitet
- useState
- useEffect
- Controlled forms
- Conditional rendering
- Props och återanvändbara komponenter

### Extra funktioner
- Loading states
- Error handling
- Dynamiska routes med useParams
- Placeholder-bild när film saknar poster

---

## Projektstruktur

```txt
src/
├── api/
│   ├── axiosConfig.js
│   └── dataApi.js
├── assets/
├── components/
├── pages/
├── App.jsx
└── main.jsx