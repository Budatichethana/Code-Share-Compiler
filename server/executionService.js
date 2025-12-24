const axios = require("axios");

const PISTON_API_URL = "https://emkc.org/api/v2/piston";

const languageMap = {
  javascript: "javascript",
  python: "python",
  java: "java",
  cpp: "cpp",
  c: "c",
};

const executeCode = async (language, code, stdin = "") => {
  try {
    // Map language to Piston language
    const pistonLanguage = languageMap[language] || "javascript";

    // Format request for Piston API
    const payload = {
      language: pistonLanguage,
      version: "*",
      files: [
        {
          content: code,
        },
      ],
      stdin: stdin,
    };

    // Make request to Piston API
    const response = await axios.post(`${PISTON_API_URL}/execute`, payload, {
      timeout: 30000, // 30 seconds timeout
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Extract relevant data from response
    const { run, compile } = response.data;

    return {
      success: true,
      output: run?.stdout || "",
      error: run?.stderr || compile?.stderr || "",
      exitCode: run?.code || compile?.code || 0,
      signal: run?.signal || null,
    };
  } catch (error) {
    console.error("Piston API Error:", error.message);

    if (error.code === "ECONNABORTED") {
      return {
        success: false,
        error: "Execution timeout - code took too long to run",
        output: "",
        exitCode: -1,
      };
    }

    if (error.response?.status === 400) {
      return {
        success: false,
        error: error.response?.data?.message || "Invalid request to Piston API",
        output: "",
        exitCode: -1,
      };
    }

    return {
      success: false,
      error: error.message || "Failed to execute code",
      output: "",
      exitCode: -1,
    };
  }
};

module.exports = { executeCode };
