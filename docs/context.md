# 🛍️ E-Commerce App Specification

## Tech Stack:
Frontend: React Js with TypeScript,
Backend/Database: Supabase
UI Framework: React JS

## 📱 App Overview

This app is an e-commerce platform featuring two user types:
- **Customer (Moshtari)**
- **Admin**

Customers can browse products and place orders, while Admins have access to an Admin Panel where they can manage products and view sales statistics.

---

## 👥 User Roles

### 1. Customer (Moshtari)
- Browse products by category
- View product details
- Add to cart / wishlist
- Place orders
- View order history

### 2. Admin
- Login to admin panel
- Add, edit, delete products
- Manage inventory
- View sales analytics & statistics
- Manage orders (optional extension)

---

## 🔄 App Flow

### 🔓 Entry Point
- App opens to a landing screen or home screen
- User selects role or is routed based on login:
  - If **Customer**, go to home/shop page
  - If **Admin**, go to admin login panel

---

## 🧭 Navigation Flow

### For Customers:

---

## 📊 Database Schema

### Tables

#### 1. users
- id: uuid (primary key)
- email: string (unique)
- password: string (hashed)
- first_name: string
- last_name: string
- role: string (enum: 'customer', 'admin')
- phone: string
- address: string
- created_at: timestamp
- updated_at: timestamp

#### 2. categories
- id: uuid (primary key)
- name: string
- description: string
- image_url: string
- parent_id: uuid (self-reference, nullable)
- created_at: timestamp
- updated_at: timestamp

#### 3. products
- id: uuid (primary key)
- name: string
- description: string
- price: decimal
- discount_price: decimal (nullable)
- stock_quantity: integer
- category_id: uuid (foreign key to categories)
- featured: boolean
- created_at: timestamp
- updated_at: timestamp

#### 4. product_images
- id: uuid (primary key)
- product_id: uuid (foreign key to products)
- image_url: string
- is_primary: boolean
- created_at: timestamp

#### 5. carts
- id: uuid (primary key)
- user_id: uuid (foreign key to users)
- created_at: timestamp
- updated_at: timestamp

#### 6. cart_items
- id: uuid (primary key)
- cart_id: uuid (foreign key to carts)
- product_id: uuid (foreign key to products)
- quantity: integer
- created_at: timestamp
- updated_at: timestamp

#### 7. orders
- id: uuid (primary key)
- user_id: uuid (foreign key to users)
- status: string (enum: 'pending', 'processing', 'shipped', 'delivered', 'cancelled')
- total_amount: decimal
- shipping_address: string
- payment_method: string
- created_at: timestamp
- updated_at: timestamp

#### 8. order_items
- id: uuid (primary key)
- order_id: uuid (foreign key to orders)
- product_id: uuid (foreign key to products)
- quantity: integer
- price: decimal
- created_at: timestamp

#### 9. wishlists
- id: uuid (primary key)
- user_id: uuid (foreign key to users)
- product_id: uuid (foreign key to products)
- created_at: timestamp

---

## 📁 Folder Structure

```
/
├── public/                  # Static files
│   ├── images/              # Image assets
│   └── favicon.ico          # Site favicon
│
├── src/
│   ├── components/          # Reusable components
│   │   ├── common/          # Shared components (Button, Input, etc.)
│   │   ├── layout/          # Layout components (Header, Footer, etc.)
│   │   ├── customer/        # Customer-specific components
│   │   └── admin/           # Admin-specific components
│   │
│   ├── pages/               # Page components
│   │   ├── customer/        # Customer pages
│   │   │   ├── Home.tsx
│   │   │   ├── ProductList.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── Cart.tsx
│   │   │   ├── Checkout.tsx
│   │   │   └── OrderHistory.tsx
│   │   │
│   │   └── admin/           # Admin pages
│   │       ├── Dashboard.tsx
│   │       ├── ProductManagement.tsx
│   │       ├── OrderManagement.tsx
│   │       └── Analytics.tsx
│   │
│   ├── hooks/               # Custom React hooks
│   │
│   ├── services/            # API services
│   │   ├── supabase.ts      # Supabase client setup
│   │   ├── auth.ts          # Authentication services
│   │   ├── products.ts      # Product-related services
│   │   └── orders.ts        # Order-related services
│   │
│   ├── contexts/            # React contexts
│   │   ├── AuthContext.tsx  # Authentication context
│   │   └── CartContext.tsx  # Shopping cart context
│   │
│   ├── types/               # TypeScript type definitions
│   │   ├── product.ts
│   │   ├── user.ts
│   │   └── order.ts
│   │
│   ├── utils/               # Utility functions
│   │   ├── formatters.ts    # Date, currency formatters
│   │   └── validators.ts    # Form validation helpers
│   │
│   ├── styles/              # Global styles
│   │   ├── globals.css
│   │   └── theme.ts         # Theme configuration
│   │
│   ├── App.tsx              # Main App component
│   ├── index.tsx            # Entry point
│   └── routes.tsx           # Application routes
│
├── docs/                    # Documentation
│   └── context.md           # Project context and specifications
│
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project README
```

## 🌐 Language and Products
- The entire site must be in Farsi (Persian).
- The products will be wood-based, specifically "پاف" (pouf/ottoman).
