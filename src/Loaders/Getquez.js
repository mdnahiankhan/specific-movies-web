export const quezdata = async () => {
    const productsData = await fetch('https://openapi.programming-hero.com/api/quiz/1')
    const quezs = await productsData.json()
    console.log('getquez', quezs);
    return quezs;
}