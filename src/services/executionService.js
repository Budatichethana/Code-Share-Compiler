const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

export const executeCode = async (language, code, stdin = "") => {
  try {
    const response = await fetch(`${API_URL}/api/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language,
        code,
        stdin,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Execution error:", error);
    return {
      success: false,
      error: error.message || "Failed to execute code",
      output: "",
      exitCode: -1,
    };
  }
};

export default executeCode;
