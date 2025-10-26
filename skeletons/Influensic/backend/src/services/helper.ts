export class ResponseMessage {
  status: string;
  data?: any;
  error?:
    | {
        message: string;
      }
    | undefined;

  constructor(
    status: string,
    data?: any,
    error?: { message: string } | undefined
  ) {
    this.status = status;
    this.data = data;
    this.error = error;
  }

  public static UNAUTHORIZED() {
    return new ResponseMessage(
      "UNAUTHORIZED",
      {},
      { message: "Unauthorized!" }
    );
  }

  public static INVALID_PARAMS() {
    return new ResponseMessage(
      "INVALID_PARAMS",
      {},
      {
        message: "Invalid request params!",
      }
    );
  }

  public static NO_TOKEN() {
    return new ResponseMessage(
      "NO_TOKEN",
      {},
      {
        message: "No X-Auth-Token provided!",
      }
    );
  }

  public static NOT_FOUND() {
    return new ResponseMessage(
      "NOT_FOUND",
      {},
      { message: "Resource not found!" }
    );
  }

  public static EXISTS() {
    return new ResponseMessage(
      "EXISTS",
      {},
      { message: "Resource already exists!" }
    );
  }

  public static INTERNAL_ERROR() {
    return new ResponseMessage(
      "INTERNAL_ERROR",
      {},
      { message: "The server has experienced an internal error!" }
    );
  }

  public static SUCCESS(data?: any) {
    return new ResponseMessage("SUCCESS", data ? data : {});
  }
}

export const validateObjectKeys = (
  obj: any,
  keys: string[],
  loose?: boolean
) => {
  let res = true;

  if (loose) {
    keys.forEach((key: string) => {
      if (!obj || !obj[key]) {
        res = false;
      }
    });

    return res;
  }

  keys.forEach((key: string) => {
    if (!obj || !obj[key] || Object.keys(obj).length > keys.length) {
      res = false;
    }
  });

  return res;
};

export const multipleReplace = (str: string, obj: any) => {
  Object.keys(obj).forEach((key: string) => {
    str = str.replace(key, obj[key]);
  });

  return str;
};
