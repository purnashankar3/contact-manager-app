import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';


test('renders learn react link', () => {
  // render(<Header />);
  // const linkElement = screen.getByText(/Contact Manager App/i);
  // expect(linkElement).toBeInTheDocument();
  const component = render(<Header/>)
  const linkElement = screen.getByText(/Contact Manager App/i)
  expect(linkElement).toBeInTheDocument()
});




