import { Request, Response } from "express";
import axios from 'axios';
import { config } from "../config";
import { searchMapper } from "../mappers/search.mapper";

export const getSearch = async (req: Request, res: Response) => {
    try {
        const query: string | undefined = req.query.q?.toString();
        if (!query) {
            return res.status(400).json({ error: 'Se requiere un término de búsqueda' });
        }
        const apiUrl = `${config.ENDPOINT_SEARCH}?q=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl);
        if( response.status === 200 ) {
            const data = searchMapper(response.data)
            res.json(data);
        } else {
            res.status(response.status).json({ error: 'No se pudo completar la búsqueda ' });
        }
    } catch (error: any) {
        res.status(500).json({ error: config.ENDPOINT_SEARCH });
    }
} 