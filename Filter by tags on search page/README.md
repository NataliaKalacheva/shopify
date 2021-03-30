# Shopify filter by tags on search page using query params (Venue theme)

## Enable search by tag

- In template search.liquid find: 
```
 {% if item.object_type == 'product' %}
 ```

 - Replace with:

 ```
  {% if item.object_type == 'product' or item.object_type == 'tag' %}
 ```

## Replace product template with section

```
{% if item.object_type == 'product' or item.object_type == 'tag' %}
  {% section 'search-products' %}
{% endif %}
```

