import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSingleAction } from '../redux/action/Productaction'
import { useParams } from 'react-router'

function Single() {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.GetProduct.getSingle.productinfo)


    console.log('products', products)


    const { id } = useParams();
    useEffect(() => {
        dispatch(GetSingleAction(id))
    }, [])



    return (
        <>

            <div>

                <div>
                    cfaedfserfgerfsre
                </div>
                <div className='fs-3 fw-semibold'>
                    {products.productname}
                </div>






            </div>


        </>
    )
}

export default Single