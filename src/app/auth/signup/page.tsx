import { Breadcrumb } from "@/component/core/breadcrumb";
import { Button } from "@/component/core/button";
import { Input } from "@/component/core/input";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <>
      <Breadcrumb pageName="Sign Up" />
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
            <p className="text-center">Selamat datang! silahkan buat akun baru.</p>
            <div className="flex flex-col space-y-5 pt-5">
              <Input type="text" name="name" placeholder="Name" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" placeholder="Kata Sandi" />
              <Input type="password" placeholder="konfirmasi Kata Sandi" />
              <Button text="Buat Akun" variant="indigo-fill" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
