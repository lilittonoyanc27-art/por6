import { TextData } from './types';

export const textsData: TextData[] = [
  {
    id: "intro-mi-familia",
    titleEs: "Mi familia (Introducción)",
    titleHy: "Իմ ընտանիքը (Ներածություն)",
    descriptionEs: "Presentación de una familia numerosa, edades y profesiones de los hermanos.",
    descriptionHy: "Բազմանդամ ընտանիքի ներկայացում, քույրերի և եղբայրների տարիքն ու մասնագիտությունները։",
    category: "general",
    level: "A1",
    sentences: [
      {
        id: "inf-1",
        spanish: "Somos cuatro hermanos: tres chicas y un chico.",
        armenian: "Մենք չորս քույր ու եղբայր ենք՝ երեք աղջիկ և մեկ տղա։"
      },
      {
        id: "inf-2",
        spanish: "Yo soy la menor.",
        armenian: "Ես ամենափոքրն եմ։"
      },
      {
        id: "inf-3",
        spanish: "Tengo 26 años y soy profesora de francés.",
        armenian: "Ես 26 տարեկան եմ և ֆրանսերենի ուսուցչուհի եմ։"
      },
      {
        id: "inf-4",
        spanish: "La mayor, que tiene 33 años, es informática.",
        armenian: "Ամենամեծը, որը 33 տարեկան է, համակարգչային մասնագետ է։"
      },
      {
        id: "inf-5",
        spanish: "No está casada.",
        armenian: "Նա ամուսնացած չէ։"
      },
      {
        id: "inf-6",
        spanish: "Luego viene mi hermano, que tiene 31 años y es periodista.",
        armenian: "Հետո գալիս է իմ եղբայրը, որը 31 տարեկան է և լրագրող է։"
      },
      {
        id: "inf-7",
        spanish: "Y después, mi otra hermana, Luisa, que es administrativa.",
        armenian: "Իսկ հետո՝ իմ մյուս քույրը՝ Լուիսան, որը ադմինիստրատոր է։"
      },
      {
        id: "inf-8",
        spanish: "Está casada y tiene una hija.",
        armenian: "Նա ամուսնացած է և ունի մեկ աղջիկ։"
      },
      {
        id: "inf-9",
        spanish: "Mi madre es bastante joven, tiene sólo 54 años.",
        armenian: "Իմ մայրը բավականին երիտասարդ է, նա ընդամենը 54 տարեկան է։"
      },
      {
        id: "inf-10",
        spanish: "Está jubilada.",
        armenian: "Նա թոշակառու է։"
      },
      {
        id: "inf-11",
        spanish: "También tenemos un perro y un gato.",
        armenian: "Մենք նաև ունենք մեկ շուն և մեկ կատու։"
      },
      {
        id: "inf-12",
        spanish: "Son muy divertidos.",
        armenian: "Նրանք շատ զվարճալի են։"
      },
      {
        id: "inf-13",
        spanish: "Nuestros vecinos son muy simpáticos, y a menudo vienen a casa.",
        armenian: "Մեր հարևանները շատ բարեհամբույր են և հաճախ գալիս են մեր տուն։"
      },
      {
        id: "inf-14",
        spanish: "Su perro es muy amigo del nuestro.",
        armenian: "Նրանց շունը մեր շան շատ լավ ընկերն է։"
      }
    ],
    vocabulary: [
      { id: "v-inf-1", spanish: "hermanos", armenian: "քույր ու եղբայր", exampleEs: "Tengo cuatro hermanos.", exampleHy: "Ես չորս քույր ու եղբայր ունեմ։" },
      { id: "v-inf-2", spanish: "menor", armenian: "ամենափոքրը", exampleEs: "Yo soy la hermana menor.", exampleHy: "Ես ամենափոքր քույրն եմ։" },
      { id: "v-inf-3", spanish: "profesora de francés", armenian: "ֆրանսերենի ուսուցչուհի", exampleEs: "Mi tía es profesora.", exampleHy: "Իմ հորաքույրը ուսուցչուհի է։" },
      { id: "v-inf-4", spanish: "informática", armenian: "համակարգչային մասնագետ", exampleEs: "La informática es una buena carrera.", exampleHy: "Տեղեկատվական տեխնոլոգիաները լավ մասնագիտություն են։" },
      { id: "v-inf-5", spanish: "periodista", armenian: "լրագրող", exampleEs: "El periodista escribe noticias.", exampleHy: "Լրագրողը նորություններ է գրում։" },
      { id: "v-inf-6", spanish: "administrativa", armenian: "ադմինիստրատոր", exampleEs: "Ella trabaja como administrativa.", exampleHy: "Նա աշխատում է որպես ադմինիստրատոր։" },
      { id: "v-inf-7", spanish: "jubilada", armenian: "թոշակառու", exampleEs: "Mi madre ya está jubilada.", exampleHy: "Մայրս արդեն թոշակառու է։" },
      { id: "v-inf-8", spanish: "divertidos", armenian: "զվարճալի / հետաքրքիր", exampleEs: "Mis gatos son muy divertidos.", exampleHy: "Իմ կատուները շատ զվարճալի են։" },
      { id: "v-inf-9", spanish: "vecinos", armenian: "հարևաններ", exampleEs: "Hablamos con los vecinos.", exampleHy: "Մենք խոսում ենք հարևանների հետ։" },
      { id: "v-inf-10", spanish: "a menudo", armenian: "հաճախ", exampleEs: "Vienen a casa a menudo.", exampleHy: "Նրանք հաճախ գալիս են մեր տուն։" }
    ],
    quizzes: [
      {
        id: "q-inf-1",
        question: "¿Cuántos hermanos son en total en la familia?",
        options: ["Dos hermanos", "Tres hermanos", "Cuatro hermanos", "Cinco hermanos"],
        correctIndex: 2,
        explanation: "Տեքստում ասվում է՝ 'Somos cuatro hermanos: tres chicas y un chico' (Մենք չորս քույր ու եղբայր ենք՝ երեք աղջիկ և մեկ տղա)։"
      },
      {
        id: "q-inf-2",
        question: "¿Qué profesión tiene Luisa, la otra hermana?",
        options: ["Es periodista", "Es informática", "Es profesora de francés", "Es administrativa"],
        correctIndex: 3,
        explanation: "Տեքստում նշված է՝ 'Luisa, que es administrativa' (Լուիսան, որը ադմինիստրատոր է)։"
      },
      {
        id: "q-inf-3",
        question: "¿Cuántos años tiene la madre y a qué se dedica?",
        options: [
          "Tiene 54 años y está jubilada",
          "Tiene 45 años y es informática",
          "Tiene 60 años y es profesora",
          "Tiene 54 años y es periodista"
        ],
        correctIndex: 0,
        explanation: "Տեքստում գրված է՝ 'Mi madre tiene sólo 54 años. Está jubilada' (Մայրս ընդամենը 54 տարեկան է։ Նա թոշակառու է)։"
      }
    ]
  },
  {
    id: "1-mi-familia",
    titleEs: "1. Mi familia",
    titleHy: "1. Իմ ընտանիքը",
    descriptionEs: "Una descripción de una pequeña familia, las profesiones de los padres y su mascota.",
    descriptionHy: "Փոքր ընտանիքի նկարագրությունը, ծնողների մասնագիտությունները և նրանց կենդանին։",
    category: "general",
    level: "A1",
    sentences: [
      {
        id: "f1-1",
        spanish: "Mi familia es pequeña.",
        armenian: "Իմ ընտանիքը փոքր է։"
      },
      {
        id: "f1-2",
        spanish: "Vivo con mi madre, mi padre y mi hermano.",
        armenian: "Ես ապրում եմ մայրիկիս, հայրիկիս և եղբորս հետ։"
      },
      {
        id: "f1-3",
        spanish: "Mi madre es profesora y mi padre trabaja en una oficina.",
        armenian: "Մայրս ուսուցչուհի է, իսկ հայրս աշխատում է գրասենյակում։"
      },
      {
        id: "f1-4",
        spanish: "Mi hermano tiene diez años y estudia en la escuela.",
        armenian: "Եղբայրս տասը տարեկան է և սովորում է դպրոցում։"
      },
      {
        id: "f1-5",
        spanish: "Tenemos un gato blanco.",
        armenian: "Մենք ունենք սպիտակ կատու։"
      },
      {
        id: "f1-6",
        spanish: "Se llama Luna.",
        armenian: "Նրա անունը Լունա է։"
      },
      {
        id: "f1-7",
        spanish: "Los domingos comemos juntos y hablamos mucho.",
        armenian: "Կիրակի օրերին մենք միասին ուտում ենք և շատ ենք խոսում։"
      }
    ],
    vocabulary: [
      { id: "v-f1-1", spanish: "pequeña", armenian: "փոքր", exampleEs: "Mi casa es pequeña.", exampleHy: "Իմ տունը փոքր է։" },
      { id: "v-f1-2", spanish: "oficina", armenian: "գրասենյակ", exampleEs: "Trabajo en una oficina moderna.", exampleHy: "Ես աշխատում եմ ժամանակակից գրասենյակում։" },
      { id: "v-f1-3", spanish: "gato blanco", armenian: "սպիտակ կատու", exampleEs: "El gato blanco duerme en el sofá.", exampleHy: "Սպիտակ կատուն քնած է բազմոցին։" },
      { id: "v-f1-4", spanish: "los domingos", armenian: "կիրակի օրերին", exampleEs: "Los domingos no trabajamos.", exampleHy: "Կիրակի օրերին մենք չենք աշխատում։" },
      { id: "v-f1-5", spanish: "juntos", armenian: "միասին", exampleEs: "Siempre estudiamos juntos.", exampleHy: "Մենք միշտ միասին ենք սովորում։" }
    ],
    quizzes: [
      {
        id: "q-f1-1",
        question: "¿Dónde trabaja el padre de la familia?",
        options: ["En una escuela", "En una oficina", "En un restaurante", "En la calle"],
        correctIndex: 1,
        explanation: "Տեքստում ասվում է՝ 'mi padre trabaja en una oficina' (հայրս աշխատում է գրասենյակում)։"
      },
      {
        id: "q-f1-2",
        question: "¿Cuántos años tiene el hermano?",
        options: ["Cinco años", "Ocho años", "Diez años", "Doce años"],
        correctIndex: 2,
        explanation: "Տեքստում գրված է՝ 'Mi hermano tiene diez años' (Եղբայրս տասը տարեկան է)։"
      },
      {
        id: "q-f1-3",
        question: "¿Qué hacen los domingos?",
        options: ["Van al cine", "Trabajan duro", "Comen juntos y hablan mucho", "Limpian el jardín"],
        correctIndex: 2,
        explanation: "Տեքստում ասվում է՝ 'Los domingos comemos juntos y hablamos mucho' (Կիրակի օրերին մենք միասին ուտում ենք և շատ ենք խոսում)։"
      }
    ]
  },
  {
    id: "2-mi-dia",
    titleEs: "2. Mi día",
    titleHy: "2. Իմ օրը",
    descriptionEs: "La rutina diaria de un estudiante, desde que se levanta hasta que se acuesta.",
    descriptionHy: "Ուսանողի ամենօրյա ռեժիմը՝ արթնանալուց մինչև քնելը։",
    category: "general",
    level: "A1",
    sentences: [
      {
        id: "f2-1",
        spanish: "Me levanto a las siete de la mañana.",
        armenian: "Ես արթնանում եմ առավոտյան ժամը յոթին։"
      },
      {
        id: "f2-2",
        spanish: "Desayuno pan con queso y tomo té.",
        armenian: "Նախաճաշին ուտում եմ հաց պանրով և թեյ եմ խմում։"
      },
      {
        id: "f2-3",
        spanish: "Después voy a clase.",
        armenian: "Հետո գնում եմ դասի։"
      },
      {
        id: "f2-4",
        spanish: "Estudio español, inglés y matemáticas.",
        armenian: "Ես սովորում եմ իսպաներեն, անգլերեն և մաթեմատիկա։"
      },
      {
        id: "f2-5",
        spanish: "A las dos vuelvo a casa.",
        armenian: "Ժամը երկուսին վերադառնում եմ տուն։"
      },
      {
        id: "f2-6",
        spanish: "Por la tarde hago los deberes y escucho música.",
        armenian: "Երեկոյան անում եմ տնայինները և երաժշտություն եմ լսում։"
      },
      {
        id: "f2-7",
        spanish: "Por la noche ceno con mi familia y me acuesto temprano.",
        armenian: "Գիշերը ընթրում եմ ընտանիքիս հետ և շուտ եմ քնում։"
      }
    ],
    vocabulary: [
      { id: "v-f2-1", spanish: "me levanto", armenian: "վեր եմ կենում / արթնանում եմ", exampleEs: "Me levanto temprano.", exampleHy: "Ես շուտ եմ արթնանում։" },
      { id: "v-f2-2", spanish: "desayuno", armenian: "նախաճաշում եմ (կամ՝ նախաճաշ)", exampleEs: "Yo desayuno fruta.", exampleHy: "Ես մրգեր եմ ուտում նախաճաշին։" },
      { id: "v-f2-3", spanish: "pan con queso", armenian: "հաց պանրով", exampleEs: "Me gusta el pan con queso.", exampleHy: "Ինձ դուր է գալիս պանրով հացը։" },
      { id: "v-f2-4", spanish: "tomo té", armenian: "թեյ եմ խմում", exampleEs: "Tomo té verde por la mañana.", exampleHy: "Առավոտյան կանաչ թեյ եմ խմում։" },
      { id: "v-f2-5", spanish: "hago los deberes", armenian: "անում եմ տնային աշխատանքները", exampleEs: "Hago los deberes en mi cuarto.", exampleHy: "Տնայիններս անում եմ իմ սենյակում։" },
      { id: "v-f2-6", spanish: "me acuesto", armenian: "պառկում եմ քնելու", exampleEs: "Me acuesto a las diez.", exampleHy: "Ժամը տասին պառկում եմ քնելու։" }
    ],
    quizzes: [
      {
        id: "q-f2-1",
        question: "¿A qué hora se levanta por la mañana?",
        options: ["A las seis", "A las siete", "A las ocho", "A las nueve"],
        correctIndex: 1,
        explanation: "Տեքստում ասվում է՝ 'Me levanto a las siete de la mañana' (Արթնանում եմ առավոտյան ժամը յոթին)։"
      },
      {
        id: "q-f2-2",
        question: "¿Qué come y bebe para el desayuno?",
        options: ["Café con leche y fruta", "Cereal con yogur", "Pan con queso y té", "Huevo frito y jugo"],
        correctIndex: 2,
        explanation: "Տեքստում ասվում է՝ 'Desayuno pan con queso y tomo té' (Նախաճաշին ուտում եմ հաց պանրով և թեյ եմ խմում)։"
      },
      {
        id: "q-f2-3",
        question: "¿Qué hace por la tarde?",
        options: ["Hace los deberes y escucha música", "Va de compras", "Juega al fútbol con amigos", "Limpia la cocina"],
        correctIndex: 0,
        explanation: "Տեքստում գրված է՝ 'Por la tarde hago los deberes y escucho música' (Երեկոյան անում եմ տնայինները և երաժշտություն եմ լսում)։"
      }
    ]
  },
  {
    id: "3-mi-amiga",
    titleEs: "3. Mi amiga",
    titleHy: "3. Իմ ընկերուհին",
    descriptionEs: "La descripción física y personalidad de su mejor amiga, Ana.",
    descriptionHy: "Իր լավագույն ընկերուհու՝ Աննայի արտաքինի և բնավորության նկարագրությունը։",
    category: "general",
    level: "A1",
    sentences: [
      {
        id: "f3-1",
        spanish: "Mi amiga se llama Ana.",
        armenian: "Իմ ընկերուհու անունը Աննա է։"
      },
      {
        id: "f3-2",
        spanish: "Tiene doce años.",
        armenian: "Նա տասներկու տարեկան է։"
      },
      {
        id: "f3-3",
        spanish: "Es alta y delgada.",
        armenian: "Նա բարձրահասակ է և նիհար։"
      },
      {
        id: "f3-4",
        spanish: "Tiene el pelo largo y castaño.",
        armenian: "Նա երկար շագանակագույն մազեր ունի։"
      },
      {
        id: "f3-5",
        spanish: "Sus ojos son verdes.",
        armenian: "Նրա աչքերը կանաչ են։"
      },
      {
        id: "f3-6",
        spanish: "Ana es muy simpática y estudiosa.",
        armenian: "Աննան շատ բարեհամբույր է և աշխատասեր։"
      },
      {
        id: "f3-7",
        spanish: "Le gusta leer libros y dibujar.",
        armenian: "Նա սիրում է գրքեր կարդալ և նկարել։"
      },
      {
        id: "f3-8",
        spanish: "Los sábados vamos al parque y jugamos con nuestros amigos.",
        armenian: "Շաբաթ օրերին մենք գնում ենք այգի և խաղում ենք մեր ընկերների հետ։"
      }
    ],
    vocabulary: [
      { id: "v-f3-1", spanish: "alta", armenian: "բարձրահասակ", exampleEs: "Mi hermana mayor es alta.", exampleHy: "Իմ մեծ քույրը բարձրահասակ է։" },
      { id: "v-f3-2", spanish: "delgada", armenian: "նիհար", exampleEs: "Ana come sano y es delgada.", exampleHy: "Աննան առողջ է սնվում և նիհար է։" },
      { id: "v-f3-3", spanish: "pelo castaño", armenian: "շագանակագույն մազեր", exampleEs: "Tengo el pelo castaño.", exampleHy: "Ես շագանակագույն մազեր ունեմ։" },
      { id: "v-f3-4", spanish: "ojos verdes", armenian: "կանաչ աչքեր", exampleEs: "Mi gato tiene ojos verdes.", exampleHy: "Իմ կատուն կանաչ աչքեր ունի։" },
      { id: "v-f3-5", spanish: "estudiosa", armenian: "աշխատասեր / ուսումնասեր", exampleEs: "Ella es una alumna muy estudiosa.", exampleHy: "Նա շատ աշխատասեր աշակերտ է։" },
      { id: "v-f3-6", spanish: "dibujar", armenian: "նկարել", exampleEs: "Me encanta dibujar paisajes.", exampleHy: "Ես սիրում եմ բնապատկերներ նկարել։" }
    ],
    quizzes: [
      {
        id: "q-f3-1",
        question: "¿Cómo son los ojos de Ana?",
        options: ["Azules", "Marrones", "Negros", "Verdes"],
        correctIndex: 3,
        explanation: "Տեքստում նշված է՝ 'Sus ojos son verdes' (Նրա աչքերը կանաչ են)։"
      },
      {
        id: "q-f3-2",
        question: "¿Qué aficiones (hobbies) tiene Ana?",
        options: [
          "Leer libros y dibujar",
          "Escuchar música y cantar",
          "Cocinar y bailar",
          "Hacer deporte y correr"
        ],
        correctIndex: 0,
        explanation: "Տեքստում ասվում է՝ 'Le gusta leer libros y dibujar' (Նա սիրում է գրքեր կարդալ և նկարել)։"
      },
      {
        id: "q-f3-3",
        question: "¿Qué hacen los sábados?",
        options: [
          "Se quedan estudiando en casa",
          "Van al parque y juegan con sus amigos",
          "Van al cine a ver películas",
          "Hacen la limpieza de la casa"
        ],
        correctIndex: 1,
        explanation: "Տեքստում գրված է՝ 'Los sábados vamos al parque y jugamos con nuestros amigos' (Շաբաթ օրերին գնում ենք այգի և խաղում մեր ընկերների հետ)։"
      }
    ]
  },
  {
    id: "4-en-la-escuela",
    titleEs: "4. En la escuela",
    titleHy: "4. Դպրոցում",
    descriptionEs: "Estructura de la escuela, artículos de la mochila y la clase de español.",
    descriptionHy: "Դպրոցի կառուցվածքը, պայուսակի պարունակությունը և իսպաներենի դասը։",
    category: "general",
    level: "A1",
    sentences: [
      {
        id: "f4-1",
        spanish: "Mi escuela es grande y moderna.",
        armenian: "Իմ դպրոցը մեծ է և ժամանակակից։"
      },
      {
        id: "f4-2",
        spanish: "Hay muchas aulas, una biblioteca y un patio.",
        armenian: "Կան շատ դասարաններ, գրադարան և բակ։"
      },
      {
        id: "f4-3",
        spanish: "Mi clase está en el segundo piso.",
        armenian: "Իմ դասարանը երկրորդ հարկում է։"
      },
      {
        id: "f4-4",
        spanish: "En mi mochila tengo libros, cuadernos, lápices y un diccionario.",
        armenian: "Իմ պայուսակում կան գրքեր, տետրեր, մատիտներ և բառարան։"
      },
      {
        id: "f4-5",
        spanish: "Mi profesora de español es muy buena.",
        armenian: "Իմ իսպաներենի ուսուցչուհին շատ լավն է։"
      },
      {
        id: "f4-6",
        spanish: "En clase hablamos, leemos y escribimos frases nuevas.",
        armenian: "Դասի ժամանակ մենք խոսում ենք, կարդում ենք և գրում ենք նոր նախադասություններ։"
      }
    ],
    vocabulary: [
      { id: "v-f4-1", spanish: "aulas", armenian: "դասարաններ / լսարաններ", exampleEs: "Las aulas son muy limpias.", exampleHy: "Դասարանները շատ մաքուր են։" },
      { id: "v-f4-2", spanish: "biblioteca", armenian: "գրադարան", exampleEs: "Leo en la biblioteca silenciosa.", exampleHy: "Ես կարդում եմ լուռ գրադարանում։" },
      { id: "v-f4-3", spanish: "mochila", armenian: "ուսապարկ / պայուսակ", exampleEs: "Mi mochila es azul.", exampleHy: "Իմ ուսապարկը կապույտ է։" },
      { id: "v-f4-4", spanish: "cuadernos", armenian: "տետրեր", exampleEs: "Compro cuadernos de rayas.", exampleHy: "Ես գծավոր տետրեր եմ գնում։" },
      { id: "v-f4-5", spanish: "diccionario", armenian: "բառարան", exampleEs: "Busco la palabra en el diccionario.", exampleHy: "Բառարանում փնտրում եմ բառը։" },
      { id: "v-f4-6", spanish: "frases nuevas", armenian: "նոր նախադասություններ", exampleEs: "Cada día escribo frases nuevas.", exampleHy: "Ամեն օր ես նոր նախադասություններ եմ գրում։" }
    ],
    quizzes: [
      {
        id: "q-f4-1",
        question: "¿Dónde se encuentra la clase del narrador?",
        options: ["En el primer piso", "En el segundo piso", "Al lado de la biblioteca", "En el patio"],
        correctIndex: 1,
        explanation: "Տեքստում ասվում է՝ 'Mi clase está en el segundo piso' (Իմ դասարանը երկրորդ հարկում է)։"
      },
      {
        id: "q-f4-1x",
        question: "¿Qué artículo escolar NO se menciona en la mochila?",
        options: ["Libros", "Lápices", "Regla", "Cuadernos"],
        correctIndex: 2,
        explanation: "Մոխիլայի մեջ կան 'libros, cuadernos, lápices y un diccionario'։ Քանոնը ('regla') չի հիշատակվում։"
      },
      {
        id: "q-f4-2",
        question: "¿Qué actividades hacen en la clase de español?",
        options: [
          "Dibujan cuadros y cantan canciones",
          "Duermen y escuchan historias",
          "Hablan, leen y escriben frases nuevas",
          "Juegan y corren por el aula"
        ],
        correctIndex: 2,
        explanation: "Տեքստում գրված է՝ 'En clase hablamos, leemos y escribimos frases nuevas' (Դասի ժամանակ մենք խոսում ենք, կարդում ենք և գրում նոր նախադասություններ)։"
      }
    ]
  },
  {
    id: "5-mi-casa",
    titleEs: "5. Mi casa",
    titleHy: "5. Իմ տունը",
    descriptionEs: "Las habitaciones de la casa, los muebles en la habitación y fotos familiares.",
    descriptionHy: "Տան սենյակները, ննջասենյակի կահույքը և ընտանեկան նկարները պատին։",
    category: "general",
    level: "A1",
    sentences: [
      {
        id: "f5-1",
        spanish: "Mi casa no es muy grande, pero es cómoda.",
        armenian: "Իմ տունը շատ մեծ չէ, բայց հարմարավետ է։"
      },
      {
        id: "f5-2",
        spanish: "Tiene tres habitaciones, una cocina, un baño y un salón.",
        armenian: "Այն ունի երեք սենյակ, խոհանոց, լոգարան և հյուրասենյակ։"
      },
      {
        id: "f5-3",
        spanish: "Mi habitación es pequeña, pero muy bonita.",
        armenian: "Իմ սենյակը փոքր է, բայց շատ գեղեցիկ։"
      },
      {
        id: "f5-4",
        spanish: "Hay una cama, una mesa y una silla.",
        armenian: "Կա մահճակալ, սեղան և աթոռ։"
      },
      {
        id: "f5-5",
        spanish: "En la pared tengo fotos de mi familia.",
        armenian: "Պատին ունեմ իմ ընտանիքի նկարները։"
      },
      {
        id: "f5-6",
        spanish: "Me gusta estar en mi habitación y estudiar allí.",
        armenian: "Ինձ դուր է գալիս լինել իմ սենյակում և այնտեղ սովորել։"
      }
    ],
    vocabulary: [
      { id: "v-f5-1", spanish: "cómoda", armenian: "հարմարավետ / հարմար", exampleEs: "Esta silla es cómoda.", exampleHy: "Այս աթոռը հարմար է։" },
      { id: "v-f5-2", spanish: "salón", armenian: "հյուրասենյակ / դահլիճ", exampleEs: "Vemos la tele en el salón.", exampleHy: "Մենք հեռուստացույց ենք դիտում հյուրասենյակում։" },
      { id: "v-f5-3", spanish: "habitación", armenian: "սենյակ", exampleEs: "Limpio mi habitación hoy.", exampleHy: "Ես այսօր մաքրում եմ իմ սենյակը։" },
      { id: "v-f5-4", spanish: "cama", armenian: "մահճակալ", exampleEs: "La cama es muy grande.", exampleHy: "Մահճակալը շատ մեծ է։" },
      { id: "v-f5-5", spanish: "pared", armenian: "պատ", exampleEs: "La pared es blanca.", exampleHy: "Պատը սպիտակ է։" },
      { id: "v-f5-6", spanish: "fotos de mi familia", armenian: "ընտանիքի նկարները", exampleEs: "Miramos las fotos de la familia.", exampleHy: "Մենք նայում ենք ընտանիքի նկարները։" }
    ],
    quizzes: [
      {
        id: "q-f5-1",
        question: "¿Qué estancias (cuartos) tiene la casa?",
        options: [
          "Dos dormitorios y una cocina grande",
          "Tres habitaciones, una cocina, un baño y un salón",
          "Cinco habitaciones y dos baños",
          "Un salón y un garaje enorme"
        ],
        correctIndex: 1,
        explanation: "Տեքստում գրված է՝ 'Tiene tres habitaciones, una cocina, un baño y un salón'."
      },
      {
        id: "q-f5-2",
        question: "¿Qué muebles hay en la habitación del narrador?",
        options: [
          "Un sofá, un armario y un espejo",
          "Una mesa grande y un televisor",
          "Una cama, una mesa y una silla",
          "Solo una cama plegable"
        ],
        correctIndex: 2,
        explanation: "Տեքստում ասվում է՝ 'Hay una cama, una mesa y una silla' (Կա մահճակալ, սեղան և աթոռ)։"
      },
      {
        id: "q-f5-3",
        question: "¿Por qué le gusta su habitación al narrador?",
        options: [
          "Porque tiene juguetes y computadora",
          "Porque le gusta estar en su habitación y estudiar allí",
          "Porque es la habitación más grande de la casa",
          "Porque no tiene fotos familiares"
        ],
        correctIndex: 1,
        explanation: "Տեքստում ասվում է՝ 'Me gusta estar en mi habitación y estudiar allí'։"
      }
    ]
  },
  {
    id: "6-el-fin-de-semana",
    titleEs: "6. El fin de semana",
    titleHy: "6. Շաբաթ-կիրակի",
    descriptionEs: "Las actividades del fin de semana, limpieza el sábado y visita a los abuelos el domingo.",
    descriptionHy: "Շաբաթ-կիրակվա ծրագրերը՝ շաբաթ օրը մաքրություն, կիրակի օրը՝ այցելություն տատիկին ու պապիկին։",
    category: "general",
    level: "A1",
    sentences: [
      {
        id: "f6-1",
        spanish: "El fin de semana no voy a la escuela.",
        armenian: "Շաբաթ-կիրակի ես դպրոց չեմ գնում։"
      },
      {
        id: "f6-2",
        spanish: "El sábado limpio mi habitación y ayudo a mi madre.",
        armenian: "Շաբաթ օրը մաքրում եմ իմ սենյակը և օգնում եմ մայրիկիս։"
      },
      {
        id: "f6-3",
        spanish: "Después veo una película o juego con mi hermano.",
        armenian: "Հետո ֆիլմ եմ դիտում կամ խաղում եմ եղբորս հետ։"
      },
      {
        id: "f6-4",
        spanish: "El domingo visitamos a mis abuelos.",
        armenian: "Կիրակի օրը մենք այցելում ենք տատիկիս և պապիկիս։"
      },
      {
        id: "f6-5",
        spanish: "Mi abuela prepara comida muy rica.",
        armenian: "Տատիկս շատ համեղ ուտելիք է պատրաստում։"
      },
      {
        id: "f6-6",
        spanish: "Por la tarde volvemos a casa y descansamos.",
        armenian: "Երեկոյան վերադառնում ենք տուն և հանգստանում ենք։"
      }
    ],
    vocabulary: [
      { id: "v-f6-1", spanish: "fin de semana", armenian: "շաբաթ-կիրակի", exampleEs: "Disfruto el fin de semana.", exampleHy: "Ես վայելում եմ շաբաթ-կիրակին։" },
      { id: "v-f6-2", spanish: "limpio", armenian: "մաքրում եմ (limpiar բայից)", exampleEs: "Limpio el coche los sábados.", exampleHy: "Շաբաթ օրերին ես մաքրում եմ մեքենան։" },
      { id: "v-f6-3", spanish: "ayudo", armenian: "օգնում եմ (ayudar բայից)", exampleEs: "Ayudo a mis amigos siempre.", exampleHy: "Ես միշտ օգնում եմ ընկերներիս։" },
      { id: "v-f6-4", spanish: "veo una película", armenian: "ֆիլմ եմ դիտում", exampleEs: "Por la tarde veo una película cómica.", exampleHy: "Երեկոյան ես կատակերգական ֆիլմ եմ դիտում։" },
      { id: "v-f6-5", spanish: "abuelos", armenian: "տատիկ ու պապիկ", exampleEs: "Mis abuelos viven en Granada.", exampleHy: "Տատիկս ու պապիկս ապրում են Գրանադայում։" },
      { id: "v-f6-6", spanish: "comida muy rica", armenian: "շատ համեղ ուտելիք", exampleEs: "La paella es una comida muy rica.", exampleHy: "Պաելյան շատ համեղ ուտելիք է։" }
    ],
    quizzes: [
      {
        id: "q-f6-1",
        question: "¿Qué hace el protagonista el sábado por la mañana?",
        options: [
          "Limpia su habitación y ayuda a su madre",
          "Va al cine a ver películas",
          "Estudia temas difíciles de la escuela",
          "Duerme todo el día en su cama"
        ],
        correctIndex: 0,
        explanation: "Տեքստում ասվում է՝ 'El sábado limpio mi habitación y ayudo a mi madre'։"
      },
      {
        id: "q-f6-2",
        question: "¿A quiénes visitan el domingo?",
        options: ["A sus amigos", "A sus abuelos", "A sus tíos lejanos", "A los nuevos vecinos"],
        correctIndex: 1,
        explanation: "Տեքստում ասվում է՝ 'El domingo visitamos a mis abuelos' (Կիրակի օրը մենք այցելում ենք տատիկիս և պապիկիս)։"
      },
      {
        id: "q-f6-3",
        question: "¿Quién prepara comida muy rica y qué hacen el domingo por la tarde?",
        options: [
          "La madre prepara la comida y juegan en el parque",
          "La abuela prepara la comida, luego vuelven a casa y descansan",
          "El hermano compra comida rápida y ven fútbol",
          "El abuelo cocina carne asada y cantan juntos"
        ],
        correctIndex: 1,
        explanation: "Տեքստում գրված է՝ 'Mi abuela prepara comida muy rica. Por la tarde volvemos a casa y descansamos'։"
      }
    ]
  },
  {
    id: "g1-preterito-perfecto",
    titleEs: "Pretérito Perfecto",
    titleHy: "Անցյալ կատարյալ (ներկա ժամանակի հետ կապված)",
    descriptionEs: "Ejemplos y uso del Pretérito Perfecto para acciones realizadas hoy o recientemente.",
    descriptionHy: "Pretérito Perfecto-ի օգտագործման օրինակներ այսօր կամ վերջերս կատարված գործողությունների համար։",
    category: "grammar",
    tenseLabel: "Pretérito Perfecto",
    level: "A2",
    sentences: [
      {
        id: "g1-1",
        spanish: "Hoy he tenido un día muy tranquilo.",
        armenian: "Այսօր ես շատ հանգիստ օր եմ ունեցել։"
      },
      {
        id: "g1-2",
        spanish: "Por la mañana he estudiado español y he leído un texto corto.",
        armenian: "Առավոտյան ես իսպաներեն եմ սովորել և կարճ տեքստ եմ կարդացել։"
      },
      {
        id: "g1-3",
        spanish: "Después, he hablado con mi amiga por teléfono.",
        armenian: "Հետո ես հեռախոսով խոսել եմ ընկերուհուս հետ։"
      },
      {
        id: "g1-4",
        spanish: "Por la tarde, mi madre ha preparado una cena muy rica.",
        armenian: "Երեկոյան մայրս շատ համեղ ընթրիք է պատրաստել։"
      },
      {
        id: "g1-5",
        spanish: "Esta noche ya he terminado mis deberes y he descansado un poco.",
        armenian: "Այս գիշեր ես արդեն ավարտել եմ տնայիններս և մի քիչ հանգստացել եմ։"
      }
    ],
    vocabulary: [
      { id: "v-g1-1", spanish: "he tenido", armenian: "ունեցել եմ (haber + tener)", exampleEs: "He tenido mucha suerte.", exampleHy: "Ես մեծ հաջողություն եմ ունեցել։" },
      { id: "v-g1-2", spanish: "he estudiado", armenian: "սովորել եմ (haber + estudiar)", exampleEs: "He estudiado toda la tarde.", exampleHy: "Ես սովորել եմ ամբողջ կեսօրից հետո։" },
      { id: "v-g1-3", spanish: "he leído", armenian: "կարդացել եմ (haber + leer)", exampleEs: "Ya he leído el periódico.", exampleHy: "Ես արդեն կարդացել եմ թերթը։" },
      { id: "v-g1-4", spanish: "he hablado", armenian: "խոսել եմ (haber + hablar)", exampleEs: "He hablado con Juan.", exampleHy: "Ես խոսել եմ Խուանի հետ։" },
      { id: "v-g1-5", spanish: "ha preparado", armenian: "պատրաստել է (haber + preparar)", exampleEs: "Mamá ha preparado una tarta.", exampleHy: "Մայրիկը տորթ է պատրաստել։" },
      { id: "v-g1-6", spanish: "he terminado", armenian: "ավարտել եմ (haber + terminar)", exampleEs: "He terminado el dibujo.", exampleHy: "Ես ավարտել եմ նկարը։" }
    ],
    quizzes: [
      {
        id: "q-g1-1",
        question: "¿Cómo se construye el Pretérito Perfecto en español?",
        options: [
          "Verbo 'haber' en presente + Participio del verbo principal",
          "Verbo principal en infinitivo directamente",
          "Verbo 'estar' + Gerundio",
          "Verbo 'tener' + Participio de los verbos"
        ],
        correctIndex: 0,
        explanation: "Pretérito Perfecto-ն կառուցվում է 'haber' օժանդակ բայի ներկա ժամանակով (he, has, ha, hemos, habéis, han) և հիմնական բայի դերբայով (participio):"
      },
      {
        id: "q-g1-2",
        question: "¿Con quién ha hablado por teléfono el narrador hoy?",
        options: ["Con su profesor", "Con su abuelo", "Con su amiga", "Con su hermano mayor"],
        correctIndex: 2,
        explanation: "Տեքստում ասվում է՝ 'he hablado con mi amiga por teléfono' (հեռախոսով խոսել եմ ընկերուհուս հետ)։"
      },
      {
        id: "q-g1-3",
        question: "¿Qué marcador temporal indica el uso de Pretérito Perfecto en este texto?",
        options: ["Ayer", "El año pasado", "Hoy", "Hace cinco años"],
        correctIndex: 2,
        explanation: "Pretérito Perfecto-ն օգտագործվում է ժամանակային այնպիսի նշիչների հետ, որոնք դեռ չեն ավարտվել, օրինակ՝ 'Hoy' (Այսօր) կամ 'Esta semana' (Այս շաբաթ)։"
      }
    ]
  },
  {
    id: "g2-preterito-indefinido",
    titleEs: "Pretérito Indefinido",
    titleHy: "Անցյալ կատարյալ (ավարտված անցյալ)",
    descriptionEs: "Ejemplos del Pretérito Indefinido para acciones totalmente concluidas en el pasado.",
    descriptionHy: "Pretérito Indefinido-ի օրինակներ անցյալում ամբողջությամբ ավարտված գործողությունների համար։",
    category: "grammar",
    tenseLabel: "Pretérito Indefinido",
    level: "A2",
    sentences: [
      {
        id: "g2-1",
        spanish: "Ayer fui al centro con mi hermano.",
        armenian: "Երեկ ես գնացի կենտրոն եղբորս հետ։"
      },
      {
        id: "g2-2",
        spanish: "Primero compramos unos libros y una mochila nueva.",
        armenian: "Սկզբում մենք մի քանի գիրք և նոր պայուսակ գնեցինք։"
      },
      {
        id: "g2-3",
        spanish: "Después comimos en un restaurante pequeño.",
        armenian: "Հետո մենք ճաշեցինք փոքր ռեստորանում։"
      },
      {
        id: "g2-4",
        spanish: "A las cinco volvimos a casa en autobús.",
        armenian: "Ժամը հինգին ավտոբուսով վերադարձանք տուն։"
      },
      {
        id: "g2-5",
        spanish: "Por la noche vimos una película y nos acostamos tarde.",
        armenian: "Երեկոյան մենք ֆիլմ դիտեցինք և ուշ քնեցինք։"
      }
    ],
    vocabulary: [
      { id: "v-g2-1", spanish: "fui", armenian: "գնացի (ir բայից)", exampleEs: "Ayer fui a Madrid.", exampleHy: "Երեկ ես Մադրիդ գնացի։" },
      { id: "v-g2-2", spanish: "compramos", armenian: "գնեցինք (comprar բայից)", exampleEs: "Compramos regalos.", exampleHy: "Մենք նվերներ գնեցինք։" },
      { id: "v-g2-3", spanish: "comimos", armenian: "կերանք / ճաշեցինք (comer բայից)", exampleEs: "Comimos paella deliciosa.", exampleHy: "Մենք համեղ պաելյա կերանք։" },
      { id: "v-g2-4", spanish: "volvimos", armenian: "վերադարձանք (volver բայից)", exampleEs: "Volvimos muy cansados.", exampleHy: "Մենք վերադարձանք շատ հոգնած։" },
      { id: "v-g2-5", spanish: "vimos", armenian: "տեսանք / դիտեցինք (ver բայից)", exampleEs: "Vimos un documental interesante.", exampleHy: "Մենք հետաքրքիր վավերագրական ֆիլմ դիտեցինք։" },
      { id: "v-g2-6", spanish: "nos acostamos", armenian: "պառկեցինք քնելու (acostarse բայից)", exampleEs: "Nos acostamos temprano ayer.", exampleHy: "Երեկ մենք շուտ պառկեցինք քնելու։" }
    ],
    quizzes: [
      {
        id: "q-g2-1",
        question: "¿Cuándo se prefiere el Pretérito Indefinido?",
        options: [
          "Para expresar acciones habituales en el pasado",
          "Para acciones completadas en un tiempo específico ya terminado",
          "Para deseos futuros y sueños inmediatos",
          "Para acciones que ocurren en este preciso momento"
        ],
        correctIndex: 1,
        explanation: "Pretérito Indefinido-ն օգտագործվում է անցյալի կոնկրետ, ավարտված գործողությունների համար (օրինակ՝ Ayer - երեկ)։"
      },
      {
        id: "q-g2-2",
        question: "¿Cómo viajaron de regreso a casa?",
        options: ["En metro subterráneo", "En taxi rápido", "A pie caminando", "En autobús"],
        correctIndex: 3,
        explanation: "Տեքստում ասվում է՝ 'volvimos a casa en autobús' (ավտոբուսով վերադարձանք տուն)։"
      },
      {
        id: "q-g2-3",
        question: "¿Qué conjugación regular de nosotros en -ar coincide en Presente e Indefinido?",
        options: ["Comparamos", "Compramos", "Vivimos", "Comimos"],
        correctIndex: 1,
        explanation: "Առաջին լծորդության (-ar) բայերի համար 'nosotros' ձևը ներկա և անցյալ (indefinido) ժամանակներում նույնն է՝ 'compramos' (գնում ենք / գնեցինք)։"
      }
    ]
  },
  {
    id: "g3-preterito-imperfecto",
    titleEs: "Pretérito Imperfecto",
    titleHy: "Անցյալ անկատար (նկարագրություն / սովորություն)",
    descriptionEs: "Uso del Pretérito Imperfecto para descripciones de la infancia y hábitos regulares.",
    descriptionHy: "Pretérito Imperfecto-ի օգտագործումը մանկության նկարագրության և անցյալի սովորությունների համար։",
    category: "grammar",
    tenseLabel: "Pretérito Imperfecto",
    level: "A2",
    sentences: [
      {
        id: "g3-1",
        spanish: "Cuando era pequeña, vivía en una casa grande con mi familia.",
        armenian: "Երբ ես փոքր էի, ապրում էի մեծ տանը ընտանիքիս հետ։"
      },
      {
        id: "g3-2",
        spanish: "Mi habitación era luminosa y tenía muchos juguetes.",
        armenian: "Իմ սենյակը լուսավոր էր և ես շատ խաղալիքներ ունեի։"
      },
      {
        id: "g3-3",
        spanish: "Todos los días jugaba con mis amigos en el patio.",
        armenian: "Ամեն օր ես խաղում էի ընկերներիս հետ բակում։"
      },
      {
        id: "g3-4",
        spanish: "Mi abuela siempre preparaba comida muy rica.",
        armenian: "Տատիկս միշտ շատ համեղ ուտելիք էր պատրաստում։"
      },
      {
        id: "g3-5",
        spanish: "Por la noche, mi madre me contaba cuentos antes de dormir.",
        armenian: "Գիշերը մայրս ինձ հեքիաթներ էր պատմում քնելուց առաջ։"
      }
    ],
    vocabulary: [
      { id: "v-g3-1", spanish: "era", armenian: "էի (ser բայի imperfecto ձևը)", exampleEs: "Cuando era niño, tenía un perro.", exampleHy: "Երբ երեխա էի, շուն ունեի։" },
      { id: "v-g3-2", spanish: "vivía", armenian: "ապրում էի (vivir բայից)", exampleEs: "Vivía en Moscú hace años.", exampleHy: "Տարիներ առաջ ապրում էի Մոսկվայում։" },
      { id: "v-g3-3", spanish: "luminosa", armenian: "լուսավոր", exampleEs: "Esta sala es muy luminosa.", exampleHy: "Այս սենյակը շատ լուսավոր է։" },
      { id: "v-g3-4", spanish: "tenía", armenian: "ունեի (tener բայից)", exampleEs: "Tenía una bicicleta roja.", exampleHy: "Ես կարմիր հեծանիվ ունեի։" },
      { id: "v-g3-5", spanish: "jugaba", armenian: "խաղում էի (jugar բայից)", exampleEs: "Jugaba al ajedrez los domingos.", exampleHy: "Կիրակի օրերին շախմատ էի խաղում։" },
      { id: "v-g3-6", spanish: "contaba cuentos", armenian: "հեքիաթներ էր պատմում", exampleEs: "Mi abuelo contaba cuentos graciosos.", exampleHy: "Պապիկս զվարճալի հեքիաթներ էր պատմում։" }
    ],
    quizzes: [
      {
        id: "q-g3-1",
        question: "¿Qué expresa el Pretérito Imperfecto en el pasado?",
        options: [
          "Acciones que acaban de pasar hace un minuto",
          "Hábitos reiterativos o descripciones de estados y escenarios",
          "Acciones futuras planeadas con seguridad",
          "Órdenes directas e imperativos a las personas"
        ],
        correctIndex: 1,
        explanation: "Pretérito Imperfecto-ն ցույց է տալիս կրկնվող գործողություններ, սովորություններ կամ նկարագրություններ անցյալում (descriptiones u hábitos en el pasado)։"
      },
      {
        id: "q-g3-2",
        question: "¿Dónde jugaba con sus amigos todos los días?",
        options: ["En el parque municipal", "En el patio", "En la escuela de español", "En la biblioteca pública"],
        correctIndex: 1,
        explanation: "Տեքստում ասվում է՝ 'Todos los días jugaba con mis amigos en el patio' (Ամեն օր ես խաղում էի ընկերներիս հետ բակում)։"
      },
      {
        id: "q-g3-3",
        question: "¿Cuál de estos verbos es irregular en Imperfecto y aparece en el texto?",
        options: ["Vivía", "Jugaba", "Era", "Contaba"],
        correctIndex: 2,
        explanation: "Իսպաներենում Pretérito Imperfecto-ն ունի ընդամենը 3 անկանոն բայ՝ ser (era), ir (iba), ver (veía). 'Era'-ն դրանցից մեկն է։"
      }
    ]
  },
  {
    id: "g4-pluscuamperfecto",
    titleEs: "Pretérito Pluscuamperfecto",
    titleHy: "Վաղակատար անցյալ (անցյալից առաջ կատարված)",
    descriptionEs: "Ejemplos y uso del Pluscuamperfecto para una causa o acción previa en el pasado.",
    descriptionHy: "Pretérito Pluscuamperfecto-ի օրինակներ անցյալի մեկ այլ գործողությունից առաջ կատարված գործողության համար։",
    category: "grammar",
    tenseLabel: "Pluscuamperfecto",
    level: "B1",
    sentences: [
      {
        id: "g4-1",
        spanish: "Cuando llegué a casa, mi madre ya había preparado la cena.",
        armenian: "Երբ ես տուն հասա, մայրս արդեն ընթրիք էր պատրաստել։"
      },
      {
        id: "g4-2",
        spanish: "Mi hermano ya había terminado sus deberes.",
        armenian: "Եղբայրս արդեն ավարտել էր իր տնայինները։"
      },
      {
        id: "g4-3",
        spanish: "Yo estaba cansada porque había estudiado mucho durante el día.",
        armenian: "Ես հոգնած էի, որովհետև օրվա ընթացքում շատ էի սովորել։"
      },
      {
        id: "g4-4",
        spanish: "Antes de dormir, recordé que no había llamado a mi amiga.",
        armenian: "Քնելուց առաջ հիշեցի, որ ընկերուհուս չէի զանգել։"
      },
      {
        id: "g4-5",
        spanish: "Después le escribí un mensaje y me acosté tranquila.",
        armenian: "Հետո ես նրան հաղորդագրություն գրեցի և հանգիստ քնեցի։"
      }
    ],
    vocabulary: [
      { id: "v-g4-1", spanish: "llegué", armenian: "հասա / ժամանեցի (llegar-ի indefinido ձևը)", exampleEs: "Llegué a las diez anoche.", exampleHy: "Երեկ գիշեր ժամը տասին հասա։" },
      { id: "v-g4-2", spanish: "había preparado", armenian: "պատրաստել էր (haber imperfecto + participio)", exampleEs: "Ya lo había preparado todo.", exampleHy: "Ես արդեն ամեն ինչ պատրաստել էի։" },
      { id: "v-g4-3", spanish: "había terminado", armenian: "ավարտել էր", exampleEs: "Él ya había terminado de comer.", exampleHy: "Նա արդեն ավարտել էր ուտելը։" },
      { id: "v-g4-4", spanish: "había estudiado", armenian: "սովորել էի", exampleEs: "Había estudiado antes del examen.", exampleHy: "Ես սովորել էի քննությունից առաջ։" },
      { id: "v-g4-5", spanish: "no había llamado", armenian: "չէի զանգել", exampleEs: "No le había llamado porque no tenía su número.", exampleHy: "Նրան չէի զանգել, որովհետև չունեի նրա հեռախոսահամարը։" },
      { id: "v-g4-6", spanish: "me acosté", armenian: "պառկեցի քնելու (acostarse-ի indefinido ձևը)", exampleEs: "Me acosté alegre.", exampleHy: "Ուրախ պառկեցի քնելու։" }
    ],
    quizzes: [
      {
        id: "q-g4-1",
        question: "¿Qué expresa la frase 'ya había preparado la cena'?",
        options: [
          "Que cenará pronto en el futuro",
          "Que preparar la cena ocurrió antes de que yo llegara a casa",
          "Que está preparando la cena justo ahora",
          "Que no tiene comida en casa"
        ],
        correctIndex: 1,
        explanation: "Pluscuamperfecto-ն ('había preparado') ցույց է տալիս, որ գործողությունը պատրաստ էր ավելի վաղ, քան անցյալի մյուս գործողությունը ('llegué')։"
      },
      {
        id: "q-g4-2",
        question: "¿Por qué estaba cansada la protagonista?",
        options: [
          "Porque había estudiado mucho durante el día",
          "Porque había caminado bajo el sol caliente",
          "Porque no había comido nada",
          "Porque había limpiado su cuarto"
        ],
        correctIndex: 0,
        explanation: "Տեքստում գրված է՝ 'un poco cansada porque había estudiado mucho' (հոգնած էի, որովհետև շատ էի սովորել)։"
      },
      {
        id: "q-g4-3",
        question: "¿Qué hizo tras recordar que no había llamado a su amiga?",
        options: [
          "Le llamó por teléfono de inmediato",
          "Le escribió un mensaje y se acostó tranquila",
          "Se durmió sin hacer nada",
          "Fue a visitarla a su casa"
        ],
        correctIndex: 1,
        explanation: "Տեքստն ասում է՝ 'Después le escribí un mensaje y me acosté tranquila'։"
      }
    ]
  }
];
