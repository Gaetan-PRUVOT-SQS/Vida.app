# Vida — Site vitrine ([vidapma.fr](https://vidapma.fr))

Site vitrine statique de **Vida**, l'application Android de suivi de cycle menstruel et
d'accompagnement des parcours PMA, en toute confidentialité (données stockées localement,
aucune connexion requise).

Le site présente l'application et propose le téléchargement direct de l'APK.

## Structure

```
.
├── index.html                      # Page d'accueil
├── cgu.html                        # Conditions générales d'utilisation
├── mentions-legales.html           # Mentions légales
├── politique-confidentialite.html  # Politique de confidentialité
├── 404.html                        # Page d'erreur
├── robots.txt                      # Indexation (APK exclu)
├── sitemap.xml                     # Plan du site
├── site.webmanifest                # Manifeste PWA
├── _headers                        # En-têtes HTTP (sécurité, cache, MIME)
├── assets/
│   ├── css/style.css               # Styles
│   ├── js/script.js                # Interactions (menu mobile…)
│   ├── fonts/                       # DM Sans + Pacifico (.woff2)
│   └── img/                         # Logo, icônes, favicons, image Open Graph
└── download/
    └── vida-v1.0.1.apk             # Application Android (installation directe)
```

Toutes les références aux ressources utilisent des **chemins racine-absolus** (`/assets/…`),
ce qui garantit un chargement correct depuis n'importe quelle page, y compris la `404.html`.

## Développement local

Aucune dépendance ni étape de build : c'est du HTML/CSS/JS statique. Servez simplement le
dossier à la racine via un serveur local, par exemple :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

> Servir depuis la racine est nécessaire pour que les chemins absolus (`/assets/…`,
> `/download/…`) se résolvent correctement.

## Déploiement

Le site est entièrement statique : il suffit de publier le contenu du dépôt à la racine
du domaine. Le fichier `_headers` décrit les en-têtes HTTP souhaités :

- les en-têtes de sécurité (CSP, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`…) ;
- le cache long et immuable des polices et des images ;
- le type MIME et le téléchargement forcé de l'APK.

## Application

- **Plateforme** : Android (installation directe via APK)
- **Version** : 1.0.1
- **SHA-256 de l'APK** : `d036f3e3f50f87bd57c8726300efd8c4f6719a1f3f657c17fd76dddf3a5629ff`

> **Avertissement** — Vida est un outil de suivi à but informatif. Ce n'est pas un dispositif
> médical : les prévisions de cycle et de fertilité sont indicatives, ne remplacent pas un avis
> médical et ne constituent pas une méthode de contraception ou de conception.

## Licence

Distribué sous licence **GNU Affero General Public License (AGPL)**.
Voir le fichier [LICENSE](LICENSE).

---

© 2026 SigmaQuantSystems
