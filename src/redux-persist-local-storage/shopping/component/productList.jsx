import { useEffect } from "react";
import ProductCard from "./productCard";
import {useDispatch, useSelector} from "react-redux"
import { fetchProducts } from "../../store/slices/productSlice";

const ProductList = () => {

    const products = useSelector(state=>state.product.items)
    const isLoading = useSelector(state=>state.product.isLoading)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

    return (
        <div className="flex flex-wrap gap-8 justify-around">
            {products.map((product) => (
                <ProductCard key={product.id} {...product}/>
            ))}
        </div>
    );
};

export default ProductList;
