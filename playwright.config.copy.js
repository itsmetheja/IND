import { defineConfig } from "@playwright/test";

const ortoniReportConfig = {
  open: process.env.CI ? "never" : "always",
  folderPath: "report-db",
  filename: "index.html",
  title: "Ortoni Test Report",
  projectName: "Ortoni-Report",
  preferredTheme: "light"
};

export default defineConfig({
  reporter: [
    ["ortoni-report", ortoniReportConfig],
    ["list"]
  ],
  // ...your other config options (testDir, use, projects, etc.)
});