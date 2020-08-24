---
title: users#update
category: Requêtes
url_path: "/users/:id.json"
type: PUT
layout: null
---

### Paramètres

| Paramètre | **Type** | Mode de transmission | Description                |
| --------- | -------- | -------------------- | -------------------------- |
| id           | string       | query                | Identifiant de la ressource                                   |
| user        | user   | body                | Tout ou partie des paramètres d'utilisateur (en tenant compte des paramètres requis) |

Exemple :

```json
{
  user: {
    "first_name": "John"
    // ... voir type de ressource "User"
  }
}
```


### Réponse

Retourne une représentation de la ressource :

```
user
```

Exemple :

```json
{
  "id": "5a54e226d95bd83fcd736f1e",
  "first_name": "John",
  // ... voir type de ressource "User"
}
```
