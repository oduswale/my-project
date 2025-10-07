// Step 1: Declare variables
let userRole = "admin";
let accessLevel;

// Step 2: Use if...else block to assign access levels
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

// Step 3: Display result in console
console.log("Access Level:", accessLevel);


