---
title: Groupe
category: Type de resources
layout: null


---
Nom technique :

```
user_group
```

La représentation JSON d'un groupe est la suivante :

```json
{
  "id": "5e591e9ed3949d23c6b72ade",
  "name": "Membres",
  "owner_type": "Organization",
  "owner_id: ": "5a54e226d95bd83fcd736f1d",
  "parent_user_group_ids": ["5a54e226d95bd83fcd736f1b", "5a54e226d95bd83fcd736f1e"],
  "updated_at": "2020-07-17T12:30:33+02:00",
  "created_at": "2020-07-17T12:30:33+02:00"
}
```



| Paramètre             | **Type**      | Requis | Description                                                  | **Exemple**                                              |
| --------------------- | ------------- | ------ | ------------------------------------------------------------ | -------------------------------------------------------- |
| id <span class="read-only" data-text="LECTURE SEULE"></span>                   | string        | -      | Identifiant unique du groupe                                 | 5e591e9ed3949d23c6b72ade                                 |
| name                  | string        | oui    | Nom du groupe                                                | Membres                                                  |
| owner_type            | string        | oui    | Type de la resource propriétaire du groupe (Organization ou User) | Organization                                             |
| owner_id              | string        | oui    | Identifiant de la resource propriétaire du groupe            | 5a54e226d95bd83fcd736f1d                                 |
| parent_user_group_ids | array[string] | non    | Identifiants des groupes parents du groupe                   | ["5a54e226d95bd83fcd736f1b", "5a54e226d95bd83fcd736f1e"] |
| updated_at <span class="read-only" data-text="LECTURE SEULE"></span>           | date          | -      | Date de dernière modification                                | 2020-07-17T12:30:33+02:00                                |
| created_at <span class="read-only" data-text="LECTURE SEULE"></span>           | date          | -      | Date de création                                             | 2020-07-17T12:30:33+02:00                                |
