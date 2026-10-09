// Connexion à Supabase pour enregistrer les résultats anonymes.
// Laisser vide pour tester sans rien enregistrer (les événements s'affichent dans la console).
window.CONFIG = {
  SUPABASE_URL: "https://mbciadojlekqxegjxgmt.supabase.co",
  SUPABASE_KEY: "sb_publishable_vZL50FWERUYZwY0oP3WFnA_cDjAG2Jl", // clé publique « publishable » (anon), jamais la clé secrète
  VERSION: "test-10",
  // Code d'accès désactivé : application publique.
  CODE_ACCES_SHA256: ""
};
