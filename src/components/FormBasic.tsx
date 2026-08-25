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

  // NOTE: Sprawdzanie poprawności imienia i treści wiadomości

  const validateDataLength = (dataValue: string, requiredLenth: number) => {
    return dataValue.length >= requiredLenth;
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

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return;
    }

    alert(JSON.stringify(formData));
    setFormData(initialForm);
  };

  console.log(formData);

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
          {isNameValid ? (
            ""
          ) : (
            <p>Imię musi zawierać minimum {NAME_LENGTH} znaki.</p>
          )}

          {/* {formData.name && !isNameValid && (
            <p>Imię musi zawierać minimum {NAME_LENGTH} znaki.</p>
          )} */}
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
          {isEmailValid ? "" : <p>Wpisz poprawny adres email</p>}
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
          {isMessageValid ? (
            ""
          ) : (
            <p>Wiadomość musi zawierać minimum {MESSAGE_LENGTH} znaków.</p>
          )}
        </label>
        <p></p>
        <button
          type="submit"
          disabled={!isNameValid || !isEmailValid || !isMessageValid}
        >
          Wyślij wiadomość
        </button>
      </form>
    </>
  );
}
