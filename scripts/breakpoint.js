import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    executor: 'ramping-arrival-rate', // Assure load increase if the system slows
    stages: [
        { duration: '10m', target: 10000 }, // just slowly ramp-up to a HUGE load
    ],
};

export default function () {
    http.get('http://localhost:8000');
    sleep(1);
}
