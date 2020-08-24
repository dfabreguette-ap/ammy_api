---
title: user_groups#add_member
category: Requêtes
url_path: "/user_groups/:id/users/add.json"
type: PUT
layout: null
---

### Paramètres

| Paramètre | **Type** | Mode de transmission | Description                |
| --------- | -------- | -------------------- | -------------------------- |
| user        | user   | body                | Id du user requis |

Exemple :

```json
{
  user: {
    "id": "5a54e226d95bd83fcd736f1e"
  }
}
```


### Réponse

Retourne une 200 si l'ajout a fonctionné ou une 400 le cas échéant
