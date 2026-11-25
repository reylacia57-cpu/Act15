// Requirement 1: Const variable 1
const limit = 5;
// Requirement 1: Const variable 2
const factor = 2;
// Requirement 1: Const variable 3
const prefix = "Index:";

// Requirement 2: Let variable 1
let sum = 0;
// Requirement 2: Let variable 2
let count = 0;
// Requirement 2: Let variable 3
let status = "Processing";

// Requirement 3: Loop 1
for (let i = 0; i < limit; i++) {
  // Requirement 4: Conditional
  if (i % 2 === 0) {
    sum += i * factor;
  }
}

// Requirement 3: Loop 2
while (count < limit) {
  count++;
}

console.log(prefix, sum, count, status);