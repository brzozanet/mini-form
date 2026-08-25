import { useState } from "react";
import type { FormDataChange, FormSubmit } from "../types/types";

const NAME_LENGTH = 2;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_LENGTH = 5;

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function FormBasic() {
  const [formData, setFormData] = useState(initialForm);
  const [isFormSend, setIsFormSend] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // NOTE: Sprawdzanie poprawności imienia i treści wiadomości

  const validateDataLength = (dataValue: string, requiredLength: number) => {
    return dataValue.length >= requiredLength;
  };

  const isNameValid = validateDataLength(formData.name, NAME_LENGTH);
  const isMessageValid = validateDataLength(formData.message, MESSAGE_LENGTH);

  // NOTE: Sprawdzanie poprawności adresu mail

  const validateEmailByRegex = (email: string) => {
    return EMAIL_REGEX.test(email);
  };

  const isEmailValid = validateEmailByRegex(formData.email);

  // NOTE: Dodawanie danych z formularza do stanu aplikacji

  const handleFormDataChange: FormDataChange = (event) => {
    setFormData((prevFormState) => {
      return {
        ...prevFormState,
        [event.target.name]: event.target.value,
      };
    });
  };

  // NOTE: Wysyłanie formularza

  const handleFormSubmit: FormSubmit = (event) => {
    event.preventDefault();
    setIsFormSend(true);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return;
    }

    setIsSuccess(true);
    setFormData(initialForm);
    setIsFormSend(false);
  };

  return (
    <>
      <h3>Form using useState</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          <p>
            <strong>Imię</strong>
          </p>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleFormDataChange}
            // onChange={(e) => console.log(e)}
          />
          {!isNameValid && isFormSend && (
            <p>Imię musi zawierać minimum {NAME_LENGTH} znaki.</p>
          )}
        </label>

        <label htmlFor="email">
          <p>
            <strong>Email</strong>
          </p>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleFormDataChange}
          />
          {!isEmailValid && isFormSend && <p>Wpisz poprawny adres email</p>}
        </label>

        <label htmlFor="message">
          <p>
            <strong>Wiadomość</strong>
          </p>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleFormDataChange}
            cols={30}
            rows={10}
          ></textarea>
          {!isMessageValid && isFormSend && (
            <p>Wiadomość musi zawierać minimum {MESSAGE_LENGTH} znaków.</p>
          )}
        </label>
        <p></p>
        <button type="submit">Wyślij wiadomość</button>
        {/* <button
          type="submit"
          disabled={!isNameValid || !isEmailValid || !isMessageValid}
        >
          Wyślij wiadomość
        </button> */}
      </form>
      {isSuccess && <h3>Formularz wysłany poprawnie 😀</h3>}
    </>
  );
}
