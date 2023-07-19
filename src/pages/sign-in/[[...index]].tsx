import { SignIn } from "@clerk/clerk-react";

// Render the sign in component in your
// custom sign in page.
function SignInPage() {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[85vh]">
        <SignIn />
    </div>
  );
}

export default SignInPage;