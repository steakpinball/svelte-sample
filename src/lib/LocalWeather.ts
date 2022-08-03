export interface LocalForecast {
    date: string;
    temperatureF: number;
    summary: string;
}

const summaries = ["Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"];

export function getSingleLocalWeather(): LocalForecast {
    return {
        date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        temperatureF: Math.floor(Math.random() * 125 - 20),
        summary: summaries[Math.floor(Math.random() * summaries.length)]
    };
}