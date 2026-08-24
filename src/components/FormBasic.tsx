export default function FormBasic() {
  return (
    <>
      <h3>Form using useState</h3>
      <form>
        <label htmlFor="name">
          <p>
            <strong>Imię</strong>
          </p>
          <input type="text" name="name" id="name" />
          <p></p>
        </label>

        <label htmlFor="email">
          <p>
            <strong>Email</strong>
          </p>
          <input type="email" name="email" id="email" />
          <p></p>
        </label>

        <label htmlFor="message">
          <p>
            <strong>Wiadomość</strong>
          </p>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
          <p></p>
        </label>
        <button type="submit">Wyślij wiadomość</button>
      </form>
    </>
  );
}
