public class WeatherService {
    private static final String BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    private static final String API_KEY = '684bda0767665764dc0da1d147793102'; // Replace with your actual API key

    public class WeatherResponse {
        public Main main;
        public List<Weather> weather;
    }

    public static WeatherResponse getWeather(Decimal latitude, Decimal longitude) {
        String url = BASE_URL + '?lat=' + latitude + '&lon=' + longitude + '&appid=' + API_KEY + '&units=metric';

        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('GET');

        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            return (WeatherResponse) JSON.deserialize(response.getBody(), WeatherResponse.class);
        } else {
            System.debug('Error: ' + response.getBody());
            return null;
        }
    }
}