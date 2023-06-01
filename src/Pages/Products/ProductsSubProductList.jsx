import React from "react";
import { useParams } from "react-router-dom";
import DataProducts from "../../Data/DataProducts";
import ProductsSubProductStyle1 from "./ProductsSubProductStyle1";
import ProductsSubProductStyle2 from "./ProductsSubProductStyle2";
import GrowWithUs from "../../Components/GrowWithUs";

export default function ProductsSubProductList() {
    let { productId } = useParams();
    let product = DataProducts.find((dp) => dp.id == productId);

    return (
        <div className="product_sub_product_list ">
            <div className="top_seciton container">
                <img src={product.img} />
                <h1>{product.title}</h1>
                <p>{product.shortDesc}</p>
            </div>
            <div>
                {product.childProducts.map((cp, i) => {
                    return i % 2 == 0 ? (
                        <ProductsSubProductStyle1 key={i} parentId={productId} childProduct={cp} />
                    ) : (
                        <ProductsSubProductStyle2 key={i} parentId={productId} childProduct={cp} />
                    );
                })}
            </div>
            <GrowWithUs customClassName="container" />
            
        </div>
    );
}
