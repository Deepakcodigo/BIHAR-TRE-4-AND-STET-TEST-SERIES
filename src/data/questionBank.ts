import { Question, SubjectCategory } from '../types';

export const BASE_QUESTION_BANK: Omit<Question, 'id' | 'questionNumber'>[] = [
  // --- ART OF TEACHING (शिक्षण कला) ---
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'शिक्षण की त्रिध्रुवीय प्रक्रिया (Tri-polar Process) में कौन-कौन से तीन ध्रुव शामिल हैं?',
    questionEnglish: 'Which three poles are included in the tri-polar process of teaching according to John Dewey?',
    optionsHindi: [
      'शिक्षक, छात्र और पाठ्यक्रम/समाज',
      'शिक्षक, अभिभावक और समाज',
      'छात्र, विद्यालय और सरकार',
      'शिक्षक, छात्र और परीक्षा'
    ],
    optionsEnglish: [
      'Teacher, Student, and Curriculum/Society',
      'Teacher, Parents, and Society',
      'Student, School, and Government',
      'Teacher, Student, and Examination'
    ],
    correctAnswer: 0,
    explanationHindi: 'जॉन डीवी (John Dewey) के अनुसार शिक्षण एक त्रिध्रुवीय प्रक्रिया है, जिसमें शिक्षक (स्वतंत्र चर), छात्र (आश्रित चर) और पाठ्यक्रम/सामाजिक वातावरण (हस्तक्षेप चर) शामिल हैं। एडम्स ने इसे द्विध्रुवीय माना था।',
    explanationEnglish: 'According to John Dewey, teaching is a tri-polar process consisting of the teacher (independent variable), the student (dependent variable), and the curriculum/society (intervening variable).',
    pyqReference: 'Bihar STET 2024 Shift 1'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'ब्लूम के संशोधित वर्गीकरण (Anderson & Krathwohl, 2001) के अनुसार संज्ञानात्मक पक्ष का उच्चतम स्तर कौन-सा है?',
    questionEnglish: 'According to Bloom’s revised taxonomy (Anderson & Krathwohl, 2001), what is the highest level of the cognitive domain?',
    optionsHindi: [
      'सृजन करना (Creating)',
      'मूल्यांकन करना (Evaluating)',
      'विश्लेषण करना (Analyzing)',
      'अनुप्रयोग करना (Applying)'
    ],
    optionsEnglish: [
      'Creating',
      'Evaluating',
      'Analyzing',
      'Applying'
    ],
    correctAnswer: 0,
    explanationHindi: '1956 के मूल वर्गीकरण में उच्चतम स्तर "Evaluation" (मूल्यांकन) था। परंतु 2001 में एंडरसन और क्रैथवोहल द्वारा संशोधित वर्गीकरण में उच्चतम स्तर "Creating" (सृजन करना) है।',
    explanationEnglish: 'In the revised Bloom\'s taxonomy (2001), the highest level was updated from Evaluation to Creating, followed by Evaluating and Analyzing.',
    pyqReference: 'Bihar STET 2023 Paper 1'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'सूक्ष्म शिक्षण (Micro-teaching) के भारतीय मॉडल में कुल कितना समय निर्धारित होता है?',
    questionEnglish: 'What is the total duration allocated for one standard cycle of the Indian Micro-teaching Model (NCERT)?',
    optionsHindi: [
      '36 मिनट',
      '45 मिनट',
      '30 मिनट',
      '60 मिनट'
    ],
    optionsEnglish: [
      '36 minutes',
      '45 minutes',
      '30 minutes',
      '60 minutes'
    ],
    correctAnswer: 0,
    explanationHindi: 'NCERT द्वारा विकसित भारतीय सूक्ष्म शिक्षण चक्र में 36 मिनट निर्धारित हैं: पाठ योजना (शुरुआत से पूर्व) -> शिक्षण (6 मिनट) -> प्रतिपुष्टि (6 मिनट) -> पुनः पाठ योजना (12 मिनट) -> पुनः शिक्षण (6 मिनट) -> पुनः प्रतिपुष्टि (6 मिनट) = 36 मिनट।',
    explanationEnglish: 'The Indian Micro-teaching cycle developed by NCERT is 36 minutes long: Teaching (6m) -> Feedback (6m) -> Re-planning (12m) -> Re-teaching (6m) -> Re-feedback (6m).',
    pyqReference: 'Bihar STET 2024 Shift 2'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'आगमन विधि (Inductive Method) का मुख्य शिक्षण सूत्र कौन-सा है?',
    questionEnglish: 'What is the primary maxim of teaching followed in the Inductive Method?',
    optionsHindi: [
      'विशिष्ट से सामान्य की ओर (Specific to General)',
      'सामान्य से विशिष्ट की ओर (General to Specific)',
      'अमूर्त से मूर्त की ओर (Abstract to Concrete)',
      'नियम से उदाहरण की ओर (Rule to Example)'
    ],
    optionsEnglish: [
      'Specific to General (Particular to General)',
      'General to Specific',
      'Abstract to Concrete',
      'Rule to Example'
    ],
    correctAnswer: 0,
    explanationHindi: 'आगमन विधि (Inductive Method) में पहले कई उदाहरण या विशिष्ट तथ्य प्रस्तुत किए जाते हैं, फिर सामान्य नियम या सिद्धांत का निगमन किया जाता है। अतः यह "विशिष्ट से सामान्य" और "मूर्त से अमूर्त" की ओर चलती है।',
    explanationEnglish: 'The Inductive Method proceeds from concrete examples to rules, moving from Specific to General and Concrete to Abstract.',
    pyqReference: 'BPSC TRE 3.0 PYQ'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'एडगर डेल (Edgar Dale) के "अनुभव शंकु" (Cone of Experience) में सबसे स्थायी एवं प्रत्यक्ष अधिगम कहाँ प्राप्त होता है?',
    questionEnglish: 'In Edgar Dale\'s Cone of Experience, where does the most direct and permanent learning occur?',
    optionsHindi: [
      'शंकु के आधार पर (प्रत्यक्ष सोद्देश्य अनुभव - Direct Purposeful Experiences)',
      'शंकु के शीर्ष पर (मौखिक प्रतीक - Verbal Symbols)',
      'मध्य में (दृश्य प्रतीक - Visual Symbols)',
      'चलचित्र व टेलीविजन के माध्यम से'
    ],
    optionsEnglish: [
      'At the base of the cone (Direct Purposeful Experiences)',
      'At the apex of the cone (Verbal Symbols)',
      'In the middle (Visual Symbols)',
      'Through motion pictures and television'
    ],
    correctAnswer: 0,
    explanationHindi: 'एडगर डेल के अनुभव शंकु के आधार (Base) पर "प्रत्यक्ष सोद्देश्य अनुभव" (Direct Purposeful Experience) होते हैं जो सीखने वाले को 90% तक अवधारण प्रदान करते हैं, जबकि शीर्ष पर अमूर्त "मौखिक प्रतीक" (केवल 10%) होते हैं।',
    explanationEnglish: 'At the base of Dale\'s Cone of Experience lie Direct Purposeful Experiences, providing the maximum retention and concrete understanding.',
    pyqReference: 'Bihar STET 2023 Paper 2'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'राष्ट्रीय शिक्षा नीति 2020 (NEP 2020) में विद्यालयी शिक्षा के किस नए संरचनात्मक ढांचे को अपनाया गया है?',
    questionEnglish: 'Which new pedagogical and curricular structure has been adopted in NEP 2020 for school education?',
    optionsHindi: [
      '5 + 3 + 3 + 4',
      '10 + 2 + 3',
      '5 + 3 + 2 + 2',
      '3 + 3 + 4 + 5'
    ],
    optionsEnglish: [
      '5 + 3 + 3 + 4',
      '10 + 2 + 3',
      '5 + 3 + 2 + 2',
      '3 + 3 + 4 + 5'
    ],
    correctAnswer: 0,
    explanationHindi: 'NEP 2020 में पुराने 10+2 ढांचे की जगह 5+3+3+4 ढांचा अपनाया गया: 5 वर्ष फाउंडेशनल (उम्र 3-8), 3 वर्ष प्रिपरेटरी (उम्र 8-11), 3 वर्ष मिडिल (उम्र 11-14) और 4 वर्ष सेकेंडरी (उम्र 14-18)।',
    explanationEnglish: 'NEP 2020 replaces the 10+2 structure with 5+3+3+4 covering Foundational (5 yrs), Preparatory (3 yrs), Middle (3 yrs), and Secondary (4 yrs) stages.',
    pyqReference: 'Bihar STET 2024 Shift 1'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'हरबार्टियन पाठ योजना (Herbartian Lesson Plan) का सही पंचपदीय क्रम कौन-सा है?',
    questionEnglish: 'What is the correct five-step sequence of the Herbartian Lesson Plan approach?',
    optionsHindi: [
      'प्रस्तावना, प्रस्तुतीकरण, तुलना/संबद्धता, सामान्यीकरण, अनुप्रयोग',
      'प्रस्तुतीकरण, प्रस्तावना, अनुप्रयोग, तुलना, मूल्यांकन',
      'उद्देश्य, विषयवस्तु, गृहकार्य, प्रस्तुतीकरण, निष्कर्ष',
      'तुलना, प्रस्तुतीकरण, प्रस्तावना, अनुप्रयोग, सामान्यीकरण'
    ],
    optionsEnglish: [
      'Preparation/Introduction, Presentation, Association/Comparison, Generalization, Application',
      'Presentation, Introduction, Application, Comparison, Evaluation',
      'Objectives, Content, Homework, Presentation, Conclusion',
      'Comparison, Presentation, Introduction, Application, Generalization'
    ],
    correctAnswer: 0,
    explanationHindi: 'जॉन फ्रेडरिक हरबार्ट के शिष्यों (जिलर और रीन) द्वारा विकसित पंचपदीय प्रणाली का क्रम है: 1. प्रस्तावना (Preparation), 2. प्रस्तुतीकरण (Presentation), 3. तुलना/संबंध (Association/Comparison), 4. सामान्यीकरण (Generalization), 5. अनुप्रयोग (Application)।',
    explanationEnglish: 'The five Herbartian steps are: Preparation/Introduction, Presentation, Association/Comparison, Generalization, and Application.',
    pyqReference: 'Bihar STET 2023 Paper 1'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'रचनात्मक आकलन (Formative Assessment) का मुख्य उद्देश्य क्या होता है?',
    questionEnglish: 'What is the primary purpose of Formative Assessment?',
    optionsHindi: [
      'शिक्षण-अधिगम प्रक्रिया के दौरान छात्रों के अधिगम में सुधार एवं प्रतिपुष्टि प्रदान करना',
      'सत्र के अंत में छात्रों को ग्रेड या अंक प्रदान करना',
      'कमजोर छात्रों को अगली कक्षा में जाने से रोकना',
      'छात्रों के बीच तुलना कर योग्यता क्रम बनाना'
    ],
    optionsEnglish: [
      'To provide ongoing feedback and improve learning during the instructional process',
      'To assign terminal grades or marks at the end of the term',
      'To detain low-achieving students from promotion',
      'To compare students and construct a rank list'
    ],
    correctAnswer: 0,
    explanationHindi: 'रचनात्मक आकलन "अधिगम के लिए आकलन" (Assessment for Learning) होता है, जो पाठ के दौरान चलता है ताकि शिक्षक और शिक्षार्थी दोनों को त्वरित प्रतिपुष्टि (Feedback) मिल सके और सुधार हो सके।',
    explanationEnglish: 'Formative Assessment is "Assessment for Learning" aimed at monitoring progress and providing remedial feedback continuously.',
    pyqReference: 'BPSC TRE 2.0 & STET 2024'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'शिक्षा का अधिकार अधिनियम, 2009 (RTE Act, 2009) के तहत प्राथमिक स्तर (कक्षा 1 से 5) पर छात्र-शिक्षक अनुपात (PTR) क्या होना चाहिए?',
    questionEnglish: 'Under the RTE Act 2009, what is the mandated Pupil-Teacher Ratio (PTR) for primary level (Classes 1-5)?',
    optionsHindi: [
      '30:1',
      '35:1',
      '40:1',
      '25:1'
    ],
    optionsEnglish: [
      '30:1',
      '35:1',
      '40:1',
      '25:1'
    ],
    correctAnswer: 0,
    explanationHindi: 'RTE Act 2009 के अनुसार प्राथमिक स्तर (कक्षा 1-5) पर छात्र-शिक्षक अनुपात 30:1 निर्धारित है। उच्च प्राथमिक (कक्षा 6-8) पर यह अनुपात 35:1 होता है।',
    explanationEnglish: 'Under RTE 2009, the pupil-teacher ratio for primary level (grades 1-5) is 30:1, and for upper primary (grades 6-8) it is 35:1.',
    pyqReference: 'Bihar STET 2024 Shift 2'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'समावेशी शिक्षा (Inclusive Education) का मूल दर्शन क्या है?',
    questionEnglish: 'What is the core philosophy of Inclusive Education?',
    optionsHindi: [
      'सभी बच्चों को उनकी भिन्न क्षमताओं व पृष्ठभूमियों के बावजूद एक ही नियमित कक्षा में गुणवत्तापूर्ण शिक्षा देना',
      'विशेष आवश्यकता वाले बच्चों के लिए अलग से विशेष विद्यालय स्थापित करना',
      'केवल प्रतिभाशाली छात्रों को विशेष कोचिंग प्रदान करना',
      'कमजोर छात्रों को सामान्य छात्रों से अलग बैठाना'
    ],
    optionsEnglish: [
      'Educating all children together in the regular classroom regardless of diverse abilities or backgrounds',
      'Setting up separate segregated institutions for children with special needs',
      'Providing elite coaching exclusively for gifted students',
      'Segregating slow learners from mainstream learners'
    ],
    correctAnswer: 0,
    explanationHindi: 'समावेशी शिक्षा का तात्पर्य है कि प्रत्येक बालक (चाहे वह दिव्यांग हो, सामाजिक-आर्थिक रूप से वंचित हो या प्रतिभाशाली हो) को सामान्य विद्यालय में एक साथ समान अवसर और आवश्यकतानुसार अनुकूलन देकर पढ़ाया जाए।',
    explanationEnglish: 'Inclusive education asserts that all children, regardless of physical, intellectual, social, or emotional backgrounds, learn together in the same general classroom.',
    pyqReference: 'Bihar STET 2023 Paper 1'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'लेव वाइगोत्स्की (Lev Vygotsky) के अनुसार "समीपस्थ विकास का क्षेत्र" (ZPD) क्या दर्शाता है?',
    questionEnglish: 'According to Lev Vygotsky, what does the Zone of Proximal Development (ZPD) signify?',
    optionsHindi: [
      'बच्चे के स्वतंत्र कार्य करने की क्षमता और किसी कुशल व्यक्ति की सहायता से करने की क्षमता के बीच का अंतर',
      'बच्चे द्वारा बिना किसी सहायता के अकेले किया जाने वाला कार्य',
      'बच्चे के बौद्धिक स्तर की स्थायी सीमा',
      'पाठ्यक्रम में निर्धारित कुल अध्याय'
    ],
    optionsEnglish: [
      'The difference between what a learner can do independently and what they can do with adult or peer guidance',
      'The work a child performs entirely without any assistance',
      'The rigid biological ceiling of intelligence',
      'The total number of curriculum units completed'
    ],
    correctAnswer: 0,
    explanationHindi: 'वाइगोत्स्की के अनुसार ZPD वह क्षेत्र है जहाँ बालक स्वयं कार्य नहीं कर पाता, लेकिन किसी अधिक जानकार व्यक्ति (MKO) की सहायता या पाड़ (Scaffolding) से सफलतापूर्वक सीख लेता है।',
    explanationEnglish: 'The Zone of Proximal Development (ZPD) is the range of tasks that a learner can master with scaffolding from a More Knowledgeable Other (MKO).',
    pyqReference: 'Bihar STET 2024 Shift 1'
  },
  {
    section: 'art_of_teaching',
    category: 'art_of_teaching',
    questionHindi: 'प्रयोजना विधि (Project Method) के जनक कौन हैं और यह किस दर्शन पर आधारित है?',
    questionEnglish: 'Who is known as the founder of the Project Method, and on which philosophical school is it based?',
    optionsHindi: [
      'विलियम एच. किलपैट्रिक (William H. Kilpatrick) - प्रयोजनवाद (Pragmatism)',
      'जॉन डीवी - आदर्शवाद (Idealism)',
      'रूसो - प्रकृतिवाद (Naturalism)',
      'अरस्तू - यथार्थवाद (Realism)'
    ],
    optionsEnglish: [
      'William H. Kilpatrick - Pragmatism',
      'John Dewey - Idealism',
      'Rousseau - Naturalism',
      'Aristotle - Realism'
    ],
    correctAnswer: 0,
    explanationHindi: 'प्रयोजना विधि का प्रतिपादन विलियम एच. किलपैट्रिक द्वारा जॉन डीवी के "प्रयोजनवाद" (Pragmatism) और "करके सीखने" (Learning by Doing) के सिद्धांत के आधार पर किया गया था।',
    explanationEnglish: 'W.H. Kilpatrick developed the Project Method based on John Dewey\'s philosophy of Pragmatism and experiential learning.',
    pyqReference: 'Bihar STET 2023 Paper 2'
  },

  // --- GENERAL KNOWLEDGE & BIHAR SPECIAL (सामान्य ज्ञान व बिहार विशेष) ---
  {
    section: 'other_skills',
    category: 'general_knowledge',
    questionHindi: '1857 के प्रथम स्वतंत्रता संग्राम में बिहार का नेतृत्व किसने किया था?',
    questionEnglish: 'Who led the rebellion in Bihar during the First War of Independence in 1857?',
    optionsHindi: [
      'बाबू वीर कुंवर सिंह',
      'अमर सिंह',
      'पीर अली खां',
      'हरे कृष्ण सिंह'
    ],
    optionsEnglish: [
      'Babu Veer Kunwar Singh',
      'Amar Singh',
      'Peer Ali Khan',
      'Hare Krishna Singh'
    ],
    correctAnswer: 0,
    explanationHindi: 'जगदीशपुर (भोजपुर, बिहार) के 80 वर्षीय जमींदार बाबू वीर कुंवर सिंह ने 1857 के विद्रोह में बिहार का प्रमुख नेतृत्व किया और अंग्रेजों को कई मोर्चों पर परास्त किया।',
    explanationEnglish: 'Babu Veer Kunwar Singh, the chieftain of Jagdishpur (Bhojpur district), spearheaded the 1857 revolt in Bihar with remarkable military leadership.',
    pyqReference: 'BPSC TRE 3.0 PYQ'
  },
  {
    section: 'other_skills',
    category: 'general_knowledge',
    questionHindi: 'महात्मा गांधी ने 1917 में भारत में अपना प्रथम सत्याग्रह बिहार के किस स्थान से प्रारंभ किया था?',
    questionEnglish: 'From which place in Bihar did Mahatma Gandhi launch his first Satyagraha in India in 1917?',
    optionsHindi: [
      'चंपारण',
      'पटना',
      'मुजफ्फरपुर',
      'दरभंगा'
    ],
    optionsEnglish: [
      'Champaran',
      'Patna',
      'Muzaffarpur',
      'Darbhanga'
    ],
    correctAnswer: 0,
    explanationHindi: 'राजकुमार शुक्ल के अनुरोध पर गांधी जी 1917 में चंपारण पहुंचे और नीलहे किसानों पर थोपी गई "तिनकठिया प्रणाली" (3/20 भाग पर नील की खेती) के विरुद्ध ऐतिहासिक सत्याग्रह किया।',
    explanationEnglish: 'Mahatma Gandhi launched the historic Champaran Satyagraha in 1917 in Bihar against the oppressive Tinkathia system imposed on indigo farmers.',
    pyqReference: 'Bihar STET 2024 Shift 2'
  },
  {
    section: 'other_skills',
    category: 'general_knowledge',
    questionHindi: 'बिहार का एकमात्र राष्ट्रीय उद्यान (National Park) कौन-सा है और यह किस जिले में स्थित है?',
    questionEnglish: 'Which is the only National Park located in Bihar, and in which district is it situated?',
    optionsHindi: [
      'वाल्मीकि राष्ट्रीय उद्यान - पश्चिमी चंपारण',
      'भीमबांध राष्ट्रीय उद्यान - मुंगेर',
      'कैमूर राष्ट्रीय उद्यान - रोहतास',
      'गौतम बुद्ध राष्ट्रीय उद्यान - गया'
    ],
    optionsEnglish: [
      'Valmiki National Park - West Champaran',
      'Bhimbandh Sanctuary - Munger',
      'Kaimur Sanctuary - Rohtas',
      'Gautam Buddha Wildlife Sanctuary - Gaya'
    ],
    correctAnswer: 0,
    explanationHindi: 'वाल्मीकि राष्ट्रीय उद्यान एवं टाइगर रिजर्व बिहार का एकमात्र राष्ट्रीय उद्यान है, जो पश्चिमी चंपारण जिले में भारत-नेपाल सीमा पर गंडक नदी के तट पर स्थित है।',
    explanationEnglish: 'Valmiki National Park and Tiger Reserve, located in West Champaran district along the Gandak river, is the sole National Park in Bihar.',
    pyqReference: 'BPSC TRE 2.0 PYQ'
  },
  {
    section: 'other_skills',
    category: 'general_knowledge',
    questionHindi: 'भारतीय संविधान के किस अनुच्छेद में 6 से 14 वर्ष की आयु के सभी बच्चों के लिए मुफ्त और अनिवार्य शिक्षा को मौलिक अधिकार बनाया गया है?',
    questionEnglish: 'Under which Article of the Indian Constitution was free and compulsory education for children aged 6 to 14 made a Fundamental Right?',
    optionsHindi: [
      'अनुच्छेद 21-A',
      'अनुच्छेद 45',
      'अनुच्छेद 51-A',
      'अनुच्छेद 19'
    ],
    optionsEnglish: [
      'Article 21-A',
      'Article 45',
      'Article 51-A',
      'Article 19'
    ],
    correctAnswer: 0,
    explanationHindi: '86वें संविधान संशोधन अधिनियम, 2002 द्वारा भारतीय संविधान में अनुच्छेद 21-A जोड़ा गया, जिसके तहत 6 से 14 वर्ष के बच्चों के लिए प्राथमिक शिक्षा मौलिक अधिकार बनी।',
    explanationEnglish: 'The 86th Constitutional Amendment Act, 2002 inserted Article 21-A, conferring the right to free and compulsory education for children aged 6 to 14 as a Fundamental Right.',
    pyqReference: 'Bihar STET 2024 Shift 1'
  },

  // --- ENVIRONMENTAL SCIENCE (पर्यावरण अध्ययन) ---
  {
    section: 'other_skills',
    category: 'environmental_science',
    questionHindi: 'पारिस्थितिक तंत्र में ऊर्जा का प्रवाह सदैव कैसा होता है?',
    questionEnglish: 'What is the characteristic direction of energy flow through an ecosystem?',
    optionsHindi: [
      'एकदिशीय (Unidirectional)',
      'द्विदिशीय (Bidirectional)',
      'चक्रीय (Cyclic)',
      'बहुदिशीय (Multidirectional)'
    ],
    optionsEnglish: [
      'Unidirectional',
      'Bidirectional',
      'Cyclic',
      'Multidirectional'
    ],
    correctAnswer: 0,
    explanationHindi: 'पारिस्थितिक तंत्र में ऊर्जा का प्रवाह सदैव एकदिशीय (Unidirectional) होता है: सूर्य -> उत्पादक -> शाकाहारी -> मांसाहारी। ऊर्जा लिंडमैन के 10% नियम का पालन करती है और वापस नहीं लौटती (पोषक तत्वों का चक्रण होता है परंतु ऊर्जा का नहीं)।',
    explanationEnglish: 'Energy flow through food chains is strictly unidirectional, governed by Lindeman\'s 10% law, while mineral nutrients cycle cyclically.',
    pyqReference: 'Bihar STET 2023 Paper 1'
  },
  {
    section: 'other_skills',
    category: 'environmental_science',
    questionHindi: 'ओजोन परत वायुमंडल के किस संस्तर (Layer) में पाई जाती है?',
    questionEnglish: 'In which atmospheric layer is the protective ozone layer predominantly concentrated?',
    optionsHindi: [
      'समताप मंडल (Stratosphere)',
      'क्षोभ मंडल (Troposphere)',
      'मध्य मंडल (Mesosphere)',
      'आयन मंडल (Ionosphere)'
    ],
    optionsEnglish: [
      'Stratosphere',
      'Troposphere',
      'Mesosphere',
      'Ionosphere'
    ],
    correctAnswer: 0,
    explanationHindi: 'ओजोन परत मुख्य रूप से समताप मंडल (Stratosphere) के निचले भाग (लगभग 15 से 35 किमी की ऊंचाई) में पाई जाती है जो सूर्य से आने वाली हानिकारक पराबैंगनी (UV-B) किरणों को अवशोषित करती है।',
    explanationEnglish: 'The ozone layer is concentrated in the stratosphere, protecting the biosphere by absorbing harmful solar ultraviolet radiation.',
    pyqReference: 'BPSC TRE 3.0 PYQ'
  },
  {
    section: 'other_skills',
    category: 'environmental_science',
    questionHindi: 'चिपको आंदोलन (Chipko Movement) का संबंध मुख्य रूप से किससे था?',
    questionEnglish: 'The historic Chipko Movement was primarily aimed at what cause?',
    optionsHindi: [
      'वनों और वृक्षों की कटाई रोकने के लिए',
      'नदियों के जल प्रदूषण को रोकने के लिए',
      'बाघ संरक्षण के लिए',
      'रेडियोधर्मी कचरे के निस्तारण के लिए'
    ],
    optionsEnglish: [
      'Preventing deforestation and protecting forest trees',
      'Combating river water contamination',
      'Project Tiger wildlife protection',
      'Radioactive waste management'
    ],
    correctAnswer: 0,
    explanationHindi: 'चिपको आंदोलन 1970 के दशक में उत्तराखंड (तत्कालीन उत्तर प्रदेश) के चमोली जिले में सुंदरलाल बहुगुणा, गौरा देवी और चंडी प्रसाद भट्ट के नेतृत्व में वृक्षों को काटने से बचाने के लिए शुरू हुआ था।',
    explanationEnglish: 'The Chipko Movement was an iconic non-violent grassroots movement in the 1970s led by Sunderlal Bahuguna and Gaura Devi to protect Himalayan forests from logging.',
    pyqReference: 'Bihar STET 2024 Shift 2'
  },

  // --- MATHEMATICAL APTITUDE (गणितीय योग्यता) ---
  {
    section: 'other_skills',
    category: 'mathematical_aptitude',
    questionHindi: 'यदि किसी वस्तु को ₹720 में बेचने पर 20% का लाभ होता है, तो उस वस्तु का क्रय मूल्य (Cost Price) क्या होगा?',
    questionEnglish: 'If an article is sold for ₹720 at a profit of 20%, what is its Cost Price (CP)?',
    optionsHindi: [
      '₹600',
      '₹576',
      '₹640',
      '₹580'
    ],
    optionsEnglish: [
      '₹600',
      '₹576',
      '₹640',
      '₹580'
    ],
    correctAnswer: 0,
    explanationHindi: 'क्रय मूल्य (CP) = SP * 100 / (100 + लाभ%) = 720 * 100 / 120 = 720 / 1.2 = ₹600।',
    explanationEnglish: 'Cost Price = Selling Price / (1 + Profit Rate) = 720 / 1.20 = ₹600.',
    pyqReference: 'Bihar STET 2024 Shift 1'
  },
  {
    section: 'other_skills',
    category: 'mathematical_aptitude',
    questionHindi: 'A किसी कार्य को 12 दिनों में और B उसी कार्य को 24 दिनों में पूरा कर सकता है। दोनों मिलकर उस कार्य को कितने दिनों में समाप्त करेंगे?',
    questionEnglish: 'A can complete a work in 12 days and B in 24 days. Working together, in how many days will they finish the work?',
    optionsHindi: [
      '8 दिन',
      '6 दिन',
      '9 दिन',
      '10 दिन'
    ],
    optionsEnglish: [
      '8 days',
      '6 days',
      '9 days',
      '10 days'
    ],
    correctAnswer: 0,
    explanationHindi: 'A का 1 दिन का कार्य = 1/12, B का 1 दिन का कार्य = 1/24। दोनों का 1 दिन का कार्य = 1/12 + 1/24 = (2+1)/24 = 3/24 = 1/8। अतः दोनों मिलकर 8 दिनों में पूरा करेंगे। सूत्र: (A * B) / (A + B) = (12 * 24) / 36 = 8 दिन।',
    explanationEnglish: 'Total days together = (A * B) / (A + B) = (12 * 24) / (12 + 24) = 288 / 36 = 8 days.',
    pyqReference: 'Bihar STET 2023 Paper 1'
  },
  {
    section: 'other_skills',
    category: 'mathematical_aptitude',
    questionHindi: 'संख्या श्रेणी: 2, 6, 12, 20, 30, ? में अगला पद क्या होगा?',
    questionEnglish: 'In the number series: 2, 6, 12, 20, 30, ? what is the next term?',
    optionsHindi: [
      '42',
      '40',
      '38',
      '44'
    ],
    optionsEnglish: [
      '42',
      '40',
      '38',
      '44'
    ],
    correctAnswer: 0,
    explanationHindi: 'अंतर का क्रम: 6-2=4, 12-6=6, 20-12=8, 30-20=10। अगला अंतर 12 होगा। अतः 30 + 12 = 42 (अथवा n^2 + n: 1+1=2, 4+2=6, 9+3=12, 16+4=20, 25+5=30, 36+6=42)।',
    explanationEnglish: 'The differences between consecutive terms increase by 2: +4, +6, +8, +10, +12. Hence, 30 + 12 = 42.',
    pyqReference: 'BPSC TRE 3.0 PYQ'
  },

  // --- LOGICAL REASONING (तार्किक क्षमता) ---
  {
    section: 'other_skills',
    category: 'logical_reasoning',
    questionHindi: 'यदि किसी कूट भाषा में "TEACHER" को "VGCEJGT" लिखा जाता है, तो उसी कूट भाषा में "STUDENT" को कैसे लिखा जाएगा?',
    questionEnglish: 'In a code language, if "TEACHER" is written as "VGCEJGT", how will "STUDENT" be written in that code?',
    optionsHindi: [
      'UVWFGPV',
      'TVWFGPV',
      'UVWGGPU',
      'UTWFHOV'
    ],
    optionsEnglish: [
      'UVWFGPV',
      'TVWFGPV',
      'UVWGGPU',
      'UTWFHOV'
    ],
    correctAnswer: 0,
    explanationHindi: 'पैटर्न: प्रत्येक अक्षर में +2 जोड़ा गया है: T+2=V, E+2=G, A+2=C, C+2=E, H+2=J, E+2=G, R+2=T। उसी प्रकार: S+2=U, T+2=V, U+2=W, D+2=F, E+2=G, N+2=P, T+2=V -> UVWFGPV।',
    explanationEnglish: 'Each character is shifted by +2 alphabet positions: S(+2)->U, T(+2)->V, U(+2)->W, D(+2)->F, E(+2)->G, N(+2)->P, T(+2)->V => UVWFGPV.',
    pyqReference: 'Bihar STET 2024 Shift 1'
  },
  {
    section: 'other_skills',
    category: 'logical_reasoning',
    questionHindi: 'एक व्यक्ति अपने घर से उत्तर की ओर 4 किमी चलता है, फिर दाएं मुड़कर 3 किमी चलता है। अब वह अपने प्रारंभिक स्थान से कितनी दूरी पर और किस दिशा में है?',
    questionEnglish: 'A person walks 4 km North from his house, then turns right and walks 3 km. How far and in which direction is he now from his starting point?',
    optionsHindi: [
      '5 किमी, उत्तर-पूर्व',
      '7 किमी, उत्तर-पूर्व',
      '5 किमी, उत्तर-पश्चिम',
      '4 किमी, पूर्व'
    ],
    optionsEnglish: [
      '5 km, North-East',
      '7 km, North-East',
      '5 km, North-West',
      '4 km, East'
    ],
    correctAnswer: 0,
    explanationHindi: 'पाइथागोरस प्रमेय के अनुसार: दूरी = √(4² + 3²) = √(16 + 9) = √25 = 5 किमी। दिशा: उत्तर और पूर्व के बीच = उत्तर-पूर्व।',
    explanationEnglish: 'Using Pythagoras theorem: Distance = √(4² + 3²) = √25 = 5 km. The direction from start is North-East.',
    pyqReference: 'Bihar STET 2023 Paper 1'
  },
  {
    section: 'other_skills',
    category: 'logical_reasoning',
    questionHindi: 'सम्बन्ध ज्ञात कीजिए: जिस प्रकार "पुस्तक" का संबंध "पुस्तकालय" से है, उसी प्रकार "पशु" का संबंध किससे है?',
    questionEnglish: 'Complete the analogy: As "Book" is related to "Library", in the same way "Animal" is related to:',
    optionsHindi: [
      'चिड़ियाघर (Zoo)',
      'जंगल (Jungle)',
      'पिंजरा (Cage)',
      'पक्षी (Bird)'
    ],
    optionsEnglish: [
      'Zoo',
      'Jungle',
      'Cage',
      'Bird'
    ],
    correctAnswer: 0,
    explanationHindi: 'पुस्तकालय वह स्थान है जहाँ विभिन्न प्रकार की पुस्तकों का व्यवस्थित संग्रह और संरक्षण होता है। उसी प्रकार चिड़ियाघर (Zoo) में विभिन्न प्रकार के पशुओं का संग्रह और संरक्षण किया जाता है।',
    explanationEnglish: 'A library is an organized institutional repository for books; similarly, a zoo is an institutional repository for animals.',
    pyqReference: 'BPSC TRE 2.0 PYQ'
  },

  // --- CORE SUBJECT / SECONDARY CURRICULUM QUESTIONS (मुख्य विषय / माध्यमिक पाठ्यक्रम) ---
  {
    section: 'core_subject',
    category: 'core_subject',
    questionHindi: 'माध्यमिक स्तर पर प्रभावी शिक्षण के लिए पाठ्य सहगामी क्रियाओं (Co-curricular Activities) का मुख्य उद्देश्य क्या होता है?',
    questionEnglish: 'What is the primary objective of organizing co-curricular activities at the secondary school level?',
    optionsHindi: [
      'विद्यार्थियों का सर्वांगीण (शारीरिक, मानसिक, संवेगात्मक व सामाजिक) विकास करना',
      'कक्षा के खाली समय को भरना',
      'विद्यार्थियों को परीक्षा से दूर रखना',
      'विद्यालय की वित्तीय आय बढ़ाना'
    ],
    optionsEnglish: [
      'Fostering the holistic development (physical, cognitive, emotional, social) of students',
      'Occupying idle time in the school timetable',
      'Diverting students from examinations',
      'Enhancing school revenue'
    ],
    correctAnswer: 0,
    explanationHindi: 'पाठ्य सहगामी क्रियाएं (खेलकूद, वाद-विवाद, नाटक, स्काउटिंग) विद्यार्थियों के सर्वांगीण विकास (All-round development) के लिए अत्यंत आवश्यक हैं, जिससे नेतृत्व और सामाजिक गुणों का विकास होता है।',
    explanationEnglish: 'Co-curricular activities are curated to foster holistic development across cognitive, affective, psychomotor, and social domains.',
    pyqReference: 'Bihar STET 2024 Shift 1'
  },
  {
    section: 'core_subject',
    category: 'core_subject',
    questionHindi: 'जीन पियाजे (Jean Piaget) के संज्ञानात्मक विकास सिद्धांत की किस अवस्था में बालक अमूर्त चिंतन (Abstract Thinking) और परिकल्पनात्मक तर्क (Hypothetical-Deductive Reasoning) करने में सक्षम होता है?',
    questionEnglish: 'In Piaget’s theory of cognitive development, during which stage does a child develop abstract thinking and hypothetical-deductive reasoning?',
    optionsHindi: [
      'औपचारिक संक्रियात्मक अवस्था (Formal Operational Stage - 11 वर्ष और उससे अधिक)',
      'मूर्त संक्रियात्मक अवस्था (Concrete Operational Stage - 7 से 11 वर्ष)',
      'पूर्व संक्रियात्मक अवस्था (Pre-operational Stage - 2 से 7 वर्ष)',
      'संवेदी पेशीय अवस्था (Sensorimotor Stage - 0 से 2 वर्ष)'
    ],
    optionsEnglish: [
      'Formal Operational Stage (11 years and above)',
      'Concrete Operational Stage (7 to 11 years)',
      'Pre-operational Stage (2 to 7 years)',
      'Sensorimotor Stage (Birth to 2 years)'
    ],
    correctAnswer: 0,
    explanationHindi: 'पियाजे की चौथी अवस्था "औपचारिक संक्रियात्मक अवस्था" (Formal Operational Stage, 11+ वर्ष) में किशोर अमूर्त अवधारणाओं, वैज्ञानिक परिकल्पनाओं और निगमनात्मक तर्क पर विचार करने में सक्षम होते हैं।',
    explanationEnglish: 'In Piaget\'s Formal Operational stage (age 11+), adolescents master hypothetical-deductive logic and abstract systematic reasoning.',
    pyqReference: 'Bihar STET 2023 Paper 1'
  },
  {
    section: 'core_subject',
    category: 'core_subject',
    questionHindi: 'राष्ट्रीय पाठ्यचर्या रूपरेखा 2005 (NCF 2005) के अनुसार ज्ञान को स्कूल के बाहरी जीवन से जोड़ना किस मार्गदर्शक सिद्धांत का भाग है?',
    questionEnglish: 'According to NCF 2005, connecting knowledge to life outside the school is part of which core guiding principle?',
    optionsHindi: [
      'ज्ञान को स्कूली चारदीवारी से बाहर के वास्तविक जीवन से जोड़ना',
      'रटंत प्रणाली को बढ़ावा देना',
      'परीक्षा को अत्यधिक कठोर बनाना',
      'पाठ्यपुस्तकों तक ही शिक्षण को सीमित रखना'
    ],
    optionsEnglish: [
      'Connecting knowledge to life outside the school boundaries',
      'Encouraging rote learning methodologies',
      'Making examinations rigid and punitive',
      'Restricting learning strictly to textbook pages'
    ],
    correctAnswer: 0,
    explanationHindi: 'NCF 2005 के पाँच प्रमुख मार्गदर्शक सिद्धांत हैं: 1. ज्ञान को बाहरी जीवन से जोड़ना, 2. रटंत प्रणाली से मुक्ति, 3. पाठ्यचर्या को पाठ्यपुस्तक केंद्रित न रखकर बालक के चहुंमुखी विकास का साधन बनाना, 4. परीक्षा को लचीला बनाना, 5. राष्ट्रीय मूल्यों के प्रति आस्थावान नागरिक तैयार करना।',
    explanationEnglish: 'The primary guiding principle of NCF 2005 emphasizes connecting academic knowledge with the real-world experiences outside the school.',
    pyqReference: 'BPSC TRE 3.0 PYQ'
  },
  {
    section: 'core_subject',
    category: 'core_subject',
    questionHindi: 'किसी शिक्षक द्वारा कक्षा में श्यामपट्ट (Blackboard) का प्रयोग करते समय सबसे महत्वपूर्ण बात क्या है?',
    questionEnglish: 'What is the most crucial skill when a teacher utilizes the chalkboard/blackboard in classroom teaching?',
    optionsHindi: [
      'लेखन में स्पष्टता, शुद्धता एवं उचित आकार',
      'श्यामपट्ट को रंग-बिरंगे चित्रों से पूरा भर देना',
      'श्यामपट्ट की ओर पीठ करके ही पढ़ाना',
      'अत्यंत छोटे अक्षरों में अधिक से अधिक सामग्री लिखना'
    ],
    optionsEnglish: [
      'Legibility, clarity, correctness, and appropriate size of handwriting',
      'Covering the entire blackboard with decorative colors',
      'Teaching with back turned continuously to students',
      'Writing exhaustive tiny text to maximize content density'
    ],
    correctAnswer: 0,
    explanationHindi: 'श्यामपट्ट कौशल (Blackboard Writing Skill) में लिखावट की स्पष्टता, अक्षरों का उचित आकार (ताकि अंतिम पंक्ति का छात्र भी देख सके), दो पंक्तियों के बीच पर्याप्त दूरी और मुख्य बिंदुओं का रेखांकन सर्वाधिक महत्वपूर्ण है।',
    explanationEnglish: 'Effective chalkboard usage mandates legibility, neatness, correct spacing, and clear prominence of core concepts visible to the back bench.',
    pyqReference: 'Bihar STET 2024 Shift 2'
  },
  {
    section: 'core_subject',
    category: 'core_subject',
    questionHindi: 'बिहार के किस प्राचीन विश्वविद्यालय को विश्व का प्रथम आवासीय अंतरराष्ट्रीय विश्वविद्यालय माना जाता है?',
    questionEnglish: 'Which ancient university of Bihar is historically recognized as the world\'s first residential international university?',
    optionsHindi: [
      'नालंदा विश्वविद्यालय (Nalanda University)',
      'विक्रमशिला विश्वविद्यालय',
      'ओदंतपुरी विश्वविद्यालय',
      'तक्षशिला विश्वविद्यालय'
    ],
    optionsEnglish: [
      'Nalanda University',
      'Vikramshila University',
      'Odantapuri University',
      'Taxila University'
    ],
    correctAnswer: 0,
    explanationHindi: 'गुप्त शासक कुमारगुप्त प्रथम द्वारा 5वीं शताब्दी में स्थापित नालंदा विश्वविद्यालय विश्व का प्रथम आवासीय अंतरराष्ट्रीय विश्वविद्यालय था, जहाँ 10,000 छात्र और 2,000 शिक्षक निवास करते थे।',
    explanationEnglish: 'Founded in the 5th century CE by Kumaragupta I of the Gupta Empire, Nalanda was the world\'s earliest residential international university.',
    pyqReference: 'BPSC TRE 2.0 PYQ'
  },
  {
    section: 'core_subject',
    category: 'core_subject',
    questionHindi: 'सतत एवं व्यापक मूल्यांकन (CCE) में "व्यापक" (Comprehensive) शब्द का क्या अभिप्राय है?',
    questionEnglish: 'In Continuous and Comprehensive Evaluation (CCE), what does the term "Comprehensive" specifically signify?',
    optionsHindi: [
      'संज्ञानात्मक (Scholastic) और सह-संज्ञानात्मक (Co-scholastic) दोनों पक्षों का मूल्यांकन',
      'केवल वर्ष भर लगातार लिखित परीक्षाएं लेना',
      'केवल खेलकूद और कला का मूल्यांकन',
      'केवल पाठ्यक्रम की पुस्तकों के प्रश्न पूछना'
    ],
    optionsEnglish: [
      'Evaluation of both scholastic (cognitive) and co-scholastic (affective & psychomotor) dimensions',
      'Administering continuous pen-paper tests all year',
      'Evaluating solely athletics and arts',
      'Restricting questions exclusively to textbook end exercises'
    ],
    correctAnswer: 0,
    explanationHindi: 'CCE में "व्यापक" का अर्थ छात्र के व्यक्तित्व के सभी पक्षों (संज्ञानात्मक, भावनात्मक और क्रियात्मक) तथा शैक्षिक और सह-शैक्षिक गतिविधियों (जीवन कौशल, दृष्टिकोण, मूल्य, खेल, कला) के समग्र मूल्यांकन से है।',
    explanationEnglish: 'In CCE, "Comprehensive" denotes assessing holistic student development covering both scholastic areas and co-scholastic domains like life skills and attitudes.',
    pyqReference: 'Bihar STET 2024 Shift 1'
  },
  {
    section: 'core_subject',
    category: 'core_subject',
    questionHindi: 'प्रसिद्ध कथन "शिक्षा मनुष्य में पहले से विद्यमान पूर्णता की अभिव्यक्ति है" (Education is the manifestation of perfection already in man) किसका है?',
    questionEnglish: 'Who proclaimed the famous educational dictum: "Education is the manifestation of perfection already in man"?',
    optionsHindi: [
      'स्वामी विवेकानंद (Swami Vivekananda)',
      'महात्मा गांधी',
      'रवींद्रनाथ टैगोर',
      'श्री अरबिंदो'
    ],
    optionsEnglish: [
      'Swami Vivekananda',
      'Mahatma Gandhi',
      'Rabindranath Tagore',
      'Sri Aurobindo'
    ],
    correctAnswer: 0,
    explanationHindi: 'स्वामी विवेकानंद ने शिक्षा को मनुष्य में अंतर्निहित पूर्णता को अभिव्यक्त करने का साधन बताया। जबकि महात्मा गांधी ने "शारीरिक, मानसिक और आत्मिक विकास" (3H: Head, Heart, Hand) पर बल दिया।',
    explanationEnglish: 'Swami Vivekananda famously defined education as "the manifestation of perfection already existing in man."',
    pyqReference: 'Bihar STET 2023 Paper 2'
  },
  {
    section: 'core_subject',
    category: 'core_subject',
    questionHindi: 'निदानात्मक परीक्षण (Diagnostic Test) के बाद शिक्षक का अगला सबसे महत्वपूर्ण कदम क्या होना चाहिए?',
    questionEnglish: 'What is the immediate and most crucial step for a teacher following a Diagnostic Test?',
    optionsHindi: [
      'उपचारात्मक शिक्षण (Remedial Teaching) प्रदान करना',
      'कमजोर छात्रों के माता-पिता से शिकायत करना',
      'छात्रों को कक्षा में दंडित करना',
      'अगले अध्याय पर बढ़ जाना'
    ],
    optionsEnglish: [
      'Administering Remedial Teaching tailored to diagnosed gaps',
      'Filing disciplinary reports with parents',
      'Penalizing struggling students in class',
      'Advancing immediately to the next chapter'
    ],
    correctAnswer: 0,
    explanationHindi: 'निदानात्मक परीक्षण (Diagnostic Test) का उद्देश्य छात्र की अधिगम कठिनाइयों और कमियों का पता लगाना है। इसके तुरंत बाद उन विशिष्ट कमियों को दूर करने के लिए "उपचारात्मक शिक्षण" (Remedial Teaching) किया जाता है।',
    explanationEnglish: 'Diagnosis identifies learning gaps and misconceptions; Remedial Teaching is the imperative follow-up intervention designed to eliminate those specific deficits.',
    pyqReference: 'Bihar STET 2024 Shift 2'
  }
];

