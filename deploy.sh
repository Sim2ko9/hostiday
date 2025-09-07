#!/bin/bash

# Build the project
npm run build

# Create a new branch for GitHub Pages
git checkout --orphan gh-pages

# Remove all files except dist
git rm -rf .

# Copy dist contents to root
cp -r dist/* .

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages --force

# Switch back to main
git checkout main

echo "Deployment complete! Your site should be available at:"
echo "https://yourusername.github.io/hostiday/"
