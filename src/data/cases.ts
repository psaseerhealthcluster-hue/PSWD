import { MedicalCase } from '../types';

export const MEDICAL_CASES: MedicalCase[] = [
  {
    id: 1,
    category: {
      en: 'High-Alert Medication Safety',
      ar: 'سلامة الأدوية عالية الخطورة'
    },
    department: {
      en: 'Inpatient Medical Ward',
      ar: 'قسم التنويم الباطني'
    },
    title: {
      en: 'Case 1: Concentrated Potassium Chloride Free-Flow Runaway',
      ar: 'الحالة 1: تدفق وريدي سريع لجرعة مركزة من كلوريد البوتاسيوم'
    },
    patientInfo: {
      age: 58,
      gender: { en: 'Male', ar: 'ذكر' },
      room: 'Bed 304'
    },
    vitals: {
      hr: '136 bpm (Peaked T waves / Wide QRS)',
      bp: '88/54 mmHg',
      rr: '24 /min',
      spo2: '93% on room air',
      extra: {
        label: { en: 'Serum K+ Level', ar: 'مستوى البوتاسيوم' },
        value: 'Rising rapidly (Hyperkalemia)'
      }
    },
    scenario: {
      en: 'A 58-year-old patient admitted for dehydration had an order for IV fluids with 20 mEq Potassium Chloride (KCl) to run over 4 hours. You walk into the room and observe the IV infusion line roller clamp wide open, running freely into the peripheral IV cannula. The patient is clutching his chest, shouting that his arm is burning excruciatingly, feels severe palpitations, dizziness, and impending doom. The telemetry rhythm strip begins showing tall peaked T waves.',
      ar: 'مريض يبلغ من العمر 58 عاماً تم تنويمه لعلاج الجفاف، كُتب له محلول وريدي يحتوي على 20 ملليمكافئ من كلوريد البوتاسيوم (KCl) للتسريب خلال 4 ساعات. عند دخولك الغرفة، لاحظت أن مثبت المغذي مفتوح بالكامل ويتدفق بسرعة فائقة عبر القنية الوريدية. المريض يمسك صدره متألماً، ويشتكي من حرقان شديد في ذراعه، وخفقان حاد، ودوخة، وشعور بدنو الأجل. جهاز التخطيط القلبي يُظهر ارتفاعاً حاداً في موجات T واتساعاً في QRS.'
    },
    question: {
      en: 'What is your IMMEDIATE FIRST ACTION upon encountering this critical clinical situation?',
      ar: 'ما هو الإجراء السريري الفوري الأول الذي تتخذه فور مواجهة هذه الحالة الطارئة؟'
    },
    options: [
      {
        id: 'A',
        text: {
          en: 'Immediately clamp and STOP the KCl infusion, disconnect the line, call the Rapid Response Team / Code, and prep IV Calcium Gluconate and ECG.',
          ar: 'إيقاف وإغلاق تسريب كلوريد البوتاسيوم فوراً وفصل الخط، واستدعاء فريق الاستجابة السريعة وتجهيز جلوكونات الكالسيوم الوريدي وتخطيط القلب'
        },
        isCorrect: true,
        feedback: {
          en: 'EXCELLENT! Immediate cessation of the fatal infusion stops hyperkalemic cardiotoxicity. Patient stabilization and cardioprotective medication (IV Calcium Gluconate) are vital before any paperwork.',
          ar: 'إجراء مثالي! الإيقاف الفوري يمنع التسمم القلبي القاتل. استقرار المريض وإعطاء حامي عضلة القلب يسبق أي إجراء إداري'
        }
      },
      {
        id: 'B',
        text: {
          en: 'Rush immediately to the nursing station desktop to submit an urgent Occurrence Variance Report (OVR) while asking a coworker to check on the pump.',
          ar: 'التوجه فوراً لمحطة التمريض لفتح بلاغ حادث عارض (OVR) عاجل على الحاسب الآلي وتكليف زميل بالاطلاع على المضخة'
        },
        isCorrect: false,
        isPrematureReporting: true,
        feedback: {
          en: 'CRITICAL HAZARD: Never leave a deteriorating patient to file an incident report! The patient is facing imminent cardiac arrest until the infusion is physically stopped and treated.',
          ar: 'خطأ جسيم: يُحظر تماماً ترك المريض المتدهور للذهاب وتعبئة بلاغ الحادث! المريض معرض لتوقف قلب مفاجئ ما لم يتم إيقاف المحلول وتثبيت قلبه فوراً'
        }
      },
      {
        id: 'C',
        text: {
          en: 'Adjust the roller clamp to slow down the rate to 50 mL/hr, leave the KCl running, and contact the dispensing pharmacy to verify the concentration.',
          ar: 'تعديل منظم التسريب لتقليل المعدل إلى 50 مل/ساعة مع استمرار التسريب، والاتصال بالصيدلية للتأكد من تركيز المحلول'
        },
        isCorrect: false,
        feedback: {
          en: 'INCORRECT: In acute high-alert medication runaway with cardiotoxicity symptoms, the infusion must be halted entirely, not just slowed down.',
          ar: 'غير صحيح: عند حدوث تدفق سريع لعقار عالي الخطورة وظهور علامات التسمم القلبي، يجب الإيقاف الكامل والفوري وليس الاكتفاء بتقليل السرعة'
        }
      },
      {
        id: 'D',
        text: {
          en: 'Remove the peripheral IV cannula completely and discard the whole bag into the hazardous waste bin immediately.',
          ar: 'سحب القنية الوريدية بالكامل من يد المريض والتخلص من كيس المحلول فوراً في سلة النفايات الطبية'
        },
        isCorrect: false,
        feedback: {
          en: 'INCORRECT: While the infusion must stop, keep the venous cannula intact or maintain IV access for emergency resuscitation drugs (Calcium, Insulin/Dextrose), and the bag must be retained for clinical investigation.',
          ar: 'غير صحيح: يجب إيقاف التسريب ولكن الاحتفاظ بالمدخل الوريدي لإعطاء أدوية الإنعاش الطارئة، كما يجب التحفظ على الكيس للفحص السريري لاحقاً'
        }
      }
    ],
    rationale: {
      goldenRule: {
        en: 'Patient stabilization and stopping ongoing toxic infusion always supersede administrative documentation.',
        ar: 'تثبيت حالة المريض وإيقاف مصدر الخطر فوراً يسبق دائماً أي توثيق إداري أو رفع بلاغات'
      },
      immediateAction: {
        en: '1) STOP the KCl infusion. 2) Maintain IV access with 0.9% NaCl. 3) Continuous ECG monitoring and activate Rapid Response / Code. 4) Administer 10% IV Calcium Gluconate as ordered to stabilize cardiac membranes.',
        ar: '1) إيقاف تسريب البوتاسيوم فوراً. 2) الحفاظ على المدخل الوريدي بمحلول ملحي طبيعي. 3) ربط المريض بمخطط القلب واستدعاء فريق الطوارئ. 4) إعطاء جلوكونات الكالسيوم الوريدي بأمر الطبيب لحماية عضلة القلب'
      },
      reportingStep: {
        en: 'Once the patient rhythm is stable and transferred/monitored in ICU/Stepdown, document the clinical facts objectively, preserve the IV bag/pump for biomedical engineering root-cause analysis, and file the OVR/incident report.',
        ar: 'بعد استقرار نبض المريض وتأمينه في العناية/الرعاية المركزة، يتم توثيق الحقائق السريرية بموضوعية، والتحفظ على الكيس والمضخة للتحليل الجذري، وتعبئة بلاغ الحادث العارض (OVR)'
      }
    }
  },
  {
    id: 2,
    category: {
      en: 'Blood Transfusion Safety',
      ar: 'سلامة نقل الدم ومشتقاته'
    },
    department: {
      en: 'Post-Surgical Inpatient Ward',
      ar: 'جناح جراحة ما بعد العمليات'
    },
    title: {
      en: 'Case 2: Acute Hemolytic Transfusion Reaction (ABO Incompatibility)',
      ar: 'الحالة 2: تفاعل انحلالي حاد أثناء نقل الدم (عدم توافق الفصائل)'
    },
    patientInfo: {
      age: 46,
      gender: { en: 'Female', ar: 'أنثى' },
      room: 'Bed 212'
    },
    vitals: {
      hr: '132 bpm (Tachycardia)',
      bp: '82/48 mmHg (Hypotension)',
      rr: '28 /min (Dyspneic)',
      spo2: '90% on room air',
      temp: '39.2 °C (Severe Rigors/Chills)'
    },
    scenario: {
      en: 'A 46-year-old post-hysterectomy patient is receiving her first unit of Packed Red Blood Cells (PRBCs). Ten minutes into the transfusion (after approximately 30 mL infused), the patient abruptly starts violently shivering, cries out with severe low-back and flank pain, tightness in the chest, and profound shortness of breath. Her blood pressure plunges to 82/48 mmHg, and reddish-brown urine is noted in the Foley catheter bag.',
      ar: 'مريضة تبلغ 46 عاماً بعد جراحة استئصال الرحم، بدأ إعطاؤها أول وحدة دم مكدس (PRBC). بعد 10 دقائق من بدء النقل (تسرب حوالي 30 مل فقط)، بدأت المريضة ترتجف بشدة، وصرخت من ألم عنيف في أسفل الظهر والخاصرة مع ضيق شديد في الصدر وصعوبة تنفس. انخفض ضغط دمها إلى 82/48 مم زئبق، ولوحظ خروج بول بلون بني محمر في كيس القسطرة'
    },
    question: {
      en: 'What is your IMMEDIATE FIRST ACTION upon encountering this critical clinical situation?',
      ar: 'ما هو الإجراء السريري الفوري الأول الذي تتخذه فور مواجهة هذه الحالة الطارئة؟'
    },
    options: [
      {
        id: 'A',
        text: {
          en: 'Slow down the transfusion rate to minimal KVO (Keep Vein Open) and administer 1000 mg oral paracetamol while monitoring for 15 minutes.',
          ar: 'تقليل سرعة نقل الدم إلى الحد الأدنى وإعطاء 1000 مجم باراسيتامول بالفم مع مراقبة المريضة لمدة 15 دقيقة'
        },
        isCorrect: false,
        feedback: {
          en: 'FATAL DELAY: Never slow an ABO reaction—even a few more milliliters can trigger irreversible disseminated intravascular coagulation (DIC), renal failure, and death.',
          ar: 'تأخير قاتل: يُمنع تقليل السرعة فقط عند الشك في تكسر الدم—أي قطرات إضافية قد تسبب تجلطاً منتشراً داخل الأوعية (DIC)، وفشلاً كلوياً حاداً، والوفاة'
        }
      },
      {
        id: 'B',
        text: {
          en: 'Immediately STOP the transfusion, disconnect blood tubing from IV cannula, hang fresh 0.9% Normal Saline via new tubing to maintain IV line, assess ABCs, and alert physician/Code.',
          ar: 'إيقاف نقل الدم فوراً، وفصل أنبوب الدم من مدخل القنية الوريدية، وتوصيل محلول ملحي 0.9% جديد بأنبوب نظيف للحفاظ على الوريد، وتقييم العلامات الحيوية وإبلاغ الطبيب/فريق الإنعاش'
        },
        isCorrect: true,
        feedback: {
          en: 'PERFECT ACTION! Disconnecting the blood set at the hub prevents flushing remaining blood in the line into the patient, while normal saline preserves hemodynamic stability and renal perfusion.',
          ar: 'إجراء متقن للغاية! فصل وصلة الدم عند عنق القنية يمنع دخول بقايا الدم في الأنبوب إلى المريض، بينما يحافظ المحلول الملحي الجديد على ضغط الدم والتروية الكلوية'
        }
      },
      {
        id: 'C',
        text: {
          en: 'Start logging into the Blood Bank transfusion reaction portal to fill out the mandatory adverse reaction investigation form before touching the infusion.',
          ar: 'البدء بتسجيل الدخول لبوابة بنك الدم لتعبئة النموذج الإجباري للتحقيق في التفاعلات العكسية قبل لمس جهاز النقل'
        },
        isCorrect: false,
        isPrematureReporting: true,
        feedback: {
          en: 'CRITICAL SAFETY FAILURE: Patient care always comes first! Leaving incompatible blood infusing while filling administrative forms leads to preventable mortality.',
          ar: 'فشل حرج في قواعد السلامة: إنقاذ المريض أولاً دائماً! استمرار تدفق الدم غير المتطابق أثناء تعبئة النماذج يودي بحياة المريض'
        }
      },
      {
        id: 'D',
        text: {
          en: 'Send the remaining blood bag and tubing back to the blood bank immediately via pneumatic tube without starting IV hydration.',
          ar: 'إرسال كيس الدم المتبقي والأنابيب فوراً لبنك الدم عبر الأنبوب الهوائي دون البدء بإعطاء سوائل وريدية'
        },
        isCorrect: false,
        feedback: {
          en: 'INCORRECT: Blood products should never be sent via pneumatic tube during a reaction, and failing to aggressively hydrate with IV saline invites acute tubular necrosis/renal shutdown.',
          ar: 'غير صحيح: لا تُرسل عينات تفاعل الدم عبر الأنبوب الهوائي، وإهمال إعطاء السوائل الوريدية فوراً يؤدي للفشل الكلوي الحاد'
        }
      }
    ],
    rationale: {
      goldenRule: {
        en: 'In transfusion reactions: Stop blood, disconnect tubing at hub, infuse fresh saline, maintain airway and kidney perfusion before sending lab notices or incident reports.',
        ar: 'في تفاعلات نقل الدم: أوقف الدم فوراً، افصل الأنبوب من القنية، علق محلولاً ملحياً جديداً، واحمِ مجرى التنفس والكلى قبل إرسال البلاغات'
      },
      immediateAction: {
        en: '1) Stop transfusion immediately. 2) Disconnect blood tubing at IV hub (do not flush blood into patient). 3) Run 0.9% NaCl with brand new IV set to maintain BP & diuresis (>100 mL/hr). 4) Administer emergency resuscitation (Oxygen, IV fluids, antihistamines/vasopressors as ordered)',
        ar: '1) إيقاف النقل فوراً. 2) فصل الأنبوب من عنق القنية لعدم دفع أي دم متبقي. 3) فتح محلول ملحي 0.9% بأنبوب جديد للحفاظ على ضغط الدم والبول (>100 مل/ساعة). 4) إجراءات الإنعاش بالأكسجين والسوائل ومثبطات الصدمة بأمر الطبيب'
      },
      reportingStep: {
        en: 'After the patient is resuscitated and stable: Send blood unit, administration set, and post-transfusion blood/urine samples to Blood Bank with transfusion reaction report, and log the clinical OVR.',
        ar: 'بعد استقرار حالة المريض وإنقاذه: يتم إرسال وحدة الدم والأنابيب وعينات دم وبول جديدة لبنك الدم مع تقرير التفاعل، ورفع بلاغ الحادث العارض (OVR)'
      }
    }
  },
  {
    id: 3,
    category: {
      en: 'Opioid & Post-Surgical Sedation Safety',
      ar: 'سلامة التسكين الأفيوني والمهدئات الجراحية'
    },
    department: {
      en: 'Surgical ICU / Stepdown Unit',
      ar: 'العناية المركزة الجراحية'
    },
    title: {
      en: 'Case 3: Severe Opioid-Induced Respiratory Depression with PCA Pump',
      ar: 'الحالة 3: هبوط تنفسي حاد ناجم عن التسكين الأفيوني الذاتي (PCA)'
    },
    patientInfo: {
      age: 62,
      gender: { en: 'Male', ar: 'ذكر' },
      room: 'Bed 108'
    },
    vitals: {
      hr: '52 bpm (Bradycardia)',
      bp: '92/56 mmHg',
      rr: '5 breaths/min (Bradypnea)',
      spo2: '79% on room air',
      extra: {
        label: { en: 'Sedation / Pupils', ar: 'درجة الوعي / الحدقة' },
        value: 'Unresponsive (POSS 4) / Pinpoint pupils'
      }
    },
    scenario: {
      en: 'A 62-year-old patient 18 hours post-exploratory laparotomy has a Patient-Controlled Analgesia (PCA) Morphine infusion running. Upon routine bedside round, you find the patient deeply cyanotic, snoring loudly, and completely unarousable to physical stimulation. Respiratory rate is critically depressed at 5 breaths per minute, SpO2 is 79%, and pupils are pinpoint (1mm). You notice the PCA demand button was resting in the palm of a visiting family member who was pressing it for the patient.',
      ar: 'مريض يبلغ 62 عاماً بعد جراحة استكشاف البطن بـ 18 ساعة، موصول بمضخة تسكين يتحكم بها المريض (PCA Morphine). عند مرورك الدوري، وجدت المريض مزرق الشفاه، يغط في شخير عميق، ولا يستجيب إطلاقاً للمنبهات الصوتية أو المؤلمة. معدل التنفس هبط إلى 5 أنفاس فقط بالدقيقة، ونسبة الأكسجين 79%، والحدقتان متضيقتان جداً (Pinpoint). لاحظت أن زر طلب الجرعة كان بيد أحد الزوار الذي كان يضغط عليه نيابة عن المريض'
    },
    question: {
      en: 'What is your IMMEDIATE FIRST ACTION upon encountering this critical clinical situation?',
      ar: 'ما هو الإجراء السريري الفوري الأول الذي تتخذه فور مواجهة هذه الحالة الطارئة؟'
    },
    options: [
      {
        id: 'A',
        text: {
          en: 'Turn off PCA pump, open airway (head-tilt/jaw-thrust), initiate bag-valve-mask ventilations with 100% O2, call Code Blue / Rapid Response, and administer IV Naloxone (Narcan)',
          ar: 'إيقاف مضخة التسكين فوراً، فتح مجرى التنفس، البدء بالتهوية عبر القناع والحقيبة (Ambu bag) بأكسجين 100%، استدعاء فريق الإنعاش وإعطاء النالوكسون (ناركان) وريدياً'
        },
        isCorrect: true,
        feedback: {
          en: 'LIFESAVING INTERVENTION! Reversing severe hypoxia with airway management, positive pressure ventilation, and opioid antagonist Naloxone immediately halts brain hypoxia.',
          ar: 'تدخل منقذ للحياة! عكس نقص الأكسجين الحاد بفتح مجرى التنفس والتهوية الإيجابية وإعطاء مضاد الأفيون (النالوكسون) يمنع تلف خلايا الدماغ وتوقف القلب'
        }
      },
      {
        id: 'B',
        text: {
          en: 'Confiscate the PCA handset from the family member and immediately fill out an unauthorized family intervention safety report on the clinical tablet.',
          ar: 'سحب جهاز التحكم من يد الزائر والبدء فوراً بكتابة بلاغ أمان بخصوص تدخل غير مصرح به من العائلة عبر الجهاز اللوحي'
        },
        isCorrect: false,
        isPrematureReporting: true,
        feedback: {
          en: 'DANGEROUS TRAP: Documenting family misconduct while a patient suffocates with an SpO2 of 79% is an egregious breach of patient safety priorities. Rescue the airway first!',
          ar: 'فخ خطير: كتابة بلاغ عن خطأ الزائر بينما المريض يختنق بنسبة أكسجين 79% يعد انتهاكاً لأبجديات سلامة المرضى. إنقاذ مجرى الهواء هو الأولوية المطلقة!'
        }
      },
      {
        id: 'C',
        text: {
          en: 'Draw arterial blood gases (ABG) and wait for the laboratory results to confirm hypercapnia before adjusting therapy.',
          ar: 'سحب عينة غازات الدم الشرياني (ABG) وانتظار نتائج المختبر لتأكيد احتباس ثاني أكسيد الكربون قبل التدخل'
        },
        isCorrect: false,
        feedback: {
          en: 'INCORRECT: Waiting for lab verification in profound clinical respiratory arrest wastes precious minutes; emergency ventilatory support and Naloxone cannot wait.',
          ar: 'غير صحيح: الانتظار للمختبر في حالة هبوط تنفسي حرج يُضيع دقائق حرجة؛ دعم التنفس وإعطاء النالوكسون إجراءات فورية لا تنتظر'
        }
      },
      {
        id: 'D',
        text: {
          en: 'Apply a standard nasal cannula at 2 L/min and apply a cold washcloth to the patient’s forehead to gently wake him up.',
          ar: 'وضع قنية أنفية بأكسجين 2 لتر/دقيقة ووضع كمادات باردة على جبهة المريض لمحاولة إيقاظه تدريجياً'
        },
        isCorrect: false,
        feedback: {
          en: 'INSUFFICIENT: A patient with RR of 5 and profound narcosis cannot ventilate spontaneously on 2L nasal cannula; active airway positioning, bag-valve-mask ventilations, and Naloxone are required.',
          ar: 'غير كافٍ نهائياً: مريض يتنفس 5 مرات بالدقيقة في غيبوبة أفيونية لا يستفيد من 2 لتر قنية أنفية؛ يحتاج تهوية إيجابية فورية ومضاد الأفيون'
        }
      }
    ],
    rationale: {
      goldenRule: {
        en: 'In life-threatening sedation / overdose: Airway, Breathing, Circulation (ABCs) and specific antidote (Naloxone) precede any root-cause interrogation or incident reporting.',
        ar: 'في حالات التسمم والمهدئات المهددة للحياة: مجرى الهواء والتنفس والدورة الدموية والترياق (نالوكسون) تسبق أي تحقيق أو توثيق إداري'
      },
      immediateAction: {
        en: '1) Stop PCA infusion immediately. 2) Stimulate patient, perform chin-lift/jaw-thrust. 3) Ventilate with Bag-Valve-Mask (BVM) and 100% O2. 4) Push IV Naloxone in incremental doses (0.1 - 0.2 mg every 2-3 mins) until ventilation restores.',
        ar: '1) إيقاف مضخة التسكين فوراً. 2) فتح مجرى الهواء برفع الذقن/دفع الفك. 3) التهوية الإيجابية بقناع وحقيبة أكسجين 100%. 4) إعطاء النالوكسون وريدياً بجرعات متدرجة (0.1 - 0.2 مجم) حتى عودة التنفس الطبيعي'
      },
      reportingStep: {
        en: 'Once spontaneous respiration and consciousness normalize and the patient is transferred to close telemetry monitoring: Educate the family, lock the PCA device, download pump history logs, and file the patient safety occurrence report.',
        ar: 'بعد استعادة التنفس التلقائي والوعي ووضع المريض تحت المراقبة اللصيقة: يتم تثقيف الزوار، وقفل الجهاز وتفريغ سجل المضخة للتحقيق، وتعبئة بلاغ الحادث العارض'
      }
    }
  },
  {
    id: 4,
    category: {
      en: 'Diabetic Medication & Glycemic Safety',
      ar: 'سلامة أدوية السكري والتحكم بنقص السكر'
    },
    department: {
      en: 'Endocrinology & Internal Medicine Unit',
      ar: 'وحدة الغدد الصماء والأمراض الباطنية'
    },
    title: {
      en: 'Case 4: Inadvertent Rapid-Acting Insulin Overdose Induced Hypoglycemia',
      ar: 'الحالة 4: هبوط سكر دم حاد ناتج عن خطأ في نوع وجرعة الإنسولين'
    },
    patientInfo: {
      age: 51,
      gender: { en: 'Female', ar: 'أنثى' },
      room: 'Bed 419'
    },
    vitals: {
      hr: '124 bpm (Sinus Tachycardia)',
      bp: '100/60 mmHg',
      rr: '22 /min',
      spo2: '97%',
      extra: {
        label: { en: 'Point-of-Care Capillary Glucose', ar: 'مستوى السكر بالدم' },
        value: '26 mg/dL (1.4 mmol/L) - CRITICAL LOW'
      }
    },
    scenario: {
      en: 'A 51-year-old inpatient with Type 2 Diabetes accidentally received 30 units of rapid-acting Insulin Aspart (Novorapid) instead of 30 units of long-acting Insulin Glargine (Lantus) due to look-alike packaging on the medication cart. 40 minutes later, the nurse assistant alerts you that the patient is drenched in cold sweat, shaking violently, unable to speak, and sliding off the side of the bed into an unresponsive coma. Point-of-care fingerstick blood glucose reads 26 mg/dL (1.4 mmol/L)',
      ar: 'مريضة تبلغ 51 عاماً منومة ومصابة بالسكري، أُعطيت بالخطأ 30 وحدة من إنسولين سريع المفعول (نوفورابيد) بدلاً من 30 وحدة إنسولين بطيء (لانتوس) بسبب تشابه عبوات الأدوية. بعد 40 دقيقة، نبهك المساعد الصحي أن المريضة غارقة في عرق بارد، وترتجف بعنف، وعاجزة عن الكلام، وتنزلق عن السرير فاقدة للوعي تماماً. فحص وخز الإصبع أظهر سكر دم حرج جداً: 26 مجم/دسل (1.4 ملمول/لتر)'
    },
    question: {
      en: 'What is your IMMEDIATE FIRST ACTION upon encountering this critical clinical situation?',
      ar: 'ما هو الإجراء السريري الفوري الأول الذي تتخذه فور مواجهة هذه الحالة الطارئة؟'
    },
    options: [
      {
        id: 'A',
        text: {
          en: 'Attempt to force the patient to drink 200 mL of sweetened fruit juice with sugar packets through a straw while sitting upright.',
          ar: 'محاولة إجبار المريضة على شرب 200 مل من عصير الفواكه المحلى بالسكر باستخدام مصاصة أثناء إجلاسها'
        },
        isCorrect: false,
        feedback: {
          en: 'ASPIRATION RISK: Never administer oral fluids or food to an unarousable or comatose patient—this causes fatal pulmonary aspiration and airway compromise.',
          ar: 'خطر الاختناق: يُمنع نهائياً إعطاء سوائل أو أطعمة بالفم لمريض فاقد للوعي—ذلك يسبب استنشاقاً رئوياً حاداً وانسداد مجرى الهواء'
        }
      },
      {
        id: 'B',
        text: {
          en: 'Protect airway, position safely, push 50 mL of 50% Dextrose (D50W) IV over 3-5 mins (or 10% Dextrose/Glucagon if needed), maintain IV line, and repeat glucose in 10-15 mins.',
          ar: 'تأمين مجرى الهواء والوضعية الآمنة، وحقن 50 مل من دكستروز 50% (D50W) وريدياً خلال 3-5 دقائق (أو دكستروز 10%/جلوكاجون)، وتكرار فحص السكر بعد 10-15 دقيقة'
        },
        isCorrect: true,
        feedback: {
          en: 'EXCELLENT RESCUE! Rapid intravenous glucose directly reverses neuroglycopenia, protecting neurons from irreversible ischemic damage before any documentation.',
          ar: 'إنقاذ ممتاز! حقن الجلوكوز الوريدي الفوري يعكس نقص سكر الدماغ ويحمي الخلايا العصبية من التلف قبل الانشغال بأي توثيق'
        }
      },
      {
        id: 'C',
        text: {
          en: 'Call the clinical pharmacy supervisor to log an urgent Look-Alike/Sound-Alike (LASA) medication packaging alert immediately.',
          ar: 'الاتصال بمشرف الصيدلية السريرية لرفع تنبيه عاجل بشأن تشابه عبوات الأدوية (LASA) قبل التعامل مع السكر'
        },
        isCorrect: false,
        isPrematureReporting: true,
        feedback: {
          en: 'DANGEROUS MISTAKE: While LASA reporting is vital for systemic prevention, doing so while the patient’s blood sugar is 26 mg/dL causes brain death. Stabilize the patient first!',
          ar: 'خطأ جسيم: الإبلاغ عن تشابه العبوات مهم جداً للنظام ككل، ولكن القيام به وسكر المريضة 26 مجم/دسل يؤدي لتلف الدماغ والوفاة. استقرار المريض أولاً!'
        }
      },
      {
        id: 'D',
        text: {
          en: 'Wait 30 minutes to see if the patient recovers spontaneously, and delay lunch tray until the endocrinologist completes rounds.',
          ar: 'الانتظار 30 دقيقة لمعرفة ما إذا كانت المريضة ستستعيد وعيها تلقائياً، وتأجيل وجبة الغداء حتى مرور أخصائي الغدد'
        },
        isCorrect: false,
        feedback: {
          en: 'INCORRECT: Severe symptomatic hypoglycemia with blood glucose < 54 mg/dL is a medical emergency that never resolves spontaneously without glucose resuscitation.',
          ar: 'غير صحيح: هبوط السكر الحرج بأقل من 54 مجم/دسل طارئ طبي خطير لا يزول تلقائياً ويتطلب إسعافاً فورياً بالسكر الوريدي'
        }
      }
    ],
    rationale: {
      goldenRule: {
        en: 'Protect the brain first: Severe hypoglycemia causes irreversible neural damage within minutes. Correct blood glucose and re-evaluate vital signs before filling incident logs.',
        ar: 'حماية الدماغ أولاً: هبوط السكر الحاد يتلف الخلايا العصبية خلال دقائق معدودة. تصحيح سكر الدم ومراقبة العلامات الحيوية يسبق أي بلاغ'
      },
      immediateAction: {
        en: '1) Airway protection & recovery position. 2) Administer 50 mL of D50W IV bolus (or continuous 10% Dextrose infusion). 3) Recheck capillary blood glucose in 10-15 minutes. 4) Continuous neurological and vital sign checks.',
        ar: '1) حماية مجرى الهواء والوضعية المناسبة. 2) حقن 50 مل دكستروز 50% وريدياً أو تسريب دكستروز 10%. 3) إعادة فحص سكر الدم خلال 10-15 دقيقة. 4) المراقبة المستمرة لدرجة الوعي والعلامات الحيوية'
      },
      reportingStep: {
        en: 'Once the patient is awake, alert, and stabilized with blood glucose maintained > 100 mg/dL: Conduct a safety huddle, identify LASA insulin storage factors, and complete the incident report for hospital-wide system improvements.',
        ar: 'بعد استعادة المريضة كامل وعيها واستقرار السكر فوق 100 مجم/دسل: يتم عمل وقفة سلامة (Safety Huddle) لبحث أسباب الخطأ في الصيدلية، ورفع بلاغ الحادث لمنع تكرار الخطأ مستقبلاً'
      }
    }
  },
  {
    id: 5,
    category: {
      en: 'Fall Prevention & Anticoagulation Safety',
      ar: 'سلامة السقوط ومخاطر مضادات التخثر'
    },
    department: {
      en: 'Cardiology & Geriatric Care Ward',
      ar: 'جناح القلب ورعاية كبار السن'
    },
    title: {
      en: 'Case 5: Unwitnessed Fall with Head Trauma on Therapeutic Anticoagulant',
      ar: 'الحالة 5: سقوط غير مشهود للمريض مع إصابة بالرأس وتناول مسيلات الدم'
    },
    patientInfo: {
      age: 74,
      gender: { en: 'Male', ar: 'ذكر' },
      room: 'Bed 502'
    },
    vitals: {
      hr: '56 bpm (Bradycardia)',
      bp: '178/96 mmHg (Cushing-like hypertension)',
      rr: '14 /min (Irregular)',
      spo2: '95%',
      extra: {
        label: { en: 'Medications / GCS', ar: 'الأدوية / مقياس غلاسكو' },
        value: 'Therapeutic Warfarin (INR 3.2) / GCS 12 (Unequal pupils)'
      }
    },
    scenario: {
      en: 'A 74-year-old male with atrial fibrillation receiving therapeutic Warfarin (INR 3.2) is found lying on the bathroom tile floor, moaning and disoriented. There is a 4 cm actively oozing scalp laceration on his occiput, and on pupillary examination, the left pupil is 5mm and sluggishly reactive while the right is 3mm. You hear a nursing student suggest: "Let us quickly lift him back into bed before the supervisor comes so we can file the fall report." ',
      ar: 'مريض يبلغ 74 عاماً يعاني من رجفان أذيني ويتناول الوارفارين بجرعة علاجية (معدل السيولة INR 3.2)، وُجد ملقى على أرضية الحمام يئن وفي حالة تشوش ذهني. يوجد جرح نازف بطول 4 سم في فروة الرأس من الخلف، وفحص الحدقتين أظهر أن الحدقة اليسرى 5 ملم وبطيئة الاستجابة بينما اليمنى 3 ملم. سمعت متدرباً يقترح: "دعنا نرفعه بسرعة للسرير قبل قدوم المشرف ونذهب لتعبئة بلاغ السقوط".'
    },
    question: {
      en: 'What is your IMMEDIATE FIRST ACTION upon encountering this critical clinical situation?',
      ar: 'ما هو الإجراء السريري الفوري الأول الذي تتخذه فور مواجهة هذه الحالة الطارئة؟'
    },
    options: [
      {
        id: 'A',
        text: {
          en: 'Immediately lift and walk the patient back to bed, take photos of the bathroom floor for the incident report, and clean up the water puddle.',
          ar: 'رفع المريض ومساعدته على المشي للسرير فوراً، والتقاط صور لأرضية الحمام لإرفاقها بالبلاغ وتنظيف بقع الماء'
        },
        isCorrect: false,
        feedback: {
          en: 'HIGH RISK OF PARALYSIS: Never mobilize a fallen patient with potential cervical spine injury or intracranial bleed without spinal precautions!',
          ar: 'خطر شلل رباعي حاد: يُمنع تحريك أي مريض سقط مع احتمال إصابة في الرقبة أو نزيف دماغي دون تثبيت الفقرات العنقية أولاً!'
        }
      },
      {
        id: 'B',
        text: {
          en: 'Immobilize cervical spine, assess ABCs & GCS, call Rapid Response/Trauma Stat, apply gentle sterile pressure to scalp bleed, and prep for urgent non-contrast Head CT & reversal.',
          ar: 'تثبيت العمود الفقري العنقي، وتقييم مجرى التنفس ومقياس غلاسكو، واستدعاء فريق الطوارئ/الاستجابة السريعة، والضغط المعقم على جرح الرأس، والتجهيز للأشعة المقطعية العاجلة وعكس التخثر'
        },
        isCorrect: true,
        feedback: {
          en: 'OUTSTANDING CLINICAL DISCIPLINE! Preventing secondary spinal cord injury, identifying signs of intracranial hemorrhage (anisocoria), and emergency imaging take top precedence.',
          ar: 'انضباط سريري رفيع! حماية الحبل الشوكي العنقي، واكتشاف علامات نزيف الدماغ (تفاوت الحدقات)، والطلب العاجل للأشعة وعكس التخثر هي الأولوية القصوى'
        }
      },
      {
        id: 'C',
        text: {
          en: 'Leave the patient on the floor and go directly to the computer terminal to submit the mandatory Yellow Fall Incident Notification.',
          ar: 'ترك المريض على الأرض والتوجه مباشرة لجهاز الحاسب لتعبئة نموذج إشعار السقوط الإجباري'
        },
        isCorrect: false,
        isPrematureReporting: true,
        feedback: {
          en: 'UNACCEPTABLE ABANDONMENT: An elderly anticoagulated patient with head trauma is in critical danger of herniation. Clinical assessment and trauma call always precede reporting.',
          ar: 'تخلٍ غير مقبول عن المريض: مريض يتناول مسيلات الدم مصاب بالرأس معرض للفتق الدماغي والنزيف المميت. الفحص والإنقاذ الطبي يسبق رفع التقارير'
        }
      },
      {
        id: 'D',
        text: {
          en: 'Give 1000 mg aspirin orally to relieve the headache and re-apply fall-risk yellow socks.',
          ar: 'إعطاء المريض 1000 مجم أسبرين عن طريق الفم لتسكين الصداع وإلباسه الجوارب الصفراء المخصصة لمخاطر السقوط'
        },
        isCorrect: false,
        feedback: {
          en: 'CATASTROPHIC: Giving antiplatelet Aspirin to a patient actively bleeding with an INR of 3.2 accelerates catastrophic intracranial hemorrhage!',
          ar: 'كارثة طبية: إعطاء الأسبرين لمريض مصاب بنزيف محتمل ولديه سيولة دم INR 3.2 يفاقم النزيف الدماغي بصورة مميتة!'
        }
      }
    ],
    rationale: {
      goldenRule: {
        en: 'Never move a fallen patient before spinal evaluation; in anticoagulated patients, treat all head trauma as life-threatening intracranial hemorrhage until CT proves otherwise.',
        ar: 'لا تحرك مريض السقوط قبل تقييم العمود الفقري؛ وفي مرضى مسيلات الدم، تُعامل أي إصابة رأس كنزيف دماغي طارئ حتى تثبت الأشعة المقطعية العكس'
      },
      immediateAction: {
        en: '1) Manual in-line cervical stabilization. 2) Check ABCs, GCS, and pupillary signs. 3) Activate Code/Rapid Response and order emergent non-contrast Head CT. 4) Apply gentle compression to scalp bleed and prepare Vitamin K / 4-Factor Prothrombin Complex Concentrate (PCC) as ordered.',
        ar: '1) تثبيت يدوي للفقرات العنقية في خط مستقيم. 2) فحص العلامات الحيوية، مقياس غلاسكو، والحدقتين. 3) استدعاء فريق الطوارئ والطلب العاجل للأشعة المقطعية للرأس. 4) الضغط المعقم على جرح الرأس وتجهيز فيتامين K أو مركز عوامل التخثر (PCC) بأمر الطبيب'
      },
      reportingStep: {
        en: 'After the patient is safely transferred via log-roll spine board, scanned, and placed under neurosurgical intensive monitoring: Convene a post-fall debriefing huddle, inspect environmental hazards, and complete the comprehensive fall incident report.',
        ar: 'بعد نقل المريض بأمان باستخدام لوح الظهر وتثبيت الرقبة، وإجراء الأشعة والمتابعة في العناية العصبية: يتم عقد اجتماع وقفة سلامة وفحص أرضية الحمام وتوثيق بلاغ السقوط الشامل'
      }
    }
  }
];
