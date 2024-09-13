import { render } from "@testing-library/react";
import { NavLink } from "./nav-link";
import { MemoryRouter } from "react-router-dom";

describe("NavLink", () => {
  it("should highlight the nav link when it is the current link of the page", () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        // Você pode usar essa técnica de wrapper para testar componentes que dependem de contexto
        wrapper: ({ children }) => {
          // esse MemoryRouter simula um browser que carrega a rota ativa em memória
          // nós passamos para ele a primeira rota ativa ("/about") no array de initialEntries
          return (
            <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
          );
        },
      },
    );

    expect(wrapper.getByText("About").dataset.current).toEqual("true");
    expect(wrapper.getByText("Home").dataset.current).toEqual("false");
  });
});
