# 🌐 Landing Page Template (Angular 20)

Um template moderno, responsivo e totalmente componentizado em **Angular 20**, ideal para criar páginas de apresentação, produtos ou serviços com facilidade e escalabilidade.

---

## 🚀 Tecnologias e versões

* **Angular 20.3.2**
* **TypeScript 5+**
* **Node 18+**
* **CSS puro** (sem frameworks externos)
* Estrutura SSR pronta (`app.config.server.ts` e `main.server.ts`)

---

## 🧩 Estrutura do projeto

```
├── 📁 .angular
├── 📁 public
│   └── 📄 favicon.ico
├── 📁 src
│   ├── 📁 app
│   │   ├── 📁 core
│   │   │   ├── 📁 footer
│   │   │   │   ├── 🎨 footer.css
│   │   │   │   ├── 🌐 footer.html
│   │   │   │   ├── 📄 footer.spec.ts
│   │   │   │   └── 📄 footer.ts
│   │   │   └── 📁 header
│   │   │       ├── 🎨 header.css
│   │   │       ├── 🌐 header.html
│   │   │       ├── 📄 header.spec.ts
│   │   │       └── 📄 header.ts
│   │   ├── 📁 sections
│   │   │   ├── 📁 about
│   │   │   │   ├── 🎨 about.css
│   │   │   │   ├── 🌐 about.html
│   │   │   │   ├── 📄 about.spec.ts
│   │   │   │   └── 📄 about.ts
│   │   │   ├── 📁 contact
│   │   │   │   ├── 🎨 contact.css
│   │   │   │   ├── 🌐 contact.html
│   │   │   │   ├── 📄 contact.spec.ts
│   │   │   │   └── 📄 contact.ts
│   │   │   ├── 📁 cta
│   │   │   │   ├── 🎨 cta.css
│   │   │   │   ├── 🌐 cta.html
│   │   │   │   ├── 📄 cta.spec.ts
│   │   │   │   └── 📄 cta.ts
│   │   │   ├── 📁 features
│   │   │   │   ├── 🎨 features.css
│   │   │   │   ├── 🌐 features.html
│   │   │   │   ├── 📄 features.spec.ts
│   │   │   │   └── 📄 features.ts
│   │   │   └── 📁 hero
│   │   │       ├── 🎨 hero.css
│   │   │       ├── 🌐 hero.html
│   │   │       ├── 📄 hero.spec.ts
│   │   │       └── 📄 hero.ts
│   │   ├── 📁 shared
│   │   │   ├── 📁 button
│   │   │   │   ├── 🎨 button.css
│   │   │   │   ├── 🌐 button.html
│   │   │   │   ├── 📄 button.spec.ts
│   │   │   │   └── 📄 button.ts
│   │   │   ├── 📁 input
│   │   │   │   ├── 🎨 input.css
│   │   │   │   ├── 🌐 input.html
│   │   │   │   ├── 📄 input.spec.ts
│   │   │   │   └── 📄 input.ts
│   │   │   ├── 📁 modal
│   │   │   │   ├── 🎨 modal.css
│   │   │   │   ├── 🌐 modal.html
│   │   │   │   ├── 📄 modal.spec.ts
│   │   │   │   └── 📄 modal.ts
│   │   │   └── 📁 select
│   │   │       ├── 🎨 select.css
│   │   │       ├── 🌐 select.html
│   │   │       ├── 📄 select.spec.ts
│   │   │       └── 📄 select.ts
│   │   ├── 📄 app.config.server.ts
│   │   ├── 📄 app.config.ts
│   │   ├── 🎨 app.css
│   │   ├── 🌐 app.html
│   │   ├── 📄 app.routes.server.ts
│   │   ├── 📄 app.routes.ts
│   │   ├── 📄 app.spec.ts
│   │   └── 📄 app.ts
│   ├── 🌐 index.html
│   ├── 📄 main.server.ts
│   ├── 📄 main.ts
│   ├── 📄 server.ts
│   └── 🎨 styles.css
├── ⚙️ .editorconfig
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ angular.json
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.json
└── ⚙️ tsconfig.spec.json
```

---

## 🎨 Design e estilo

* Responsivo (desktop, tablet, mobile)
* **Smooth scroll** para navegação suave entre seções
* **Modal customizado** com animações
* **Select e inputs estilizados manualmente**
* Uso do padrão de componentes **standalone** do Angular 20

---

## ⚙️ Como executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar o projeto localmente

```bash
npm start
```

ou

```bash
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

### 3. Gerar build de produção

```bash
ng build
```

Os arquivos finais serão gerados em `dist/landing-page-template/`.

---

## 💡 Funcionalidades implementadas

* Header fixo com navegação
* Hero section com botões “Saiba mais” e “Começar”
* Sessão **Sobre** com descrição institucional
* Sessão **Recursos** com ícones e textos
* Sessão **Contato** com formulário funcional
* Modal com animação e exibição dinâmica
* Componentes reutilizáveis (`button`, `select`, `input`, `modal`)
* **Smooth Scroll** entre seções

---

## 🧠 Próximas melhorias

* Adicionar animações com Angular Animations ou Framer Motion
* Testes E2E (Cypress)
* Integração com API real no formulário de contato
* **Dark Mode** opcional
* SEO com Angular Universal

---

## 🤝 Contribuindo

Sinta-se à vontade para contribuir!

1. Faça um fork do projeto
2. Crie uma branch:

   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit:

   ```bash
   git commit -m 'Adicionei uma nova feature'
   ```
4. Envie para o repositório remoto:

   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request

---

## 🧾 Licença

Este projeto está licenciado sob a **MIT License**.
Você é livre para usar, modificar e distribuir, desde que mantenha os devidos créditos.

---

## 👨‍💻 Autor

**Tuizim (Artur Trombim)**
💼 Desenvolvedor Full Stack
🔗 [https://github.com/Tuizim/LandingPageTemplate](https://github.com/Tuizim/LandingPageTemplate)

---

## 🏷️ Badges

[![Angular](https://img.shields.io/badge/Angular-20.3-red?logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-passing-success)]()

---