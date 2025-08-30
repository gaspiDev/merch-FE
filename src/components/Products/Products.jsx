import { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
                console.log(data)
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="bg-beige min-h-screen">
            <h1 className="text-airbnb font-inter font-[600] text-center lg:text-[48px] sm:text-[48px] text-[30px] tracking-tighter text-nowrap mb-8">Productos Personalizables</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                    <img
                    src={product.imageURL}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <h2 className="text-lg font-semibold text-[#2C2C2C]">{product.name}</h2>
                    {product.description && (
                        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                    )}
                    {product.price && (
                        <p className="text-[#ff5a5f] font-bold mt-2">${product.price}</p>
                    )}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Products
