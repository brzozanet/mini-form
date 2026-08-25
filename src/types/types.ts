export type FormDataChange = (
  parameter: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

export type FormSubmit = (
  parameter: React.SubmitEvent<HTMLFormElement>,
) => void;
