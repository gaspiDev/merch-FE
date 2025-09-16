import { useEffect, useState } from 'react';

const Products = () => {
    const [products] = useState([
        {
            id: 1,
            name: "Wireless Headphones",
            category: "Electronics",
            price: 99.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
            description: "High-quality wireless headphones with noise cancellation"
        },
        {
            id: 2,
            name: "Coffee Mug",
            category: "Home",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=200&fit=crop",
            description: "Ceramic coffee mug perfect for your morning brew"
        },
        {
            id: 3,
            name: "Smartphone",
            category: "Electronics",
            price: 699.99,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
            description: "Latest smartphone with advanced camera features"
        },
        {
            id: 4,
            name: "Desk Lamp",
            category: "Home",
            price: 45.99,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
            description: "Modern LED desk lamp with adjustable brightness"
        },
        {
            id: 5,
            name: "Running Shoes",
            category: "Sports",
            price: 129.99,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
            description: "Comfortable running shoes for all terrains"
        },
        {
            id: 6,
            name: "Yoga Mat",
            category: "Sports",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop",
            description: "Non-slip yoga mat for your daily practice"
        },
        {
            id: 7,
            name: "Laptop",
            category: "Electronics",
            price: 1299.99,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
            description: "High-performance laptop for work and gaming"
        },
        {
            id: 8,
            name: "Throw Pillow",
            category: "Home",
            price: 24.99,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
            description: "Soft decorative throw pillow for your couch"
        }
    ]);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [filtersOpen, setFiltersOpen] = useState(false);
    // Get unique categories
    const categories = [...new Set(products.map(product => product.category))];

    // Handle category filter
    const handleCategoryChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    // Handle sort change
    const handleSortChange = (sortOption) => {
        setSortBy(sortOption);
    };

    // Filter and sort products
    const filteredAndSortedProducts = () => {
        let filtered = products;

        // Apply category filter
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        // Apply sorting
        if (sortBy === "price-low") {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-high") {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
        } else if (sortBy === "name") {
            filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        }

        return filtered;
    };

    const displayedProducts = filteredAndSortedProducts();

    return (
        <div className="max-w-7xl mx-auto p-4 bg-beige min-h-screen">
            <h1 className="text-airbnb font-inter font-[600] text-center lg:text-[48px] sm:text-[48px] text-[30px] tracking-tighter text-nowrap mb-8">Productos Personalizables</h1>

            {/* Filters Toggle Button */}
            <div className="mb-4">
                <button
                    onClick={() => setFiltersOpen(!filtersOpen)}
                    className="flex items-center px-3 py-1 bg-airbnb text-beige font-medium rounded-lg"
                >
                    <span className="mr-2">Filtros</span>
                    <svg
                        className={`w-4 h-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Filters */}
            {filtersOpen && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-in slide-in-from-top-2 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Category Filters */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800">
                                Categoria
                            </h3>
                            <div className="space-y-2">
                                {categories.map(category => (
                                    <label key={category} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(category)}
                                            onChange={() => handleCategoryChange(category)}
                                            className="mr-2 h-4 w-4 text-airbnb focus:ring-airbnb border-gray-300 rounded"
                                        />
                                        <span className="text-gray-700">{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Sort Options */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800">
                                Ordenar por
                            </h3>
                            <div className="space-y-2">
                                {[
                                    { value: "", label: "Default" },
                                    { value: "name", label: "Name (A-Z)" },
                                    { value: "price-low", label: "Price (Low to High)" },
                                    { value: "price-high", label: "Price (High to Low)" }
                                ].map(option => (
                                    <label key={option.value} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={sortBy === option.value}
                                            onChange={() => handleSortChange(option.value)}
                                            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <span className="text-gray-700">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Clear Filters */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <button
                            onClick={() => {
                                setSelectedCategories([]);
                                setSortBy("");
                            }}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                            Clear All Filters
                        </button>
                    </div>
                </div>)}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedProducts.map(product => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="aspect-w-16 aspect-h-9">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                                    {product.name}
                                </h3>
                                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                    {product.category}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-green-600">
                                    ${product.price}
                                </span>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* No Products Message */}
            {displayedProducts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        No products found matching your filters.
                    </p>
                </div>
            )}

            {/* Results Count */}
            <div className="mt-8 text-center text-gray-600">
                Showing {displayedProducts.length} of {products.length} products
            </div>
        </div>
    );
};

export default Products
