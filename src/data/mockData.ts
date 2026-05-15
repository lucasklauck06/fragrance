export interface Perfume {
  id: string;
  name: string;
  brand: string;
  brandId: string;
  collection: string;
  perfumist: string;
  perfumistId: string;
  gender: "Masculino" | "Feminino" | "Unissex";
  price: number;
  image: string;
  year: number;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
}

export interface Perfumist {
  id: string;
  name: string;
  country: string;
  bio: string;
  photo: string;
}

export interface Review {
  id: string;
  perfumeId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  createdAt: string;
}

export interface News {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  date: string;
  image?: string;
  autor: string;
}
export interface AromaticGroup {
  id: string;
  name: string;
  color: string;
  gradient: string;
  textColor: string;
  icon: string;
  description: string;
  characteristics: string[];
  subGroups: string[];
  representativePerfumes: string[];
  seasonality: string[];
  gender: string;
}

export const aromaticGroups: AromaticGroup[] = [
  {
    id: 'floral', name: 'Floral', color: '#f9a8d4', gradient: 'from-pink-300 to-rose-400', textColor: '#9d174d',
    icon: '🌸', gender: 'Predominantemente Feminino', seasonality: ['Primavera', 'Verão'],
    description: 'A família Floral é a mais vasta e popular da perfumaria, com as flores como nota central. Desde rosas delicadas até jasmins exuberantes.',
    characteristics: ['Delicado', 'Romântico', 'Natural', 'Versátil'],
    subGroups: ['Floral Branco', 'Floral Rosa', 'Floral Frutal', 'Floral Verde', 'Floral Aquático', 'Floral Aldeídico', 'Soliflore'],
    representativePerfumes: ['Chanel N°5', 'Miss Dior', 'J\'adore', 'Coco Mademoiselle Intense'],
  },
  {
    id: 'oriental', name: 'Oriental', color: '#fcd34d', gradient: 'from-amber-400 to-orange-500', textColor: '#78350f',
    icon: '🌙', gender: 'Unissex', seasonality: ['Outono', 'Inverno'],
    description: 'Os Orientais são ricos, quentes e sensuais. Âmbar, baunilha, resinas e especiarias evocam o misticismo do Oriente.',
    characteristics: ['Quente', 'Sensual', 'Exótico', 'Opulento'],
    subGroups: ['Oriental Floral', 'Oriental Baunilhado', 'Oriental Especiado', 'Oriental Amadeirado', 'Soft Oriental'],
    representativePerfumes: ['Opium – YSL', 'Shalimar – Guerlain', 'Black Orchid – Tom Ford', 'Oud Wood – Tom Ford'],
  },
  {
    id: 'woody', name: 'Amadeirado', color: '#d97706', gradient: 'from-yellow-700 to-amber-800', textColor: '#fffbeb',
    icon: '🌲', gender: 'Predominantemente Masculino', seasonality: ['Outono', 'Inverno', 'Ano todo'],
    description: 'Fragrâncias Amadeiradas evocam florestas, madeiras nobres e a terra. Do sândalo cremoso ao vetiver terroso.',
    characteristics: ['Terroso', 'Sofisticado', 'Elegante', 'Duradouro'],
    subGroups: ['Amadeirado Seco', 'Amadeirado Aromático', 'Amadeirado Especiado', 'Mossy Woods', 'Dry Woods'],
    representativePerfumes: ['Oud Wood – Tom Ford', 'Terre d\'Hermès', 'Bleu de Chanel', 'Sauvage Elixir – Dior'],
  },
  {
    id: 'fresh', name: 'Fresco', color: '#7dd3fc', gradient: 'from-sky-300 to-cyan-400', textColor: '#0c4a6e',
    icon: '💧', gender: 'Predominantemente Masculino', seasonality: ['Primavera', 'Verão'],
    description: 'A família Fresca abrange fragrâncias leves, vivificantes e revitalizantes. Cítricos, aquáticos e verdes se combinam perfeitamente.',
    characteristics: ['Leve', 'Vivificante', 'Energético', 'Limpo'],
    subGroups: ['Cítrico', 'Aquático/Oceânico', 'Aromático Fresco', 'Verde/Herbáceo', 'Fougère'],
    representativePerfumes: ['Acqua di Giò – Armani', 'Cool Water – Davidoff', 'L\'Eau d\'Issey – Issey Miyake', 'Bleu de Chanel EDT'],
  },
  {
    id: 'gourmand', name: 'Gourmand', color: '#fbbf24', gradient: 'from-yellow-500 to-amber-600', textColor: '#431407',
    icon: '🍫', gender: 'Predominantemente Feminino', seasonality: ['Outono', 'Inverno'],
    description: 'Os Gourmands são fragrâncias comestíveis e deliciosas. Inspiradas em doces e sobremesas, evocam prazer sensorial e conforto.',
    characteristics: ['Doce', 'Delicioso', 'Confortante', 'Caloroso'],
    subGroups: ['Gourmand Floral', 'Gourmand Especiado', 'Gourmand Amadeirado', 'Gourmand Caramelado', 'Floriental'],
    representativePerfumes: ['Angel – Mugler', 'La Vie Est Belle – Lancôme', '1 Million – Paco Rabanne', 'Flowerbomb – Viktor & Rolf'],
  },
  {
    id: 'chypre', name: 'Chypre', color: '#6ee7b7', gradient: 'from-emerald-400 to-teal-500', textColor: '#064e3b',
    icon: '🌿', gender: 'Predominantemente Feminino', seasonality: ['Primavera', 'Outono'],
    description: 'Uma das famílias mais nobres, os Chypres são construídos sobre musgo de carvalho, labdanum e bergamota. Sofisticados por natureza.',
    characteristics: ['Elegante', 'Sofisticado', 'Terroso', 'Clássico'],
    subGroups: ['Chypre Floral', 'Chypre Frutal', 'Chypre Aromático', 'Chypre Couro', 'Chypre Verde'],
    representativePerfumes: ['Miss Dior Original', 'Mitsouko – Guerlain', 'Femme – Rochas', 'Knowing – Estée Lauder'],
  },
  {
    id: 'fougere', name: 'Fougère', color: '#c4b5fd', gradient: 'from-violet-400 to-purple-500', textColor: '#2e1065',
    icon: '🌾', gender: 'Predominantemente Masculino', seasonality: ['Primavera', 'Verão', 'Outono'],
    description: 'Os Fougères (samambaia) são caracterizados pelo acorde lavanda, cumarina e musgo de carvalho. Um pilar clássico da perfumaria masculina.',
    characteristics: ['Aromático', 'Fresco', 'Clássico', 'Herbáceo'],
    subGroups: ['Fougère Fresco', 'Fougère Floral', 'Fougère Oriental', 'Fougère Herbáceo', 'Soft Fougère'],
    representativePerfumes: ['Azzaro Pour Homme', 'Fahrenheit – Dior', 'Cool Water – Davidoff', 'Green Water – Jacques Fath'],
  },
  {
    id: 'leather', name: 'Couro', color: '#d6d3d1', gradient: 'from-stone-400 to-stone-600', textColor: '#1c1917',
    icon: '🪶', gender: 'Unissex', seasonality: ['Outono', 'Inverno'],
    description: 'Fragrâncias de Couro evocam o odor marcante do couro curtido, suede e tabaco. Sofisticadas e intensas.',
    characteristics: ['Intenso', 'Robusto', 'Sensual', 'Memorável'],
    subGroups: ['Couro Floral', 'Couro Tabaco', 'Couro Amadeirado', 'Couro Oriental', 'Russisch Leder'],
    representativePerfumes: ['Tuscan Leather – Tom Ford', 'Cuir de Russie – Chanel', 'Knize Ten', 'Jolie Madame – Balmain'],
  },
];

