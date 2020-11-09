---
title: user_groups#index
category: Requêtes
url_path: "/organizations/:organization_id/user_groups(/pour/:user_id)(/page/:page)(/per/:per).json"
type: GET
layout: null
---

### Paramètres

| Paramètre | **Type** | Mode de transmission | Description                |
| --------- | -------- | -------------------- | -------------------------- |
| organization_id        | String   | query                | Communauté cible |
| user_id        | String   | query                | Utilisateur cible (optionnel) |
| page        | String   | query                | Page (optionnel) |
| per        | String   | query                | Nombre d'éléments par page (optionnel) |



### Réponse

Retourne une représentation de la ressource :

```
user_group
```

Exemple :

```json
{
    "count": 0,
    "page": "1",
    "resource_type": "user_group",
    "items": [{
      "id": "5a54e226d95bd83fcd736f1e",
      "name": "Membres",
      // ... voir type de ressource "UserGroup"
    }]
}
```
