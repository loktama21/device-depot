require('dotenv').config();
const mongoose = require('mongoose');
const Product  = require('./models/Product');

async function seed() {
  // Connect to MongoDB (make sure MONGO_URI is set in your env)
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:    true,
    useUnifiedTopology: true
  });

  // Clear out existing data
  await Product.deleteMany({});

  // New products to seed
  const products = [
    // Laptops
    {
      name:        'MacBook Pro 14"',
      description: 'Apple M1 Pro chip, 16GB RAM, 512GB SSD.',
      category:    'laptop',
      price:       1999.99,
      imageUrl:    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6544/6544232_sd.jpg'
    },
    {
      name:        'HP Spectre x360',
      description: 'Convertible 2-in-1 laptop, Intel i7, 16GB RAM.',
      category:    'laptop',
      price:       1599.99,
      imageUrl:    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/07c174b2-2d89-4448-93dd-b0dda2397e3a.jpg'
    },
    {
      name:        'Dell XPS 13',
      description: '13.4" ultrabook, Intel i5, 8GB RAM.',
      category:    'laptop',
      price:       1299.99,
      imageUrl:    'https://img.bbystatic.com/BestBuy_US/store/ee/2016/com/pr/SOL-8519_dellXPS13/xps13_c_3.png'
    },

    // Sound Systems
    {
      name:        'Bluetooth Home Speaker',
      description: 'High‑fidelity 360° sound system.',
      category:    'sound system',
      price:       299.99,
      imageUrl:    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6405/6405514_sd.jpg'
    },
    {
      name:        'Samsung HW-Q60T Soundbar',
      description: '3.1‑channel Dolby Digital audio.',
      category:    'sound system',
      price:       249.99,
      imageUrl:    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/caa5d62f-2dfc-4b84-bcc1-b8d12fc7886b.jpg'
    },
    {
      name:        'JBL PartyBox 310',
      description: 'Portable party speaker with lights.',
      category:    'sound system',
      price:       399.99,
      imageUrl:    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6580/6580488cv1d.jpg'
    },

    // Others
    {
      name:        'Assorted Accessories',
      description: 'Various add‑ons and extras.',
      category:    'others',
      price:       49.99,
      imageUrl:    'https://pisces.bbystatic.com/image2/BestBuy_US/dam/inspo-computer-sv-sol112008-81e65cce-de3c-48e3-83a2-44fa51679d0a.jpg'
    },
    {
      name:        'Universal Charger',
      description: 'Fast‑charge USB-C adapter, 65W.',
      category:    'others',
      price:       29.99,
      imageUrl:    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5a69f8b6-d410-43c7-b70e-6919c074de9a.jpg'
    },
    {
      name:        'HDMI 2.1 Cable',
      description: 'Supports 4K@120Hz and 8K@60Hz.',
      category:    'others',
      price:       19.99,
      imageUrl:    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/71e8f370-4ca2-4642-ad8b-b957c7a81d88.jpg'
    },
    {
      name:        'Wireless Mouse',
      description: 'Ergonomic Bluetooth mouse.',
      category:    'others',
      price:       24.99,
      imageUrl:    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/f018ca9c-f98c-47ab-8046-91bf6d302942.jpg'
    }
  ];

  // Insert and finish
  await Product.insertMany(products);
  console.log('Seed complete — added', products.length, 'products.');
  process.exit();
}

seed().catch(err => {
  console.error('Seed error:', err);
  process.exit(1);
});
