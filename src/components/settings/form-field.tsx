import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn, Path } from "react-hook-form";
import { z } from "zod";

interface FormFieldProps<T extends z.ZodType> {
  form: UseFormReturn<z.infer<T>>;
  name: Path<z.infer<T>>;
  label: string;
  placeholder: string;
  type?: string;
}

export function SettingsFormField<T extends z.ZodType>({
  form,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
