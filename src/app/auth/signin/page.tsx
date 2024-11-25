import { Button } from "@/component/core/button";
import { Input } from "@/component/core/input";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-20">
      <form className="w-full max-w-md space-y-4 rounded-xl bg-white p-10 dark:bg-gray-800">
        <h1 className="text-center text-2xl font-bold text-indigo-500">Edge Dash</h1>
        <p className="text-center">Selamat datang kembali! silahkan masuk ke akun kamu.</p>
        <div className="flex flex-col space-y-5 pt-5">
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" placeholder="Kata Sandi" />
          <Button text="Masuk" variant="indigo-fill" />
        </div>
      </form>
    </div>
  );
}
