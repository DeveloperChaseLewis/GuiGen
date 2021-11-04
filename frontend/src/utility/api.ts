import axios from 'axios';

export default class Api {

    constructor() {
    }

    async get<T>(route: string): Promise<T> {
        const result = await axios.get<T>(route);
        return result.data;
    }

    async post<T>(route: string,data?: any): Promise<T> {
        const result = await axios.post<T>(route,data);
        return result.data;
    }
};