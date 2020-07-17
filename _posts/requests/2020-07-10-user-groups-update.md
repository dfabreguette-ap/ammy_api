---
title: user_groups#update
category: Requêtes
url_path: "/user_groups/:id.json"
type: PUT
layout: null
---

### Paramètres

| Paramètre    | **Type**     | Mode de transmission | Description                                                  |
| ------------ | ------------ | -------------------- | ------------------------------------------------------------ |
| id           | string       | query                | Identifiant de la resource                                   |
| user_group | user_group | body                 | Tout ou partie des paramètres (en tenant compte des paramètres requis) |

Exemple :

```json
{
  user_group: {
    "name": "Membres"
    // ... voir type de resource "UserGroup"
  }
}
```


### Réponse

Retourne une représentation de la resource :

```
user_group
```

Exemple :

```json
{
  "id": "5a54e226d95bd83fcd736f1d",
  "name": "Membres",
  // ... voir type de resource "UserGroup"
}
```
