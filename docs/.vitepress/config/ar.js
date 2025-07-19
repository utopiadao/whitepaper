export const ar = {
  title: 'الكتاب الأبيض لليوتوبيا',
  description: 'شبكة الثروة الحرة القائمة على الإجماع: نظام بيئي لتدفق القيمة يتطور ذاتياً',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'الصحوة الفكرية', link: '/ar/awakening/' },
      { text: 'الكتاب الأبيض', link: '/ar/whitepaper/' },
      { text: 'النموذج الاقتصادي', link: '/ar/economics/' }
    ],

    sidebar: {
      '/ar/whitepaper/': [
        {
          text: 'المقدمة',
          link: '/ar/whitepaper/'
        },
        {
          text: 'الفصل الأول: التفكير الفلسفي في حرية الثروة',
          link: '/ar/whitepaper/chapter1/'
        },
        {
          text: 'الفصل الثاني: ولادة اليوتوبيا',
          link: '/ar/whitepaper/chapter2/'
        },
        {
          text: 'الفصل الثالث: نظام مجمع الرنين',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/ar/whitepaper/chapter3/' },
            { text: '3.1 الأسس الفلسفية لمجمع الرنين', link: '/ar/whitepaper/chapter3/section1' },
            { text: '3.2 هيكل الرنين رباعي الأبعاد', link: '/ar/whitepaper/chapter3/section2' },
            { text: '3.3 مبدأ تضخيم الرنين', link: '/ar/whitepaper/chapter3/section3' },
            { text: '3.4 عملية الرنين', link: '/ar/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'الفصل الرابع: شبكة الإجماع الإقليمي',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/ar/whitepaper/chapter4/' },
            { text: '4.1 هيكل اللوحة النجمية وإجماع الأبعاد', link: '/ar/whitepaper/chapter4/section1' },
            { text: '4.2 خوارزمية إجماع القيمة والخريطة النجمية', link: '/ar/whitepaper/chapter4/section2' },
            { text: '4.3 فلسفة الشبكة والممارسة التقنية', link: '/ar/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: 'الفصل الخامس: نظام عقد الازدهار',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/ar/whitepaper/chapter5/' },
            { text: '5.1 جوهر عقد الازدهار وعملية الانتقاء', link: '/ar/whitepaper/chapter5/section1' },
            { text: '5.2 التقاسم المجري وتوزيع القيمة', link: '/ar/whitepaper/chapter5/section2' },
            { text: '5.3 محرك الازدهار والتوازن الديناميكي', link: '/ar/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: 'الفصل السادس: آلية إعادة تشغيل العنقاء',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/ar/whitepaper/chapter6/' },
            { text: '6.1 فلسفة إعادة تشغيل العنقاء وآلية التفعيل', link: '/ar/whitepaper/chapter6/section1' },
            { text: '6.2 تصميم عملية إعادة ولادة العنقاء', link: '/ar/whitepaper/chapter6/section2' },
            { text: '6.3 تحليل المبادئ الاقتصادية', link: '/ar/whitepaper/chapter6/section3' },
            { text: '6.4 آلية مكافآت الازدهار المستمر', link: '/ar/whitepaper/chapter6/section4' },
            { text: '6.5 تحليل نظرية اللعب والمعنى النهائي', link: '/ar/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: 'الفصل السابع: العقود الذكية المدفوعة بالمعلومات',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/ar/whitepaper/chapter7/' },
            { text: '7.1 تصميم الهيكل والمفهوم', link: '/ar/whitepaper/chapter7/section1' },
            { text: '7.2 محرك الحوسبة المسبقة وآليات الأمان', link: '/ar/whitepaper/chapter7/section2' },
            { text: '7.3 تفاعل المستخدم واللامركزية', link: '/ar/whitepaper/chapter7/section3' },
            { text: '7.4 الشفافية والملخص التقني', link: '/ar/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'الفصل الثامن: النمذجة الرياضية',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/ar/whitepaper/chapter8/' },
            { text: '8.1 المتغيرات الأساسية ونموذج الاستقرار', link: '/ar/whitepaper/chapter8/section1' },
            { text: '8.2 تأثير الشبكة والتوازن الديناميكي', link: '/ar/whitepaper/chapter8/section2' },
            { text: '8.3 خوارزمية العنقاء واختبار الضغط', link: '/ar/whitepaper/chapter8/section3' },
            { text: '8.4 النظرية الاقتصادية والخلاصة', link: '/ar/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'الفصل التاسع: توضيح سوء الفهم الشائع',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/ar/whitepaper/chapter9/' },
            { text: '9.1 سوء الفهم الأول: يوتوبيا هي مخطط بونزي', link: '/ar/whitepaper/chapter9/section1' },
            { text: '9.2 سوء الفهم الثاني: العوائد العالية غير واقعية', link: '/ar/whitepaper/chapter9/section2' },
            { text: '9.3 سوء الفهم الثالث: النظام معقد جداً للمستخدمين العاديين', link: '/ar/whitepaper/chapter9/section3' },
            { text: '9.4 سوء الفهم الرابع: الإجماع الإقليمي هو نموذج هرمي', link: '/ar/whitepaper/chapter9/section4' },
            { text: '9.5 سوء الفهم الخامس: إعادة تشغيل العنقاء هو عيب في تصميم النظام', link: '/ar/whitepaper/chapter9/section5' },
            { text: '9.6 سوء الفهم السادس: العقود الذكية لديها مخاطر تقنية', link: '/ar/whitepaper/chapter9/section6' },
            { text: '9.7 سوء الفهم السابع: المخاطر التنظيمية عالية جداً', link: '/ar/whitepaper/chapter9/section7' },
            { text: '9.8 سوء الفهم الثامن: النموذج الاقتصادي غير مستدام', link: '/ar/whitepaper/chapter9/section8' },
            { text: '9.9 سوء الفهم التاسع: الفريق قد يهرب', link: '/ar/whitepaper/chapter9/section9' },
            { text: '9.10 سوء الفهم العاشر: المشاركون الأوائل فقط يستفيدون', link: '/ar/whitepaper/chapter9/section10' },
            { text: '9.11 الخاتمة: الإدراك العقلاني والاختيار الحكيم', link: '/ar/whitepaper/chapter9/section11' },
            { text: '9.12 الملحق: دليل التحقق التقني', link: '/ar/whitepaper/chapter9/section12' },
            { text: '9.13 أدوات التحقق المجتمعية', link: '/ar/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: 'الفصل العاشر: الخاتمة - بذرة الفكر',
          link: '/ar/whitepaper/chapter10/'
        },
        {
          text: 'الفصل الحادي عشر: الملحق',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/ar/whitepaper/appendix/' },
            { text: '11.1 مسرد المفاهيم الأساسية', link: '/ar/whitepaper/appendix/section1' },
            { text: '11.2 معاملات النظام والمراجع', link: '/ar/whitepaper/appendix/section2' },
            { text: '11.3 مقارنة المصطلحات والشكر', link: '/ar/whitepaper/appendix/section3' },
            { text: '11.4 إخلاء المسؤولية والمشاركة', link: '/ar/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/ar/economics/': [
        {
          text: 'النموذج الاقتصادي',
          items: [
            { text: 'تفاصيل النموذج الاقتصادي', link: '/ar/economics/' }
          ]
        }
      ]
    },

    // نصوص الواجهة العربية
    outlineTitle: 'المحتويات',
    docFooter: {
      prev: 'الصفحة السابقة',
      next: 'الصفحة التالية'
    },
    darkModeSwitchLabel: 'المظهر',
    sidebarMenuLabel: 'القائمة',
    returnToTopLabel: 'العودة إلى الأعلى'
  }
}