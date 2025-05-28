
using FrugalCartel.API.Models;

namespace FrugalCartel.API.Services
{
    public class FrugalCartelSearchService
    {
        // TODO: TASK Just some placeholder values, Implement when database is decided
        private readonly List<GroceryItem> _items = new()
        {
            new("1", "Organic Milk", "Costco", 3.49m),
            new("2", "Almond Milk", "Walmart", 2.99m),
            new("3", "Brown Bread", "Target", 2.79m),
            new("4", "Greek Yogurt", "Trader Joe's", 4.25m),
            new("5", "Eggs", "Costco", 5.99m)
        };

        public List<GroceryItem> Search(string query, string? store)
        {
            return _items
                .Where(i => i.Name.Contains(query, StringComparison.OrdinalIgnoreCase) &&
                            (string.IsNullOrEmpty(store) || i.Store == store))
                .ToList();
        }
    }
}
