"use client";

import { useFormStore } from "@/lib/store";

export function UserInfo() {
  const { formData } = useFormStore();

  if (!formData.name && !formData.email) return null;

  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex flex-col items-end">
        <span className="font-medium">{formData.name}</span>
        <span className="text-muted-foreground">{formData.email}</span>
      </div>
    </div>
  );
}
