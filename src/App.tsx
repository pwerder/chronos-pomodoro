import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <div>
      <Heading>
        Olá Mundo!{' '}
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident velit
        nemo maiores voluptate enim reprehenderit et consequuntur temporibus, ex
        itaque deserunt ipsam atque doloremque vero rem hic voluptates veniam
        pariatur!
      </p>
    </div>
  );
}
