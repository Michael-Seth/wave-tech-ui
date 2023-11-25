/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { toast } from 'react-toastify';

const getServerErrorMessage = (error: unknown): string => {
  let message = 'There was an error processing your request';
  if (axios.isAxiosError(error)) {
    if (error.response) {
      if (error.response.status < 500) {
        const serverMsg = error.response.data.message;
        message = serverMsg || message;
      }
    }
  }

  if ((error as any).data) {
    if ((error as any).status < 500) {
      const serverMsg = (error as any).data.message;
      message = serverMsg || message;
    }
  }

  return message;
};

export const getErrorStatus = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.status;
    }
  }

  return 500;
};

export const handleServerError = (error: unknown) => {
  const errorStatus = getErrorStatus(error);
  if (errorStatus !== 401) {
    toast(getServerErrorMessage(error), { type: 'error' });
  }
};

export default getServerErrorMessage;
