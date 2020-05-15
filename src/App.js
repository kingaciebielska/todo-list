import React from 'react';
import TodosContainer from './todos/Containers/TodosContainer'
import FormContainer from './todos/Containers/FormContainer'

function App() {
  return (
    <div>
      <FormContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
