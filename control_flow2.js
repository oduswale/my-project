// Declare variables
let userRole = "admin";   // Try changing this to "manager" or "guest"
let accessLevel;
let isLoggedIn = true;    // Try changing this to false
let userMessage;

// First if...else to set access level
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

// Nested if...else to check login and role
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

// Display results in console
console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
