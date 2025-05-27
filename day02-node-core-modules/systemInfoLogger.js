const os = require('os');
const fs = require('fs');
const path = require('path');

// Gather system information
const systemInfo = {
  hostname: os.hostname(),
  platform: os.platform(),
  architecture: os.arch(),
  cpuCores: os.cpus().length,
  totalMemoryMB: (os.totalmem() / (1024 * 1024)).toFixed(2),
  freeMemoryMB: (os.freemem() / (1024 * 1024)).toFixed(2),
  uptimeMinutes: (os.uptime() / 60).toFixed(2),
};

// Format the information
const logContent = `
System Information:
-------------------
Hostname       : ${systemInfo.hostname}
Platform       : ${systemInfo.platform}
Architecture   : ${systemInfo.architecture}
CPU Cores      : ${systemInfo.cpuCores}
Total Memory   : ${systemInfo.totalMemoryMB} MB
Free Memory    : ${systemInfo.freeMemoryMB} MB
Uptime         : ${systemInfo.uptimeMinutes} minutes
`;

// Define log file path
const logFilePath = path.join(__dirname, 'system_info.log');

// Write the information to the log file
fs.writeFile(logFilePath, logContent, (err) => {
  if (err) throw err;
  console.log('✅ System information logged successfully.');
});
