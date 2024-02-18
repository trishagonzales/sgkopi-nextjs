export enum ErrorCode {
  InvalidInput = 'INVALID_INPUT',
  LoginRequired = 'LOGIN_REQUIRED',
  Forbidden = 'FORBIDDEN',
  NotFound = 'NOT_FOUND',
  AlreadyExists = 'ALREADY_EXISTS',
  Unexpected = 'UNEXPECTED',
}

export class Error {
  private constructor(readonly code: ErrorCode, readonly message: string) {}

  static invalidInput(message?: string) {
    return new Error(ErrorCode.InvalidInput, message ?? 'Invalid input');
  }

  static loginRequired(message?: string) {
    return new Error(ErrorCode.LoginRequired, message ?? 'Login required');
  }

  static forbidden(message?: string) {
    return new Error(ErrorCode.Forbidden, message ?? 'Access denied');
  }

  static notFound(message?: string) {
    return new Error(ErrorCode.NotFound, message ?? 'Not found');
  }

  static alreadyExists(message?: string) {
    return new Error(ErrorCode.AlreadyExists, message ?? 'Already exists');
  }

  static unexpected() {
    return new Error(ErrorCode.Unexpected, 'Unexpected error occurred');
  }
}

export class Exception {
  constructor(
    public message: string,
    public filename?: string,
    public cause?: unknown
  ) {}
}
