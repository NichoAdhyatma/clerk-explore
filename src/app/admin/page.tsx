import { UserButton } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <UserButton showName />
      <p>Admin Page</p>
    </div>
  );
}
