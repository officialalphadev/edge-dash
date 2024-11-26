import { Button } from "@/component/core/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/component/core/card";
import { Input } from "@/component/core/input";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-20">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-indigo-500">Edge Dash</CardTitle>
          <CardDescription>Selamat datang! silahkan buat akun baru.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" placeholder="Kata Sandi" />
          <Input type="password" placeholder="konfirmasi Kata Sandi" />
        </CardContent>
        <CardFooter>
          <Button text="Buat Akun" className="w-full" />
        </CardFooter>
      </Card>
    </div>
  );
}
