export type TUser = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    country: string;
    state: string;
    postalCode: number;
    address: string;
    profileImg: string | null;
    isVerified: boolean;
    role: string;
    admin: boolean;
    superAdmin: boolean;
    isBlocked: boolean;
    pushNotification: boolean;
    emailNotification: boolean;
    status: string;
    createdAt: string | null;
    updatedAt: string | null;
    token: string;
  };
  