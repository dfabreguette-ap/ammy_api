---
title: Format des réponses et pagination
category: Format des échanges

---

Si l’appel à une resource est correcte, la réponse contient une representation JSON de la resource demandée. Les representations JSON des différentes ressources sont documentées dans le chapitre “Type de réponses”.

Certains appels retournent une collection de ressources. Dans ce cas, le format de la réponse est le suivant :

```json
{
	"items": [
	    {
	    // Representation JSON du type de resource demandée
	    }
	    …
	],
	"pagination": {
	    "page": "int",
	    "count": "int",
	    "per": "int"
	}
}
```

| Élément              | Type  | Description                                                  |
| -------------------- | ----- | ------------------------------------------------------------ |
| **items**            | array | Un tableau contenant les représentations JSON des ressources demandées |
| **pagination.page**  | int   | La page courante de la collection retournée                  |
| **pagination.count** | int   | Le nombre total de resources (non le nombre de resources retournées dans la page courante) |
| **pagination.per**   | Int   | Le nombre de résultat par page                               |
