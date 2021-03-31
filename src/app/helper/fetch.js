const url = process.env.REACT_APP_BACKEND_URL;

export const fetchWithouthToken = ({uri,method='GET',data}) => {
    if( method === 'GET' ){
        return fetch(`${url}${uri}`)
    } else {
        return fetch(`${url}${uri}`, {
            method,
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
    }
}

export const fetchWithToken =  ({uri,method='GET',data}) => {

    const token = localStorage.getItem('token') || '';
    
    if( method === 'GET' ){
        return fetch(`${url}${uri}`,{
            method,
            headers: { 
                'X-token': token
            }
        })
    } else {
        return fetch(`${url}${uri}`, {
            method,
            headers: { 
                'Content-Type':'x-www-form-urlencoded',
                'X-token': token
            },
            body: JSON.stringify(data)
        })
    }
}