import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return <div>Sign in to view this page</div>;
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();

  // Use `user` to render user details or create UI elements
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
      <div>Welcome, {user?.firstName}!</div>
      <SignInButton />
      <SignUpButton />
      <SignOutButton />
    </div>
  );
}
