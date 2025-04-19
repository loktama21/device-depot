require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Clear existing products
    await Product.deleteMany({});

    // Insert 5 Electronics products (replace imageUrl with your real S3 URLs)
    const products = [
      {
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with USB receiver.',
        category: 'Electronics',
        price: 25.99,
        imageUrl: 'https://your-s3-bucket/item1.jpg'
      },
      {
        name: 'Bluetooth Speaker',
        description: 'Portable speaker with deep bass.',
        category: 'Electronics',
        price: 45.00,
        imageUrl: 'https://your-s3-bucket/item2.jpg'
      },
      {
        name: 'USB-C Charger',
        description: 'Fast charging USB-C adapter.',
        category: 'Electronics',
        price: 19.50,
        imageUrl: 'https://your-s3-bucket/item3.jpg'
      },
      {
        name: 'Noise-Cancelling Headphones',
        description: 'Over-ear headphones with active noise cancellation.',
        category: 'Electronics',
        price: 89.99,
        imageUrl: 'https://your-s3-bucket/item4.jpg'
      },
      {
        name: 'Smart LED Bulb',
        description: 'Wi-Fi enabled color-changing bulb.',
        category: 'Electronics',
        price: 15.75,
        imageUrl: 'https://your-s3-bucket/item5.jpg'
      }
    ];

    await Product.insertMany(products);
    console.log('Seeded 5 products');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
}

seed();
