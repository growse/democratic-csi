class GrpcError {
  constructor(code, message = "") {
    this.name = "GrpcError";
    this.code = code;
    this.message = message;
  }
}

module.exports.GrpcError = GrpcError;
