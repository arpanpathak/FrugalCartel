namespace FrugalCartel.API.Models
{
    public record Address(
        string Street,
        string City,
        string State,
        string Zip,
        string Country,
        Location? geoLocation
    );
}
