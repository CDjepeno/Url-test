export class APIError extends Error {
  statusCode: number;
  message: string;

  constructor({statusCode,message}: {statusCode: number ;message: string;}) {
    super()
    this.message = message;

    if (statusCode) {
      this.statusCode = statusCode;
    }
  }
}

export class InternalServerError extends APIError {
  constructor(message: string) {
    super({ statusCode: 500, message });
  }
}

export class BadRequest extends APIError {
  constructor(message: string) {
    super({ statusCode: 400, message });
  }
}

export class NotFound extends APIError {
  constructor(message: string) {
    super({ statusCode: 404, message });
  }
}
