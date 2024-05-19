import SignIn from "@/app/components/sign-in/SignIn";

async function Page() {
  // const session = await getServerSession(authOptions);
  // if (session?.token?.user) {
  //   permanentRedirect("/dashboard");
  // }
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default Page;
