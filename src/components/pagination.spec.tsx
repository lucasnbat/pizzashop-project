import { render } from "@testing-library/react";
import { Pagination } from "./pagination";
import userEvent from "@testing-library/user-event";

// função spi que anota se ela foi chamada ou não
const onPageChangeCallback = vi.fn();

describe("Pagination", () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear(); // limpart a função spi
  });
  it("should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    );

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();
  });

  it("should be able to navigate to the next page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });

    const user = userEvent.setup();
    await user.click(nextPageButton);

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();

    // espero que a função spi tenha sido chamada com parametro 1
    // isso confirma que o botão foi acionado
    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });
  it("should be able to navigate to the first page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Primeira página",
    });

    await user.click(nextPageButton);

    // espero que a função spi tenha sido chamada com parametro 4
    // isso confirma que o botão foi acionado
    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });
  it("should be able to navigate to the last page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Última página",
    });

    await user.click(nextPageButton);

    // espero que a função spi tenha sido chamada com parametro 4
    // isso confirma que o botão foi acionado
    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
