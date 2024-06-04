
const name = 'Juan';
const orderId = 234234;

const emailTemplate = `
<div>
    <h1>Hi, ${name}</h1>
    <p>Thank you for your order.</p>
    <p>Order Id ${orderId}</p>
</div>

`;

//formula  tradicional
module.exports = {
    emailTemplate,
}