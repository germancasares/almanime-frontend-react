import { createRoot } from 'react-dom/client';

import Settings from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  createRoot(div).render(<Settings />);
});
