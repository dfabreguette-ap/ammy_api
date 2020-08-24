---
title: organizations#show
category: Requêtes
url_path: "/organizations/:id.json"
type: GET
layout: null
---

### Paramètres

| Paramètre | **Type** | Mode de transmission | Description                |
| --------- | -------- | -------------------- | -------------------------- |
| Id        | string   | query                | Identifiant de la ressource |

### Réponse

Retourne une représentation de la ressource :

```
organization
```

Exemple :

```json
{
  "id": "5a54e226d95bd83fcd736f1d",
  "slug": "ma-communaute",
  // ... voir type de ressource "Communauté"
}
```
