import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from "enzyme";
import HomePage from './components/home';

test('renders correctly', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/Open Referral Logo/i);
  expect(imgElement).toBeInTheDocument();
});

it("renders without crashing", () => {
  const result = shallow(<App/>);
  const html = (
    <div className="app">
      <HomePage/>
    </div>
  )
})