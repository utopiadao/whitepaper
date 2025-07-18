export const hi = {
  title: 'यूटोपिया श्वेत पत्र',
  description: 'सर्वसम्मति-मुक्त संपत्ति नेटवर्क: स्व-विकसित मूल्य प्रवाह पारिस्थितिकी तंत्र',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'विचार जागृति', link: '/hi/awakening/' },
      { text: 'श्वेत पत्र', link: '/hi/whitepaper/' },
      { text: 'आर्थिक मॉडल', link: '/hi/economics/' }
    ],

    sidebar: {
      '/hi/whitepaper/': [
        {
          text: 'प्रस्तावना',
          link: '/hi/whitepaper/'
        },
        {
          text: 'अध्याय 1: संपत्ति स्वतंत्रता पर दार्शनिक चिंतन',
          link: '/hi/whitepaper/chapter1/'
        },
        {
          text: 'अध्याय 2: यूटोपिया का जन्म',
          link: '/hi/whitepaper/chapter2/'
        },
        {
          text: 'अध्याय 3: अनुनाद पूल सिस्टम',
          collapsed: false,
          items: [
            { text: 'अध्याय अवलोकन', link: '/hi/whitepaper/chapter3/' },
            { text: '3.1 अनुनाद पूल की दार्शनिक नींव', link: '/hi/whitepaper/chapter3/section1' },
            { text: '3.2 चार-आयामी अनुनाद संरचना', link: '/hi/whitepaper/chapter3/section2' },
            { text: '3.3 अनुनाद प्रवर्धन सिद्धांत', link: '/hi/whitepaper/chapter3/section3' },
            { text: '3.4 सहभागिता प्रक्रिया', link: '/hi/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'अध्याय 4: क्षेत्रीय सर्वसम्मति नेटवर्क',
          collapsed: false,
          items: [
            { text: 'अध्याय अवलोकन', link: '/hi/whitepaper/chapter4/' },
            { text: '4.1 तारा चार्ट संरचना और आयामी सर्वसम्मति', link: '/hi/whitepaper/chapter4/section1' },
            { text: '4.2 मूल्य सर्वसम्मति एल्गोरिदम और तारा मानचित्र', link: '/hi/whitepaper/chapter4/section2' },
            { text: '4.3 नेटवर्क दर्शन और तकनीकी अभ्यास', link: '/hi/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: 'अध्याय 5: समृद्धि नोड सिस्टम',
          collapsed: false,
          items: [
            { text: 'अध्याय अवलोकन', link: '/hi/whitepaper/chapter5/' },
            { text: '5.1 समृद्धि नोड्स की प्रकृति और चयन', link: '/hi/whitepaper/chapter5/section1' },
            { text: '5.2 गैलेक्टिक साझाकरण और मूल्य वितरण', link: '/hi/whitepaper/chapter5/section2' },
            { text: '5.3 समृद्धि इंजन और गतिशील संतुलन', link: '/hi/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: 'अध्याय 6: फीनिक्स पुनरारंभ तंत्र',
          collapsed: false,
          items: [
            { text: 'अध्याय अवलोकन', link: '/hi/whitepaper/chapter6/' },
            { text: '6.1 फीनिक्स पुनरारंभ का दर्शन और ट्रिगर तंत्र', link: '/hi/whitepaper/chapter6/section1' },
            { text: '6.2 फीनिक्स पुनर्जन्म प्रक्रिया डिज़ाइन', link: '/hi/whitepaper/chapter6/section2' },
            { text: '6.3 आर्थिक सिद्धांत विश्लेषण', link: '/hi/whitepaper/chapter6/section3' },
            { text: '6.4 निरंतर समृद्धि पुरस्कार तंत्र', link: '/hi/whitepaper/chapter6/section4' },
            { text: '6.5 गेम थ्योरी विश्लेषण और अंतिम अर्थ', link: '/hi/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: 'अध्याय 7: सूचना-संचालित स्मार्ट कॉन्ट्रैक्ट्स',
          collapsed: false,
          items: [
            { text: 'अध्याय अवलोकन', link: '/hi/whitepaper/chapter7/' },
            { text: '7.1 आर्किटेक्चर डिज़ाइन और अवधारणा', link: '/hi/whitepaper/chapter7/section1' },
            { text: '7.2 पूर्व-गणना इंजन और सुरक्षा तंत्र', link: '/hi/whitepaper/chapter7/section2' },
            { text: '7.3 उपयोगकर्ता इंटरैक्शन और विकेंद्रीकरण', link: '/hi/whitepaper/chapter7/section3' },
            { text: '7.4 पारदर्शिता और तकनीकी सारांश', link: '/hi/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'अध्याय 8: गणितीय मॉडलिंग',
          collapsed: false,
          items: [
            { text: 'अध्याय अवलोकन', link: '/hi/whitepaper/chapter8/' },
            { text: '8.1 मुख्य चर और स्थिरता मॉडल', link: '/hi/whitepaper/chapter8/section1' },
            { text: '8.2 नेटवर्क प्रभाव और गतिशील संतुलन', link: '/hi/whitepaper/chapter8/section2' },
            { text: '8.3 फीनिक्स एल्गोरिदम और तनाव परीक्षण', link: '/hi/whitepaper/chapter8/section3' },
            { text: '8.4 आर्थिक सिद्धांत और निष्कर्ष', link: '/hi/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'अध्याय 9: सामान्य गलतफहमियों का स्पष्टीकरण',
          collapsed: false,
          items: [
            { text: 'अध्याय अवलोकन', link: '/hi/whitepaper/chapter9/' },
            { text: '9.1 गलतफहमी 1: यूटोपिया एक पॉन्जी स्कीम है', link: '/hi/whitepaper/chapter9/section1' },
            { text: '9.2 गलतफहमी 2: उच्च रिटर्न अवास्तविक हैं', link: '/hi/whitepaper/chapter9/section2' },
            { text: '9.3 गलतफहमी 3: सिस्टम सामान्य उपयोगकर्ताओं के लिए बहुत जटिल है', link: '/hi/whitepaper/chapter9/section3' },
            { text: '9.4 गलतफहमी 4: क्षेत्रीय सहमति एक पिरामिड योजना है', link: '/hi/whitepaper/chapter9/section4' },
            { text: '9.5 गलतफहमी 5: फीनिक्स रीस्टार्ट सिस्टम डिज़ाइन दोष है', link: '/hi/whitepaper/chapter9/section5' },
            { text: '9.6 गलतफहमी 6: स्मार्ट कॉन्ट्रैक्ट्स में तकनीकी जोखिम हैं', link: '/hi/whitepaper/chapter9/section6' },
            { text: '9.7 गलतफहमी 7: नियामक जोखिम बहुत अधिक हैं', link: '/hi/whitepaper/chapter9/section7' },
            { text: '9.8 गलतफहमी 8: आर्थिक मॉडल टिकाऊ नहीं है', link: '/hi/whitepaper/chapter9/section8' },
            { text: '9.9 गलतफहमी 9: टीम भाग सकती है', link: '/hi/whitepaper/chapter9/section9' },
            { text: '9.10 गलतफहमी 10: केवल प्रारंभिक प्रतिभागियों को लाभ होता है', link: '/hi/whitepaper/chapter9/section10' },
            { text: '9.11 निष्कर्ष: तर्कसंगत अनुभूति और बुद्धिमान विकल्प', link: '/hi/whitepaper/chapter9/section11' },
            { text: '9.12 परिशिष्ट: तकनीकी सत्यापन गाइड', link: '/hi/whitepaper/chapter9/section12' },
            { text: '9.13 सामुदायिक सत्यापन उपकरण', link: '/hi/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: 'अध्याय 10: निष्कर्ष - विचार के बीज',
          link: '/hi/whitepaper/chapter10/'
        },
        {
          text: 'अध्याय 11: परिशिष्ट',
          collapsed: false,
          items: [
            { text: 'अध्याय अवलोकन', link: '/hi/whitepaper/appendix/' },
            { text: '11.1 मुख्य अवधारणाओं की शब्दावली', link: '/hi/whitepaper/appendix/section1' },
            { text: '11.2 सिस्टम पैरामीटर और संदर्भ सामग्री', link: '/hi/whitepaper/appendix/section2' },
            { text: '11.3 शब्दावली तुलना और आभार', link: '/hi/whitepaper/appendix/section3' },
            { text: '11.4 अस्वीकरण और सहभागिता', link: '/hi/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/hi/economics/': [
        {
          text: 'आर्थिक मॉडल',
          items: [
            { text: 'आर्थिक मॉडल विवरण', link: '/hi/economics/' }
          ]
        }
      ]
    },

    // हिंदी इंटरफेस टेक्स्ट
    outlineTitle: 'विषय सूची',
    docFooter: {
      prev: 'पिछला पृष्ठ',
      next: 'अगला पृष्ठ'
    },
    darkModeSwitchLabel: 'उपस्थिति',
    sidebarMenuLabel: 'मेनू',
    returnToTopLabel: 'शीर्ष पर वापस जाएं'
  }
}