export const brands: Brand[] = [
  {
    id: "1",
    name: "Dior",
    country: "França",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Símbolo máximo do luxo francês, combina a alta-costura com fragrâncias que exalam elegância audaciosa e sofisticação atemporal.",
  },
  {
    id: "2",
    name: "Chanel",
    country: "França",
    image:
      "https://www.shutterstock.com/image-vector/chanel-icon-logo-symbol-sign-600nw-2404629953.jpg",
    description:
      "Ícone de refinamento, a marca define o padrão ouro da perfumaria mundial com composições que equilibram simplicidade e mistério.",
  },
  {
    id: "3",
    name: "Armani",
    country: "Itália",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Traduz o minimalismo e a alfaiataria italiana em experiências sensoriais puras, serenas e profundamente luxuosas.",
  },
  {
    id: "4",
    name: "Tom Ford",
    country: "Estados Unidos",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Provocante, intensa e exclusiva. Uma marca que desafia convenções com ingredientes raros e um glamour moderno inconfundível.",
  },
  {
    id: "5",
    name: "Paco Rabanne",
    country: "Espanha",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Vanguardista e metálica, é famosa por suas criações magnéticas que celebram a audácia, o sucesso e a rebeldia sofisticada.",
  },
  {
    id: "6",
    name: "Lancôme",
    country: "França",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "A essência da feminilidade parisiense, oferecendo fragrâncias românticas que celebram a alegria, a beleza e o brilho interior.",
  },
  {
    id: "7",
    name: "Creed",
    country: "Reino Unido",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Casa de nicho histórica com legado real, conhecida por seus métodos artesanais e fragrâncias que exalam poder e exclusividade.",
  },
  {
    id: "8",
    name: "Heeley",
    country: "Reino Unido",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Perfumaria de nicho contemporânea e independente, focada na pureza absoluta dos ingredientes e em composições artísticas únicas.",
  },
  {
    id: "9",
    name: "Givenchy",
    country: "França",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "O equilíbrio perfeito entre a aristocracia francesa e a modernidade urbana, criando perfumes de elegância magnética.",
  },
  {
    id: "10",
    name: "Bond No. 9",
    country: "Estados Unidos",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Uma celebração olfativa de Nova York, capturando a energia vibrante e a diversidade de cada bairro da metrópole em frascos icônicos.",
  },
  {
    id: "11",
    name: "Montblanc",
    country: "Alemanha",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Reflete o prestígio e a precisão alemã, criando fragrâncias para indivíduos que valorizam a funcionalidade, o estilo e a discrição.",
  },
  {
    id: "12",
    name: "Guerlain",
    country: "França",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      'Uma das casas mais antigas do mundo, mestra em "Guerlinade" e criadora de lendas que narram a história da perfumaria.',
  },
  {
    id: "13",
    name: "Acqua di Parma",
    country: "Itália",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "A personificação do estilo de vida mediterrâneo; fragrâncias cítricas, ensolaradas e repletas de frescor clássico italiano.",
  },
  {
    id: "14",
    name: "Dolce & Gabbana",
    country: "Itália",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Glamour siciliano e paixão fervorosa traduzidos em aromas sensuais que celebram a tradição e o luxo mediterrâneo.",
  },
  {
    id: "15",
    name: "Yves Saint Laurent",
    country: "França",
    image: "https://fimgs.net/mdimg/dizajneri/o.99.jpg",
    description:
      "Ousadia, liberdade e excesso. Fragrâncias que transformam o espírito rock'n'roll em experiências de alta perfumaria.",
  },
  {
    id: "16",
    name: "Issey Miyake",
    country: "Japão",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Inspirada na pureza da água e da natureza, a marca japonesa entrega um minimalismo sereno e uma frescura inovadora.",
  },
  {
    id: "17",
    name: "Calvin Klein",
    country: "Estados Unidos",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      'Pioneira no conceito de fragrâncias compartilhadas e no estilo "minimalista americano", é sinônimo de modernidade casual.',
  },
  {
    id: "18",
    name: "Versace",
    country: "Itália",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Exuberante, luxuosa e sedutora. Cada fragrância é uma declaração de glamour italiano, poder e sensualidade intensa.",
  },
  {
    id: "19",
    name: "Coach",
    country: "Estados Unidos",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Captura o espírito livre e artesanal de Nova York, refletindo o luxo acessível com um toque moderno e autêntico.",
  },
  {
    id: "20",
    name: "Estée Lauder",
    country: "Estados Unidos",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Um legado de inovação e sofisticação, focado na criação de fragrâncias que realçam a beleza clássica e a confiança.",
  },
  {
    id: "21",
    name: "Prada",
    country: "Itália",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Luxo intelectual que desafia tendências, utilizando ingredientes nobres para criar aromas limpos, sofisticados e subversivos.",
  },
  {
    id: "22",
    name: "Chloé",
    country: "França",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Celebra a feminilidade leve e romântica com uma elegância natural, focada na beleza das flores e na liberdade feminina.",
  },
  {
    id: "23",
    name: "Jean Paul Gaultier",
    country: "França",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Irreverência e criatividade sem limites, a marca transforma o humor e a sensualidade em ícones da perfumaria global.",
  },
  {
    id: "24",
    name: "Marc Jacobs",
    country: "Estados Unidos",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Eclética, lúdica e cheia de charme. Suas fragrâncias celebram a individualidade com um espírito jovem e otimista.",
  },
  {
    id: "25",
    name: "Fendi",
    country: "Itália",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Tradição romana e artesanato impecável, expressos em fragrâncias ricas que exalam a opulência e o estilo de vida italiano.",
  },
  {
    id: "26",
    name: "Burberry",
    country: "Reino Unido",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "A essência da sofisticação britânica, capturando desde o frescor da chuva em Londres até a elegância clássica do trench coat.",
  },
  {
    id: "27",
    name: "Valentino",
    country: "Itália",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Alta-costura italiana em forma de perfume; composições ricas, apaixonantes e imbuídas de um romance atemporal.",
  },
  {
    id: "28",
    name: "Hermès",
    country: "França",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Luxo discreto e conexão profunda com a terra. Famosa por sua abordagem artística e uso magistral de notas naturais.",
  },
  {
    id: "29",
    name: "Nina Ricci",
    country: "França",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Poesia e feminilidade delicada, criando fragrâncias que evocam sonhos, romance e a magia dos contos de fadas modernos.",
  },
  {
    id: "30",
    name: "Shiseido",
    country: "Japão",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "A ponte perfeita entre o mistério oriental e a tecnologia ocidental, resultando em aromas que equilibram corpo e mente.",
  },
  {
    id: "31",
    name: "Balenciaga",
    country: "Espanha",
    image: "https://fimgs.net/mdimg/dizajneri/o.160.jpg",
    description:
      "Arquitetônica e radical, a marca oferece fragrâncias que refletem sua herança de inovação e estruturas vanguardistas.",
  },
];

