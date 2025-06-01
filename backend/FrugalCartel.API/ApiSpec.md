# API Specification: Grocery Price Comparison

## Endpoints

### `GET /v1/items`

**Parameters:**

- `search` (string, required)  
- `location` (string, optional)  
- `radius` (miles, optional, default = 10)  
- `limit` (int, optional, default = 20)

**Description:**  
Search for grocery items by name/term. Returns price comparisons across stores.

**Example Response:**

```json
{
  "items": [
    {
      "id": "item_123",
      "name": "Organic Bananas",
      "stores": [
        {
          "store_id": "store_456",
          "name": "Walmart",
          "price": 0.59,
          "unit": "per lb",
          "distance": 1.2
        }
      ]
    }
  ]
}
```

---

### `GET /v1/items/{item_id}`

**Parameters:**

- `item_id` (string, required)

**Description:**  
Get detailed price data for a specific item.

**Example Response:**

```json
{
  "id": "item_123",
  "name": "Organic Bananas",
  "category": "produce",
  "stores": [
    {
      "store_id": "store_456",
      "name": "Walmart",
      "price": 0.59,
      "unit": "per lb",
      "distance": 1.2,
      "last_updated": "2023-05-20T12:00:00Z"
    }
  ]
}
```

---

## Request Headers

| Header          | Value              | Required? |
|-----------------|--------------------|-----------|
| `Authorization` | `Bearer {API_KEY}` | Yes       |
| `Content-Type`  | `application/json` | Yes       |

---

## Error Responses

| Code | Status        | Description                  |
|------|---------------|------------------------------|
| 400  | Bad Request   | Missing/invalid parameters.  |
| 401  | Unauthorized  | Invalid/missing API key.     |
| 404  | Not Found     | Item or store not found.     |
| 500  | Server Error  | Internal server error.       |

---

## Examples

### cURL Request – Search

```bash
curl -X GET "https://api.yourdomain.com/v1/items?search=banana&location=90210" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### cURL Request – Single Item

```bash
curl -X GET "https://api.yourdomain.com/v1/items/item_123" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Changelog

| Version | Date       | Changes          |
|---------|------------|------------------|
| v1.0    | 2023-05-20 | Initial release. |

---
