export default function FormRHF() {
  return (
    <>
      <h3>Form using react-hook-form</h3>
      <form>
        <label htmlFor="name">
          <p>
            <strong>Imię</strong>
          </p>
          <input
            type="text"
            name="name"
            id="name"
            // onChange={(e) => console.log(e)}
          />
          <p>Imię musi zawierać minimum {} znaki.</p>
        </label>

        <label htmlFor="email">
          <p>
            <strong>Email</strong>
          </p>
          <input type="email" name="email" id="email" />
          <p>Wpisz poprawny adres email</p>
        </label>

        <label htmlFor="message">
          <p>
            <strong>Wiadomość</strong>
          </p>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
          <p>Wiadomość musi zawierać minimum {} znaków.</p>
        </label>
        <p></p>
        <button type="submit">Wyślij wiadomość</button>
      </form>
      <h3>Formularz wysłany poprawnie 😀</h3>
    </>
  );
}
