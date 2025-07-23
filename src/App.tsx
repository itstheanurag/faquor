import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import InputScreen from "./screens/InputScreen";

export default function MyApp() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  );
}
function App() {
  return (
    <div className="">
      {/* <ModeToggle /> */}
      <div>
        <Navbar />
        <InputScreen />
        {/* <Counter />
        <Buttons /> */}
      </div>
    </div>
  );
}

// function Counter() {
//   const [counter] = useAtom(counterAtom);
//   return <p>Count: {counter}</p>;
// }

// function Buttons() {
//  const setCounter = useSetAtom(counterAtom);
//   return (
//     <>
//       <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
//       <button onClick={() => setCounter((c) => c - 1)}>Decrement</button>
//     </>
//   );
// }
