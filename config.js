window.SIMULATOR_CONFIG = {
  // Libellé affiché dans le badge en haut de page
  baremeLabel: "Barème PSU 2026",

  // Plancher et plafond mensuels de ressources retenues par la CAF (€ / mois)
  floorMonthly: 814.62,
  capMonthly: 8500,

  // Taux d'effort horaires (en décimal, ex. 0.000619 = 0,0619 %)
  // Index 0 = rang 1 enfant ... Index 7 = rang 8 enfants et +
  effortRates: [
    0.000619,
    0.000516,
    0.000413,
    0.000310,
    0.000310,
    0.000310,
    0.000310,
    0.000206
  ],

  // Paramètres du crédit d'impôt (garde d'enfant < 6 ans)
  taxCredit: {
    rate: 0.5,              // 50 %
    annualCapPerChild: 3500 // 3 500 € de dépenses / an / enfant
  },

  // Profil neutre par défaut au chargement et au clic sur "Réinitialiser"
  defaults: {
    cafAnnualIncome: 45000,
    children: 1,
    parentalCare: false,
    singleParent: false,
    aeeh: false,
    mode: "monthly",
    hoursMonth: 140,
    days: [8, 8, 8, 8, 8],
    weeks: 47,
    taxCredit: false
  }
};
