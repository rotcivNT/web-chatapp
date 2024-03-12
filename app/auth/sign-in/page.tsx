"use client";
import { userAPI } from "@/api/userAPI";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Lock } from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function SignIn() {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { toast } = useToast();
  const route = useRouter();
  const customInputStyle = {
    border: "1px solid #60a5fa",
    width: "100%",
  };
  const onSignIn = async () => {
    if (!phone || !password) {
      return;
    }
    try {
      const res = await userAPI.onSignIn(phone, password);
      if (res.data === "Success") {
        route.push("/dashboard");
      }
    } catch (err: any) {
      if (err.response.data === "The password is incorrect") {
        toast({
          title: "Đăng nhập thất bại",
          description: "Mật khẩu không chính xác",
          duration: 2000,
          variant: "destructive",
        });
      } else if (err.response.data === "Username is not exist") {
        toast({
          title: "Đăng nhập thất bại",
          description: "Tài khoản không tồn tại",
          duration: 2000,
          variant: "destructive",
        });
      }
    }
  };
  return (
    <div className="bg-gradient-to-bl from-cyan-200 to-blue-400 h-screen w-screen flex justify-center">
      <div>
        <div className="text-center mt-[50px]">
          <h1 className="text-blue-600 text-5xl font-bold ">TinTin</h1>
          <h2 className="mt-2">
            Đăng nhập tài khoản TinTin <br />
            để kết nối với ứng dụng TinTin Web
          </h2>
        </div>
        <div className="bg-white w-[420px] h-[400px] mt-6 ">
          <div className="">
            <h3 className="text-center p-4  border-b">Với số điện thoại</h3>
          </div>
          <div className="pl-8 pr-8">
            <div className="flex mt-8 border-b pb-2">
              <PhoneInput
                country={"vn"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={customInputStyle}
              />
            </div>
          </div>
          {/* password */}
          <div className="pl-8 pr-8">
            <div className="flex mt-8 border-b pb-2">
              <span className="mr-4">
                <Lock />
              </span>

              <input
                placeholder="Mật khẩu"
                className="w-full transition focus-visible:outline-none"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
            </div>
          </div>
          {/* log in */}
          <div className="pl-8 pr-8 mt-8">
            <button
              className=" bg-blue-500 text-white w-full p-3 rounded-full hover:bg-blue-600"
              onClick={onSignIn}
            >
              Đăng nhập với mật khẩu
            </button>
          </div>

          {/* quên mật khẩu */}
          <div className="pl-8 pr-8 mt-10 text-center">
            <Link className="hover:underline mr-5" href="/auth/sign-up">
              Quên mật khẩu
            </Link>
            <Link
              className="border border-blue-100 text-blue-500 w-full p-3  hover:underline"
              href="/auth/sign-up"
            >
              Đăng ký tài khoản
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default SignIn;
