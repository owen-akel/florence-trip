const TRIP_DATA = {
  meta: {
    title: "Florence Family Trip",
    dates: "June 28 – July 2, 2026",
    hotel: {
      name: "Hotel (Via Magenta 11)",
      address: "Via Magenta 11, 50123 Florence, Italy",
      neighborhood: "Santa Maria Novella / Central Station",
      coordinates: { lat: 43.7764, lng: 11.2486 }
    },
    dailyBudget: 2000,
    heatWarning: "Italy is under a severe heat wave — Florence is among 12 cities on the highest alert. Expect 35–40°C (95–104°F) from 12pm–4pm. Schedule outdoors before 11am and after 5pm. Carry water, wear light clothing, and seek AC during midday."
  },

  days: [
    // ============================================================
    // DAY 1 — Sunday, June 28: Arrival & Orientation
    // ============================================================
    {
      date: "Sunday, June 28",
      dayNumber: 1,
      theme: "Arrival & Orientation",
      subtitle: "Arrive ~4pm, settle in, golden hour stroll, first Florentine dinner",
      budgetEstimate: "€350–500",
      slots: [
        {
          time: "4:00",
          label: "Arrive & Check In",
          description: "Arrive in Florence ~4pm. Check into the hotel at Via Magenta 11 (steps from Santa Maria Novella station). Unpack, freshen up.",
          options: []
        },
        {
          time: "4:30–5:30",
          label: "Gelato",
          description: "Head out as the heat eases for artisanal gelato.",
          options: [
            {
              name: "Gelateria della Passera",
              type: "food",
              cuisine: "Gelato",
              description: "Tiny shop tucked in Piazza della Passera in Oltrarno. Seasonal rotating flavors, everything made fresh. A true local favorite far from tourist crowds.",
              distance: "15 min walk from hotel (Oltrarno)",
              rating: "4.5/5 TripAdvisor (2,400+ reviews)",
              price: "€3–6",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d1861207-Reviews-Gelateria_della_Passera-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Carabé",
              type: "food",
              cuisine: "Sicilian Gelato / Granita",
              description: "Traditional Sicilian gelato near Piazza SS. Annunziata. Famous for fruit flavors and authentic granita with brioche. Few flavors, all exceptional.",
              distance: "15 min walk from hotel",
              rating: "4.5/5 TripAdvisor (2,000+ reviews)",
              price: "€3–6",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d1109185-Reviews-Gelateria_Carabe-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Gelateria dei Medici",
              type: "food",
              cuisine: "Gelato",
              description: "In the residential Statuto neighborhood — no English menus, no tourists. Locals-only vibe with some of Florence's best gelato.",
              distance: "12 min walk from hotel (north)",
              rating: "4.5/5 Google (1,500+ reviews)",
              price: "€3–5",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d942830-Reviews-Gelateria_de_Medici-Florence_Tuscany.html",
              bookingRequired: false
            }
          ]
        },
        {
          time: "5:30–7:30",
          label: "Golden Hour Walk",
          description: "Evening stroll as temperatures drop — the city glows in late-day light.",
          options: [
            {
              name: "Ponte Vecchio → Piazzale Michelangelo",
              type: "activity",
              description: "Cross the iconic bridge, then climb (or taxi) to Piazzale Michelangelo for panoramic sunset views over Florence. The walk up takes 20–25 min from the river.",
              distance: "10 min walk to Ponte Vecchio, then 25 min uphill",
              rating: "4.5/5 TripAdvisor",
              price: "Free",
              link: "https://www.tripadvisor.com/Attraction_Review-g187895-d246287-Reviews-Piazzale_Michelangelo-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Giardino delle Rose + San Miniato al Monte",
              type: "activity",
              description: "Less crowded alternative to Piazzale Michelangelo. The Rose Garden is free and shaded, then continue up to San Miniato — a stunning Romanesque church with even better views.",
              distance: "20 min walk from Ponte Vecchio",
              rating: "4.5/5 TripAdvisor (San Miniato: 6,500+ reviews)",
              price: "Free / donation",
              link: "https://www.tripadvisor.com/Attraction_Review-g187895-d195736-Reviews-Basilica_San_Miniato_al_Monte-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Oltrarno Neighborhood Walk",
              type: "activity",
              description: "Skip the climb. Wander the artisan streets of Oltrarno — Via Maggio, Piazza Santo Spirito, Borgo San Jacopo. Leather workshops, local bars, zero tourist groups.",
              distance: "12 min walk from hotel",
              rating: "N/A — neighborhood",
              price: "Free",
              link: "https://www.visitflorence.com/florence-neighborhoods/oltrarno.html",
              bookingRequired: false
            }
          ]
        },
        {
          time: "8:00–10:00",
          label: "Dinner",
          description: "First night — walk to a nearby restaurant for a proper Florentine welcome.",
          options: [
            {
              name: "Trattoria Sostanza (Il Troia)",
              type: "food",
              cuisine: "Classic Florentine",
              description: "Open since 1869. Communal tables, no menus on the wall — just legendary butter chicken, artichoke omelet, and bistecca. Cash only. Book ahead.",
              distance: "5 min walk from hotel",
              rating: "4.5/5 TripAdvisor (2,600+ reviews)",
              price: "€40–60/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d743678-Reviews-Trattoria_Sostanza-Florence_Tuscany.html",
              bookingRequired: true,
              bookingInfo: "Call +39 055 212691 — no online booking. Reserve 2–3 days ahead."
            },
            {
              name: "Osteria Vecchio Cancello",
              type: "food",
              cuisine: "Traditional Tuscan",
              description: "No-frills Florentine cooking, covered patio and rustic interior. Homemade pastas, grilled meats, generous portions. Priced for locals, not tourists.",
              distance: "10 min walk from hotel",
              rating: "4.5/5 TripAdvisor (400+ reviews)",
              price: "€25–40/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d8322795-Reviews-Osteria_Vecchio_Cancello-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Tehran Restaurant",
              type: "food",
              cuisine: "Persian",
              description: "A hidden gem bringing authentic Persian cuisine to central Florence. Beautiful decor with a flower shop inside, attentive service, and richly spiced dishes — kebabs, stews, saffron rice.",
              distance: "8 min walk from hotel",
              rating: "4.5/5 TripAdvisor (600+ reviews)",
              price: "€25–40/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d11890777-Reviews-Ristorante_Persiano_Tehran-Florence_Tuscany.html",
              bookingRequired: true,
              bookingInfo: "Reserve on TheFork or call the restaurant."
            },
            {
              name: "Konnubio",
              type: "food",
              cuisine: "Contemporary Italian (Michelin-recognized)",
              description: "Chef Beatrice Segoni's creative take on Tuscan cuisine. Beautiful interior, inventive dishes, natural wines. A splurge-worthy first night option.",
              distance: "10 min walk from hotel",
              rating: "4.5/5 TripAdvisor (1,800+ reviews)",
              price: "€50–70/person",
              link: "https://www.konnubio.com",
              bookingRequired: true,
              bookingInfo: "Book on their website or via TheFork."
            }
          ]
        }
      ]
    },

    // ============================================================
    // DAY 2 — Monday, June 29: Florence Art & Culture
    // ============================================================
    {
      date: "Monday, June 29",
      dayNumber: 2,
      theme: "Florence Art & Culture",
      subtitle: "Beat the heat in world-class museums",
      budgetEstimate: "€700–950",
      slots: [
        {
          time: "7:30",
          label: "Breakfast",
          description: "Fuel up before the Uffizi opens — options near the hotel or en route.",
          options: [
            {
              name: "Tino Bistrò",
              type: "food",
              cuisine: "International Brunch",
              description: "400m from the train station. US/UK brunch classics — eggs Benedict, pancakes, avocado toast — plus Italian pastries. Warm lighting, brick walls.",
              distance: "5 min walk from hotel",
              rating: "4.5/5 TripAdvisor",
              price: "€10–18",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d14760017-Reviews-Tino_Bistro_Ex_Tino_Caffe-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Rooster Cafe",
              type: "food",
              cuisine: "American-style Breakfast",
              description: "Pancake stacks, eggs & bacon combos, waffles with fried chicken. Locals keep coming back. Good coffee.",
              distance: "10 min walk from hotel",
              rating: "4.5/5 TripAdvisor (700+ reviews)",
              price: "€10–16",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d12962718-Reviews-Rooster_Cafe_Firenze-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Local Bar (Italian style)",
              type: "food",
              cuisine: "Italian Breakfast",
              description: "Stand at the bar for a €3 cappuccino + cornetto like a Florentine. Try any bar on Via dei Panzani or Via Faenza near the hotel.",
              distance: "2–5 min walk",
              rating: "N/A — any neighborhood bar",
              price: "€3–5/person",
              link: null,
              bookingRequired: false
            }
          ]
        },
        {
          time: "8:15–11:00",
          label: "Morning Museum",
          description: "Book the earliest slot to beat crowds AND heat. All options are air-conditioned.",
          options: [
            {
              name: "Uffizi Gallery (8:15 AM early bird)",
              type: "activity",
              description: "The world's greatest Renaissance art collection — Botticelli's Birth of Venus, Caravaggio, Leonardo. The 8:15 slot is discounted to €19/pp and gets you in before tour groups. AC throughout.",
              distance: "15 min walk from hotel",
              rating: "4.5/5 TripAdvisor (56,000+ reviews)",
              price: "€25/pp walk-up, €29 online (includes reservation). Afternoon entry from 4pm: €16 walk-up / €20 online",
              link: "https://www.uffizi.it/en/tickets",
              bookingRequired: true,
              bookingInfo: "Book timed entry at uffizi.it — early bird slots sell out weeks ahead in summer."
            },
            {
              name: "Galleria dell'Accademia (Michelangelo's David)",
              type: "activity",
              description: "Home to the original David plus unfinished Michelangelo sculptures (the Prisoners). Smaller and faster than the Uffizi — 1–1.5 hours. Fully air-conditioned.",
              distance: "10 min walk from hotel",
              rating: "4.5/5 TripAdvisor (38,000+ reviews)",
              price: "€20/pp (online with reservation fee)",
              link: "https://www.galleriaaccademiafirenze.it/en/tickets/",
              bookingRequired: true,
              bookingInfo: "Book timed 15-min slots via B-Ticket. Morning slots sell out fast."
            },
            {
              name: "Museo Nazionale del Bargello",
              type: "activity",
              description: "Florence's sculpture museum in a medieval fortress. Donatello's bronze David, Verrocchio, Cellini. Fraction of the Uffizi crowds, equally stunning. Cool thick stone walls.",
              distance: "15 min walk from hotel",
              rating: "4.5/5 TripAdvisor (3,200+ reviews)",
              price: "€9/pp (or €25 for 3-day combo with Palazzo Davanzati + Medici Chapels)",
              link: "https://www.b-ticket.com/b-ticket/firenzemusei/default_eng.aspx.html",
              bookingRequired: false,
              bookingInfo: "Rarely sells out — can buy at the door."
            }
          ]
        },
        {
          time: "11:00–11:30",
          label: "Quick Walk",
          description: "If at the Uffizi, step outside to Piazza della Signoria — Palazzo Vecchio's open-air sculpture collection (free to view from the piazza).",
          options: []
        },
        {
          time: "11:30–12:30",
          label: "Lunch",
          description: "Eat near wherever the morning took you, before retreating from the heat.",
          options: [
            {
              name: "Trattoria Mario",
              type: "food",
              cuisine: "Traditional Florentine",
              description: "Behind the Central Market. Communal tables, hand-scrawled menus, huge portions at tiny prices. Florentines' favorite — expect a short queue. Cash only, no reservations.",
              distance: "8 min walk from hotel (near Mercato Centrale)",
              rating: "4.0/5 TripAdvisor (6,500+ reviews)",
              price: "€10–18/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d1088282-Reviews-Trattoria_Mario-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Coquinarius",
              type: "food",
              cuisine: "Wine Bar / Tuscan Small Plates",
              description: "Hidden gem near the Duomo. Creative pasta dishes, exceptional wine pairings, cheese and crostini boards. Cozy underground space — cool in summer.",
              distance: "12 min walk from hotel",
              rating: "4.5/5 TripAdvisor (2,500+ reviews)",
              price: "€18–30/person",
              link: "https://www.coquinarius.it",
              bookingRequired: true,
              bookingInfo: "Book via their website or TheFork for lunch."
            },
            {
              name: "SimBIOsi Organic Pizzeria",
              type: "food",
              cuisine: "Organic Pizza / Vegetarian-Friendly",
              description: "Near the Duomo. All organic, high-quality ingredients. Great vegetarian, vegan, and gluten-free options. Sourdough pizza with creative toppings.",
              distance: "12 min walk from hotel",
              rating: "4.5/5 TripAdvisor (3,200+ reviews)",
              price: "€12–20/person",
              link: "https://www.simbiosi.bio",
              bookingRequired: false
            },
            {
              name: "Banki Ramen",
              type: "food",
              cuisine: "Japanese Ramen",
              description: "One of Florence's best ramen shops. Authentic broths, simple presentations, not over-topped. A welcome break from Italian food on day two.",
              distance: "10 min walk from hotel",
              rating: "4.0/5 TripAdvisor (500+ reviews)",
              price: "€12–18/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d3678330-Reviews-Banki_Ramen-Florence_Tuscany.html",
              bookingRequired: false
            }
          ]
        },
        {
          time: "12:30–4:00",
          label: "Afternoon Museum or Rest",
          description: "Either retreat to the hotel for AC, or continue into another air-conditioned museum.",
          options: [
            {
              name: "Palazzo Pitti + Palatine Gallery",
              type: "activity",
              description: "One of Italy's largest palaces — metre-thick stone walls keep it degrees cooler than outside. The Palatine Gallery has Raphael, Titian, Rubens. Combined ticket covers all collections.",
              distance: "18 min walk from hotel (across the Arno)",
              rating: "4.5/5 TripAdvisor (14,000+ reviews)",
              price: "€16/pp (online); Boboli Gardens included",
              link: "https://www.uffizi.it/en/pitti-palace",
              bookingRequired: true,
              bookingInfo: "Book at uffizi.it or buy at the Pitti ticket office."
            },
            {
              name: "Palazzo Davanzati — Museum of the Old Florentine House",
              type: "activity",
              description: "14th-century merchant's mansion preserved as a home. See how wealthy Florentines actually lived — furniture, frescoes, kitchenware. Almost no tourists. Cool interior.",
              distance: "10 min walk from hotel",
              rating: "4.5/5 TripAdvisor (600+ reviews)",
              price: "€9/pp (or €25 combo with Bargello + Medici Chapels)",
              link: "https://www.b-ticket.com/b-Ticket/uffizi/info_venue_palazzo_davanzati_eng.aspx.html",
              bookingRequired: false
            },
            {
              name: "Return to hotel / pool / rest",
              type: "activity",
              description: "The safest option during the heat wave. Recharge for the evening. Peak outdoor temperatures 35–40°C.",
              distance: "—",
              rating: "N/A",
              price: "Free",
              link: null,
              bookingRequired: false
            }
          ]
        },
        {
          time: "5:30–6:30",
          label: "Late Afternoon Activity",
          description: "Temperatures dropping — head out for a lighter activity.",
          options: [
            {
              name: "San Miniato al Monte",
              type: "activity",
              description: "Romanesque church (1013 AD) with stunning views. Less crowded than Piazzale Michelangelo, more beautiful. Gregorian chant vespers sometimes at 5:30pm.",
              distance: "25 min walk from hotel (uphill from Oltrarno)",
              rating: "4.5/5 TripAdvisor (6,500+ reviews)",
              price: "Free / donation",
              link: "https://www.tripadvisor.com/Attraction_Review-g187895-d195736-Reviews-Basilica_San_Miniato_al_Monte-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Boboli Gardens (late afternoon stroll)",
              type: "activity",
              description: "If you visited Palazzo Pitti, your ticket includes Boboli. The gardens are at their best in late afternoon light with fewer visitors and cooler air.",
              distance: "18 min walk from hotel",
              rating: "4.0/5 TripAdvisor (9,000+ reviews)",
              price: "Included with Pitti ticket",
              link: "https://www.uffizi.it/en/boboli-garden",
              bookingRequired: false
            },
            {
              name: "Santa Maria Novella Basilica & Pharmacy",
              type: "activity",
              description: "The basilica is a 3-min walk from the hotel with masterworks by Masaccio and Ghirlandaio. Then visit the Officina Profumo-Farmaceutica — the world's oldest pharmacy (1221), now a fragrance shop.",
              distance: "3 min walk from hotel",
              rating: "4.5/5 TripAdvisor (basilica: 8,000+ reviews)",
              price: "Basilica €7.50; Pharmacy free to enter",
              link: "https://www.smn.it/en/",
              bookingRequired: false
            }
          ]
        },
        {
          time: "8:30–10:30",
          label: "Dinner",
          description: "Full Tuscan dinner. Head to the Oltrarno or stay near the hotel.",
          options: [
            {
              name: "Il Santo Bevitore",
              type: "food",
              cuisine: "Modern Tuscan",
              description: "On Via di Santo Spirito in Oltrarno. Seasonal Tuscan ingredients, modern presentation, excellent wine list. Buzzy atmosphere, well-priced for quality. A local date-night spot.",
              distance: "15 min walk from hotel",
              rating: "4.5/5 TripAdvisor (4,400+ reviews)",
              price: "€35–50/person",
              link: "https://www.ilsantobevitore.com",
              bookingRequired: true,
              bookingInfo: "Book via TheFork or call +39 055 211264."
            },
            {
              name: "Trattoria La Casalinga",
              type: "food",
              cuisine: "Traditional Florentine",
              description: "Family-owned since 1963 in Piazza Santo Spirito. Hearty pastas, beef stew, ribollita. No-frills decor, enormous portions, very fairly priced.",
              distance: "15 min walk from hotel (Oltrarno)",
              rating: "4.0/5 TripAdvisor (4,000+ reviews)",
              price: "€15–25/person",
              link: "https://www.trattorialacasalinga.it",
              bookingRequired: false
            },
            {
              name: "Il Cuore — Ristorante Giapponese",
              type: "food",
              cuisine: "Japanese (High-end)",
              description: "Refined Japanese cuisine with top-quality ingredients. Traditional techniques, western presentation. Sushi, sashimi, tempura, omakase-style options. A break from Italian.",
              distance: "10 min walk from hotel",
              rating: "9.6/10 TheFork",
              price: "€40–65/person",
              link: "https://www.thefork.com/restaurant/il-cuore-ristorante-giapponese-r788937",
              bookingRequired: true,
              bookingInfo: "Book on TheFork — popular, especially weekends."
            },
            {
              name: "Taj Palace",
              type: "food",
              cuisine: "North Indian",
              description: "Ranked #1 Indian restaurant in Florence on TripAdvisor. Authentic North Indian recipes, professional chefs, warm service. Excellent tandoori and curry dishes.",
              distance: "10 min walk from hotel",
              rating: "4.5/5 TripAdvisor (1,800+ reviews)",
              price: "€20–35/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d2052086-Reviews-Ristorante_Taj_Palace-Florence_Tuscany.html",
              bookingRequired: true,
              bookingInfo: "Call for reservation, especially weekends."
            }
          ]
        }
      ]
    },

    // ============================================================
    // DAY 3 — Tuesday, June 30: Beach Day — Forte dei Marmi or Viareggio
    // ============================================================
    {
      date: "Tuesday, June 30",
      dayNumber: 3,
      theme: "Beach Day Escape",
      subtitle: "Train to the Tuscan coast — sea breeze beats the heat wave",
      budgetEstimate: "€850–1,200",
      slots: [
        {
          time: "7:00",
          label: "Early Breakfast",
          description: "Quick breakfast near the hotel or at the train station before departure.",
          options: [
            {
              name: "Hotel breakfast or local bar",
              type: "food",
              cuisine: "Italian Breakfast",
              description: "Cappuccino + cornetto at the hotel or any bar on Via Nazionale. Keep it quick — you have a train to catch.",
              distance: "0–5 min",
              rating: "N/A",
              price: "€3–8/person",
              link: null,
              bookingRequired: false
            }
          ]
        },
        {
          time: "7:45",
          label: "Train to the Coast",
          description: "Florence SMN is a 5-minute walk from the hotel. Choose your beach destination.",
          options: [
            {
              name: "Train to Forte dei Marmi (via Pietrasanta)",
              type: "activity",
              description: "Tuscany's most glamorous beach town. Crystal clear water, upscale beach clubs, designer boutiques. ~1h 50m via Regionale train to Pietrasanta then local bus/taxi.",
              distance: "5 min walk to Florence SMN station",
              rating: "N/A — transport",
              price: "€15–20/pp each way (Regionale)",
              link: "https://www.thetrainline.com/en/train-times/florence-to-forte-dei-marmi",
              bookingRequired: false,
              bookingInfo: "Buy at Trenitalia machines in the station or online at trenitalia.com."
            },
            {
              name: "Train to Viareggio",
              type: "activity",
              description: "Closer and easier — direct train, 1h 20m. Station is 5 min walk from the beach. Golden sand, lively promenade, great seafood restaurants. More casual than Forte dei Marmi.",
              distance: "5 min walk to Florence SMN station",
              rating: "N/A — transport",
              price: "€9–14/pp each way",
              link: "https://www.thetrainline.com/en/train-times/florence-to-viareggio",
              bookingRequired: false,
              bookingInfo: "Frequent departures — 37 trains/day. Buy at the station."
            },
            {
              name: "Train to Castiglioncello",
              type: "activity",
              description: "The locals' secret beach. Rocky coves, pine-forested cliffs, turquoise water. ~1h 45m by train. Less infrastructure, more natural beauty.",
              distance: "5 min walk to Florence SMN station",
              rating: "N/A — transport",
              price: "€10–15/pp each way",
              link: "https://www.thetrainline.com/en/train-times/florence-to-castiglioncello",
              bookingRequired: false
            }
          ]
        },
        {
          time: "10:00–5:00",
          label: "Beach Day",
          description: "Settle into a beach club (bagno) for the day — umbrella, loungers, restaurant, and bar included.",
          options: [
            {
              name: "Bagno Piero (Forte dei Marmi)",
              type: "activity",
              description: "Historic beach club on the 'noble sands.' Excellent seafood kitchen with catch-of-the-day specials. Loungers, umbrellas, full service.",
              distance: "In Forte dei Marmi",
              rating: "4.5/5 TripAdvisor",
              price: "€40–80 for umbrella + 2 loungers; lunch separate",
              link: "https://www.tripadvisor.com/Attraction_Review-g194766-d10486938-Reviews-Bagno_Piero-Forte_dei_Marmi_Province_of_Lucca_Tuscany.html",
              bookingRequired: true,
              bookingInfo: "Call ahead in peak season, especially weekends."
            },
            {
              name: "Bagno Annetta (Forte dei Marmi)",
              type: "activity",
              description: "Classic Versilia beach club. Relaxed, family-friendly, with a good restaurant. Less pretentious than some FdM clubs.",
              distance: "In Forte dei Marmi",
              rating: "4.0/5 TripAdvisor",
              price: "€40–80 for umbrella + 2 loungers",
              link: "https://www.tripadvisor.com/Restaurant_Review-g194766-d3533130-Reviews-Bagno_Annetta-Forte_dei_Marmi_Province_of_Lucca_Tuscany.html",
              bookingRequired: true,
              bookingInfo: "Reserve in advance for weekends."
            },
            {
              name: "Bagno Irene (Viareggio)",
              type: "activity",
              description: "Easy walk from Viareggio station. Fabulous on-site restaurant known for fresh seafood. Full beach club facilities, family-friendly.",
              distance: "In Viareggio (10 min from station)",
              rating: "4.5/5 TripAdvisor",
              price: "€25–40 for umbrella + 2 loungers",
              link: "https://www.tripadvisor.com/Attraction_Review-g194946-d4889791-Reviews-Bagno_Irene-Viareggio_Province_of_Lucca_Tuscany.html",
              bookingRequired: false
            }
          ]
        },
        {
          time: "1:00",
          label: "Seafood Lunch",
          description: "Fresh-from-the-sea lunch at the beach or a nearby restaurant.",
          options: [
            {
              name: "Osteria del Mare (Forte dei Marmi)",
              type: "food",
              cuisine: "Tuscan Seafood",
              description: "Elegant seafood near the historic center. Don't miss the tagliolini with red prawns and courgette flowers, or the lobster salad.",
              distance: "In Forte dei Marmi center",
              rating: "4.5/5 TripAdvisor",
              price: "€40–60/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g194766-d947867-Reviews-Osteria_del_Mare-Forte_dei_Marmi_Province_of_Lucca_Tuscany.html",
              bookingRequired: true,
              bookingInfo: "Reserve for lunch — it fills up in summer."
            },
            {
              name: "Ristorante Lorenzo (Forte dei Marmi)",
              type: "food",
              cuisine: "Michelin-starred Seafood",
              description: "Legendary in Forte dei Marmi. One Michelin star. High-end but not stuffy — impeccable seafood in a beautiful setting.",
              distance: "In Forte dei Marmi center",
              rating: "4.5/5 TripAdvisor (1,500+ reviews)",
              price: "€70–100/person",
              link: "https://www.ristorantelorenzo.com",
              bookingRequired: true,
              bookingInfo: "Essential to book — reserve via their website or call."
            },
            {
              name: "Trattoria Buonamico (Viareggio)",
              type: "food",
              cuisine: "Seafood / Tuscan",
              description: "Local favorite in Viareggio for fresh fish, spaghetti alle arselle (clams), and cacciucco (fish stew). Unpretentious, excellent value.",
              distance: "In Viareggio (Darsena district)",
              rating: "4.5/5 TripAdvisor",
              price: "€25–40/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g194946-d743714-Reviews-Trattoria_Buonamico-Viareggio_Province_of_Lucca_Tuscany.html",
              bookingRequired: true,
              bookingInfo: "Book for lunch, especially weekends."
            }
          ]
        },
        {
          time: "5:30",
          label: "Train Back",
          description: "Return to Florence on the late afternoon train. Showers and freshen up at hotel.",
          options: []
        },
        {
          time: "9:00–10:30",
          label: "Dinner Back in Florence",
          description: "Late dinner near the hotel after a beach day.",
          options: [
            {
              name: "Buca Mario",
              type: "food",
              cuisine: "Classic Florentine (underground)",
              description: "One of Florence's oldest restaurants (1886). Underground vaulted cellar stays cool. Famous for bistecca alla fiorentina. White-tablecloth service with old-world charm.",
              distance: "5 min walk from hotel",
              rating: "4.0/5 TripAdvisor (3,800+ reviews)",
              price: "€40–60/person",
              link: "https://www.bucamario.com",
              bookingRequired: true,
              bookingInfo: "Book via their website or call +39 055 214179."
            },
            {
              name: "L'Brindellone",
              type: "food",
              cuisine: "Home-style Florentine",
              description: "In Piazza Piattellina, Oltrarno. Serves local cuisine mainly to locals — their sausage with beans is legendary. Zero pretension, maximum flavor.",
              distance: "15 min walk from hotel",
              rating: "4.0/5 TripAdvisor (900+ reviews)",
              price: "€15–25/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d1109363-Reviews-I_Brindellone-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Santo Falafel",
              type: "food",
              cuisine: "Middle Eastern / Vegan-Friendly",
              description: "In the Santo Spirito neighborhood. Wraps, falafel platters, hummus, and spreads. Great vegan and vegetarian options. Casual, affordable, and satisfying after a beach day.",
              distance: "15 min walk from hotel",
              rating: "4.5/5 TripAdvisor (200+ reviews)",
              price: "€8–15/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d20009104-Reviews-Santo_Falafel-Florence_Tuscany.html",
              bookingRequired: false
            }
          ]
        }
      ]
    },

    // ============================================================
    // DAY 4 — Wednesday, July 1: Ferrari Museum & Emilia-Romagna
    // ============================================================
    {
      date: "Wednesday, July 1",
      dayNumber: 4,
      theme: "Ferrari Museum & Emilia-Romagna",
      subtitle: "Supercars, Parmesan, and Balsamic Vinegar",
      budgetEstimate: "€1,100–1,750",
      slots: [
        {
          time: "7:00",
          label: "Breakfast",
          description: "Quick breakfast before departure — long day ahead.",
          options: [
            {
              name: "Hotel breakfast or local bar",
              type: "food",
              cuisine: "Italian Breakfast",
              description: "Cappuccino + cornetto. Keep it simple — you're heading out early.",
              distance: "0–5 min",
              rating: "N/A",
              price: "€3–8/person",
              link: null,
              bookingRequired: false
            }
          ]
        },
        {
          time: "7:30",
          label: "Depart for Maranello",
          description: "~2 hours to Maranello. Choose your transport method.",
          options: [
            {
              name: "Guided Supercar Day Tour (pickup from Florence)",
              type: "activity",
              description: "Full-day tours typically include Ferrari Museum + Lamborghini Museum or Pagani factory, plus lunch and a test drive in a supercar. Pickup/dropoff at your hotel.",
              distance: "Pickup from hotel",
              rating: "5.0/5 on most tour platforms",
              price: "€400–800/person (varies by tour)",
              link: "https://www.getyourguide.com/maranello-l2332/",
              bookingRequired: true,
              bookingInfo: "Book 1–2 weeks ahead via GetYourGuide or Viator."
            },
            {
              name: "Rental Car (self-drive)",
              type: "activity",
              description: "Rent from Florence and drive the A1 autostrada north — ~2 hours. Most flexible option. Park at the museum (free lot). Return via Modena for food stops.",
              distance: "Rental agencies near SMN station",
              rating: "N/A",
              price: "€60–120/day for car rental + fuel",
              link: "https://www.rentalcars.com/SearchResults.do?searchTerm=Florence",
              bookingRequired: true,
              bookingInfo: "Book online in advance for better rates."
            },
            {
              name: "Train to Modena + Taxi to Maranello",
              type: "activity",
              description: "High-speed train Florence → Modena (1h). Then taxi or local bus to Maranello (~20 min). More affordable than a tour, but less flexible for food stops.",
              distance: "5 min walk to Florence SMN",
              rating: "N/A",
              price: "€30–50/pp train + ~€25 taxi each way",
              link: "https://www.thetrainline.com/en/train-times/florence-to-modena",
              bookingRequired: false
            }
          ]
        },
        {
          time: "10:30–12:30",
          label: "Ferrari Museum",
          description: "The main event — interactive exhibits, historic F1 cars, simulators.",
          options: [
            {
              name: "Museo Ferrari, Maranello",
              type: "activity",
              description: "Interactive exhibits, full F1 car collection, driving simulators (€8 extra). The brand's spiritual home. Air-conditioned throughout. Last entry 18:15 (Apr–Oct).",
              distance: "In Maranello",
              rating: "4.5/5 TripAdvisor (5,500+ reviews)",
              price: "€17/adult, €7/child (6-14), free under 6. Combo with Modena museum: €24/adult",
              link: "https://www.ferrari.com/en-EN/museums/ferrari-maranello",
              bookingRequired: false,
              bookingInfo: "Buy online at ferrari.com or at the door. Rarely sells out on weekdays."
            },
            {
              name: "Museo Enzo Ferrari, Modena (alternative or add-on)",
              type: "activity",
              description: "In Modena — focuses on Enzo Ferrari's life and early racing history. The building itself is a stunning yellow aluminum sculpture over his birthplace. Combo ticket recommended.",
              distance: "In Modena (20 min from Maranello)",
              rating: "4.5/5 TripAdvisor (3,600+ reviews)",
              price: "€17/adult, or €24 combo with Maranello museum",
              link: "https://www.ferrari.com/en-EN/museums/museo-enzo-ferrari",
              bookingRequired: false
            }
          ]
        },
        {
          time: "12:30–2:00",
          label: "Lunch in Emilia-Romagna",
          description: "Emilia-Romagna is Italy's food capital — don't miss the local specialties.",
          options: [
            {
              name: "Ristorante Montana (Maranello)",
              type: "food",
              cuisine: "Emilian / Italian",
              description: "Steps from the Ferrari Museum. Loved by locals and Ferrari employees alike. Excellent tortellini, tigelle, and gnocco fritto. Family-run, cozy atmosphere.",
              distance: "Near Ferrari Museum",
              rating: "4.5/5 TripAdvisor (1,200+ reviews)",
              price: "€20–35/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g1054731-d5814015-Reviews-Ristorante_Montana-Fiorano_Modenese_Province_of_Modena_Emilia_Romagna.html",
              bookingRequired: true,
              bookingInfo: "Reserve for lunch — it's popular with museum visitors."
            },
            {
              name: "Ristorante Lo Smeraldo (Maranello)",
              type: "food",
              cuisine: "Emilian / Pizza",
              description: "Adorned with Ferrari memorabilia — visited by F1 drivers and Ferrari VIPs. Known for the best pizza in Maranello, plus traditional Emilian pasta.",
              distance: "Near Ferrari Museum",
              rating: "4.5/5 TripAdvisor (900+ reviews)",
              price: "€15–25/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187802-d1898956-Reviews-Lo_Smeraldo-Maranello_Province_of_Modena_Emilia_Romagna.html",
              bookingRequired: false
            },
            {
              name: "Osteria Francescana (Modena) — Splurge",
              type: "food",
              cuisine: "Contemporary Italian (3 Michelin Stars)",
              description: "Massimo Bottura's legendary restaurant — regularly ranked among the world's best. If you can get a table, it's a once-in-a-lifetime meal. Book months ahead.",
              distance: "In Modena center",
              rating: "4.5/5 TripAdvisor",
              price: "€250–350/person (tasting menu)",
              link: "https://osteriafrancescana.it",
              bookingRequired: true,
              bookingInfo: "Reservations open months in advance — check their website. Extremely difficult to book."
            }
          ]
        },
        {
          time: "2:30–3:30",
          label: "Food Experience",
          description: "Emilia-Romagna specialty — visit a producer.",
          options: [
            {
              name: "Parmigiano Reggiano Factory Visit",
              type: "activity",
              description: "Tour a production facility, watch the cheese being made and aged, and taste the real thing. Many farms near Modena offer visits. Best booked in advance.",
              distance: "20–30 min from Maranello",
              rating: "Varies by farm — typically 5/5",
              price: "€15–25/person",
              link: "https://www.getyourguide.com/modena-l997/parmigiano-reggiano-tc176/",
              bookingRequired: true,
              bookingInfo: "Book via GetYourGuide or contact farms directly. Morning visits are more common."
            },
            {
              name: "Acetaia (Traditional Balsamic Vinegar) Tour",
              type: "activity",
              description: "Visit a family-run acetaia in Modena where traditional balsamic vinegar ages for 12–25+ years. Tasting included. A uniquely Modenese experience.",
              distance: "15–25 min from Maranello",
              rating: "4.5/5 typically",
              price: "€15–30/person",
              link: "https://www.getyourguide.com/modena-l997/balsamic-vinegar-tc177/",
              bookingRequired: true,
              bookingInfo: "Book in advance — most visits are by appointment only."
            },
            {
              name: "Skip and head back to Florence early",
              type: "activity",
              description: "If the family is tired, skip the food tour and get back to Florence by 5pm for pool/rest time before dinner.",
              distance: "—",
              rating: "N/A",
              price: "Free",
              link: null,
              bookingRequired: false
            }
          ]
        },
        {
          time: "4:00–6:30",
          label: "Return to Florence",
          description: "Drive or train back. Rest and freshen up at hotel.",
          options: []
        },
        {
          time: "8:30–10:30",
          label: "Dinner",
          description: "After a big day, eat near the hotel.",
          options: [
            {
              name: "Buca Lapi",
              type: "food",
              cuisine: "Classic Florentine (underground cellar)",
              description: "Bistecca specialists since 1880. Vaulted cellar under Palazzo Antinori stays cool — perfect after a hot day. White tablecloths, impeccable service, serious steak.",
              distance: "5 min walk from hotel",
              rating: "4.0/5 TripAdvisor (2,400+ reviews)",
              price: "€50–70/person",
              link: "https://www.bucalapi.com",
              bookingRequired: true,
              bookingInfo: "Book on their website or call +39 055 213768."
            },
            {
              name: "Enoteca Bellini",
              type: "food",
              cuisine: "Wine Bar / Italian Small Plates",
              description: "Between the station and downtown. One of Florence's 'it' spots for wine lovers. Experimental and natural Italian wines, paired with seasonal small plates.",
              distance: "5 min walk from hotel",
              rating: "4.5/5 TripAdvisor",
              price: "€30–50/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d10090324-Reviews-Enoteca_Bellini_di_Camilla_Bellini_C_s_a_s-Florence_Tuscany.html",
              bookingRequired: true,
              bookingInfo: "Reserve via TheFork."
            },
            {
              name: "Satori Restaurant",
              type: "food",
              cuisine: "Japanese (Eclectic)",
              description: "In a 17th-century building — eclectic Japanese cuisine with 100+ dishes. Ramen, tempura, sushi, all-you-can-eat options. A full change of pace after Emilian food.",
              distance: "12 min walk from hotel",
              rating: "4.0/5 TripAdvisor (500+ reviews)",
              price: "€25–40/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d8473169-Reviews-Satori-Florence_Tuscany.html",
              bookingRequired: true,
              bookingInfo: "Book via TheFork or call the restaurant."
            }
          ]
        }
      ]
    },

    // ============================================================
    // DAY 5 — Thursday, July 2: Duomo, Accademia & Oltrarno
    // ============================================================
    {
      date: "Thursday, July 2",
      dayNumber: 5,
      theme: "Duomo, Accademia & Oltrarno",
      subtitle: "Renaissance masterpieces + artisan Florence",
      budgetEstimate: "€850–1,300",
      slots: [
        {
          time: "7:30",
          label: "Breakfast",
          description: "Early fuel — the Duomo dome climb starts at 8:00.",
          options: [
            {
              name: "Ditta Artigianale (Via dei Neri)",
              type: "food",
              cuisine: "Specialty Coffee / Brunch",
              description: "Best coffee in Florence. Asian-inspired tofu bowls, homemade granola, avocado toast. Opens early.",
              distance: "15 min walk from hotel",
              rating: "4.5/5 TripAdvisor",
              price: "€8–18",
              link: "https://www.dittaartigianale.it",
              bookingRequired: false
            },
            {
              name: "Le Vespe Cafe",
              type: "food",
              cuisine: "North American-style Brunch",
              description: "Canadian-Florentine duo serving avocado toast, breakfast wraps, fresh juices. Always a queue — arrive early.",
              distance: "20 min walk (Santa Croce area)",
              rating: "4.5/5 TripAdvisor (1,400+ reviews)",
              price: "€10–16",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d6123447-Reviews-Le_Vespe_Cafe-Florence_Tuscany.html",
              bookingRequired: false
            },
            {
              name: "Local bar near the Duomo",
              type: "food",
              cuisine: "Italian Breakfast",
              description: "Grab a cappuccino + cornetto at a bar near the cathedral so you're in position for the 8am dome opening.",
              distance: "12 min walk from hotel",
              rating: "N/A",
              price: "€3–5/person",
              link: null,
              bookingRequired: false
            }
          ]
        },
        {
          time: "8:00–9:30",
          label: "Morning Landmark",
          description: "Climb the dome FIRST — before the heat builds and the steps become unbearable.",
          options: [
            {
              name: "Climb the Duomo Dome (Brunelleschi's Cupola)",
              type: "activity",
              description: "463 steps to the top of Brunelleschi's masterpiece. Up-close view of Vasari's Last Judgment fresco, then panoramic Florence views from the lantern. Go early — no AC in the stairwell.",
              distance: "12 min walk from hotel",
              rating: "4.5/5 TripAdvisor (26,000+ reviews)",
              price: "€30/adult, €12/child (7–14), free under 6 (Brunelleschi Pass — includes Baptistery, Bell Tower, Museum)",
              link: "https://duomo.firenze.it/en/discover/dome",
              bookingRequired: true,
              bookingInfo: "Mandatory timed reservation. Sells out 2–3 weeks ahead in summer. Book at duomo.firenze.it."
            },
            {
              name: "Climb Giotto's Bell Tower (Campanile)",
              type: "activity",
              description: "414 steps — slightly easier than the dome, equally stunning views. Included in Brunelleschi Pass. No reservation needed (first-come).",
              distance: "12 min walk from hotel",
              rating: "4.5/5 TripAdvisor (13,000+ reviews)",
              price: "Included in Brunelleschi Pass (€30)",
              link: "https://duomo.firenze.it/en/discover/belltower",
              bookingRequired: false
            },
            {
              name: "Medici Chapels (Cappelle Medicee)",
              type: "activity",
              description: "Michelangelo's New Sacristy — some of his most powerful sculptural work. The Chapel of the Princes is jaw-dropping marble. Air-conditioned, near the hotel.",
              distance: "7 min walk from hotel",
              rating: "4.5/5 TripAdvisor (5,600+ reviews)",
              price: "€9/pp (or €25 combo with Bargello + Davanzati)",
              link: "https://www.b-ticket.com/b-ticket/firenzemusei/default_eng.aspx.html",
              bookingRequired: false,
              bookingInfo: "Rarely sells out."
            }
          ]
        },
        {
          time: "9:30–10:00",
          label: "Baptistery",
          description: "Right next to the Duomo — 15–20 minutes is enough.",
          options: [
            {
              name: "Battistero di San Giovanni (Baptistery)",
              type: "activity",
              description: "Ghiberti's 'Gates of Paradise' bronze doors (replicas outside, originals in the Opera Museum). Byzantine gold mosaics on the ceiling. Included in Brunelleschi Pass.",
              distance: "Adjacent to the Duomo",
              rating: "4.5/5 TripAdvisor (7,000+ reviews)",
              price: "Included in Brunelleschi Pass",
              link: "https://duomo.firenze.it/en/discover/baptistery",
              bookingRequired: false
            }
          ]
        },
        {
          time: "10:15–12:00",
          label: "Museum",
          description: "Move to an air-conditioned museum before peak heat.",
          options: [
            {
              name: "Galleria dell'Accademia (Michelangelo's David)",
              type: "activity",
              description: "See the original David plus the unfinished 'Prisoners' — Michelangelo's most haunting works. Small museum, 1–1.5 hours. Full AC.",
              distance: "10 min walk from hotel",
              rating: "4.5/5 TripAdvisor (38,000+ reviews)",
              price: "€20/pp (with reservation fee online)",
              link: "https://www.galleriaaccademiafirenze.it/en/tickets/",
              bookingRequired: true,
              bookingInfo: "Book timed entry in advance — summer morning slots sell out."
            },
            {
              name: "Museo dell'Opera del Duomo",
              type: "activity",
              description: "Often overlooked — contains the original Gates of Paradise, Donatello's Magdalene, and Michelangelo's unfinished Pietà. Included in your Brunelleschi Pass. Fully air-conditioned.",
              distance: "12 min walk from hotel (behind the Duomo)",
              rating: "4.5/5 TripAdvisor (4,300+ reviews)",
              price: "Included in Brunelleschi Pass",
              link: "https://duomo.firenze.it/en/discover/museum",
              bookingRequired: false
            },
            {
              name: "Museo Stibbert",
              type: "activity",
              description: "Off the beaten path — 50,000 items of European, Japanese, and Islamic armor and art. Feels like raiding a Victorian collector's mansion. Almost no tourists.",
              distance: "25 min walk or short taxi from hotel",
              rating: "4.5/5 TripAdvisor (1,100+ reviews)",
              price: "€10/pp",
              link: "https://www.museostibbert.it",
              bookingRequired: false
            }
          ]
        },
        {
          time: "12:00–1:00",
          label: "Lunch",
          description: "Eat near the Duomo/Accademia area before heading back for rest.",
          options: [
            {
              name: "Mercato Centrale — Upstairs Food Hall",
              type: "food",
              cuisine: "Multi-cuisine Food Hall",
              description: "The upstairs floor is a modern food hall with dedicated stalls — pizza, pasta, burgers, vegetarian, lampredotto, gelato. AC throughout. Everyone picks what they want.",
              distance: "7 min walk from hotel",
              rating: "4.0/5 TripAdvisor",
              price: "€12–20/person",
              link: "https://www.mercatocentrale.com/firenze",
              bookingRequired: false
            },
            {
              name: "Trattoria dall'Oste Chianineria",
              type: "food",
              cuisine: "Tuscan Steakhouse",
              description: "One of the best steakhouses in Florence, blocks from the Duomo. Chianina beef sourced directly. Great for a substantial lunch.",
              distance: "12 min walk from hotel",
              rating: "4.5/5 TripAdvisor (3,500+ reviews)",
              price: "€25–45/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d12439428-Reviews-Chianineria_Trattoria_Osteria_dall_Oste-Florence_Tuscany.html",
              bookingRequired: true,
              bookingInfo: "Reserve for lunch — popular spot."
            },
            {
              name: "Gustapizza",
              type: "food",
              cuisine: "Neapolitan Pizza",
              description: "Via Maggio in Oltrarno. Signature soft dough, wood-fired oven, quick and delicious. No frills — paper plates, standing room. Locals swear by it.",
              distance: "15 min walk from hotel (Oltrarno)",
              rating: "4.5/5 TripAdvisor (4,300+ reviews)",
              price: "€6–10/person",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d1155597-Reviews-Gustapizza-Florence_Tuscany.html",
              bookingRequired: false
            }
          ]
        },
        {
          time: "1:00–4:00",
          label: "Midday Rest",
          description: "Back to hotel. Peak heat avoidance.",
          options: []
        },
        {
          time: "4:30–6:00",
          label: "Oltrarno Artisan Walk",
          description: "Cross the Arno into Florence's artisan quarter. Temperatures easing.",
          options: [
            {
              name: "Leather Workshops — Via Maggio & Borgo San Jacopo",
              type: "activity",
              description: "Watch leather artisans work in small botteghe. Buy jackets, bags, wallets directly from makers — better quality and price than tourist markets.",
              distance: "12 min walk from hotel",
              rating: "N/A — neighborhood experience",
              price: "Free to browse; purchases €50–500+",
              link: "https://www.visitflorence.com/florence-neighborhoods/oltrarno.html",
              bookingRequired: false
            },
            {
              name: "Scuola del Cuoio (Leather School at Santa Croce)",
              type: "activity",
              description: "Inside the Santa Croce basilica complex. Watch artisans craft leather goods, learn the process, and shop directly. Higher quality than the San Lorenzo market.",
              distance: "18 min walk from hotel",
              rating: "4.5/5 TripAdvisor (400+ reviews)",
              price: "Free to visit; purchases vary",
              link: "https://www.scuoladelcuoio.com",
              bookingRequired: false
            },
            {
              name: "Paper Marbling Workshop (Il Papiro or Giulio Giannini e Figlio)",
              type: "activity",
              description: "Florence's traditional paper marbling craft. Giulio Giannini e Figlio has been in business since 1856 on Piazza Pitti. Browse or take a short workshop.",
              distance: "15 min walk from hotel",
              rating: "4.5/5 TripAdvisor",
              price: "Free to browse; workshops €30–50",
              link: "https://www.giuliogiannini.com",
              bookingRequired: false,
              bookingInfo: "Walk-in for browsing; workshops may need advance booking."
            }
          ]
        },
        {
          time: "6:00–7:30",
          label: "Aperitivo",
          description: "Golden hour cocktails with a view — the Florentine ritual.",
          options: [
            {
              name: "Loggia Roof Bar (Hotel Palazzo Guadagni)",
              type: "food",
              cuisine: "Cocktails / Aperitivo",
              description: "On Piazza Santo Spirito — intimate rooftop with the best negronis in Florence. €25 aperitivo deal: cocktail + bar snacks + 3 small bites. Local favorite, not touristy.",
              distance: "15 min walk from hotel (Oltrarno)",
              rating: "4.5/5 TripAdvisor",
              price: "€25/person (aperitivo package)",
              link: "https://www.tripadvisor.com/Attraction_Review-g187895-d17326834-Reviews-Loggia_Roof_Bar-Florence_Tuscany.html",
              bookingRequired: false,
              bookingInfo: "Walk in, but arrive by 6pm for a seat."
            },
            {
              name: "SE·STO on Arno (Westin Excelsior)",
              type: "food",
              cuisine: "Cocktails / Fine Dining Terrace",
              description: "6th-floor rooftop with 360° views of the Duomo, Ponte Vecchio, and Fiesole hills. Upscale cocktails, Tuscan nibbles. A splurge, but the views are unmatched.",
              distance: "5 min walk from hotel",
              rating: "4.0/5 TripAdvisor (1,400+ reviews)",
              price: "€18–25/cocktail",
              link: "https://www.sestoonarno.com",
              bookingRequired: true,
              bookingInfo: "Reserve a terrace table via their website, especially for sunset."
            },
            {
              name: "Caffè delle Oblate",
              type: "food",
              cuisine: "Casual Drinks / Coffee",
              description: "Inside the Oblate Library complex, next to the Duomo. Open terrace directly facing the dome. Beloved by students and locals — affordable drinks, zero pretension.",
              distance: "12 min walk from hotel",
              rating: "4.5/5 TripAdvisor (1,200+ reviews)",
              price: "€5–10/drink",
              link: "https://www.tripadvisor.com/Restaurant_Review-g187895-d2433470-Reviews-Caffetteria_delle_Oblate-Florence_Tuscany.html",
              bookingRequired: false
            }
          ]
        },
        {
          time: "8:30–10:30",
          label: "Dinner",
          description: "Last full dinner in Florence — make it count.",
          options: [
            {
              name: "Cibrèo Trattoria",
              type: "food",
              cuisine: "Creative Tuscan",
              description: "The informal sibling of the famous (and expensive) Cibrèo Ristorante — same kitchen, lower prices, no reservations. Creative Tuscan dishes, no pasta on the menu. Queue early.",
              distance: "18 min walk from hotel (Sant'Ambrogio)",
              rating: "4.5/5 TripAdvisor (2,600+ reviews)",
              price: "€30–45/person",
              link: "https://www.cibreofirenze.com",
              bookingRequired: false,
              bookingInfo: "No reservations — arrive by 7:30pm to queue."
            },
            {
              name: "iO — Osteria Personale",
              type: "food",
              cuisine: "Contemporary Italian (Tasting Menu)",
              description: "In Oltrarno — innovative tasting menus built around seasonal Tuscan ingredients. Intimate space, thoughtful wine pairings. A modern fine-dining experience without stuffiness.",
              distance: "15 min walk from hotel",
              rating: "4.5/5 TripAdvisor (1,200+ reviews)",
              price: "€50–70/person (tasting menu)",
              link: "https://www.osteriapersonale.it",
              bookingRequired: true,
              bookingInfo: "Book via their website or TheFork."
            },
            {
              name: "All'Antico Ristorante Cambi",
              type: "food",
              cuisine: "Traditional Tuscan",
              description: "Oltrarno institution. Rustic decor, case of cured meats at the entrance, serious bistecca. The kind of place where locals bring guests to impress them.",
              distance: "15 min walk from hotel (Oltrarno)",
              rating: "4.5/5 TripAdvisor (1,600+ reviews)",
              price: "€30–50/person",
              link: "https://www.ristorantecambi.it",
              bookingRequired: true,
              bookingInfo: "Book via TheFork or call +39 055 217134."
            },
            {
              name: "Cooking Class + Dinner (alternative to restaurant)",
              type: "food",
              cuisine: "Cooking Experience",
              description: "Make your own pasta and tiramisu with unlimited wine, then eat what you cooked. ~2.5 hours. A memorable last-night activity for the family.",
              distance: "Varies by provider (most in centro)",
              rating: "5.0/5 on GetYourGuide (thousands of reviews)",
              price: "€55–80/person",
              link: "https://www.getyourguide.com/florence-l32/florence-pasta-cooking-class-with-unlimited-wine-t552524/",
              bookingRequired: true,
              bookingInfo: "Book 2–3 days ahead on GetYourGuide. Evening sessions typically 5–8pm."
            }
          ]
        }
      ]
    }
  ]
};
