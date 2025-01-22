import http from 'k6/http'
import {check, sleep} from 'k6'

export const options = {
    scenarios: {
        test_100: {
            executor: 'constant-vus',
            vus: 100,
            duration: '30s',
            startTime: '0s',
        },
        test_500: {
            executor: 'constant-vus',
            vus: 500,
            duration: '30s',
            startTime:'40s',
              },
        test_1000: {
            executor: 'constant-vus',
            vus: 1000,
            duration: '30s',
            startTime: '80s',
        },
    },
};

export default function () {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

    const response = http.get(BASE_URL);

    check(response, {
        'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200,
    });

    sleep(1);
    
}