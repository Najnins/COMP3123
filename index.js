// Import Core HTTP module
var http = require("http");

// Import Employee module (employee data)
var employees = require("./Employee");

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {

  // Allow only GET requests
  if (req.method !== 'GET') {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    return;
  }

  // Route: Home Page
  if (req.url === '/') {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Lab Exercise 03</h1>");
  }

  // Route: All Employees
  else if (req.url === '/employee') {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employees));
  }

  // Route: Employee Names (sorted ascending)
  else if (req.url === '/employee/names') {
    let names = employees.map(emp => `${emp.firstName} ${emp.lastName}`);
    names.sort();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(names));
  }

  // Route: Total Salary of Employees
  else if (req.url === '/employee/totalsalary') {
    let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ total_salary: totalSalary }));
  }

  // Route: Not Found (404)
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
  }
});

// Start Server
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
