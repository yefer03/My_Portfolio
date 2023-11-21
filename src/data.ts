import imageGit from "./assets/github.svg";


interface Project {

  id: number;
  category: string;
  img: string;
  title: string;
  url: string;

};


export const projects: Project[] = [
  {
    id: 0,
    category: "front",
    img: imageGit,
    title: "Queue-With-Sockets",
    url: "https://github.com/yefer03/Queue-With-Sockets.git",
  },
  {
    id: 1,
    category: "front",
    img: imageGit,
    title: "Journal App",
    url: "https://github.com/yefer03/08-journal-app.git",
  },
  {
    id: 2,
    category: "front",
    img: imageGit,
    title: "veterinaria",
    url: "https://github.com/yefer03/react_veterinaria.git",
  },
  {
    id: 3,
    category: "front",
    img: imageGit,
    title: "Heroes App",
    url: "https://github.com/yefer03/07-heroes-spa.git",
  },
  {
    id: 4,
    category: "front",
    img: imageGit,
    title: "Gifs App",
    url: "https://github.com/yefer03/04-gif-expert-app.git",
  },
  {
    id: 5,
    category: "front",
    img: imageGit,
    title: "My Portfolio",
    url: "",
  },
  {
    id: 6,
    category: "back",
    img: imageGit,
    title: "Crud NodeJs",
    url: "https://github.com/yefer03/crud_nodejs_backend.git",
  },
  {
    id: 7,
    category: "back",
    img: imageGit,
    title: "Crud Login With Google",
    url: "https://github.com/yefer03/Tokens_Google_Login_Nodejs.git",
  },
  { 
    id: 8,
    category: "back",
    img: imageGit,
    title: "Subir Archivos NodeJs",
    url: "https://github.com/yefer03/Subir_Archivos_Nodejs.git",
  },
  {
    id: 9,
    category: "back",
    img: imageGit,
    title: "Websocket Server",
    url: "https://github.com/yefer03/Websocket-Server.git",
  },
  {
    id: 10,
    category: "back",
    img: imageGit,
    title: "Backend Code",
    url: "https://github.com/yefer03/backend-code.git",
  },
];
