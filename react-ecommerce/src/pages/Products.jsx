import axios from "axios";
import { useState,useEffect } from "react";
import ProductCard from "../components/ProductsCard";
import "./Products.css";
const Products = () => {
    const[products,setProducts] = useState([]);
    const[currentPage,setCurrentPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const[rowPerPage,setRowPerPage] = useState(20);
    const indexOfLastItem = rowPerPage * currentPage;
    const indexOfFirstItem = indexOfLastItem - rowPerPage;
    const currentItems = products.slice(indexOfFirstItem,indexOfLastItem);
    const totalPages = Math.ceil(products.length/rowPerPage);

    useEffect(() => {
        axios.get("http://localhost:3000/products")
        .then((response)=>{
            console.log(response.data);
            setProducts(response.data);
        })
    }, [])

    const handlePrev = ()=> {
        setCurrentPage((prev)=>Math.max(prev-1,1));
    }
    const handleNext = ()=> {
        setCurrentPage((next)=>Math.min(next+1,totalPages));
    }
    const handlePage = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

return (

    <div>
        <h1 id="heading">Products</h1>
        <div className="products">
            {currentItems?.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        <div className="pagination">
            <button onClick={handlePrev} disabled={currentPage===1}>Prev</button>
            {Array.from({length:totalPages},(_,index)=>(
                <button key={index+1} onClick={()=>handlePage(index+1)} className={currentPage === index+1 ? "active" : ""}>{index+1}</button>
            ))}
            <button onClick={handleNext} disabled={currentPage===totalPages}>Next</button>
        </div>
    </div>
)
}

export default Products