import { Suspense } from "react";
import SignInForm from "~/app/_components/loginForm/SignInForm";
import LoginFormSkeleton from "~/app/_skeletons/LoginFormSkeleton";

export default async function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1>Please Sign In</h1>
        <Suspense fallback={<LoginFormSkeleton />}>
          <SignInForm />
        </Suspense>
      </div>
    </>
  );
}
