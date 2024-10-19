// Yes, you can use useContext in Next.js, as it is a React hook and Next.js is built on top of React. 
// The useContext hook allows you to access values from a React context, which is useful for managing global 
// state across your components.

// To use useContext in a Next.js project, follow these steps:

// 1. Create a Context
// First, you need to create a context and a provider component to wrap your application or specific parts of it.

// context/MyContext.js
import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [state, setState] = useState('Hello from Context');

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

// 2. Wrap Your Application with the Provider
// Next, wrap your _app.js component (the root component in Next.js) with the provider so 
// that all your pages have access to the context.

// pages/_app.js
import { MyProvider } from '../context/MyContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}

export default MyApp;

// 3. Use useContext in Your Components
// Finally, you can access the context in any component using the useContext hook.

// components/MyComponent.js
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState('New Context Value')}>
        Change Context Value
      </button>
    </div>
  );
};

export default MyComponent;

// 4. Using useContext on Pages
// You can also use useContext directly inside your Next.js pages.
// pages/index.js

import MyComponent from '../components/MyComponent';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <My Component />
    </div>
  );
};

export default HomePage;