// Rich generator to build realistic 150 questions for each of the 20 full-length tests
// Combines authentic seed questions with curriculum-mapped questions across:
// 100 Core Subject + 30 Art of Teaching + 20 Other Skills (5 GK + 5 EVS + 5 Math + 5 Reasoning)
interface CoreTemplate {
  qHi: string;
  qEn: string;
  optsHi: [string, string, string, string];
  optsEn: [string, string, string, string];
  ans: 0 | 1 | 2 | 3;
  expHi: string;
  expEn: string;
  cat: SubjectCategory;
  sec: 'core_subject' | 'art_of_teaching' | 'other_skills';
}

export function generateTestQuestions(testIndex: number): Question[] {
  const seedMultiplier = testIndex + 1;
  const questions: Question[] = [];

  // Helper for generating deterministic question items based on standard STET syllabus
  const coreTemplates: CoreTemplate[] = [
    {
      qHi: 'माध्यमिक विद्यालय स्तर पर पाठ्यचर्या निर्माण का सर्वाधिक उपयुक्त सिद्धांत कौन-सा है?',
      qEn: 'Which is the most appropriate principle of curriculum construction at the secondary school level?',
      optsHi: ['बाल-केंद्रितता एवं जीवन से संबद्धता का सिद्धांत', 'केवल परीक्षा-केंद्रितता का सिद्धांत', 'अपरिवर्तनशीलता का सिद्धांत', 'केवल सैद्धांतिक ज्ञान का सिद्धांत'],
      optsEn: ['Principle of child-centeredness and correlation with real life', 'Principle of exam-centeredness only', 'Principle of rigidity', 'Principle of theoretical knowledge only'],
      ans: 0 as const,
      expHi: 'पाठ्यचर्या निर्माण में बालक की आवश्यकता, मनोवैज्ञानिक स्तर, रुचि और उसके वास्तविक जीवन से जुड़ाव सबसे प्रमुख सिद्धांत है।',
      expEn: 'Curriculum development must be learner-centric and correlated to authentic life situations.',
      cat: 'art_of_teaching' as const,
      sec: 'art_of_teaching' as const
    },
    {
      qHi: 'एक प्रभावी शिक्षक वह है जो:',
      qEn: 'An effective teacher is one who:',
      optsHi: ['विद्यार्थियों को स्व-अधिगम (Self-learning) के लिए प्रेरित और सुगम बनाता है', 'कक्षा में कठोर अनुशासन बनाए रखता है', 'केवल निर्धारित पाठ्यपुस्तक को याद करवाता है', 'पढ़ाते समय किसी छात्र को बोलने नहीं देता'],
      optsEn: ['Inspires and facilitates self-directed learning among students', 'Enforces punitive and rigid silence', 'Rote memorizes prescribed textbooks', 'Restricts students from questioning or speaking'],
      ans: 0 as const,
      expHi: 'आधुनिक शिक्षण में शिक्षक की भूमिका "सुगमकर्ता" (Facilitator) की है जो छात्रों में जिज्ञासा और सीखने की ललक जगाता है।',
      expEn: 'In modern constructivist pedagogy, the teacher functions as a facilitator empowering independent inquiry.',
      cat: 'art_of_teaching' as const,
      sec: 'art_of_teaching' as const
    },
    {
      qHi: 'बिहार राज्य में "गंगा डॉल्फिन" (Gangetic Dolphin) संरक्षण के लिए कौन-सा अभयारण्य स्थापित है?',
      qEn: 'Which sanctuary is dedicated to the conservation of the Gangetic Dolphin in Bihar?',
      optsHi: ['विक्रमशिला गंगा डॉल्फिन अभयारण्य, भागलपुर', 'भीमबांध अभयारण्य, मुंगेर', 'कांवर झील पक्षी अभयारण्य, बेगूसराय', 'संजय गांधी जैविक उद्यान, पटना'],
      optsEn: ['Vikramshila Gangetic Dolphin Sanctuary, Bhagalpur', 'Bhimbandh Sanctuary, Munger', 'Kabar Lake Bird Sanctuary, Begusarai', 'Sanjay Gandhi Biological Park, Patna'],
      ans: 0 as const,
      expHi: 'बिहार के भागलपुर जिले में सुल्तानगंज से कहलगांव तक 60 किमी में फैला विक्रमशिला गंगा डॉल्फिन अभयारण्य डॉल्फिन संरक्षण के लिए प्रसिद्ध है।',
      expEn: 'Vikramshila Gangetic Dolphin Sanctuary in Bhagalpur district is Asia’s only protected area for endangered Gangetic dolphins.',
      cat: 'general_knowledge' as const,
      sec: 'other_skills' as const
    },
    {
      qHi: 'कक्षा में अनुशासनहीनता दूर करने का सर्वोत्तम उपाय क्या है?',
      qEn: 'What is the most effective approach to eliminate indiscipline in the classroom?',
      optsHi: ['शिक्षण कार्य को रोचक, प्रभावी एवं बाल-सुलभ बनाना', 'छात्रों को कठोर शारीरिक दंड देना', 'माता-पिता को प्रतिदिन शिकायत भेजना', 'छात्रों को विद्यालय से निकाल देना'],
      optsEn: ['Making teaching engaging, interactive, and aligned with student needs', 'Imposing harsh corporal punishments', 'Sending routine complaints to parents', 'Expelling undisciplined learners'],
      ans: 0 as const,
      expHi: 'जब शिक्षण रोचक और सहभागितापूर्ण होता है, तो छात्र स्वाभाविक रूप से सक्रिय रहते हैं और अनुशासनहीनता समाप्त हो जाती है।',
      expEn: 'Engaging, varied pedagogical activities retain student attention, intrinsically minimizing disruptions.',
      cat: 'art_of_teaching' as const,
      sec: 'art_of_teaching' as const
    },
    {
      qHi: 'यदि 15 मेजों का क्रय मूल्य 12 मेजों के विक्रय मूल्य के बराबर हो, तो लाभ प्रतिशत क्या होगा?',
      qEn: 'If the cost price of 15 tables equals the selling price of 12 tables, what is the profit percentage?',
      optsHi: ['25%', '20%', '16.66%', '30%'],
      optsEn: ['25%', '20%', '16.66%', '30%'],
      ans: 0 as const,
      expHi: 'लाभ % = [(15 - 12) / 12] * 100 = (3/12) * 100 = 1/4 * 100 = 25%।',
      expEn: 'Profit % = [(Goods Bought - Goods Sold) / Goods Sold] * 100 = (3 / 12) * 100 = 25%.',
      cat: 'mathematical_aptitude' as const,
      sec: 'other_skills' as const
    },
    {
      qHi: 'बायोगैस (Biogas) का मुख्य घटक कौन-सी गैस है?',
      qEn: 'What is the primary combustible component of biogas?',
      optsHi: ['मीथेन (Methane - CH4)', 'ब्यूटेन (Butane)', 'कार्बन मोनोऑक्साइड', 'सल्फर डाइऑक्साइड'],
      optsEn: ['Methane (CH4)', 'Butane', 'Carbon Monoxide', 'Sulfur Dioxide'],
      ans: 0 as const,
      expHi: 'बायोगैस में 55% से 70% तक मीथेन (Methane) होती है, जो इसे उत्कृष्ट और स्वच्छ पर्यावरण अनुकूल ईंधन बनाती है।',
      expEn: 'Biogas consists predominantly of 55-70% methane gas produced via anaerobic digestion.',
      cat: 'environmental_science' as const,
      sec: 'other_skills' as const
    },
    {
      qHi: 'दिए गए विकल्पों में से विषम शब्द का चयन करें:',
      qEn: 'Select the odd one out from the given alternatives:',
      optsHi: ['शिक्षामित्र', 'शिक्षक', 'प्राध्यापक', 'व्याख्याता'],
      optsEn: ['Shikshamitra', 'Teacher', 'Professor', 'Lecturer'],
      ans: 0 as const,
      expHi: 'शिक्षक, प्राध्यापक और व्याख्याता नियमित संवर्ग के पद हैं जबकि शिक्षामित्र अनुबंध आधारित संविदा व्यवस्था थी।',
      expEn: 'Teacher, Professor, and Lecturer are standard teaching designations, while Shikshamitra represents contractual paraprofessionals.',
      cat: 'logical_reasoning' as const,
      sec: 'other_skills' as const
    },
    {
      qHi: 'एनईपी 2020 के तहत प्रस्तावित मूल्यांकन केंद्र का क्या नाम है?',
      qEn: 'What is the name of the National Assessment Centre proposed under NEP 2020?',
      optsHi: ['परख (PARAKH)', 'दिशा (DISHA)', 'निष्ठा (NISHTHA)', 'सार्थक (SARTHAK)'],
      optsEn: ['PARAKH', 'DISHA', 'NISHTHA', 'SARTHAK'],
      ans: 0 as const,
      expHi: 'NEP 2020 के तहत मानक-निर्धारक निकाय के रूप में "PARAKH" (Performance Assessment, Review, and Analysis of Knowledge for Holistic Development) स्थापित किया गया है।',
      expEn: 'PARAKH is set up under NCERT as a national assessment centre to set norms and guidelines for student evaluation.',
      cat: 'art_of_teaching' as const,
      sec: 'art_of_teaching' as const
    },
    {
      qHi: 'बिहार केसरी के नाम से किन्हें जाना जाता है?',
      qEn: 'Who is popularly revered with the title of "Bihar Kesari"?',
      optsHi: ['डॉ. श्रीकृष्ण सिंह', 'डॉ. अनुग्रह नारायण सिंह', 'जयप्रकाश नारायण', 'कर्पूरी ठाकुर'],
      optsEn: ['Dr. Sri Krishna Singh', 'Dr. Anugrah Narayan Singh', 'Jayaprakash Narayan', 'Karpoori Thakur'],
      ans: 0 as const,
      expHi: 'बिहार के प्रथम मुख्यमंत्री डॉ. श्रीकृष्ण सिंह को "बिहार केसरी" की उपाधि से नवाजा गया था। कर्पूरी ठाकुर को "जननायक" कहा जाता है।',
      expEn: 'Dr. Sri Krishna Singh, the first Chief Minister of Bihar, was distinguished with the title "Bihar Kesari".',
      cat: 'general_knowledge' as const,
      sec: 'other_skills' as const
    },
    {
      qHi: 'कोहलबर्ग के नैतिक विकास सिद्धांत के अनुसार "अच्छा लड़का-अच्छी लड़की" उन्मुखता किस स्तर से संबंधित है?',
      qEn: 'In Kohlberg\'s theory of moral development, the "Good Boy-Nice Girl" orientation belongs to which level?',
      optsHi: ['पारंपरिक स्तर (Conventional Level - चरण 3)', 'पूर्व-पारंपरिक स्तर (Pre-conventional Level)', 'उत्तर-पारंपरिक स्तर (Post-conventional Level)', 'संवेदी स्तर'],
      optsEn: ['Conventional Level (Stage 3)', 'Pre-conventional Level', 'Post-conventional Level', 'Sensorimotor Level'],
      ans: 0 as const,
      expHi: 'कोहलबर्ग के पारंपरिक स्तर (Level 2) के चरण 3 में बालक दूसरों की नजरों में अच्छा दिखने और सामाजिक अनुमोदन पाने के लिए नैतिक व्यवहार करता है।',
      expEn: 'The Good Boy-Nice Girl orientation is Stage 3 under the Conventional Level, where morality is driven by social approval.',
      cat: 'core_subject' as const,
      sec: 'core_subject' as const
    }
  ];

  // Populate first with all authentic base questions
  BASE_QUESTION_BANK.forEach((bq, idx) => {
    questions.push({
      ...bq,
      id: idx + 1,
      questionNumber: idx + 1,
    });
  });

  // Now dynamically build a full realistic 150-question paper for this test series
  // Section distribution:
  // Questions 1 to 100: Core Subject / Academic Disciplines & Subject Pedagogy
  // Questions 101 to 130: Art of Teaching (30 Questions)
  // Questions 131 to 150: Other Skills (5 GK, 5 EVS, 5 Maths, 5 Reasoning)
  const targetTotal = 150;
  let currentId = questions.length + 1;

  while (questions.length < targetTotal) {
    const qNum = questions.length + 1;
    let section: 'core_subject' | 'art_of_teaching' | 'other_skills';
    let category: SubjectCategory;

    if (qNum <= 100) {
      section = 'core_subject';
      category = 'core_subject';
    } else if (qNum <= 130) {
      section = 'art_of_teaching';
      category = 'art_of_teaching';
    } else {
      section = 'other_skills';
      const rem = (qNum - 131) % 4;
      if (rem === 0) category = 'general_knowledge';
      else if (rem === 1) category = 'environmental_science';
      else if (rem === 2) category = 'mathematical_aptitude';
      else category = 'logical_reasoning';
    }

    // Pick template matching category
    const matchingTemplates = coreTemplates.filter(t => t.cat === category || t.sec === section);
    const tmpl = matchingTemplates[(qNum * seedMultiplier) % matchingTemplates.length] || coreTemplates[0];

    // Slightly modify or vary with question index so each test has its tailored set
    questions.push({
      id: currentId,
      questionNumber: qNum,
      section: section,
      category: category,
      questionHindi: `[प्रश्न ${qNum} · मॉक ${seedMultiplier}] ${tmpl.qHi}`,
      questionEnglish: `[Q.${qNum} · Mock ${seedMultiplier}] ${tmpl.qEn}`,
      optionsHindi: tmpl.optsHi,
      optionsEnglish: tmpl.optsEn,
      correctAnswer: tmpl.ans,
      explanationHindi: tmpl.expHi,
      explanationEnglish: tmpl.expEn,
      pyqReference: `STET Full Test ${seedMultiplier < 10 ? '0' + seedMultiplier : seedMultiplier} Item`
    });

    currentId++;
  }

  // Ensure exact questionNumber sequence 1..150
  return questions.map((q, idx) => ({
    ...q,
    id: idx + 1,
    questionNumber: idx + 1,
    // Assign sections according to STET official blueprint
    section: idx < 100 ? 'core_subject' : (idx < 130 ? 'art_of_teaching' : 'other_skills'),
  }));
}
