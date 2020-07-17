---
title: organizations#create
category: Requêtes
url_path: "/organizations.json"
type: POST
layout: null
---

### Paramètres

| Paramètre | **Type** | Mode de transmission | Description                |
| --------- | -------- | -------------------- | -------------------------- |
| organization        | organization   | body                | Tout ou partie des paramètres de communauté (en tenant compte des paramètres requis) |

Exemple :

```json
{
  organization: {
    "name": "Ma Communauté"
    // ... voir type de resource "Communauté"
  }
}
```


### Réponse

Retourne une représentation de la resource :

```
organization
```

Exemple :

```json
{
  "id": "5a54e226d95bd83fcd736f1d",
  "slug": "ma-communaute",
  // ... voir type de resource "Communauté"
}
```
