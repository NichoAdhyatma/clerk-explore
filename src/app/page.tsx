import { checkRole } from "@/utils/roles";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  const isAdmin = await checkRole("admin");

  if (!userId) {
    return (
      <div className="flex h-screen gap-4 flex-col items-center justify-center">
        <SignInButton mode="modal">
          <button className="bg-blue-500 rounded-md px-4 py-2 text-white font-bold text-sm hover:pointer">
            Login
          </button>
        </SignInButton>
      </div>
    );
  }

  return (
    <div className="flex h-screen gap-4 flex-col items-center justify-center">
      <p>Role : {isAdmin ? "Admin" : "Member"}</p>

      <UserButton />
    </div>
  );
}
