import types from '../types';
import { fetchWithouthToken,fetchWithToken } from '../helper/fetch';
import { decode } from 'jsonwebtoken';


export const startLogin = (data) => async ( callback ) => {
    const resp = await fetchWithouthToken({uri:'/usuario/login',method:'POST',data})
    const token = await resp.json();
    localStorage.setItem('token', token.token);
    const { uid, username } = decode(token.token);
    callback( login({ uid, username }) );
}

export const login = ( payload ) => {
    const { login:type } = types;
    return {
        type,
        payload
    }
}

export const logout = () => {
    const { logout:type } = types;
    return { type }
}

export const startLogout = () => (callback) => {
    localStorage.clear();
    callback( logout );
}


export const startChecking = () => async (callback) => {
    const resp = await fetchWithToken({uri:'/refreshToken'});
    const tokenResp = await resp.json();

    if( tokenResp.ok ){
        localStorage.setItem('token', tokenResp.token);
        const { uid, username } = decode(tokenResp.token);
        callback( login({ uid, username }) );
    }else{
        callback( startLogout() );
    }
    callback( stopCheckingAuth() );
}

export const stopCheckingAuth = () => {
    const { checking:type } = types;
    return { type }
}