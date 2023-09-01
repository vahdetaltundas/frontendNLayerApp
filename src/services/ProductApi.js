import axios from "axios";

// https://localhost:7054/api/Products
// Persis URL
const Prodcut_URL="/api/Products"

class ProductApi {

    //[HttpGet]
    All()
    {
        return axios.get(`${Prodcut_URL}`);
    }

    //[HttpGet("{id}")]
    GetById(id)
    {
        return axios.get(`${Prodcut_URL}/${id}`);
    }

    //[HttpPost]
    Save(productDto)
    {
        return axios.post(`${Prodcut_URL}`,productDto);
    }

    //[HttpPut]
    Update(productDto)
    {
        return axios.put(`${Prodcut_URL}`,productDto)
    }

    //[HttpDelete("{id}")]
    Remove(id)
    {
        return axios.delete(`${Prodcut_URL}/${id}`)
    }    
}

export default new ProductApi();