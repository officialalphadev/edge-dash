import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`focus:border-brand-50 focus:ring-brand-100 rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm text-gray-500 outline-none transition-all duration-300 focus:ring-4 ${props.className}`}
    />
  );
}
