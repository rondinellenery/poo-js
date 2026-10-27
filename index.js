
import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";

// Dar nome à biblioteca
const minhaBiblioteca = new Biblioteca("GT Bezerra - Tarde");

// Criar objeto livro1 com base na classe Livro
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);

// Adicionar o livro1 à biblioteca
minhaBiblioteca.adicionarLivro(livro1);

// Listar os livros cadastrados
minhaBiblioteca.listarLivros();
