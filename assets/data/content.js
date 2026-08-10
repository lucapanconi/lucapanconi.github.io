/* Single source of truth for all site content. Edit here, not in the HTML. */
window.SITE = {
  profile: {
    name: "Luca Panconi",
    postnominals: "PhD, MSci",
    role: "AI Application Specialist",
    affiliation: "MIMER (the Swedish AI Factory)",
    location: "Stockholm, Sweden",
    expertise: {
      lead: "Expertise in:",
      items: [
        "Machine and deep learning.",
        "Commercial AI.",
        "Computational biology.",
        "Computer vision.",
      ],
    },
    email: "luca.panconi@scilifelab.se",
    photo: "assets/img/profile.jpg",
    links: [
      { label: "Email", href: "mailto:luca.panconi@scilifelab.se" },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=2yK9zHcAAAAJ&hl=en&oi=ao",
      },
      { label: "GitHub", href: "https://github.com/lucapanconi" },
    ],
  },

  about: [
    "I am an expert in machine and deep learning, with a background in computational biology and mathematics. My research combines AI, computer vision and topological data analysis to perform quantitative analyses over commercial and biomedical datasets.",
    "I currently work as an AI Application Specialist at MIMER, the Swedish AI Factory, where I design scalable software, build production-grade machine learning pipelines, and deploy models on high-performance computing infrastructure. In my role, I provide AI consultancy: helping academic and industrial groups implement AI solutions, and doing so responsibly.",
    "I have previously held a RED Postdoctoral Fellowship at SciLifeLab in Stockholm, where I developed AI-enhanced microscopy and image analysis for personalised medicine. Prior to that, I completed my PhD in Topological Design at the University of Birmingham. Alongside the research I enjoy teaching, supervising students and outreach work.",
  ],

  focus: [
    {
      title: "Machine and deep learning",
      body: "Everything from classical AI to deep generative models. I have worked with state-of-the-art models for image, video, graph, text and mesh datasets.",
    },
    {
      title: "Topological data analysis",
      body: "Topology-based methods for segmenting and quantifying biomedical datasets.",
    },
    {
      title: "Membrane biophysics",
      body: "Modelling nanoscale protein clustering and lipid organisation, and how membrane nano-environments shape cellular signalling.",
    },
    {
      title: "Computational immunotherapy",
      body: "Agent-based and data-driven models of T cell receptor signal transduction, aimed at informing and optimising therapeutic choices.",
    },
  ],

  publications: [
    {
      title:
        "AI4CellFate: Interpretable early cell fate prediction with generative AI",
      authors:
        "I. Cunha, L. Panconi, S. Bauer, M. Gestin, E. Latron, E. Sahai, A. Le Marois, J. Griffi\u00e9",
      venue: "bioRxiv",
      year: "2025",
      status: "Accepted in Nature Communications",
      doi: "https://doi.org/10.1101/2025.05.12.653464",
      featured: true,
    },
    {
      title:
        "SMLMFlow: Improving structural resolution in single molecule localization microscopy with flow matching",
      authors:
        "S. Bauer, L. Panconi, I. Cunha, E. Latron, D. Sage, R. Peters, J. Griffi\u00e9",
      venue: "bioRxiv",
      year: "2025",
      status: "Under review with Nature Communications",
      featured: true,
    },
    {
      title:
        "Nanoscale protein clustering modulates the input-output response of cellular signalling pathways",
      authors: "L. Panconi, J. Griffi\u00e9, D. M. Owen",
      venue: "bioRxiv",
      year: "2025",
      status: "Accepted in Scientific Reports",
      doi: "https://doi.org/10.1101/2025.03.13.642965",
    },
    {
      title: "Mapping membrane biophysical nano-environments",
      authors:
        "L. Panconi, J. Euchner, M. Makarova, D-P. Herten, D. M. Owen, D. J. Nieves",
      venue: "Nature Communications 15 (1)",
      year: "2024",
      doi: "https://doi.org/10.1038/s41467-024-53883-1",
      featured: true,
    },
    {
      title:
        "Three-dimensional topology-based analysis segments volumetric and spatiotemporal fluorescence microscopy",
      authors: "L. Panconi, A. Tansell, A. J. Collins, M. Makarova, D. M. Owen",
      venue: "Biological Imaging 3 (1)",
      year: "2024",
      doi: "https://doi.org/10.1017/S2633903X23000260",
    },
    {
      title: "Methods for imaging cell membranes (1st ed.)",
      authors: "L. Panconi, D. Nieves, M. Makarova, D. M. Owen",
      venue: "CRC Press",
      year: "2023",
      type: "Book",
      doi: "https://doi.org/10.1201/9781003273745",
      featured: true,
    },
    {
      title:
        "Cluster analysis for localisation-based data sets: dos and don\u2019ts when quantifying protein aggregates",
      authors: "L. Panconi, D. M. Owen, J. Griffi\u00e9",
      venue: "Frontiers in Bioinformatics 3 (1)",
      year: "2023",
      doi: "https://doi.org/10.3389/fbinf.2023.1237551",
    },
    {
      title:
        "Phospholipid tail asymmetry allows cellular adaptation to anoxic environments",
      authors: "L. Panconi, C. D. Lorenz, R. C. May, D. M. Owen, M. Makarova",
      venue: "Journal of Biological Chemistry 299 (9)",
      year: "2023",
      doi: "https://doi.org/10.1016/j.jbc.2023.105134",
    },
    {
      title:
        "Topology-based fluorescence image analysis for automated cell identification and segmentation",
      authors: "L. Panconi, M. Makarova, E. R. Lambert, R. C. May, D. M. Owen",
      venue: "Journal of Biophotonics 16 (3)",
      year: "2023",
      doi: "https://doi.org/10.1002/jbio.202200199",
    },
    {
      title:
        "A generalised molecular dynamics simulator for tracking transmembrane protein aggregation",
      authors:
        "L. Panconi, O. Dalby, C. Zaza, D. M. Owen, S. Simoncelli, J. Griffi\u00e9",
      venue: "Manuscript in preparation",
      year: "",
    },
  ],

  reviewing: [
    {
      title:
        "A novel morphological descriptor for multiphase microstructure reconstruction",
      authors:
        "D. D. Chen, J. F. Nan, X. R. Wang, X. R. Chen, B. Jiang",
      venue: "Journal of Microscopy 301 (3)",
      year: "2026",
      doi: "https://doi.org/10.1111/jmi.70052",
    },
    {
      title:
        "The method for assessing the specificity of developing CAR therapies",
      authors: "I. V. Prikhodko, G. T. Guria",
      venue: "Biophysical Reports 4 (3)",
      year: "2024",
      doi: "https://doi.org/10.1016/j.bpr.2024.100172",
    },
  ],

  experience: [
    {
      period: "Jan 2026 — Present",
      role: "AI Application Specialist",
      org: "MIMER, the Swedish AI Factory",
      points: [
        "Design scalable software solutions, build production-grade ML pipelines and deploy models on high-performance computing infrastructure.",
        "Served as interim Team Coordinator for the Life Science team.",
        "Provide AI consultancy to over 50 academic and industrial collaborators.",
        "Work across the full development lifecycle: prototyping, production coding, technical evaluation and deployment.",
        "Maintain DevOps and MLOps standards, with an emphasis on responsible and trustworthy use of AI.",
      ],
    },
    {
      period: "Sep 2024 — Jan 2026",
      role: "RED Postdoctoral Research Fellow",
      org: "SciLifeLab, Stockholm University",
      points: [
        "Awarded the Research, Environment and Development (RED) postdoctoral fellowship.",
        "Developed AI-enhanced microscopy and image analysis techniques for personalised medicine.",
        "Led projects, supervised PhD and Masters students, presented seminars, wrote grants and managed collaborations.",
      ],
    },
    {
      period: "Apr 2024 — Jul 2024",
      role: "Postdoctoral Research Fellow",
      org: "Institute of Immunology and Immunotherapy, University of Birmingham",
      points: [
        "Developed AI methods for analysing membrane protein dynamics.",
        "Mentored graduate students on research and academic development.",
      ],
    },
    {
      period: "Apr 2023 — Jul 2023",
      role: "Industry Placement, Back-end Development",
      org: "Oxford Nanoimaging (ONI), Oxford, UK",
      points: [
        "Worked in back-end development with the ONI software team.",
        "Implemented machine learning methods for microscopy data that were adopted into their online analysis platform.",
      ],
    },
  ],

  education: [
    {
      period: "2020 — 2024",
      role: "PhD, Topological Design",
      org: "University of Birmingham, UK",
    },
    {
      period: "2016 — 2020",
      role: "MSci Mathematics — First Class Honours, Magna Cum Laude",
      org: "University of Birmingham, UK",
    },
  ],

  talks: [
    {
      period: "Sep 2024",
      role: "5th Annual SciLifeLab Science Talks",
      org: "Invited talk",
      points: [
        "Agent-based modelling approaches for studying TCR signal transduction and informing therapeutic choices.",
      ],
    },
    {
      period: "Jun 2024",
      role: "European Light Microscopy Initiative (ELMI)",
      org: "Contributed talk",
      points: [
        "Topological data analysis for identifying nanoscale lipid domains from super-resolution microscopy data.",
      ],
    },
    {
      period: "Aug 2022",
      role: "University of the Third Age (U3A), Birmingham",
      org: "Public seminar",
      points: [
        "Super-resolution microscopy, lipid order and the analysis of marked point patterns.",
      ],
    },
    {
      period: "Jul 2022",
      role: "Frontiers in Bioimaging",
      org: "Contributed talk",
      points: [
        "Topological image analysis, including TOBLERONE (Topological Boundary Line Estimation using Recurrence of Neighbouring Emissions) for cell segmentation.",
      ],
    },
    {
      period: "Jul 2022",
      role: "British Early Career Mathematicians\u2019 Colloquium",
      org: "Contributed talk",
      points: ["Topological data analysis techniques for bioimaging."],
    },
    {
      period: "Jun 2021",
      role: "Young Researchers in Mathematics",
      org: "Contributed talk",
      points: [
        "Applications of mathematical modelling to biophysical and thermodynamic systems.",
      ],
    },
    {
      period: "Feb 2018",
      role: "Tomorrow\u2019s Mathematicians Today",
      org: "Contributed talk",
      points: [
        "Modern applications of Boolean algebra in data science and programming.",
      ],
    },
  ],

  posters: [
    {
      period: "Nov 2024",
      role: "Data-Driven Life Science Annual Conference",
      org: "Poster",
      points: [
        "Machine learning approaches to modelling transmembrane protein dynamics.",
      ],
    },
    {
      period: "Aug 2023",
      role: "Single Molecule Localisation Microscopy Symposium",
      org: "Poster",
      points: [
        "Pattern segmentation techniques applied to artificial and whole-cell membrane data.",
      ],
    },
    {
      period: "Apr 2023",
      role: "Focus on Microscopy",
      org: "Poster",
      points: [
        "Marked point clustering and colocalisation analysis for super-resolution data.",
      ],
    },
    {
      period: "Nov 2022",
      role: "Institute of Immunology and Immunotherapy Away Day",
      org: "Poster",
      points: [
        "Analysis of marked point patterns as part of the PLASMA (Point Label Analysis for Super-resolved Membrane Attributes) project.",
      ],
    },
    {
      period: "Jul 2022",
      role: "Mathematics Postgraduate Society Poster Session",
      org: "Poster \u00b7 University of Birmingham",
      points: ["Applications of topology to image analysis."],
    },
    {
      period: "Jun 2022",
      role: "Postgraduate Research Festival",
      org: "Poster \u00b7 University of Birmingham",
      points: [
        "Applications of topological data analysis in quantitative biology.",
      ],
    },
  ],

  teaching: [
    {
      period: "2021 — 2025",
      role: "Postgraduate Teaching Assistant",
      org: "University of Birmingham, UK",
      points: [
        "Planned undergraduate courses with module leads and graded coursework.",
        "Worked with lecturers both at Birmingham and at the University's institute in Jinan, China.",
      ],
    },
    {
      period: "2022 — 2024",
      role: "STEM Ambassador",
      org: "STEM Learning",
      points: [
        "Organised year-round outreach for local schools and colleges, giving students aged 14\u201318 an insight into university research.",
        "Delivered lectures on applications of topology as part of the CDT in Topological Design outreach scheme.",
      ],
    },
    {
      period: "Sep 2022 — Dec 2022",
      role: "Essentials of Mathematics, Statistics and Programming",
      org: "Teaching assistant \u00b7 University of Birmingham",
      points: [
        "Supported a course on the fundamentals of mathematics, bioinformatics and programming.",
        "Delivered two three-hour lectures on data processing and visualisation.",
      ],
    },
    {
      period: "Jan 2022 — Apr 2022",
      role: "Mathematical Modelling and Problem Solving",
      org: "Teaching assistant \u00b7 University of Birmingham",
      points: [
        "Delivered two lectures to a cohort of over 100 undergraduates on presenting mathematical research.",
      ],
    },
    {
      period: "Jan 2022 — Apr 2022",
      role: "Undergraduate Project Supervision",
      org: "University of Birmingham",
      points: [
        "Supervised two final-year students on a research project in single molecule localisation microscopy and data analysis.",
        "Mentored in both wet lab work and programming, and prepared lab protocol materials.",
      ],
    },
  ],

  service: [
    {
      period: "2022 — 2024",
      role: "Outreach and Public Engagement Committee",
      org: "CDT in Topological Design, University of Birmingham",
      points: [
        "Organised workshops and lectures on applications of mathematics and topology.",
        "Delivered talks to over two hundred students aged 14\u201318 across disadvantaged regions of Birmingham.",
        "Designed the committee website and distributed online resources.",
      ],
    },
    {
      period: "2021 — 2022",
      role: "Liaison Officer, Applied Topology Seminar Committee",
      org: "University of Birmingham",
      points: [
        "Coordinated and hosted a seminar series with local and international speakers.",
      ],
    },
    {
      period: "2020 — 2021",
      role: "Applied Mathematics Seminar Committee",
      org: "University of Birmingham",
      points: [
        "Organised the seminar series, sourced speakers locally and globally, and hosted sessions.",
      ],
    },
  ],

  awards: [
    {
      period: "Jul 2022",
      role: "Best Poster Prize",
      org: "Mathematics Postgraduate Society, University of Birmingham",
      points: [
        "For work on topological image analysis and its applications to cell segmentation.",
      ],
    },
    {
      period: "Jun 2022",
      role: "College of Medical and Dental Sciences Special Award",
      org: "University of Birmingham Graduate School",
      points: [
        "Awarded to the best poster presentation within the College, on topological image analysis in bioimaging.",
      ],
    },
    {
      period: "Mar 2021",
      role: "HEFI Horizon Award",
      org: "University of Birmingham",
      points: [
        "For exceeding expected teaching requirements and completing additional courses in education.",
      ],
    },
    {
      period: "Dec 2020",
      role: "Graham Hoare Prize",
      org: "Institute of Mathematics and its Applications",
      points: [
        "For the article \u201cA Mathematician\u2019s Guide to the Perfect Mug of Tea\u201d, featured in Mathematics Today.",
      ],
    },
    {
      period: "Sep 2020",
      role: "EPSRC Studentship",
      org: "Engineering and Physical Sciences Research Council",
      points: [
        "Four-year studentship for the CDT in Topological Design.",
      ],
    },
    {
      period: "Mar 2019",
      role: "B-Enterprising Ideas Fund",
      org: "University of Birmingham",
      points: [
        "Funding for an initiative creating mathematics resources for students outside mathematical disciplines.",
      ],
    },
    {
      period: "Sep 2016",
      role: "Watson Award",
      org: "University of Birmingham School of Mathematics",
      points: ["Scholarship awarded to outstanding mathematics students."],
    },
  ],
};
