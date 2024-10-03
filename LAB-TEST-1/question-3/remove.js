
const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Function to remove log files and the Logs directory
const removeLogs = () => {
    if (fs.existsSync(logsDir)) {
        // Read the contents of the Logs directory
        const files = fs.readdirSync(logsDir);
        
        // Loop through the files and delete them
        files.forEach((file) => {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath);
            console.log(`delete files ... ${file}`);
        });
        
        // Remove the Logs directory after deleting files
        fs.rmdirSync(logsDir);
        console.log(`Logs directory removed.`);
    } else {
        console.log('Logs directory does not exist.');
    }
};

removeLogs();
