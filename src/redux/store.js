import { configureStore } from '@reduxjs/toolkit';

const reducer = {
  todos: () => [],
};

const preloadedState = {
  todos: [
    {
      text: 'Eat food',
      completed: true,
    },
    {
      text: 'Exercise',
      completed: false,
    },
  ],
};

export default configureStore({ reducer, preloadedState });
