import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen justify-center align-middle">
      <SignUp />
    </div>
  );
}
