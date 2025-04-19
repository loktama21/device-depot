# Electronics Online Store

An e‑commerce web application showcasing electronic products with filtering and cart functionality.

## Features
- **Product Listing**: Browse a grid of Electronics products (image, name, price, description)
- **Filtering & Search**:
  - Filter by category (Electronics)
  - Filter by price range (dual‑input min/max)
  - Search by product name (case‑insensitive)
- **Shopping Cart**:
  - Add items to cart stored in browser `localStorage`
  - Live cart count in header
- **Responsive Design**: Desktop‑first layout using plain CSS grid

## Technologies
- **Frontend**: React, Create React App, Axios
  - Context API for cart state
  - Environment variables for API URL
- **Backend**: Node.js, Express, Mongoose
  - MongoDB Atlas (free tier) for product data
  - CORS enabled for cross‑origin requests
- **Deployment & CI/CD**:
  - Frontend: Vercel (auto‑deploy on GitHub `main`)
  - Backend: Render (free web service)
- **Future Enhancements**:
  - Admin dashboard with S3 image upload and CRUD operations
  - User authentication and order history
  - Payment gateway integration (Stripe/PayPal)
  

