"use client";


import { useFormStatus } from "react-dom";
import Button from "./Button";

interface SubmitButtonProps {
  loadingText?: string;
  idleText?: string;
}
export function SubmitButton({
  loadingText = "Submitting...",
  idleText = "Submit",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="secondary"
      size="md"
      isLoading={pending}
      className="w-full"
    >
      {pending ? loadingText : idleText}
    </Button>
  );
}
