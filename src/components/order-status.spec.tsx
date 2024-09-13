import { OrderStatus } from "./order-status";
import { render } from "@testing-library/react";

describe("Order Status", () => {
  it("should display the right text when order status is pending", () => {
    const wrapper = render(<OrderStatus status="pending" />);
    wrapper.debug(); //renderiza o html no terminal

    /* find = metodos que procuram elemento, aguardam (são promises) e, se não acham, dao false */
    /* get = procuram elemento e se não existem ja da erro */
    /* query = procuram elemento e se não existem da null */

    const statusText = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument(); // espero que um status pending esteja no virtual DOC
    expect(badgeElement).toHaveClass("bg-slate-400");
  });

  it("should display the right text when order status is canceled", () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status="canceled" />);

    wrapper.debug();

    const statusText = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument(); // espero que um status pending esteja no virtual DOC
    expect(badgeElement).toHaveClass("bg-rose-500");
  });
  it("should display the right text when order status is delivering", () => {
    /* Deliveiring */
    const wrapper = render(<OrderStatus status="delivering" />);

    const statusText = wrapper.getByText("Em entrega");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument(); // espero que um status pending esteja no virtual DOC
    expect(badgeElement).toHaveClass("bg-amber-400");
  });
  it("should display the right text when order status is processing", () => {
    /* Deliveiring */
    const wrapper = render(<OrderStatus status="processing" />);

    const statusText = wrapper.getByText("Em preparo");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument(); // espero que um status pending esteja no virtual DOC
    expect(badgeElement).toHaveClass("bg-amber-400");
  });
  it("should display the right text when order status is delivered", () => {
    /* Deliveiring */
    const wrapper = render(<OrderStatus status="delivered" />);

    const statusText = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument(); // espero que um status pending esteja no virtual DOC
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
});
