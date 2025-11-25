export interface BusinessDomain {
  id: number;
  name: string;
  description: string;
  details: {
    mainEntities: string[];
    keyFeatures: string[];
    challenges: string[];
    technologies: string[];
  };
  color: string;
}

export const businessDomains: BusinessDomain[] = [
  {
    id: 1,
    name: "Solução Bancária",
    description: "Sistema completo para gestão de operações bancárias, incluindo contas correntes, poupança, investimentos e transações financeiras.",
    details: {
      mainEntities: ["Cliente", "Conta", "Transação", "Cartão", "Empréstimo", "Investimento"],
      keyFeatures: [
        "Abertura e gestão de contas",
        "Transferências e pagamentos",
        "Gestão de cartões de crédito/débito",
        "Sistema de empréstimos e financiamentos",
        "Plataforma de investimentos",
        "Relatórios financeiros e extratos"
      ],
      challenges: [
        "Segurança e conformidade regulatória",
        "Processamento de transações em tempo real",
        "Integração com sistemas de pagamento",
        "Prevenção de fraudes",
        "Escalabilidade para milhões de usuários"
      ],
      technologies: ["Microserviços", "Kafka", "PostgreSQL", "Redis", "Autenticação multifator"]
    },
    color: "#3b82f6"
  },
  {
    id: 2,
    name: "Gestão de Crédito",
    description: "Plataforma para análise, aprovação e acompanhamento de crédito para pessoas físicas e jurídicas.",
    details: {
      mainEntities: ["Cliente", "Proposta de Crédito", "Score", "Garantia", "Parcela", "Inadimplência"],
      keyFeatures: [
        "Análise automática de crédito",
        "Cálculo de score e risco",
        "Gestão de propostas e aprovações",
        "Controle de garantias",
        "Acompanhamento de pagamentos",
        "Gestão de inadimplência e cobrança"
      ],
      challenges: [
        "Modelagem precisa de risco de crédito",
        "Integração com bureaus de crédito",
        "Automação de decisões",
        "Gestão de cobrança eficiente",
        "Compliance com regulamentações financeiras"
      ],
      technologies: ["Machine Learning", "APIs REST", "MongoDB", "Elasticsearch", "Workflow Engine"]
    },
    color: "#10b981"
  },
  {
    id: 3,
    name: "Gestão de Pedágio",
    description: "Sistema para controle e operação de praças de pedágio, incluindo cobrança automática e manual.",
    details: {
      mainEntities: ["Veículo", "Passagem", "Tarifa", "Operador", "Praça de Pedágio", "Tag/Adesivo"],
      keyFeatures: [
        "Identificação automática de veículos",
        "Sistema de cobrança eletrônica",
        "Gestão de operadores e turnos",
        "Controle de tarifas dinâmicas",
        "Relatórios de tráfego e arrecadação",
        "Integração com sistemas de pagamento"
      ],
      challenges: [
        "Processamento em alta velocidade",
        "Reconhecimento de placas (OCR)",
        "Sincronização entre múltiplas praças",
        "Gestão de inadimplência",
        "Disponibilidade 24/7"
      ],
      technologies: ["IoT", "Computer Vision", "PostgreSQL", "MQTT", "Sistemas embarcados"]
    },
    color: "#f59e0b"
  },
  {
    id: 4,
    name: "E-commerce",
    description: "Plataforma completa de comércio eletrônico com catálogo, carrinho, pagamento e gestão de pedidos.",
    details: {
      mainEntities: ["Produto", "Pedido", "Cliente", "Carrinho", "Pagamento", "Estoque", "Entrega"],
      keyFeatures: [
        "Catálogo de produtos com busca e filtros",
        "Carrinho de compras",
        "Múltiplas formas de pagamento",
        "Gestão de estoque",
        "Rastreamento de pedidos",
        "Sistema de avaliações e reviews"
      ],
      challenges: [
        "Escalabilidade em períodos de pico",
        "Integração com gateways de pagamento",
        "Gestão de estoque em tempo real",
        "Logística e rastreamento de entregas",
        "Experiência de usuário otimizada"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe/PayPal", "CDN"]
    },
    color: "#8b5cf6"
  },
  {
    id: 5,
    name: "Telemedicina",
    description: "Plataforma para consultas médicas remotas, prontuário eletrônico e gestão de saúde.",
    details: {
      mainEntities: ["Paciente", "Médico", "Consulta", "Prontuário", "Prescrição", "Exame"],
      keyFeatures: [
        "Agendamento de consultas online",
        "Videochamada para consultas",
        "Prontuário eletrônico",
        "Prescrição digital",
        "Integração com laboratórios",
        "Histórico médico do paciente"
      ],
      challenges: [
        "Conformidade com LGPD e HIPAA",
        "Qualidade de vídeo e áudio",
        "Segurança de dados médicos",
        "Integração com sistemas hospitalares",
        "Validação de prescrições digitais"
      ],
      technologies: ["WebRTC", "Criptografia end-to-end", "PostgreSQL", "AWS S3", "HL7/FHIR"]
    },
    color: "#ec4899"
  },
  {
    id: 6,
    name: "Gestão de Frotas",
    description: "Sistema para controle e monitoramento de frotas de veículos, incluindo rastreamento e manutenção.",
    details: {
      mainEntities: ["Veículo", "Motorista", "Viagem", "Manutenção", "Abastecimento", "Multa"],
      keyFeatures: [
        "Rastreamento GPS em tempo real",
        "Gestão de motoristas",
        "Controle de manutenções preventivas",
        "Gestão de abastecimento",
        "Controle de multas e infrações",
        "Relatórios de desempenho e custos"
      ],
      challenges: [
        "Processamento de dados de GPS em tempo real",
        "Integração com dispositivos IoT",
        "Otimização de rotas",
        "Gestão de grandes volumes de dados",
        "Alertas e notificações em tempo real"
      ],
      technologies: ["GPS/GNSS", "IoT", "MongoDB", "WebSockets", "Mapas (Google/OpenStreetMap)"]
    },
    color: "#06b6d4"
  },
  {
    id: 7,
    name: "Sistema de RH",
    description: "Plataforma completa para gestão de recursos humanos, incluindo recrutamento, folha de pagamento e avaliação de desempenho.",
    details: {
      mainEntities: ["Funcionário", "Departamento", "Folha de Pagamento", "Benefício", "Avaliação", "Recrutamento"],
      keyFeatures: [
        "Gestão de cadastro de funcionários",
        "Processamento de folha de pagamento",
        "Gestão de benefícios",
        "Recrutamento e seleção",
        "Avaliação de desempenho",
        "Controle de ponto e férias"
      ],
      challenges: [
        "Conformidade trabalhista",
        "Cálculos complexos de folha",
        "Integração com sistemas contábeis",
        "Privacidade de dados sensíveis",
        "Automação de processos de RH"
      ],
      technologies: ["PostgreSQL", "Workflow Engine", "APIs REST", "Relatórios PDF", "Integração bancária"]
    },
    color: "#14b8a6"
  },
  {
    id: 8,
    name: "Gestão Escolar",
    description: "Sistema para administração de instituições de ensino, incluindo matrículas, notas e frequência.",
    details: {
      mainEntities: ["Aluno", "Professor", "Turma", "Disciplina", "Nota", "Frequência", "Responsável"],
      keyFeatures: [
        "Gestão de matrículas",
        "Controle de notas e boletins",
        "Registro de frequência",
        "Portal do aluno e responsável",
        "Gestão de professores e disciplinas",
        "Calendário acadêmico"
      ],
      challenges: [
        "Gestão de múltiplos perfis de acesso",
        "Cálculos de médias e aprovações",
        "Comunicação com responsáveis",
        "Geração de documentos oficiais",
        "Integração com sistemas do MEC"
      ],
      technologies: ["PostgreSQL", "React", "Node.js", "Notificações push", "Geração de relatórios"]
    },
    color: "#f97316"
  },
  {
    id: 9,
    name: "Gestão Hospitalar",
    description: "Sistema integrado para gestão de hospitais, incluindo internações, cirurgias e estoque de medicamentos.",
    details: {
      mainEntities: ["Paciente", "Médico", "Leito", "Cirurgia", "Medicamento", "Estoque", "Faturamento"],
      keyFeatures: [
        "Gestão de internações e leitos",
        "Agendamento de cirurgias",
        "Controle de estoque de medicamentos",
        "Prontuário eletrônico",
        "Faturamento e convênios",
        "Gestão de equipamentos médicos"
      ],
      challenges: [
        "Integração entre múltiplos setores",
        "Conformidade com regulamentações de saúde",
        "Gestão de emergências",
        "Rastreabilidade de medicamentos",
        "Disponibilidade crítica 24/7"
      ],
      technologies: ["PostgreSQL", "HL7/FHIR", "Microserviços", "Redis", "Integração com ANS"]
    },
    color: "#ef4444"
  },
  {
    id: 10,
    name: "Gestão de Estoque",
    description: "Sistema para controle de estoque, movimentações, inventário e gestão de armazéns.",
    details: {
      mainEntities: ["Produto", "Estoque", "Movimentação", "Fornecedor", "Armazém", "Inventário"],
      keyFeatures: [
        "Controle de entrada e saída",
        "Gestão de múltiplos armazéns",
        "Rastreamento de lotes",
        "Inventário periódico",
        "Alertas de estoque mínimo",
        "Integração com compras e vendas"
      ],
      challenges: [
        "Sincronização em tempo real",
        "Rastreabilidade de produtos",
        "Otimização de espaço físico",
        "Gestão de validade de produtos",
        "Integração com código de barras/RFID"
      ],
      technologies: ["PostgreSQL", "RFID/Barcode", "APIs REST", "Redis", "Relatórios em tempo real"]
    },
    color: "#a855f7"
  },
  {
    id: 11,
    name: "Sistema de Delivery",
    description: "Plataforma para delivery de alimentos e produtos, conectando estabelecimentos, entregadores e clientes.",
    details: {
      mainEntities: ["Restaurante", "Pedido", "Cliente", "Entregador", "Produto", "Entrega"],
      keyFeatures: [
        "Catálogo de restaurantes e produtos",
        "Gestão de pedidos em tempo real",
        "Rastreamento de entregadores",
        "Sistema de pagamento integrado",
        "Avaliações e reviews",
        "Gestão de promoções"
      ],
      challenges: [
        "Otimização de rotas de entrega",
        "Sincronização em tempo real",
        "Gestão de múltiplos estabelecimentos",
        "Cálculo dinâmico de taxas de entrega",
        "Experiência do usuário em mobile"
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "WebSockets", "Google Maps API", "Redis"]
    },
    color: "#22c55e"
  },
  {
    id: 12,
    name: "CRM - Gestão de Relacionamento",
    description: "Sistema de CRM para gestão de clientes, vendas, pipeline e relacionamento comercial.",
    details: {
      mainEntities: ["Cliente", "Lead", "Oportunidade", "Proposta", "Vendedor", "Atividade"],
      keyFeatures: [
        "Gestão de leads e pipeline",
        "Acompanhamento de oportunidades",
        "Histórico de interações",
        "Gestão de propostas comerciais",
        "Relatórios de vendas",
        "Automação de marketing"
      ],
      challenges: [
        "Integração com múltiplos canais",
        "Automação de processos de vendas",
        "Análise preditiva de vendas",
        "Gestão de equipes comerciais",
        "Personalização de comunicação"
      ],
      technologies: ["PostgreSQL", "Elasticsearch", "APIs REST", "Email automation", "Analytics"]
    },
    color: "#6366f1"
  }
];
