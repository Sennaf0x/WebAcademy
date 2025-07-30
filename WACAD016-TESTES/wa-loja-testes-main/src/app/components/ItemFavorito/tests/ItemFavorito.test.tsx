import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemFavorito from "../ItemFavorito";
import { FavoritosProvider } from "../../../State/FavoritosProvider";
import { calculaValorComPorcentagemDeDesconto } from "@/app/helpers";

jest.mock("../../../helpers", () => ({
  calculaValorComPorcentagemDeDesconto: jest.fn(),
}));

describe("ItemFavorito", () => {
  const itemFavorito = {
    id: "smartwatch",
    fotos: [
      {
        titulo: "smartwatch-2",
        src: "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch-1.jpg",
      },
    ],
    nome: "Smartwatch",
    preco: "1199",
    desconto: 8,
    descricao: "Descrição legal",
    vendido: "false",
    usuario_id: "lobo@origamid.com"
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (calculaValorComPorcentagemDeDesconto as jest.Mock).mockReturnValue(1103.08); 
  });

  it("deve renderizar corretamente as informações do item favorito", () => {
    const setFavoritos = jest.fn();

    render(
      <FavoritosProvider>
        <ItemFavorito itemFavorito={itemFavorito} setFavoritos={setFavoritos} />
      </FavoritosProvider>
    );

    expect(screen.getByText("Smartwatch")).toBeInTheDocument();
    expect(screen.getByText("Descrição legal")).toBeInTheDocument();
    expect(screen.getByText("R$ 1103.08")).toBeInTheDocument();
    expect(screen.getByText("8%")).toBeInTheDocument();
    expect(screen.getByAltText("smartwatch-2")).toBeInTheDocument();
  });

  it("deve ser possível clicar no botão remover favorito", async () => {
    const setFavoritos = jest.fn();

    render(
      <FavoritosProvider>
        <ItemFavorito itemFavorito={itemFavorito} setFavoritos={setFavoritos} />
      </FavoritosProvider>
    );

    const buttonRemover = screen.getByRole("button", { name: /remover/i });
    await userEvent.click(buttonRemover);

    expect(setFavoritos).toHaveBeenCalledTimes(1);
  });
});