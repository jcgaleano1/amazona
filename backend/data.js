import bcrypt from 'bcrypt';

const data = {
    users: [
        {
            name: 'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Jhon',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            image: '/images/p1.jpg',
            brand: 'Nike',
            category: 'Shirts',
            description: 'high quality product',
            price: 120,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            
        },
        {
            name: 'Adidas Fit Shirt',
            image: '/images/p2.jpg',            
            brand: 'Adidas',
            category: 'Shirts',
            description: 'high quality product',
            price: 100,
            countInStock: 20,
            rating: 4.0,
            numReviews: 10,
            
        },
        {
            name: 'Lacoste Free Shirt',
            image: '/images/p3.jpg',
            brand: 'Lacoste',
            category: 'Shirts',
            description: 'high quality product',
            price: 220,
            countInStock: 0,
            rating: 4.8,
            numReviews: 10,
            
        },
        {
            name: 'Nike Slim Pant',
            image: '/images/p4.jpg',
            brand: 'Nike',
            category: 'Pants',
            description: 'high quality product',
            price: 78,
            countInStock: 15,
            rating: 4.5,
            numReviews: 14,
            
        },
        {
            name: 'Puma Slim Pant',
            image: '/images/p5.jpg',
            brand: 'Puma',
            category: 'Pants',
            description: 'high quality product',
            price: 65,
            countInStock: 5,
            rating: 4.5,
            numReviews: 10,
            
        },
        {
            name: 'Adidas Fit Pant',
            image: '/images/p6.jpg',
            brand: 'Adidas',
            category: 'Pants',
            description: 'high quality product',
            price: 139,
            countInStock: 12,
            rating: 4.5,
            numReviews: 15,
            
        }
    ]
}
export default data;