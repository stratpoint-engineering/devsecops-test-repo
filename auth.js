// Test file with intentional issues for security scan
const password = "hardcoded-password-123";
const apiKey = "sk_live_abc123secretkey";

function login(user, pass) {
  // SQL injection vulnerability
  const query = "SELECT * FROM users WHERE username = '" + user + "' AND password = '" + pass + "'";
  return db.query(query);
}

function getUser(id) {
  return fetch('/api/users/' + id);
}
