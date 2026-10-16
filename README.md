# Passeio Sitiolândia

Página do passeio escolar da **Saint Mary's School** ao **Sitiolândia Eco Park**, em **19 de outubro de 2026**, organizado pela **Vem com a Gente Viagens**.

Site estático (HTML, CSS e JavaScript), sem instalação e sem etapa de build.

## Estrutura

```
index.html            Página principal: cronograma, cardápio, o que levar
css/estilo.css        Cores, fontes e layout (cores da marca no início do arquivo)
js/app.js             Filtro de brinquedos por turma e montagem das listas
dados/
  brinquedos.js       Brinquedos, faixa etária e turmas indicadas
  atividades.js       Atividades pedagógicas do parque
  legenda-mapa.js     Legenda numerada do mapa
img/                  Logos da Vem com a Gente e do Sitiolândia, mapa do parque
```

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (por exemplo, `passeio-sitiolandia`), público.
2. Na página do repositório, clique em **Add file > Upload files**.
3. Abra a pasta do projeto no computador e arraste **tudo o que está dentro dela** (`index.html`, `README.md` e as pastas `css`, `js`, `dados` e `img`) para a janela do GitHub. Não envie o arquivo `.zip`.
4. Clique em **Commit changes**.
5. Vá em **Settings > Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, e clique em **Save**.
6. Depois de alguns minutos, o endereço do site aparece no topo da mesma página, no formato `https://SEU-USUARIO.github.io/passeio-sitiolandia/`.

O `index.html` precisa ficar na raiz do repositório, e as pastas devem manter os nomes, senão estilos e imagens não carregam.

## Como alterar

- Horários, cardápio e lista "O que levar": edite o `index.html`.
- Faixa etária de um brinquedo: edite `dados/brinquedos.js`.
- Trocar o mapa ou os logos: substitua o arquivo em `img/` mantendo o mesmo nome.
- Para ver no computador, abra o `index.html` no navegador.

As fontes vêm do Google Fonts, então o visitante precisa estar conectado à internet.
