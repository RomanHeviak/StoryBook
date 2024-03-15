import React, { useState } from 'react';
import GoalsList from './components/GoalsList';
import SecondaryButton from './components/UI/Button/Secondary';
import Input from './components/UI/Input';

function App() {
  const [showInput, setShowInput] = useState(true);

  return (
    <div className='wrapper'>
      <div className='buttonWrapper'>
        <SecondaryButton text='Add goal' size='md'/>
        { showInput && <Input placeholder='Type your goal' /> }
      </div>
      <GoalsList />
    </div>
  );
}

export default App;