export const perfumists: Perfumist[] = [
  {
    id: "1",
    name: "François Demachy",
    country: "França",
    bio: "Perfumista-criador exclusivo da Dior desde 2006, conhecido por sua expertise em materiais nobres e composições sofisticadas.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Olivier Polge",
    country: "França",
    bio: "Perfumista-criador da Chanel, herdeiro de uma dinastia de perfumistas, com um estilo refinado e minimalista.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Alberto Morillas",
    country: "Espanha",
    bio: "Um dos perfumistas mais prolíficos do mundo, criador de mais de 300 fragrâncias icônicas ao longo de sua carreira.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Jean-François Houbigant",
    country: "França",
    bio: "Legado de uma família ilustre de perfumistas, Houbigant é conhecido por criar fragrâncias clássicas e atemporais.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "James Heeley",
    country: "Reino Unido",
    bio: "Criador independente britânico de fragrâncias artesanais com foco em composições naturais e sustentáveis.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Dominique Ropion",
    country: "França",
    bio: "Um dos maiores perfumistas franceses contemporâneos, criador de fragrâncias atemporais para as maiores casas de luxo.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: "7",
    name: "Rodrigo Flores-Roux",
    country: "México",
    bio: "Perfumista independente criador de Bond No. 9, especialista em fragrâncias de nicho sofisticadas e inspiradas em cidades.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "8",
    name: "Thierry Wasser",
    country: "França",
    bio: "Perfumista-criador de Guerlain, conhecido por sua maestria em composições florais clássicas e inovadoras.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "9",
    name: "Pierre Bourdon",
    country: "França",
    bio: "Mestre perfumista francês com experiência em fragrâncias clássicas e composições de fragrâncias de luxo italiano.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: "10",
    name: "Henri Alford",
    country: "Reino Unido",
    bio: "Perfumista britânico clássico, criador de fragrâncias icônicas com um toque de sofisticação britânica.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "11",
    name: "Jean Guichard",
    country: "França",
    bio: "Criador de algumas das fragrâncias mais icônicas dos anos 80, especialista em composições sensuais.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "12",
    name: "Aurelien Guichard",
    country: "França",
    bio: "Perfumista contemporâneo conhecido por criar fragrâncias vibrantes e sensoriais para marcas de luxo.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: "13",
    name: "Calice Becker",
    country: "França",
    bio: "Mestre perfumista francesa com expertise em fragrâncias florais sofisticadas e composições clássicas.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "14",
    name: "Carlos Benaim",
    country: "França",
    bio: "Perfumista renomado criador de fragrâncias modernas e sofisticadas para casas de moda de luxo.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "15",
    name: "Jerome Epinette",
    country: "França",
    bio: "Criador francês especializado em fragrâncias de nicho contemporâneas e composições naturais.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: "16",
    name: "Francis Kurkdjian",
    country: "França",
    bio: "Perfumista francês de renome internacional, fundador de Maison Francis Kurkdjian, criador de fragrâncias minimalistas sofisticadas.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "17",
    name: "Olivier Cresp",
    country: "França",
    bio: "Perfumista criador de fragrâncias inovadoras e alegres para marcas contemporâneas de luxo.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "18",
    name: "Jeanne Lanvin",
    country: "França",
    bio: "Lendária perfumista francesa, fundadora da Nina Ricci, pioneira em fragrâncias de luxo sofisticadas.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: "19",
    name: "Jacques Cavallier",
    country: "França",
    bio: "Perfumista francês clássico, criador de fragrâncias atemporais e elegantes para casas de luxo europeus.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

export const perfumes: Perfume[] = [
  {
    id: "1",
    name: "Sauvage Elixir",
    brand: "Dior",
    brandId: "1",
    collection: "Sauvage",
    perfumist: "François Demachy",
    perfumistId: "1",
    gender: "Masculino",
    price: 850,
    year: 2021,
    image:
      "https://images.unsplash.com/photo-1655500062895-f9558c44309a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyZnVtZSUyMFNhdXZhZ2UlMjBFbGl4aXJ8ZW58MHx8MHx8fDA%3D",
    topNotes: ["Cardamomo", "Noz-moscada", "Grapefruit"],
    heartNotes: ["Lavanda", "Especiarias", "Lírio"],
    baseNotes: ["Âmbar", "Patchouli", "Sândalo"],
    description:
      "Uma concentração extremamente poderosa de Sauvage, com um coração especiado único.",
  },
  {
    id: "2",
    name: "Bleu de Chanel Parfum",
    brand: "Chanel",
    brandId: "2",
    collection: "Bleu de Chanel",
    perfumist: "Olivier Polge",
    perfumistId: "2",
    gender: "Masculino",
    price: 920,
    year: 2018,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=600&fit=crop",
    topNotes: ["Limão", "Bergamota", "Hortelã"],
    heartNotes: ["Gengibre", "Jasmim", "Noz-moscada"],
    baseNotes: ["Incenso", "Cedro", "Sândalo"],
    description:
      "A versão mais intensa e amadeirada da linha Bleu, com um caráter aromático marcante.",
  },
  {
    id: "3",
    name: "Acqua di Giò Profondo",
    brand: "Armani",
    brandId: "3",
    collection: "Acqua di Giò",
    perfumist: "Alberto Morillas",
    perfumistId: "3",
    gender: "Masculino",
    price: 650,
    year: 2020,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=600&fit=crop",
    topNotes: ["Bergamota", "Aquático", "Mandarina"],
    heartNotes: ["Lavanda", "Cipreste", "Alecrim"],
    baseNotes: ["Almíscar", "Âmbar", "Patchouli"],
    description:
      "Uma interpretação moderna e profunda da fragrância aquática icônica.",
  },
  {
    id: "4",
    name: "Oud Wood",
    brand: "Tom Ford",
    brandId: "4",
    collection: "Private Blend",
    perfumist: "Richard Herpin",
    perfumistId: "1",
    gender: "Unissex",
    price: 1200,
    year: 2007,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=600&fit=crop",
    topNotes: ["Cardamomo", "Pimenta-rosa", "Oud"],
    heartNotes: ["Vetiver", "Sândalo", "Palisandro"],
    baseNotes: ["Âmbar", "Baunilha", "Tonka"],
    description:
      "Uma composição luxuosa centrada no raro e exótico oud, equilibrada com madeiras nobres.",
  },
  {
    id: "5",
    name: "1 Million Parfum",
    brand: "Paco Rabanne",
    brandId: "5",
    collection: "1 Million",
    perfumist: "Christophe Raynaud",
    perfumistId: "2",
    gender: "Masculino",
    price: 580,
    year: 2020,
    image: "https://img.lojasrenner.com.br/item/552262949/original/1.jpg",
    topNotes: ["Toranja", "Cardamomo", "Sangue de Dragão"],
    heartNotes: ["Canela", "Flor de Laranjeira", "Sálvia"],
    baseNotes: ["Couro", "Patchouli", "Âmbar"],
    description:
      "A versão mais intensa e amadeirada da icônica linha 1 Million.",
  },
  {
    id: "6",
    name: "Coco Mademoiselle Intense",
    brand: "Chanel",
    brandId: "2",
    collection: "Coco",
    perfumist: "Olivier Polge",
    perfumistId: "2",
    gender: "Feminino",
    price: 890,
    year: 2018,
    image:
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=600&fit=crop",
    topNotes: ["Laranja", "Bergamota", "Grapefruit"],
    heartNotes: ["Rosa", "Jasmim", "Ylang-ylang"],
    baseNotes: ["Patchouli", "Baunilha", "Almíscar"],
    description:
      "Uma versão mais sensual e profunda do clássico Coco Mademoiselle.",
  },
  {
    id: "7",
    name: "Hypnotic Poison",
    brand: "Dior",
    brandId: "1",
    collection: "Poison",
    perfumist: "François Demachy",
    perfumistId: "1",
    gender: "Feminino",
    price: 780,
    year: 1992,
    image: "https://img.lojasrenner.com.br/item/500891129/original/11.jpg",
    topNotes: ["Anis", "Canela", "Cravo"],
    heartNotes: ["Jasmim", "Baunilha", "Almíscar"],
    baseNotes: ["Cedro", "Sândalo", "Tonka"],
    description:
      "Uma fragrância envolvente e hipnotizante com notas especiadas irresistíveis.",
  },
  {
    id: "8",
    name: "La Vie Est Belle",
    brand: "Lancôme",
    brandId: "6",
    collection: "La Vie Est Belle",
    perfumist: "Alberto Morillas",
    perfumistId: "3",
    gender: "Feminino",
    price: 650,
    year: 2012,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=600&fit=crop",
    topNotes: ["Pera", "Café", "Amêndoa"],
    heartNotes: ["Orquídea", "Jasmim", "Baunilha"],
    baseNotes: ["Âmbar", "Patchouli", "Musgo"],
    description:
      "Celebra a beleza da vida com uma composição adocicada e luxuosa.",
  },
  {
    id: "9",
    name: "Creed Virgin Island Water",
    brand: "Creed",
    brandId: "7",
    collection: "Millésime Imperial",
    perfumist: "Jean-François Houbigant",
    perfumistId: "4",
    gender: "Unissex",
    price: 1450,
    year: 2007,
    image:
      "https://images.unsplash.com/photo-1597318972403-2d9c2d0b9d3a?w=400&h=600&fit=crop",
    topNotes: ["Frutas Vermelhas", "Côco", "Maçã Verde"],
    heartNotes: ["Flor de Laranjeira", "Gengibre", "Gardênia"],
    baseNotes: ["Âmbar", "Musgo", "Cedro"],
    description:
      "Um perfume fresco e tropical que evoca as ilhas virgens caribenhas.",
  },
  {
    id: "10",
    name: "Heeley Sel Marin",
    brand: "Heeley",
    brandId: "8",
    collection: "Heeley Signature",
    perfumist: "James Heeley",
    perfumistId: "5",
    gender: "Unissex",
    price: 520,
    year: 2019,
    image:
      "https://images.unsplash.com/photo-1522335617519-ccf6a4360904?w=400&h=600&fit=crop",
    topNotes: ["Sal Marinho", "Alecrim", "Bergamota"],
    heartNotes: ["Eucalipto", "Lavanda", "Gerânio"],
    baseNotes: ["Musgo de Carvalho", "Âmbar", "Cedro"],
    description: "Uma composição fresca e salgada que remete ao aroma do mar.",
  },
  {
    id: "11",
    name: "Gentleman Reserve Privée",
    brand: "Givenchy",
    brandId: "9",
    collection: "Gentleman",
    perfumist: "Dominique Ropion",
    perfumistId: "6",
    gender: "Masculino",
    price: 760,
    year: 2016,
    image:
      "https://images.unsplash.com/photo-1606042894002-a715e36f184a?w=400&h=600&fit=crop",
    topNotes: ["Tangerina", "Pimenta-rosa", "Noz-moscada"],
    heartNotes: ["Cedro", "Âmbar Cinzento", "Fava Tonka"],
    baseNotes: ["Lã", "Cashmere", "Sândalo"],
    description:
      "Uma fragrância sofisticada que expressa elegância e discrição.",
  },
  {
    id: "12",
    name: "Tomb Raider",
    brand: "Bond No. 9",
    brandId: "10",
    collection: "Bond No. 9",
    perfumist: "Rodrigo Flores-Roux",
    perfumistId: "7",
    gender: "Feminino",
    price: 890,
    year: 2014,
    image:
      "https://images.unsplash.com/photo-1506755855726-85a9715eef00?w=400&h=600&fit=crop",
    topNotes: ["Grapefruit", "Gengibre", "Cidra"],
    heartNotes: ["Jasmim", "Rosa", "Madressilva"],
    baseNotes: ["Vetiver", "Cedro", "Sândalo"],
    description:
      "Uma aventura olfativa cheia de energia e feminilidade sofisticada.",
  },
  {
    id: "13",
    name: "Scentbird Voyage",
    brand: "Montblanc",
    brandId: "11",
    collection: "Explorer",
    perfumist: "Alberto Morillas",
    perfumistId: "3",
    gender: "Masculino",
    price: 580,
    year: 2020,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop",
    topNotes: ["Pimenta", "Bergamota", "Cardamomo"],
    heartNotes: ["Café", "Âmbar", "Especiarias"],
    baseNotes: ["Madeira de Agar", "Baunilha", "Almíscar"],
    description: "Uma composição que captura a essência de uma jornada épica.",
  },
  {
    id: "14",
    name: "Mon Guerlain",
    brand: "Guerlain",
    brandId: "12",
    collection: "Mon Guerlain",
    perfumist: "Thierry Wasser",
    perfumistId: "8",
    gender: "Feminino",
    price: 720,
    year: 2017,
    image:
      "https://images.unsplash.com/photo-1529148482759-b649effa40a5?w=400&h=600&fit=crop",
    topNotes: ["Lavanda", "Bérga", "Bergamota"],
    heartNotes: ["Âmbar", "Baunilha Tahitiana", "Jasmim"],
    baseNotes: ["Almíscar", "Cedro", "Sândalo"],
    description:
      "Lavanda francesa encontra doçura oriental em uma composição envolvente.",
  },
  {
    id: "15",
    name: "Acqua di Parma Blu Mediterraneo",
    brand: "Acqua di Parma",
    brandId: "13",
    collection: "Blu Mediterraneo",
    perfumist: "Pierre Bourdon",
    perfumistId: "9",
    gender: "Unissex",
    price: 890,
    year: 2014,
    image:
      "https://images.unsplash.com/photo-1612528443702-f6741f60a616?w=400&h=600&fit=crop",
    topNotes: ["Toranja", "Cedro", "Gengibre"],
    heartNotes: ["Néroli", "Flor de Laranjeira", "Gerânio"],
    baseNotes: ["Âmbar", "Madeira de Cedro", "Musgo"],
    description:
      "Um tributo às belezas do Mediterrâneo com notas cítricas refrescantes.",
  },
  {
    id: "16",
    name: "Light Blue Sun",
    brand: "Dolce & Gabbana",
    brandId: "14",
    collection: "Light Blue",
    perfumist: "Olivier Polge",
    perfumistId: "2",
    gender: "Feminino",
    price: 580,
    year: 2018,
    image:
      "https://images.unsplash.com/photo-1607623488235-c2d8a5e76443?w=400&h=600&fit=crop",
    topNotes: ["Limão Siciliano", "Maçã", "Toranja"],
    heartNotes: ["Flor de Laranjeira", "Jasmim", "Peônia"],
    baseNotes: ["Almíscar", "Âmbar", "Cedro"],
    description:
      "Iluminada pelo sol do Mediterrâneo em uma composição fresca e luminosa.",
  },
  {
    id: "17",
    name: "Yves Saint Laurent La Nuit",
    brand: "Yves Saint Laurent",
    brandId: "15",
    collection: "La Nuit de L'Homme",
    perfumist: "Henri Alford",
    perfumistId: "10",
    gender: "Feminino",
    price: 650,
    year: 1985,
    image:
      "https://images.unsplash.com/photo-1608151657151-fcfde0d57cdb?w=400&h=600&fit=crop",
    topNotes: ["Mandarina", "Grapefruit", "Limão"],
    heartNotes: ["Tuberosa", "Jasmim", "Acórdão de Flores"],
    baseNotes: ["Âmbar", "Sândalo", "Almíscar"],
    description:
      "Uma noite mágica condensada em uma fragrância misteriosa e sensual.",
  },
  {
    id: "18",
    name: "Issey Miyake L'Eau d'Issey",
    brand: "Issey Miyake",
    brandId: "16",
    collection: "L'Eau d'Issey",
    perfumist: "Dominique Ropion",
    perfumistId: "6",
    gender: "Feminino",
    price: 620,
    year: 1992,
    image:
      "https://images.unsplash.com/photo-1588177815068-f6bfc5c1e9a5?w=400&h=600&fit=crop",
    topNotes: ["Bergamota", "Osmanto", "Melão"],
    heartNotes: ["Nenúfar", "Rosa", "Jacinto"],
    baseNotes: ["Cedro", "Âmbar", "Sândalo"],
    description:
      "Uma fragrância limpa que celebra a pureza da água e a elegância simples.",
  },
  {
    id: "19",
    name: "Calvin Klein Obsession",
    brand: "Calvin Klein",
    brandId: "17",
    collection: "Obsession",
    perfumist: "Jean Guichard",
    perfumistId: "11",
    gender: "Feminino",
    price: 540,
    year: 1985,
    image:
      "https://images.unsplash.com/photo-1609375846405-f4d020ac8b1e?w=400&h=600&fit=crop",
    topNotes: ["Anis", "Especiarias", "Tangerina"],
    heartNotes: ["Jasmim", "Âmbar", "Tuberosa"],
    baseNotes: ["Sândalo", "Cedro", "Musgo"],
    description:
      "Uma obsessão hipnotizante com sensualidade profunda e envolvente.",
  },
  {
    id: "20",
    name: "Versace Eros",
    brand: "Versace",
    brandId: "18",
    collection: "Eros",
    perfumist: "Aurelien Guichard",
    perfumistId: "12",
    gender: "Masculino",
    price: 620,
    year: 2012,
    image:
      "https://www.giraofertas.com.br/wp-content/uploads/2021/05/Banner-Versace-Eros-Eau-de-Parfum-01.jpg",
    topNotes: ["Menta", "Anis", "Maçã Verde"],
    heartNotes: ["Gengibre", "Ambroxano", "Especiarias"],
    baseNotes: ["Musgo", "Cedro", "Âmbar"],
    description:
      "O deus grego do amor personificado em uma fragrância vibrante e sensual.",
  },
  {
    id: "21",
    name: "Coach for Men",
    brand: "Coach",
    brandId: "19",
    collection: "Coach Men",
    perfumist: "Dominique Ropion",
    perfumistId: "6",
    gender: "Masculino",
    price: 480,
    year: 2016,
    image:
      "https://images.unsplash.com/photo-1608147056331-53b57b26eda2?w=400&h=600&fit=crop",
    topNotes: ["Bergamota", "Pimenta-rosa", "Grapefruit"],
    heartNotes: ["Noz-moscada", "Âmbar", "Tabaco"],
    baseNotes: ["Madeira de Sândalo", "Baunilha", "Almíscar"],
    description:
      "Uma fragrância urbana que exala confiança e sofisticação moderna.",
  },
  {
    id: "22",
    name: "Estée Lauder Beautiful",
    brand: "Estée Lauder",
    brandId: "20",
    collection: "Beautiful",
    perfumist: "Calice Becker",
    perfumistId: "13",
    gender: "Feminino",
    price: 720,
    year: 1985,
    image:
      "https://images.unsplash.com/photo-1609375844957-6f33ee0f0f9d?w=400&h=600&fit=crop",
    topNotes: ["Maçã", "Melão", "Gengibre"],
    heartNotes: ["Orquídea", "Rosa", "Camelia"],
    baseNotes: ["Âmbar", "Sândalo", "Musgo"],
    description:
      "A celebração da beleza feminina através de notas florais suaves e alegres.",
  },
  {
    id: "23",
    name: "Prada L'Homme",
    brand: "Prada",
    brandId: "21",
    collection: "L'Homme",
    perfumist: "Carlos Benaim",
    perfumistId: "14",
    gender: "Masculino",
    price: 780,
    year: 2016,
    image:
      "https://images.unsplash.com/photo-1608151882476-f2d4b9d18e05?w=400&h=600&fit=crop",
    topNotes: ["Iris", "Maçã Verde", "Toranja"],
    heartNotes: ["Âmbar", "Ambroxano", "Especiarias"],
    baseNotes: ["Cedro", "Sândalo", "Almíscar"],
    description:
      "Um homem moderno e sofisticado em um perfume refinado e equilibrado.",
  },
  {
    id: "24",
    name: "Lancôme Tresor",
    brand: "Lancôme",
    brandId: "6",
    collection: "Tresor",
    perfumist: "Dominique Ropion",
    perfumistId: "6",
    gender: "Feminino",
    price: 650,
    year: 1990,
    image:
      "https://images.unsplash.com/photo-1608252384177-d8e0b70f5f43?w=400&h=600&fit=crop",
    topNotes: ["Abricó", "Pera", "Melão"],
    heartNotes: ["Rosa", "Orquídea", "Jasmim"],
    baseNotes: ["Sândalo", "Âmbar", "Almíscar"],
    description:
      "Um tesouro de fragrância que revela notas florais doces e sofisticadas.",
  },
  {
    id: "25",
    name: "Givenchy Gentleman Cologne",
    brand: "Givenchy",
    brandId: "9",
    collection: "Gentleman",
    perfumist: "Dominique Ropion",
    perfumistId: "6",
    gender: "Masculino",
    price: 620,
    year: 2017,
    image:
      "https://images.unsplash.com/photo-1608145043006-51d8da78fa89?w=400&h=600&fit=crop",
    topNotes: ["Limão", "Tangerina", "Pimenta-rosa"],
    heartNotes: ["Gerânio", "Cedro", "Notas Aromáticas"],
    baseNotes: ["Vetiver", "Musgo", "Âmbar"],
    description:
      "Uma fragrância clássica que representa a elegância atemporal do cavalheiro.",
  },
  {
    id: "26",
    name: "Chloé Nomade",
    brand: "Chloé",
    brandId: "22",
    collection: "Nomade",
    perfumist: "Jerôme Epinette",
    perfumistId: "15",
    gender: "Feminino",
    price: 710,
    year: 2018,
    image:
      "https://images.unsplash.com/photo-1608148456048-36e6d7f57b0e?w=400&h=600&fit=crop",
    topNotes: ["Incenso", "Suculenta", "Bergamota"],
    heartNotes: ["Peônia", "Rosa", "Madeira Cedro"],
    baseNotes: ["Musgo de Carvalho", "Almíscar", "Âmbar"],
    description:
      "Uma nômade independente e livre em uma fragrância cheia de atitude.",
  },
  {
    id: "27",
    name: "Jean Paul Gaultier Le Male",
    brand: "Jean Paul Gaultier",
    brandId: "23",
    collection: "Le Male",
    perfumist: "Francis Kurkdjian",
    perfumistId: "16",
    gender: "Masculino",
    price: 720,
    year: 1994,
    image:
      "https://images.unsplash.com/photo-1608149447994-d6575c9d9e2f?w=400&h=600&fit=crop",
    topNotes: ["Anis", "Capim-limão", "Melão"],
    heartNotes: ["Lavanda", "Almíscaro", "Violeta"],
    baseNotes: ["Cedro", "Sândalo", "Almíscar"],
    description: "Um ícone de masculinidade esculpido em uma garrafa icônica.",
  },
  {
    id: "28",
    name: "Marc Jacobs Daisy",
    brand: "Marc Jacobs",
    brandId: "24",
    collection: "Daisy",
    perfumist: "Olivier Cresp",
    perfumistId: "17",
    gender: "Feminino",
    price: 550,
    year: 2007,
    image:
      "https://images.unsplash.com/photo-1608151611676-19c773a2a23e?w=400&h=600&fit=crop",
    topNotes: ["Fruta da Paixão", "Amora", "Maçã"],
    heartNotes: ["Jasmim", "Espinha de Peixe", "Acácio"],
    baseNotes: ["Almíscar", "Cedro", "Musgo"],
    description:
      "A inocência e alegria capturadas em uma fragrância fresca e radiante.",
  },
  {
    id: "29",
    name: "Fendi L'Homme Intense",
    brand: "Fendi",
    brandId: "25",
    collection: "L'Homme",
    perfumist: "Alberto Morillas",
    perfumistId: "3",
    gender: "Masculino",
    price: 680,
    year: 2014,
    image:
      "https://images.unsplash.com/photo-1608148529596-f41d850bc72f?w=400&h=600&fit=crop",
    topNotes: ["Grapefruit", "Bergamota", "Especiarias"],
    heartNotes: ["Flor de Laranjeira", "Orquídea", "Jasmim"],
    baseNotes: ["Cedarwood", "Âmbar", "Almíscar"],
    description:
      "A intensidade do homem moderno em uma fragrância sofisticada e complexa.",
  },
  {
    id: "30",
    name: "Burberry Brit Sheer",
    brand: "Burberry",
    brandId: "26",
    collection: "Brit",
    perfumist: "Calice Becker",
    perfumistId: "13",
    gender: "Feminino",
    price: 600,
    year: 2009,
    image:
      "https://images.unsplash.com/photo-1608148434128-8b96a69ff22d?w=400&h=600&fit=crop",
    topNotes: ["Pêssego", "Amora", "Chá Verde"],
    heartNotes: ["Flor de Baunilha", "Peônia", "Framboesa"],
    baseNotes: ["Cedro", "Musgo", "Almíscar"],
    description:
      "A graça britânica reimaginada em uma fragrância fresca e luminosa.",
  },
  {
    id: "31",
    name: "Guerlain L'Homme Ideal",
    brand: "Guerlain",
    brandId: "12",
    collection: "L'Homme Ideal",
    perfumist: "Thierry Wasser",
    perfumistId: "8",
    gender: "Masculino",
    price: 740,
    year: 2013,
    image:
      "https://images.unsplash.com/photo-1608155025513-4bfed7eb8ebf?w=400&h=600&fit=crop",
    topNotes: ["Toranja", "Néroli", "Bergamota"],
    heartNotes: ["Ambroxano", "Ládano", "Notas de Café"],
    baseNotes: ["Cedro", "Sândalo", "Almíscar"],
    description:
      "A definição do homem ideal em uma fragrância elegante e atemporal.",
  },
  {
    id: "32",
    name: "Valentino Voce Viva",
    brand: "Valentino",
    brandId: "27",
    collection: "Voce Viva",
    perfumist: "Olivier Cresp",
    perfumistId: "17",
    gender: "Feminino",
    price: 640,
    year: 2018,
    image:
      "https://images.unsplash.com/photo-1608150949625-4be05bac5fa8?w=400&h=600&fit=crop",
    topNotes: ["Rubi Grapefruit", "Pimenta", "Flor de Laranjeira"],
    heartNotes: ["Gardênia", "Frésia", "Jasmim"],
    baseNotes: ["Sândalo", "Âmbar", "Cedro"],
    description:
      "Viva e envolvente, uma fragrância que celebra a vida e a feminilidade.",
  },
  {
    id: "33",
    name: "Hermes Eau de Gentiane Blanche",
    brand: "Hermès",
    brandId: "28",
    collection: "Les Colognes",
    perfumist: "Jerome Epinette",
    perfumistId: "15",
    gender: "Unissex",
    price: 850,
    year: 2015,
    image:
      "https://images.unsplash.com/photo-1608150979969-93e8b3e85b45?w=400&h=600&fit=crop",
    topNotes: ["Genciana", "Bergamota", "Limão"],
    heartNotes: ["Flor de Laranjeira", "Néroli", "Alecrim"],
    baseNotes: ["Cedro", "Bálsamo", "Almíscar"],
    description:
      "Uma fragrância fresca e herbal que captura a essência das flores de montanha.",
  },
  {
    id: "34",
    name: "Nina Ricci La Tentation",
    brand: "Nina Ricci",
    brandId: "29",
    collection: "Nina",
    perfumist: "Jeanne Lanvin",
    perfumistId: "18",
    gender: "Feminino",
    price: 580,
    year: 2019,
    image:
      "https://images.unsplash.com/photo-1608149871849-dc3aa7ff8a3d?w=400&h=600&fit=crop",
    topNotes: ["Pêra", "Maçã", "Especiarias"],
    heartNotes: ["Rosa Vermelha", "Flor de Laranjeira", "Jasmim"],
    baseNotes: ["Âmbar", "Sândalo", "Musgo"],
    description:
      "Uma tentação delicada que seduz com elegância feminina e sofisticação.",
  },
  {
    id: "35",
    name: "Shiseido Ginza",
    brand: "Shiseido",
    brandId: "30",
    collection: "Ginza",
    perfumist: "Dominique Ropion",
    perfumistId: "6",
    gender: "Feminino",
    price: 700,
    year: 1990,
    image:
      "https://images.unsplash.com/photo-1608149774410-caa7aa382a15?w=400&h=600&fit=crop",
    topNotes: ["Toranja", "Maçã", "Pêra"],
    heartNotes: ["Rosa", "Jasmim", "Âmbar"],
    baseNotes: ["Sândalo", "Cedro", "Almíscar"],
    description:
      "A elegância oriental de Tóquio encapsulada em uma fragrância sofisticada.",
  },
  {
    id: "36",
    name: "Balenciaga Paris",
    brand: "Balenciaga",
    brandId: "31",
    collection: "Paris",
    perfumist: "Jacques Cavallier",
    perfumistId: "19",
    gender: "Feminino",
    price: 630,
    year: 1986,
    image:
      "https://images.unsplash.com/photo-1608150900937-d19e8c2fa13e?w=400&h=600&fit=crop",
    topNotes: ["Jasmim", "Neroli", "Bergamota"],
    heartNotes: ["Rosa", "Violeta", "Tuberosa"],
    baseNotes: ["Âmbar", "Sândalo", "Almíscar"],
    description:
      "A elegância parisiense reimaginada em uma fragrância clássica e feminina.",
  },
  {
    id: "37",
    name: "Versace Eros Flame",
    brand: "Versace",
    brandId: "18",
    collection: "Eros",
    perfumist: "Olivier Pescheux",
    perfumistId: "19",
    gender: "Masculino",
    price: 630,
    year: 1986,
    image:
      "https://img.lpqvcdn.com/7hG6mnoVwSHYVyledKRTJz-Vip0=/fit-in/600x0/filters:upscale()/https://app.lpqv.com.br/uploads/cm-outlet/products/1279/images/2d8000e2a7e22d030beebca6693c1a7b.png",
    topNotes: ["Jasmim", "Neroli", "Bergamota"],
    heartNotes: ["Rosa", "Violeta", "Tuberosa"],
    baseNotes: ["Âmbar", "Sândalo", "Almíscar"],
    description:
      "Eros Flame de Versace é um perfume Amadeirado Especiado Masculino. Eros Flame foi lançado em 2018. O perfumista que assina esta fragrância é Olivier Pescheux. As notas de topo são: Mandarina, Pimenta de Madagascar, Limão, Chinotto e Alecrim. As notas de coração são: Gerânio, Rosa e Pepperwood™. As notas de fundo são: Baunilha, Fava Tonka, Sândalo, Cedro do Texas, Patchouli e Musgo de Carvalho.",
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    perfumeId: "1",
    userId: "2",
    userName: "Carlos Silva",
    rating: 5,
    comment:
      "Simplesmente espetacular! A projeção é absurda e a fixação dura o dia todo. Vale cada centavo.",
    date: "2026-04-10",
  },
  {
    id: "2",
    perfumeId: "1",
    userId: "3",
    userName: "Maria Santos",
    rating: 4,
    comment:
      "Muito bom, mas achei um pouco forte demais para uso diário. Perfeito para ocasiões especiais.",
    date: "2026-04-08",
  },
  {
    id: "3",
    perfumeId: "1",
    userId: "4",
    userName: "João Oliveira",
    rating: 5,
    comment:
      "Melhor fragrância da linha Sauvage. Complexo, elegante e masculino.",
    date: "2026-03-25",
  },
  {
    id: "4",
    perfumeId: "2",
    userId: "2",
    userName: "Carlos Silva",
    rating: 5,
    comment:
      "Chanel nunca decepciona. Sofisticado e versátil, uso tanto no trabalho quanto à noite.",
    date: "2026-04-15",
  },
  {
    id: "5",
    perfumeId: "3",
    userId: "3",
    userName: "Maria Santos",
    rating: 4,
    comment:
      "Excelente fragrância aquática, perfeita para o verão. Fresca mas com personalidade.",
    date: "2026-04-12",
  },
];

export const users: User[] = [
  {
    id: "1",
    name: "Admin Master",
    email: "admin@fragrance.com",
    role: "ADMIN",
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    name: "Carlos Silva",
    email: "carlos@email.com",
    role: "USER",
    createdAt: "2025-06-15",
  },
  {
    id: "3",
    name: "Maria Santos",
    email: "maria@email.com",
    role: "USER",
    createdAt: "2025-08-20",
  },
  {
    id: "4",
    name: "João Oliveira",
    email: "joao@email.com",
    role: "ADMIN",
    createdAt: "2025-03-10",
  },
];

export const news: News[] = [
  {
    id: "1",
    title: "Lançamento do novo perfume da Chanel",
    subtitle: "Coco Mademoiselle Intense",
    content:
      "Estamos animados para apresentar a nova versão do Coco Mademoiselle, mais sensual e profunda que nunca. A Chanel, sob a expertise do perfumista-criador Olivier Polge, desenvolveu uma composição que dialoga intimamente com a versão original, mantendo sua essência sofisticada enquanto adiciona camadas de profundidade e sensualidade. Este lançamento representa um marco importante na história da marca, reafirmando seu compromisso com a excelência e a inovação no universo das fragrâncias de luxo.\n\nA fórmula do Coco Mademoiselle Intense apresenta uma abertura brilhante de laranja bergamota e grapefruit, que logo cede espaço a um coração floral ousado compostos por rosa, jasmim e ylang-ylang. Essa combinação floral é notavelmente sofisticada, oferecendo um equilíbrio perfeito entre frescor e sensualidade, criando uma assinatura olfativa que é simultaneamente moderna e clássica. A progressão das notas é perfeitamente calculada para garantir uma experiência olfativa envolvente do início ao fim.\n\nO que verdadeiramente distingue essa versão é sua base amadeirada e envolvente, composta por patchouli, baunilha e almíscar. Essas notas conferem uma projeção notável e longevidade excepcional, garantindo que a fragrância permaneça presente ao longo de todo o dia e até da noite. A cremosidade da baunilha contrasta belamente com a terriosidade do patchouli, criando uma base que é tanto acolhedora quanto seductora, perfeita para ocasiões especiais e uso cotidiano sofisticado.\n\nO Coco Mademoiselle Intense representa a evolução natural de um clássico, destinado a ganhar o coração de quem já ama a fragrância original e conquistar novos admiradores em busca de uma interpretação mais profunda e sensual. Com sua elegância intemporal e caráter marcante, esta fragrância promete se tornar rapidamente um ícone entre as mulheres que apreciam perfumaria de alta qualidade. Disponível a partir de abril de 2026.",
    date: "2026-04-15",
    image:
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=600&fit=crop",
    autor: "Admin Master",
  },
  {
    id: "2",
    title: "A Arte da Perfumaria: Explorando os Segredos da Criação",
    subtitle: "Como os Perfumistas Transformam Essências em Magia",
    content:
      "A perfumaria é uma arte milenar que combina ciência, intuição e criatividade em uma dança delicada de moléculas aromáticas. Perfumistas como François Demachy, Olivier Polge e Alberto Morillas dedicam suas vidas a dominar essa disciplina complexa, transformando ingredientes brutos em fragrâncias que marcam épocas e definem identidades. Cada gota de um perfume é resultado de meses ou até anos de pesquisa, testes e refinamentos, onde cada decisão é crucial para o resultado final.\n\nO processo criativo de um perfumista começa com a inspiração, que pode vir de uma memória, uma paisagem, uma emoção ou até mesmo de um conceito abstrato. Depois, vem a fase técnica, onde o criador trabalha com o órgão de fragrância - uma coleção de centenas de ingredientes naturais e sintéticos. O perfumista deve compreender profundamente como cada ingrediente se comporta, como interage com outros e como evolui ao longo do tempo na pele. Essa compreensão é o que separa um perfume amador de uma obra-prima de fragrância.\n\nAs notas de um perfume - notas de saída, coração e base - são cuidadosamente orchestradas para criar uma jornada olfativa completa. As notas de saída capturam atenção imediata, o coração revela a verdadeira personalidade da fragrância, e a base garante longevidade e profundidade. Um perfumista experiente sabe exatamente como equilibrar essas camadas para criar uma narrativa coerente e envolvente. Fragrâncias icônicas como Sauvage Elixir e Bleu de Chanel são exemplos perfeitos dessa maestria, onde cada componente serve um propósito específico na composição geral.\n\nHoje, com o avanço da tecnologia e a sustentabilidade em foco, perfumistas estão explorando novos horizontes, desenvolvendo ingredientes sintéticos que replicam fragrâncias naturais raras e caras, enquanto reduzem o impacto ambiental. A próxima geração de criadores está armada com ferramentas digitais, conhecimento científico avançado e uma profunda apreciação pela tradição. O futuro da perfumaria é fascinante, prometendo fragrâncias ainda mais sofisticadas e responsáveis que honrem tanto a arte quanto o planeta.",
    date: "2026-04-20",
    image:
      "https://cdnm.westwing.com.br/glossary/uploads/br/2023/05/25165015/perfume.jpg",
    autor: "Admin Master",
  },
  {
    id: "3",
    title:
      "Tendências de Fragrâncias 2026: O Retorno do Oud e das Madeiras Nobres",
    subtitle: "Descubra os Aromas que Dominam o Mercado Neste Ano",
    content:
      "O mercado de perfumaria em 2026 está marcado por uma fascinação crescente por ingredientes ricos, complexos e sofisticados, especialmente o oud - o 'ouro negro' do mundo das fragrâncias. Após anos de preferência por fragrâncias leves e aquáticas, os consumidores estão retornando a composições mais profundas e amadeiradas que oferecem presença, personalidade e longevidade. Fragrâncias como Oud Wood do Tom Ford continuam a liderar as preferências dos colecionadores e entusiastas de perfumaria em todo o mundo.\n\nO oud, derivado da madeira de árvores da espécie Aquilaria, possui uma história rica e mística que remonta a séculos na Ásia. Sua escassez natural e processo de formação complexo o tornam um dos ingredientes mais caros e procurados da perfumaria. Uma pequena quantidade de oud autêntico pode transformar uma fragrância inteira, adicionando dimensão, mistério e uma profundidade que perdura na memória olfativa de quem usa. A demanda por fragrâncias baseadas em oud nunca foi tão alta, impulsionando inovações na indústria.\n\nAlém do oud, madeiras nobres como cedro, sândalo e palisandro estão em destaque, frequentemente combinadas com ingredientes especiados para criar composições que evocam sofisticação e elegância. Essas madeiras amadeiradas proporcionam uma nota de saída refinada e uma fixação excepcional, tornando-as ideais para quem busca uma fragrância que marque presença sem ser ensurdecedora. A combinação entre amadeirado e floral também continua em alta, oferecendo versatilidade e apelo amplo.\n\nTendências sustentáveis também moldam o mercado de 2026, com perfumistas desenvolvendo versões sintéticas de oud e madeiras raras que preservam a qualidade olfativa enquanto reduzem a pressão sobre recursos naturais ameaçados. As marcas estão cada vez mais transparentes sobre suas fontes e práticas de fabricação, reconhecendo que os consumidores modernos valorizam tanto a qualidade quanto a responsabilidade ambiental. O futuro da perfumaria parece equilibrar luxo tradicional com consciência contemporânea.",
    date: "2026-04-18",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=600&fit=crop",
    autor: "Admin Master",
  },
  {
    id: "4",
    title: "Perfumes Femininos que Definem Poder e Sensualidade",
    subtitle: "Descubra as Fragrâncias que Empoderam Mulheres Modernas",
    content:
      "As mulheres modernas buscam fragrâncias que as representem autenticamente - aromas que sejam simultaneamente poderosos e femininos, desafiando as convenções tradicionais da perfumaria para mulheres. Em 2026, estamos testemunhando uma revolução onde fragrâncias desafiam dicotomias antigas, oferecendo composições que celebram força, sensualidade, sofisticação e independência. Perfumes como Coco Mademoiselle Intense exemplificam essa tendência, combinando notas florais clássicas com bases amadeiradas e especiadas que reivindicam espaço e presença.\n\nA construção de um perfume feminino que transmita poder começa com a compreensão de que força não é o oposto de delicadeza - é seu complemento. As melhores fragrâncias femininas atuais presenteiam composições que começam com notas florais leves e evoluem para bases robustas e duradouras. O equilíbrio entre bergamota bergamota fresca, flores envolventes e patchouli ou âmbar cria uma assinatura que não pede permissão para se fazer presente. Essa abordagem permite que mulheres se expressem através de suas escolhas olfativas com confiança total.\n\nA longevidade e projeção também se tornaram fatores cruciais para mulheres que não querem que seu perfume desapareça discretamente. As fragrâncias femininas atuais são formuladas com concentrações de ingredientes ativos que rival muitos perfumes unissex, garantindo que o aroma permaneça presente e vibrante ao longo de todo o dia. Isso representa uma mudança significativa no mercado, onde mulheres anteriormente aceitavam fragrâncias mais leves e efêmeras. Agora elas exigem qualidade, duração e impacto.\n\nA diversidade de escolha também é um fator chave em 2026, com marcas reconhecendo que não existe um único 'perfume de mulher'. Algumas preferem composições florais clássicas, outras gravitam em torno de frutas, especiarias ou madeiras, e muitas apreciam tudo isso simultaneamente dependendo da ocasião e humor. Essa aceitação de pluralidade está libertando mulheres para explorar toda a gama espectro olfativo, escolhendo fragrâncias unicamente porque as amam, não porque correspondem a expectativas sociais sobre o que deveria ser 'feminino'.",
    date: "2026-04-22",
    image:
      "https://images.unsplash.com/photo-1513257854209-c0c004b4bcc4?w=400&h=600&fit=crop",
    autor: "Admin Master",
  },
  {
    id: "5",
    title: "Perfumes Unissex: Quebrando Barreiras e Redefinindo Identidade",
    subtitle: "Como as Fragrâncias Neutras Estão Transformando a Indústria",
    content:
      "A perfumaria tem uma longa história de divisão binária - perfumes para homens e perfumes para mulheres - mas 2026 marca um ponto de inflexão onde fragrâncias unissex não são mais uma categoria marginal, mas um movimento central na indústria. Marcas de luxo reconhecem que aroma é pessoal e subjetivo, e que a verdadeira liberdade de expressão significa permitir que qualquer pessoa use qualquer fragrância. Fragrâncias como Oud Wood exemplificam essa abordagem, criando composições sofisticadas que transcendem categorias tradicionais de gênero.\n\nO conceito de um perfume unissex vai além da simples omissão de notas florais ou especiadas - é sobre criar uma composição que seja suficientemente neutra em sua expressão para não pressupor o gênero de quem o usa, mas suficientemente caracterizada para ter uma identidade olfativa clara. Um bom perfume unissex oferece aos seus usuários a liberdade de se projetar através do aroma sem conformidade forçada. Madeiras nobres, ingredientes verdes, especiarias terrestres e até florais sutis podem ser combinados para criar esse equilíbrio perfeito.\n\nA ascensão dos perfumes unissex também reflete mudanças sociais mais amplas na forma como gerações mais jovens consideram identidade e expressão pessoal. Para muitos, a ideia de que um perfume é 'adequado' ou 'inadequado' baseado em gênero parece ultrapassada. Essa mentalidade está impulsionando marcas a questionar suas convenções de marketing e a reconsiderar como descrevem e promovem fragrâncias. Conceitos como 'floral masculino' ou 'amadeirado feminino' estão gradualmente dando lugar a descrições baseadas em notas, mood e ocasião.\n\nO mercado de fragrâncias unissex está crescendo exponencialmente, com novos lançamentos aparecendo regularmente de marcas estabelecidas e casas de fragrância emergentes. Essa categoria oferece oportunidades para criatividade sem precedentes, permitindo que perfumistas experimentem combinações que podem não ser classificáveis em categorias tradicionais. Para consumidores, significa liberdade expandida - a capacidade de escolher uma fragrância baseada inteiramente em preferência pessoal, apreciação olfativa e autenticidade. Este é o futuro da perfumaria: inclusivo, expressivo e verdadeiramente sem barreiras.",
    date: "2026-04-25",
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=600&fit=crop",
    autor: "Admin Master",
  },
];
