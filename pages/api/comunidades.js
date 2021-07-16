import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {
        const TOKEN = '69c03b26c5ce0fcebab7f909169d37';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
        itemType: '972344',//ID do MODEL de "Commnunities" criado pelo Dato
        ...request.body,
        // title: 'Amigos do Wagao',
        // imageUrl: 'https://github.com/wagaofc.png',
        // creatorSlug: 'WagaoFC'
        })

        response.json({
        dados: 'Algum dado qualquer',
        registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}