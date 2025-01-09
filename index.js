import { getProducts, getCompanies, getUsers, getReviews } from './api.js';
import Company from './classes/Company.js';
import Product from './classes/Product.js';
import Review from './classes/Review.js';
import User from './classes/User.js';

async function processData() {
    try {
        const [rawProducts, rawCompanies, rawUsers, rawReviews] = await Promise.all([
            getProducts(),
            getCompanies(),
            getUsers(),
            getReviews()
        ]);

        const users = rawUsers.map(user => new User(user));
        const reviews = rawReviews.map(review => {
            const user = users.find(u => u.id === review.userId);
            return new Review({ ...review, user });
        });

        const products = rawProducts.map(product => {
            const productReviews = reviews.filter(review =>
                product.reviewIds.includes(review.id)
            );
            return new Product({ ...product, reviews: productReviews });
        });

        const companies = rawCompanies.map(company => {
            const companyProducts = products.filter(product =>
                product.companyId === company.id
            );
            return new Company({ ...company, products: companyProducts });
        });

        return companies;
    } catch (error) {
        console.error('Ошибка при обработке данных:', error);
        throw error;
    }
}

//проверка
processData()
    .then(companies => {
        console.log('\n=== Результаты обработки данных ===\n');
        console.log('    Компании и их продукты:');
        companies.forEach(company => {
            console.log(`\n${company.name} (${company.country}, основана в ${company.created})`);
            console.log('Продукты:');
            company.products.forEach(product => {
                console.log(`- ${product.name}`);
                if (product.reviews.length > 0) {
                    console.log('  Отзывы:');
                    product.reviews.forEach(review => {
                        console.log(`    -- ${review.user.name}: "${review.text}"`);
                    });
                }
            });
        });
        return companies;
    })
    .catch(error => {
        console.error('      Произошла ошибка при обработке данных:', error);
        console.error('Детали ошибки:', error.stack);
        throw error;
    })
    .finally(() => {
        console.log('\n      Обработка данных завершена');
        console.log('=================================\n');
    });
