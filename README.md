# Simulateur de tarif crèche CAF (PSU 2026)

Simulateur web interactif permettant d'estimer le coût d'accueil en crèche conventionnée CAF (**Prestation de Service Unique — PSU**) à partir des revenus annuels de référence CAF (N-2), du nombre d'enfants à charge, de la situation familiale et du type de structure.

## Fonctionnalités

- **Revenus annuels de référence CAF (N-2)** : saisie via curseur ou champ numérique, conversion mensuelle automatique (`÷ 12`) et encadrement par plancher (`814,62 €/mois`) et plafond (`8 500 €/mois`) configurables.
- **Type de structure & majorations de rang** :
  - Prise en compte de la **crèche parentale** (décalage d'un cran vers le bas sur la grille de taux d'effort).
  - Prise en compte du statut **parent isolé** et d'un **enfant bénéficiaire de l'AEEH** (+1 cran par critère, dans la limite du taux plancher de `0,0206 %`).
- **Volume horaire flexible** : saisie directe en heures/mois ou calcul via un planning hebdomadaire (lundi à vendredi × nombre de semaines/an).
- **Estimation du crédit d'impôt** : option de simulation du crédit d'impôt pour garde d'enfant de moins de 6 ans (50 % des dépenses dans la limite de `3 500 €` de dépenses/an et par enfant).
- **Confidentialité** : calcul 100 % côté client dans le navigateur, sans base de données ni envoi de données personnelles vers un serveur.

## Accès en ligne

`https://petits-bourgeons.github.io/simulateur-cout-creche-psu/`

## Utilisation en local

Aucune installation de dépendances n'est requise. Ouvrez simplement `index.html` dans un navigateur web.

## Avertissement

Cette application fournit une estimation indicative basée sur le barème national CNAF PSU 2026. Le tarif horaire et la mensualité contractuels sont déterminés par le gestionnaire de la structure d'accueil selon les données CAF (CDAP), le contrat d'accueil et le règlement de fonctionnement.
