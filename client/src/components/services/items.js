const HEADERS = {"Content-Type": "application/json"};

export default {
    getAll: () => {
        return fetch("http://localhost:3005/menu/api/items")
        .then(response => response.json())
    },

    postItem: (requestBody) => {
        return fetch("http://localhost:3005/menu/api/admin/addMenuItem",
            {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then((response) => {
                console.log(response);
                return response.json();
              }).then(data=>console.log(data))
            
    }
    
}