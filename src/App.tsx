import FormBasic from "./components/FormBasic";
import FormRHF from "./components/FormRHF";
import css from "./App.module.css";

export default function App() {
  return (
    <>
      <h1>Mini Form (useState & RHF) ☰</h1>
      <div className={css.container}>
        <div>
          <FormRHF />
        </div>
        <hr />
        <div>
          <FormBasic />
        </div>
      </div>
    </>
  );
}
