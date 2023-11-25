export type TServerResponse<T = unknown> = {
    success: boolean;
    message: string;
    data: T;
  };
  