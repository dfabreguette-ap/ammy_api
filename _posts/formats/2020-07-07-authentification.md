---
title: Authentification
category: Format des échanges
url_path: "/oauth/token.json"
type: POST
---

Une fois votre compte API activé, Ammy vous donne des identifiants uniques d'accès à l'API :

- Identifiant d'application cliente (client_id)
- Mot de passe d'application cliente (client_secret)

Ces identifiants vous permettrons d'obtenir un jeton d'authentification (AccessToken) valable 2h qui devra être intégrer dans chaque requête qui sera faite.

Ce jeton d'accès doit ensuite être intégré soit en paramètre à chaque requête, soit dans les headers, dans la section "Authorization" (voir Bearer Tokens : <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication" target="_blank">https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication</a>).



| Paramètre     | **Type** | Description                                                  |
| ------------- | -------- | ------------------------------------------------------------ |
| grant_type    | string   | Typically, just stick to "client_credentials" mode. Use "refresh_token" with a "refresh_token" parameter to re-create a new token. A list of OAuth available grant types is available here : https://aaronparecki.com/oauth-2-simplified/#authorization |
| client_id     | string   | Application UID                                              |
| client_secret | string   | Application Secret                                           |


Tous les appels auront donc ensuite la forme suivante :

```HTTP
GET https://ammy.fr/api/v3/<resource>.json?access_token=<token>
```
