---
title: organizations#status
category: Notifications
url_path: "/notifications/organizations/:id/status.json"
type: POST
layout: null
---

Ammy appellera cette URL pré-fixée par l'URL de notification paramétrée dans
votre administration à chaque fois qu'une communauté de votre cercle
devient active.

### Paramètres

| Paramètre | **Type** | Mode de transmission | Description                |
| --------- | -------- | -------------------- | -------------------------- |
| Id        | string   | query                | Identifiant de la ressource |
| organization | organization | body          | Tout ou partie des paramètres de communauté (en tenant compte des paramètres requis) |
| status | String | body          | Statut de la communauté : ["active", "inactive"] |
