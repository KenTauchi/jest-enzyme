import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

import { shallow, mount } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
    console.log(wrapper.debug());
  });

  afterEach(() => {
    cleanup();
  });

  test("render title of counter", () => {
    expect(wrapper.find("h1").text()).toEqual("Yo wassup!?");
  });

  test("render a button with text of 'increment'", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of counter and change count value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");

    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("do not decrement count below 0", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});

describe("Add todo testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  test("test add todo to the list", () => {
    wrapper.find("input").simulate("change", { target: { value: "New item" } });
    wrapper.find("button").simulate("click");
    expect(wrapper.find("ul li").last().text()).toBe("New item");
  });
});
