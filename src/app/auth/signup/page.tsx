import { Button } from "@/component/core/button";
import { Input } from "@/component/core/input";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-20">
      <form className="w-full max-w-md space-y-4 rounded-xl bg-white p-10 dark:bg-gray-800">
        <h1 className="text-center text-2xl font-bold text-indigo-500">Edge Dash</h1>
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
  );
}
