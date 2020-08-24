---
title: user_groups#create
category: Requêtes
url_path: "/user_groups.json"
type: POST
layout: null
---

### Paramètres

| Paramètre | **Type** | Mode de transmission | Description                |
| --------- | -------- | -------------------- | -------------------------- |
| user_group        | user_group   | body                | Tout ou partie des paramètres (en tenant compte des paramètres requis) |

Exemple :

```json
{
  organization: {
    "name": "Pétanque",
    // ... voir type de ressource "UserGroup"
  }
}
```


### Réponse

Retourne une représentation de la ressource :

```
user_group
```

Exemple :

```json
{
  "id": "5a54e226d95bd83fcd736f1e",
  "name": "Pétanque",
  // ... voir type de ressource "UserGroup"
}
```
