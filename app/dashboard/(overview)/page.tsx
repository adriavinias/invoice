import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const fetchProducts = async () => {
    let products = await prisma.product.findMany()
    return products
}

export default async function Page() {

    const products = await fetchProducts()
    console.log()
    return (
        <main>
            <>
                {products.map((pr) => {
                    return (
                        <p>{pr.name}</p>
                    )
                })}
            </>
        </main>
    );
}