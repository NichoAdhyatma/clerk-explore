import { SignOutButton } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <div>
      Admin Page{" "}
      <SignOutButton redirectUrl="/sign-in">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:cursor-pointer">
          Sign Out
        </button>
      </SignOutButton>
    </div>
  );
}
