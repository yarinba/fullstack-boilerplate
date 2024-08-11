import axios from 'axios';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    axios({ url: '/', method: 'POST', data: { name: 'Yarin' } }).then(
      (response) => console.log(response.data)
    );
  });

  return (
    <div>
      <p>This is the app component.</p>
    </div>
  );
}

export default App;
