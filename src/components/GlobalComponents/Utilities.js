
export const times = n => (f => Array(n).fill().map((_, i) => f(i)));

export const extractPrice = (priceDetail) => {
    if(priceDetail) {
        const numericPrice = priceDetail.includes('$') ? priceDetail.split('$')[1] : priceDetail;
        const numericDetail = numericPrice.split('.');
        const dollarAmt = numericDetail[0];
        const centAmt = numericDetail[1];

        return {
            dollarAmt,
            centAmt
        }
    }
};