import React, { useState } from "react";
import { Switch } from "@headlessui/react";

function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-200 dark:bg-gray-800 min-h-screen">
        <header className="p-4 bg-white dark:bg-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            My App
          </h1>
          <Switch
        checked={darkMode}
        onChange={toggleTheme}
        className={`${darkMode ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[23px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${darkMode ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
          <Switch
            checked={darkMode}
            onChange={toggleTheme}
            className="mx-4"
            colorScheme="blue"
          >
            <span className="">Toggle theme</span>
          </Switch>
        </header>
        <main className="p-4">
          <p className="text-gray-800 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            commodo tincidunt nulla, ac cursus elit porta vel. Vivamus et ipsum
            nec urna congue tempor non eu augue. Nulla euismod tellus vel
            lacinia ultricies. Sed non magna eros. Sed congue nisi in felis
            tempor pharetra. Integer placerat consectetur ex at vestibulum.
            Quisque nec nunc vel sem scelerisque bibendum. Duis eget mauris ac
            urna venenatis pharetra at sed nulla. Donec interdum urna quis
            velit vehicula, sit amet placerat justo facilisis. Sed bibendum
            ipsum nulla, id varius risus facilisis at. Aliquam erat volutpat.
            Donec id augue eget dolor pulvinar sagittis vel in velit.
          </p>
        </main>
      </div>
    </div>
  );
}

export default Toggle;
