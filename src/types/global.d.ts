export {};

declare global {
  interface ClerkAuthorization {
    permission: "";
    role: "org:admin" | "org:member";
  }
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}

export type Roles = "admin" | "moderator";
