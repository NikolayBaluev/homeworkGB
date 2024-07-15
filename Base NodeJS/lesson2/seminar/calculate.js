import np from "number-precision";

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => np.plus(acc, purchase), 0);
    total = np.times(total, discount); // применяем скидку
    return total;
}

export default calculateResultSum;