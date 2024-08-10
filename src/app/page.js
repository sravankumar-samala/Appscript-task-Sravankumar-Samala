import Header from "./components/header/header";
import { appContainer } from './page.module.css'

export default function App() {
  return (
    <main className={appContainer}>
      <Header />
    </main>
  );
}
