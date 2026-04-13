import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('oi');

  return (
    <div>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident velit
        nemo maiores voluptate enim reprehenderit et consequuntur temporibus, ex
        itaque deserunt ipsam atque doloremque vero rem hic voluptates veniam
        pariatur!
      </p>
    </div>
  );
}
