---
title: user_groups#remove_member
category: Requêtes
url_path: "/user_groups/:id/users/remove.json"
type: DELETE
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

Retourne une 200 si l'utilisateur a bien été retiré du groupe sinon une 400 en cas d'erreur.
