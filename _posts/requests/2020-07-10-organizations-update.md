---
title: organizations#update
category: Requêtes
url_path: "/organizations/:id.json"
type: PUT
layout: null
---

### Paramètres

| Paramètre    | **Type**     | Mode de transmission | Description                                                  |
| ------------ | ------------ | -------------------- | ------------------------------------------------------------ |
| id           | string       | query                | Identifiant de la ressource                                   |
| organization | organization | body                 | Tout ou partie des paramètres de communauté (en tenant compte des paramètres requis) |

Exemple :

```json
{
  organization: {
    "name": "Ma Communauté"
    // ... voir type de ressource "Communauté"
  }
}
```


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
