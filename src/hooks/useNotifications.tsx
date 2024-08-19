"use client";
import { ToastAction, useToast } from "@/ui";

export function useNotifications() {
  const { toast } = useToast();

  const showSuccessNotification = (message?: string) => {
    toast({
      title: "Success",
      description: message ?? "Wow! It's done successfully",
    });
  };
  const showErrorNotification = (message?: string) => {
    toast({
      variant: "destructive",
      title: "An error occurred",
      description: message ?? "There was a problem",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  return { showErrorNotification, showSuccessNotification };
}
