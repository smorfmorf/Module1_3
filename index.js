{
    const laptop = "asus";
    let count = 4;
    const category = "notebook";
    const price = +"600";

    console.log(`Наименование товара: ${laptop}`);
    console.log(`Общая сумма товара ${price * count}`);
}

{
    const item = "smart проектор philips";
    const count = 15;
    const category = "видео техника";
    const price = 1200;

    console.log(item);
    console.log(`общая сумма товара: ${count * price}`);
}

{
    let laptop = prompt("Наименование товара");
    let count = prompt("Кол-во товара");
    let category = prompt("Категория");
    let price = prompt("Цена товара");
    console.log(typeof price);
    console.log(typeof count);

    console.log(typeof +price, typeof +count);
    console.log(
        `На складе ${count} единицы товара ${laptop} на сумму ${price} деревянных`
    );
}
