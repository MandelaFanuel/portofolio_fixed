
# Notes de sécurité pour ce portfolio

- **Mot de passe admin côté client** (`ADMIN_PASSWORD`) : uniquement pour le mode édition local. 
  Ne protège pas contre un attaquant. Évitez d'exposer ce mot de passe publiquement.
- **CSP (Content-Security-Policy)** : restreint aux domaines nécessaires (`self`, Tailwind CDN, cdnjs, Google Fonts, Vercel API).
- **Sanitisation** : les champs éditables sont nettoyés (suppression des tags script/style/iframe, attributs `on*`, `javascript:`).
- **Documents protégés** : l'accès réel doit passer par l'API Vercel (URL signées). Aucune donnée sensible n'est stockée côté client.
- **Conseils** :
  - Sur GitHub Pages, servez depuis le sous-dossier `portofolio/` ou réorganisez pour mettre `index.html` à la racine.
  - Si vous ajoutez d'autres CDN, pensez à adapter la CSP.
  - Ne stockez jamais de clés secrètes dans le code client.
