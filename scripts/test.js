import http from 'k6/http';

import { sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<10'], // 95% of requests should be below 10ms
    },
};

export default function () {
    http.get('http://localhost:8000');
    sleep(1);
}
