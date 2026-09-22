export interface SafetyStepItem {
  id: string;
  category: {
    en: string;
    ar: string;
  };
  iconName: string;
  badge?: {
    en: string;
    ar: string;
  };
  points: {
    en: string[];
    ar: string[];
  };
}

export interface SummaryTimelineItem {
  phase: {
    en: string;
    ar: string;
  };
  timeframe: string;
  action: {
    en: string;
    ar: string;
  };
}

export const PATIENT_SAFETY_CORRECTION_STEPS: SafetyStepItem[] = [
  {
    id: 'stabilization',
    category: {
      en: 'Immediate Assessment and Clinical Stabilization',
      ar: 'التقييم الفوري والاستقرار السريري'
    },
    iconName: 'Activity',
    badge: {
      en: '0 - 2 Hours',
      ar: 'خلال 0 - 2 ساعة'
    },
    points: {
      en: [
        'Check vital signs and consciousness to keep the patient safe.',
        'Remove immediate dangers and start interventions right away.',
        'Keep monitoring and documenting changes in real time.'
      ],
      ar: [
        'فحص العلامات الحيوية ومستوى الوعي لضمان سلامة المريض',
        'إزالة الأخطار المباشرة وبدء التدخلات العلاجية المنقذة فوراً',
        'مواصلة المراقبة وتوثيق التغيرات الطارئة في الوقت الفعلي'
      ]
    }
  },
  {
    id: 'notification',
    category: {
      en: 'Internal Notification',
      ar: 'الإخطار والتبليغ الداخلي'
    },
    iconName: 'BellRing',
    badge: {
      en: 'Immediate',
      ar: 'فوري'
    },
    points: {
      en: [
        'Notify the Most Responsible Practitioner within minutes to 2 hours.',
        'Inform supervisors to coordinate; escalate to higher management if critical.'
      ],
      ar: [
        'إبلاغ الطبيب الممارس الأكثر مسؤولية (MRP) خلال دقائق إلى ساعتين كحد أقصى',
        'إشعار المشرفين للتنسيق، وتصعيد البلاغ للإدارة العليا في الحالات الحرجة'
      ]
    }
  },
  {
    id: 'documentation',
    category: {
      en: 'Documentation',
      ar: 'التوثيق السريري والإبلاغ'
    },
    iconName: 'FileText',
    badge: {
      en: 'Objective',
      ar: 'موضوعي وغير حكمي'
    },
    points: {
      en: [
        "Record only factual details in the patient's chart—no judgmental language.",
        'File internal reports; near misses can be reported anonymously.'
      ],
      ar: [
        'تسجيل الوقائع الموضوعية المجردة فقط في ملف المريض، وتجنب لغة التلاوم أو الأحكام',
        'رفع بلاغات الحوادث العارضة داخلياً، مع إمكانية التبليغ المجهول عن الحوادث الوشيكة (Near Misses)'
      ]
    }
  },
  {
    id: 'candour',
    category: {
      en: 'Disclosure and Patient/Family Communication',
      ar: 'الإفصاح والتواصل مع المريض والأسرة (Disclosure)'
    },
    iconName: 'Users',
    badge: {
      en: 'Duty of Candour',
      ar: 'واجب الإفصاح والشفافية (Disclosure)'
    },
    points: {
      en: [
        'Follow Duty of Candour—acknowledge what happened without blame.',
        'Document the conversation: time, attendees, and what was said.'
      ],
      ar: [
        'اتباع واجب الإفصاح (Disclosure / Duty of Candour) والاعتراف بما وقع دون توجيه لوم لأحد',
        'توثيق جلسة التواصل رسمياً: الوقت، الحضور، وتفاصيل ما تمت مناقشته'
      ]
    }
  },
  {
    id: 'rca',
    category: {
      en: 'Event Review and Root Cause Analysis (RCA)',
      ar: 'مراجعة الحدث وتحليل الأسباب الجذرية'
    },
    iconName: 'SearchCheck',
    badge: {
      en: 'System Improvement',
      ar: 'تحليل الأسباب الجذرية'
    },
    points: {
      en: [
        'Conduct a focused review using tools like Five Whys and debrief the team.',
        'Assign accountability for corrective actions and monitor results.'
      ],
      ar: [
        'إجراء مراجعة مركزة باستخدام أدوات مثل لماذا الخمسة (Five Whys) وعقد جلسة تفريغ للفريق',
        'تحديد المسؤوليات والمساءلة عن الإجراءات التصحيحية ومتابعة النتائج'
      ]
    }
  },
  {
    id: 'corrective',
    category: {
      en: 'Corrective and Preventive Measures',
      ar: 'الإجراءات التصحيحية والوقائية'
    },
    iconName: 'ShieldAlert',
    badge: {
      en: 'Prevention',
      ar: 'منع التكرار'
    },
    points: {
      en: [
        'Revise protocols to prevent recurrence and educate staff.',
        'Implement improvements and track their effectiveness.'
      ],
      ar: [
        'تحديث وتعديل السياسات والبروتوكولات لمنع التكرار وتدريب الكوادر عليها',
        'تطبيق خطط التحسين وقياس مدى فعاليتها على أرض الواقع'
      ]
    }
  },
  {
    id: 'monitoring',
    category: {
      en: 'Ongoing Monitoring and Learning',
      ar: 'المراقبة المستمرة والتعلم المؤسسي'
    },
    iconName: 'LineChart',
    badge: {
      en: 'Continuous',
      ar: 'مستمر'
    },
    points: {
      en: [
        'Keep watching patient outcomes and share lessons learned with staff.'
      ],
      ar: [
        'مواصلة مراقبة النتائج السريرية للمريض ومشاركة الدروس المستفادة مع كافة الكوادر'
      ]
    }
  },
  {
    id: 'compliance',
    category: {
      en: 'Legal and Risk Management Compliance',
      ar: 'الامتثال لإدارة المخاطر والشؤون القانونية'
    },
    iconName: 'Scale',
    badge: {
      en: 'Governance',
      ar: 'حوكمة وامتثال'
    },
    points: {
      en: [
        'Engage risk management as needed and keep a private timeline for legal consultations.'
      ],
      ar: [
        'إشراك إدارة المخاطر حسب الحاجة، والاحتفاظ بجدول زمني مستقل للاستشارات القانونية'
      ]
    }
  }
];

export const SUMMARY_TIMELINE: SummaryTimelineItem[] = [
  {
    phase: {
      en: 'Immediate',
      ar: 'فوري'
    },
    timeframe: '0 – 2h',
    action: {
      en: 'Stabilize the patient and start documentation.',
      ar: 'تثبيت المريض سريرياً والبدء بالتوثيق الأولي'
    }
  },
  {
    phase: {
      en: 'Early',
      ar: 'مبكر'
    },
    timeframe: '0 – 24h',
    action: {
      en: 'Disclose to family and complete incident reports.',
      ar: 'الإفصاح مع العائلة واستكمال بلاغ الحادث العارض (Disclosure)'
    }
  },
  {
    phase: {
      en: 'Short-term',
      ar: 'قصير المدى'
    },
    timeframe: '24 – 72h',
    action: {
      en: 'Team debrief and preliminary RCA.',
      ar: 'جلسة مراجعة مع الفريق والبدء بتحليل الأسباب الجذرية (RCA)'
    }
  },
  {
    phase: {
      en: 'Systemic',
      ar: 'شامل ومستدام'
    },
    timeframe: 'Week 1+',
    action: {
      en: 'Implement changes and monitor outcomes.',
      ar: 'تطبيق التغييرات النظامية ومراقبة مخرجات سلامة المرضى'
    }
  }
];
