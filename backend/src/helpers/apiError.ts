class ApiError extends Error {
  statusCode: number; // Add type declaration for statusCode
  data: any; // Add type declaration for data
  message: string; // Already declared in base Error class
  success: boolean; // Add type declaration for success
  errors: any[]; // Add type declaration for errors (consider a more specific type if possible)

  constructor(
    statusCode: number,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message; // Redundant, but you can keep it for clarity
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
