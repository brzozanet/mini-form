import { useState } from "react";
import type { FormDataChange } from "../types/types";

export default function FormBasic() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormDataChange: FormDataChange = (event) => {
    setFormData((prevFormState) => {
      return { ...prevFormState, [event.target.name]: event.target.value };
    });
  };

  console.log(formData);

  return (
    <>
      <h3>Form using useState</h3>
      <form>
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
          <p></p>
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
          <p></p>
        </label>
        <button type="submit">Wyślij wiadomość</button>
      </form>
    </>
  );
}
