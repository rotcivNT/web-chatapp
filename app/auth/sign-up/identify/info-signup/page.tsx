import InfoSignup from "@/app/components/sign-up/Identify";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";

function InfoSignupPage() {
  return (
    <div>
      <Suspense>
        <InfoSignup />
      </Suspense>
      <Toaster />
    </div>
  );
}

export default InfoSignupPage;
