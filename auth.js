// Test trigger for DevSecOps scan - round 2
const password = 'hardcoded123';  // intentional vulnerability for testing
const query = 'SELECT * FROM users WHERE id = ' + userId;  // SQL injection for testing
module.exports = { password, query };
