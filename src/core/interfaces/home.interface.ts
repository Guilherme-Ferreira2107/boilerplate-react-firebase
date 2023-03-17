export interface ILoadHomeResponse {
  title: string;
  description: string;
  url_image: string;
  messages: string;
}

export interface IContentHome {
  title: string;
  subtitle: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}
