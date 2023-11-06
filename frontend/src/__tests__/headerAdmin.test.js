// render(<ImageComponent size="large"/>)
//     const testImage = document.querySelector("img") as HTMLImageElement;
//     expect(testImage.alt).toContain("The image alt tag for the large image");

import { render } from "@testing-library/react";
import AdminHeader from "../components/Layout/AdminHeader";
import * as redux from "react-redux";
import { useSelector } from "react-redux";

const user = {
  avatar: {
    url: "example.com",
  },
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  Link: (props) => <a data-testid="mocked-link" {...props} />,
}));
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));
describe("AdminHeader", () => {
  it("component test", async () => {
    useSelector.mockReturnValue({ user: { avatar: { url: "https://www.procart.us/uploads/1/3/0/8/130819476/pc-photoshop-800-logo-b_orig.png" } } });
    render(<AdminHeader />);
    const testImage=document.querySelector("img");
    expect(testImage.src).toContain('https://www.procart.us/uploads/1/3/0/8/130819476/pc-photoshop-800-logo-b_orig.png')

  });
});
