---
title: user_groups#show
category: Requêtes
url_path: "/user_groups/:id.json"
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
user_group
```

Exemple :

```json
{
  "id": "5a54e226d95bd83fcd736f1e",
  "name": "Membres",
  // ... voir type de ressource "UserGroup"
}
```
