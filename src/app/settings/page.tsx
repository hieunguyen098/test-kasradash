"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useFormStore } from "@/lib/store";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SettingsFormField } from "@/components/settings/form-field";
import { SuccessDialog } from "@/components/settings/success-dialog";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function SettingsPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { formData, setFormData } = useFormStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values);
    setShowSuccess(true);
  }

  return (
    <>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <SettingsFormField
                form={form}
                name="name"
                label="Name"
                placeholder="John Doe"
              />
              <SettingsFormField
                form={form}
                name="email"
                label="Email"
                placeholder="john@example.com"
                type="email"
              />
              <SettingsFormField
                form={form}
                name="password"
                label="Password"
                placeholder="********"
                type="password"
              />
              <Button type="submit">Save Changes</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <SuccessDialog open={showSuccess} onOpenChange={setShowSuccess} />
    </>
  );
}
