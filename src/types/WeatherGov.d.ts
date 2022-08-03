// https://www.weather.gov/documentation/services-web-api

interface GridpointForecastPeriod {
    detailedForecast: string;
    icon: string;
    name: string;
    shortForecast: string;
    startTime: string;
    temperature: number;
    temperatureUnit: string;
}

interface GridpointForecast {
    periods: GridpointForecastPeriod[];
}

interface GridpointForecastGeo {
    properties: GridpointForecast;
}

interface RelativeLocationProperties {
    city: string;
    state: string;
}

interface PointRelativeLocation {
    properties: RelativeLocationProperties;
}

interface Point {
    forecast: string;
    forecastHourly: string;
    relativeLocation: PointRelativeLocation;
}

interface PointGeo {
    properties: Point;
}
