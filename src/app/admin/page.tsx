import { SignOutButton } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <div>
      Admin Page <SignOutButton />
    </div>
  );
}
