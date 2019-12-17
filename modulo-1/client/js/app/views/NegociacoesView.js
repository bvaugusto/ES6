class NegociacoesView extends View {

    constructor(element) {
        
        super(element)
    }

    template(model) {
        return `<table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        ${model.negociacoes.map(index => `
                            <tr>
                                <td>${DateHelper.dateToText(index.data)}</td>
                                <td>${index.quantidade}</td>
                                <td>${index.valor}</td>
                                <td>${index.obtemVolume}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                    
                    <tfoot>
                        <td colspan="3"></td>
                        <td>${model.negociacoes.reduce((total, index) => total + index.obtemVolume, 0.0)}</td>
                    </tfoot>
                </table>`;
    }
}
