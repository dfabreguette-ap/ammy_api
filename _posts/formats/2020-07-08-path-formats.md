---
title: Format des URLs
category: Format des échanges
---

Le format des urls d’accès aux ressources est le suivant :

```
<VERB> https://ammy.fr/api/:version/:resource_type(/:id)(/param_name/:param_value).:format
```

[VERB] est le verbe HTTP correspondant à la requête (GET, POST, PUT, ...)

[version] est l’identifiant de version de l’API utilisée. Celui-ci sera valorisé à v3. Les futures mises à jour importantes de l’API engendreront systématiquement un changement de numéro de version.

[resource_type] est le type de ressource demandée. Celui-ci peut prendre différentes valeurs :

organizations
user_groups
users

[id] est l’identifiant unique de la ressource demandée. Celui-ci est normalement récupéré par un autre appel à l’API, ou fourni en retour d’un appel de création d’une nouvelle ressource.

[format] est le format de sérialisation souhaitée. Le format par défaut est le JSON, mais d’autres formats de sérialisation pourront être mis en place à l’avenir.

[param_name/param_value] est la chaine des paramètres attendus par la ressource demandée. Par exemple, le paramètre "page" indiquant le numéro de la page demandée : "/page/1"
