---
title: users#create
category: Requêtes
url_path: "/users.json"
type: POST
layout: null
---

### Paramètres

| Paramètre | **Type** | Mode de transmission | Description                |
| --------- | -------- | -------------------- | -------------------------- |
| user        | user   | body                | Tout ou partie des paramètres d'utilisateur (en tenant compte des paramètres requis) |

Exemple :

```json
{
  organization: {
    "first_name": "John",
    "last_name": "Doe",
    // ... voir type de resource "Utilisateur"
  }
}
```


### Réponse

Retourne une représentation de la resource :

```
user
```

Exemple :

```json
{
  "id": "5a54e226d95bd83fcd736f1e",
  "slug": "john-d",
  // ... voir type de resource "Utilisateur"
}
```
