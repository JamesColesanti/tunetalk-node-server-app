import axios from 'axios';
const API_BASE = 'https://api.spotify.com/v1/search'; // process.env.REACT_APP_API_BASE_A9;
// const TUITS_API = `${API_BASE}/tuits`;

// export const createTuit = async (tuit) => {
//     const response = await axios.post(TUITS_API, tuit)
//     return response.data;
// }

export const findTuits = async () => {
    const response = await axios.get(API_BASE, {
        params: {
            type: 'album',
            market: 'ES',
            limit: 5,
            offset: 0
        }
    });
    const tuits = response.data;
    return tuits;
}

// export const deleteTuit = async (tid) => {
//     const response = await axios.delete(`${TUITS_API}/${tid}`)
//     return response.data
// }

// export const updateTuit = async (tuit) => {
//     await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
//     const response = await axios.get(TUITS_API);
//     return response.data;
// }
    

    