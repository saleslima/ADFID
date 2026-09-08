# ADFID PWA

Projeto PWA de estudos com 6 aulas.

## Conteúdo
- 30 questões objetivas por aula (180 total), A/B/C/D, gabarito e justificativa.
- 15 questões dissertativas respondidas por aula (90 total).
- 15 flashcards por aula (90 total).
- Resultado parcial a cada 5 respostas.
- Corações por 3 segundos a cada 5 acertos na aula.
- Temas Dia, Noite e Neon.
- Progresso salvo em localStorage.
- Service Worker para uso offline após o primeiro carregamento.
- Botão de instalação PWA.

## Publicar no GitHub Pages
1. Extraia os arquivos na raiz do repositório.
2. Envie ao GitHub.
3. Em Settings > Pages, publique a branch principal pela pasta raiz.
4. Abra a URL HTTPS gerada. A instalação PWA e o Service Worker exigem HTTPS (ou localhost).

## Teste local
Não abra apenas com file://. Rode um servidor HTTP local, por exemplo:
`python -m http.server 8080`
e acesse `http://localhost:8080`.
