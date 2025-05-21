import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FormState {
  formData: {
    name: string;
    email: string;
    password: string;
  };
  setFormData: (data: Partial<FormState["formData"]>) => void;
  resetForm: () => void;
}

const initialState = {
  formData: {
    name: "",
    email: "",
    password: "",
  },
};

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      ...initialState,
      setFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
      resetForm: () => set(initialState),
    }),
    {
      name: "form-storage",
    }
  )
);
