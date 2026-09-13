# DevStack — Development Stack Builder

DevStack is a responsive React and TypeScript web application that helps developers explore different technologies and build their ideal development stack. Users can browse available technologies, view their category, difficulty, rating, and add selected technologies to their personal stack.

## 🌐 Live Website

https://devstackassignment.netlify.app/

## 📂 GitHub Repository

https://github.com/samiaforge/DevStack-Assignment

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify
* JSON
* Git & GitHub
* Netlify

## ✨ Key Features

### 1. Explore Technologies

Users can browse different frontend, backend, database, and tooling technologies. Each technology card displays its icon, category, description, difficulty level, rating, and badge.

### 2. Build Your Own Stack

Users can add technologies to their personal stack. Duplicate technologies are prevented, and users receive a warning notification if they try to add the same technology again.

### 3. Manage Your Stack

Users can remove individual technologies from their stack or remove all selected technologies at once. The interface also shows the current number of selected technologies.

## ⚛️ React Questions & Answers

### 1. What is JSX? Why do we use it?

JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript or TypeScript.

For example:

```tsx
const element = <h1>Hello World</h1>;
```

JSX makes React code easier to read and allows us to describe the UI structure directly inside our components.

---

### 2. What is the difference between Props and State?

**Props** are data passed from a parent component to a child component. Props are read-only and cannot be directly changed by the child component.

**State** is data managed inside a component. When state changes, React can re-render the component and update the UI.

Example:

```tsx
const [count, setCount] = useState(0);
```

Here, `count` is state and `setCount` is used to update it.

---

### 3. What is the useState hook and where do you use it?

`useState` is a React Hook used to create and manage state inside a functional component.

In this project, `useState` is used to store the technologies selected by the user:

```tsx
const [yourStack, setYourStack] = useState<Itechnologies[]>([]);
```

When a technology is added or removed, the state changes and React updates the UI.

---

### 4. What is the useEffect hook? Why is it commonly used for data fetching?

`useEffect` is a React Hook used for handling side effects such as API requests, subscriptions, timers, and other operations that happen outside the normal rendering process.

It is commonly used for fetching data from an API.

In this project, React's `use()` API with a Promise is used to read the local JSON data instead of using `useEffect`.

---

### 5. Why is the `key` prop important when rendering lists?

The `key` prop gives each item in a React list a unique identity.

For example:

```tsx
{technologies.map((technology) => (
  <div key={technology.id}>
    {technology.name}
  </div>
))}
```

React uses the key to identify which items have changed, been added, or removed. This helps React update the UI efficiently.

---

### 6. What is conditional rendering? Give an example from your project.

Conditional rendering means displaying different UI elements depending on a condition.

For example, the project displays an empty state when the user has not selected any technology:

```tsx
{technologies.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

If the stack is empty, the empty-state message is shown. Otherwise, the selected technologies are displayed.

---

### 7. How do you pass data from a parent component to a child component? How do you pass data from a child to a parent?

Data can be passed from a parent component to a child component using **props**.

For example:

```tsx
<TechnologiesAvailable
  technologies={technologies}
  yourStack={yourStack}
  onAddToStack={handleAddToStack}
/>
```

Here, the parent component passes data and a function to the child through props.

To send information from a child back to a parent, the parent can pass a callback function to the child. The child then calls that function when an event occurs.

For example:

```tsx
onClick={() => onAddToStack(technology)}
```

The child calls `onAddToStack`, which was provided by the parent component.

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/samiaforge/DevStack-Assignment.git
```

Navigate to the project folder:

```bash
cd DevStack-Assignment
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

## 👩‍💻 Author

**Samia**

GitHub: https://github.com/samiaforge

---

Built with React, TypeScript, and Tailwind CSS.
