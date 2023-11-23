// Importando o componente "Container" de um arquivo chamado "style"
import { Container } from "./style";


import { Header } from "../../components/Header";

// Importando o componente "Button" do diretório "../../components/Button"
import { Button } from "../../components/Button";



// Definindo um componente funcional chamado "Details"
export function Details() {
  
  // Retornando JSX, que é uma extensão de sintaxe para JavaScript recomendada pelo React
  return (
    // Renderizando o componente "Container"
    <Container>
      <Header />

      <Button title="Voltar"/>
    </Container>
  );
}
