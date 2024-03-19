import { Request, Response } from 'express';
import axios from 'axios';
import { config } from '../config';
import { itemMapper } from '../mappers/item-result.mapper';

export const getItem = async (req: Request, res: Response) => {
    try {
        const itemId = req.params.id;
        const itemUrl = config.ENDPOINT_ITEM_PRODUCT + itemId;
        const descriptionUrl = `${config.ENDPOINT_ITEM_PRODUCT + itemId}/description`;

        const [itemResponse, descriptionResponse] = await Promise.allSettled([
            axios.get(itemUrl),
            axios.get(descriptionUrl)
        ]);
        if (itemResponse.status === 'rejected' || descriptionResponse.status === 'rejected') {
            throw new Error('Error al obtener los datos del artículo');
        }
        const [itemData, descriptionData] = [itemResponse.value.data, descriptionResponse.value.data];
        
        const categoriesUrl = `${config.ENDPOINT_CATEGORIES}/${itemData.category_id}`;
        const categoriesResponse = await axios.get(categoriesUrl);

        if (categoriesResponse.status !== 200 || !categoriesResponse.data) {
            throw new Error('Error al obtener las categorías del artículo');
        }
        const categoriesData = categoriesResponse.data;
        res.json(itemMapper(itemData, descriptionData, categoriesData));

    } catch (error: any) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}