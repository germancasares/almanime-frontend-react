import { createRoot } from 'react-dom/client';

import Edit from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  createRoot(div).render(<Edit />);
});
