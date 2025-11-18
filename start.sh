#!/bin/bash

# Script de lancement rapide pour Aixplore Tourism

echo "🏔️  Aixplore Tourism - Lancement"
echo "================================"
echo ""

# Vérifier si on est dans le bon dossier
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: Veuillez exécuter ce script depuis le dossier aixplore-tourism"
    exit 1
fi

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
    echo ""
fi

# Lancer le serveur de développement
echo "🚀 Démarrage du serveur de développement..."
echo ""
echo "📱 Le site sera accessible sur:"
echo "   🇫🇷 Français: http://localhost:3000/fr"
echo "   🇬🇧 English:  http://localhost:3000/en"
echo ""
echo "⏹️  Appuyez sur Ctrl+C pour arrêter le serveur"
echo ""

npm run dev

