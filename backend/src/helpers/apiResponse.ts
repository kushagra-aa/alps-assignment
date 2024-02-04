class ApiResponse {
  statusCode: number; // Add type declaration for statusCode
  data: any; // Add type declaration for data
  message: string; // Already declared in base Error class
  success: boolean; // Add type declaration for success

  constructor(statusCode: number, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export default ApiResponse;
