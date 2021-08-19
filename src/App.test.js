import { shallow, configure, mount } from "enzyme";
import React from "react";
import { UserContainer } from "./components/UserContainer";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("rendering components", () => {
  it("renders UserContainer components without crashing", () => {
    shallow(<UserContainer />)
  })
})