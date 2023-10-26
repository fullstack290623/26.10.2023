const fs = require('fs');

const filePath = 'index1.js';

try {
    // Attempt to read the file
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File contents:', data);
} catch (error) {
    // Handle any errors that occur during file reading
    console.error('Error reading the file:', error.message);
} finally {
    // Cleanup or finalize actions, if needed (e.g., close resources)
    console.log('Cleanup or finalization code here');
}

console.log('After the try-catch-finally blocks');
