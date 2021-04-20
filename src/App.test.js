import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from "enzyme";
import About from "./components/about";
import HomePage from './components/home';


it("renders without crashing", () => {
  const result = shallow(<App/>);
  const html = (
    <div className="main">
      <HomePage/>
    </div>
  )
})