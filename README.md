# 🏥 SalusData - Sistema Hospitalar

Sistema para controle e visualização do estado atual dos leitos hospitalares, pacientes e departamentos do Hospital Geral de Palmas (HGP).

## 📦 Tecnologias Utilizadas

- [Angular 16+](https://angular.io/) (com suporte à versão CLI 17)
- [PrimeNG](https://www.primefaces.org/primeng/) para componentes UI
- [RxJS](https://rxjs.dev/) para reatividade
- [Angular Signals](https://angular.io/guide/signals) (experimentos e estudos)
- Atomic Design
- Arquitetura modular com **Core**, **Shared** e **Features**
- Suporte à troca dinâmica de temas (light/dark)
- Testes com Jasmine e Karma (unitário), e Cypress (e2e)

## 📁 Estrutura de Pastas

```bash

src/
│
├── app/
│   ├── core/                  # Serviços globais, guards, interceptors, auth
│   │   └── auth/
│   ├── shared/                # Componentes e pipes reutilizáveis
│   │   ├── components/
│   │   └── layout/
│   ├── features/              # Features isoladas por domínio
│   │   └── precautions/
│   │       ├── precautions-list/
│   │       ├── register-precautions/
│   │       └── description-precautions/
│   └── app.component.ts
│
├── assets/                    # Imagens e arquivos estáticos
├── environments/              # Variáveis de ambiente
└── styles/                    # Estilos globais e temas (light/dark)

```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Node.js 18.x ou superior

Angular CLI 17 (instalado global ou via npx)
