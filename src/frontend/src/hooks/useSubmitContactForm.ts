import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Actor not available');
      }

      const result = await actor.submitContactForm(
        data.name,
        data.email,
        data.subject,
        data.message
      );

      if (!result) {
        throw new Error('Failed to submit contact form');
      }

      return result;
    },
    onSuccess: () => {
      // Invalidate any queries that might depend on contact submissions
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });
}
