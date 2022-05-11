import { Container } from "./styles";

export function TransactionsTable(){
    return (
        <Container> 
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>ODSJFOJSDF</td>
                        <td>1200</td>
                        <td>SSASAD</td>
                        <td>22/2/2222</td>
                    </tr>
                    <tr>
                        <td>ODSJFOJSDF</td>
                        <td>1200</td>
                        <td>SSASAD</td>
                        <td>22/2/2222</td>
                    </tr>
                    <tr>
                        <td>ODSJFOJSDF</td>
                        <td>1200</td>
                        <td>SSASAD</td>
                        <td>22/2/2222</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}