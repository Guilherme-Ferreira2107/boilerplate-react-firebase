import { IContentHome, ILoadHomeResponse } from "../interfaces";

export const HomeResponseMock: ILoadHomeResponse = {
  title: "Plataforma Observatório Online Projeto MackPesquisa",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare laoreet. Quisque vel efficitur quam, eu molestie odio. In hac habitasse platea dictumst. Integer diam sapien, aliquet sit amet feugiat vel, tempor nec leo.",
  url_image: "",
  messages: "",
};

export const mockHome: IContentHome = {
  title: "Plataforma Observatório Online Projeto MackPesquisa",
  subtitle:
    "Este conteúdo deverá ter a possibilidade de ser editado ou criado através do portal do administrador, da mesma forma que ele pode criar conteúdo para ser apresentado na home page do portal.",
  description:
    "Praesent malesuada quam eget elit lobortis maximus. Fusce convallis placerat mauris in tincidunt. Phasellus a massa id neque pretium venenatis. Suspendisse venenatis quam ac ipsum venenatis sagittis. Phasellus pellentesque purus nec nisl volutpat gravida.",
  image: {
    url: "https://scontent.fcgh16-1.fna.fbcdn.net/v/t31.18172-8/13603553_1210637062320326_5028194885996257480_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_DIhuH50QVwAX9i_qqa&_nc_ht=scontent.fcgh16-1.fna&oh=00_AfBgERF1Grd37tc4G4fXN3H73Z7AxTzR5IpCfNVTQGkXVA&oe=63FE536E",
    alt: "",
  },
};

export const mockHome_1: IContentHome = {
  title: "Conteúdo gerado pelo administrador para os PESQUISADORES em geral",
  subtitle:
    "Este conteúdo deverá ter a possibilidade de ser editado ou criado através do portal do administrador, da mesma forma que ele pode criar conteúdo para ser apresentado na home page do portal.",
  description:
    "Praesent malesuada quam eget elit lobortis maximus. Fusce convallis placerat mauris in tincidunt. Phasellus a massa id neque pretium venenatis. Suspendisse venenatis quam ac ipsum venenatis sagittis. Phasellus pellentesque purus nec nisl volutpat gravida.",
  image: {
    url: "/pesquisador.png",
    alt: "",
  },
};

export const mockHome_2: IContentHome = {
  title: "Conteúdo gerado pelo administrador para os RESPONDENTES em geral",
  subtitle: `Este conteúdo deverá ter a possibilidade de ser editado ou criado
  através do portal do administrador, da mesma forma que ele pode criar
  conteúdo para ser apresentado na home page do portal.`,
  description: `Praesent malesuada quam eget elit lobortis maximus. Fusce convallis placerat mauris in tincidunt. Phasellus a massa id neque pretium venenatis. Suspendisse venenatis quam ac ipsum venenatis sagittis. Phasellus pellentesque purus nec nisl volutpat gravida.`,
  image: {
    url: "https://thoughtleadershipleverage.com/wp-content/uploads/2014/12/academic-research-for-thought-leaders.jpg",
    alt: "",
  },
};
