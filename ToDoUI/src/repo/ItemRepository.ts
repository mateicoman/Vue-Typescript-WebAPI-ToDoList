import axios, { AxiosResponse } from "axios";
import Item from "../../src/types/Item";

const apiToDoEndpoint = `https://localhost:44333/api/items`;

class ItemRepository {
	GetItems(): Promise<AxiosResponse<Item[]>> {
		return axios.get<Item[]>(apiToDoEndpoint);
	}

	GetItemByID(id: number): Promise<AxiosResponse<Item>> {
		return axios.get<Item>(`${apiToDoEndpoint}/${id}`);
	}

	DeleteItemByID(id: number): Promise<AxiosResponse> {
		return axios.delete(`${apiToDoEndpoint}/${id}`);
	}

	EditItemByID(id: number): Promise<AxiosResponse> {
		return axios.put(`${apiToDoEndpoint}/${id}`);
	}

	AddNewItem(item: Item): Promise<AxiosResponse<Item>> {
		return axios.post<Item>(apiToDoEndpoint);
    }	
}

// Export a singleton instance in the global namespace
export const itemRepository = new ItemRepository();
