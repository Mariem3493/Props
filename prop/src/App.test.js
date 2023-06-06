/*importation des fonctionnalités render et screen du module testing-library/react*/
import { render, screen } from '@testing-library/react';
/*importation du composant App*/
import App from './App';
/*Vérification si le composant App fait le rendu correctement*/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
