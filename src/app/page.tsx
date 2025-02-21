import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <SignInButton mode="modal">
        <button className="bg-blue-500 rounded-md px-4 py-2 text-white font-bold text-sm hover:pointer">
          Login
        </button>
      </SignInButton>
    </div>
  );
}
