---
title: Communautés
category: Type de resources
layout: null

---
Nom technique :

```
organization
```

La représentation JSON d'une communauté est la suivante :

```json
{
  "id": "5a54e226d95bd83fcd736f1d",
  "slug": "ma-communaute",
  "name": "Ma Communauté",
  "avatar": {
    "logo": "/fichiers/organization/ma-communaute/avatar/logo",
    "thumb": "/fichiers/organization/ma-communaute/avatar/thumb"
  },
  "banner": {
    "large": "/fichiers/organization/ma-communaute/banner/large"
  },
  "zipcode": "12230",
  "city": "La Cavalerie",
  "country": "France",
  "coordinates": [
    44.007173427613,
    3.16025472990969
  ],
  "full_address": "Route de la Tune, Le Bosc, Les Jouadous, La Cavalerie, Millau, Aveyron, Occitanie, France métropolitaine, 12230, France",
  "email": "email@gmail.com",
  "admin_ids": [
    "58f7282dd3949d69e7693fcb",
    "5e591e9ed3949d23c6b72a0e"
  ],
  "description": "<div>description</div>",    
  "parent_organization_id": "5a54e226d95bd83fcd736a1a",
  "is_active": true,
  "updated_at": "2020-07-17T12:30:33+02:00",
  "created_at": "2020-07-17T12:30:33+02:00"
}
```

| Paramètre                                                    | **Type**      | Requis | Description                                                  | **Exemple**                                                  |
| ------------------------------------------------------------ | ------------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| id <span class="read-only" data-text="LECTURE SEULE"></span> | string        | -      | Identifiant unique de la communauté                          | 5a54e226d95bd83fcd736f1d                                     |
| name                                                         | string        | -      | Nom de la communauté                                         | Ma communauté                                                |
| slug <span class="read-only" data-text="LECTURE SEULE"></span> | string        | -      | Slug unique de la communauté                                 | ma-communaute                                                |
| avatar.logo / avatar.thumb<span class="read-only" data-text="LECTURE SEULE"></span> | string        | non    | Chemin du logo de la communauté - à préfixer avec "https://ammy.fr" | /fichiers/organization/ma-communaute/avatar/logo             |
| banner.large<span class="read-only" data-text="LECTURE SEULE"></span> | string        | non    | Chemin de la bannière de la communauté - à préfixer avec "https://ammy.fr" | /fichiers/organization/ma-communaute/banner/large            |
| zipcode                                                      | int           | non    | Code postal (validé par la base Insee)                       | 30100                                                        |
| city                                                         | string        | non    | Ville                                                        | Alès                                                         |
| country                                                      | string        | non    | Pays                                                         | France                                                       |
| coordinates                                                  | array[float]  | non    | Coordonées GPS (Latitude puis longitude)                     | [44.1120681,4.0780741]                                       |
| full_address                                                 | string        | non    | Adresse postale complète                                     | Route de la Tune, Le Bosc, Les Jouadous, La Cavalerie, Millau, Aveyron, Occitanie, France métropolitaine, 12230, France |
| email                                                        | string        | non    | Adresse email de contact                                     | contact@communaute.com                                       |
| description                                                  | string        | non    | Description HTML de la communauté                            | <div>description</div>                                       |
| admin_ids                                                    | arrat[string] | oui    | Identifiants Ammy des administrateurs                        | ["58f7282dd3949d69e7693fcb",    "5e591e9ed3949d23c6b72a0e" ] |
| parent_organization_id                                       | string        | non    | Identifiant de la communauté mère                            | 5a54e226d95bd83fcd736a1a                                     |
| is_active<span class="read-only" data-text="LECTURE SEULE"></span> | bool          | -      | La communauté est-elle active ? A-t-elle au moins un compte administrateur actif ? | true                                                         |
| updated_at <span class="read-only" data-text="LECTURE SEULE"></span> | date          | -      | Date de dernière modification                                | 2020-07-17T12:30:33+02:00                                    |
| created_at <span class="read-only" data-text="LECTURE SEULE"></span> | date          | -      | Date de création                                             | 2020-07-17T12:30:33+02:00                                    |
