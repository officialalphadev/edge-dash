import { Breadcrumb } from "@/component/core/breadcrumb";
import { Button } from "@/component/core/button";
import { Input } from "@/component/core/input";
import Image from "next/image";

export default function SignInPage() {
  return (
    <>
      <Breadcrumb pageName="Sign In" />
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src="/image/bg-login.webp"
          alt="bg-login"
          className="aspect-video object-cover"
          height={1080}
          width={1920}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <form className="w-full max-w-md space-y-4 rounded-xl bg-white p-10 dark:bg-gray-800">
            <Image
              src="/image/alphadev-logo.png"
              alt="alphadev-logo"
              className="mx-auto aspect-[12/3] w-48 object-contain"
              height={500}
              width={500}
            />
            <p className="text-center">Selamat datang kembali! silahkan masuk ke akun kamu.</p>
            <div className="flex flex-col space-y-5 pt-5">
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" placeholder="Kata Sandi" />
              <Button text="Masuk" variant="indigo-fill" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
