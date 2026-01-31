export const serviceData: Record<
  string,
  {
    title: string
    intro: string
    overview: string
    whoNeedsIt: string[]
    symptoms?: string[]
    diagnosis?: string
    treatment: string
    recovery?: string
    faqs: { question: string; answer: string }[]
  }
> = {
  "cataract-surgery": {
    title: "Customized Cataract Surgeries",
    intro: "Advanced, painless cataract surgery with premium IOL options for crystal-clear vision restoration.",
    overview:
      "Cataract surgery is one of the most common and successful procedures performed worldwide. At Amma Eye Care, we use advanced phacoemulsification technology to remove clouded lenses and replace them with customized intraocular lenses (IOLs) tailored to your vision needs.",
    whoNeedsIt: [
      "Adults over 50 experiencing cloudy or blurred vision",
      "Patients with difficulty driving at night or in bright light",
      "Individuals with frequent prescription changes",
      "Those experiencing faded colors or double vision",
      "Anyone whose daily activities are affected by vision problems",
    ],
    symptoms: [
      "Cloudy or blurry vision",
      "Difficulty seeing at night",
      "Sensitivity to light and glare",
      "Seeing halos around lights",
      "Fading or yellowing of colors",
      "Double vision in one eye",
      "Frequent prescription changes",
    ],
    diagnosis:
      "Our comprehensive eye examination includes visual acuity tests, slit-lamp examination, retinal examination, and IOL power calculation using advanced biometry. We also perform OCT scans to assess overall eye health before surgery.",
    treatment:
      "We perform blade-free phacoemulsification under topical anesthesia. The procedure takes 15-20 minutes and is completely painless. We offer premium IOL options including monofocal, multifocal, and toric lenses to reduce dependency on glasses after surgery.",
    recovery:
      "Most patients notice improved vision within 24 hours. Complete recovery takes 4-6 weeks. You'll need to use prescribed eye drops and avoid strenuous activities for a few weeks. Follow-up visits are scheduled at 1 day, 1 week, and 1 month post-surgery.",
    faqs: [
      {
        question: "Is cataract surgery painful?",
        answer:
          "No, the procedure is performed under topical anesthesia and is completely painless. You may feel slight pressure but no pain during the surgery.",
      },
      {
        question: "How long does the surgery take?",
        answer: "The actual procedure takes 15-20 minutes per eye. You'll be at the hospital for 2-3 hours total.",
      },
      {
        question: "Will I need glasses after surgery?",
        answer:
          "It depends on the IOL chosen. Premium multifocal or toric lenses can significantly reduce or eliminate the need for glasses.",
      },
      {
        question: "When can I return to normal activities?",
        answer:
          "Most patients can resume light activities within a few days. Avoid heavy lifting and swimming for 4 weeks.",
      },
      {
        question: "Is the procedure covered by insurance?",
        answer:
          "Yes, cataract surgery is typically covered by insurance. We offer cashless facility with major insurance providers.",
      },
    ],
  },
  lasik: {
    title: "LASIK - Freedom from Glasses & Contact Lens",
    intro: "Blade-free laser vision correction for permanent freedom from glasses and contact lenses.",
    overview:
      "LASIK (Laser-Assisted In Situ Keratomileusis) is an FDA-approved, safe, and effective procedure that reshapes the cornea to correct refractive errors. Our advanced blade-free technology ensures precise, customized treatment for each patient.",
    whoNeedsIt: [
      "Adults 18+ with stable vision for at least one year",
      "Patients with myopia, hyperopia, or astigmatism",
      "Those tired of wearing glasses or contact lenses",
      "Active individuals and sports enthusiasts",
      "Professionals in fields where glasses are inconvenient",
    ],
    symptoms: [
      "Nearsightedness (myopia)",
      "Farsightedness (hyperopia)",
      "Astigmatism",
      "Dependence on glasses or contacts",
      "Difficulty with night vision",
    ],
    diagnosis:
      "Comprehensive pre-LASIK evaluation includes corneal topography, pachymetry (corneal thickness measurement), wavefront analysis, pupil size assessment, and complete eye health screening to ensure you're a suitable candidate.",
    treatment:
      "The procedure uses an advanced femtosecond laser to create a corneal flap, followed by excimer laser to reshape the cornea. The entire process takes 10-15 minutes for both eyes. Most patients achieve 20/20 vision or better.",
    recovery:
      "Vision improves immediately, with most patients returning to work within 1-2 days. Complete healing takes 3-6 months. You'll need to use prescribed drops and avoid rubbing your eyes. Follow-ups are at 1 day, 1 week, 1 month, and 3 months.",
    faqs: [
      {
        question: "Am I a good candidate for LASIK?",
        answer:
          "Ideal candidates are 18+, have stable vision, healthy corneas, and no autoimmune diseases. A comprehensive evaluation will determine your suitability.",
      },
      {
        question: "Is LASIK permanent?",
        answer:
          "Yes, LASIK permanently reshapes the cornea. However, age-related changes may still occur after 40, possibly requiring reading glasses.",
      },
      {
        question: "Does LASIK hurt?",
        answer:
          "No, the procedure is painless. Numbing drops are used, and you may feel slight pressure. Some experience mild discomfort for 6-12 hours post-surgery.",
      },
      {
        question: "How soon can I see clearly?",
        answer:
          "Most patients notice improved vision within hours. Vision continues to stabilize over the following weeks.",
      },
      {
        question: "What if I'm not suitable for LASIK?",
        answer: "We offer alternative procedures like ICL for high prescriptions or thin corneas.",
      },
    ],
  },
  icl: {
    title: "ICL - For Those Not Suitable for LASIK",
    intro: "Implantable Collamer Lens for high refractive errors and patients unsuitable for LASIK.",
    overview:
      "ICL (Implantable Collamer Lens) is an advanced refractive surgery option for patients with high prescriptions or thin corneas who aren't suitable for LASIK. The lens is implanted between the iris and natural lens, providing excellent vision quality without altering corneal structure.",
    whoNeedsIt: [
      "Patients with high myopia or hyperopia",
      "Those with thin corneas unsuitable for LASIK",
      "Patients with dry eyes",
      "Young patients wanting reversible vision correction",
      "Athletes and active individuals",
    ],
    symptoms: [
      "Very high prescription (-3 to -20 D)",
      "Thin corneas",
      "Unsuitable for LASIK",
      "Severe dependence on glasses",
      "Poor quality of vision with glasses",
    ],
    diagnosis:
      "Comprehensive evaluation includes corneal topography, anterior chamber depth measurement, endothelial cell count, and complete eye examination to ensure adequate space for lens implantation.",
    treatment:
      "The procedure involves implanting a biocompatible lens through a micro-incision. It takes 15-20 minutes per eye and is performed under topical anesthesia. The lens is invisible and requires no maintenance.",
    recovery:
      "Vision improves within 24 hours. Most patients resume normal activities within 2-3 days. Complete healing takes 4-6 weeks with minimal restrictions compared to LASIK.",
    faqs: [
      {
        question: "How is ICL different from LASIK?",
        answer:
          "ICL involves implanting a lens inside the eye, while LASIK reshapes the cornea. ICL is reversible and suitable for higher prescriptions.",
      },
      {
        question: "Is ICL permanent?",
        answer:
          "Yes, but the lens can be removed or replaced if needed, making it a reversible procedure unlike LASIK.",
      },
      {
        question: "Can I feel the lens inside my eye?",
        answer:
          "No, the ICL is completely invisible and causes no sensation. Only your eye doctor can see it during examination.",
      },
      {
        question: "What's the recovery time?",
        answer: "Most patients return to work within 2-3 days with excellent vision. Complete healing takes 4-6 weeks.",
      },
      {
        question: "Will I still get cataracts?",
        answer:
          "ICL doesn't prevent age-related cataracts, but if they develop, the lens can be removed during cataract surgery.",
      },
    ],
  },
  glaucoma: {
    title: "Glaucoma Services",
    intro: "Comprehensive diagnosis, treatment, and management to preserve your vision and prevent glaucoma damage.",
    overview:
      "Glaucoma is a group of eye conditions that damage the optic nerve, often due to elevated intraocular pressure. Early detection and proper management are crucial to prevent irreversible vision loss. We offer advanced diagnostic tools and comprehensive treatment options.",
    whoNeedsIt: [
      "Adults over 40, especially with family history",
      "Patients with high eye pressure",
      "Those with diabetes or hypertension",
      "Individuals experiencing peripheral vision loss",
      "Patients with previous eye injuries or surgeries",
    ],
    symptoms: [
      "Gradual loss of peripheral vision",
      "Tunnel vision in advanced stages",
      "Eye pain or redness (acute glaucoma)",
      "Blurred vision",
      "Seeing halos around lights",
      "Headaches",
      "Nausea and vomiting (acute cases)",
    ],
    diagnosis:
      "Comprehensive glaucoma evaluation includes tonometry (eye pressure measurement), visual field testing, OCT imaging of the optic nerve, gonioscopy to examine drainage angles, and pachymetry for corneal thickness.",
    treatment:
      "Treatment depends on the type and severity. Options include prescription eye drops to lower pressure, laser trabeculoplasty, selective laser treatment (SLT), and surgical procedures for advanced cases. Regular monitoring is essential for all patients.",
    recovery:
      "Glaucoma is a chronic condition requiring lifelong management. With proper treatment and regular follow-ups every 3-6 months, most patients maintain their vision. Compliance with prescribed medications is crucial.",
    faqs: [
      {
        question: "Can glaucoma be cured?",
        answer:
          "Glaucoma cannot be cured, but it can be effectively managed. Early detection and treatment can prevent vision loss.",
      },
      {
        question: "Will I go blind from glaucoma?",
        answer:
          "Not necessarily. With early detection, proper treatment, and regular monitoring, most patients maintain functional vision throughout their lives.",
      },
      {
        question: "Are eye drops enough to treat glaucoma?",
        answer:
          "For many patients, yes. Eye drops effectively lower pressure and prevent progression. Some may require laser or surgery.",
      },
      {
        question: "How often should I get checked?",
        answer:
          "Initially every 3-6 months. Once stable, annual exams may suffice. Your doctor will determine the schedule.",
      },
      {
        question: "Is glaucoma hereditary?",
        answer:
          "Yes, family history increases risk 4-9 times. If you have relatives with glaucoma, get screened annually after age 40.",
      },
    ],
  },
  "children-eye-checkup": {
    title: "Children's Eye Checkup",
    intro: "Comprehensive pediatric eye examinations for early detection and treatment of vision problems in children.",
    overview:
      "Children's vision develops rapidly in the early years. Regular eye checkups are essential to detect and treat vision problems that could affect learning and development. Our child-friendly approach ensures a comfortable, stress-free experience.",
    whoNeedsIt: [
      "All children for routine screening at ages 6 months, 3 years, and before starting school",
      "Children struggling academically or with reading",
      "Kids complaining of headaches or eye strain",
      "Children sitting too close to TV or holding books close",
      "Those with family history of eye problems",
    ],
    symptoms: [
      "Squinting or closing one eye",
      "Sitting too close to screens",
      "Frequent headaches",
      "Eye rubbing",
      "Poor hand-eye coordination",
      "Short attention span",
      "Avoiding reading or close work",
      "Head tilting",
    ],
    diagnosis:
      "Age-appropriate comprehensive examination includes visual acuity testing, refraction, eye alignment and movement assessment, focusing ability, color vision testing, and dilated eye examination to check internal eye health.",
    treatment:
      "Treatment varies based on findings and may include prescription glasses, patching therapy for lazy eye (amblyopia), vision therapy exercises, or referral for specialized treatment. Early intervention is key for best outcomes.",
    recovery:
      "With timely treatment, most childhood vision problems can be corrected or significantly improved. Regular follow-ups every 6-12 months ensure proper vision development and prescription updates as needed.",
    faqs: [
      {
        question: "When should my child have their first eye exam?",
        answer:
          "First exam at 6 months, then at age 3, and before starting school. Annual exams are recommended thereafter.",
      },
      {
        question: "How do you test babies and toddlers?",
        answer:
          "We use age-appropriate techniques including visual behavior observation, pupil responses, and specialized testing that doesn't require verbal responses.",
      },
      {
        question: "Will glasses affect my child's eye development?",
        answer:
          "No, properly prescribed glasses support normal eye development. Delaying glasses can actually worsen certain conditions.",
      },
      {
        question: "Can screen time damage my child's eyes?",
        answer:
          "Excessive screen time can cause eye strain and contribute to myopia progression. We recommend the 20-20-20 rule and outdoor time.",
      },
      {
        question: "What is lazy eye and can it be treated?",
        answer:
          "Amblyopia (lazy eye) occurs when one eye doesn't develop properly. It's treatable with glasses, patching, or drops if caught early.",
      },
    ],
  },
  "digital-eye-strain": {
    title: "Digital Eye Strain Treatment",
    intro: "Comprehensive relief from computer vision syndrome and screen-related eye problems.",
    overview:
      "Digital eye strain, also known as computer vision syndrome, affects millions of people who spend extended time on digital devices. Symptoms can significantly impact productivity and quality of life. We offer specialized treatments and preventive strategies.",
    whoNeedsIt: [
      "Office workers spending 6+ hours on computers",
      "Students with heavy screen time",
      "Gamers and content creators",
      "Anyone experiencing eye discomfort after screen use",
      "Remote workers without proper ergonomic setup",
    ],
    symptoms: [
      "Eye fatigue and tiredness",
      "Dry, irritated eyes",
      "Blurred vision",
      "Headaches",
      "Neck and shoulder pain",
      "Difficulty focusing",
      "Increased sensitivity to light",
      "Burning sensation in eyes",
    ],
    diagnosis:
      "Comprehensive evaluation includes refraction for computer-specific prescription, tear film assessment, focusing ability testing, binocular vision evaluation, and ergonomic assessment of workstation setup.",
    treatment:
      "Customized treatment plan may include computer glasses with blue light filtering, lubricating eye drops, vision therapy exercises, ergonomic recommendations, and lifestyle modifications following the 20-20-20 rule.",
    recovery:
      "Most patients experience significant relief within 2-4 weeks of starting treatment and implementing recommended changes. Regular breaks and proper ergonomics are essential for long-term management.",
    faqs: [
      {
        question: "What is the 20-20-20 rule?",
        answer:
          "Every 20 minutes, look at something 20 feet away for at least 20 seconds. This helps relax eye muscles and reduce strain.",
      },
      {
        question: "Do blue light glasses really help?",
        answer:
          "Yes, they can reduce eye strain and improve comfort for many people. Combined with proper ergonomics, they're quite effective.",
      },
      {
        question: "Is digital eye strain permanent?",
        answer:
          "No, symptoms are temporary and reversible with proper treatment and lifestyle changes. However, chronic strain can affect productivity.",
      },
      {
        question: "How far should my screen be?",
        answer:
          "Position your screen 20-26 inches away, slightly below eye level. The top of the screen should be at or below eye level.",
      },
      {
        question: "Can screen time cause permanent damage?",
        answer:
          "Current research shows screens don't cause permanent damage, but excessive use can contribute to myopia progression in children.",
      },
    ],
  },
  "computerized-eye-testing": {
    title: "Computerized Eye Testing",
    intro: "Advanced automated eye testing for precise diagnosis and prescription accuracy.",
    overview:
      "Our computerized eye testing uses advanced autorefractor and retinoscopy technology to accurately measure refractive errors and provide precise prescriptions. This automated approach is faster, more objective, and especially helpful for children and patients who have difficulty with traditional testing methods.",
    whoNeedsIt: [
      "Anyone needing an eye examination",
      "Children who need accurate testing",
      "Patients with communication difficulties",
      "Those requiring precise prescription measurements",
      "Individuals seeking comprehensive eye health screening",
    ],
    diagnosis:
      "Computerized testing includes autorefraction, corneal topography, pupillometry, wavefront aberrometry, and automated visual field testing for comprehensive eye analysis.",
    treatment:
      "Based on test results, treatment may include prescription glasses or contact lenses, referral for refractive surgery, or further diagnostic testing if abnormalities are detected.",
    faqs: [
      {
        question: "Is computerized testing more accurate?",
        answer:
          "Yes, it provides objective measurements that are highly accurate and reproducible, especially useful for pediatric patients.",
      },
      {
        question: "How long does the test take?",
        answer: "Most computerized tests take 5-10 minutes per eye and are completely non-invasive.",
      },
      {
        question: "Is it suitable for children?",
        answer: "It's ideal for children as it requires minimal cooperation and is quick and comfortable.",
      },
    ],
  },
  "retina-services": {
    title: "Retina Services",
    intro: "Comprehensive medical and surgical retina care for retinal diseases and conditions.",
    overview:
      "Our retina services provide diagnosis and treatment for various retinal conditions including diabetic retinopathy, age-related macular degeneration, retinal detachment, and macular holes. We use advanced imaging and treatment modalities including laser therapy and intravitreal injections.",
    whoNeedsIt: [
      "Diabetic patients requiring retinal screening",
      "Individuals with sudden vision loss or floaters",
      "Patients with age-related macular degeneration",
      "Those diagnosed with retinal tears or detachment",
      "Anyone with family history of retinal diseases",
    ],
    symptoms: [
      "Sudden appearance of floaters",
      "Flashes of light",
      "Shadow or curtain in vision",
      "Distorted or wavy vision",
      "Central vision loss",
      "Difficulty seeing in dim light",
    ],
    diagnosis:
      "Comprehensive retinal examination includes dilated fundus exam, OCT imaging, fundus photography, fluorescein angiography, and ultrasound when needed.",
    treatment:
      "Treatment options include anti-VEGF injections, laser photocoagulation, intravitreal medications, and surgical procedures like vitrectomy for complex cases.",
    faqs: [
      {
        question: "What is diabetic retinopathy?",
        answer:
          "It's damage to retinal blood vessels caused by diabetes. Early detection through regular screening can prevent vision loss.",
      },
      {
        question: "Are retinal injections painful?",
        answer:
          "The procedure is performed with topical anesthesia and is generally well-tolerated with minimal discomfort.",
      },
      {
        question: "Can retinal detachment be repaired?",
        answer: "Yes, early surgical intervention has high success rates. Immediate treatment is crucial.",
      },
    ],
  },
  "diabetic-retinopathy-screening": {
    title: "Diabetic Retinopathy Screening",
    intro: "Essential eye screening for diabetic patients to prevent vision-threatening complications.",
    overview:
      "Diabetic retinopathy is a leading cause of blindness in working-age adults. Regular screening allows early detection and timely treatment to prevent irreversible vision loss. We recommend annual screening for all diabetic patients.",
    whoNeedsIt: [
      "All patients with Type 1 or Type 2 diabetes",
      "Diabetics experiencing vision changes",
      "Patients with poorly controlled blood sugar",
      "Those with diabetes duration over 5 years",
      "Pregnant women with gestational diabetes",
    ],
    symptoms: [
      "Blurred or fluctuating vision",
      "Dark spots or floaters",
      "Difficulty seeing at night",
      "Vision loss (in advanced stages)",
      "Colors appearing faded",
    ],
    diagnosis:
      "Screening includes dilated fundus examination, retinal photography, OCT imaging to assess macular thickness, and fluorescein angiography if needed.",
    treatment:
      "Treatment depends on stage and may include blood sugar control, laser photocoagulation, anti-VEGF injections, or vitrectomy surgery for advanced cases.",
    faqs: [
      {
        question: "How often should diabetics get screened?",
        answer: "Annual screening is recommended. More frequent visits may be needed if retinopathy is detected.",
      },
      {
        question: "Can diabetic retinopathy be reversed?",
        answer:
          "Early stages can be managed with blood sugar control. Advanced stages require treatment to prevent progression.",
      },
      {
        question: "Is screening covered by insurance?",
        answer: "Yes, diabetic eye screening is typically covered by most insurance plans.",
      },
    ],
  },
  "squint-correction": {
    title: "Squint Correction (Strabismus Surgery)",
    intro: "Surgical and non-surgical treatment for eye misalignment in children and adults.",
    overview:
      "Squint or strabismus is a condition where eyes are misaligned. It can affect children and adults, impacting both appearance and vision. We offer comprehensive evaluation and treatment options including glasses, vision therapy, and surgical correction.",
    whoNeedsIt: [
      "Children with crossed or wandering eyes",
      "Adults with acquired squint after injury or illness",
      "Patients with double vision",
      "Those with amblyopia (lazy eye)",
      "Anyone concerned about eye alignment",
    ],
    symptoms: [
      "Eyes pointing in different directions",
      "Double vision",
      "Head tilting to see better",
      "Poor depth perception",
      "Eye strain or fatigue",
    ],
    diagnosis:
      "Comprehensive evaluation includes visual acuity testing, cover test, measurement of deviation angle, assessment of binocular vision, and evaluation of eye muscle function.",
    treatment:
      "Treatment may include prescription glasses, vision therapy exercises, patching for amblyopia, and surgical realignment of eye muscles for persistent cases.",
    recovery:
      "Surgical recovery takes 2-4 weeks. Vision therapy may require several months. Most patients achieve improved alignment and better binocular vision.",
    faqs: [
      {
        question: "What age is best for squint surgery?",
        answer:
          "Surgery can be performed at any age, but early treatment in childhood provides best results for vision development.",
      },
      {
        question: "Will surgery completely straighten my eyes?",
        answer: "Most patients achieve excellent alignment. Some cases may require glasses or additional procedures.",
      },
      {
        question: "Is squint surgery safe?",
        answer:
          "Yes, it's one of the most common and safe eye surgeries with minimal risks when performed by experienced surgeons.",
      },
    ],
  },
  oculoplasty: {
    title: "Oculoplasty (Cosmetic Eye Surgery)",
    intro: "Reconstructive and cosmetic eyelid and orbital surgery for functional and aesthetic improvement.",
    overview:
      "Oculoplasty addresses functional and cosmetic issues of eyelids, tear ducts, and orbital region. Procedures include ptosis correction, eyelid reconstruction, tear duct surgery, and cosmetic enhancements to improve both appearance and eye function.",
    whoNeedsIt: [
      "Patients with drooping eyelids affecting vision",
      "Those with watering eyes or blocked tear ducts",
      "Individuals with eyelid tumors or lesions",
      "Patients seeking cosmetic eyelid enhancement",
      "Those with orbital fractures or injuries",
    ],
    diagnosis:
      "Comprehensive evaluation includes eyelid position measurement, tear duct assessment, orbital imaging when needed, and functional testing to determine appropriate treatment.",
    treatment:
      "Treatments include ptosis surgery to lift drooping lids, DCR for tear duct blockage, eyelid tumor removal, blepharoplasty for cosmetic enhancement, and orbital surgery for complex cases.",
    recovery:
      "Recovery varies by procedure. Most eyelid surgeries require 1-2 weeks for initial healing. Swelling and bruising typically resolve within 2-3 weeks.",
    faqs: [
      {
        question: "Is oculoplasty covered by insurance?",
        answer:
          "Functional procedures like ptosis correction are usually covered. Purely cosmetic procedures are typically not covered.",
      },
      {
        question: "Will there be visible scars?",
        answer:
          "Incisions are placed in natural eyelid creases to minimize visible scarring. Most scars fade significantly over time.",
      },
      {
        question: "How long do results last?",
        answer: "Functional corrections are typically permanent. Cosmetic results last many years.",
      },
    ],
  },
  "cornea-services": {
    title: "Cornea Services",
    intro: "Comprehensive treatment for corneal diseases, injuries, and transplantation services.",
    overview:
      "Our cornea services address conditions affecting the clear front surface of the eye. We provide medical management, specialized procedures, and corneal transplantation for various corneal diseases and injuries.",
    whoNeedsIt: [
      "Patients with corneal infections or ulcers",
      "Those with keratoconus or corneal dystrophies",
      "Individuals with corneal scars or injuries",
      "Patients with severe dry eye",
      "Those requiring corneal transplantation",
    ],
    diagnosis:
      "Evaluation includes slit-lamp examination, corneal topography, pachymetry, specular microscopy, and confocal microscopy for detailed corneal analysis.",
    treatment:
      "Treatment options include medications for infections, collagen cross-linking for keratoconus, specialized contact lenses, and corneal transplantation procedures including DALK and DSEK.",
    faqs: [
      {
        question: "What is keratoconus?",
        answer:
          "It's a progressive condition where the cornea thins and bulges. Treatment includes cross-linking, special lenses, or transplant.",
      },
      {
        question: "How successful are corneal transplants?",
        answer: "Modern techniques have high success rates of 85-90% with proper post-operative care.",
      },
      {
        question: "How long is transplant recovery?",
        answer: "Initial recovery takes weeks, but complete healing and visual stabilization may take 6-12 months.",
      },
    ],
  },
  "contact-lens-clinic": {
    title: "Contact Lens Clinic",
    intro: "Professional contact lens fitting, training, and care for all types of contact lenses.",
    overview:
      "Our contact lens clinic provides comprehensive services including fitting for standard and specialized lenses, training for new wearers, follow-up care, and management of contact lens-related complications.",
    whoNeedsIt: [
      "First-time contact lens users",
      "Patients with high prescriptions",
      "Those with astigmatism or presbyopia",
      "Keratoconus patients needing RGP lenses",
      "Anyone experiencing contact lens discomfort",
    ],
    diagnosis:
      "Comprehensive fitting includes refraction, corneal curvature measurement, tear film evaluation, and trial lens fitting to ensure optimal comfort and vision.",
    treatment:
      "We offer soft lenses, toric lenses for astigmatism, multifocal lenses for presbyopia, RGP lenses for keratoconus, and specialty lenses for complex cases.",
    faqs: [
      {
        question: "Are contact lenses safe for daily use?",
        answer: "Yes, when worn and cared for properly. Regular follow-ups ensure eye health is maintained.",
      },
      {
        question: "Can I wear contacts with astigmatism?",
        answer: "Toric contact lenses are specifically designed to correct astigmatism.",
      },
      {
        question: "How long does fitting take?",
        answer: "Initial fitting takes 30-45 minutes. Training and follow-up visits ensure success.",
      },
    ],
  },
  "low-vision-aid-services": {
    title: "Low Vision Aid Services",
    intro: "Specialized devices and training to maximize remaining vision for daily activities.",
    overview:
      "Low vision services help patients with significant vision loss that cannot be corrected with glasses or surgery. We provide assessment, prescription of magnification devices, and training to maximize independence and quality of life.",
    whoNeedsIt: [
      "Patients with advanced macular degeneration",
      "Those with diabetic retinopathy complications",
      "Individuals with glaucoma-related vision loss",
      "Patients with inherited retinal diseases",
      "Anyone with significant vision impairment affecting daily life",
    ],
    diagnosis:
      "Comprehensive low vision assessment includes best-corrected visual acuity, contrast sensitivity testing, visual field evaluation, and functional vision assessment.",
    treatment:
      "Services include prescription of magnifiers, telescopic devices, electronic aids, orientation and mobility training, and recommendations for home modifications.",
    faqs: [
      {
        question: "Can low vision be cured?",
        answer:
          "While the underlying condition may not be curable, low vision aids can significantly improve functional vision.",
      },
      {
        question: "Are low vision aids expensive?",
        answer:
          "Options range from affordable handheld magnifiers to advanced electronic devices. We work within your budget.",
      },
      {
        question: "Will I need training?",
        answer: "Yes, we provide comprehensive training to ensure you can effectively use your prescribed devices.",
      },
    ],
  },
  "vision-therapy": {
    title: "Vision Therapy",
    intro: "Customized eye exercise programs to improve visual skills and eye coordination.",
    overview:
      "Vision therapy is a structured program of visual activities designed to improve eye coordination, focusing, tracking, and visual processing skills. It's especially effective for treating convergence insufficiency, amblyopia, and learning-related vision problems.",
    whoNeedsIt: [
      "Children with learning difficulties",
      "Patients with convergence insufficiency",
      "Those with amblyopia (lazy eye)",
      "Individuals with eye coordination problems",
      "Patients recovering from brain injury or stroke",
    ],
    diagnosis:
      "Comprehensive evaluation includes binocular vision testing, convergence and divergence measurements, accommodation testing, and assessment of visual processing skills.",
    treatment:
      "Customized therapy program includes in-office sessions with specialized equipment and home exercises. Treatment typically lasts 12-24 weeks with weekly sessions.",
    faqs: [
      {
        question: "Does vision therapy really work?",
        answer:
          "Yes, research shows significant improvement in visual skills, especially for convergence insufficiency and amblyopia.",
      },
      {
        question: "How long does treatment take?",
        answer: "Most programs last 3-6 months with weekly sessions, depending on the condition being treated.",
      },
      {
        question: "Is it covered by insurance?",
        answer: "Coverage varies. Some plans cover medical vision therapy, especially for amblyopia or post-injury.",
      },
    ],
  },
  "neuro-ophthalmology": {
    title: "Neuro-Ophthalmology",
    intro: "Specialized care for vision problems related to neurological conditions.",
    overview:
      "Neuro-ophthalmology addresses vision problems caused by neurological conditions affecting the visual pathways, optic nerve, and brain. We diagnose and manage complex cases involving the intersection of neurology and ophthalmology.",
    whoNeedsIt: [
      "Patients with optic neuritis",
      "Those with unexplained vision loss",
      "Individuals with double vision",
      "Patients with visual field defects",
      "Those with headaches and vision problems",
    ],
    symptoms: [
      "Sudden vision loss",
      "Double vision",
      "Visual field loss",
      "Pupil abnormalities",
      "Eye movement problems",
      "Optic nerve swelling",
    ],
    diagnosis:
      "Comprehensive evaluation includes visual field testing, OCT of optic nerve, MRI imaging when indicated, and coordination with neurologists for complete assessment.",
    treatment:
      "Treatment depends on diagnosis and may include medications, steroids for optic neuritis, management of underlying conditions, and coordination with neurology specialists.",
    faqs: [
      {
        question: "What causes optic neuritis?",
        answer: "Often associated with multiple sclerosis or autoimmune conditions. Prompt evaluation is important.",
      },
      {
        question: "Can neurological vision loss be treated?",
        answer: "Many conditions respond well to treatment, especially when diagnosed early.",
      },
      {
        question: "Do I need to see a neurologist too?",
        answer: "Often yes, neuro-ophthalmology requires coordinated care between specialists.",
      },
    ],
  },
}
