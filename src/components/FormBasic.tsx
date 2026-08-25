import { useState } from "react";
import type { FormDataChange, FormSubmit } from "../types/types";

const NAME_LENGTH = 2;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_LENGTH = 5;

export default function FormBasic() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isNameValid, setIsNameValid] = useState(false);
  const [isMailValid, setIsMailValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);

  const handleFormDataChange: FormDataChange = (event) => {
    setFormData((prevFormState) => {
      return {
        ...prevFormState,
        [event.target.name]: event.target.value.trim(),
      };
    });

    if (formData.name.length >= NAME_LENGTH - 1) {
      setIsNameValid(false);
    }

    if (formData.message.length >= MESSAGE_LENGTH - 1) {
      setIsMessageValid(false);
    }
  };

  const handleFormSumbit: FormSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    if (formData.name.length < NAME_LENGTH) {
      setIsNameValid(true);
    }

    if (formData.message.length < MESSAGE_LENGTH) {
      setIsMessageValid(true);
    }
  };

  console.log(formData);

  return (
    <>
      <h3>Form using useState</h3>
      <form onSubmit={handleFormSumbit}>
        <label htmlFor="name">
          <p>
            <strong>Imię</strong>
          </p>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleFormDataChange}
            // onChange={(e) => console.log(e)}
          />
          {isNameValid ? (
            <p>Imię musi zawierać minimum {NAME_LENGTH} znaki.</p>
          ) : (
            ""
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
            onChange={handleFormDataChange}
          />
          <p></p>
        </label>

        <label htmlFor="message">
          <p>
            <strong>Wiadomość</strong>
          </p>
          <textarea
            name="message"
            id="message"
            onChange={handleFormDataChange}
            cols={30}
            rows={10}
          ></textarea>
          {isMessageValid ? (
            <p>Wiadomość musi zawierać minimum {MESSAGE_LENGTH} znaków.</p>
          ) : (
            ""
          )}
        </label>
        <p></p>
        <button type="submit">Wyślij wiadomość</button>
      </form>
    </>
  );
}
