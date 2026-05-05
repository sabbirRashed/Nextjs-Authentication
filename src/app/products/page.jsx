import ProductCard from "@/components/productCard";


const getProducts = async () => {
    // const res = await fetch("http://localhost:5000/products", {cache: "force-cache"});
    // const res = await fetch("http://localhost:5000/products", {cache: "no-store"});
    const res = await fetch("http://localhost:5000/products", {next: {revalidate: 10}});
    return res.json();
}

const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <div className="w-11/12 mx-auto mt-10">
            <h2 className="text-2xl text-green-500">Products: {products.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}>
                    </ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;