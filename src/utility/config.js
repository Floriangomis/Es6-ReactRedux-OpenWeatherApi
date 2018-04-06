const mockServerUrl = 'http://localhost:4000/data';

export const config = {
    apiKey: '10b77989486d6e960da2912f2b4a1122',
    apiUrl: 'https://api.openweathermap.org/data/2.5/forecast?q=',
    requestConfig: {
        baseURL: mockServerUrl,
        timeout: 8000,
        transformRequest: [(data) => JSON.stringify(data)],
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
    }
}