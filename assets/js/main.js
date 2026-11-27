/* ==========================================================================
   AVR & Co – Shared Multi-Page JavaScript & Bilingual (EN / தமிழ்) Engine
   Handles: Language Persistence (localStorage), Full EN/TA Translation,
   Dynamic Copyright Year, Active Page Nav Highlighting,
   Mobile Drawer Navigation, Gallery Filters & Lightbox, and WhatsApp Enquiry Form
   ========================================================================== */
(function () {
  'use strict';

  const STORAGE_KEY = 'avr_co_lang';

  const TRANSLATIONS = {
    en: {
      'brand.tagline_mini': 'Building Materials Suppliers',
      'lang.label': 'Language',
      'ann.1': 'Quality Building Materials Available.',
      'ann.2': 'Best Quality at Competitive Prices.',
      'ann.3': 'Cement, Steel, M-Sand, Jally & Bricks Available.',
      'ann.4': 'Contact Us for Bulk Orders.',
      'ann.5': 'Reliable and Timely Delivery to Your Site.',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.about_us': 'About Us',
      'nav.products': 'Products',
      'nav.cement': 'Cement',
      'nav.steel': 'Steel',
      'nav.gallery': 'Gallery',
      'nav.delivery': 'Delivery',
      'nav.contact': 'Contact',
      'nav.contact_us': 'Contact Us',
      'mega.heading': 'OUR PRODUCTS',
      'mega.jally_title': 'Jally / Blue Metal',
      'msand.banner_t': 'M-Sand Supply',
      'msand.banner_s': 'Manufactured sand engineered for high-strength concrete mixing, plastering, and masonry work.',
      'msand.kicker_html': '<i data-lucide="mountain" aria-hidden="true"></i> Manufactured Sand',
      'msand.title': 'Clean, Consistent M-Sand for Concrete & Masonry',
      'msand.p1': 'AVR & Co supplies finely graded manufactured sand (M-Sand) produced from hard granite rock, offering uniform particle shape and zero silt impurities for stronger concrete bonding.',
      'msand.p2': 'Suitable for structural concrete, column casting, slab work, brickwork mortar, and general residential, commercial, and industrial construction.',
      'msand.app1_t': 'RCC & Structural Concrete',
      'msand.app1_d': 'Cubical particle grading improves workability, compaction, and compressive strength in beams, columns, and slabs.',
      'msand.app2_t': 'Brickwork & Masonry Mortar',
      'msand.app2_d': 'Clean, dust-controlled sand ensures smooth mortar consistency and strong brick-to-brick adhesion.',
      'msand.app3_t': 'Bulk & Site Dispatch',
      'msand.app3_d': 'Available for small home builds as well as bulk tipper loads delivered directly to your construction site.',
      'jally.banner_t': 'Jally (Blue Metal) Supply',
      'jally.banner_s': 'Crushed angular blue-grey granite stone aggregates in 6mm, 12mm, 20mm, and 40mm grades for every construction stage.',
      'jally.kicker_html': '<i data-lucide="hexagon" aria-hidden="true"></i> Graded Aggregates',
      'jally.title': '6mm, 12mm, 20mm & 40mm Jally (Blue Metal)',
      'jally.sub': 'Select the right crushed granite aggregate grade for your concrete mix, roofing slab, road base, or foundation work.',
      'jally.g6_d': 'Fine blue metal chips ideal for interlocking paver beds, precast concrete products, flooring finishes, and thin slab mixes.',
      'jally.g12_d': 'Medium aggregate grade suited for reinforced concrete lintels, columns, sunshades, and compact structural members.',
      'jally.g20_d': 'Standard structural aggregate grade widely used for RCC slabs, beams, footings, and general concrete batching.',
      'jally.g40_d': 'Coarse heavy ballast stone ideal for foundation soling, sub-base compaction, road beds, and mass concrete fills.',
      'bricks.banner_t': 'Construction Bricks Supply',
      'bricks.banner_s': 'Well-burnt, uniform red clay construction bricks for durable load-bearing walls, partitions, and residential or commercial buildings.',
      'bricks.kicker_html': '<i data-lucide="grid-2x2" aria-hidden="true"></i> Masonry Supply',
      'bricks.title': 'Quality Construction Bricks for Strong Walls',
      'bricks.p1': 'AVR & Co supplies uniformly shaped, kiln-burnt construction bricks known for compressive strength, clean edges, and reliable dimensional consistency.',
      'bricks.p2': 'Ideal for residential homes, boundary walls, commercial complexes, and industrial structures built for long-lasting durability.',
      'bricks.b1_t': 'Uniform Shape & Strength',
      'bricks.b1_d': 'Consistent brick dimensions simplify alignment, reduce mortar wastage, and create cleaner masonry finishes.',
      'bricks.b2_t': 'Residential & Commercial Ready',
      'bricks.b2_d': 'Suitable for partition walls, external facades, compound walls, and structural masonry requirements.',
      'bricks.b3_t': 'Direct Yard-to-Site Delivery',
      'bricks.b3_d': 'Carefully stacked and transported directly to your project site for smooth unloading and zero project delays.',
      'btn.wa_enquiry': 'WhatsApp Enquiry',
      'btn.call_now': 'Call Now',
      'btn.call_phone': 'Call +91 90921 53480',
      'btn.explore_products': 'Explore Products',
      'btn.enquire_now': 'Enquire Now',
      'btn.read_more_about': 'Read More About Us',
      'btn.request_quote': 'Request a Quote',
      'btn.view_all_products': 'View All Products',
      'btn.view_gallery': 'View Material Gallery',
      'btn.explore_cement': 'Explore Cement Brands',
      'btn.explore_steel': 'Explore Steel Brands',
      'btn.view_cement': 'View Cement Brands',
      'btn.view_steel': 'View Steel Brands',
      'btn.send_bulk_enquiry': 'Send Bulk Enquiry',
      'btn.request_cement_quote': 'Request Bulk Cement Quote',
      'btn.request_steel_quote': 'Request Bulk Steel Quote',
      'btn.delivery_info': 'Delivery Info',
      'btn.contact_form': 'Contact Form',
      'btn.explore_our_products': 'Explore Our Products',
      'btn.enquire_bulk': 'Enquire for Bulk Orders',
      'btn.submit_delivery': 'Submit Delivery Enquiry Form',
      'btn.browse_products': 'Browse Products',
      'btn.chat_wa': 'Chat on WhatsApp',
      'btn.send_email': 'Send Email',
      'btn.send_wa_form': 'Send Enquiry on WhatsApp',
      'hero.badge_html': '<i data-lucide="hard-hat" aria-hidden="true"></i> AVR &amp; Co &bull; Quality Materials. Reliable Service. Stronger Construction.',
      'hero.title_html': 'BUILD STRONGER.<br /><span>BUILD BETTER.</span>',
      'hero.subtitle': 'Your Trusted Partner for Quality Building Materials.',
      'hero.desc': 'From foundation to finishing, AVR & Co supplies quality cement, steel, M-Sand, Jally and bricks for residential and commercial construction projects.',
      'hero.hl1': 'Top Cement Brands',
      'hero.hl2': 'High-Grade TMT Steel',
      'hero.hl3': 'M-Sand & Graded Jally',
      'hero.hl4': 'Direct Site Delivery',
      'home.kicker_featured_html': '<i data-lucide="boxes" aria-hidden="true"></i> Featured Products',
      'home.kicker_brands_html': '<i data-lucide="award" aria-hidden="true"></i> Trusted Brands',
      'home.brands_title': 'Leading Cement & Steel Brands Available',
      'home.brands_sub': "We stock genuine materials from India's most respected cement and TMT steel manufacturers for structural confidence.",
      'home.cement_box_kicker_html': '<i data-lucide="package" aria-hidden="true"></i> Cement Brands',
      'home.cement_box_title': 'Trusted Cement Brands Available',
      'home.cement_box_desc': 'Consistent setting strength and fresh stock from top cement manufacturers for foundations, slabs, and plastering.',
      'home.steel_box_kicker_html': '<i data-lucide="factory" aria-hidden="true"></i> Steel Brands',
      'home.steel_box_title': 'Quality Steel Brands Available',
      'home.steel_box_desc': 'High-tensile TMT steel reinforcement bars engineered for superior bendability, concrete grip, and seismic resilience.',
      'home.cta_kicker_html': '<i data-lucide="phone-call" aria-hidden="true"></i> Get Started Today',
      'home.cta_title': 'Need Building Materials Delivered to Your Site?',
      'home.cta_sub': 'Contact AVR & Co for material availability, brand details, bulk orders, and delivery enquiries.',
      'about.banner_title': 'About AVR & Co',
      'about.banner_sub': 'Quality Materials. Reliable Service. Stronger Construction — supporting builders, contractors, engineers, and homeowners across every stage of construction.',
      'about.kicker_home_html': '<i data-lucide="building-2" aria-hidden="true"></i> Welcome to AVR &amp; Co',
      'about.kicker_page_html': '<i data-lucide="building-2" aria-hidden="true"></i> Company Introduction',
      'about.badge_title': 'AVR & Co Supply Assurance',
      'about.badge_sub': 'Quality Materials. Reliable Service. Stronger Construction.',
      'about.title': 'Building Trust Through Quality Materials.',
      'about.p1': 'AVR & Co is committed to supplying reliable building materials for all types of construction projects. We focus on quality products, competitive pricing, dependable customer service and timely delivery.',
      'about.p2': 'Our goal is to support builders, contractors, engineers and homeowners with the materials they need to build stronger and better structures.',
      'srv.1': 'Cement Supply',
      'srv.2': 'Steel Supply',
      'srv.3': 'M-Sand Supply',
      'srv.4': 'Jally (Blue Metal) Supply',
      'srv.5': 'Bricks Supply',
      'srv.6': 'Construction Materials Delivery',
      'about.pillars_kicker_html': '<i data-lucide="compass" aria-hidden="true"></i> Our Core Pillars',
      'about.pillars_title': 'Business Values & Quality Commitment',
      'about.pillars_sub': 'Every delivery from AVR & Co is guided by our commitment to honesty, verified material grades, and responsive customer service.',
      'about.v1_t': 'Business Values',
      'about.v1_d': 'Integrity in every order, transparent communication, and long-term relationships built on trust with contractors and homeowners.',
      'about.v2_t': 'Quality Commitment',
      'about.v2_d': 'We supply authentic cement brands, structural TMT steel, clean M-Sand, graded Jally aggregates, and sturdy construction bricks.',
      'about.v3_t': 'Customer Service',
      'about.v3_d': 'Prompt telephone and WhatsApp assistance for product selection, brand availability, bulk requirements, and dispatch coordination.',
      'why.kicker_html': '<i data-lucide="shield-check" aria-hidden="true"></i> Our Advantage',
      'why.kicker_about_html': '<i data-lucide="shield-check" aria-hidden="true"></i> Why Choose AVR &amp; Co',
      'why.title': 'Why Choose AVR & Co',
      'why.title_about': 'Six Reasons Builders Rely on Us',
      'why.sub': 'Every order is backed by our commitment to material integrity, transparent communication, and dependable project support.',
      'why.f1_t': 'Quality Products',
      'why.f1_d': 'Genuine, construction-grade cement, TMT steel, M-Sand, Jally, and bricks sourced from trusted brands and quarries.',
      'why.f2_t': 'Competitive Pricing',
      'why.f2_d': 'Fair, market-aligned quotations tailored for individual homeowners as well as large bulk contractor requirements.',
      'why.f3_t': 'Reliable Supply',
      'why.f3_d': 'Consistent material availability across all core categories so your construction workflow continues without interruption.',
      'why.f4_t': 'Timely Site Delivery',
      'why.f4_d': 'Coordinated dispatch directly to your project location with careful handling and prompt status updates.',
      'why.f5_t': 'Customer Support',
      'why.f5_d': 'Responsive assistance via phone and WhatsApp for brand selection, quantity enquiries, and order coordination.',
      'why.f6_t': 'Trusted Supplier',
      'why.f6_d': 'Dedicated partner for builders, civil engineers, contractors, and homeowners aiming to build stronger structures.',
      'prod.banner_title': 'Our Building Material Products',
      'prod.banner_sub': 'Supplying high-grade Cement, TMT Steel, M-Sand, Jally (Blue Metal), and Bricks for residential, commercial, and industrial construction projects.',
      'prod.kicker_html': '<i data-lucide="boxes" aria-hidden="true"></i> Our Products',
      'prod.title': 'Essential Building Materials for Every Stage',
      'prod.sub': 'Trusted structural materials sourced for durability, consistency, and dependable on-site performance across residential, commercial, and industrial builds.',
      'prod.sub_page': 'Select any material below to enquire directly via WhatsApp for current availability, brand choices, and project quotations.',
      'prod.tag_cement': 'Multiple Leading Brands',
      'prod.tag_steel': 'Structural Grade',
      'prod.tag_msand': 'Concrete & Masonry',
      'prod.tag_jally': 'Graded Aggregates',
      'prod.tag_bricks': 'Wall & Structure',
      'prod.cement_t': 'Cement',
      'prod.cement_d': 'High-quality cement for residential and commercial construction. Suitable for different construction requirements.',
      'prod.steel_t': 'Steel',
      'prod.steel_d': 'Quality TMT steel rods. Suitable for structural reinforcement and construction.',
      'prod.msand_t': 'M-Sand',
      'prod.msand_d': 'Manufactured sand for construction applications. Suitable for concrete and masonry work.',
      'prod.jally_t': 'Jally (Blue Metal)',
      'prod.jally_d': 'Clean, angular crushed blue metal aggregates graded for concrete mixing, slab work, and road/foundation layers.',
      'prod.j6': '6mm Jally',
      'prod.j12': '12mm Jally',
      'prod.j20': '20mm Jally',
      'prod.j40': '40mm Jally',
      'prod.bricks_t': 'Bricks',
      'prod.bricks_d': 'Quality construction bricks. Suitable for residential and commercial buildings.',
      'cem.title': 'Trusted Cement Brands Available.',
      'cem.sub': 'Choose from leading Indian cement brands trusted by engineers and contractors for strength, setting consistency, and long-term structural durability.',
      'cem.show_t': 'Fresh Cement Stock for Every Construction Requirement',
      'cem.show_d': "Whether you need cement for foundations, columns, slabs, brickwork, or plastering, AVR & Co supplies genuine bags from India's most trusted cement manufacturers for retail and bulk orders.",
      'cem.m1': 'Fresh stock available for residential & commercial builds',
      'cem.m2': 'Reliable grade consistency for concrete & masonry',
      'cem.m3': 'High-performance cement for foundations & slabs',
      'cem.m4': 'Trusted structural strength for all construction phases',
      'cem.m5': 'Consistent quality for plastering, columns & beams',
      'cem.m6': 'Dependable binding strength for project requirements',
      'cem.m7': 'Quality cement supply for retail and bulk site orders',
      'stl.title': 'Quality Steel Brands Available.',
      'stl.sub': 'High-tensile TMT steel reinforcement bars from reputed manufacturers for superior load-bearing strength, ductility, and seismic resilience.',
      'stl.show_t': 'Certified TMT Reinforcement Bars for Every Project',
      'stl.show_d': "Whether you are constructing an independent home, commercial complex, or industrial structure, AVR & Co supplies reliable steel brands tailored to your structural engineer's specifications.",
      'stl.m1': 'Precision TMT reinforcement bars',
      'stl.m2': 'High-strength structural TMT rods',
      'stl.m3': 'Dependable bendability & weldability',
      'stl.m4': 'Quality TMT steel for residential & commercial builds',
      'stl.m5': 'Durable reinforcement steel supply',
      'stl.m6': 'Consistent rib grip & concrete bonding',
      'stl.m7': 'Industry-leading structural TMT reinforcement',
      'gal.banner_t': 'Product & Stockyard Gallery',
      'gal.banner_s': 'Browse our range of cement bags, TMT steel bars, M-Sand, 6mm–40mm Jally (Blue Metal), construction bricks, and building materials stockyard. Click any image to view in lightbox.',
      'gal.f_all': 'All Materials',
      'gal.f_cem': 'Cement',
      'gal.f_stl': 'Steel & TMT',
      'gal.f_agg': 'M-Sand & Jally',
      'gal.f_yard': 'Bricks & Stockyard',
      'gal.t1_tag': 'Cement Supply',
      'gal.t1_title': 'UltraTech Cement Bag',
      'gal.t2_title': 'UltraTech Cement Super',
      'gal.t3_tag': 'Steel Supply',
      'gal.t3_title': 'TATA Tiscon TMT Bars',
      'gal.t4_tag': 'Steel Reinforcement',
      'gal.t4_title': 'JSW Neosteel TMT Bars',
      'gal.t5_tag': 'M-Sand Supply',
      'gal.t5_title': 'M-Sand Stockpile',
      'gal.t6_tag': 'Blue Metal',
      'gal.t6_title': '6mm, 12mm, 20mm & 40mm Jally',
      'gal.t7_tag': 'Bricks Supply',
      'gal.t7_title': 'Construction Bricks',
      'gal.t8_tag': 'Supply Range',
      'gal.t8_title': 'Building Materials Stockyard',
      'gal.t9_title': 'Supplier Showcase',
      'del.banner_t': 'Delivery & Supply',
      'del.banner_s': 'Convenient construction material dispatch for residential, commercial, and industrial project sites.',
      'del.kicker_html': '<i data-lucide="truck" aria-hidden="true"></i> Logistics &amp; Dispatch',
      'del.title': 'Building Materials Delivered to Your Site.',
      'del.sub': 'Get your construction materials delivered conveniently to your project location. Contact AVR & Co for bulk requirements, material availability and delivery enquiries.',
      'del.p1_t': 'Single & Bulk Order Support',
      'del.p1_d': 'Coordinated dispatch for residential homes, commercial sites, and contractor schedules.',
      'del.p2_t': 'Verified Material Dispatch',
      'del.p2_d': 'Every load is checked for brand, grade, and quantity prior to leaving the yard.',
      'del.ben_k_html': '<i data-lucide="clipboard-list" aria-hidden="true"></i> Delivery Benefits',
      'del.ben_t': 'Reliable Site Supply Without Hassle',
      'del.ben_s': 'Reach out to our team with your material list, required quantity, and project location to coordinate dispatch.',
      'del.b1_t': 'All Core Materials Together',
      'del.b1_d': 'Source cement, TMT steel bars, M-Sand, Jally (6mm–40mm), and bricks from one reliable supplier.',
      'del.b2_t': 'Careful Handling & Loading',
      'del.b2_d': 'Materials are loaded securely to keep cement bags protected, steel rods straight, and aggregates clean.',
      'del.b3_t': 'Direct Dispatch Coordination',
      'del.b3_d': 'Stay updated directly via phone or WhatsApp regarding material availability and delivery scheduling.',
      'con.banner_t': 'Contact AVR & Co',
      'con.banner_s': 'AVR & Co – Building Materials Suppliers. Reach out today for product availability, brand details, bulk orders, and delivery enquiries.',
      'con.kicker_html': '<i data-lucide="book-user" aria-hidden="true"></i> Get In Touch',
      'con.title': 'AVR & Co – Building Materials Suppliers',
      'con.sub': 'Connect directly by phone, WhatsApp, or email for material availability, brand enquiries, and bulk supply orders.',
      'con.c1_t': 'Call Us Directly',
      'con.c2_t': 'WhatsApp Chat',
      'con.c3_t': 'Email Enquiry',
      'con.c4_t': 'Project Order Form',
      'con.c4_d': 'Share product, quantity & site location below',
      'form.kicker_html': '<i data-lucide="file-pen-line" aria-hidden="true"></i> Quick Enquiry',
      'form.title': 'Need Building Materials for Your Project?',
      'form.sub': 'Contact us today for product availability, brand details, bulk orders and delivery enquiries.',
      'form.aside_t': 'Direct WhatsApp Quotation',
      'form.aside_d': 'Fill in your material requirements and submit the form to send your enquiry straight to our WhatsApp desk for fast availability and quotation details.',
      'form.s1': 'Select your required material or brand',
      'form.s2': 'Enter quantity & delivery location',
      'form.s3': 'Send instantly via WhatsApp',
      'form.lbl_name': 'Customer Name *',
      'form.ph_name': 'Enter your full name',
      'form.lbl_phone': 'Phone Number *',
      'form.lbl_prod': 'Select Product *',
      'form.opt_default': 'Choose building material...',
      'form.opt_cem': 'Cement',
      'form.opt_stl': 'Steel (TMT Rods)',
      'form.opt_ms': 'M-Sand',
      'form.opt_jal': 'Jally (Blue Metal) – 6mm / 12mm / 20mm / 40mm',
      'form.opt_brk': 'Bricks',
      'form.opt_bulk': 'Multiple / Bulk Order',
      'form.lbl_qty': 'Quantity Required *',
      'form.ph_qty': 'e.g., 100 Bags / 2 Tons / 3 Loads',
      'form.lbl_loc': 'Delivery Location *',
      'form.ph_loc': 'Enter site / project location',
      'form.lbl_msg': 'Message',
      'form.ph_msg': 'Preferred brand, Jally size (6mm/12mm/20mm/40mm), or additional project notes...',
      'form.err_required': 'Please complete all required fields before sending your WhatsApp enquiry.',
      'form.ok_opening': 'Opening WhatsApp with your enquiry details...',
      'form.ok_manual': ' Open WhatsApp manually if it did not launch',
      'footer.desc': 'Supplying quality cement, TMT steel, M-Sand, Jally (Blue Metal), and construction bricks for residential, commercial, and industrial builds.',
      'footer.tagline': 'Your Trusted Partner in Building Your Dreams.',
      'footer.h_quick': 'Quick Links',
      'footer.h_products': 'Products',
      'footer.h_cement': 'Cement Brands',
      'footer.h_steel': 'Steel Brands',
      'footer.h_contact': 'Contact Info',
      'footer.p_cement': 'Cement Supply',
      'footer.p_steel': 'Steel (TMT Rods)',
      'footer.p_msand': 'M-Sand Supply',
      'footer.p_jally': 'Jally (6mm–40mm)',
      'footer.p_bricks': 'Construction Bricks',
      'footer.rights_prefix': '– Building Materials Suppliers. All Rights Reserved.',
      'footer.powered_by': 'Powered by'
    },
    ta: {
      'brand.tagline_mini': 'கட்டுமானப் பொருட்கள் விநியோகஸ்தர்கள்',
      'lang.label': 'மொழி',
      'ann.1': 'தரமான கட்டுமானப் பொருட்கள் கிடைக்கும்.',
      'ann.2': 'சிறந்த தரம், நியாயமான விலையில்.',
      'ann.3': 'சிமெண்ட், ஸ்டீல், எம்-சாண்ட், ஜல்லி & செங்கற்கள் கிடைக்கும்.',
      'ann.4': 'மொத்த ஆர்டர்களுக்கு எங்களைத் தொடர்பு கொள்ளவும்.',
      'ann.5': 'உங்கள் கட்டுமான இடத்திற்கு நம்பகமான மற்றும் நேரமான டெலிவரி.',
      'nav.home': 'முகப்பு',
      'nav.about': 'எங்களைப் பற்றி',
      'nav.about_us': 'எங்களைப் பற்றி',
      'nav.products': 'பொருட்கள்',
      'nav.cement': 'சிமெண்ட்',
      'nav.steel': 'ஸ்டீல்',
      'nav.gallery': 'படத்தொகுப்பு',
      'nav.delivery': 'டெலிவரி',
      'nav.contact': 'தொடர்பு',
      'nav.contact_us': 'தொடர்பு கொள்ள',
      'mega.heading': 'எங்கள் பொருட்கள்',
      'mega.jally_title': 'ஜல்லி / புளூ மெட்டல்',
      'msand.banner_t': 'எம்-சாண்ட் விநியோகம்',
      'msand.banner_s': 'வலுவான கான்கிரீட் கலவை, பூச்சு மற்றும் கொத்து வேலைகளுக்கான தரமான செயற்கை மணல் (M-Sand).',
      'msand.kicker_html': '<i data-lucide="mountain" aria-hidden="true"></i> செயற்கை மணல் (M-Sand)',
      'msand.title': 'கான்கிரீட் & கொத்து வேலைகளுக்கு சுத்தமான எம்-சாண்ட்',
      'msand.p1': 'கடினமான கிரானைட் கற்களிலிருந்து தயாரிக்கப்படும் சீரான துகள் அளவு கொண்ட சுத்தமான எம்-சாண்டை AVR & Co வழங்குகிறது.',
      'msand.p2': 'கான்கிரீட் தளங்கள், தூண்கள், செங்கல் கட்டுமானம் மற்றும் அனைத்து குடியிருப்பு, வணிக கட்டுமானப் பணிகளுக்கும் மிகவும் ஏற்றது.',
      'msand.app1_t': 'RCC & கட்டமைப்பு கான்கிரீட்',
      'msand.app1_d': 'சீரான துகள் அமைப்பு பீம், தூண் மற்றும் ஸ்லாப் கான்கிரீட்டிற்கு அதிக வலிமையையும் உறுதியையும் தருகிறது.',
      'msand.app2_t': 'செங்கல் & கொத்து வேலை கலவை',
      'msand.app2_d': 'மண் மற்றும் கசடு இல்லாத சுத்தமான எம்-சாண்ட் உறுதியான சுவர் பிணைப்பைத் தருகிறது.',
      'msand.app3_t': 'மொத்த & நேரடி தள டெலிவரி',
      'msand.app3_d': 'தனி வீடுகள் முதல் பெரிய கட்டுமானத் தளங்கள் வரை தேவைக்கு ஏற்ப நேரடியாக டெலிவரி செய்யப்படுகிறது.',
      'jally.banner_t': 'ஜல்லி (புளூ மெட்டல்) விநியோகம்',
      'jally.banner_s': 'கட்டுமானத்தின் அனைத்து நிலைகளுக்கும் 6மிமீ, 12மிமீ, 20மிமீ மற்றும் 40மிமீ அளவுகளில் தரமான ஜல்லி கற்கள்.',
      'jally.kicker_html': '<i data-lucide="hexagon" aria-hidden="true"></i> தரம்பிரிக்கப்பட்ட ஜல்லி',
      'jally.title': '6மிமீ, 12மிமீ, 20மிமீ & 40மிமீ ஜல்லி (புளூ மெட்டல்)',
      'jally.sub': 'உங்கள் கான்கிரீட் கலவை, ஸ்லாப், சாலை மற்றும் அடித்தளப் பணிகளுக்குத் தேவையான ஜல்லி அளவைத் தேர்ந்தெடுக்கவும்.',
      'jally.g6_d': 'பேவர் பிளாக், ப்ரீகாஸ்ட் கான்கிரீட் மற்றும் மெல்லிய தரை வேலைகளுக்கு ஏற்ற நுண்ணிய 6மிமீ ஜல்லி.',
      'jally.g12_d': 'லிண்டல், தூண்கள், சன்ஷேட் மற்றும் நுட்பமான RCC வேலைகளுக்கு ஏற்ற 12மிமீ ஜல்லி.',
      'jally.g20_d': 'ஸ்லாப், பீம், அடித்தளம் மற்றும் பொதுவான RCC கான்கிரீட் கலவைக்கு மிகவும் பயன்படும் 20மிமீ ஜல்லி.',
      'jally.g40_d': 'அடித்தள நிரப்புதல், சாலை அடிப்பகுதி மற்றும் கனமான கட்டுமானப் பணிகளுக்கு ஏற்ற பெரிய 40மிமீ ஜல்லி.',
      'bricks.banner_t': 'கட்டுமான செங்கற்கள் விநியோகம்',
      'bricks.banner_s': 'குடியிருப்பு மற்றும் வணிகக் கட்டிடங்களுக்கு உறுதியான, சீரான வடிவம் கொண்ட தரமான செங்கற்கள்.',
      'bricks.kicker_html': '<i data-lucide="grid-2x2" aria-hidden="true"></i> செங்கல் விநியோகம்',
      'bricks.title': 'வலுவான சுவர்களுக்கான தரமான கட்டுமான செங்கற்கள்',
      'bricks.p1': 'சீரான வடிவம், கூர்மையான விளிம்புகள் மற்றும் அதிக தாங்கு திறன் கொண்ட சூளையில் சுடப்பட்ட தரமான செங்கற்களை AVR & Co வழங்குகிறது.',
      'bricks.p2': 'தனி வீடுகள், காம்பவுண்ட் சுவர்கள், வணிக வளாகங்கள் மற்றும் தொழிற்சாலைக் கட்டிடங்களுக்கு மிகவும் ஏற்றது.',
      'bricks.b1_t': 'சீரான வடிவம் & வலிமை',
      'bricks.b1_d': 'ஒரே அளவிலான செங்கற்கள் சுவர் நேர்த்தியை மேம்படுத்தி கலவை வீணாவதைக் குறைக்கின்றன.',
      'bricks.b2_t': 'வீடு & வணிகக் கட்டிடங்களுக்கு ஏற்றது',
      'bricks.b2_d': 'உள் மற்றும் வெளிச் சுவர்கள், தடுப்புச் சுவர்கள் மற்றும் அனைத்து செங்கல் கட்டுமானங்களுக்கும் உகந்தது.',
      'bricks.b3_t': 'நேரடி தள டெலிவரி',
      'bricks.b3_d': 'உங்கள் கட்டுமான இடத்திற்கே பாதுகாப்பாக அடுக்கி நேரடியாக விநியோகம் செய்யப்படுகிறது.',
      'btn.wa_enquiry': 'வாட்ஸ்அப் விசாரணை',
      'btn.call_now': 'இப்போது அழைக்கவும்',
      'btn.call_phone': 'அழைக்க +91 90921 53480',
      'btn.explore_products': 'பொருட்களைப் பார்க்க',
      'btn.enquire_now': 'விசாரிக்கவும்',
      'btn.read_more_about': 'எங்களைப் பற்றி மேலும் அறிய',
      'btn.request_quote': 'விலைப்பட்டியல் கேட்க',
      'btn.view_all_products': 'அனைத்து பொருட்களும்',
      'btn.view_gallery': 'படத்தொகுப்பைப் பார்க்க',
      'btn.explore_cement': 'சிமெண்ட் பிராண்டுகளைப் பார்க்க',
      'btn.explore_steel': 'ஸ்டீல் பிராண்டுகளைப் பார்க்க',
      'btn.view_cement': 'சிமெண்ட் பிராண்டுகள்',
      'btn.view_steel': 'ஸ்டீல் பிராண்டுகள்',
      'btn.send_bulk_enquiry': 'மொத்த ஆர்டர் விசாரணை',
      'btn.request_cement_quote': 'மொத்த சிமெண்ட் விலை கேட்க',
      'btn.request_steel_quote': 'மொத்த ஸ்டீல் விலை கேட்க',
      'btn.delivery_info': 'டெலிவரி விவரங்கள்',
      'btn.contact_form': 'தொடர்பு படிவம்',
      'btn.explore_our_products': 'எங்கள் பொருட்களைப் பார்க்க',
      'btn.enquire_bulk': 'மொத்த ஆர்டருக்கு விசாரிக்கவும்',
      'btn.submit_delivery': 'டெலிவரி விசாரணை அனுப்பவும்',
      'btn.browse_products': 'பொருட்களைப் பார்க்க',
      'btn.chat_wa': 'வாட்ஸ்அப்பில் பேசவும்',
      'btn.send_email': 'மின்னஞ்சல் அனுப்பவும்',
      'btn.send_wa_form': 'வாட்ஸ்அப்பில் விசாரணை அனுப்பவும்',
      'hero.badge_html': '<i data-lucide="hard-hat" aria-hidden="true"></i> AVR &amp; Co &bull; தரமான பொருட்கள். நம்பகமான சேவை. வலுவான கட்டுமானம்.',
      'hero.title_html': 'வலுவாகக் கட்டுங்கள்.<br /><span>சிறப்பாகக் கட்டுங்கள்.</span>',
      'hero.subtitle': 'தரமான கட்டுமானப் பொருட்களுக்கான உங்கள் நம்பகமான கூட்டாளர்.',
      'hero.desc': 'அடித்தளம் முதல் நிறைவு வரை, குடியிருப்பு மற்றும் வணிக கட்டுமானத் திட்டங்களுக்குத் தரமான சிமெண்ட், ஸ்டீல், எம்-சாண்ட், ஜல்லி மற்றும் செங்கற்களை AVR & Co வழங்குகிறது.',
      'hero.hl1': 'முன்னணி சிமெண்ட் பிராண்டுகள்',
      'hero.hl2': 'உயர்தர TMT ஸ்டீல்',
      'hero.hl3': 'எம்-சாண்ட் & தரமான ஜல்லி',
      'hero.hl4': 'நேரடி தள டெலிவரி',
      'home.kicker_featured_html': '<i data-lucide="boxes" aria-hidden="true"></i> முக்கியப் பொருட்கள்',
      'home.kicker_brands_html': '<i data-lucide="award" aria-hidden="true"></i> நம்பகமான பிராண்டுகள்',
      'home.brands_title': 'முன்னணி சிமெண்ட் & ஸ்டீல் பிராண்டுகள்',
      'home.brands_sub': 'கட்டமைப்பு வலிமைக்காக இந்தியாவின் முன்னணி சிமெண்ட் மற்றும் TMT ஸ்டீல் நிறுவனங்களின் அசல் பொருட்களை வழங்குகிறோம்.',
      'home.cement_box_kicker_html': '<i data-lucide="package" aria-hidden="true"></i> சிமெண்ட் பிராண்டுகள்',
      'home.cement_box_title': 'நம்பகமான சிமெண்ட் பிராண்டுகள்',
      'home.cement_box_desc': 'அடித்தளம், ஸ்லாப் மற்றும் பூச்சு வேலைகளுக்கு முன்னணி நிறுவனங்களின் புதிய சிமெண்ட் மூட்டைகள்.',
      'home.steel_box_kicker_html': '<i data-lucide="factory" aria-hidden="true"></i> ஸ்டீல் பிராண்டுகள்',
      'home.steel_box_title': 'தரமான ஸ்டீல் பிராண்டுகள்',
      'home.steel_box_desc': 'சிறந்த வளைவுத் தன்மை, கான்கிரீட் பிடிப்பு மற்றும் நிலநடுக்க எதிர்ப்புத் திறன் கொண்ட உயர்தர TMT ஸ்டீல் கம்பிகள்.',
      'home.cta_kicker_html': '<i data-lucide="phone-call" aria-hidden="true"></i> இன்றே தொடர்பு கொள்ளுங்கள்',
      'home.cta_title': 'உங்கள் கட்டுமான இடத்திற்குப் பொருட்கள் தேவையா?',
      'home.cta_sub': 'பொருள் இருப்பு, பிராண்ட் விவரங்கள், மொத்த ஆர்டர்கள் மற்றும் டெலிவரி விசாரணைகளுக்கு AVR & Co-ஐத் தொடர்பு கொள்ளவும்.',
      'about.banner_title': 'AVR & Co பற்றி',
      'about.banner_sub': 'தரமான பொருட்கள். நம்பகமான சேவை. வலுவான கட்டுமானம் — கட்டிட உரிமையாளர்கள், பொறியாளர்கள் மற்றும் ஒப்பந்ததாரர்களுக்குத் துணை நிற்கிறோம்.',
      'about.kicker_home_html': '<i data-lucide="building-2" aria-hidden="true"></i> AVR &amp; Co-க்கு வரவேற்கிறோம்',
      'about.kicker_page_html': '<i data-lucide="building-2" aria-hidden="true"></i> நிறுவன அறிமுகம்',
      'about.badge_title': 'AVR & Co தர உறுதி',
      'about.badge_sub': 'தரமான பொருட்கள். நம்பகமான சேவை. வலுவான கட்டுமானம்.',
      'about.title': 'தரமான பொருட்களின் மூலம் நம்பிக்கையைக் கட்டுகிறோம்.',
      'about.p1': 'அனைத்து வகையான கட்டுமானத் திட்டங்களுக்கும் நம்பகமான கட்டுமானப் பொருட்களை வழங்க AVR & Co அர்ப்பணிப்புடன் செயல்படுகிறது. தரமான பொருட்கள், போட்டி விலை, நம்பகமான வாடிக்கையாளர் சேவை மற்றும் சரியான நேரத்தில் டெலிவரி ஆகியவற்றில் கவனம் செலுத்துகிறோம்.',
      'about.p2': 'வலுவான மற்றும் சிறந்த கட்டிடங்களை உருவாக்கத் தேவையான பொருட்களை பில்டர்கள், ஒப்பந்ததாரர்கள், பொறியாளர்கள் மற்றும் வீட்டு உரிமையாளர்களுக்கு வழங்குவதே எங்கள் இலக்கு.',
      'srv.1': 'சிமெண்ட் விநியோகம்',
      'srv.2': 'ஸ்டீல் விநியோகம்',
      'srv.3': 'எம்-சாண்ட் விநியோகம்',
      'srv.4': 'ஜல்லி (புளூ மெட்டல்) விநியோகம்',
      'srv.5': 'செங்கற்கள் விநியோகம்',
      'srv.6': 'கட்டுமானப் பொருட்கள் டெலிவரி',
      'about.pillars_kicker_html': '<i data-lucide="compass" aria-hidden="true"></i> எங்கள் அடிப்படைத் தூண்கள்',
      'about.pillars_title': 'நிறுவன மதிப்புகள் & தர அர்ப்பணிப்பு',
      'about.pillars_sub': 'நேர்மை, சரிபார்க்கப்பட்ட பொருள் தரம் மற்றும் விரைவான வாடிக்கையாளர் சேவையுடன் AVR & Co செயல்படுகிறது.',
      'about.v1_t': 'நிறுவன மதிப்புகள்',
      'about.v1_d': 'ஒவ்வொரு ஆர்டரிலும் நேர்மை, வெளிப்படையான தகவல் மற்றும் ஒப்பந்ததாரர்கள் மற்றும் வீட்டு உரிமையாளர்களுடன் நீண்ட கால நம்பிக்கை.',
      'about.v2_t': 'தர அர்ப்பணிப்பு',
      'about.v2_d': 'அசல் சிமெண்ட் பிராண்டுகள், TMT ஸ்டீல், சுத்தமான எம்-சாண்ட், தரம்பிரிக்கப்பட்ட ஜல்லி மற்றும் உறுதியான செங்கற்களை வழங்குகிறோம்.',
      'about.v3_t': 'வாடிக்கையாளர் சேவை',
      'about.v3_d': 'பொருள் தேர்வு, பிராண்ட் இருப்பு மற்றும் மொத்த ஆர்டர் விவரங்களுக்கு தொலைபேசி மற்றும் வாட்ஸ்அப்பில் உடனடி உதவி.',
      'why.kicker_html': '<i data-lucide="shield-check" aria-hidden="true"></i> எங்கள் சிறப்புகள்',
      'why.kicker_about_html': '<i data-lucide="shield-check" aria-hidden="true"></i> ஏன் AVR &amp; Co?',
      'why.title': 'AVR & Co-ஐ ஏன் தேர்ந்தெடுக்க வேண்டும்',
      'why.title_about': 'பில்டர்கள் எங்களை நம்பும் 6 காரணங்கள்',
      'why.sub': 'ஒவ்வொரு ஆர்டரும் எங்கள் தர உறுதி மற்றும் நம்பகமான சேவையுடன் வழங்கப்படுகிறது.',
      'why.f1_t': 'தரமான பொருட்கள்',
      'why.f1_d': 'நம்பகமான நிறுவனங்கள் மற்றும் குவாரிகளில் இருந்து பெறப்பட்ட அசல் கட்டுமானத் பொருட்கள்.',
      'why.f2_t': 'நியாயமான விலை',
      'why.f2_d': 'தனிநபர் வீடுகள் மற்றும் பெரிய மொத்த ஒப்பந்ததாரர் தேவைகளுக்கு ஏற்ற நியாயமான விலை.',
      'why.f3_t': 'தடையற்ற விநியோகம்',
      'why.f3_d': 'உங்கள் கட்டுமானப் பணி தடையின்றித் தொடர அனைத்து முக்கியப் பொருட்களும் தொடர்ந்து கிடைக்கும்.',
      'why.f4_t': 'நேரமான தள டெலிவரி',
      'why.f4_d': 'உங்கள் கட்டுமான இடத்திற்கே பாதுகாப்பான மற்றும் சரியான நேரத்தில் விநியோகம்.',
      'why.f5_t': 'வாடிக்கையாளர் ஆதரவு',
      'why.f5_d': 'தொலைபேசி மற்றும் வாட்ஸ்அப் மூலம் பிராண்ட் மற்றும் அளவு குறித்த உடனடி வழிகாட்டுதல்.',
      'why.f6_t': 'நம்பகமான விநியோகஸ்தர்',
      'why.f6_d': 'வலுவான கட்டிடங்களை அமைக்க விரும்பும் அனைவருக்கும் நம்பகமான கூட்டாளர்.',
      'prod.banner_title': 'எங்கள் கட்டுமானப் பொருட்கள்',
      'prod.banner_sub': 'குடியிருப்பு, வணிக மற்றும் தொழிற்சாலை கட்டுமானங்களுக்கு உயர்தர சிமெண்ட், TMT ஸ்டீல், எம்-சாண்ட், ஜல்லி மற்றும் செங்கற்கள்.',
      'prod.kicker_html': '<i data-lucide="boxes" aria-hidden="true"></i> எங்கள் பொருட்கள்',
      'prod.title': 'கட்டுமானத்தின் அனைத்து நிலைகளுக்கும் தேவையான பொருட்கள்',
      'prod.sub': 'நீடித்த உறுதி மற்றும் சிறந்த செயல்பாட்டிற்கான நம்பகமான கட்டுமானப் பொருட்கள்.',
      'prod.sub_page': 'தற்போதைய இருப்பு, பிராண்ட் தேர்வுகள் மற்றும் விலை விவரங்களுக்கு கீழே உள்ள வாட்ஸ்அப் பொத்தானை அழுத்தவும்.',
      'prod.tag_cement': 'பல முன்னணி பிராண்டுகள்',
      'prod.tag_steel': 'கட்டமைப்புத் தரம்',
      'prod.tag_msand': 'கான்கிரீட் & கொத்து வேலை',
      'prod.tag_jally': 'தரம்பிரிக்கப்பட்ட ஜல்லி',
      'prod.tag_bricks': 'சுவர் & கட்டுமானம்',
      'prod.cement_t': 'சிமெண்ட்',
      'prod.cement_d': 'குடியிருப்பு மற்றும் வணிக கட்டுமானத்திற்கு உயர்தர சிமெண்ட். பல்வேறு கட்டுமானத் தேவைகளுக்கு ஏற்றது.',
      'prod.steel_t': 'ஸ்டீல்',
      'prod.steel_d': 'தரமான TMT ஸ்டீல் கம்பிகள். கட்டமைப்பு வலுப்படுத்தல் மற்றும் கட்டுமானத்திற்கு ஏற்றது.',
      'prod.msand_t': 'எம்-சாண்ட்',
      'prod.msand_d': 'கட்டுமானப் பணிகளுக்கான செயற்கை மணல் (M-Sand). கான்கிரீட் மற்றும் கொத்து வேலைகளுக்கு ஏற்றது.',
      'prod.jally_t': 'ஜல்லி (புளூ மெட்டல்)',
      'prod.jally_d': 'கான்கிரீட் கலவை, ஸ்லாப் மற்றும் அடித்தளப் பணிகளுக்காகத் தரம்பிரிக்கப்பட்ட சுத்தமான ஜல்லி கற்கள்.',
      'prod.j6': '6மிமீ ஜல்லி',
      'prod.j12': '12மிமீ ஜல்லி',
      'prod.j20': '20மிமீ ஜல்லி',
      'prod.j40': '40மிமீ ஜல்லி',
      'prod.bricks_t': 'செங்கற்கள்',
      'prod.bricks_d': 'தரமான கட்டுமானச் செங்கற்கள். குடியிருப்பு மற்றும் வணிகக் கட்டிடங்களுக்கு ஏற்றது.',
      'cem.title': 'நம்பகமான சிமெண்ட் பிராண்டுகள்.',
      'cem.sub': 'வலிமை மற்றும் நீடித்த உறுதிக்காகப் பொறியாளர்கள் மற்றும் ஒப்பந்ததாரர்களால் நம்பப்படும் முன்னணி இந்திய சிமெண்ட் பிராண்டுகள்.',
      'cem.show_t': 'அனைத்து கட்டுமானத் தேவைகளுக்கும் புதிய சிமெண்ட் இருப்பு',
      'cem.show_d': 'அடித்தளம், தூண்கள், ஸ்லாப், செங்கல் கட்டுமானம் மற்றும் பூச்சு வேலைகளுக்கு நம்பகமான நிறுவனங்களின் அசல் சிமெண்ட் மூட்டைகளை சில்லறை மற்றும் மொத்தமாக வழங்குகிறோம்.',
      'cem.m1': 'குடியிருப்பு & வணிகக் கட்டிடங்களுக்கு புதிய இருப்பு',
      'cem.m2': 'கான்கிரீட் & கொத்து வேலைகளுக்கு நிலையான தரம்',
      'cem.m3': 'அடித்தளம் & ஸ்லாப்களுக்கு உயர்தர சிமெண்ட்',
      'cem.m4': 'அனைத்து கட்டுமான நிலைகளுக்கும் நம்பகமான வலிமை',
      'cem.m5': 'பூச்சு, தூண்கள் & பீம்களுக்கு நிலையான தரம்',
      'cem.m6': 'திட்டத் தேவைகளுக்கு நம்பகமான பிணைப்பு வலிமை',
      'cem.m7': 'சில்லறை & மொத்த தள ஆர்டர்களுக்குத் தரமான சிமெண்ட்',
      'stl.title': 'தரமான ஸ்டீல் பிராண்டுகள்.',
      'stl.sub': 'அதிக தாங்கு திறன் மற்றும் நீடித்த உறுதிக்காகப் புகழ்பெற்ற நிறுவனங்களின் உயர்தர TMT ஸ்டீல் கம்பிகள்.',
      'stl.show_t': 'அனைத்துத் திட்டங்களுக்கும் தரமான TMT ஸ்டீல் கம்பிகள்',
      'stl.show_d': 'தனி வீடு, வணிக வளாகம் அல்லது தொழிற்சாலை என எதுவாக இருந்தாலும், பொறியாளரின் பரிந்துரைக்கு ஏற்ப நம்பகமான ஸ்டீல் பிராண்டுகளை AVR & Co வழங்குகிறது.',
      'stl.m1': 'துல்லியமான TMT ஸ்டீல் கம்பிகள்',
      'stl.m2': 'அதிக வலிமை கொண்ட TMT கம்பிகள்',
      'stl.m3': 'சிறந்த வளைவு & வெல்டிங் தன்மை',
      'stl.m4': 'குடியிருப்பு & வணிகக் கட்டிடங்களுக்கான TMT ஸ்டீல்',
      'stl.m5': 'நீடித்த உறுதியான ஸ்டீல் விநியோகம்',
      'stl.m6': 'சீரான ரிப் பிடிப்பு & கான்கிரீட் பிணைப்பு',
      'stl.m7': 'முன்னணி கட்டமைப்பு TMT ஸ்டீல் கம்பிகள்',
      'gal.banner_t': 'பொருட்கள் & கிடங்குப் படத்தொகுப்பு',
      'gal.banner_s': 'சிமெண்ட் மூட்டைகள், TMT ஸ்டீல் கம்பிகள், எம்-சாண்ட், 6மிமீ–40மிமீ ஜல்லி, செங்கற்கள் மற்றும் எங்கள் கிடங்குப் படங்களைப் பாருங்கள்.',
      'gal.f_all': 'அனைத்துப் பொருட்கள்',
      'gal.f_cem': 'சிமெண்ட்',
      'gal.f_stl': 'ஸ்டீல் & TMT',
      'gal.f_agg': 'எம்-சாண்ட் & ஜல்லி',
      'gal.f_yard': 'செங்கற்கள் & கிடங்கு',
      'gal.t1_tag': 'சிமெண்ட் விநியோகம்',
      'gal.t1_title': 'UltraTech சிமெண்ட் மூட்டை',
      'gal.t2_title': 'UltraTech Cement Super',
      'gal.t3_tag': 'ஸ்டீல் விநியோகம்',
      'gal.t3_title': 'TATA Tiscon TMT கம்பிகள்',
      'gal.t4_tag': 'TMT ஸ்டீல்',
      'gal.t4_title': 'JSW Neosteel TMT கம்பிகள்',
      'gal.t5_tag': 'எம்-சாண்ட் விநியோகம்',
      'gal.t5_title': 'எம்-சாண்ட் இருப்பு',
      'gal.t6_tag': 'புளூ மெட்டல் (ஜல்லி)',
      'gal.t6_title': '6மிமீ, 12மிமீ, 20மிமீ & 40மிமீ ஜல்லி',
      'gal.t7_tag': 'செங்கல் விநியோகம்',
      'gal.t7_title': 'கட்டுமான செங்கற்கள்',
      'gal.t8_tag': 'விநியோக வரிசை',
      'gal.t8_title': 'கட்டுமானப் பொருட்கள் தொகுப்பு',
      'gal.t9_title': 'AVR & Co அறிமுகப் பலகை',
      'del.banner_t': 'டெலிவரி & விநியோகம்',
      'del.banner_s': 'குடியிருப்பு, வணிக மற்றும் தொழிற்சாலை கட்டுமான இடங்களுக்கு நேரடிப் பொருள் விநியோகம்.',
      'del.kicker_html': '<i data-lucide="truck" aria-hidden="true"></i> போக்குவரத்து &amp; விநியோகம்',
      'del.title': 'உங்கள் கட்டுமான இடத்திற்கே பொருட்கள் டெலிவரி.',
      'del.sub': 'உங்கள் கட்டுமான இடத்திற்கே பொருட்களை வசதியாகப் பெறுங்கள். மொத்த தேவைகள், பொருள் இருப்பு மற்றும் டெலிவரி விசாரணைகளுக்கு AVR & Co-ஐத் தொடர்பு கொள்ளவும்.',
      'del.p1_t': 'சில்லறை & மொத்த ஆர்டர் வசதி',
      'del.p1_d': 'வீடு கட்டுமானம், வணிக தளங்கள் மற்றும் ஒப்பந்ததாரர் தேவைகளுக்கு ஏற்ற ஒருங்கிணைந்த விநியோகம்.',
      'del.p2_t': 'சரிபார்க்கப்பட்ட பொருள் அனுப்புதல்',
      'del.p2_d': 'ஒவ்வொரு லோடும் கிடங்கிலிருந்து புறப்படுவதற்கு முன் பிராண்ட், தரம் மற்றும் அளவு சரிபார்க்கப்படுகிறது.',
      'del.ben_k_html': '<i data-lucide="clipboard-list" aria-hidden="true"></i> டெலிவரி சிறப்புகள்',
      'del.ben_t': 'சிரமமில்லாத நம்பகமான தள விநியோகம்',
      'del.ben_s': 'உங்கள் பொருள் பட்டியல், அளவு மற்றும் தள முகவரியுடன் எங்கள் குழுவைத் தொடர்பு கொள்ளவும்.',
      'del.b1_t': 'அனைத்து முக்கியப் பொருட்களும் ஒரே இடத்தில்',
      'del.b1_d': 'சிமெண்ட், TMT ஸ்டீல், எம்-சாண்ட், ஜல்லி (6மிமீ–40மிமீ) மற்றும் செங்கற்கள் அனைத்தையும் ஒரே இடத்தில் பெறலாம்.',
      'del.b2_t': 'பாதுகாப்பான ஏற்றுதல் & கையாளுதல்',
      'del.b2_d': 'சிமெண்ட் மூட்டைகள், ஸ்டீல் கம்பிகள் மற்றும் ஜல்லி பாதுகாப்பாக ஏற்றி அனுப்பப்படுகின்றன.',
      'del.b3_t': 'நேரடி விநியோக ஒருங்கிணைப்பு',
      'del.b3_d': 'தொலைபேசி அல்லது வாட்ஸ்அப் மூலம் பொருள் இருப்பு மற்றும் டெலிவரி நேரத்தை உடனுக்குடன் அறியலாம்.',
      'con.banner_t': 'AVR & Co-ஐத் தொடர்பு கொள்ள',
      'con.banner_s': 'AVR & Co – கட்டுமானப் பொருட்கள் விநியோகஸ்தர்கள். பொருள் இருப்பு, பிராண்ட் விவரங்கள் மற்றும் மொத்த ஆர்டர்களுக்கு இன்றே தொடர்பு கொள்ளுங்கள்.',
      'con.kicker_html': '<i data-lucide="book-user" aria-hidden="true"></i> தொடர்பு கொள்ள',
      'con.title': 'AVR & Co – கட்டுமானப் பொருட்கள் விநியோகஸ்தர்கள்',
      'con.sub': 'பொருள் இருப்பு, பிராண்ட் விசாரணை மற்றும் மொத்த ஆர்டர்களுக்கு தொலைபேசி, வாட்ஸ்அப் அல்லது மின்னஞ்சல் மூலம் தொடர்பு கொள்ளவும்.',
      'con.c1_t': 'நேரடியாக அழைக்கவும்',
      'con.c2_t': 'வாட்ஸ்அப் உரையாடல்',
      'con.c3_t': 'மின்னஞ்சல் விசாரணை',
      'con.c4_t': 'ஆர்டர் விசாரணை படிவம்',
      'con.c4_d': 'பொருள், அளவு & தள இடத்தை கீழே பகிரவும்',
      'form.kicker_html': '<i data-lucide="file-pen-line" aria-hidden="true"></i> விரைவு விசாரணை',
      'form.title': 'உங்கள் திட்டத்திற்கு கட்டுமானப் பொருட்கள் தேவையா?',
      'form.sub': 'பொருள் இருப்பு, பிராண்ட் விவரங்கள், மொத்த ஆர்டர்கள் மற்றும் டெலிவரி விசாரணைகளுக்கு இன்றே தொடர்பு கொள்ளுங்கள்.',
      'form.aside_t': 'நேரடி வாட்ஸ்அப் விலைப்பட்டியல்',
      'form.aside_d': 'உங்கள் பொருள் தேவைகளைப் பூர்த்தி செய்து சமர்ப்பித்தால், உடனடி இருப்பு மற்றும் விலை விவரங்களுக்கு எங்கள் வாட்ஸ்அப் குழுவுக்குச் செல்லும்.',
      'form.s1': 'தேவையான பொருள் அல்லது பிராண்டைத் தேர்ந்தெடுக்கவும்',
      'form.s2': 'அளவு & டெலிவரி இடத்தை உள்ளிடவும்',
      'form.s3': 'வாட்ஸ்அப் வழியாக உடனடியாக அனுப்பவும்',
      'form.lbl_name': 'வாடிக்கையாளர் பெயர் *',
      'form.ph_name': 'உங்கள் முழுப் பெயரை உள்ளிடவும்',
      'form.lbl_phone': 'தொலைபேசி எண் *',
      'form.lbl_prod': 'பொருளைத் தேர்ந்தெடுக்கவும் *',
      'form.opt_default': 'கட்டுமானப் பொருளைத் தேர்ந்தெடுக்கவும்...',
      'form.opt_cem': 'சிமெண்ட்',
      'form.opt_stl': 'ஸ்டீல் (TMT கம்பிகள்)',
      'form.opt_ms': 'எம்-சாண்ட்',
      'form.opt_jal': 'ஜல்லி (புளூ மெட்டல்) – 6மிமீ / 12மிமீ / 20மிமீ / 40மிமீ',
      'form.opt_brk': 'செங்கற்கள்',
      'form.opt_bulk': 'பல பொருட்கள் / மொத்த ஆர்டர்',
      'form.lbl_qty': 'தேவையான அளவு *',
      'form.ph_qty': 'எ.கா., 100 மூட்டை / 2 டன் / 3 லோடு',
      'form.lbl_loc': 'டெலிவரி இடம் *',
      'form.ph_loc': 'கட்டுமான இடத்தை உள்ளிடவும்',
      'form.lbl_msg': 'கூடுதல் விவரம்',
      'form.ph_msg': 'விருப்பமான பிராண்ட், ஜல்லி அளவு (6மிமீ/12மிமீ/20மிமீ/40மிமீ) அல்லது பிற குறிப்புகள்...',
      'form.err_required': 'வாட்ஸ்அப் விசாரணை அனுப்பும் முன் தேவையான அனைத்து விவரங்களையும் நிரப்பவும்.',
      'form.ok_opening': 'உங்கள் விசாரணை விவரங்களுடன் வாட்ஸ்அப் திறக்கப்படுகிறது...',
      'form.ok_manual': ' வாட்ஸ்அப் தானாகத் திறக்காவிட்டால் இங்கே அழுத்தவும்',
      'footer.desc': 'குடியிருப்பு, வணிக மற்றும் தொழிற்சாலை கட்டுமானங்களுக்கு தரமான சிமெண்ட், TMT ஸ்டீல், எம்-சாண்ட், ஜல்லி (புளூ மெட்டல்) மற்றும் செங்கற்களை வழங்குகிறோம்.',
      'footer.tagline': 'உங்கள் கனவு இல்லத்தைக் கட்டியெழுப்பும் நம்பகமான கூட்டாளர்.',
      'footer.h_quick': 'விரைவு இணைப்புகள்',
      'footer.h_products': 'பொருட்கள்',
      'footer.h_cement': 'சிமெண்ட் பிராண்டுகள்',
      'footer.h_steel': 'ஸ்டீல் பிராண்டுகள்',
      'footer.h_contact': 'தொடர்பு விவரங்கள்',
      'footer.p_cement': 'சிமெண்ட் விநியோகம்',
      'footer.p_steel': 'ஸ்டீல் (TMT கம்பிகள்)',
      'footer.p_msand': 'எம்-சாண்ட் விநியோகம்',
      'footer.p_jally': 'ஜல்லி (6மிமீ–40மிமீ)',
      'footer.p_bricks': 'கட்டுமான செங்கற்கள்',
      'footer.rights_prefix': '– கட்டுமானப் பொருட்கள் விநியோகஸ்தர்கள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      'footer.powered_by': 'வழங்குவது'
    }
  };

  const WA_TEXT_TA = {
    'Hello AVR & Co, I would like to enquire about your building materials. Please share product availability and details.':
      'வணக்கம் AVR & Co, உங்கள் கட்டுமானப் பொருட்கள் குறித்து விசாரிக்க விரும்புகிறேன். பொருள் இருப்பு மற்றும் விவரங்களைப் பகிரவும்.',
    'Hello AVR & Co, I would like to enquire about material availability and site delivery.':
      'வணக்கம் AVR & Co, பொருள் இருப்பு மற்றும் கட்டுமான தள டெலிவரி குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about Cement supply. Please share brand availability and details.':
      'வணக்கம் AVR & Co, சிமெண்ட் விநியோகம் குறித்து விசாரிக்க விரும்புகிறேன். பிராண்ட் இருப்பு மற்றும் விவரங்களைப் பகிரவும்.',
    'Hello AVR & Co, I would like to enquire about TMT Steel rods. Please share brand availability and details.':
      'வணக்கம் AVR & Co, TMT ஸ்டீல் கம்பிகள் குறித்து விசாரிக்க விரும்புகிறேன். பிராண்ட் இருப்பு மற்றும் விவரங்களைப் பகிரவும்.',
    'Hello AVR & Co, I would like to enquire about M-Sand supply. Please share availability and details.':
      'வணக்கம் AVR & Co, எம்-சாண்ட் (M-Sand) விநியோகம் குறித்து விசாரிக்க விரும்புகிறேன். இருப்பு மற்றும் விவரங்களைப் பகிரவும்.',
    'Hello AVR & Co, I would like to enquire about Jally (Blue Metal - 6mm, 12mm, 20mm, 40mm). Please share availability and details.':
      'வணக்கம் AVR & Co, ஜல்லி (புளூ மெட்டல் - 6மிமீ, 12மிமீ, 20மிமீ, 40மிமீ) குறித்து விசாரிக்க விரும்புகிறேன். இருப்பு மற்றும் விவரங்களைப் பகிரவும்.',
    'Hello AVR & Co, I would like to enquire about 6mm Jally (Blue Metal).':
      'வணக்கம் AVR & Co, 6மிமீ ஜல்லி (புளூ மெட்டல்) குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about 12mm Jally (Blue Metal).':
      'வணக்கம் AVR & Co, 12மிமீ ஜல்லி (புளூ மெட்டல்) குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about 20mm Jally (Blue Metal).':
      'வணக்கம் AVR & Co, 20மிமீ ஜல்லி (புளூ மெட்டல்) குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about 40mm Jally (Blue Metal).':
      'வணக்கம் AVR & Co, 40மிமீ ஜல்லி (புளூ மெட்டல்) குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about Bricks supply. Please share availability and details.':
      'வணக்கம் AVR & Co, செங்கற்கள் விநியோகம் குறித்து விசாரிக்க விரும்புகிறேன். இருப்பு மற்றும் விவரங்களைப் பகிரவும்.',
    'Hello AVR & Co, I would like to enquire about UltraTech Cement availability and quotation.':
      'வணக்கம் AVR & Co, UltraTech சிமெண்ட் இருப்பு மற்றும் விலைப்பட்டியல் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about Priya Cement availability and quotation.':
      'வணக்கம் AVR & Co, Priya சிமெண்ட் இருப்பு மற்றும் விலைப்பட்டியல் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about Maha Cement availability and quotation.':
      'வணக்கம் AVR & Co, Maha சிமெண்ட் இருப்பு மற்றும் விலைப்பட்டியல் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about Ramco Cement availability and quotation.':
      'வணக்கம் AVR & Co, Ramco சிமெண்ட் இருப்பு மற்றும் விலைப்பட்டியல் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about Chettinad Cement availability and quotation.':
      'வணக்கம் AVR & Co, Chettinad சிமெண்ட் இருப்பு மற்றும் விலைப்பட்டியல் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about Zuari Cement availability and quotation.':
      'வணக்கம் AVR & Co, Zuari சிமெண்ட் இருப்பு மற்றும் விலைப்பட்டியல் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about Nagarjuna Cement availability and quotation.':
      'வணக்கம் AVR & Co, Nagarjuna சிமெண்ட் இருப்பு மற்றும் விலைப்பட்டியல் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about JSW Steel TMT bars.':
      'வணக்கம் AVR & Co, JSW ஸ்டீல் TMT கம்பிகள் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about ARS Steel TMT bars.':
      'வணக்கம் AVR & Co, ARS ஸ்டீல் TMT கம்பிகள் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about Pulkit Steel TMT bars.':
      'வணக்கம் AVR & Co, Pulkit ஸ்டீல் TMT கம்பிகள் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about MCR Steel TMT bars.':
      'வணக்கம் AVR & Co, MCR ஸ்டீல் TMT கம்பிகள் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about Kaveri Steel TMT bars.':
      'வணக்கம் AVR & Co, Kaveri ஸ்டீல் TMT கம்பிகள் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about I Steel TMT bars.':
      'வணக்கம் AVR & Co, I Steel TMT கம்பிகள் குறித்து விசாரிக்க விரும்புகிறேன்.',
    'Hello AVR & Co, I would like to enquire about TATA Steel TMT bars.':
      'வணக்கம் AVR & Co, TATA ஸ்டீல் TMT கம்பிகள் குறித்து விசாரிக்க விரும்புகிறேன்.'
  };

  let activeLang = 'en';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ta') activeLang = saved;
  } catch (err) {
    activeLang = 'en';
  }

  function renderIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function t(key) {
    return (TRANSLATIONS[activeLang] && TRANSLATIONS[activeLang][key]) || TRANSLATIONS.en[key] || '';
  }

  function updateWhatsAppLinks() {
    document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {
      if (link.closest('#formFeedback')) return;
      try {
        const url = new URL(link.href);
        if (!link.dataset.waEn) {
          const initialText = url.searchParams.get('text');
          if (!initialText) return;
          link.dataset.waEn = initialText;
        }
        const enText = link.dataset.waEn;
        const msg = activeLang === 'ta' ? (WA_TEXT_TA[enText] || enText) : enText;
        link.href = `${url.origin}${url.pathname}?text=${encodeURIComponent(msg)}`;
      } catch (err) {
        // Ignore malformed URLs
      }
    });
  }

  function applyLanguage(lang) {
    activeLang = lang === 'ta' ? 'ta' : 'en';
    document.documentElement.lang = activeLang;

    try {
      localStorage.setItem(STORAGE_KEY, activeLang);
    } catch (err) {
      // Ignore storage failures in restricted contexts
    }

    // Update toggle buttons across header & mobile drawer
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isCurrent = btn.dataset.lang === activeLang;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-pressed', String(isCurrent));
    });

    // Plain text elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (val) el.textContent = val;
    });

    // HTML-formatted elements (icons / spans)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      const val = t(key);
      if (val) el.innerHTML = val;
    });

    // Input/Textarea placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const val = t(key);
      if (val) el.setAttribute('placeholder', val);
    });

    // Render Lucide SVG icons inside any newly injected HTML snippets
    renderIcons();

    // Update all WhatsApp enquiry links to match active language
    updateWhatsAppLinks();

    // Refresh open lightbox caption if currently open
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox && lightbox.classList.contains('open')) {
      renderLightbox(currentLightboxIndex);
    }

    // Re-evaluate desktop header fit whenever language changes
    if (typeof updateHeaderFit === 'function') {
      requestAnimationFrame(updateHeaderFit);
    }
  }

  // Bind language toggle buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  // Ensure WhatsApp links always use the active language on tap/click (including mobile)
  document.addEventListener('click', (e) => {
    const waLink = e.target.closest('a[href*="wa.me/"]');
    if (!waLink || waLink.closest('#formFeedback')) return;
    updateWhatsAppLinks();
  });

  // Re-sync language & WhatsApp links when returning via mobile browser bfcache
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'en' || saved === 'ta') activeLang = saved;
      } catch (err) {
        // Ignore storage failures
      }
      applyLanguage(activeLang);
    }
  });

  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // 2. Highlight Active Navigation Item Across Pages (Desktop, Drawer & Bottom Nav)
  const rawPage = window.location.pathname.split('/').pop();
  const currentPage = rawPage && rawPage.length > 0 ? rawPage.toLowerCase() : 'index.html';
  const productSubPages = ['msand.html', 'jally.html', 'bricks.html'];
  const bottomProductPages = ['products.html', 'cement.html', 'steel.html', 'msand.html', 'jally.html', 'bricks.html'];

  document.querySelectorAll('.main-nav .nav-link, .mobile-nav-link').forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    const isMatch =
      href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (href === 'products.html' && productSubPages.includes(currentPage));
    link.classList.toggle('active', isMatch);
    if (isMatch) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  document.querySelectorAll('.bottom-nav-item').forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    const isMatch =
      href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (href === 'products.html' && bottomProductPages.includes(currentPage));
    link.classList.toggle('active', isMatch);
    if (isMatch) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  // 2b. Full-Width Header Overflow Safeguard & Products Mega-Menu Dropdown
  const siteHeader = document.querySelector('.site-header');
  const headerInner = siteHeader ? siteHeader.querySelector('.header-inner') : null;
  const mainNav = siteHeader ? siteHeader.querySelector('.main-nav') : null;
  const headerLogo = siteHeader ? siteHeader.querySelector('.brand-logo') : null;
  const headerActions = siteHeader ? siteHeader.querySelector('.header-actions') : null;
  const productsDropdown = document.getElementById('productsDropdown');
  const productsTrigger = productsDropdown ? productsDropdown.querySelector('.nav-dropdown-trigger') : null;
  const productsMegaMenu = document.getElementById('productsMegaMenu');

  function updateHeaderFit() {
    if (!siteHeader || !headerInner || !mainNav || !headerLogo || !headerActions) return;
    if (window.innerWidth < 1024) {
      siteHeader.classList.remove('header--compact');
      return;
    }
    siteHeader.classList.remove('header--compact');
    const innerOverflow = headerInner.scrollWidth > headerInner.clientWidth + 1;
    const navOverflow = mainNav.scrollWidth > mainNav.clientWidth + 1;
    const logoRect = headerLogo.getBoundingClientRect();
    const navRect = mainNav.getBoundingClientRect();
    const actionsRect = headerActions.getBoundingClientRect();
    const overlaps = navRect.left < logoRect.right + 8 || navRect.right > actionsRect.left - 8;
    if (innerOverflow || navOverflow || overlaps) {
      siteHeader.classList.add('header--compact');
      setMegaMenuState(false);
    }
  }

  function isDesktopNavActive() {
    return Boolean(siteHeader && window.innerWidth >= 1024 && !siteHeader.classList.contains('header--compact'));
  }

  function positionMegaMenu() {
    if (!productsMegaMenu || !productsDropdown) return;
    productsMegaMenu.style.marginLeft = '0px';
    const rect = productsMegaMenu.getBoundingClientRect();
    const pad = 16;
    if (rect.left < pad) {
      productsMegaMenu.style.marginLeft = `${pad - rect.left}px`;
    } else if (rect.right > window.innerWidth - pad) {
      productsMegaMenu.style.marginLeft = `${window.innerWidth - pad - rect.right}px`;
    }
  }

  function setMegaMenuState(isOpen) {
    if (!productsDropdown || !productsTrigger) return;
    productsDropdown.classList.toggle('open', isOpen);
    productsTrigger.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      requestAnimationFrame(positionMegaMenu);
    }
  }

  if (productsDropdown && productsTrigger && productsMegaMenu) {
    productsDropdown.addEventListener('mouseenter', () => {
      if (isDesktopNavActive()) {
        productsTrigger.setAttribute('aria-expanded', 'true');
        requestAnimationFrame(positionMegaMenu);
      }
    });

    productsDropdown.addEventListener('mouseleave', () => {
      if (isDesktopNavActive() && !productsDropdown.classList.contains('open')) {
        productsTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    productsTrigger.addEventListener('click', (e) => {
      if (!productsDropdown.classList.contains('open')) {
        e.preventDefault();
        setMegaMenuState(true);
      }
    });

    document.addEventListener('click', (e) => {
      if (productsDropdown.classList.contains('open') && !productsDropdown.contains(e.target)) {
        setMegaMenuState(false);
      }
    });
  }

  window.addEventListener('resize', () => {
    updateHeaderFit();
    if (!isDesktopNavActive()) {
      setMegaMenuState(false);
    } else if (productsDropdown && productsDropdown.classList.contains('open')) {
      positionMegaMenu();
    }
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updateHeaderFit);
  }

  // 3. Mobile Navigation Drawer & Products Accordion
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileDrawerLinks = document.querySelectorAll('.mobile-nav-list a');
  const mobileAccToggle = document.querySelector('.mobile-acc-toggle');
  const mobileAccPanel = document.getElementById('mobileProductsPanel');

  function setDrawerState(isOpen) {
    if (!mobileDrawer || !menuToggle) return;
    mobileDrawer.classList.toggle('open', isOpen);
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (menuToggle) menuToggle.addEventListener('click', () => setDrawerState(true));
  if (drawerClose) drawerClose.addEventListener('click', () => setDrawerState(false));
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', () => setDrawerState(false));
  mobileDrawerLinks.forEach((link) => {
    link.addEventListener('click', () => setDrawerState(false));
  });

  if (mobileAccToggle && mobileAccPanel) {
    mobileAccToggle.addEventListener('click', () => {
      const willOpen = mobileAccToggle.getAttribute('aria-expanded') !== 'true';
      mobileAccToggle.setAttribute('aria-expanded', String(willOpen));
      mobileAccPanel.hidden = !willOpen;
    });
  }

  // 4. Gallery Category Filtering & Lightbox (active on gallery.html)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let visibleItems = [...galleryItems];
  let currentLightboxIndex = 0;

  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.filter;
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        galleryItems.forEach((item) => {
          const matches = category === 'all' || item.dataset.category === category;
          item.classList.toggle('is-hidden', !matches);
        });

        visibleItems = galleryItems.filter((item) => !item.classList.contains('is-hidden'));
      });
    });
  }

  function renderLightbox(index) {
    if (!visibleItems.length || !lightboxImg) return;
    currentLightboxIndex = (index + visibleItems.length) % visibleItems.length;
    const item = visibleItems[currentLightboxIndex];
    const img = item.querySelector('img');
    if (!img) return;
    lightboxImg.src = img.getAttribute('src');
    lightboxImg.alt = img.getAttribute('alt') || '';
    if (lightboxCaption) {
      const titleKey = item.dataset.titleKey;
      const localizedTitle = titleKey ? t(titleKey) : '';
      lightboxCaption.textContent = localizedTitle || item.dataset.title || img.getAttribute('alt') || 'AVR & Co Gallery';
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${visibleItems.length}`;
    }
  }

  function openLightbox(item) {
    if (!lightbox) return;
    visibleItems = galleryItems.filter((el) => !el.classList.contains('is-hidden'));
    const idx = visibleItems.indexOf(item);
    renderLightbox(idx >= 0 ? idx : 0);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (galleryItems.length && lightbox) {
    galleryItems.forEach((item) => {
      item.addEventListener('click', () => openLightbox(item));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(item);
        }
      });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => renderLightbox(currentLightboxIndex - 1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => renderLightbox(currentLightboxIndex + 1));

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox && lightbox.classList.contains('open')) closeLightbox();
      if (mobileDrawer && mobileDrawer.classList.contains('open')) setDrawerState(false);
      if (productsDropdown && productsDropdown.classList.contains('open')) setMegaMenuState(false);
    }
    if (lightbox && lightbox.classList.contains('open')) {
      if (e.key === 'ArrowLeft') renderLightbox(currentLightboxIndex - 1);
      if (e.key === 'ArrowRight') renderLightbox(currentLightboxIndex + 1);
    }
  });

  // 5. Customer Enquiry Form -> Dynamic WhatsApp Message Generator (active on contact.html)
  const enquiryForm = document.getElementById('enquiryForm');
  const formFeedback = document.getElementById('formFeedback');
  const WHATSAPP_NUMBER = '919092153480';

  function showFeedback(message, isError, whatsappUrl) {
    if (!formFeedback) return;
    formFeedback.className = `form-feedback show ${isError ? 'form-feedback--error' : 'form-feedback--success'}`;
    formFeedback.textContent = message;
    if (!isError && whatsappUrl) {
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = t('form.ok_manual');
      link.style.fontWeight = '700';
      link.style.textDecoration = 'underline';
      link.style.marginLeft = '6px';
      formFeedback.appendChild(link);
    }
  }

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const productEl = document.getElementById('productSelect');
      const name = document.getElementById('customerName').value.trim();
      const phone = document.getElementById('phoneNumber').value.trim();
      const product = productEl.value.trim();
      const quantity = document.getElementById('quantityRequired').value.trim();
      const location = document.getElementById('deliveryLocation').value.trim();
      const rawMessage = document.getElementById('enquiryMessage').value.trim();

      if (!name || !phone || !product || !quantity || !location) {
        showFeedback(t('form.err_required'), true);
        return;
      }

      const selectedOpt = productEl.options[productEl.selectedIndex];
      const productTa = selectedOpt && selectedOpt.textContent ? selectedOpt.textContent.trim() : product;
      const message = rawMessage || (activeLang === 'ta' ? 'கூடுதல் குறிப்புகள் இல்லை' : 'No additional notes');

      const formattedText = activeLang === 'ta'
        ? [
            'வணக்கம் AVR & Co,',
            'நான் கட்டுமானப் பொருட்கள் வாங்க விரும்புகிறேன்.',
            `பெயர்: ${name}`,
            `தொலைபேசி: ${phone}`,
            `பொருள்: ${productTa}`,
            `அளவு: ${quantity}`,
            `டெலிவரி இடம்: ${location}`,
            `விவரம்: ${message}`,
            'பொருள் இருப்பு மற்றும் விலை விவரங்களைப் பகிரவும்.',
            'நன்றி.'
          ].join('\n')
        : [
            'Hello AVR & Co,',
            'I am interested in purchasing building materials.',
            `Name: ${name}`,
            `Phone: ${phone}`,
            `Product: ${product}`,
            `Quantity: ${quantity}`,
            `Delivery Location: ${location}`,
            `Message: ${message}`,
            'Please share the product availability and quotation.',
            'Thank you.'
          ].join('\n');

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedText)}`;
      showFeedback(t('form.ok_opening'), false, whatsappUrl);
      const popup = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!popup) {
        window.location.href = whatsappUrl;
      }
    });
  }

  // 6. Page Transition Circular Logo Loader
  const pageLoader = document.getElementById('pageLoader');
  let loaderTimer = null;

  function showPageLoader() {
    if (!pageLoader) return;
    pageLoader.classList.add('is-active');
    pageLoader.setAttribute('aria-hidden', 'false');
  }

  function hidePageLoader() {
    if (!pageLoader) return;
    if (loaderTimer) {
      clearTimeout(loaderTimer);
      loaderTimer = null;
    }
    pageLoader.classList.remove('is-active');
    pageLoader.setAttribute('aria-hidden', 'true');
  }

  if (pageLoader) {
    // Smooth brief settle on initial load / page change, plus failsafe timeout
    setTimeout(hidePageLoader, 240);
    window.addEventListener('load', () => setTimeout(hidePageLoader, 120));
    setTimeout(hidePageLoader, 1500);
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) hidePageLoader();
    });

    // Show circular brand loader when navigating to another page in the site
    document.addEventListener('click', (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target.closest('a[href]');
      if (!link) return;
      const rawHref = (link.getAttribute('href') || '').trim();
      if (
        !rawHref ||
        rawHref.startsWith('#') ||
        rawHref.startsWith('tel:') ||
        rawHref.startsWith('mailto:') ||
        rawHref.startsWith('javascript:') ||
        link.target === '_blank' ||
        link.hasAttribute('download')
      ) {
        return;
      }

      let targetUrl;
      try {
        targetUrl = new URL(link.href, window.location.href);
      } catch (err) {
        return;
      }

      if (targetUrl.origin !== window.location.origin) return;
      if (targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search) return;

      e.preventDefault();
      if (typeof setDrawerState === 'function') setDrawerState(false);
      if (typeof setMegaMenuState === 'function') setMegaMenuState(false);
      showPageLoader();

      loaderTimer = setTimeout(() => {
        window.location.href = targetUrl.href;
      }, 220);
    });
  }

  // Apply persisted or default language immediately
  applyLanguage(activeLang);
})();
