
# Deployment no GitHub Pages

## Configuração Inicial

1. **Fork ou clone este repositório**
2. **Atualize o `vite.config.ts`**: 
   - Substitua `/repo-name/` pelo nome do seu repositório no GitHub
   - Exemplo: se o repo é `meu-amor-por-voce`, use `/meu-amor-por-voce/`

## Deployment Automático

1. **Ative o GitHub Pages**:
   - Vá em Settings > Pages no seu repositório
   - Selecione "GitHub Actions" como source

2. **Push para a branch main**:
   - O GitHub Actions irá automaticamente fazer o build e deploy
   - Seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repo/`

## Deployment Manual

Se preferir fazer deployment manual:

```bash
npm run build
npm run preview
```

Depois copie os arquivos da pasta `dist` para o GitHub Pages.

## Notas Importantes

- O projeto usa HashRouter para compatibilidade com GitHub Pages
- Certifique-se de que o nome do repositório no `vite.config.ts` está correto
- O site ficará acessível em `https://seu-usuario.github.io/nome-do-repo/`
