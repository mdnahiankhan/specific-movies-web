export const quezdata = async ({ id }) => {
    const productsData = await fetch('https://openapi.programming-hero.com/api/quiz/${}')
    const quezs = await productsData.json()
    console.log('getquez', quezs);
    return quezs;
}