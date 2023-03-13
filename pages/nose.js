const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({
    currency: 'string',
    customer: 'string',
    email: 'string',
    expand: ['string'],
    items: [
      {
        amount: 0,
        currency: 'string',
        description: 'string',
        inventory_id: 'string',
        quantity: 0,
        tax_rates: [
          {name: 'string', rate: 0},
          {name: 'string', tax_amount: 0},
          {name: 'string', tax_rate_uuid: 'string'}
        ],
        type: 'shipping'
      }
    ],
    metadata: {additionalProp: 'string'},
    shipping: {
      address: {
        city: 'string',
        country: 'string',
        line1: 'string',
        line2: 'string',
        postal_code: 'string',
        state: 'string'
      },
      name: 'string',
      phone: 'string'
    }
  })
};

fetch('https://scl-sandbox.dev.clover.com/v1/orders', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));