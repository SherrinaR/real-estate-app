import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

/*---FETCH API FROM URL---*/
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'a9e44bd46emsh0c0fd8ad72177bcp1a68b2jsnaeb7e440cebf',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}

