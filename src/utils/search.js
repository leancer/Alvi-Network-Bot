const axios = require("axios").default;
const { endpoint } = require("./endpoint");

module.exports = async (searchString) => {
    try{
        const urlEncodedSearch = encodeURIComponent(searchString);
        const res = await axios.get(`${endpoint}/posts?search=${urlEncodedSearch}`);
        const data = res.data;
        if(data.length > 0){
            const modifiedData = data.map((item) => {
                const field = {
                    link:item.link,
                    title:item.title.rendered
                }
                return field;
            });
            return modifiedData;
        }else{
            return null;
        }   
    }catch(e){
        return null;
    }
}