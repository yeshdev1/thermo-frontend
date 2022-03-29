
export const request = (type, endpoint, setData, bodyData) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1234");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3001');
    myHeaders.append('Access-Control-Allow-Credentials', 'true');

    fetch(endpoint, {
        method: type,
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(result => {
        if (type === "POST") {
            if (typeof result === 'string') {
                var res = JSON.parse(result);
                setData(res.message.toLowerCase())
                return
            }
            setData(result.data)
            return
        }
        setData(result.data)
    })
    .catch(error => {
        if (type === "POST") {
            setData("error")
        }
        console.log('error', error)
    });
}
