const buildingsData = [
    {
        name: "Edificio Gerardo Barrios",
        rooms: [
            { name: "Decanaturas | Instituto del graduado", coordinates: "13.4900917, -88.1935302" },
            { name: "GB_N2_01", coordinates: "13.4900917, -88.1935302" },
            { name: "GB_N2_02", coordinates: "13.4900917, -88.1935302" },
            { name: "GB_N2_03", coordinates: "13.4900917, -88.1935302" },
            { name: "GB_N2_S1", coordinates: "13.4900917, -88.1935302" },
            { name: "GB_N2_S2", coordinates: "13.4900917, -88.1935302" },
            { name: "GB_N3_01", coordinates: "13.4900917, -88.1935302" },
            { name: "GB_N3_02", coordinates: "13.4900917, -88.1935302" },
            { name: "GB_N3_03", coordinates: "13.4900917, -88.1935302" },
            { name: "GB_N3_04", coordinates: "13.4900917, -88.1935302" }
        ]
    },
    {
        name: "Biblioteca Central",
        rooms: [
            { name: "Sala de estudio individual", coordinates: "13.4884685, -88.1918152" },
            { name: "Sala de estudio grupal", coordinates: "13.4884685, -88.1918152" },
        ]
    },
    {
        name: "Cancha Universitaria Gerardo Barrios",
        rooms: [
            { name: "Cancha UGB", coordinates: "13.489155, -88.194562" },
        ]
    },
    {
        name: "Baños",
        rooms: [
            { name: "Baño 1", coordinates: "13.4884806, -88.1921623" },
            { name: "Baño 2", coordinates: "13.4887349, -88.1925301" },
            { name: "Baño 3", coordinates: "13.4884816, -88.1936915" },
            { name: "Baño 4", coordinates: "13.4899990, -88.1933120" },
        ]
    },
    {
        name: "Laboratorios",
        rooms: [
            { name: "LAB_C1_DR", coordinates: "13.48850, -88.19343" },
            { name: "LAB_C2_DR", coordinates: "13.48850, -88.19343" },
            { name: "LAB_C3_DR", coordinates: "13.48850, -88.19343" },
            { name: "LAB_C4_DR", coordinates: "13.48850, -88.19343" },
            { name: "LAB_HR_DR", coordinates: "13.48850, -88.19343" }
        ]
    },
    {
        name: "Edificio Innova",
        rooms: [
            { name: "INV_N1_LS", coordinates: "13.4886243, -88.1936105" },
            { name: "INV_N1_LH", coordinates: "13.4886243, -88.1936105" },
            { name: "INV_N2_SSDC", coordinates: "13.4886243, -88.1936105" },
            { name: "INV_N2_CDS", coordinates: "13.4886243, -88.1936105" },
            { name: "INV_N2_LM", coordinates: "13.4886243, -88.1936105" },
            { name: "INV_N3_CDN", coordinates: "13.4886243, -88.1936105" },
            { name: "INV_N3_TDA", coordinates: "13.4886243, -88.1936105" },
            { name: "INV_N3_LSP", coordinates: "13.4886243, -88.1936105" }
        ]
    },
    {
        name: "Edificio Juan Jose Cañas",
        rooms: [
            { name: "JC_N1_01", coordinates: "13.4886574, -88.1938024" },
            { name: "JC_N1_L.C.C", coordinates: "13.4886574, -88.1938024" },
            { name: "JC_N1_LA", coordinates: "13.4886574, -88.1938024" },
            { name: "JC_N2_LI_1", coordinates: "13.4886574, -88.1938024" },
            { name: "JC_N2_Magna_01", coordinates: "13.4886574, -88.1938024" },
            { name: "JC_N2_02", coordinates: "13.4886574, -88.1938024" },
            { name: "JC_N3_01", coordinates: "13.4886574, -88.1938024" },
            { name: "JC_N3_02", coordinates: "13.4886574, -88.1938024" },
            { name: "JC_N3_03", coordinates: "13.4886574, -88.1938024" },
            { name: "JC_N3_04", coordinates: "13.4886574, -88.1938024" }
        ]
    },
    {
        name: "Edificio Dr. Hugo Lindo",
        rooms: [
            { name: "HL_N1_LI_2", coordinates: "13.4896262, -88.1930545" },
            { name: "HL_N1_LE", coordinates: "13.4896262, -88.1930545" },
            { name: "HL_N1_01", coordinates: "13.4896262, -88.1930545" },
            { name: "HL_N1_02", coordinates: "13.4896262, -88.1930545" },
            { name: "HL_N1_03", coordinates: "13.4896262, -88.1930545" },
            { name: "HL_N1_04", coordinates: "13.4896262, -88.1930545" }
        ]
    },

    {
        name: "Edificio de Enfermería ",
        rooms: [
            { name: "MO_N1_01", coordinates: "13.4886995, -88.1940295" },
            { name: "MO_N1_02", coordinates: "13.4886995, -88.1940295" },
            { name: "MO_N1_03", coordinates: "13.4886995, -88.1940295" },
            { name: "MO_N1_LPE", coordinates: "13.4886995, -88.1940295" },
            { name: "MO_N1_LA", coordinates: "13.4886995, -88.1940295" },
            { name: "MO_N1_LN", coordinates: "13.4886995, -88.1940295" },
            { name: "MO_N1_LMI", coordinates: "13.4886995, -88.1940295" },
            { name: "MO_N1_LCQ", coordinates: "13.4886995, -88.1940295" }
        ]
    },
    {
        name: "Edificios Independientes",
        rooms: [
            { name: "Admisiones Universidad Gerardo Barrios", coordinates: "13.4889261, -88.1932690" },
            { name: "Auditorio Universidad Gerardo Barrios", coordinates: "13.4885195, -88.1928500" },
            { name: "Bienestar Estudiantil Universidad Gerardo Barrios", coordinates: "13.4886101, -88.1933524" },
            { name: "UGB Store", coordinates: "13.4885353, -88.1920181" },
            { name: "Academica UGB", coordinates: "13.4886763, -88.1925805" },
            { name: "Colecturia UGB", coordinates: "13.4887610, -88.1925467" }
        ]
    },
    {
        name: "Edificio Dr. David Joaquin Guzman",
        rooms: [
            { name: "JG_N1_01", coordinates: "13.4885942, -88.1921424" },
            { name: "JG_N1_02", coordinates: "13.4885942, -88.1921424" },
            { name: "JG_N1_03", coordinates: "13.4885942, -88.1921424" },
            { name: "JG_N1_04", coordinates: "13.4885942, -88.1921424" },
            { name: "JG_RV_N2_L_RV", coordinates: "13.4885942, -88.1921424" },
            { name: "JG_N2_01", coordinates: "13.4885942, -88.1921424" },
            { name: "JG_N2_02", coordinates: "13.4885942, -88.1921424" },
            { name: "JG_N2_03", coordinates: "13.4885942, -88.1921424" }
        ]
    }
];
