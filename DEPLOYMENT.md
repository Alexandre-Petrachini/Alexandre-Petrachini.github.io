
# Deployment no GitHub Pages

## Configuração Inicial

1. **Fork ou clone este repositório**
2. **IMPORTANTE - Atualize o `vite.config.ts`**: 
   - Substitua `/meu-amor-por-voce/` pelo nome do seu repositório no GitHub
   - Exemplo: se o repo é `declaracao-amor`, use `/declaracao-amor/`

## Deployment Automático

1. **Ative o GitHub Pages**:
   - Vá em Settings > Pages no seu repositório
   - Selecione "GitHub Actions" como source

2. **Push para a branch main**:
   - O GitHub Actions irá automaticamente fazer o build e deploy
   - Aguarde alguns minutos para o processo completar
   - Seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repo/`

## Troubleshooting

### Erro de MIME type
Se você ver erros de "MIME type", certifique-se de que:
- O nome do repositório no `vite.config.ts` está exatamente igual ao nome no GitHub
- Aguarde alguns minutos após o deploy para os arquivos propagarem

### Erro 404
- Verifique se o GitHub Pages está ativado
- Confirme que o workflow executou com sucesso na aba Actions
- O nome do repositório deve corresponder exatamente ao configurado no `vite.config.ts`

## Deployment Manual

Se preferir fazer deployment manual:

```bash
npm run build
npm run preview
```

Depois faça upload dos arquivos da pasta `dist` manualmente.

## Notas Importantes

- O projeto usa HashRouter para compatibilidade com GitHub Pages
- **CRÍTICO**: Atualize o nome do repositório no `vite.config.ts` antes do primeiro deploy
- O site ficará acessível em `https://seu-usuario.github.io/nome-do-repo/`
- Pode levar alguns minutos para o site ficar disponível após o primeiro deploy
