import { Protect, UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();
  const {} = await auth();

  console.log(user);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <Protect condition={(has) => has({ role: "org:admin" })}>
        <p>Admin settings</p>
      </Protect>
      <UserButton showName />
      <p>Admin Page</p>
    </div>
  );
}
