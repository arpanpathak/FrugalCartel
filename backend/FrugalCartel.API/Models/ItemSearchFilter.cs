namespace FrugalCartel.API.Models
{
    public record ItemSearchFilter(List<KeyValuePair<String, String>> filters);
}

/**
    API Design

    /v1/items?searchQuery=?
    /v1/items/{grocory_item_id}

**/