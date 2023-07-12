import axios from "axios";
import * as Actiontype from "./Actiontype";
import { API_URL } from "../../Url";


function Getproductaction() {
    return async (dispatch) => {
        dispatch({
            type: Actiontype.GET_PRODUCT_INIT
        })
        await axios.get(`${API_URL}/api/produts`, {
        }).then((res) => {
            console.log('res----', res)
            if (res.status === 200) {
                dispatch({
                    type: Actiontype.GET_PRODUCT_SUCCESS,
                    payload: res?.data
                })
            }
            else {
                dispatch({
                    type: Actiontype.GET_PRODUCT_FAIL,
                    payload: res.message
                })
            }
        })
            .catch((err) => {
                dispatch({
                    type: Actiontype.GET_PRODUCT_FAIL,
                    payload: []
                })
            })
    }

}


export const GetSingleAction = (id) => {
    return async (dispatch) => {
        dispatch({
            type: Actiontype.GET_SINGEL_INIT
        })
        await axios.get(`${API_URL}/api/singleproduct/${id}`, {
        }).then((res) => {
            if (res.status === 200) {
                dispatch({
                    type: Actiontype.GET_SINGEL_SUCCESS,
                    payload: res?.data
                })
            }
            else {
                dispatch({
                    type: Actiontype.GET_SINGEL_FAIL,
                    payload: res.message
                })
            }
        })
            .catch((err) => {
                dispatch({
                    type: Actiontype.GET_SINGEL_FAIL,
                })
            })
    }
}



export default Getproductaction